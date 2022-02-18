import{r,o,c as l,a as n,b as s,F as c,d as e,e as t}from"./app.bfc0a8ee.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},p=n("h2",{id:"javascript-js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript-js","aria-hidden":"true"},"#"),e(" JavaScript(JS)")],-1),b=e("\u662F\u4E00\u79CD\u5177\u5177\u6709"),u={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function",target:"_blank",rel:"noopener noreferrer"},h=e("\u51FD\u6570\u4F18\u5148"),m=e("\u7684\u8F7B\u91CF\u7EA7\uFF0C\u89E3\u91CA\u578B\u6216\u5373\u65F6\u7F16\u8BD1\u578B\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C \u662F\u4E00\u79CD"),g={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Prototype-based_programming",target:"_blank",rel:"noopener noreferrer"},f=e("\u57FA\u4E8E\u539F\u578B\u7F16\u7A0B"),_=e("\u3001\u591A\u8303\u5F0F\u7684\u52A8\u6001\u811A\u672C\u8BED\u8A00\uFF0C\u5E76\u4E14\u652F\u6301\u9762\u5411\u5BF9\u8C61\u3001\u547D\u4EE4\u5F0F\u548C\u58F0\u660E\u5F0F\uFF08\u5982\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF09\u98CE\u683C\u3002"),x=t(`<hr><h2 id="\u51FD\u6570\u4F18\u5148" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F18\u5148" aria-hidden="true">#</a> \u51FD\u6570\u4F18\u5148</h2><p>\u5F53\u4E00\u95E8\u7F16\u7A0B\u8BED\u8A00\u7684\u51FD\u6570\u53EF\u4EE5\u88AB\u5F53\u4F5C\u53D8\u91CF\u4E00\u6837\u7528\u65F6\uFF0C\u5219\u79F0\u8FD9\u95E8\u8BED\u8A00\u62E5\u6709\u5934\u7B49\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53D8\u91CF\u8C03\u7528\u51FD\u6570
const foo = function() {
   console.log(&quot;foobar&quot;);
}

foo();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570
function sayHello() {
   return &quot;Hello, &quot;;
}

function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// \u4F20\u9012 \`sayHello\` \u4F5C\u4E3A \`greeting\` \u51FD\u6570\u7684\u53C2\u6570
greeting(sayHello, &quot;JavaScript!&quot;); // Hello, JavaScript!
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr><h2 id="\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> \u56DE\u8C03\u51FD\u6570</h2><p>\u628A\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C31\u79F0\u8FD9\u4E2A\u51FD\u6570\u4E3A\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function one(name){
	return name
}

