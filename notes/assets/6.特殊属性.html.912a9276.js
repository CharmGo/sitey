import{e}from"./app.ae0e5040.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=e(`<h2 id="ref\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#ref\u5C5E\u6027" aria-hidden="true">#</a> ref\u5C5E\u6027</h2><p>1.\u88AB\u7528\u6765\u7ED9\u5143\u7D20\u6216\u5B50\u7EC4\u4EF6\u6CE8\u518C\u5F15\u7528\u4FE1\u606F\uFF08id\u7684\u66FF\u4EE3\u8005\uFF09\u3002 2.\u5E94\u7528\u5728html\u6807\u7B7E\u4E0A\u83B7\u53D6\u7684\u662F\u771F\u5B9EDOM\u5143\u7D20\uFF0C\u5E94\u7528\u5728\u7EC4\u4EF6\u6807\u7B7E\u4E0A\u662F\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u3002 3.\u4F7F\u7528\u65B9\u5F0F\uFF1A \u6253\u6807\u8BC6\uFF1A<code>&lt;h1 ref=&#39;xxx&#39;&gt;...&lt;/h1&gt; or &lt;component ref=&#39;xxx&#39;&gt;&lt;/component&gt;</code> \u83B7\u53D6\uFF1A<code>this.$refs.xxx</code></p><hr><h2 id="\u914D\u7F6E\u9879props" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879props" aria-hidden="true">#</a> \u914D\u7F6E\u9879props</h2><p>\u529F\u80FD\uFF1A\u8BA9\u7EC4\u4EF6\u63A5\u6536\u5916\u90E8\u4F20\u8FC7\u6765\u7684\u6570\u636E</p><blockquote><p>(1).\u4F20\u9012\u6570\u636E\uFF1A</p><blockquote><p><code>&lt;Demo name=&quot;xxx&quot; /&gt;</code></p></blockquote></blockquote><blockquote><p>(2).\u63A5\u6536\u6570\u636E\uFF1A</p><blockquote><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F(\u53EA\u63A5\u6536):</p><blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>props:[&#39;name&#39;]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F(\u9650\u5236\u7C7B\u578B):</p><blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>props:{
	name:String
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote><p>\u7B2C\u4E09\u79CD\u65B9\u5F0F(\u9650\u5236\u7C7B\u578B\uFF0C\u9650\u5236\u5FC5\u8981\u6027\uFF0C\u6307\u5B9A\u9ED8\u8BA4)\uFF1A</p><blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>props: {
   name: {
     type: String, // name\u7684\u7C7B\u578B\u662F\u5B57\u7B26\u4E32
     required: true, // name\u662F\u5FC5\u9009\u9879
     default: 99, // \u9ED8\u8BA4\u503C
   }
},
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></blockquote></blockquote></blockquote><hr><h2 id="mixin-\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#mixin-\u6DF7\u5165" aria-hidden="true">#</a> mixin(\u6DF7\u5165)</h2><p>\u529F\u80FD\uFF1A\u53EF\u4EE5\u628A\u591A\u4E2A\u7EC4\u4EF6\u5171\u7528\u7684\u914D\u7F6E\u63D0\u53D6\u6210\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61 \u4F7F\u7528\u65B9\u5F0F\uFF1A 1.\u5B9A\u4E49\u6DF7\u5408</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	data(){...}
	methods:{...}
	...
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2.\u4F7F\u7528\u6DF7\u5165\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(1).\u5168\u5C40\u6DF7\u5165\uFF1AVue.mixin(xxx)
(2).\u5C40\u90E8\u6DF7\u5165\uFF1Amixins:[&#39;xxx&#39;]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h2 id="scoped\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#scoped\u6837\u5F0F" aria-hidden="true">#</a> scoped\u6837\u5F0F</h2><p>\u4F5C\u7528\uFF1A\u8BA9\u6837\u5F0F\u5728\u5C40\u90E8\u751F\u6548\uFF0C\u9632\u6B62\u51B2\u7A81 \u5199\u6CD5\uFF1A<code>&lt;style scoped&gt;</code></p>`,16);function r(t,l){return a}var i=n(s,[["render",r]]);export{i as default};
