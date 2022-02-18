import{e as n}from"./app.ae0e5040.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<h2 id="_1-\u4F7F\u7528vue-extend" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528vue-extend" aria-hidden="true">#</a> 1.\u4F7F\u7528Vue.extend({})</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const temp = Vue.extend({
	name: &#39;temp&#39;,
	data: function(){
		return {
			&lt;!-- \u53D8\u91CF\uFF0C\u6570\u636E --&gt;
		}
	},
	template:\`
			&lt;!-- \u5B57\u7B26\u6A21\u677F\uFF0CHTML\u4EE3\u7801 --&gt;
	\`,
	......\u5176\u4ED6\u9009\u9879
})

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528" aria-hidden="true">#</a> \u8C03\u7528\uFF1A</h3><p>\u5728Vue\u5B9E\u4F8B\u4E2D\u7684components\u914D\u7F6E\u5BF9\u8C61\u4E2D\u8C03\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Vue({
	el: &#39;app&#39;,
	&lt;!-- ......\u7701\u7565\u4EE3\u7801 --&gt;
	components:{
		temp:temp
	}
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2.</h2>`,6);function r(t,l){return a}var i=e(s,[["render",r]]);export{i as default};
