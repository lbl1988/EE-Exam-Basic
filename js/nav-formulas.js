/* nav-formulas.js — 在导航栏自动插入"公式速查"链接
   用法：在任意页面的 </body> 前加 <script src="js/nav-formulas.js"></script>
   或在 main.js 末尾追加此文件内容 */
(function(){
  var links=document.querySelector('.nav-links');
  if(!links) return;
  // 检查是否已存在
  if(links.querySelector('a[href="formulas.html"]')) return;
  // 创建链接
  var a=document.createElement('a');
  a.href='formulas.html';
  a.textContent='公式速查';
  if(document.body.dataset.page==='formulas') a.classList.add('active');
  links.appendChild(a);
})();
