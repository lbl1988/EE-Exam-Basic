/* ee-pro-exam v2 main.js
   ä¾èµï¼data/basic-knowledge.js / data/videos.js / data/hot-points.js
         js/auth.js / js/progress.js
   åè½ï¼
   1. æ¹ååæ¢ + å¯¼èªé«äº®
   2. bilibili iframeç´æ¾ (html5mobileplayer é²æ­¢è·³è½¬Bç«ï¼ç§»å¨ç«¯å¼å®¹)
   3. videos.html ä¸çº§Tab(ç³»å) + äºçº§Tab(å­¦ç§) + ä¸çº§Tab(å­åé) åæ¢ + æ­æ¾å¨åæ¢ + playlist + æ è®°ææ¡
   4. basic.html æ¸²æ10å¬å±åºç¡å¡ + 5ä¸ä¸åºç¡å¡(ç« /èå±å¼)
   5. subjects/*.html æsubjectKeyå è½½å­¦ç§è¯¦æé¡µ
   6. hot-points.html æå­¦ç§/ç« /èé¢ç­é
   7. guide/plan éç¹è·³videos.htmlå¼ å·¥å¯¹åºå­¦ç§
*/
(function(){
  var S={}; /* S for state / services */
  S.page=document.body.dataset.page||'index';
  S.seriesTab=null; S.subjectTab=null; S.collectionTab=0;

  /* å·¥å· */
  S.$=function(s,root){return (root||document).querySelector(s)};
  S.$$=function(s,root){return Array.from((root||document).querySelectorAll(s))};
  S.dir=function(){return (window.EEProgress&&EEProgress._dir)?EEProgress._dir():'powerDistribution'};
  S.setDir=function(d){if(window.EEProgress&&EEProgress.setDir)EEProgress.setDir(d);
    S.$$('.dir-switch button').forEach(function(b){b.classList.toggle('active',b.dataset.dir===d)});
    if(S.onDirChange)S.onDirChange();
  };
  S.biliUrl=function(bvid,page){
    /* ç»ä¸ä½¿ç¨ html5mobileplayer.htmlï¼åæ§ç«ä¿æä¸è´ï¼é²æ­¢PCç«¯iframeè¢«Bç«å±è½è·³ç« */
    page=page||1;
    return 'https://player.bilibili.com/player.html?bvid='+encodeURIComponent(bvid)
      +'&page='+page+'&high_quality=1&danmaku=0&as_wide=1'
      +'&p='+page+'&t=0&html5mobileplayer=1&vqq_resolution=1080p';
  };
  S.href=function(p){return p};
  S.anchor=function(url){location.href=url};

  /* å¯¼èªé«äº® */
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

  /* === æ¹ååæ¢æé® åå§åï¼æ¯é¡µæä¸æ¬¡ï¼ === */
  S.initDirSwitch=function(){
    var el=S.$('.dir-switch');if(!el)return;
    var d=S.dir();
    S.$$('.dir-switch button').forEach(function(b){
      b.classList.toggle('active',b.dataset.dir===d);
      b.onclick=function(){S.setDir(b.dataset.dir)};
    });
  };

  /* === basic.html å­¦ç§å¡æ¸²æ === */
  S.renderBasicCards=function(){
    var holder=document.getElementById('basic-cards');
    if(!holder)return;
    var dir=S.dir(); var base=window.BASIC?BASIC[dir]:null;
    if(!base){holder.innerHTML='<p style="color:#ef4444">åºç¡ç¥è¯æ°æ®æªå è½½</p>';return}
    /* åä¸¤é¨åï¼å¬å±åºç¡10ç§ / ä¸ä¸åºç¡5ç§ */
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
    function starHtml(w){var n={'ââ':2,'âââ':3,'ââââ':4,'âââââ':5}[w]||3;
      var s='';for(var i=0;i<5;i++)s+=(i<n)?'â':'â';return '<span class="stars">'+s+'</span>'}
    function card(sub, isProf){
      var color=sub.color||'common';
      var qc = isProf ? (dir==='powerDistribution'? sub.qCountPD : sub.qCountPT) : null;
      var qLine = isProf ? ('<p style="color:#cbd5f0;font-size:13px;margin-top:4px">ä¸åé¢éï¼çº¦'+qc.low+'~'+qc.high+'é¢ ('+qc.score+') Â· è§é¢æ»æ¶é¿ '+sub.hours+'</p>')
                        : ('<p style="color:#cbd5f0;font-size:13px;margin-top:4px">ä¸åå¬å±åºç¡çº¦ '+sub.qCountPD+' é¢ ('+(sub.qCountPD*2)+' å)</p>');
      var badges=(sub.badges||[]).map(function(t){return '<span class="badge bili">'+t+'</span>'}).join('');
      var zg= isProf && sub.zhanggongBVs ? '<span class="badge zg">å¼ å·¥æè²</span>' : '';
      var url='';
      if(isProf) url='subjects/'+sub.key+'.html';
      var header='<div class="subject-title"><span class="subject-dot dot-'+color+'"></span>'
        +'<h3>'+sub.title+'</h3>'+zg+badges+'</div>'
        + qLine
        + (url? '<div style="margin-top:10px"><a class="btn btn-primary mini-btn" href="'+S.href(url)+'" style="display:inline-block">è¿å¥å­¦ç§è¯¦æé¡µ â</a>'
                +' <a class="btn btn-ghost mini-btn" href="videos.html#zhanggong|'+sub.key+'" style="display:inline-block">æå¼å¯¹åºå¼ å·¥ç²¾è®²è§é¢</a></div>'
              : '<div style="margin-top:10px"><a class="btn btn-ghost mini-btn" href="videos.html#jiangxiaobai" style="display:inline-block">æå¼å¯¹åºå§å°ç½å¬å±åºç¡ç²¾è®²</a></div>');
      var chapters='';
      sub.chapters.forEach(function(ch){
        var secHtml=(ch.sections||[]).map(function(sec){
          var v=sec.video||{};
          var vlink= v.bvid ? ' <a class="mini-btn" target="_blank" href="videos.html#'+(isProf?'zhanggong|'+sub.key:'jiangxiaobai')+'|'+v.bvid+'|'+v.page+'">ð å¯¹åºè§é¢ P'+v.page+'</a>' : '';
          var ct=sec.calcTip? '<span>ð§® '+sec.calcTip+'</span>':'';
          var freqTag=''; (sec.kps||[]).forEach(function(k){freqTag+='<span class="kp-tag '+(k.freq==='high'?'high':k.freq==='mid'?'mid':'low')+'">'+k.text+'</span>'});
          var typQs=(sec.typicalQ||[]).map(function(q){return 'ð '+q.year+' é¢'+q.q+': <span style="color:#a5b4fc">'+q.topic+'</span> '+ (q.formula?'<br>å¬å¼: <code style="color:#fde68a;font-size:12px">'+q.formula+'</code>':'')}).join('<br>');
          var mis=sec.easyMistakes.length? ('â ï¸ æéç¹ï¼'+sec.easyMistakes.map(function(m){return '<span class="kp-tag high">'+m+'</span>'}).join('')):'';
          return '<div class="section-block">'
            +'<div class="section-title"><span class="section-num">'+ch.idx+'.'+sec.idx+'</span>'+sec.name+vlink+'</div>'
            +'<div style="margin:6px 0">'+freqTag+'</div>'
            +(typQs?'<p style="font-size:13px;color:#cbd5f0;margin:6px 0 8px">'+typQs+'</p>':'')
            +mis
            +'<div class="meta-row">'+(sec.weight? '<span>èé¢'+starHtml(sec.weight)+'</span>':'')+ct+'</div>'
            +'</div>';
        }).join('');
        var meta='<span class="chapter-meta">ç«  '+ch.idx+' Â· '+ (ch.lectures||'') +' Â· èé¢'+starHtml(ch.weight||'âââ')+'</span>';
        chapters += '<details class="chapter"'+(ch.idx<=2?' open':'')+'>'
          +'<summary><div><span style="font-family:monospace;color:#93c5fd">ç¬¬'+String(ch.idx).padStart(2,'0')+'ç« </span> '+(ch.name||'')+'</div>'+meta+'</summary>'
          +'<div class="chapter-body">'+(secHtml||'<p style="color:#8ea0c6">ç« èè®²è§£ï¼'+(ch.lectures||'å¯¹åºè§é¢åéå¯¹åºé¡µP')+'</p>')+'</div>'
          +'</details>';
      });
      return '<div class="card subject-card '+color+'">'+header+chapters+'</div>';
    }
    /* å¬å±åºç¡æ¯ç§ç²¾ç®ï¼åªå±å¼å2ç« ï¼ç« å¤´æå  */
    if(partCommon) base.common.forEach(function(s){partCommon.insertAdjacentHTML('beforeend',card(s,false))});
    if(partProf) base.professional.forEach(function(s){partProf.insertAdjacentHTML('beforeend',card(s,true))});
    S.onDirChange=function(){S.renderBasicCards()};
  };

  /* === videos.html æ¸²æ === */
  S.initVideos=function(){
    var tabsEl=document.getElementById('video-series-tabs');
    if(!tabsEl)return;
    var dir=S.dir();
    var series=window.VIDEOS? VIDEOS[dir]:null; if(!series){tabsEl.innerHTML='è§é¢æ°æ®æªå è½½';return}
    /* ä¸çº§ç³»åTabï¼ä»ä¿ç å¼ å·¥ç²¾è®² / å§å°ç½å¬å±åºç¡ / å¼ å·¥çé¢ ä¸ä¸ªç³»å */
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
    var video=document.getElementById('mp4-player');
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
      /* ç« èæ¦è§ */
      var info='';
      if(subjectObj){info += '<p style="color:#cbd5f0"><b>'+subjectObj.title+'</b> Â· æ»æ¶é¿ '+subjectObj.totalHours+'</p>'
        + '<p style="color:#8ea0c6">'+subjectObj[dir==='powerDistribution'?'pdQuestions':'ptQuestions']+'</p>';}
      info += '<p style="color:#cbd5f0">å½ååéï¼<span class="badge bili">BV '+colObj.bvid+'</span> '+colObj.label+' Â· '+colObj.duration+' Â· æ»Pæ° '+colObj.totalPages+'</p>';
      if(colObj.chapters){
        info += '<div style="margin-top:8px"><p style="color:#fff;font-weight:600;margin-bottom:4px">ç« èç»æï¼</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:8px">';
        colObj.chapters.forEach(function(ch){
          info += '<div style="background:#0e1729;padding:8px 10px;border-radius:6px;border:1px solid #2a3c66"><b style="color:#93c5fd">ç¬¬'+ch.idx+'ç«  '+ch.name+'</b><br>'
          + '<span style="color:#8ea0c6;font-size:12px">'+(ch.lectures||'')+' Â· P'+ch.pages[0]+'~'+ch.pages[1]+' Â· èé¢ '+(ch.weight||'')+'</span></div>';
        });
        info += '</div></div>';
      }
      if(infoEl)infoEl.innerHTML=info;
      /* æ­æ¾å¨ï¼é»è®¤ç¬¬ä¸ä¸ªç²¾éepisodes[0]ï¼æèplaylist[0] */
      var ep0=(colObj.episodes&&colObj.episodes[0])||colObj.playlist[0];
      if(colObj.isMP4){
        if(iframe)iframe.style.display='none';
        if(video){video.style.display='';video.src=ep0.mp4||'';}
      }else{
        if(video)video.style.display='none';
        if(iframe){iframe.style.display='';iframe.src=S.biliUrl(colObj.bvid,ep0.page)};
      }
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
          b.textContent=c.label+' ('+c.totalPages+'P Â· '+c.duration+')';
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
        if(s.subjects){/* zhanggong / jiangxiaobai æå­¦ç§åTab */
          Object.keys(s.subjects).forEach(function(sk){
            var subj=s.subjects[sk];
            var b=document.createElement('button');b.className='sub-tab';b.dataset.subject=sk;
            var cnt = (subj.collections && subj.collections[0]) ? subj.collections[0].totalPages : ''; b.textContent=(subj.short||subj.title)+' Â· '+(cnt || subj.totalHours || '');
            subjectTabsEl.appendChild(b);
            b.onclick=function(){activateSubject(k,sk)};
          });
          var firstSubj=Object.keys(s.subjects)[0];
          activateSubject(k,firstSubj);
        }else{
          /* èç³»åç´æ¥å±ç¤ºå¯ä¸collection */
          collTabsEl.innerHTML='';
          var col=(s.collections||[])[0];
          var info = '<p style="color:#cbd5f0"><b>'+s.title+'</b></p>'
            + '<p style="color:#8ea0c6">'+(s.intro||'')+'</p>'
            + (col? '<p style="color:#cbd5f0;margin-top:6px">å½ååéï¼<span class="badge bili">BV '+col.bvid+'</span> '+col.label+' Â· '+col.duration+'</p>':'');
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
          +'<span class="pl-dur">'+(ep.duration||'')+'</span>';
        row.onclick=function(){
          S.$$('.pl-item').forEach(function(x){x.classList.remove('active')});
          row.classList.add('active');
          if(col.isMP4){
            if(iframe)iframe.style.display='none';
            if(video){video.style.display='';video.src=ep.mp4||'';}
          }else{
            if(video)video.style.display='none';
            if(iframe){iframe.style.display='';iframe.src=S.biliUrl(col.bvid,ep.page)};
          }
          var mark=document.getElementById('mark-done-btn');
          if(mark){mark.dataset.series=S.seriesTab;mark.dataset.bvid=col.bvid;mark.dataset.page=ep.page;
            mark.classList.toggle('done',EEProgress.isVideoDone(S.seriesTab,col.bvid,ep.page));
            mark.textContent=mark.classList.contains('done')?'â å·²ææ¡ï¼ç¹åæ¶ï¼':'æ è®°æ¬è®²ææ¡';
          }
        };
        playlistEl.appendChild(row);
      });
      /* playlisté¡¶é¨è¿åº¦ */
      var pct=items.length? Math.round(allDone/items.length*100):0;
      var totalEpEl=document.getElementById('total-ep-count');
      if(totalEpEl) totalEpEl.textContent='playlistå± '+items.length+' è®² Â· å·²ææ¡ '+allDone+' Â· å®æåº¦ '+pct+'%';
      var pb=document.getElementById('series-progress-bar');
      if(pb){pb.querySelector('.bar-fill').style.width=pct+'%';pb.querySelector('.bar-fill').textContent=pct+'%'}
      if(items[0]){
        var mark=document.getElementById('mark-done-btn');
        if(mark){mark.dataset.series=S.seriesTab;mark.dataset.bvid=col.bvid;mark.dataset.page=items[0].page;
          if(playlistEl.firstChild)playlistEl.firstChild.classList.add('active');
          mark.classList.toggle('done',EEProgress.isVideoDone(S.seriesTab,col.bvid,items[0].page));
          mark.textContent=mark.classList.contains('done')?'â å·²ææ¡ï¼ç¹åæ¶ï¼':'æ è®°æ¬è®²ææ¡';
        }
      }
    };
    document.getElementById('mark-done-btn').onclick=function(){
      var s=this.dataset.series,b=this.dataset.bvid,p=+this.dataset.page; if(!s||!b)return;
      var now=EEProgress.isVideoDone(s,b,p);
      EEProgress.markVideoDone(s,b,p,!now);
      this.classList.toggle('done',!now);
      this.textContent=(!now)?'â å·²ææ¡ï¼ç¹åæ¶ï¼':'æ è®°æ¬è®²ææ¡';
      /* å·æ°å½åplaylist */
      var activeItem=S.$('.pl-item.active');
      var col=null;
      if(VIDEOS[dir][s].subjects){
        var sub=VIDEOS[dir][s].subjects[S.subjectTab];col=sub.collections[S.collectionTab]
      }else{col=VIDEOS[dir][s].collections[0]}
      if(col)S.renderPlaylist(col);
    };
    S.onDirChange=function(){S.initVideos()};
    /* å¤çhashè·¯ç±ï¼#zhanggong|subjectKey|bvid|page  */
    var hash=decodeURIComponent(location.hash.replace(/^#/,''));
    var initialSeries='zhanggong', initialSubj=null, initialBV=null, initialPage=null;
    if(hash){
      var parts=hash.split('|'); initialSeries=parts[0]||'zhanggong';
      initialSubj=parts[1]||null; initialBV=parts[2]||null; initialPage=parts[3]?+parts[3]:null;
    }
    S.activateSeries(initialSeries);
    if(initialSubj && series[initialSeries].subjects && series[initialSeries].subjects[initialSubj]){
      activateSubject(initialSeries,initialSubj);
      /* å¦ææå®äºBVï¼èªå¨åå°å¯¹åºcollection + ç¹å»å¯¹åºplaylisté¡¹ */
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
    }else if(initialBV){/* èç³»åç´æ¥åP */
      setTimeout(function(){
        var target=S.$('.pl-item[data-page="'+initialPage+'"][data-bvid="'+initialBV+'"]');
        if(target)target.click();
      },300);
    }
  };

  /* === subjects/xxx.html å­¦ç§è¯¦æé¡µæ¸²æ === */
  S.initSubjectPage=function(subjectKey){
    var dir=S.dir(); var base=BASIC[dir].professional.find(function(x){return x.key===subjectKey});
    if(!base){document.body.innerHTML='<h2>å­¦ç§æ°æ®ç¼ºå¤±</h2>';return}
    document.title=base.title+' Â· æ³¨åçµæ°å·¥ç¨å¸åºç¡èè¯2026';
    var hdr=document.getElementById('subject-header');
    var h2=document.getElementById('subject-h2');
    var qc=dir==='powerDistribution'? base.qCountPD:base.qCountPT;
    if(hdr)hdr.innerHTML='<div class="subject-title"><span class="subject-dot dot-'+base.color+'"></span>'
      +'<h1>'+base.title+'</h1><span class="badge zg official">å¼ å·¥æè²ç²¾è®²</span>'
      + base.zhanggongBVs.map(function(b){return '<span class="badge bili">BV '+b+'</span>'}).join('')
      +'</div><p style="color:#cbd5f0;margin-top:10px">ä¸åæ®µé¢éçº¦ '+qc.low+'~'+qc.high+' é¢ï¼'+qc.score+'ï¼Â· è§é¢æ»æ¶é¿ '+base.hours
      +' Â· <a href="videos.html#zhanggong|'+subjectKey+'" style="color:#93c5fd">æå¼å¼ å·¥ç²¾è®²æ­æ¾å¨ â</a></p>';
    if(h2)h2.textContent=base.chapters.length+' ç« ï¼è¦çå¨é¨æ ¸å¿èç¹ Â· ç« âèâç¥è¯ç¹âå¸åçé¢âè§é¢éç¹ åå±çº§';
    var body=document.getElementById('subject-body');
    function starHtml(w){var n={'ââ':2,'âââ':3,'ââââ':4,'âââââ':5}[w]||3;var s='';for(var i=0;i<5;i++)s+=i<n?'â':'â';return '<span class="stars">'+s+'</span>'}
    body.innerHTML='';
    base.chapters.forEach(function(ch){
      var secs=(ch.sections||[]).map(function(sec){
        var v=sec.video||{};
        var vlink = v.bvid? '<a class="mini-btn" href="videos.html#zhanggong|'+subjectKey+'|'+v.bvid+'|'+v.page+'" target="_blank">ð ç²¾è®²è§é¢ P'+v.page+(v.epTitle?' Â· '+v.epTitle:'')+'</a>' : '';
        var tags=sec.kps.map(function(k){return '<span class="kp-tag '+(k.freq==='high'?'high':k.freq==='mid'?'mid':'low')+'">'+k.text+'</span>'}).join('');
        var typ=(sec.typicalQ||[]).map(function(q){return '<div style="padding:4px 10px;margin:3px 0;background:#0e1729;border-radius:4px;border-left:3px solid #a78bfa;font-size:13px;color:#cbd5f0">'
          +'<b>'+q.year+'Â·é¢'+q.q+'</b> '+q.topic+(q.formula?'<br><code style="color:#fde68a">'+q.formula+'</code>':'')+'</div>'}).join('');
        var mis=(sec.easyMistakes||[]).map(function(m){return '<span class="kp-tag high">â ï¸ '+m+'</span>'}).join('');
        var ct=sec.calcTip? '<span>ð§® '+sec.calcTip+'</span>':'';
        var markChap='<button class="mini-btn" data-subject="'+subjectKey+'" data-chapter="1" data-idx="'+ch.idx+'" data-ee-progress>æ è®°æ¬ç« ææ¡</button>';
        return '<div class="section-block">'
          +'<div class="section-title"><span class="section-num">'+ch.idx+'.'+sec.idx+'</span>'+sec.name+'</div>'
          +'<div style="margin:4px 0 8px">'+vlink+markChap+'</div>'
          + (tags?'<p style="margin:4px 0">'+tags+'</p>':'')
          + (typ?typ:'')
          + (mis?'<div style="margin-top:8px">'+mis+'</div>':'')
          +'<div class="meta-row">'+(sec.weight?'<span>èèé¢ '+starHtml(sec.weight)+'</span>':'')+ct+'</div>'
          +'</div>';
      }).join('');
      var meta='ç« Â·'+(ch.lectures||'')+' Â· P'+(ch.pages?ch.pages[0]+'~'+ch.pages[1]:'è¯¦è§å­è')+' Â· èé¢'+starHtml(ch.weight||'âââ');
      var chapt=document.createElement('details');chapt.className='chapter';chapt.open=ch.idx<=2;
      chapt.innerHTML='<summary><div style="font-weight:700"><span style="color:#93c5fd;font-family:monospace;margin-right:10px">ç¬¬'+String(ch.idx).padStart(2,'0')+'ç« </span>'+ch.name+'</div>'
        +'<span class="chapter-meta">'+meta+'</span></summary><div class="chapter-body">'+(secs||'<p style="color:#8ea0c6">æ¬ç« å¯¹åºç²¾è®²è§é¢å¯¹åºPå·</p>')+'</div>';
      body.appendChild(chapt);
    });
    /* å­¦ç§ææ¡è¿åº¦ */
    var tot=base.chapters.length;var done=base.chapters.filter(function(c,i){return EEProgress.isChapterDone(subjectKey,i+1)}).length;
    var pct=Math.round(done/tot*100);
    var p=document.getElementById('subject-progress');
    if(p) p.innerHTML='<b>å­¦ç§å®æåº¦</b>ï¼å·²ææ¡ '+done+'/'+tot+' ç« ï¼'+pct+'%ï¼ Â· æ¯ç« çå®è§é¢åç¹"æ è®°æ¬ç« ææ¡"å³å¯ç´¯è®¡<progress value="'+pct+'" max="100" style="width:100%"></progress>';
    /* æ è®°ç« èææ¡æé® */
    body.querySelectorAll('[data-chapter]').forEach(function(btn){
      var idx=+btn.dataset.idx;
      if(EEProgress.isChapterDone(subjectKey,idx)){btn.classList.add('done');btn.textContent='â æ¬ç« å·²ææ¡'}
      btn.onclick=function(){
        var now=EEProgress.isChapterDone(subjectKey,idx);
        EEProgress.markChapterDone(subjectKey,idx,!now);
        btn.classList.toggle('done',!now);btn.textContent=(!now)?'â æ¬ç« å·²ææ¡':'æ è®°æ¬ç« ææ¡';
        /* éç®å­¦ç§è¿åº¦æ¡ */
        var d=base.chapters.filter(function(c,i){return EEProgress.isChapterDone(subjectKey,i+1)}).length;
        var pc=Math.round(d/tot*100);
        if(p) p.innerHTML='<b>å­¦ç§å®æåº¦</b>ï¼å·²ææ¡ '+d+'/'+tot+' ç« ï¼'+pc+'%ï¼ Â· æ¯ç« çå®è§é¢åç¹"æ è®°æ¬ç« ææ¡"å³å¯ç´¯è®¡<progress value="'+pc+'" max="100" style="width:100%"></progress>';
      };
    });
    /* é«é¢èç¹æ¨ªåå¡ç */
    var hpSection=document.getElementById('subject-hot-points');
    if(hpSection && window.HOT_POINTS){
      var list=HOT_POINTS.filter(function(p){return p.subjectKey===subjectKey});
      hpSection.innerHTML='<h3>æ¬ç« ç¸å³é«é¢èç¹éæ¥ ('+list.length+' æ¡)</h3>'
        +list.map(function(p){return '<div class="card subject-card '+base.color+'" style="padding:12px;margin:6px 0"><b style="color:#fff">'+p.name+'</b> Â· <span class="stars">'+(p.stars||'âââ')+'</span>'
        +'<p style="color:#cbd5f0;font-size:13px;margin:4px 0">å¬å¼ï¼<code style="color:#fde68a">'+p.formula+'</code></p>'
        +'<div style="color:#8ea0c6;font-size:12px">ð '+p.years+' Â· ð§­ é¾åº¦'+p.diff+' Â· â ï¸ æéï¼'+p.mistake+'</div>'
        +'</div>'}).join('');
    }
    S.onDirChange=function(){S.initSubjectPage(subjectKey)};
  };

  /* === hot-points.html ç­é === */
  S.initHotPoints=function(){
    var el=document.getElementById('hot-points-body'); if(!el)return;
    var f=document.getElementById('hp-filter');
    if(!HOT_POINTS){el.innerHTML='<p>æ°æ®æªå è½½</p>';return}
    /* ç­éå¨åå§å */
    var opts= [{k:'all',name:'å¨é¨å­¦ç§'}].concat(BASIC.powerDistribution.professional.map(function(s){return{k:s.key,name:s.title}}));
    if(f) f.innerHTML= '<label style="color:#8ea0c6;margin-right:6px">æå­¦ç§ï¼</label><select id="hp-subject" class="mini-btn" style="background:#1a2845;color:#fff">'
      + opts.map(function(o){return '<option value="'+o.k+'">'+o.name+'</option>'}).join('')
      + '</select> <label style="color:#8ea0c6;margin:0 6px 0 14px">æèé¢ï¼</label><select id="hp-stars" class="mini-btn" style="background:#1a2845;color:#fff">'
      + ['ä¸é â~âââââ','ä» âââââ','ä» ââââ åä»¥ä¸','ä» âââ åä»¥ä¸'].map(function(v,i){return '<option value="'+[0,5,4,3][i]+'">'+v+'</option>'}).join('')
      + '</select>';
    function render(){
      var sb=document.getElementById('hp-subject').value;
      var st=+document.getElementById('hp-stars').value;
      var list=HOT_POINTS.filter(function(p){
        if(sb!=='all' && p.subjectKey!==sb) return false;
        var n={'ââ':2,'âââ':3,'ââââ':4,'âââââ':5}[p.stars]||3;
        if(st>0 && n<st) return false; return true;
      });
      el.innerHTML=list.map(function(p){
        var sub=(BASIC.powerDistribution.professional.find(function(x){return x.key===p.subjectKey})||{color:'common'});
        return '<div class="card subject-card '+sub.color+'"><h4>'+p.name+'</h4>'
          +'<div style="margin:4px 0"><span class="badge keytag">é¾åº¦ '+p.diff+'/5</span><span class="badge bili">'+p.stars+' èé¢</span><span class="badge zg">ð '+p.years+'</span></div>'
          +'<p style="color:#cbd5f0;margin:8px 0"><b>æ ¸å¿å¬å¼ï¼</b><code style="color:#fde68a;font-size:14px;background:#0e1729;padding:2px 6px;border-radius:4px">'+p.formula+'</code></p>'
          +'<p style="color:#8ea0c6;font-size:13px">â ï¸ å¸åæéï¼'+p.mistake+'</p>'
          +'<p style="margin-top:8px"><a class="mini-btn" href="subjects/'+p.subjectKey+'.html#ch-'+p.ch+'">æå¼å­¦ç§è¯¦æç«  '+p.ch+' è '+p.sec+' â</a>'
          +' <a class="mini-btn" href="videos.html#zhanggong|'+p.subjectKey+'">æå¼å¯¹åºå¼ å·¥ç²¾è®²è§é¢ â</a></p></div>';
      }).join('');
    }
    document.getElementById('hp-subject').onchange=render;
    document.getElementById('hp-stars').onchange=render;
    render();
  };

  /* é¦é¡µå­¦ä¹ è¿åº¦é¢æ¿ */
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
    box.querySelector('.progress-stats').innerHTML='<div><b>ä»æ¥å®æ</b>ï¼'+todone+' ä¸ªææ¡èç¹</div>'
      +'<div><b>å¼ å·¥ä¸ä¸åºç¡æ»ç« è</b>ï¼å·²ææ¡ '+doneCh+'/'+totalCh+' ç«  ('+Math.round(doneCh/totalCh*100)+'%)</div>'
      +'<div><b>å¼ å·¥ä¸ä¸åºç¡æ»è®²æ¬¡</b>ï¼å·²ææ¡ '+doneEp+'/'+totalEp+' è®² ('+Math.round(doneEp/totalEp*100)+'%)</div>';
    grid.innerHTML='';
    base.forEach(function(sub){
      var chT=sub.chapters.length; var chD=sub.chapters.filter(function(c,i){return EEProgress.isChapterDone(sub.key,i+1)}).length;
      var pct=Math.round(chD/chT*100);
      grid.insertAdjacentHTML('beforeend','<div class="progress-item"><div class="name"><span class="subject-dot dot-'+sub.color+'"></span> '+sub.title+'</div>'
        +'<div class="pct">'+pct+'%</div><div class="bar"><div class="bar-fill" style="width:'+pct+'%"></div></div>'
        +'<div style="font-size:12px;color:#8ea0c6;margin-top:4px">ç« è '+chD+'/'+chT+' Â· <a href="subjects/'+sub.key+'.html" style="color:#93c5fd">å»å­¦ä¹  â</a></div>'
        +'</div>');
    });
  };

  /* å¯å¨ */
  document.addEventListener('DOMContentLoaded',function(){
    S.initDirSwitch(); S.highlightNav();
    S.renderBasicCards(); S.initVideos();
    S.initHotPoints();
    if(S.renderHomeProgress)S.renderHomeProgress();
    if(window.EEProgress&&EEProgress.refresh)EEProgress.refresh();
  });
  window.MainEE = S;
})();
