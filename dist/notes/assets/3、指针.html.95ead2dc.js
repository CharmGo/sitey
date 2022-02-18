import{e as n}from"./app.bfc0a8ee.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const e={},s=n(`<h2 id="\u5173\u4E8E\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u6307\u9488" aria-hidden="true">#</a> \u5173\u4E8E\u6307\u9488</h2><p>type* \u53D8\u91CF \u53D8\u91CF\u5B58\u50A8\u7684\u662F\u4E00\u4E2A\u5185\u5B58\u5730\u5740</p><p>type** \u53D8\u91CF \u53D8\u91CF\u5B58\u50A8\u7684\u662F\u53E6\u4E00\u4E2A\u6307\u9488\u7684\u5185\u5B58\u5730\u5740</p><hr><h3 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> *\u8FD0\u7B97\u7B26</h3><p><code>\u7528\u6765\u53D6\u51FA\u6307\u9488\u53D8\u91CF\u6240\u6307\u5411\u7684\u5185\u5B58\u5730\u5740\u91CC\u9762\u7684\u503C\u3002</code></p><h3 id="\u8FD0\u7B97\u7B26-1" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26-1" aria-hidden="true">#</a> &amp;\u8FD0\u7B97\u7B26</h3><p><code>&amp;\u8FD0\u7B97\u7B26\u7528\u6765\u53D6\u51FA\u4E00\u4E2A\u53D8\u91CF\u6240\u5728\u7684\u5185\u5B58\u5730\u5740</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#include&lt;stdio.h&gt;
int main()
{
	int i;
	int* p=NULL;

	i = 1;
	p = &amp;i;
	*p = 13;

	printf(&quot;i\u7684\u5B58\u50A8\u5728\u5185\u5B58\u7684\u5730\u5740\u4E3A:%p\\n&quot;,&amp;i);
	printf(&quot;\u5C06i\u7684\u5185\u5B58\u5730\u5740\u5B58\u5728\u6307\u9488p\u91CC\uFF0C\u8F93\u51FA\u6307\u9488p\uFF1A%p\\n&quot;,p);
	printf(&quot;i\u7684\u503C\u88AB\u6307\u9488p\u6539\u6210\u4E8613:%d\\n&quot;,i);

	return 0;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u51FD\u6570\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u6307\u9488" aria-hidden="true">#</a> \u51FD\u6570\u6307\u9488</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#include&lt;stdio.h&gt;
void print();

int main(){

    void (*i)(int) = &amp;print;
    // printf(&quot;%p&quot;,*i);
    if(print == &amp;print){
        (*i)(10);
    }
    
    i(18);
    
    return 0;
}

void print(int a){
    printf(&quot;%d\\n&quot;,a);
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="exit" tabindex="-1"><a class="header-anchor" href="#exit" aria-hidden="true">#</a> exit()</h2><p>exit()\u51FD\u6570\u7528\u6765\u7EC8\u6B62\u6574\u4E2A\u7A0B\u5E8F\u7684\u8FD0\u884C\u3002\u4E00\u65E6\u6267\u884C\u5230\u8BE5\u51FD\u6570\uFF0C\u7A0B\u5E8F\u5C31\u4F1A\u7ACB\u5373\u7ED3\u675F\u3002\u8BE5\u51FD\u6570\u7684\u539F\u578B\u5B9A\u4E49\u5728\u5934\u6587\u4EF6stdlib.h\u91CC\u9762\u3002</p><p>exit()\u53EF\u4EE5\u5411\u7A0B\u5E8F\u5916\u90E8\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u5B83\u7684\u53C2\u6570\u5C31\u662F\u7A0B\u5E8F\u7684\u8FD4\u56DE\u503C\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u4F7F\u7528\u4E24\u4E2A\u5E38\u91CF\u4F5C\u4E3A\u5B83\u7684\u53C2\u6570\uFF1AEXIT_SUCCESS\uFF08\u76F8\u5F53\u4E8E 0\uFF09\u8868\u793A\u7A0B\u5E8F\u8FD0\u884C\u6210\u529F\uFF0CEXIT_FAILURE\uFF08\u76F8\u5F53\u4E8E 1\uFF09\u8868\u793A\u7A0B\u5E8F\u5F02\u5E38\u4E2D\u6B62\u3002\u8FD9\u4E24\u4E2A\u5E38\u6570\u4E5F\u662F\u5B9A\u4E49\u5728stdlib.h\u91CC\u9762\u3002</p><h2 id="atexit" tabindex="-1"><a class="header-anchor" href="#atexit" aria-hidden="true">#</a> atexit()</h2><p>\u7528\u6765\u767B\u8BB0exit()\u6267\u884C\u65F6\u989D\u5916\u6267\u884C\u7684\u51FD\u6570\uFF0C\u7528\u6765\u505A\u4E00\u4E9B\u9000\u51FA\u7A0B\u5E8F\u65F6\u7684\u6536\u5C3E\u5DE5\u4F5C <code>int atexit(void (*func)(void));</code></p><hr><h2 id="\u51FD\u6570\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8BF4\u660E\u7B26" aria-hidden="true">#</a> \u51FD\u6570\u8BF4\u660E\u7B26</h2><ul><li><h3 id="extern-\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#extern-\u8BF4\u660E\u7B26" aria-hidden="true">#</a> extern \u8BF4\u660E\u7B26</h3></li></ul><p>\u5BF9\u4E8E\u591A\u6587\u4EF6\u7684\u9879\u76EE\uFF0C\u6E90\u7801\u6587\u4EF6\u4F1A\u7528\u5230\u5176\u4ED6\u6587\u4EF6\u58F0\u660E\u7684\u51FD\u6570\u3002\u8FD9\u65F6\uFF0C\u5F53\u524D\u6587\u4EF6\u91CC\u9762\uFF0C\u9700\u8981\u7ED9\u51FA\u5916\u90E8\u51FD\u6570\u7684\u539F\u578B\uFF0C\u5E76\u7528extern\u8BF4\u660E\u8BE5\u51FD\u6570\u7684\u5B9A\u4E49\u6765\u81EA\u5176\u4ED6\u6587\u4EF6\u3002</p><ul><li><h3 id="static-\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#static-\u8BF4\u660E\u7B26" aria-hidden="true">#</a> static \u8BF4\u660E\u7B26</h3></li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u6B21\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u51FD\u6570\u7684\u5185\u90E8\u53D8\u91CF\u90FD\u4F1A\u91CD\u65B0\u521D\u59CB\u5316\uFF0C\u4E0D\u4F1A\u4FDD\u7559\u4E0A\u4E00\u6B21\u8FD0\u884C\u7684\u503C\u3002static\u8BF4\u660E\u7B26\u53EF\u4EE5\u6539\u53D8\u8FD9\u79CD\u884C\u4E3A\u3002</p><ul><li><h3 id="const-\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#const-\u8BF4\u660E\u7B26" aria-hidden="true">#</a> const \u8BF4\u660E\u7B26</h3></li></ul><p>\u51FD\u6570\u53C2\u6570\u91CC\u9762\u7684const\u8BF4\u660E\u7B26\uFF0C\u8868\u793A\u51FD\u6570\u5185\u90E8\u4E0D\u5F97\u4FEE\u6539\u8BE5\u53C2\u6570\u53D8\u91CF\u3002</p><h2 id="\u6570\u7EC4\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488</h2><p>\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u5185\u5B58\u5730\u5740\u8868\u793A\u7740\u6570\u7EC4\u7684\u5730\u5740</p>`,26);function r(i,p){return s}var c=a(e,[["render",r]]);export{c as default};