function two(func){
	console.log(&quot;hi&quot;,func)
}
// \u51FD\u6570one()\u662Ftwo()\u7684\u56DE\u8C03\u51FD\u6570
two(one(&#39;charm&#39;))
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr><h2 id="\u9AD8\u9636\u51FD\u6570-higher-order-function" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u51FD\u6570-higher-order-function" aria-hidden="true">#</a> \u9AD8\u9636\u51FD\u6570\uFF08Higher-Order Function\uFF09</h2><p>\u4E00\u4E2A\u8FD4\u56DE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u7684\u51FD\u6570\u88AB\u79F0\u4E3A\u9AD8\u9636\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function one(name){
	return name
}

function two(func){
	console.log(&quot;hi&quot;,func)
    return function(){
        console.log(&#39;is so bad!&#39;)
    }
}
// two\u662F\u4E00\u4E2A\u9AD8\u9636\u51FD\u6570\uFF0Cbad()\u3001two(one(&quot;charm&quot;))\u8C03\u7528\u4E86two\u7684\u8FD4\u56DE\u503C
const bad = two(one(&quot;charm&quot;))
bad()
two(one(&quot;charm&quot;))()

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><hr><h2 id="\u539F\u578B\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u7F16\u7A0B" aria-hidden="true">#</a> \u539F\u578B\u7F16\u7A0B</h2><p>\u662F\u4E00\u79CD \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B \u7684\u98CE\u683C\u3002\u5728\u8FD9\u79CD\u98CE\u683C\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u663E\u5F0F\u5730\u5B9A\u4E49\u7C7B \uFF0C\u800C\u4F1A\u901A\u8FC7\u5411\u5176\u5B83\u7C7B\u7684\u5B9E\u4F8B\uFF08\u5BF9\u8C61\uFF09\u4E2D\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5\u6765\u521B\u5EFA\u7C7B\uFF0C\u751A\u81F3\u5076\u5C14\u4F7F\u7528\u7A7A\u5BF9\u8C61\u521B\u5EFA\u7C7B\u3002 \u7B80\u5355\u6765\u8BF4\uFF0C\u8FD9\u79CD\u98CE\u683C\u662F\u5728\u4E0D\u5B9A\u4E49$\\color{red}{class}$\u7684\u60C5\u51B5\u4E0B\u521B\u5EFA\u4E00\u4E2A $\\color{blue}{object}$\u3002</p><hr><h3 id="\u5783\u573E\u6536\u96C6" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u6536\u96C6" aria-hidden="true">#</a> \u5783\u573E\u6536\u96C6</h3><p><code>\u627E\u51FA\u90A3\u4E9B\u4E0D\u518D\u7EE7\u7EED\u4F7F\u7528\u7684\u53D8\u91CF\uFF0C\u7136\u540E\u91CA\u653E\u5176\u5360\u7528\u7684\u5185\u5B58</code></p><ol><li>\u6807\u8BB0\u6E05\u9664</li><li>\u5F15\u7528\u8BA1\u6570</li></ol><h3 id="\u5185\u5B58\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u7BA1\u7406" aria-hidden="true">#</a> \u5185\u5B58\u7BA1\u7406</h3><p>\u5C06\u53D8\u91CF\u503C\u8BBE\u7F6E\u4E3A null \u6765\u91CA\u653E\u5176\u5F15\u7528\u2014\u2014\u8FD9\u4E2A \u505A\u6CD5\u53EB\u505A\u89E3\u9664\u5F15\u7528\uFF08dereferencing\uFF09</p><h3 id="\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u5F15\u7528\u7C7B\u578B</h3><h4 id="color-blue-object\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#color-blue-object\u7C7B\u578B" aria-hidden="true">#</a> $\\color{blue}{Object\u7C7B\u578B}$</h4><pre><code>	\u521B\u5EFAobject\u5B9E\u4F8B\u7684\u4E24\u79CD\u65B9\u5F0F\uFF1A
				1. \u4F7F\u7528new\u64CD\u4F5C\u7B26\u540E\u8DDFObject\u6784\u9020\u51FD\u6570
				2.	\u4F7F\u7528\u5BF9\u8C61\u5B57\u9762\u91CF\u8868\u793A\u6CD5
</code></pre><h4 id="color-blue-array\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#color-blue-array\u7C7B\u578B" aria-hidden="true">#</a> $\\color{blue}{Array\u7C7B\u578B}$</h4><pre><code>   \u521B\u5EFAArray\u5B9E\u4F8B\u7684\u4E24\u79CD\u65B9\u5F0F\uFF1A
   	1.\u4F7F\u7528new\u64CD\u4F5C\u7B26\u540E\u8DDFArray\u6784\u9020\u51FD\u6570
	2.\u4F7F\u7528\`[]\`\u5B57\u9762\u91CF\u521B\u5EFA
</code></pre><h6 id="color-red-\u68C0\u6D4B\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#color-red-\u68C0\u6D4B\u6570\u7EC4" aria-hidden="true">#</a> $\\color{red}{\u68C0\u6D4B\u6570\u7EC4}$:</h6><p><code>Array.isArray(value)</code></p><h5 id="color-red-\u8F6C\u6362\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#color-red-\u8F6C\u6362\u65B9\u6CD5" aria-hidden="true">#</a> $\\color{red}{\u8F6C\u6362\u65B9\u6CD5}$\uFF1A</h5><p>\u6240\u6709\u5BF9\u8C61\u90FD\u5177\u6709<code>toLocaleString()</code>,<code>toString()</code>,<code>valueOf()</code></p><p><code>toString()</code>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u503C\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u62FC\u63A5\u800C\u6210\u7684\u4E00\u4E2A\u4EE5\u9017\u53F7\u5206\u5272\u7684\u5B57\u7B26\u4E32\u3002 <code>valueOf()</code>\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F46\u4E3A\u6570\u7EC4\u7684\u5143\u7D20\u8C03\u7528<code>toString()</code>\u3002</p>`,32);function v(q,y){const a=r("ExternalLinkIcon");return o(),l(c,null,[p,n("p",null,[b,n("a",u,[h,s(a)]),m,n("a",g,[f,s(a)]),_]),x],64)}var j=i(d,[["render",v]]);export{j as default};
