import{e as n}from"./app.ae0e5040.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var e="/notes/assets/bffe40ee75a8ea91315096bb6b2b3768.6566cebf.png",a="/notes/assets/85a5e57f31bab0be3dddcdacccf98a2c.cf36d2b1.png";const r={},l=n(`<h3 id="vuex\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#vuex\u662F\u4EC0\u4E48" aria-hidden="true">#</a> vuex\u662F\u4EC0\u4E48\uFF1F</h3><p><code>Vuex \u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002</code></p><h3 id="\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528" aria-hidden="true">#</a> \u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\uFF1F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u591A\u4E2A\u89C6\u56FE\u4F9D\u8D56\u4E8E\u540C\u4E00\u72B6\u6001\u3002
\u6765\u81EA\u4E0D\u540C\u89C6\u56FE\u7684\u884C\u4E3A\u9700\u8981\u53D8\u66F4\u540C\u4E00\u72B6\u6001\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u7EC4\u6210\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u6210\u90E8\u5206" aria-hidden="true">#</a> \u7EC4\u6210\u90E8\u5206</h3><p>$\\color{blue}{\u4EE5\u4E0B\u662F\u4E00\u4E2A\u8868\u793A\u201C\u5355\u5411\u6570\u636E\u6D41\u201D\u7406\u5FF5\u7684\u7B80\u5355\u793A\u610F\uFF1A}$ <img src="`+e+'" alt="bffe40ee75a8ea91315096bb6b2b3768.png"></p><p>\u8FD9\u4E2A\u72B6\u6001\u81EA\u7BA1\u7406\u5E94\u7528\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\uFF1A</p><ul><li>state\uFF0C\u9A71\u52A8\u5E94\u7528\u7684\u6570\u636E\u6E90\uFF1B</li><li>view\uFF0C\u4EE5\u58F0\u660E\u65B9\u5F0F\u5C06 state \u6620\u5C04\u5230\u89C6\u56FE\uFF1B</li><li>actions\uFF0C\u54CD\u5E94\u5728 view \u4E0A\u7684\u7528\u6237\u8F93\u5165\u5BFC\u81F4\u7684\u72B6\u6001\u53D8\u5316\u3002</li></ul><p>$\\color{red}{vuex\u539F\u7406\u56FE}$ <img src="'+a+`" alt="85a5e57f31bab0be3dddcdacccf98a2c.png"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BE5\u6587\u4EF6\u7528\u4E8E\u521B\u5EFA\u6838\u5FC3store
import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;

Vue.use(Vuex)

// actions\u7528\u4E8E\u54CD\u5E94\u7EC4\u4EF6\u4E2D\u7684\u52A8\u4F5C
const actions = {}

// mutations\u7528\u4E8E\u64CD\u4F5C\u6570\u636Estate
const mutations = {}

// state\u7528\u4E8E\u5B58\u50A8\u6570\u636E
const state = {}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
})

// \u66B4\u9732store
export default store
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,10);function c(t,b){return l}var u=s(r,[["render",c]]);export{u as default};
