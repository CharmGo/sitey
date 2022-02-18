import{e as n}from"./app.ae0e5040.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h1 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h1><p>1.\u5C06 Electron Forge \u6DFB\u52A0\u5230\u60A8\u5E94\u7528\u7684\u5F00\u53D1\u4F9D\u8D56\u4E2D\uFF0C\u5E76\u4F7F\u7528\u5176&quot;import&quot;\u547D\u4EE4\u8BBE\u7F6E Forge \u7684\u811A\u624B\u67B6\uFF1A <code>npm install --save-dev @electron-forge/cli</code><code>npx electron-forge import</code> 2.\u4F7F\u7528 Forge \u7684 make \u547D\u4EE4\u6765\u521B\u5EFA\u53EF\u5206\u53D1\u7684\u5E94\u7528\u7A0B\u5E8F\uFF1A <code>npm run make</code></p><h3 id="\u6253\u5305\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u914D\u7F6E" aria-hidden="true">#</a> \u6253\u5305\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &quot;config&quot;: {
    &quot;forge&quot;: {
      &quot;packagerConfig&quot;: {},
      &quot;makers&quot;: [
        {
          &quot;name&quot;: &quot;@electron-forge/maker-squirrel&quot;,
          &quot;config&quot;: {
            &quot;name&quot;: &quot;vit&quot;
          }
        },
        {
          &quot;name&quot;: &quot;@electron-forge/maker-zip&quot;,
          &quot;platforms&quot;: [
            &quot;darwin&quot;
          ]
        },
        {
          &quot;name&quot;: &quot;@electron-forge/maker-deb&quot;,
          &quot;config&quot;: {
            &quot;name&quot;: &quot;vit&quot;
          }
        },
        {
          &quot;name&quot;: &quot;@electron-forge/maker-rpm&quot;,
          &quot;config&quot;: {
            &quot;name&quot;: &quot;vit&quot;
          }
        }
      ]
    }
  }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u4E24\u4E2A\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u6A21\u5757" aria-hidden="true">#</a> \u4E24\u4E2A\u6A21\u5757</h2><p>app \u6A21\u5757\uFF0C\u5B83\u63A7\u5236\u5E94\u7528\u7A0B\u5E8F\u7684\u4E8B\u4EF6\u751F\u547D\u5468\u671F\u3002 BrowserWindow \u6A21\u5757\uFF0C\u5B83\u521B\u5EFA\u548C\u7BA1\u7406\u5E94\u7528\u7A0B\u5E8F\u7A97\u53E3\u3002</p><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><ul><li><p><code>window-all-closed</code> \u6240\u6709\u7A97\u53E3\u90FD\u5173\u95ED\u65F6\u89E6\u53D1</p></li><li><p><code>activate</code> <sup>macOS</sup> \u5F53\u5E94\u7528\u91CD\u65B0\u88AB\u6FC0\u6D3B\u65F6\u89E6\u53D1</p></li></ul>`,8);function r(o,l){return s}var p=e(a,[["render",r]]);export{p as default};
