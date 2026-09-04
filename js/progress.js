/* ee-pro-exam v2 progress.js - 学习进度/笔记/分享 读写 localStorage ee- 前缀
   key 设计：progress-video-{方向}:{seriesKey}:{bvid}:{page}=1 表示已掌握
            notes-{user}-{id}={id,title,content,tags,updatedAt}
            shares-{id}={同notes结构 + fromUser,fromDevice,likes,createdAt}
*/
(function(){
  var EE=window.AuthEE||{prefix:'ee-',sessionUser:function(){return null}};
  var KEY_PREFIX=EE.prefix;
  var P={};
  P._now=function(){return Date.now()};
  P._u=function(){return EE.sessionUser()||'_guest_'};
  P._dir=function(){return (localStorage.getItem(KEY_PREFIX+'examDirection'))||'powerDistribution'};
  P.setDir=function(d){if(d==='powerDistribution'||d==='powerTransmission')localStorage.setItem(KEY_PREFIX+'examDirection',d)};
  /* 视频掌握度 */
  P.markVideoDone=function(seriesKey,bvid,page,done){
    var k=KEY_PREFIX+'progress-video-'+P._dir()+':'+seriesKey+':'+bvid+':'+(page||1);
    if(done===false)localStorage.removeItem(k);else localStorage.setItem(k,'1');
    P.saveEvent('video:'+seriesKey+':'+bvid+':'+(page||1),done?'done':'unset');
  };
  P.isVideoDone=function(seriesKey,bvid,page){
    var k=KEY_PREFIX+'progress-video-'+P._dir()+':'+seriesKey+':'+bvid+':'+(page||1);
    return localStorage.getItem(k)==='1';
  };
  P.countSeriesDone=function(seriesKey,episodes){
    if(!Array.isArray(episodes))return 0;
    var s=0;episodes.forEach(function(ep){if(P.isVideoDone(seriesKey,ep.bvid,ep.page))s++});
    return s;
  };
  /* 章节掌握标记 */
  P.markChapterDone=function(subjectKey,chapterIdx,done){
    var k=KEY_PREFIX+'progress-chapter-'+P._dir()+':'+subjectKey+':'+chapterIdx;
    if(done===false)localStorage.removeItem(k);else localStorage.setItem(k,'1');
    P.saveEvent('chapter:'+subjectKey+':'+chapterIdx,done?'done':'unset');
  };
  P.isChapterDone=function(subjectKey,chapterIdx){
    return localStorage.getItem(KEY_PREFIX+'progress-chapter-'+P._dir()+':'+subjectKey+':'+chapterIdx)==='1';
  };
  /* 笔记 */
  P.saveNote=function(n){
    if(!n.id)n.id='note_'+P._now()+'_'+Math.random().toString(36).slice(2,7);
    n.updatedAt=P._now();if(!n.createdAt)n.createdAt=n.updatedAt;n.user=P._u();
    var notes=P.listNotes();
    var idx=notes.findIndex(function(x){return x.id===n.id});if(idx>=0)notes[idx]=n;else notes.unshift(n);
    localStorage.setItem(KEY_PREFIX+'notes-'+P._u(),JSON.stringify(notes));
    P.saveEvent('note:'+n.id,'saved');
    return n;
  };
  P.listNotes=function(){try{return JSON.parse(localStorage.getItem(KEY_PREFIX+'notes-'+P._u())||'[]')}catch(e){return[]}};
  P.deleteNote=function(id){
    var notes=P.listNotes().filter(function(x){return x.id!==id});
    localStorage.setItem(KEY_PREFIX+'notes-'+P._u(),JSON.stringify(notes));
  };
  P.getNote=function(id){return P.listNotes().find(function(x){return x.id===id})||null};
  /* 分享 (导出导入同笔记) */
  P.exportShare=function(note){var o={type:'ee-share',v:1,data:note,at:P._now(),fromUser:P._u()};return JSON.stringify(o)};
  P.importShare=function(str){try{var o=JSON.parse(str);if(o.type!=='ee-share'||!o.data)return{ok:false,msg:'格式不对'};P.saveNote(o.data);return{ok:true}}catch(e){return{ok:false,msg:'JSON解析失败'}}};
  /* 社区分享 (local模式下共享在 ee-shares 全局池) */
  P.publishShare=function(note){
    var s=note&&note.id?note:P.getNote(note);if(!s)return false;
    var shares=P.listShares();
    var copy=JSON.parse(JSON.stringify(s));
    copy.fromUser=P._u();copy.fromDevice=navigator.userAgent.slice(0,40);copy.likes=copy.likes||0;copy.shareId='share_'+P._now()+'_'+Math.random().toString(36).slice(2,6);copy.createdAt=P._now();
    shares.unshift(copy);if(shares.length>200)shares.length=200;
    localStorage.setItem(KEY_PREFIX+'shares',JSON.stringify(shares));
    P.saveEvent('share:'+copy.shareId,'published');
    return copy.shareId;
  };
  P.listShares=function(){try{return JSON.parse(localStorage.getItem(KEY_PREFIX+'shares')||'[]')}catch(e){return[]}};
  P.likeShare=function(shareId){
    var shares=P.listShares();var s=shares.find(function(x){return x.shareId===shareId});if(!s)return false;
    s.likes=(s.likes||0)+1;localStorage.setItem(KEY_PREFIX+'shares',JSON.stringify(shares));return true;
  };
  P.deleteShare=function(shareId){
    var shares=P.listShares().filter(function(x){return x.shareId!==shareId});
    localStorage.setItem(KEY_PREFIX+'shares',JSON.stringify(shares));
  };
  /* 学习事件时间线 (用于学习计划打卡、最近学习、首页进度面板) */
  P.saveEvent=function(key,action){
    var list=P.listEvents();list.unshift({key:key,action:action,at:P._now(),user:P._u(),dir:P._dir()});
    if(list.length>500)list.length=500;
    localStorage.setItem(KEY_PREFIX+'events-'+P._u(),JSON.stringify(list));
  };
  P.listEvents=function(){try{return JSON.parse(localStorage.getItem(KEY_PREFIX+'events-'+P._u())||'[]')}catch(e){return[]}};
  P.todayDoneCount=function(){
    var t=Date.now();var day=new Date(t);day.setHours(0,0,0,0);var t0=day.getTime();
    return P.listEvents().filter(function(e){return e.at>=t0&&(e.action==='done')}).length;
  };
  /* 刷新所有带 ee-progress 类的进度组件 */
  P.refresh=function(){
    document.querySelectorAll('[data-ee-progress]').forEach(function(el){
      var d=el.dataset;var series=d.series,bvid=d.bvid,page=parseInt(d.page||'1',10),chapter=d.chapter,subject=d.subject,idx=parseInt(d.idx||'0',10);
      if(series&&bvid){
        if(P.isVideoDone(series,bvid,page)){el.classList.add('done');el.textContent='已掌握'}
        else{el.classList.remove('done');el.textContent='标记掌握'}
      }
      if(subject&&chapter!==undefined){
        if(P.isChapterDone(subject,idx)){el.classList.add('done');el.textContent='本章已掌握';if(el.parentElement)el.parentElement.classList.add('done-tag')}
        else{el.classList.remove('done');el.textContent='标记本章掌握'}
      }
    });
    document.querySelectorAll('.pct-fill').forEach(function(el){
      var cur=parseInt(el.dataset.cur||'0',10),tot=parseInt(el.dataset.tot||'1',10);
      var pct=Math.min(100,Math.round(cur/tot*100));el.style.width=pct+'%';el.textContent=pct+'%';
    });
  };
  window.EEProgress=P;
  document.addEventListener('DOMContentLoaded',function(){P.refresh()});
})();
