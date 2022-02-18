import{r,o as p,c as l,a as n,b as e,F as i,d as s,e as t}from"./app.ae0e5040.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var o="/notes/assets/40f2bb7f03401a685fa56fa7e1aee5a1.e6f9a25f.png";const b={},d={id:"togetherjs",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#togetherjs","aria-hidden":"true"},"#",-1),m=s(),h={href:"https://togetherjs.com/",target:"_blank",rel:"noopener noreferrer"},g=s("TogetherJS"),_=t(`<p>\u6DFB\u52A0 TogetherJS \u5230\u60A8\u7684\u7F51\u7AD9\uFF0C\u8BA9\u7528\u6237\u5B9E\u65F6\u4E92\u52A9\uFF0C\u534F\u4F5C\u66F4\u7B80\u5355\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script src=&quot;https://togetherjs.com/togetherjs-min.js&quot;&gt;&lt;/script&gt;

&lt;button onclick=&quot;TogetherJS(this); return false;&quot;&gt;Start TogetherJS&lt;/button&gt;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2),v={id:"jsfiddle",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#jsfiddle","aria-hidden":"true"},"#",-1),k=s(),x={href:"https://jsfiddle.net/",target:"_blank",rel:"noopener noreferrer"},S=s("JSFiddle"),J=n("p",null,"\u7F16\u8F91 JavaScript\u3001CSS \u548C HTML \u5E76\u83B7\u5F97\u5B9E\u65F6\u7ED3\u679C\u3002\u4F7F\u7528\u5916\u7F6E\u8D44\u6E90\uFF0C\u5E76\u548C\u4F60\u7684\u56E2\u961F\u5728\u7EBF\u5408\u4F5C",-1),G={id:"antv-g6",tabindex:"-1"},$=n("a",{class:"header-anchor",href:"#antv-g6","aria-hidden":"true"},"#",-1),j=s(),q={href:"https://g6.antv.vision/zh/docs/manual/tutorial/example",target:"_blank",rel:"noopener noreferrer"},T=s("@antv/g6"),w=t(`<p><strong>G6 \u662F\u4E00\u4E2A\u56FE\u53EF\u89C6\u5316\u5F15\u64CE\u3002\u5B83\u63D0\u4F9B\u4E86\u56FE\u7684\u7ED8\u5236\u3001\u5E03\u5C40\u3001\u5206\u6790\u3001\u4EA4\u4E92\u3001\u52A8\u753B\u7B49\u57FA\u7840\u7684\u56FE\u53EF\u89C6\u5316\u80FD\u529B\u3002\u65E8\u5728\u8BA9\u5173\u7CFB\u53D8\u5F97\u900F\u660E\uFF0C\u7B80\u5355\u3002\u8BA9\u7528\u6237\u83B7\u5F97\u5173\u7CFB\u6570\u636E\u7684 Insight\u3002</strong></p><p>$\\color{red}{g6}$\u4E2D\uFF0CGraph\u5BF9\u8C61\u662F\u56FE\u7684\u8F7D\u4F53\uFF0C\u5305\u542B\u4E86\u56FE\u4E0A\u7684\u6240\u6709\u5143\u7D20\uFF0C<strong>$\\color{red}{\u5373\u662F\u8BF4\u4F7F\u7528G6\u662F\u5728Graph\u5BF9\u8C61\u4E4B\u4E0A\u8FDB\u884C\u6269\u5C55\u7684}$</strong></p><p>$\\color{red}{G6\u7684\u751F\u547D\u5468\u671F}$:<code>\u521D\u59CB\u5316 \u2014&gt; \u52A0\u8F7D\u6570\u636E \u2014&gt; \u6E32\u67D3 \u2014&gt; \u66F4\u65B0 \u2014&gt; \u9500\u6BC1</code></p><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>g6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;script&gt;
    import G6 import &#39;@antv/g6&#39;
    export default{
        name: &#39;g6x&#39;,
        data(){
            return{
                initData: {
        		// \u70B9\u96C6
        		nodes: [
          			{
            			id: &#39;node1&#39;, // \u8282\u70B9\u7684\u552F\u4E00\u6807\u8BC6
            			x: 100, // \u8282\u70B9\u6A2A\u5750\u6807
            			y: 200, // \u8282\u70B9\u7EB5\u5750\u6807
            			label: &#39;\u8D77\u59CB\u70B9&#39;, // \u8282\u70B9\u6587\u672C
          			},
          			{
            			id: &#39;node2&#39;,
            			x: 300,
            			y: 200,
            			label: &#39;\u76EE\u6807\u70B9&#39;,
          			},
        		],
        			// \u8FB9\u96C6
        			edges: [
          			// \u8868\u793A\u4E00\u6761\u4ECE node1 \u8282\u70B9\u8FDE\u63A5\u5230 node2 \u8282\u70B9\u7684\u8FB9
          			{
           			source: &#39;node1&#39;, // \u8D77\u59CB\u70B9 id
            			target: &#39;node2&#39;, // \u76EE\u6807\u70B9 id
            			label: &#39;\u6211\u662F\u8FDE\u7EBF&#39;, // \u8FB9\u7684\u6587\u672C
          			},
        		],
      		},
            }
        },
        mounted() {
    		this.initG6()
  	},
  	methods: {
    		initG6() {
      			const graph = new G6.Graph({
        		container: &#39;g6&#39;, // \u6307\u5B9A\u6302\u8F7D\u5BB9\u5668
        		width: 800, // \u56FE\u7684\u5BBD\u5EA6
        		height: 500, // \u56FE\u7684\u9AD8\u5EA6
      			})
      			graph.data(this.initData) // \u52A0\u8F7D\u6570\u636E
      			graph.render() // \u6E32\u67D3
      		},
      	},
    }
&lt;/script&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>$\\color{red}{1.\u521D\u59CB\u5316\u56FE}$</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const graph = new G6.Graph({
    container: &#39;g6&#39;,
    width: 800,
    height: 500,
});
// \u5FC5\u8981\u9879\u914D\u7F6E\uFF1Acontainer\uFF1A\u7ED1\u5B9A\u7684\u5BB9\u5668id, width\u3001height\u753B\u5E03\u5BBD\u9AD8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>$\\color{red}{2.\u8BFB\u53D6\u6570\u636E}$</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>graph.data(json\u6570\u636E\u5BF9\u8C61)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>$\\color{red}{3.\u6E32\u67D3\u56FE}$</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>graph.render()
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr><p><img src="`+o+'" alt="G6 \u6838\u5FC3\u6982\u5FF5\u603B\u89C8"></p><hr>',15),V={id:"antv-x6",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#antv-x6","aria-hidden":"true"},"#",-1),N=s(),B={href:"https://antv-x6.gitee.io/zh/docs/tutorial/getting-started",target:"_blank",rel:"noopener noreferrer"},D=s("@antv/x6"),F=n("p",null,[n("strong",null,"X6 \u662F AntV \u65D7\u4E0B\u7684\u56FE\u7F16\u8F91\u5F15\u64CE\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u5F00\u7BB1\u5373\u7528\u7684\u4EA4\u4E92\u7EC4\u4EF6\u548C\u7B80\u5355\u6613\u7528\u7684\u8282\u70B9\u5B9A\u5236\u80FD\u529B\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5FEB\u901F\u642D\u5EFA\u6D41\u7A0B\u56FE\u3001DAG \u56FE\u3001ER \u56FE\u7B49\u56FE\u5E94\u7528\u3002")],-1);function I(L,y){const a=r("ExternalLinkIcon");return p(),l(i,null,[n("h2",d,[u,m,n("a",h,[g,e(a)])]),_,n("h2",v,[f,k,n("a",x,[S,e(a)])]),J,n("h2",G,[$,j,n("a",q,[T,e(a)])]),w,n("h2",V,[E,N,n("a",B,[D,e(a)])]),F],64)}var C=c(b,[["render",I]]);export{C as default};
