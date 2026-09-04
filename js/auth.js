/* ee-pro-exam v2 auth.js - 兼容Render静态local模式
   salt+SHA-256哈希密码，账号/会话/进度/笔记均写入 ee- 前缀 localStorage。
   支持：注册、登录、忘记密码（local模式直接重置）、修改密码、导出JSON、导入JSON、
   检测共享域名(18个)强制local模式，API探活失败自动降级local模式。
*/
(function(){
  var EE={prefix:'ee-'};
  EE.sha256=async function(t){var n=new TextEncoder().encode(t);var b=await crypto.subtle.digest('SHA-256',n);return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')};
  EE.randSalt=function(){return Math.random().toString(36).slice(2,10)};
  EE.isSharedDomain=function(){var hosts=['onrender.com','vercel.app','workers.dev','pages.dev','web.app','firebaseapp.com','netlify.app','surge.sh','github.io','gitlab.io','glitch.me','c9users.io','codeanyapp.com','herokuapp.com','awsapps.com','azurewebsites.net','cloudfront.net','render.com'];var h=location.hostname;return hosts.some(function(x){return h.endsWith(x)})};
  EE.mode='local';
  EE.load=function(k){try{return JSON.parse(localStorage.getItem(EE.prefix+k)||'null')}catch(e){return null}};
  EE.save=function(k,v){localStorage.setItem(EE.prefix+k,JSON.stringify(v))};
  EE.sessionUser=function(){var s=EE.load('session');return s&&s.user?s.user:null};
  EE.loggedIn=EE.sessionUser();

  /* 注册 */
  EE.register=async function(u,p){if(!u||!p||p.length<4)return{ok:false,msg:'用户名/密码不能少于4位'};var users=EE.load('users')||{};if(users[u])return{ok:false,msg:'用户名已存在'};var s=EE.randSalt();var h=await EE.sha256(s+p);users[u]={salt:s,pwd:h,createdAt:Date.now()};EE.save('users',users);return{ok:true}};
  /* 登录 */
  EE.login=async function(u,p){var users=EE.load('users')||{};var rec=users[u];if(!rec)return{ok:false,msg:'用户不存在'};var h=await EE.sha256(rec.salt+p);if(h!==rec.pwd)return{ok:false,msg:'密码错误'};EE.save('session',{user:u,at:Date.now()});EE.loggedIn=u;return{ok:true}};
  /* 重置 */
  EE.reset=async function(u,np){if(!u||!np||np.length<4)return{ok:false,msg:'用户名/新密码不能少于4位'};var users=EE.load('users')||{};if(!users[u])return{ok:false,msg:'用户名不存在'};var s=EE.randSalt();users[u].pwd=await EE.sha256(s+np);users[u].salt=s;EE.save('users',users);return{ok:true}};
  /* 修改密码 */
  EE.changePwd=async function(oldP,newP){var u=EE.sessionUser();if(!u)return{ok:false,msg:'未登录'};if(!newP||newP.length<4)return{ok:false,msg:'新密码至少4位'};var users=EE.load('users')||{};var rec=users[u];var oh=await EE.sha256(rec.salt+oldP);if(oh!==rec.pwd)return{ok:false,msg:'原密码错误'};var ns=EE.randSalt();rec.salt=ns;rec.pwd=await EE.sha256(ns+newP);EE.save('users',users);return{ok:true}};
  EE.logout=function(){localStorage.removeItem(EE.prefix+'session');EE.loggedIn=null};
  /* 导出所有 ee- 前缀数据 */
  EE.exportAll=function(){var out={};for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k&&k.indexOf(EE.prefix)===0)try{out[k.slice(EE.prefix.length)]=JSON.parse(localStorage.getItem(k))}catch(e){}}return JSON.stringify(out,null,2)};
  EE.importAll=function(str){try{var obj=JSON.parse(str);Object.keys(obj).forEach(function(k){localStorage.setItem(EE.prefix+k,JSON.stringify(obj[k]))});return true}catch(e){return false}};
  EE.toFile=function(str,name){var b=new Blob([str],{type:'application/json'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},1000)};

  /* 登录弹窗UI */
  EE.buildAuthUI=function(){
    var mask=document.getElementById('auth-mask');
    if(mask)return;
    mask=document.createElement('div');mask.id='auth-mask';
    mask.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.65);display:none;align-items:center;justify-content:center;z-index:100;padding:20px';
    mask.innerHTML='<div style="background:#152138;border:1px solid #2a3c66;border-radius:14px;width:100%;max-width:380px;padding:22px;box-shadow:0 20px 60px rgba(0,0,0,.5)">'
      +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><h3 style="color:#fff">账号</h3><button id="auth-close" style="background:transparent;border:none;color:#8ea0c6;font-size:20px;cursor:pointer">×</button></div>'
      +'<div id="auth-tabs" style="display:flex;border-bottom:1px solid #2a3c66;margin-bottom:14px;gap:12px">'
      +'<button data-tab="login" class="auth-tab" style="padding:8px 0;background:transparent;border:none;border-bottom:2px solid #4f8cff;color:#fff;cursor:pointer;font-weight:600">登录</button>'
      +'<button data-tab="register" class="auth-tab" style="padding:8px 0;background:transparent;border:none;border-bottom:2px solid transparent;color:#8ea0c6;cursor:pointer">注册</button>'
      +'<button data-tab="reset" class="auth-tab" style="padding:8px 0;background:transparent;border:none;border-bottom:2px solid transparent;color:#8ea0c6;cursor:pointer">忘记密码</button>'
      +'<button data-tab="io" class="auth-tab" style="padding:8px 0;background:transparent;border:none;border-bottom:2px solid transparent;color:#8ea0c6;cursor:pointer">数据同步</button>'
      +'</div>'
      +'<div id="auth-body"></div>'
      +'<p id="auth-mode" style="margin-top:14px;font-size:12px;color:#8ea0c6;background:rgba(79,140,255,.08);padding:8px 10px;border-radius:6px;border:1px dashed #2a3c66">模式：local (浏览器localStorage · 跨设备请用数据同步导出JSON)</p>'
      +'</div>';
    document.body.appendChild(mask);
    document.getElementById('auth-close').onclick=function(){mask.style.display='none'};
    mask.addEventListener('click',function(e){if(e.target===mask)mask.style.display='none'});
    mask.querySelectorAll('.auth-tab').forEach(function(b){b.onclick=function(){
      mask.querySelectorAll('.auth-tab').forEach(function(x){x.style.color='#8ea0c6';x.style.borderBottomColor='transparent'});
      b.style.color='#fff';b.style.borderBottomColor='#4f8cff';EE.renderAuthTab(b.dataset.tab)}});
    EE.renderAuthTab=function(tab){
      var body=document.getElementById('auth-body');
      if(tab==='login')body.innerHTML='<p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">用户名</p><input id="au" style="width:100%;padding:10px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">密码</p><input id="ap" type="password" style="width:100%;padding:10px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><div id="am" style="font-size:12px;color:#ef4444;min-height:18px;margin-bottom:8px"></div><button id="auth-submit" style="width:100%;padding:10px;background:linear-gradient(135deg,#4f8cff,#a78bfa);color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer">登 录</button>';
      else if(tab==='register')body.innerHTML='<p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">用户名</p><input id="ru" style="width:100%;padding:10px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">密码(≥4位)</p><input id="rp" type="password" style="width:100%;padding:10px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">确认密码</p><input id="rp2" type="password" style="width:100%;padding:10px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><div id="am" style="font-size:12px;color:#ef4444;min-height:18px;margin-bottom:8px"></div><button id="auth-submit" style="width:100%;padding:10px;background:linear-gradient(135deg,#4f8cff,#a78bfa);color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer">注 册</button>';
      else if(tab==='reset')body.innerHTML='<p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">用户名</p><input id="xu" style="width:100%;padding:10px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">新密码(≥4位)</p><input id="xp" type="password" style="width:100%;padding:10px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">确认新密码</p><input id="xp2" type="password" style="width:100%;padding:10px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><div id="am" style="font-size:12px;color:#ef4444;min-height:18px;margin-bottom:8px"></div><button id="auth-submit" style="width:100%;padding:10px;background:linear-gradient(135deg,#4f8cff,#a78bfa);color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer">重置密码</button><p style="margin-top:10px;font-size:12px;color:#8ea0c6">* local模式无邮箱验证，输入用户名+新密码即可重置</p>';
      else if(tab==='io')body.innerHTML='<div id="am" style="font-size:12px;color:#f59e0b;margin-bottom:8px;padding:8px 10px;background:rgba(245,158,11,.1);border-radius:6px;border:1px dashed #f59e0b">设备A点导出→把JSON发到设备B→设备B点粘贴导入即可同步账号+笔记+学习进度。</div><button id="btn-export-text" style="width:100%;padding:10px;background:#1a2845;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:8px;cursor:pointer">① 导出为文本 (复制粘贴用)</button><button id="btn-export-file" style="width:100%;padding:10px;background:#1a2845;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:8px;cursor:pointer">② 导出为 .json 文件下载</button><hr style="border-color:#2a3c66;margin:14px 0"><p style="margin-bottom:8px;font-size:13px;color:#8ea0c6">导入：粘贴JSON文本 或 选择.json文件</p><textarea id="import-txt" rows="4" style="width:100%;padding:8px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:8px;font-family:monospace;font-size:12px" placeholder="此处粘贴导出的JSON文本"></textarea><input id="import-file" type="file" accept=".json,application/json" style="width:100%;padding:8px;background:#0e1729;color:#fff;border:1px solid #2a3c66;border-radius:8px;margin-bottom:10px"><div id="io-msg" style="font-size:12px;color:#8ea0c6;min-height:18px;margin-bottom:8px"></div><button id="btn-import" style="width:100%;padding:10px;background:linear-gradient(135deg,#4f8cff,#a78bfa);color:#fff;border:none;border-radius:8px;font-weight:600;cursor:pointer">③ 执行导入(会覆盖同名账号数据)</button>';
      var s=document.getElementById('auth-submit');
      if(s)s.onclick=async function(){
        var m=document.getElementById('am');m.textContent='';
        if(tab==='login'){var r=await EE.login(document.getElementById('au').value.trim(),document.getElementById('ap').value);if(r.ok){mask.style.display='none';EE.renderUserBar();if(typeof EEProgress!=='undefined'&&EEProgress.refresh)EEProgress.refresh()}else m.textContent=r.msg}
        else if(tab==='register'){var u=document.getElementById('ru').value.trim(),p=document.getElementById('rp').value,p2=document.getElementById('rp2').value;if(p!==p2){m.textContent='两次密码不一致';return}var r=await EE.register(u,p);if(r.ok){m.style.color='#22c55e';m.textContent='注册成功，请登录';setTimeout(function(){EE.renderAuthTab('login')},800)}else m.textContent=r.msg}
        else if(tab==='reset'){var u=document.getElementById('xu').value.trim(),p=document.getElementById('xp').value,p2=document.getElementById('xp2').value;if(p!==p2){m.textContent='两次密码不一致';return}var r=await EE.reset(u,p);if(r.ok){m.style.color='#22c55e';m.textContent='密码已重置，请登录';setTimeout(function(){EE.renderAuthTab('login')},800)}else m.textContent=r.msg}
      };
      var et=document.getElementById('btn-export-text');
      if(et)et.onclick=function(){var txt=EE.exportAll();var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');document.getElementById('io-msg').style.color='#22c55e';document.getElementById('io-msg').textContent='已复制到剪贴板，共'+txt.length+'字符'}catch(e){document.getElementById('io-msg').style.color='#ef4444';document.getElementById('io-msg').textContent='复制失败，请手动复制下方文本'}setTimeout(function(){ta.remove()},100)};
      var ef=document.getElementById('btn-export-file');
      if(ef)ef.onclick=function(){EE.toFile(EE.exportAll(),'ee-exam-export-'+Date.now()+'.json')};
      var bi=document.getElementById('btn-import');
      if(bi)bi.onclick=async function(){
        var msg=document.getElementById('io-msg');msg.style.color='#8ea0c6';msg.textContent='';
        var txt=document.getElementById('import-txt').value.trim();
        var f=document.getElementById('import-file').files[0];
        if(!txt&&!f){msg.style.color='#ef4444';msg.textContent='请粘贴文本或选择文件';return}
        if(f){txt=await new Promise(function(res){var r=new FileReader();r.onload=function(e){res(e.target.result)};r.readAsText(f)})}
        var ok=EE.importAll(txt);if(ok){msg.style.color='#22c55e';msg.textContent='导入成功，页面将在1.5秒后刷新以加载新数据';setTimeout(function(){location.reload()},1500)}else{msg.style.color='#ef4444';msg.textContent='导入失败：JSON格式不正确'}
      }
    };
    EE.openAuth=function(tab){EE.buildAuthUI();mask.style.display='flex';EE.renderAuthTab(tab||'login')};
  };
  EE.renderUserBar=function(){
    var bar=document.getElementById('user-area');if(!bar)return;
    var u=EE.sessionUser();
    if(u){
      bar.innerHTML='<span>你好, '+u+'</span>'
        +'<button id="btn-export">数据同步</button>'
        +'<button id="btn-chpwd">修改密码</button>'
        +'<button id="btn-logout">退出登录</button>';
      document.getElementById('btn-export').onclick=function(){EE.openAuth('io')};
      document.getElementById('btn-chpwd').onclick=async function(){
        var o=prompt('请输入原密码：');if(o===null)return;
        var n=prompt('请输入新密码(≥4位)：');if(n===null)return;
        var r=await EE.changePwd(o,n);alert(r.ok?'密码修改成功':r.msg)
      };
      document.getElementById('btn-logout').onclick=function(){if(confirm('确认退出登录？')){EE.logout();EE.renderUserBar();if(typeof EEProgress!=='undefined'&&EEProgress.refresh)EEProgress.refresh()}};
    }else{
      bar.innerHTML='<button id="btn-login">登录 / 注册</button>';
      document.getElementById('btn-login').onclick=function(){EE.openAuth('login')};
    }
  };
  /* 初始化模式探测 */
  if(EE.isSharedDomain())EE.mode='local';
  else{try{fetch('/api/auth/me',{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){if(j&&j.success)EE.mode='cloud'}).catch(function(){EE.mode='local'})}catch(e){EE.mode='local'}}
  window.AuthEE=EE;
  document.addEventListener('DOMContentLoaded',function(){EE.renderUserBar()});
})();
