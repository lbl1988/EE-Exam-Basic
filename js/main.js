/* ee-pro-exam v2 main.js
   依赖：data/basic-knowledge.js / data/videos.js / data/hot-points.js
         js/auth.js / js/progress.js
   功能：
   1. 方向切换 + 导航高亮
   2. bilibili iframe直放 (html5mobileplayer 防止跳转B站，移动端兼容)
   3. videos.html 一级Tab(系列) + 二级Tab(学科) + 三级Tab(子合集) 切换 + 播放器切换 + playlist + 标记掌握
   4. basic.html 渲染10公共基础卡 + 5专业基础卡(章/节展开)
   5. subjects/*.html 按subjectKey加载学科详情页
   6. hot-points.html 按学科/章/考频筛选
   7. guide/plan 锚点跳videos.html张工对应学科
*/
(function(){
  var S={}; /* S for state / services */
  S.page=document.body.dataset.page||'index';
  S.seriesTab=null; S.subjectTab=null; S.collectionTab=0;

  /* 工具 */
  S.$=function(s,root){return (root||document).querySelector(s)};
  S.$$=function(s,root){return Array.from((root||document).querySelectorAll(s))};
  S.dir=function(){return (window.EEProgress&&EEProgress._dir)?EEProgress._dir():'powerDistribution'};
  S.setDir=function(d){if(window.EEProgress&&EEProgress.setDir)EEProgress.setDir(d);
    S.$$('.dir-switch button').forEach(function(b){b.classList.toggle('active',b.dataset.dir===d)});
    if(S.onDirChange)S.onDirChange();
  };
  S.biliUrl=function(bvid,page){
    /* 统一使用 html5mobileplayer.html，和旧站保持一致，防止PC端iframe被B站屏蔽跳站 */
    page=page||1;
    return 'https://player.bilibili.com/player.html?bvid='+encodeURIComponent(bvid)
      +'&page='+page+'&high_quality=1&danmaku=0&as_wide=1'
      +'&p='+page+'&t=0&html5mobileplayer=1&vqq_resolution=1080p';
  };
  S.href=function(p){return p};
  S.anchor=function(url){location.href=url};

  /* 导航高亮 */
  S.highlightNav=function(){
    var p=S.page;
    S.$$('.nav-links a').forEach(function(a){
      var href=a.getAttribute('href')||'';
      var match=false;
      if(p==='index'&&(href==='index.html'||href==='./'||href==='/'))match=true;
      else if(p==='circuit'||p==='analog'||p==='digital'||p==='machines'||p==='power')
        match=href==='basic.html';
      else if(href===p+'.html')match=true;
      a.classList.toggle('active',match);
    });
  };

  /* === 方向切换按钮 初始化（每页挂一次） === */
  S.initDirSwitch=function(){
    var el=S.$('.dir-switch');if(!el)return;
    var d=S.dir();
    S.$$('.dir-switch button').forEach(function(b){
      b.classList.toggle('active',b.dataset.dir===d);
      b.onclick=function(){S.setDir(b.dataset.dir)};
    });
  };

  /* === basic.html 学科卡渲染 === */
  S.renderBasicCards=function(){
    var holder=document.getElementById('basic-cards');
    if(!holder)return;
    var dir=S.dir(); var base=window.BASIC?BASIC[dir]:null;
    if(!base){holder.innerHTML='<p style="color:#ef4444">基础知识数据未加载</p>';return}
    /* 分两部分：公共基础10科 / 专业基础5科 */
    var partCommon=document.getElementById('common-cards')||null;
    var partProf=document.getElementById('professional-cards')||null;
    if(partCommon) partCommon.innerHTML='';
    if(partProf) partProf.innerHTML='';
    function kpToBadges(kps){
      return kps.map(function(k){
        var c='kp-tag '+(k.freq==='high'?'high':k.freq==='mid'?'mid':'low');
        return '<span class="'+c+'">'+k.text+'</span>'
      }).join('');
    }
    function starHtml(w){var n={'★★':2,'★★★':3,'★★★★':4,'★★★★★':5}[w]||3;
      var s='';for(var i=0;i<5;i++)s+=(i<n)?'★':'☆';return '<span class="stars">'+s+'</span>'}
    function card(sub, isProf){
      var color=sub.color||'common';
      var qc = isProf ? (dir==='powerDistribution'? sub.qCountPD : sub.qCountPT) : null;
      var qLine = isProf ? ('<p style="color:#cbd5f0;font-size:13px;margin-top:4px">下午题量：约'+qc.low+'~'+qc.high+'题 ('+qc.score+') · 视频总时长 '+sub.hours+'</p>')
                        : ('<p style="color:#cbd5f0;font-size:13px;margin-top:4px">上午公共基础约 '+sub.qCountPD+' 题 ('+(sub.qCountPD*2)+' 分)</p>');
      var badges=(sub.badges||[]).map(function(t){return '<span class="badge bili">'+t+'</span>'}).join('');
      var zg= isProf && sub.zhanggongBVs ? '<span class="badge zg">张工教育</span>' : '';
      var url='';
      if(isProf) url='subjects/'+sub.key+'.html';
      var header='<div class="subject-title"><span class="subject-dot dot-'+color+'"></span>'
        +'<h3>'+sub.title+'</h3>'+zg+badges+'</div>'
        + qLine
        + (url? '<div style="margin-top:10px"><a class="btn btn-primary mini-btn" href="'+S.href(url)+'" style="display:inline-block">进入学科详情页 →</a>'
                +' <a class="btn btn-ghost mini-btn" href="videos.html#zhanggong|'+sub.key+'" style="display:inline-block">打开对应张工精讲视频</a></div>'
              : '<div style="margin-top:10px"><a class="btn btn-ghost mini-btn" href="videos.html#jiangxiaobai" style="display:inline-block">打开对应姜小白公共基础精讲</a></div>');
      var chapters='';
      sub.chapters.forEach(function(ch){
        var secHtml=(ch.sections||[]).map(function(sec){
          var v=sec.video||{};
          var vlink= v.bvid ? ' <a class="mini-btn" target="_blank" href="videos.html#'+(isProf?'zhanggong|'+sub.key:'jiangxiaobai')+'|'+v.bvid+'|'+v.page+'">🎞 对应视频 P'+v.page+'</a>' : '';
          var ct=sec.calcTip? '<span>🧮 '+sec.calcTip+'</span>':'';
          var freqTag=''; (sec.kps||[]).forEach(function(k){freqTag+='<span class="kp-tag '+(k.freq==='high'?'high':k.freq==='mid'?'mid':'low')+'">'+k.text+'</span>'});
          var typQs=(sec.typicalQ||[]).map(function(q){return '📝 '+q.year+' 题'+q.q+': <span style="color:#a5b4fc">'+q.topic+'</span> '+ (q.formula?'<br>公式: <code style="color:#fde68a;font-size:12px">'+q.formula+'</code>':'')}).join('<br>');
          var mis=sec.easyMistakes.length? ('⚠️ 易错点：'+sec.easyMistakes.map(function(m){return '<span class="kp-tag high">'+m+'</span>'}).join('')):'';
          return '<div class="section-block">'
            +'<div class="section-title"><span class="section-num">'+ch.idx+'.'+sec.idx+'</span>'+sec.name+vlink+'</div>'
            +'<div style="margin:6px 0">'+freqTag+'</div>'
            +(typQs?'<p style="font-size:13px;color:#cbd5f0;margin:6px 0 8px">'+typQs+'</p>':'')
            +mis
            +'<div class="meta-row">'+(sec.weight? '<span>考频'+starHtml(sec.weight)+'</span>':'')+ct+'</div>'
            +'</div>';
        }).join('');
        var meta='<span class="chapter-meta">章 '+ch.idx+' · '+ (ch.lectures||'') +' · 考频'+starHtml(ch.weight||'★★★')+'</span>';
        chapters += '<details class="chapter"'+(ch.idx<=2?' open':'')+'>'
          +'<summary><div><span style="font-family:monospace;color:#93c5fd">第'+String(ch.idx).padStart(2,'0')+'章</span> '+(ch.name||'')+'</div>'+meta+'</summary>'
          +'<div class="chapter-body">'+(secHtml||'<p style="color:#8ea0c6">章节讲解：'+(ch.lectures||'对应视频合集对应页P')+'</p>')+'</div>'
          +'</details>';
      });
      return '<div class="card subject-card '+color+'">'+header+chapters+'</div>';
    }
    /* 公共基础每科精简：只展开前2章，章头折叠 */
    if(partCommon) base.common.forEach(function(s){partCommon.insertAdjacentHTML('beforeend',card(s,false))});
    if(partProf) base.professional.forEach(function(s){partProf.insertAdjacentHTML('beforeend',card(s,true))});
    S.onDirChange=function(){S.renderBasicCards()};
  };

  /* === videos.html 渲染 === */
  S.initVideos=function(){
    var tabsEl=document.getElementById('video-series-tabs');
    if(!tabsEl)return;
    var dir=S.dir();
    var series=window.VIDEOS? VIDEOS[dir]:null; if(!series){tabsEl.innerHTML='视频数据未加载';return}
    /* 一级系列Tab：仅保留 张工精讲 / 姜小白公共基础 / 张工真题 三个系列 */
    var order=['zhanggong','jiangxiaobai','zhanggongZhenti'];
    tabsEl.innerHTML='';
    order.forEach(function(k){
      if(!series[k])return;
      var b=document.createElement('button');b.className='tab';b.textContent=series[k].title;
      b.dataset.series=k; tabsEl.appendChild(b);
      b.onclick=function(){S.activateSeries(k)};
    });
    var seriesNameEl=document.getElementById('active-series-name');
    var subjectTabsEl=document.getElementById('video-subject-tabs');
    var collTabsEl=document.getElementById('video-collection-tabs');
    var infoEl=document.getElementById('active-series-intro');
    var iframe=document.getElementById('bili-player');
    var playlistEl=document.getElementById('playlist');

    function seriesIsSubject(s){return s==='zhanggong' || s==='jiangxiaobai'}
    function activateCollection(seriesKey,subjectKey,collIdx){
      S.collectionTab=collIdx;
      S.$$('#video-collection-tabs .sub-tab').forEach(function(b){b.classList.toggle('active',+b.dataset.idx===collIdx)});
      var subs=series[seriesKey].subjects||series[seriesKey].collections;
      var col=null; var subjectObj=null;
      if(series[seriesKey].subjects){subjectObj=series[seriesKey].subjects[subjectKey];col=subjectObj.collections[collIdx]}
      else col=(series[seriesKey].collections||[])[0];
      var colObj=col;
      /* 章节概览 */
      var info='';
      if(subjectObj){info += '<p style="color:#cbd5f0"><b>'+subjectObj.title+'</b> · 总时长 '+subjectObj.totalHours+'</p>'
        + '<p style="color:#8ea0c6">'+subjectObj[dir==='powerDistribution'?'pdQuestions':'ptQuestions']+'</p>';}
      info += '<p style="color:#cbd5f0">当前合集：<span class="badge bili">BV '+colObj.bvid+'</span> '+colObj.label+' · '+colObj.duration+' · 总P数 '+colObj.totalPages+'</p>';
      if(colObj.chapters){
        info += '<div style="margin-top:8px"><p style="color:#fff;font-weight:600;margin-bottom:4px">章节结构：</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:8px">';
        colObj.chapters.forEach(function(ch){
          info += '<div style="background:#0e1729;padding:8px 10px;border-radius:6px;border:1px solid #2a3c66"><b style="color:#93c5fd">第'+ch.idx+'章 '+ch.name+'</b><br>'
          + '<span style="color:#8ea0c6;font-size:12px">'+(ch.lectures||'')+' · P'+ch.pages[0]+'~'+ch.pages[1]+' · 考频 '+(ch.weight||'')+'</span></div>';
        });
        info += '</div></div>';
      }
      if(infoEl)infoEl.innerHTML=info;
      /* 播放器：默认第一个精选episodes[0]，或者playlist[0] */
      var ep0=(colObj.episodes&&colObj.episodes[0])||colObj.playlist[0];
      if(iframe)iframe.src=S.biliUrl(colObj.bvid,ep0.page);
      S.renderPlaylist(colObj);
    }
    function activateSubject(seriesKey,subjectKey){
      S.subjectTab=subjectKey;
      S.$$('#video-subject-tabs .sub-tab').forEach(function(b){b.classList.toggle('active',b.dataset.subject===subjectKey)});
      var subj=series[seriesKey].subjects[subjectKey];
      if(collTabsEl){
        collTabsEl.innerHTML='';
        (subj.collections||[]).forEach(function(c,i){
          var b=document.createElement('button');b.className='sub-tab';
          b.textContent=c.label+' ('+c.totalPages+'P · '+c.duration+')';
          b.dataset.idx=i; collTabsEl.appendChild(b);
          b.onclick=function(){activateCollection(seriesKey,subjectKey,i)};
        });
      }
      activateCollection(seriesKey,subjectKey,0);
    }
    S.activateSeries=function(k){
      S.seriesTab=k;
      S.$$('#video-series-tabs .tab').forEach(function(b){b.classList.toggle('active',b.dataset.series===k)});
      var s=series[k]; if(seriesNameEl)seriesNameEl.textContent=s.title;
      if(subjectTabsEl){
        subjectTabsEl.innerHTML='';
        if(s.subjects){/* zhanggong / jiangxiaobai 有学科分Tab */
          Object.keys(s.subjects).forEach(function(sk){
            var subj=s.subjects[sk];
            var b=document.createElement('button');b.className='sub-tab';b.dataset.subject=sk;
            b.textContent=(subj.short||subj.title)+' · '+(subj.totalHours||'');
            subjectTabsEl.appendChild(b);
            b.onclick=function(){activateSubject(k,sk)};
          });
          var firstSubj=Object.keys(s.subjects)[0];
          activateSubject(k,firstSubj);
        }else{
          /* 老系列直接展示唯一collection */
          collTabsEl.innerHTML='';
          var col=(s.collections||[])[0];
          var info = '<p style="color:#cbd5f0"><b>'+s.title+'</b></p>'
            + '<p style="color:#8ea0c6">'+(s.intro||'')+'</p>'
            + (col? '<p style="color:#cbd5f0;margin-top:6px">当前合集：<span class="badge bili">BV '+col.bvid+'</span> '+col.label+' · '+col.duration+'</p>':'');
          if(infoEl)infoEl.innerHTML=info;
          if(col){
            var ep0=(col.episodes&&col.episodes[0])||col.playlist[0];
            if(iframe)iframe.src=S.biliUrl(col.bvid,ep0.page);
            S.renderPlaylist(col);
          }
        }
      }
    };
    S.renderPlaylist=function(col){
      if(!playlistEl)return;
      playlistEl.innerHTML='';
      var items=col.playlist;
      var allDone=0;
      items.forEach(function(ep){
        var row=document.createElement('div');row.className='pl-item';row.dataset.bvid=col.bvid;row.dataset.page=ep.page;
        var isDone=window.EEProgress?EEProgress.isVideoDone(S.seriesTab,col.bvid,ep.page):false;
        if(isDone){row.classList.add('done');allDone++}
        row.innerHTML='<span class="pl-idx">P'+ep.page+'</span>'
          +'<div class="pl-title">'+ep.title+'</div>'
          +'<span class="pl-dur">'+ep.duration+'</span>';
        row.onclick=function(){
          S.$$('.pl-item').forEach(function(x){x.classList.remove('active')});
          row.classList.add('active');
          if(iframe)iframe.src=S.biliUrl(col.bvid,ep.page);
          var mark=document.getElementById('mark-done-btn');
          if(mark){mark.dataset.series=S.seriesTab;mark.dataset.bvid=col.bvid;mark.dataset.page=ep.page;
            mark.classList.toggle('done',EEProgress.isVideoDone(S.seriesTab,col.bvid,ep.page));
            mark.textContent=mark.classList.contains('done')?'✓ 已掌握（点取消）':'标记本讲掌握';
          }
        };
        playlistEl.appendChild(row);
      });
      /* playlist顶部进度 */
      var pct=items.length? Math.round(allDone/items.length*100):0;
      var totalEpEl=document.getElementById('total-ep-count');
      if(totalEpEl) totalEpEl.textContent='playlist共 '+items.length+' 讲 · 已掌握 '+allDone+' · 完成度 '+pct+'%';
      var pb=document.getElementById('series-progress-bar');
      if(pb){pb.querySelector('.bar-fill').style.width=pct+'%';pb.querySelector('.bar-fill').textContent=pct+'%'}
      if(items[0]){
        var mark=document.getElementById('mark-done-btn');
        if(mark){mark.dataset.series=S.seriesTab;mark.dataset.bvid=col.bvid;mark.dataset.page=items[0].page;
          if(playlistEl.firstChild)playlistEl.firstChild.classList.add('active');
          mark.classList.toggle('done',EEProgress.isVideoDone(S.seriesTab,col.bvid,items[0].page));
          mark.textContent=mark.classList.contains('done')?'✓ 已掌握（点取消）':'标记本讲掌握';
        }
      }
    };
    document.getElementById('mark-done-btn').onclick=function(){
      var s=this.dataset.series,b=this.dataset.bvid,p=+this.dataset.page; if(!s||!b)return;
      var now=EEProgress.isVideoDone(s,b,p);
      EEProgress.markVideoDone(s,b,p,!now);
      this.classList.toggle('done',!now);
      this.textContent=(!now)?'✓ 已掌握（点取消）':'标记本讲掌握';
      /* 刷新当前playlist */
      var activeItem=S.$('.pl-item.active');
      var col=null;
      if(VIDEOS[dir][s].subjects){
        var sub=VIDEOS[dir][s].subjects[S.subjectTab];col=sub.collections[S.collectionTab]
      }else{col=VIDEOS[dir][s].collections[0]}
      if(col)S.renderPlaylist(col);
    };
    S.onDirChange=function(){S.initVideos()};
    /* 处理hash路由：#zhanggong|subjectKey|bvid|page  */
    var hash=decodeURIComponent(location.hash.replace(/^#/,''));
    var initialSeries='zhanggong', initialSubj=null, initialBV=null, initialPage=null;
    if(hash){
      var parts=hash.split('|'); initialSeries=parts[0]||'zhanggong';
      initialSubj=parts[1]||null; initialBV=parts[2]||null; initialPage=parts[3]?+parts[3]:null;
    }
    S.activateSeries(initialSeries);
    if(initialSubj && series[initialSeries].subjects && series[initialSeries].subjects[initialSubj]){
      activateSubject(initialSeries,initialSubj);
      /* 如果指定了BV，自动切到对应collection + 点击对应playlist项 */
      if(initialBV){
        var subs=series[initialSeries].subjects[initialSubj];
        var idx=subs.collections.findIndex(function(c){return c.bvid===initialBV});
        if(idx>=0){activateCollection(initialSeries,initialSubj,idx);
          setTimeout(function(){
            var target=S.$('.pl-item[data-page="'+initialPage+'"][data-bvid="'+initialBV+'"]');
            if(target)target.click();
            if(target)target.scrollIntoView({behavior:'smooth',block:'center'});
          },300);
        }
      }
    }else if(initialBV){/* 老系列直接切P */
      setTimeout(function(){
        var target=S.$('.pl-item[data-page="'+initialPage+'"][data-bvid="'+initialBV+'"]');
        if(target)target.click();
      },300);
    }
  };

  /* === subjects/xxx.html 学科详情页渲染 === */
  S.initSubjectPage=function(subjectKey){
    var dir=S.dir(); var base=BASIC[dir].professional.find(function(x){return x.key===subjectKey});
    if(!base){document.body.innerHTML='<h2>学科数据缺失</h2>';return}
    document.title=base.title+' · 注册电气工程师基础考试2026';
    var hdr=document.getElementById('subject-header');
    var h2=document.getElementById('subject-h2');
    var qc=dir==='powerDistribution'? base.qCountPD:base.qCountPT;
    if(hdr)hdr.innerHTML='<div class="subject-title"><span class="subject-dot dot-'+base.color+'"></span>'
      +'<h1>'+base.title+'</h1><span class="badge zg official">张工教育精讲</span>'
      + base.zhanggongBVs.map(function(b){return '<span class="badge bili">BV '+b+'</span>'}).join('')
      +'</div><p style="color:#cbd5f0;margin-top:10px">下午段题量约 '+qc.low+'~'+qc.high+' 题（'+qc.score+'）· 视频总时长 '+base.hours
      +' · <a href="videos.html#zhanggong|'+subjectKey+'" style="color:#93c5fd">打开张工精讲播放器 →</a></p>';
    if(h2)h2.textContent=base.chapters.length+' 章，覆盖全部核心考点 · 章→节→知识点→典型真题→视频锚点 四层级';
    var body=document.getElementById('subject-body');
    function starHtml(w){var n={'★★':2,'★★★':3,'★★★★':4,'★★★★★':5}[w]||3;var s='';for(var i=0;i<5;i++)s+=i<n?'★':'☆';return '<span class="stars">'+s+'</span>'}
    body.innerHTML='';
    base.chapters.forEach(function(ch){
      var secs=(ch.sections||[]).map(function(sec){
        var v=sec.video||{};
        var vlink = v.bvid? '<a class="mini-btn" href="videos.html#zhanggong|'+subjectKey+'|'+v.bvid+'|'+v.page+'" target="_blank">🎞 精讲视频 P'+v.page+(v.epTitle?' · '+v.epTitle:'')+'</a>' : '';
        var tags=sec.kps.map(function(k){return '<span class="kp-tag '+(k.freq==='high'?'high':k.freq==='mid'?'mid':'low')+'">'+k.text+'</span>'}).join('');
        var typ=(sec.typicalQ||[]).map(function(q){return '<div style="padding:4px 10px;margin:3px 0;background:#0e1729;border-radius:4px;border-left:3px solid #a78bfa;font-size:13px;color:#cbd5f0">'
          +'<b>'+q.year+'·题'+q.q+'</b> '+q.topic+(q.formula?'<br><code style="color:#fde68a">'+q.formula+'</code>':'')+'</div>'}).join('');
        var mis=(sec.easyMistakes||[]).map(function(m){return '<span class="kp-tag high">⚠️ '+m+'</span>'}).join('');
        var ct=sec.calcTip? '<span>🧮 '+sec.calcTip+'</span>':'';
        var markChap='<button class="mini-btn" data-subject="'+subjectKey+'" data-chapter="1" data-idx="'+ch.idx+'" data-ee-progress>标记本章掌握</button>';
        return '<div class="section-block">'
          +'<div class="section-title"><span class="section-num">'+ch.idx+'.'+sec.idx+'</span>'+sec.name+'</div>'
          +'<div style="margin:4px 0 8px">'+vlink+markChap+'</div>'
          + (tags?'<p style="margin:4px 0">'+tags+'</p>':'')
          + (typ?typ:'')
          + (mis?'<div style="margin-top:8px">'+mis+'</div>':'')
          +'<div class="meta-row">'+(sec.weight?'<span>节考频 '+starHtml(sec.weight)+'</span>':'')+ct+'</div>'
          +'</div>';
      }).join('');
      var meta='章·'+(ch.lectures||'')+' · P'+(ch.pages?ch.pages[0]+'~'+ch.pages[1]:'详见子节')+' · 考频'+starHtml(ch.weight||'★★★');
      var chapt=document.createElement('details');chapt.className='chapter';chapt.open=ch.idx<=2;
      chapt.innerHTML='<summary><div style="font-weight:700"><span style="color:#93c5fd;font-family:monospace;margin-right:10px">第'+String(ch.idx).padStart(2,'0')+'章</span>'+ch.name+'</div>'
        +'<span class="chapter-meta">'+meta+'</span></summary><div class="chapter-body">'+(secs||'<p style="color:#8ea0c6">本章对应精讲视频对应P号</p>')+'</div>';
      body.appendChild(chapt);
    });
    /* 学科掌握进度 */
    var tot=base.chapters.length;var done=base.chapters.filter(function(c,i){return EEProgress.isChapterDone(subjectKey,i+1)}).length;
    var pct=Math.round(done/tot*100);
    var p=document.getElementById('subject-progress');
    if(p) p.innerHTML='<b>学科完成度</b>：已掌握 '+done+'/'+tot+' 章（'+pct+'%） · 每章看完视频后点"标记本章掌握"即可累计<progress value="'+pct+'" max="100" style="width:100%"></progress>';
    /* 标记章节掌握按钮 */
    body.querySelectorAll('[data-chapter]').forEach(function(btn){
      var idx=+btn.dataset.idx;
      if(EEProgress.isChapterDone(subjectKey,idx)){btn.classList.add('done');btn.textContent='✓ 本章已掌握'}
      btn.onclick=function(){
        var now=EEProgress.isChapterDone(subjectKey,idx);
        EEProgress.markChapterDone(subjectKey,idx,!now);
        btn.classList.toggle('done',!now);btn.textContent=(!now)?'✓ 本章已掌握':'标记本章掌握';
        /* 重算学科进度条 */
        var d=base.chapters.filter(function(c,i){return EEProgress.isChapterDone(subjectKey,i+1)}).length;
        var pc=Math.round(d/tot*100);
        if(p) p.innerHTML='<b>学科完成度</b>：已掌握 '+d+'/'+tot+' 章（'+pc+'%） · 每章看完视频后点"标记本章掌握"即可累计<progress value="'+pc+'" max="100" style="width:100%"></progress>';
      };
    });
    /* 高频考点横切卡片 */
    var hpSection=document.getElementById('subject-hot-points');
    if(hpSection && window.HOT_POINTS){
      var list=HOT_POINTS.filter(function(p){return p.subjectKey===subjectKey});
      hpSection.innerHTML='<h3>本章相关高频考点速查 ('+list.length+' 条)</h3>'
        +list.map(function(p){return '<div class="card subject-card '+base.color+'" style="padding:12px;margin:6px 0"><b style="color:#fff">'+p.name+'</b> · <span class="stars">'+(p.stars||'★★★')+'</span>'
        +'<p style="color:#cbd5f0;font-size:13px;margin:4px 0">公式：<code style="color:#fde68a">'+p.formula+'</code></p>'
        +'<div style="color:#8ea0c6;font-size:12px">📅 '+p.years+' · 🧭 难度'+p.diff+' · ⚠️ 易错：'+p.mistake+'</div>'
        +'</div>'}).join('');
    }
    S.onDirChange=function(){S.initSubjectPage(subjectKey)};
  };

  /* === hot-points.html 筛选 === */
  S.initHotPoints=function(){
    var el=document.getElementById('hot-points-body'); if(!el)return;
    var f=document.getElementById('hp-filter');
    if(!HOT_POINTS){el.innerHTML='<p>数据未加载</p>';return}
    /* 筛选器初始化 */
    var opts= [{k:'all',name:'全部学科'}].concat(BASIC.powerDistribution.professional.map(function(s){return{k:s.key,name:s.title}}));
    if(f) f.innerHTML= '<label style="color:#8ea0c6;margin-right:6px">按学科：</label><select id="hp-subject" class="mini-btn" style="background:#1a2845;color:#fff">'
      + opts.map(function(o){return '<option value="'+o.k+'">'+o.name+'</option>'}).join('')
      + '</select> <label style="color:#8ea0c6;margin:0 6px 0 14px">按考频：</label><select id="hp-stars" class="mini-btn" style="background:#1a2845;color:#fff">'
      + ['不限 ★~★★★★★','仅 ★★★★★','仅 ★★★★ 及以上','仅 ★★★ 及以上'].map(function(v,i){return '<option value="'+[0,5,4,3][i]+'">'+v+'</option>'}).join('')
      + '</select>';
    function render(){
      var sb=document.getElementById('hp-subject').value;
      var st=+document.getElementById('hp-stars').value;
      var list=HOT_POINTS.filter(function(p){
        if(sb!=='all' && p.subjectKey!==sb) return false;
        var n={'★★':2,'★★★':3,'★★★★':4,'★★★★★':5}[p.stars]||3;
        if(st>0 && n<st) return false; return true;
      });
      el.innerHTML=list.map(function(p){
        var sub=(BASIC.powerDistribution.professional.find(function(x){return x.key===p.subjectKey})||{color:'common'});
        return '<div class="card subject-card '+sub.color+'"><h4>'+p.name+'</h4>'
          +'<div style="margin:4px 0"><span class="badge keytag">难度 '+p.diff+'/5</span><span class="badge bili">'+p.stars+' 考频</span><span class="badge zg">📅 '+p.years+'</span></div>'
          +'<p style="color:#cbd5f0;margin:8px 0"><b>核心公式：</b><code style="color:#fde68a;font-size:14px;background:#0e1729;padding:2px 6px;border-radius:4px">'+p.formula+'</code></p>'
          +'<p style="color:#8ea0c6;font-size:13px">⚠️ 典型易错：'+p.mistake+'</p>'
          +'<p style="margin-top:8px"><a class="mini-btn" href="subjects/'+p.subjectKey+'.html#ch-'+p.ch+'">打开学科详情章 '+p.ch+' 节 '+p.sec+' →</a>'
          +' <a class="mini-btn" href="videos.html#zhanggong|'+p.subjectKey+'">打开对应张工精讲视频 →</a></p></div>';
      }).join('');
    }
    document.getElementById('hp-subject').onchange=render;
    document.getElementById('hp-stars').onchange=render;
    render();
  };

  /* 首页学习进度面板 */
  S.renderHomeProgress=function(){
    var box=document.getElementById('progress-panel'); if(!box)return;
    var dir=S.dir(); var base=BASIC[dir].professional; if(!base)return;
    var grid=document.getElementById('progress-grid'); if(!grid)return;
    var totalCh=0,doneCh=0,totalEp=0,doneEp=0;
    var series=VIDEOS[dir].zhanggong;
    Object.keys(series.subjects).forEach(function(sk){
      var sub=base.find(function(x){return x.key===sk});if(!sub)return;
      var chT=sub.chapters.length, chD=sub.chapters.filter(function(c,i){return EEProgress.isChapterDone(sk,i+1)}).length;
      totalCh+=chT; doneCh+=chD;
      var collections=series.subjects[sk].collections||[];
      collections.forEach(function(col){
        var t=col.playlist.length,d=0; col.playlist.forEach(function(ep){if(EEProgress.isVideoDone('zhanggong',col.bvid,ep.page))d++});
        totalEp+=t; doneEp+=d;
      });
    });
    var todone=EEProgress.todayDoneCount?EEProgress.todayDoneCount():0;
    box.querySelector('.progress-stats').innerHTML='<div><b>今日完成</b>：'+todone+' 个掌握节点</div>'
      +'<div><b>张工专业基础总章节</b>：已掌握 '+doneCh+'/'+totalCh+' 章 ('+Math.round(doneCh/totalCh*100)+'%)</div>'
      +'<div><b>张工专业基础总讲次</b>：已掌握 '+doneEp+'/'+totalEp+' 讲 ('+Math.round(doneEp/totalEp*100)+'%)</div>';
    grid.innerHTML='';
    base.forEach(function(sub){
      var chT=sub.chapters.length; var chD=sub.chapters.filter(function(c,i){return EEProgress.isChapterDone(sub.key,i+1)}).length;
      var pct=Math.round(chD/chT*100);
      grid.insertAdjacentHTML('beforeend','<div class="progress-item"><div class="name"><span class="subject-dot dot-'+sub.color+'"></span> '+sub.title+'</div>'
        +'<div class="pct">'+pct+'%</div><div class="bar"><div class="bar-fill" style="width:'+pct+'%"></div></div>'
        +'<div style="font-size:12px;color:#8ea0c6;margin-top:4px">章节 '+chD+'/'+chT+' · <a href="subjects/'+sub.key+'.html" style="color:#93c5fd">去学习 →</a></div>'
        +'</div>');
    });
  };

  /* 启动 */
  document.addEventListener('DOMContentLoaded',function(){
    S.initDirSwitch(); S.highlightNav();
    S.renderBasicCards(); S.initVideos();
    S.initHotPoints();
    if(S.renderHomeProgress)S.renderHomeProgress();
    if(window.EEProgress&&EEProgress.refresh)EEProgress.refresh();
  });
  window.MainEE = S;
})();
