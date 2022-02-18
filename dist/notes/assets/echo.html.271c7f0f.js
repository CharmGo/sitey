import{e as n}from"./app.bfc0a8ee.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<p>echo\u6307\u4EE4\u7528\u4E8E\u5728Unix Like\u7C7B\u7684\u7CFB\u7EDF\u4E2D\u8F93\u51FA\u6307\u5B9A\u7684\u5B57\u7B26\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7279\u5B9A\u7684\u65B9\u5F0F\u7ED9\u8F93\u51FA\u7684\u5B57\u7B26\u5B9A\u4E49\u989C\u8272\u53CA\u80CC\u666F\u989C\u8272\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0Becho\u4F1A\u8F93\u51FA\u7070\u8272\uFF08\u767D\u8272\uFF09\u5B57\u7B26\uFF0C\u80CC\u666F\u4E3A\u9ED1\u8272\u3002</p><div class="language-echo ext-echo line-numbers-mode"><pre class="language-echo"><code>
x\u4EE3\u8868\u5B57\u7B26\u683C\u5F0F\uFF080-7\uFF09
0\uFF1A\u6700\u666E\u901A\u7684\uFF0C\u9ED8\u8BA4
1\uFF1A\u52A0\u9AD8\u4EAE
2\uFF1A\u52A0\u6DF1
3\uFF1A\u659C\u4F53
4\uFF1A\u4E0B\u5212\u7EBF
5\uFF1A\u95EA\u70C1
6\uFF1A\u95EA\u70C1
7\uFF1A\u989C\u8272\u53CD\u8F6C

y\u4EE3\u8868\u5B57\u7B26\u989C\u8272



</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol><li>\u7ED9\u8F93\u51FA\u7684\u5B57\u7B26\u6307\u5B9A\u989C\u8272 \u501F\u52A9echo\u7684-e\u9009\u9879\u6765\u5B9E\u73B0\uFF0C\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</li></ol><p><code>echo -e &quot;\\033[3xmsome things you want to print out.\\033[0m&quot;</code></p><p><code>\\033[3xm</code>\u4E3AANSI\u63A7\u5236\u7801\uFF0C\u8868\u793A\u8981\u5F00\u59CB\u8F93\u51FA\u6709\u989C\u8272\u7684\u5B57\u7B26\u4E86\u3002 some things you want to print out.\u8868\u793A\u8981\u8F93\u51FA\u7684\u5B57\u7B26\uFF0C\u548C<code>3xm</code>\u7D27\u6328\u7740\uFF0C\u5982\u679C\u4E2D\u95F4\u6709\u7A7A\u683C\uFF0C\u8F93\u51FA\u7684\u5B57\u7B26\u524D\u9762\u4E5F\u4F1A\u6709\u7A7A\u683C\u3002 3x\u4E3A\u8868\u793A\u989C\u8272\u7684\u4E00\u7EC4\u6570\u5B57\uFF0Cx\u53D6\u503C\u4E3A0\u52307\uFF0C\u5206\u522B\u4EE3\u8868\u7684\u989C\u8272\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>30\u8868\u793A\u9ED1\u8272\u3002
31\u8868\u793A\u7EA2\u8272\u3002
32\u8868\u793A\u7EFF\u8272\u3002
33\u8868\u793A\u9EC4\u8272\u3002
34\u8868\u793A\u84DD\u8272\u3002
35\u8868\u793A\u7D2B\u8272\u3002
36\u8868\u793A\u6D45\u84DD\u8272\u3002
37\u8868\u793A\u7070\u8272\u3002
033[0m\u4E3AANSI\u63A7\u5236\u7801\uFF0C\u8868\u793A\u7ED3\u675F\u8F93\u51FA\u6709\u989C\u8272\u7684\u5B57\u7B26\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2"><li>\u7ED9\u8F93\u51FA\u7684\u5B57\u7B26\u6307\u5B9A\u80CC\u666F\u989C\u8272 \u540C\u6837\u501F\u52A9echo\u7684-e\u9009\u9879\u6765\u5B9E\u73B0\uFF0C\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</li></ol><p><code>echo -e &quot;\\033[4xsome things you want to print out.\\033[0m&quot;</code></p><p><code>\\033</code>\u5F00\u5934\u7684\u90FD\u4E3AANSI\u63A7\u5236\u7801\uFF0C\u548C\u6307\u5B9A\u5B57\u7B26\u7684\u989C\u8272\u4E0D\u540C\u7684\u662F\uFF0C\u8FD9\u91CC\u7528\u7684\u662F<code>4x</code>\uFF0C\u5E38\u7528\u7684\u80CC\u666F\u989C\u8272\u4E5F\u51718\u79CD\uFF0Cx\u53D6\u503C\u4E3A0\u52307\u3002\u5E38\u7528\u80CC\u666F\u8272\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>40\u8868\u793A\u80CC\u666F\u4E3A\u9ED1\u8272\u3002
41\u8868\u793A\u80CC\u666F\u4E3A\u7EA2\u8272\u3002
42\u8868\u793A\u80CC\u666F\u4E3A\u7EFF\u8272\u3002
43\u8868\u793A\u80CC\u666F\u4E3A\u9EC4\u8272\u3002
44\u8868\u793A\u80CC\u666F\u4E3A\u84DD\u8272\u3002
45\u8868\u793A\u80CC\u666F\u4E3A\u7D2B\u8272\u3002
46\u8868\u793A\u80CC\u666F\u4E3A\u6D45\u84DD\u8272\u3002
47\u8868\u793A\u80CC\u666F\u4E3A\u7070\u767D\u8272\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>\u5176\u5B83\u5E38\u7528\u7684ANSI\u63A7\u5236\u7801</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\033[3m\u8F93\u51FA\u659C\u4F53\u5B57
\\033[4m\u7ED9\u8F93\u51FA\u7684\u5B57\u7B26\u52A0\u4E0A\u4E0B\u5212\u7EBF
\\033[5m\u8BA9\u8F93\u51FA\u7684\u5B57\u7B26\u95EA\u70C1\u663E\u5F0F
\\033[7m\u8BBE\u7F6E\u53CD\u663E\u6548\u679C\uFF0C\u5373\u628A\u80CC\u666F\u8272\u548C\u5B57\u4F53\u989C\u8272\u53CD\u8FC7\u6765\u663E\u793A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,12);function l(r,p){return a}var i=s(e,[["render",l]]);export{i as default};
