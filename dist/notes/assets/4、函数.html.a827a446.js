import{e as n}from"./app.bfc0a8ee.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h2 id="\u51FD\u6570\u7684\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u58F0\u660E" aria-hidden="true">#</a> \u51FD\u6570\u7684\u58F0\u660E</h2><ul><li>\u58F0\u660E\u8FD4\u56DE\u503C\u7C7B\u578B</li><li>\u51FD\u6570\u53C2\u6570</li><li>\u51FD\u6570\u4F53</li><li>return\u8BED\u53E5</li></ul><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>#include&lt;stdio.h&gt;
// \u51FD\u6570\u7684\u5B9A\u4E49
int func(int i){
	return i;
}

int main(){
	printf(&quot;%d&quot;,func(666));
	return 0;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="exit" tabindex="-1"><a class="header-anchor" href="#exit" aria-hidden="true">#</a> exit()</h3><p><code>exit()</code> \u7EC8\u6B62\u6574\u4E2A\u7A0B\u5E8F\u7684\u8FD0\u884C\uFF0C\u5B9A\u4E49\u4E8E<code>stdlib.h</code>\u3002 \u4F7F\u7528<code>EXIT_SUCCESS</code>\u548C<code>EXIT_FAILURE</code>\u4F5C\u4E3A\u53C2\u6570\u6765\u7EC8\u6B62\u7A0B\u5E8F\u3002</p><h3 id="ataxit" tabindex="-1"><a class="header-anchor" href="#ataxit" aria-hidden="true">#</a> ataxit()</h3><p><code>ataxit(void (*func)(void))</code> \u7528\u4E8E<code>exit()</code>\u9000\u51FA\u7A0B\u5E8F\u65F6\uFF0C\u6267\u884C\u5176\u4ED6\u51FD\u6570</p><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

void getout(void);

int func(int i) {
	return i;
}

int main() {
	printf(&quot;%d&quot;,func(12));

	atexit(getout);
	exit(EXIT_SUCCESS);
}

void getout(void) {
	printf(&quot;\\nexit program...\\n&quot;);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u51FD\u6570\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8BF4\u660E\u7B26" aria-hidden="true">#</a> \u51FD\u6570\u8BF4\u660E\u7B26</h2><h3 id="extern" tabindex="-1"><a class="header-anchor" href="#extern" aria-hidden="true">#</a> extern</h3><p><code>extern</code> \u5BF9\u4E8E\u591A\u6587\u4EF6\u9879\u76EE\uFF0C\u6E90\u7801\u6587\u4EF6\u4F1A\u7528\u5230\u5176\u4ED6\u6587\u4EF6\u7684\u51FD\u6570\u3002 \u9700\u8981\u5728\u5F53\u524D\u6587\u4EF6\u91CC\u7ED9\u5916\u90E8\u51FD\u6570\u5B9A\u4E49\u539F\u578B\uFF0C\u5E76\u7528<code>extern</code>\u6765\u8BF4\u660E\u51FD\u6570\u7684\u5B9A\u4E49\u6765\u81EA\u5176\u4ED6\u6587\u4EF6\u3002</p><h3 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h3><p><code>static</code></p><ul><li><code>static</code>\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u58F0\u660E\u53D8\u91CF\u65F6\uFF0C\u8868\u793A\u8BE5\u53D8\u91CF\u53EA\u9700\u8981\u521D\u59CB\u5316\u4E00\u6B21\uFF0C\u4F7F\u53D8\u91CF\u201D\u9759\u6001\u8C03\u7528\u201C</li><li><code>static</code>\u7528\u4E8E\u4FEE\u9970\u51FD\u6570\u65F6\uFF0C\u8BE5\u51FD\u6570\u53EA\u80FD\u5728\u5F53\u524D\u6587\u4EF6\u91CC\u4F7F\u7528</li><li><code>static</code>\u4E5F\u53EF\u4EE5\u7528\u5728\u53C2\u6570\u91CC\uFF0C\u4FEE\u9970\u53C2\u6570\u6570\u7EC4 <ul><li>\u8868\u793A\u6570\u7EC4\u957F\u5EA6\u81F3\u5C11\u4E3A3\u3002</li><li>\u5728\u591A\u7EF4\u6570\u7EC4\u91CC<code>static</code>\u4EC5\u53EF\u7528\u4E8E\u7B2C\u4E00\u7EF4\u7684\u8BF4\u660E\u3002</li></ul></li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">sum_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token keyword">static</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h3><p><code>const</code> \u8868\u793A\u51FD\u6570\u5185\u90E8\u4E0D\u5F97\u4FEE\u6539\u8BE5\u53C2\u6570\u53D8\u91CF</p><h2 id="\u53EF\u53D8\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u53D8\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u53D8\u53C2\u6570</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">double</span> <span class="token function">average</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">double</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  va_list ap<span class="token punctuation">;</span>
  <span class="token function">va_start</span><span class="token punctuation">(</span>ap<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    total <span class="token operator">+=</span> <span class="token function">va_arg</span><span class="token punctuation">(</span>ap<span class="token punctuation">,</span> <span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">va_end</span><span class="token punctuation">(</span>ap<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> total <span class="token operator">/</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,19);function t(p,c){return e}var o=a(s,[["render",t]]);export{o as default};
