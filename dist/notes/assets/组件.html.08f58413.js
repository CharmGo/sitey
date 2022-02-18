import{o as t,c as a,a as n,t as s,F as p,d as r,e as o}from"./app.bfc0a8ee.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h2",{id:"\u57FA\u672C\u5B9E\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u672C\u5B9E\u4F8B","aria-hidden":"true"},"#"),r(),n("strong",null,"\u57FA\u672C\u5B9E\u4F8B")],-1),c=o(`<p>\u4F7F\u7528\u7EC4\u4EF6\uFF1Anew Vue({el:\u8282\u70B9\u3002\u3002\u3002})</p><h3 id="\u7EC4\u4EF6\u53EF\u91CD\u590D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u53EF\u91CD\u590D\u4F7F\u7528" aria-hidden="true">#</a> \u7EC4\u4EF6\u53EF\u91CD\u590D\u4F7F\u7528</h3><p>\u7EC4\u5EFA\u4E2D\uFF0Cdata\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570</p><h2 id="\u7EC4\u4EF6\u7684\u7EC4\u7EC7" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u7EC4\u7EC7" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u7EC4\u7EC7</h2><p><img src="https://cn.vuejs.org/images/components.png" alt="Component Tree"></p><p>\u901A\u5E38\u4E00\u4E2A\u5E94\u7528\u4F1A\u4EE5\u4E00\u68F5\u5D4C\u5957\u7684\u7EC4\u4EF6\u6811\u7684\u5F62\u5F0F\u6765\u7EC4\u7EC7\u3002</p><p>\u4E3A\u4E86\u80FD\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u5FC5\u987B\u5148\u6CE8\u518C\u4EE5\u4FBFVue\u80FD\u591F\u8BC6\u522B\u3002\u8FD9\u91CC\u6709\u4E24\u79CD\u7EC4\u4EF6\u6CE8\u518C\u7684\u7C7B\u578B\uFF1A\u5168\u5C40\u6CE8\u518C\u548C\u5C40\u90E8\u6CE8\u518C\u3002</p><p>\u5168\u5C40\u6CE8\u518C\u4F7F\u7528Vue.component</p><p>\u6CE8\u518C\u540E\u901A\u8FC7new Vue\u4F7F\u7528</p><p>\u53EF\u4EE5\u901A\u8FC7data\u6216prop\u6765\u4F20\u9012\u6570\u636E</p><h2 id="\u901A\u8FC7prop\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7prop\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7Prop\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E</h2><p>Prop\u662F\u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u7684attribute\u3002\u5F53\u4E00\u4E2A\u503C\u4F20\u9012\u7ED9\u4E00\u4E2Aprop attribute\u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u53D8\u6210\u4E86\u90A3\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u4E00\u4E2Aproperty\u3002</p><p><code>\u901A\u8FC7prop\u5B9A\u4E49\u5C5E\u6027\u4F20\u9012\u6570\u636E\uFF0C\u82E5\u5C5E\u6027\u540D\u4E0E\u539F\u751FDOM\u5C5E\u6027\u76F8\u540C\u5219\u4F1A\u8986\u76D6\u539F\u751F\u5C5E\u6027\u7684\u7528\u6CD5</code></p><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
	&lt;h3 v-bind:title=&quot;title&quot;&gt;\u770B\u4E00\u770B&lt;/h3&gt;
	&lt;blog-post v-bind:title=&quot;post[0][&#39;title&#39;]&quot;&gt;&lt;/blog-post&gt;
&lt;/div&gt;

&lt;script&gt;

	Vue.component(&#39;blog-post&#39;, {
		props: [&#39;title&#39;],
		template: &#39;&amp;lt;h3&amp;gt;{{ title }}&amp;lt;/h3&amp;gt;&#39;
	})

	new Vue({
		el: &#39;#app&#39;,
		data: {
			title:&quot;\u6211\u4E0D\u77E5\u9053&quot;,
			post: [
				{ title: &#39;My journey with Vue&#39; },
			]
		}
	})

&lt;/script&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u5173\u4E8Evuecomponent" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Evuecomponent" aria-hidden="true">#</a> \u5173\u4E8EVueComponent:</h3><pre><code>    1.\u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4E00\u4E2A\u540D\u4E3AVueComponent\u7684\u6784\u9020\u51FD\u6570\uFF0C\u4E14\u662F\u7531Vue.extend\u751F\u6210\u7684\u3002
    2.\u6211\u4EEC\u53EA\u9700\u8981\u8C03\u7528\u7EC4\u4EF6\uFF0CVue\u89E3\u6790\u65F6\u4F1A\u5E2E\u6211\u4EEC\u521B\u5EFA\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C
        \u5373\uFF1AVue\u6267\u884Cnew VueComponent(ontions)
    
    3.\u7279\u522B\u6CE8\u610F\uFF1A\u6BCF\u6B21\u8C03\u7528Vue.extend\u3002\u8FD4\u56DE\u7684\u90FD\u662F\u4E00\u4E2A\u5168\u65B0\u7684VueComponent
    4.\u5173\u4E8Ethis\u6307\u5411\uFF1A
        (1).\u7EC4\u4EF6\u914D\u7F6E\u4E2D\uFF1A
            data\u51FD\u6570\u3001methods\u4E2D\u7684\u51FD\u6570\u3001watch\u4E2D\u7684\u51FD\u6570\u3001computed\u4E2D\u7684\u51FD\u6570 \u5B83\u4EEC\u7684this\u5747\u662FVueComponent\u5B9E\u4F8B\u5BF9\u8C61
        (2).new Vue()\u914D\u7F6E\u4E2D\uFF1A
            data\u51FD\u6570\u3001methods\u4E2D\u7684\u51FD\u6570\u3001watch\u4E2D\u7684\u51FD\u6570\u3001computed\u4E2D\u7684\u51FD\u6570 \u5B83\u4EEC\u7684this\u5747\u662F\u5B9E\u4F8B\u5BF9\u8C61
</code></pre>`,17);function b(e,d){return t(),a(p,null,[u,n("p",null,`// \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A button-counter \u7684\u65B0\u7EC4\u4EF6 Vue.component('button-counter', { data: function () { return { count: 0 } }, template: '<button v-on:click="count++">You clicked me `+s(e.count)+" times.</button>' })",1),c],64)}var g=l(i,[["render",b]]);export{g as default};
