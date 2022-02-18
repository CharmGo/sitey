import{e as a}from"./app.ae0e5040.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},s=a(`<h2 id="color-red-notes" tabindex="-1"><a class="header-anchor" href="#color-red-notes" aria-hidden="true">#</a> $\\color{red}{notes:}$</h2><p>\u5728\u4F7F\u7528$\\color{red}{data}$\u65F6\u5E94\u63D0\u524D\u5B9A\u4E49\u6240\u4F7F\u7528\u7684\u6570\u636E\u53D8\u91CF,\u4E0D\u80FD\u540E\u6765\u6DFB\u52A0\u5C5E\u6027\u6765\u4F7F\u7528Vue\u76F8\u5E94\u5F0F\u7684\u4F7F\u7528\u6570\u636E</p><p>\u53EF\u4EE5\u4F7F\u7528$\\color{red}{Object.freeze()}$ \u6765\u963B\u6B62\u4FEE\u6539\u73B0\u6709\u5C5E\u6027,\u4F7F\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u65E0\u6CD5\u518D\u8FFD\u8E2A\u53D8\u5316</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var data={
        a:1,
    };
    data.b = &quot;test...&quot;
    var vm = new Vue({
        el:&#39;#app&#39;,
        data:data
});
Object.freeze(data) //\u4F7F\u7528\u540E\u5C06\u65E0\u6CD5\u4FEE\u6539data
console.log(data.a)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>$\\color{red}{Vue}$\u66B4\u9732\u4E86\u4E00\u4E9B\u5B9E\u4F8B\u5C5E\u6027\u4E0E\u65B9\u6CD5,\u5B83\u4EEC\u90FD\u4EE5$\\color{red}{$}$\u4E3A\u524D\u7F00: vm.$data.a</p><p>\u5B9E\u4F8B\u65B9\u6CD5:$\\color{red}{$watch()}$ \u4F5C\u7528:\u89C2\u5BDF\u53D8\u91CF,\u8FD4\u56DE\u53D8\u91CF\u53D8\u5316\u524D\u548C\u53D8\u5316\u540E\u7684\u7ED3\u679C \u5B9E\u4F8B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var data = {a: 1};
    var vm = new Vue({
        el: &#39;#app&#39;,
        data: data
    });
    vm.$watch(&#39;a&#39;, function(newval, oldval) {
        alert(newval, oldval)
    })
    vm.$data.a = 5;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,7);function r(l,p){return s}var d=n(e,[["render",r]]);export{d as default};
