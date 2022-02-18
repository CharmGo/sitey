import{e as n}from"./app.ae0e5040.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const e={},i=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#add .gitignore
#\u67E5\u770B\u72B6\u6001\uFF0C\u662F\u5426\u5FFD\u7565\u4E86\u6307\u5B9A\u7684\u6587\u4EF6\uFF1F 
$ git status --ignored #\u67E5\u770B\u72B6\u6001\uFF0C\u5305\u62EC\u5FFD\u7565\u7684\u6587\u4EF6
 
#\u8BA9\u5176\u5BF9\u5DF2\u7ECF\u8DDF\u8E2A\u7684\u6587\u4EF6\u4E5F\u8D77\u4F5C\u7528
$ git rm -r --cached .  #\u6E05\u9664\u7F13\u5B58 -r \u8868\u793A\u9012\u5F52\u5220\u9664\uFF08\u5982\u679C\u6709\u6587\u4EF6\u5939\u7684\u8BDD\uFF09 . \u8868\u793A\u6240\u6709\u6587\u4EF6
 
#\u67E5\u770B\u4E00\u4E0B\u5177\u4F53\u6548\u679C
$ git status --ignored
$ git add .           #\u91CD\u65B0trace file
$ git commit -m &quot;update .gitignore&quot;     #\u63D0\u4EA4\u548C\u6CE8\u91CA
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u672C\u5730\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u63D0\u4EA4" aria-hidden="true">#</a> \u672C\u5730\u63D0\u4EA4</h2><p>echo &quot;# test&quot; &gt;&gt; README.md git init git add README.md git commit -m &quot;first commit&quot; git branch -M main git remote add origin git@github.com:CharmGo/test.git git push -u origin main</p><h2 id="\u62C9\u53D6\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u63D0\u4EA4" aria-hidden="true">#</a> \u62C9\u53D6\u63D0\u4EA4</h2><p>git remote add origin git@github.com:CharmGo/test.git git branch -M main git push -u origin main</p>`,5);function t(s,r){return i}var o=a(e,[["render",t]]);export{o as default};
