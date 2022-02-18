"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueRouter = require("vue-router");
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$t;
  })),
  "v-372e1400": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _1______html$2;
  })),
  "v-00f307d9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _2_printf_html$2;
  })),
  "v-e4db34c6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _3____html$2;
  })),
  "v-5e3ce9b8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _4____html$2;
  })),
  "v-936c3cec": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _5____html$2;
  })),
  "v-4865d122": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _6_____html$2;
  })),
  "v-50d25096": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return C__Json___html$2;
  })),
  "v-5cd2a837": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return C__________html$2;
  })),
  "v-4a99c884": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return C_________html$2;
  })),
  "v-1a3a2105": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$r;
  })),
  "v-fb262906": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Git_html$2;
  })),
  "v-83a32798": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return tip_html$2;
  })),
  "v-04a7b2af": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$h;
  })),
  "v-1596d78b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return JavaScript___html$2;
  })),
  "v-e02a086e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$p;
  })),
  "v-9c377a1c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Selenium_html$2;
  })),
  "v-8f69baa8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return axios_html$2;
  })),
  "v-01c141d0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return canvas_html$2;
  })),
  "v-5f47777f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return js___html$2;
  })),
  "v-304f1580": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$f;
  })),
  "v-20bfb01e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return __javascript_html$2;
  })),
  "v-f0383c18": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$n;
  })),
  "v-1aaf1340": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return echo_html$2;
  })),
  "v-32db7ed0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return tcpdump_html$2;
  })),
  "v-e69c6640": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$d;
  })),
  "v-08e8e01d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ___html$8;
  })),
  "v-11b35267": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$b;
  })),
  "v-ae048d4e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____arp___html$2;
  })),
  "v-60a2f6b8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return __deb_html$2;
  })),
  "v-72881372": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$l;
  })),
  "v-ac6cd20e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return use_html$2;
  })),
  "v-6d739bbb": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Class_html$2;
  })),
  "v-63cd5dba": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$j;
  })),
  "v-7115a32f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return chrNet_html$2;
  })),
  "v-736bb064": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return django_html$2;
  })),
  "v-47485488": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return xlwings______excel___html$2;
  })),
  "v-6821f654": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$9;
  })),
  "v-75a3ffce": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____django___html$2;
  })),
  "v-dcabfe22": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$h;
  })),
  "v-11ddaf4e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$7;
  })),
  "v-1c0cff34": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ____html$2;
  })),
  "v-a8e497dc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _1_______html$2;
  })),
  "v-21cfc464": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _2___________html$2;
  })),
  "v-f05262b2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _3_________html$2;
  })),
  "v-4e3e11a7": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _4_________html$2;
  })),
  "v-1b16a914": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _5___Vue____html$2;
  })),
  "v-507b795f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _6______html$2;
  })),
  "v-2a126896": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _7_Vue___html$2;
  })),
  "v-634ae41f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _8_vuex_html$2;
  })),
  "v-7d985dbc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _9_vueRouter_html$2;
  })),
  "v-672ecad2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$f;
  })),
  "v-ef622eb6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return emoji_html$2;
  })),
  "v-1c3dc2ea": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return vuepress_html$2;
  })),
  "v-2135e2c4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return webpack_____html$2;
  })),
  "v-250fbd0a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ___html$6;
  })),
  "v-940e4bdc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ___html$4;
  })),
  "v-69a8f6db": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$d;
  })),
  "v-e2bda588": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return electron_html$2;
  })),
  "v-02c9d8f1": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return fs_html$2;
  })),
  "v-3be30e5b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return nodejs___html$2;
  })),
  "v-58d4996a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$b;
  })),
  "v-2dba119c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return socket_html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$9;
  }).then(({ data: data2 }) => data2),
  "v-372e1400": () => Promise.resolve().then(function() {
    return _1______html;
  }).then(({ data: data2 }) => data2),
  "v-00f307d9": () => Promise.resolve().then(function() {
    return _2_printf_html;
  }).then(({ data: data2 }) => data2),
  "v-e4db34c6": () => Promise.resolve().then(function() {
    return _3____html;
  }).then(({ data: data2 }) => data2),
  "v-5e3ce9b8": () => Promise.resolve().then(function() {
    return _4____html;
  }).then(({ data: data2 }) => data2),
  "v-936c3cec": () => Promise.resolve().then(function() {
    return _5____html;
  }).then(({ data: data2 }) => data2),
  "v-4865d122": () => Promise.resolve().then(function() {
    return _6_____html;
  }).then(({ data: data2 }) => data2),
  "v-50d25096": () => Promise.resolve().then(function() {
    return C__Json___html;
  }).then(({ data: data2 }) => data2),
  "v-5cd2a837": () => Promise.resolve().then(function() {
    return C__________html;
  }).then(({ data: data2 }) => data2),
  "v-4a99c884": () => Promise.resolve().then(function() {
    return C_________html;
  }).then(({ data: data2 }) => data2),
  "v-1a3a2105": () => Promise.resolve().then(function() {
    return index_html$8;
  }).then(({ data: data2 }) => data2),
  "v-fb262906": () => Promise.resolve().then(function() {
    return Git_html;
  }).then(({ data: data2 }) => data2),
  "v-83a32798": () => Promise.resolve().then(function() {
    return tip_html;
  }).then(({ data: data2 }) => data2),
  "v-04a7b2af": () => Promise.resolve().then(function() {
    return _____html$5;
  }).then(({ data: data2 }) => data2),
  "v-1596d78b": () => Promise.resolve().then(function() {
    return JavaScript___html;
  }).then(({ data: data2 }) => data2),
  "v-e02a086e": () => Promise.resolve().then(function() {
    return index_html$7;
  }).then(({ data: data2 }) => data2),
  "v-9c377a1c": () => Promise.resolve().then(function() {
    return Selenium_html;
  }).then(({ data: data2 }) => data2),
  "v-8f69baa8": () => Promise.resolve().then(function() {
    return axios_html;
  }).then(({ data: data2 }) => data2),
  "v-01c141d0": () => Promise.resolve().then(function() {
    return canvas_html;
  }).then(({ data: data2 }) => data2),
  "v-5f47777f": () => Promise.resolve().then(function() {
    return js___html;
  }).then(({ data: data2 }) => data2),
  "v-304f1580": () => Promise.resolve().then(function() {
    return _____html$4;
  }).then(({ data: data2 }) => data2),
  "v-20bfb01e": () => Promise.resolve().then(function() {
    return __javascript_html;
  }).then(({ data: data2 }) => data2),
  "v-f0383c18": () => Promise.resolve().then(function() {
    return index_html$6;
  }).then(({ data: data2 }) => data2),
  "v-1aaf1340": () => Promise.resolve().then(function() {
    return echo_html;
  }).then(({ data: data2 }) => data2),
  "v-32db7ed0": () => Promise.resolve().then(function() {
    return tcpdump_html;
  }).then(({ data: data2 }) => data2),
  "v-e69c6640": () => Promise.resolve().then(function() {
    return _____html$3;
  }).then(({ data: data2 }) => data2),
  "v-08e8e01d": () => Promise.resolve().then(function() {
    return ___html$2;
  }).then(({ data: data2 }) => data2),
  "v-11b35267": () => Promise.resolve().then(function() {
    return _____html$2;
  }).then(({ data: data2 }) => data2),
  "v-ae048d4e": () => Promise.resolve().then(function() {
    return _____arp___html;
  }).then(({ data: data2 }) => data2),
  "v-60a2f6b8": () => Promise.resolve().then(function() {
    return __deb_html;
  }).then(({ data: data2 }) => data2),
  "v-72881372": () => Promise.resolve().then(function() {
    return index_html$5;
  }).then(({ data: data2 }) => data2),
  "v-ac6cd20e": () => Promise.resolve().then(function() {
    return use_html;
  }).then(({ data: data2 }) => data2),
  "v-6d739bbb": () => Promise.resolve().then(function() {
    return Class_html;
  }).then(({ data: data2 }) => data2),
  "v-63cd5dba": () => Promise.resolve().then(function() {
    return index_html$4;
  }).then(({ data: data2 }) => data2),
  "v-7115a32f": () => Promise.resolve().then(function() {
    return chrNet_html;
  }).then(({ data: data2 }) => data2),
  "v-736bb064": () => Promise.resolve().then(function() {
    return django_html;
  }).then(({ data: data2 }) => data2),
  "v-47485488": () => Promise.resolve().then(function() {
    return xlwings______excel___html;
  }).then(({ data: data2 }) => data2),
  "v-6821f654": () => Promise.resolve().then(function() {
    return _____html$1;
  }).then(({ data: data2 }) => data2),
  "v-75a3ffce": () => Promise.resolve().then(function() {
    return _____django___html;
  }).then(({ data: data2 }) => data2),
  "v-dcabfe22": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-11ddaf4e": () => Promise.resolve().then(function() {
    return _____html;
  }).then(({ data: data2 }) => data2),
  "v-1c0cff34": () => Promise.resolve().then(function() {
    return ____html;
  }).then(({ data: data2 }) => data2),
  "v-a8e497dc": () => Promise.resolve().then(function() {
    return _1_______html;
  }).then(({ data: data2 }) => data2),
  "v-21cfc464": () => Promise.resolve().then(function() {
    return _2___________html;
  }).then(({ data: data2 }) => data2),
  "v-f05262b2": () => Promise.resolve().then(function() {
    return _3_________html;
  }).then(({ data: data2 }) => data2),
  "v-4e3e11a7": () => Promise.resolve().then(function() {
    return _4_________html;
  }).then(({ data: data2 }) => data2),
  "v-1b16a914": () => Promise.resolve().then(function() {
    return _5___Vue____html;
  }).then(({ data: data2 }) => data2),
  "v-507b795f": () => Promise.resolve().then(function() {
    return _6______html;
  }).then(({ data: data2 }) => data2),
  "v-2a126896": () => Promise.resolve().then(function() {
    return _7_Vue___html;
  }).then(({ data: data2 }) => data2),
  "v-634ae41f": () => Promise.resolve().then(function() {
    return _8_vuex_html;
  }).then(({ data: data2 }) => data2),
  "v-7d985dbc": () => Promise.resolve().then(function() {
    return _9_vueRouter_html;
  }).then(({ data: data2 }) => data2),
  "v-672ecad2": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-ef622eb6": () => Promise.resolve().then(function() {
    return emoji_html;
  }).then(({ data: data2 }) => data2),
  "v-1c3dc2ea": () => Promise.resolve().then(function() {
    return vuepress_html;
  }).then(({ data: data2 }) => data2),
  "v-2135e2c4": () => Promise.resolve().then(function() {
    return webpack_____html;
  }).then(({ data: data2 }) => data2),
  "v-250fbd0a": () => Promise.resolve().then(function() {
    return ___html$1;
  }).then(({ data: data2 }) => data2),
  "v-940e4bdc": () => Promise.resolve().then(function() {
    return ___html;
  }).then(({ data: data2 }) => data2),
  "v-69a8f6db": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-e2bda588": () => Promise.resolve().then(function() {
    return electron_html;
  }).then(({ data: data2 }) => data2),
  "v-02c9d8f1": () => Promise.resolve().then(function() {
    return fs_html;
  }).then(({ data: data2 }) => data2),
  "v-3be30e5b": () => Promise.resolve().then(function() {
    return nodejs___html;
  }).then(({ data: data2 }) => data2),
  "v-58d4996a": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-2dba119c": () => Promise.resolve().then(function() {
    return socket_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "/notes/",
  "lang": "zh-CN",
  "title": "charmgo",
  "description": "\u4E2A\u4EBA\u535A\u5BA2",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/notes/public/logo.png"
      }
    ]
  ],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales }));
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$1m = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$1l = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$1m);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$1l);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, {
      default: () => show.value ? backToTopEl : null
    });
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/README.md"]],
  ["v-372e1400", "/C/1%E3%80%81%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html", { "title": "" }, ["/C/1\u3001\u6570\u636E\u7C7B\u578B.html", "/C/1%E3%80%81%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B", "/C/1\u3001\u6570\u636E\u7C7B\u578B.md", "/C/1%E3%80%81%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md"]],
  ["v-00f307d9", "/C/2%E3%80%81printf.html", { "title": "" }, ["/C/2\u3001printf.html", "/C/2%E3%80%81printf", "/C/2\u3001printf.md", "/C/2%E3%80%81printf.md"]],
  ["v-e4db34c6", "/C/3%E3%80%81%E6%8C%87%E9%92%88.html", { "title": "" }, ["/C/3\u3001\u6307\u9488.html", "/C/3%E3%80%81%E6%8C%87%E9%92%88", "/C/3\u3001\u6307\u9488.md", "/C/3%E3%80%81%E6%8C%87%E9%92%88.md"]],
  ["v-5e3ce9b8", "/C/4%E3%80%81%E5%87%BD%E6%95%B0.html", { "title": "" }, ["/C/4\u3001\u51FD\u6570.html", "/C/4%E3%80%81%E5%87%BD%E6%95%B0", "/C/4\u3001\u51FD\u6570.md", "/C/4%E3%80%81%E5%87%BD%E6%95%B0.md"]],
  ["v-936c3cec", "/C/5%E3%80%81%E6%95%B0%E7%BB%84.html", { "title": "" }, ["/C/5\u3001\u6570\u7EC4.html", "/C/5%E3%80%81%E6%95%B0%E7%BB%84", "/C/5\u3001\u6570\u7EC4.md", "/C/5%E3%80%81%E6%95%B0%E7%BB%84.md"]],
  ["v-4865d122", "/C/6.%E5%AD%97%E7%AC%A6%E4%B8%B2.html", { "title": "" }, ["/C/6.\u5B57\u7B26\u4E32.html", "/C/6.%E5%AD%97%E7%AC%A6%E4%B8%B2", "/C/6.\u5B57\u7B26\u4E32.md", "/C/6.%E5%AD%97%E7%AC%A6%E4%B8%B2.md"]],
  ["v-50d25096", "/C/C%E8%AF%AD%E8%A8%80Json%E5%AE%9E%E7%8E%B0.html", { "title": "" }, ["/C/C\u8BED\u8A00Json\u5B9E\u73B0.html", "/C/C%E8%AF%AD%E8%A8%80Json%E5%AE%9E%E7%8E%B0", "/C/C\u8BED\u8A00Json\u5B9E\u73B0.md", "/C/C%E8%AF%AD%E8%A8%80Json%E5%AE%9E%E7%8E%B0.md"]],
  ["v-5cd2a837", "/C/C%E8%AF%AD%E8%A8%80%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0.html", { "title": "" }, ["/C/C\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0.html", "/C/C%E8%AF%AD%E8%A8%80%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0", "/C/C\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0.md", "/C/C%E8%AF%AD%E8%A8%80%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0.md"]],
  ["v-4a99c884", "/C/C%E8%AF%AD%E8%A8%80%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0.html", { "title": "" }, ["/C/C\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0.html", "/C/C%E8%AF%AD%E8%A8%80%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0", "/C/C\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0.md", "/C/C%E8%AF%AD%E8%A8%80%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0.md"]],
  ["v-1a3a2105", "/C/", { "title": "" }, ["/C/index.html", "/C/README.md"]],
  ["v-fb262906", "/git/Git.html", { "title": "Git" }, ["/git/Git", "/git/Git.md"]],
  ["v-83a32798", "/git/tip.html", { "title": "" }, ["/git/tip", "/git/tip.md"]],
  ["v-04a7b2af", "/git/%E6%9C%AC%E5%9C%B0%E6%8F%90%E4%BA%A4.html", { "title": "" }, ["/git/\u672C\u5730\u63D0\u4EA4.html", "/git/%E6%9C%AC%E5%9C%B0%E6%8F%90%E4%BA%A4", "/git/\u672C\u5730\u63D0\u4EA4.md", "/git/%E6%9C%AC%E5%9C%B0%E6%8F%90%E4%BA%A4.md"]],
  ["v-1596d78b", "/javascript/JavaScript%E5%9F%BA%E7%A1%80.html", { "title": "" }, ["/javascript/JavaScript\u57FA\u7840.html", "/javascript/JavaScript%E5%9F%BA%E7%A1%80", "/javascript/JavaScript\u57FA\u7840.md", "/javascript/JavaScript%E5%9F%BA%E7%A1%80.md"]],
  ["v-e02a086e", "/javascript/", { "title": "" }, ["/javascript/index.html", "/javascript/README.md"]],
  ["v-9c377a1c", "/javascript/Selenium.html", { "title": "" }, ["/javascript/Selenium", "/javascript/Selenium.md"]],
  ["v-8f69baa8", "/javascript/axios.html", { "title": "json-server" }, ["/javascript/axios", "/javascript/axios.md"]],
  ["v-01c141d0", "/javascript/canvas.html", { "title": "" }, ["/javascript/canvas", "/javascript/canvas.md"]],
  ["v-5f47777f", "/javascript/js%E7%B1%BB%E5%BA%93.html", { "title": "" }, ["/javascript/js\u7C7B\u5E93.html", "/javascript/js%E7%B1%BB%E5%BA%93", "/javascript/js\u7C7B\u5E93.md", "/javascript/js%E7%B1%BB%E5%BA%93.md"]],
  ["v-304f1580", "/javascript/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html", { "title": "" }, ["/javascript/\u57FA\u672C\u6982\u5FF5.html", "/javascript/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5", "/javascript/\u57FA\u672C\u6982\u5FF5.md", "/javascript/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.md"]],
  ["v-20bfb01e", "/javascript/%E5%BE%AE%E8%BD%AFjavascript.html", { "title": "" }, ["/javascript/\u5FAE\u8F6Fjavascript.html", "/javascript/%E5%BE%AE%E8%BD%AFjavascript", "/javascript/\u5FAE\u8F6Fjavascript.md", "/javascript/%E5%BE%AE%E8%BD%AFjavascript.md"]],
  ["v-f0383c18", "/linux/", { "title": "" }, ["/linux/index.html", "/linux/README.md"]],
  ["v-1aaf1340", "/linux/echo.html", { "title": "" }, ["/linux/echo", "/linux/echo.md"]],
  ["v-32db7ed0", "/linux/tcpdump.html", { "title": "" }, ["/linux/tcpdump", "/linux/tcpdump.md"]],
  ["v-e69c6640", "/linux/%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98.html", { "title": "" }, ["/linux/\u4F7F\u7528\u95EE\u9898.html", "/linux/%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98", "/linux/\u4F7F\u7528\u95EE\u9898.md", "/linux/%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98.md"]],
  ["v-08e8e01d", "/linux/%E5%91%BD%E4%BB%A4.html", { "title": "" }, ["/linux/\u547D\u4EE4.html", "/linux/%E5%91%BD%E4%BB%A4", "/linux/\u547D\u4EE4.md", "/linux/%E5%91%BD%E4%BB%A4.md"]],
  ["v-11b35267", "/linux/%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6.html", { "title": "" }, ["/linux/\u5B89\u88C5\u8F6F\u4EF6.html", "/linux/%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6", "/linux/\u5B89\u88C5\u8F6F\u4EF6.md", "/linux/%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6.md"]],
  ["v-ae048d4e", "/linux/%E6%97%A0%E7%BA%BF%E6%94%BB%E5%87%BB%E4%B9%8Barp%E6%AC%BA%E9%AA%97.html", { "title": "" }, ["/linux/\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97.html", "/linux/%E6%97%A0%E7%BA%BF%E6%94%BB%E5%87%BB%E4%B9%8Barp%E6%AC%BA%E9%AA%97", "/linux/\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97.md", "/linux/%E6%97%A0%E7%BA%BF%E6%94%BB%E5%87%BB%E4%B9%8Barp%E6%AC%BA%E9%AA%97.md"]],
  ["v-60a2f6b8", "/linux/%E7%BC%96%E8%AF%91deb.html", { "title": "" }, ["/linux/\u7F16\u8BD1deb.html", "/linux/%E7%BC%96%E8%AF%91deb", "/linux/\u7F16\u8BD1deb.md", "/linux/%E7%BC%96%E8%AF%91deb.md"]],
  ["v-72881372", "/markdown/", { "title": "" }, ["/markdown/index.html", "/markdown/README.md"]],
  ["v-ac6cd20e", "/markdown/use.html", { "title": "this is an H1" }, ["/markdown/use", "/markdown/use.md"]],
  ["v-6d739bbb", "/python/Class.html", { "title": "" }, ["/python/Class", "/python/Class.md"]],
  ["v-63cd5dba", "/python/", { "title": "" }, ["/python/index.html", "/python/README.md"]],
  ["v-7115a32f", "/python/chrNet.html", { "title": "" }, ["/python/chrNet", "/python/chrNet.md"]],
  ["v-736bb064", "/python/django.html", { "title": "" }, ["/python/django", "/python/django.md"]],
  ["v-47485488", "/python/xlwings%20----%20excel%E6%93%8D%E4%BD%9C.html", { "title": "" }, ["/python/xlwings ---- excel\u64CD\u4F5C.html", "/python/xlwings%20----%20excel%E6%93%8D%E4%BD%9C", "/python/xlwings ---- excel\u64CD\u4F5C.md", "/python/xlwings%20----%20excel%E6%93%8D%E4%BD%9C.md"]],
  ["v-6821f654", "/python/%E5%86%85%E7%BD%AE%E5%8A%9F%E8%83%BD.html", { "title": "" }, ["/python/\u5185\u7F6E\u529F\u80FD.html", "/python/%E5%86%85%E7%BD%AE%E5%8A%9F%E8%83%BD", "/python/\u5185\u7F6E\u529F\u80FD.md", "/python/%E5%86%85%E7%BD%AE%E5%8A%9F%E8%83%BD.md"]],
  ["v-75a3ffce", "/python/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2django%E9%A1%B9%E7%9B%AE.html", { "title": "" }, ["/python/\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE.html", "/python/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2django%E9%A1%B9%E7%9B%AE", "/python/\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE.md", "/python/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2django%E9%A1%B9%E7%9B%AE.md"]],
  ["v-dcabfe22", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/", { "title": "" }, ["/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/index.html", "/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/README.md", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/README.md"]],
  ["v-11ddaf4e", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E5%9B%9B%E4%B8%AA%E4%BB%BB%E5%8A%A1.html", { "title": "" }, ["/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/\u56DB\u4E2A\u4EFB\u52A1.html", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E5%9B%9B%E4%B8%AA%E4%BB%BB%E5%8A%A1", "/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/\u56DB\u4E2A\u4EFB\u52A1.md", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E5%9B%9B%E4%B8%AA%E4%BB%BB%E5%8A%A1.md"]],
  ["v-1c0cff34", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E8%BE%A9%E8%AF%81%E6%B3%95.html", { "title": "" }, ["/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/\u8FA9\u8BC1\u6CD5.html", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E8%BE%A9%E8%AF%81%E6%B3%95", "/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/\u8FA9\u8BC1\u6CD5.md", "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E8%BE%A9%E8%AF%81%E6%B3%95.md"]],
  ["v-a8e497dc", "/javascript/Vue/1.%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95.html", { "title": "" }, ["/javascript/Vue/1.\u6570\u636E\u4E0E\u65B9\u6CD5.html", "/javascript/Vue/1.%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95", "/javascript/Vue/1.\u6570\u636E\u4E0E\u65B9\u6CD5.md", "/javascript/Vue/1.%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95.md"]],
  ["v-21cfc464", "/javascript/Vue/2.%E5%AE%9E%E4%BE%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.html", { "title": "" }, ["/javascript/Vue/2.\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50.html", "/javascript/Vue/2.%E5%AE%9E%E4%BE%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90", "/javascript/Vue/2.\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50.md", "/javascript/Vue/2.%E5%AE%9E%E4%BE%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.md"]],
  ["v-f05262b2", "/javascript/Vue/3.%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95-%E6%8F%92%E5%80%BC.html", { "title": "\u63D2\u503C" }, ["/javascript/Vue/3.\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C.html", "/javascript/Vue/3.%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95-%E6%8F%92%E5%80%BC", "/javascript/Vue/3.\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C.md", "/javascript/Vue/3.%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95-%E6%8F%92%E5%80%BC.md"]],
  ["v-4e3e11a7", "/javascript/Vue/4.%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%9B%E5%BB%BA%E6%96%B9%E5%BC%8F.html", { "title": "" }, ["/javascript/Vue/4.\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F.html", "/javascript/Vue/4.%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%9B%E5%BB%BA%E6%96%B9%E5%BC%8F", "/javascript/Vue/4.\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F.md", "/javascript/Vue/4.%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%9B%E5%BB%BA%E6%96%B9%E5%BC%8F.md"]],
  ["v-1b16a914", "/javascript/Vue/5.%E4%BD%BF%E7%94%A8Vue%E8%84%9A%E6%89%8B%E6%9E%B6.html", { "title": "" }, ["/javascript/Vue/5.\u4F7F\u7528Vue\u811A\u624B\u67B6.html", "/javascript/Vue/5.%E4%BD%BF%E7%94%A8Vue%E8%84%9A%E6%89%8B%E6%9E%B6", "/javascript/Vue/5.\u4F7F\u7528Vue\u811A\u624B\u67B6.md", "/javascript/Vue/5.%E4%BD%BF%E7%94%A8Vue%E8%84%9A%E6%89%8B%E6%9E%B6.md"]],
  ["v-507b795f", "/javascript/Vue/6.%E7%89%B9%E6%AE%8A%E5%B1%9E%E6%80%A7.html", { "title": "" }, ["/javascript/Vue/6.\u7279\u6B8A\u5C5E\u6027.html", "/javascript/Vue/6.%E7%89%B9%E6%AE%8A%E5%B1%9E%E6%80%A7", "/javascript/Vue/6.\u7279\u6B8A\u5C5E\u6027.md", "/javascript/Vue/6.%E7%89%B9%E6%AE%8A%E5%B1%9E%E6%80%A7.md"]],
  ["v-2a126896", "/javascript/Vue/7.Vue%E6%8F%92%E4%BB%B6.html", { "title": "" }, ["/javascript/Vue/7.Vue\u63D2\u4EF6.html", "/javascript/Vue/7.Vue%E6%8F%92%E4%BB%B6", "/javascript/Vue/7.Vue\u63D2\u4EF6.md", "/javascript/Vue/7.Vue%E6%8F%92%E4%BB%B6.md"]],
  ["v-634ae41f", "/javascript/Vue/8.vuex.html", { "title": "" }, ["/javascript/Vue/8.vuex", "/javascript/Vue/8.vuex.md"]],
  ["v-7d985dbc", "/javascript/Vue/9.vue-router.html", { "title": "" }, ["/javascript/Vue/9.vue-router", "/javascript/Vue/9.vue-router.md"]],
  ["v-672ecad2", "/javascript/Vue/", { "title": "" }, ["/javascript/Vue/index.html", "/javascript/Vue/README.md"]],
  ["v-ef622eb6", "/javascript/Vue/emoji.html", { "title": "" }, ["/javascript/Vue/emoji", "/javascript/Vue/emoji.md"]],
  ["v-1c3dc2ea", "/javascript/Vue/vuepress.html", { "title": "" }, ["/javascript/Vue/vuepress", "/javascript/Vue/vuepress.md"]],
  ["v-2135e2c4", "/javascript/Vue/webpack%E7%BB%8F%E5%85%B8%E9%85%8D%E7%BD%AE.html", { "title": "" }, ["/javascript/Vue/webpack\u7ECF\u5178\u914D\u7F6E.html", "/javascript/Vue/webpack%E7%BB%8F%E5%85%B8%E9%85%8D%E7%BD%AE", "/javascript/Vue/webpack\u7ECF\u5178\u914D\u7F6E.md", "/javascript/Vue/webpack%E7%BB%8F%E5%85%B8%E9%85%8D%E7%BD%AE.md"]],
  ["v-250fbd0a", "/javascript/Vue/%E6%B3%A8%E6%84%8F.html", { "title": "" }, ["/javascript/Vue/\u6CE8\u610F.html", "/javascript/Vue/%E6%B3%A8%E6%84%8F", "/javascript/Vue/\u6CE8\u610F.md", "/javascript/Vue/%E6%B3%A8%E6%84%8F.md"]],
  ["v-940e4bdc", "/javascript/Vue/%E7%BB%84%E4%BB%B6.html", { "title": "" }, ["/javascript/Vue/\u7EC4\u4EF6.html", "/javascript/Vue/%E7%BB%84%E4%BB%B6", "/javascript/Vue/\u7EC4\u4EF6.md", "/javascript/Vue/%E7%BB%84%E4%BB%B6.md"]],
  ["v-69a8f6db", "/javascript/nodejs/", { "title": "" }, ["/javascript/nodejs/index.html", "/javascript/nodejs/README.md"]],
  ["v-e2bda588", "/javascript/nodejs/electron.html", { "title": "\u6253\u5305" }, ["/javascript/nodejs/electron", "/javascript/nodejs/electron.md"]],
  ["v-02c9d8f1", "/javascript/nodejs/fs.html", { "title": "" }, ["/javascript/nodejs/fs", "/javascript/nodejs/fs.md"]],
  ["v-3be30e5b", "/javascript/nodejs/nodejs%E5%9F%BA%E7%A1%80.html", { "title": "nodejs\u57FA\u7840" }, ["/javascript/nodejs/nodejs\u57FA\u7840.html", "/javascript/nodejs/nodejs%E5%9F%BA%E7%A1%80", "/javascript/nodejs/nodejs\u57FA\u7840.md", "/javascript/nodejs/nodejs%E5%9F%BA%E7%A1%80.md"]],
  ["v-58d4996a", "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/", { "title": "" }, ["/python/\u7F51\u7EDC\u7F16\u7A0B/", "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/index.html", "/python/\u7F51\u7EDC\u7F16\u7A0B/README.md", "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/README.md"]],
  ["v-2dba119c", "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/socket.html", { "title": "" }, ["/python/\u7F51\u7EDC\u7F16\u7A0B/socket.html", "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/socket", "/python/\u7F51\u7EDC\u7F16\u7A0B/socket.md", "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/socket.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1k = {};
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`linux`);
      } else {
        return [
          vue.createTextVNode("linux")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/python/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`python`);
      } else {
        return [
          vue.createTextVNode("python")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/markdown/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`markdown`);
      } else {
        return [
          vue.createTextVNode("markdown")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/git/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`git`);
      } else {
        return [
          vue.createTextVNode("git")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1`);
      } else {
        return [
          vue.createTextVNode("\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`C`);
      } else {
        return [
          vue.createTextVNode("C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`javascript`);
      } else {
        return [
          vue.createTextVNode("javascript")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><!--]-->`);
}
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
var index_html$s = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["ssrRender", _sfc_ssrRender$10]]);
var index_html$t = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$s
});
const _sfc_main$1j = {};
function _sfc_ssrRender$$(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u7EAF\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u7EAF\u91CF\u7C7B\u578B</h2><blockquote><h3 id="\u7B97\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7B97\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u7B97\u6570\u7C7B\u578B</h3><blockquote><h4 id="\u57FA\u672C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u672C\u7C7B\u578B</h4><blockquote><h5 id="\u6574\u578B\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6574\u578B\u7C7B\u578B" aria-hidden="true">#</a> \u6574\u578B\u7C7B\u578B</h5><blockquote><p>\u57FA\u672C\u6574\u578B \u77ED\u6574\u578B \u957F\u6574\u578B \u53CC\u957F\u6574\u578B \u5B57\u7B26\u578B \u5E03\u5C14\u578B</p></blockquote><h5 id="\u6D6E\u70B9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6D6E\u70B9\u7C7B\u578B" aria-hidden="true">#</a> \u6D6E\u70B9\u7C7B\u578B</h5><blockquote><p>\u5355\u7CBE\u5EA6\u6D6E\u70B9\u578B \u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B \u590D\u6570\u6D6E\u70B9\u578B</p></blockquote></blockquote><h4 id="\u679A\u4E3E\u7C7B\u578Benum" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7C7B\u578Benum" aria-hidden="true">#</a> \u679A\u4E3E\u7C7B\u578Benum</h4><h4 id="\u7A7A\u7C7B\u578Bvoid" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u7C7B\u578Bvoid" aria-hidden="true">#</a> \u7A7A\u7C7B\u578Bvoid</h4></blockquote><h3 id="\u6307\u9488\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u7C7B\u578B" aria-hidden="true">#</a> \u6307\u9488\u7C7B\u578B(*)</h3></blockquote><h2 id="\u7EC4\u5408\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u7C7B\u578B" aria-hidden="true">#</a> \u7EC4\u5408\u7C7B\u578B</h2><blockquote><p>\u6570\u7EC4\u7C7B\u578B[] \u7ED3\u6784\u4F53\u7C7B\u578Bstruct \u5171\u7528\u4F53\u7C7B\u578Bunion \u51FD\u6570\u7C7B\u578B</p></blockquote><h2 id="\u7B26\u53F7\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7B26\u53F7\u5C5E\u6027" aria-hidden="true">#</a> \u7B26\u53F7\u5C5E\u6027</h2><blockquote><p>unsigned \u65E0\u7B26\u53F7 short \u6BB5\u578B long \u957F\u578B long long \u53CC\u957F\u578B</p></blockquote><!--]-->`);
}
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/1\u3001\u6570\u636E\u7C7B\u578B.html.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
var _1______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["ssrRender", _sfc_ssrRender$$]]);
var _1______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _1______html$1
});
const _sfc_main$1i = {};
function _sfc_ssrRender$_(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="printf-\u5360\u4F4D\u7B26" tabindex="-1"><a class="header-anchor" href="#printf-\u5360\u4F4D\u7B26" aria-hidden="true">#</a> <code>printf()</code>\u5360\u4F4D\u7B26</h2><p>%a\uFF1A\u6D6E\u70B9\u6570\u3002 %A\uFF1A\u6D6E\u70B9\u6570\u3002 %c\uFF1A\u5B57\u7B26\u3002 %d\uFF1A\u5341\u8FDB\u5236\u6574\u6570\u3002 %e\uFF1A\u4F7F\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5\u7684\u6D6E\u70B9\u6570\uFF0C\u6307\u6570\u90E8\u5206\u7684e\u4E3A\u5C0F\u5199\u3002 %E\uFF1A\u4F7F\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5\u7684\u6D6E\u70B9\u6570\uFF0C\u6307\u6570\u90E8\u5206\u7684E\u4E3A\u5927\u5199\u3002 %i\uFF1A\u6574\u6570\uFF0C\u57FA\u672C\u7B49\u540C\u4E8E%d\u3002 %f\uFF1A\u5C0F\u6570\uFF08\u5305\u542Bfloat\u7C7B\u578B\u548Cdouble\u7C7B\u578B\uFF09\u3002 %g\uFF1A6\u4E2A\u6709\u6548\u6570\u5B57\u7684\u6D6E\u70B9\u6570\u3002\u6574\u6570\u90E8\u5206\u4E00\u65E6\u8D85\u8FC76\u4F4D\uFF0C\u5C31\u4F1A\u81EA\u52A8\u8F6C\u4E3A\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u6307\u6570\u90E8\u5206\u7684e\u4E3A\u5C0F\u5199\u3002 %G\uFF1A\u7B49\u540C\u4E8E%g\uFF0C\u552F\u4E00\u7684\u533A\u522B\u662F\u6307\u6570\u90E8\u5206\u7684E\u4E3A\u5927\u5199\u3002 %hd\uFF1A\u5341\u8FDB\u5236 short int \u7C7B\u578B\u3002 %ho\uFF1A\u516B\u8FDB\u5236 short int \u7C7B\u578B\u3002 %hx\uFF1A\u5341\u516D\u8FDB\u5236 short int \u7C7B\u578B\u3002 %hu\uFF1Aunsigned short int \u7C7B\u578B\u3002 %ld\uFF1A\u5341\u8FDB\u5236 long int \u7C7B\u578B\u3002 %lo\uFF1A\u516B\u8FDB\u5236 long int \u7C7B\u578B\u3002 %lx\uFF1A\u5341\u516D\u8FDB\u5236 long int \u7C7B\u578B\u3002 %lu\uFF1Aunsigned long int \u7C7B\u578B\u3002 %lld\uFF1A\u5341\u8FDB\u5236 long long int \u7C7B\u578B\u3002 %llo\uFF1A\u516B\u8FDB\u5236 long long int \u7C7B\u578B\u3002 %llx\uFF1A\u5341\u516D\u8FDB\u5236 long long int \u7C7B\u578B\u3002 %llu\uFF1Aunsigned long long int \u7C7B\u578B\u3002 %Le\uFF1A\u79D1\u5B66\u8BA1\u6570\u6CD5\u8868\u793A\u7684 long double \u7C7B\u578B\u6D6E\u70B9\u6570\u3002 %Lf\uFF1Along double \u7C7B\u578B\u6D6E\u70B9\u6570\u3002 %n\uFF1A\u5DF2\u8F93\u51FA\u7684\u5B57\u7B26\u4E32\u6570\u91CF\u3002\u8BE5\u5360\u4F4D\u7B26\u672C\u8EAB\u4E0D\u8F93\u51FA\uFF0C\u53EA\u5C06\u503C\u5B58\u50A8\u5728\u6307\u5B9A\u53D8\u91CF\u4E4B\u4E2D\u3002 %o\uFF1A\u516B\u8FDB\u5236\u6574\u6570\u3002 %p\uFF1A\u6307\u9488\u3002 %s\uFF1A\u5B57\u7B26\u4E32\u3002 %u\uFF1A\u65E0\u7B26\u53F7\u6574\u6570\uFF08unsigned int\uFF09\u3002 %x\uFF1A\u5341\u516D\u8FDB\u5236\u6574\u6570\u3002 %zd\uFF1Asize_t\u7C7B\u578B\u3002 %%\uFF1A\u8F93\u51FA\u4E00\u4E2A\u767E\u5206\u53F7\u3002</p><h2 id="\u8F6C\u4E49\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u4E49\u5B57\u7B26" aria-hidden="true">#</a> \u8F6C\u4E49\u5B57\u7B26</h2><p>\\a\uFF1A\u8B66\u62A5\uFF0C\u8FD9\u4F1A\u4F7F\u5F97\u7EC8\u7AEF\u53D1\u51FA\u8B66\u62A5\u58F0\u6216\u51FA\u73B0\u95EA\u70C1\uFF0C\u6216\u8005\u4E24\u8005\u540C\u65F6\u53D1\u751F\u3002 \\b\uFF1A\u9000\u683C\u952E\uFF0C\u5149\u6807\u56DE\u9000\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4F46\u4E0D\u5220\u9664\u5B57\u7B26\u3002 \\f\uFF1A\u6362\u9875\u7B26\uFF0C\u5149\u6807\u79FB\u5230\u4E0B\u4E00\u9875\u3002\u5728\u73B0\u4EE3\u7CFB\u7EDF\u4E0A\uFF0C\u8FD9\u5DF2\u7ECF\u53CD\u6620\u4E0D\u51FA\u6765\u4E86\uFF0C\u884C\u4E3A\u6539\u6210\u7C7B\u4F3C\u4E8E\\v\u3002 \\n\uFF1A\u6362\u884C\u7B26\u3002 \\r\uFF1A\u56DE\u8F66\u7B26\uFF0C\u5149\u6807\u79FB\u5230\u540C\u4E00\u884C\u7684\u5F00\u5934\u3002 \\t\uFF1A\u5236\u8868\u7B26\uFF0C\u5149\u6807\u79FB\u5230\u4E0B\u4E00\u4E2A\u6C34\u5E73\u5236\u8868\u4F4D\uFF0C\u901A\u5E38\u662F\u4E0B\u4E00\u4E2A8\u7684\u500D\u6570\u3002 \\v\uFF1A\u5782\u76F4\u5206\u9694\u7B26\uFF0C\u5149\u6807\u79FB\u5230\u4E0B\u4E00\u4E2A\u5782\u76F4\u5236\u8868\u4F4D\uFF0C\u901A\u5E38\u662F\u4E0B\u4E00\u884C\u7684\u540C\u4E00\u5217\u3002 \\0\uFF1Anull \u5B57\u7B26\uFF0C\u4EE3\u8868\u6CA1\u6709\u5185\u5BB9\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u503C\u4E0D\u7B49\u4E8E\u6570\u5B570\u3002 \u8F6C\u4E49\u5199\u6CD5\u8FD8\u80FD\u4F7F\u7528\u516B\u8FDB\u5236\u548C\u5341\u516D\u8FDB\u5236\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\u3002</p><p>\\nn\uFF1A\u5B57\u7B26\u7684\u516B\u8FDB\u5236\u5199\u6CD5\uFF0Cnn\u4E3A\u516B\u8FDB\u5236\u503C\u3002 \\xnn\uFF1A\u5B57\u7B26\u7684\u5341\u516D\u8FDB\u5236\u5199\u6CD5\uFF0Cnn\u4E3A\u5341\u516D\u8FDB\u5236\u503C\u3002</p><h2 id="\u5B57\u9762\u91CF\u540E\u7F00" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u540E\u7F00" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u540E\u7F00</h2><p>f\u548CF\uFF1Afloat\u7C7B\u578B\u3002 l\u548CL\uFF1A\u5BF9\u4E8E\u6574\u6570\u662Flong int\u7C7B\u578B\uFF0C\u5BF9\u4E8E\u5C0F\u6570\u662Flong double\u7C7B\u578B\u3002 ll\u548CLL\uFF1ALong Long \u7C7B\u578B\uFF0C\u6BD4\u59823LL\u3002 u\u548CU\uFF1A\u8868\u793Aunsigned int\uFF0C\u6BD4\u598215U\u30010377U\u3002</p><!--]-->`);
}
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/2\u3001printf.html.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
var _2_printf_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["ssrRender", _sfc_ssrRender$_]]);
var _2_printf_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _2_printf_html$1
});
const _sfc_main$1h = {};
function _sfc_ssrRender$Z(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u5173\u4E8E\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u6307\u9488" aria-hidden="true">#</a> \u5173\u4E8E\u6307\u9488</h2><p>type* \u53D8\u91CF \u53D8\u91CF\u5B58\u50A8\u7684\u662F\u4E00\u4E2A\u5185\u5B58\u5730\u5740</p><p>type** \u53D8\u91CF \u53D8\u91CF\u5B58\u50A8\u7684\u662F\u53E6\u4E00\u4E2A\u6307\u9488\u7684\u5185\u5B58\u5730\u5740</p><hr><h3 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> *\u8FD0\u7B97\u7B26</h3><p><code>\u7528\u6765\u53D6\u51FA\u6307\u9488\u53D8\u91CF\u6240\u6307\u5411\u7684\u5185\u5B58\u5730\u5740\u91CC\u9762\u7684\u503C\u3002</code></p><h3 id="\u8FD0\u7B97\u7B26-1" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26-1" aria-hidden="true">#</a> &amp;\u8FD0\u7B97\u7B26</h3><p><code>&amp;\u8FD0\u7B97\u7B26\u7528\u6765\u53D6\u51FA\u4E00\u4E2A\u53D8\u91CF\u6240\u5728\u7684\u5185\u5B58\u5730\u5740</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#include&lt;stdio.h&gt;
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

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="exit" tabindex="-1"><a class="header-anchor" href="#exit" aria-hidden="true">#</a> exit()</h2><p>exit()\u51FD\u6570\u7528\u6765\u7EC8\u6B62\u6574\u4E2A\u7A0B\u5E8F\u7684\u8FD0\u884C\u3002\u4E00\u65E6\u6267\u884C\u5230\u8BE5\u51FD\u6570\uFF0C\u7A0B\u5E8F\u5C31\u4F1A\u7ACB\u5373\u7ED3\u675F\u3002\u8BE5\u51FD\u6570\u7684\u539F\u578B\u5B9A\u4E49\u5728\u5934\u6587\u4EF6stdlib.h\u91CC\u9762\u3002</p><p>exit()\u53EF\u4EE5\u5411\u7A0B\u5E8F\u5916\u90E8\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u5B83\u7684\u53C2\u6570\u5C31\u662F\u7A0B\u5E8F\u7684\u8FD4\u56DE\u503C\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u4F7F\u7528\u4E24\u4E2A\u5E38\u91CF\u4F5C\u4E3A\u5B83\u7684\u53C2\u6570\uFF1AEXIT_SUCCESS\uFF08\u76F8\u5F53\u4E8E 0\uFF09\u8868\u793A\u7A0B\u5E8F\u8FD0\u884C\u6210\u529F\uFF0CEXIT_FAILURE\uFF08\u76F8\u5F53\u4E8E 1\uFF09\u8868\u793A\u7A0B\u5E8F\u5F02\u5E38\u4E2D\u6B62\u3002\u8FD9\u4E24\u4E2A\u5E38\u6570\u4E5F\u662F\u5B9A\u4E49\u5728stdlib.h\u91CC\u9762\u3002</p><h2 id="atexit" tabindex="-1"><a class="header-anchor" href="#atexit" aria-hidden="true">#</a> atexit()</h2><p>\u7528\u6765\u767B\u8BB0exit()\u6267\u884C\u65F6\u989D\u5916\u6267\u884C\u7684\u51FD\u6570\uFF0C\u7528\u6765\u505A\u4E00\u4E9B\u9000\u51FA\u7A0B\u5E8F\u65F6\u7684\u6536\u5C3E\u5DE5\u4F5C <code>int atexit(void (*func)(void));</code></p><hr><h2 id="\u51FD\u6570\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8BF4\u660E\u7B26" aria-hidden="true">#</a> \u51FD\u6570\u8BF4\u660E\u7B26</h2><ul><li><h3 id="extern-\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#extern-\u8BF4\u660E\u7B26" aria-hidden="true">#</a> extern \u8BF4\u660E\u7B26</h3></li></ul><p>\u5BF9\u4E8E\u591A\u6587\u4EF6\u7684\u9879\u76EE\uFF0C\u6E90\u7801\u6587\u4EF6\u4F1A\u7528\u5230\u5176\u4ED6\u6587\u4EF6\u58F0\u660E\u7684\u51FD\u6570\u3002\u8FD9\u65F6\uFF0C\u5F53\u524D\u6587\u4EF6\u91CC\u9762\uFF0C\u9700\u8981\u7ED9\u51FA\u5916\u90E8\u51FD\u6570\u7684\u539F\u578B\uFF0C\u5E76\u7528extern\u8BF4\u660E\u8BE5\u51FD\u6570\u7684\u5B9A\u4E49\u6765\u81EA\u5176\u4ED6\u6587\u4EF6\u3002</p><ul><li><h3 id="static-\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#static-\u8BF4\u660E\u7B26" aria-hidden="true">#</a> static \u8BF4\u660E\u7B26</h3></li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u6B21\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u51FD\u6570\u7684\u5185\u90E8\u53D8\u91CF\u90FD\u4F1A\u91CD\u65B0\u521D\u59CB\u5316\uFF0C\u4E0D\u4F1A\u4FDD\u7559\u4E0A\u4E00\u6B21\u8FD0\u884C\u7684\u503C\u3002static\u8BF4\u660E\u7B26\u53EF\u4EE5\u6539\u53D8\u8FD9\u79CD\u884C\u4E3A\u3002</p><ul><li><h3 id="const-\u8BF4\u660E\u7B26" tabindex="-1"><a class="header-anchor" href="#const-\u8BF4\u660E\u7B26" aria-hidden="true">#</a> const \u8BF4\u660E\u7B26</h3></li></ul><p>\u51FD\u6570\u53C2\u6570\u91CC\u9762\u7684const\u8BF4\u660E\u7B26\uFF0C\u8868\u793A\u51FD\u6570\u5185\u90E8\u4E0D\u5F97\u4FEE\u6539\u8BE5\u53C2\u6570\u53D8\u91CF\u3002</p><h2 id="\u6570\u7EC4\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488</h2><p>\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u5185\u5B58\u5730\u5740\u8868\u793A\u7740\u6570\u7EC4\u7684\u5730\u5740</p><!--]-->`);
}
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/3\u3001\u6307\u9488.html.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
var _3____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["ssrRender", _sfc_ssrRender$Z]]);
var _3____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _3____html$1
});
const _sfc_main$1g = {};
function _sfc_ssrRender$Y(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u51FD\u6570\u7684\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u58F0\u660E" aria-hidden="true">#</a> \u51FD\u6570\u7684\u58F0\u660E</h2><ul><li>\u58F0\u660E\u8FD4\u56DE\u503C\u7C7B\u578B</li><li>\u51FD\u6570\u53C2\u6570</li><li>\u51FD\u6570\u4F53</li><li>return\u8BED\u53E5</li></ul><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>#include&lt;stdio.h&gt;
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><!--]-->`);
}
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/4\u3001\u51FD\u6570.html.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
var _4____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["ssrRender", _sfc_ssrRender$Y]]);
var _4____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _4____html$1
});
const _sfc_main$1f = {};
function _sfc_ssrRender$X(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>\u6570\u7EC4\u662F\u4E00\u7EC4\u76F8\u540C\u7C7B\u578B\u7684\u503C\uFF0C\u6309\u7167\u987A\u5E8F\u50A8\u5B58\u5728\u4E00\u8D77\u3002\u6570\u7EC4\u901A\u8FC7\u53D8\u91CF\u540D\u540E\u52A0\u65B9\u62EC\u53F7\u8868\u793A\uFF0C\u65B9\u62EC\u53F7\u91CC\u9762\u662F\u6570\u7EC4\u7684\u6210\u5458\u6570\u91CF</p><h3 id="\u4E00\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u4E00\u7EF4\u6570\u7EC4</h3><h5 id="color-blue-\u53EF\u53D8\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#color-blue-\u53EF\u53D8\u6570\u7EC4" aria-hidden="true">#</a> $\\color{blue}{\u53EF\u53D8\u6570\u7EC4}$</h5><p><code>int a[] = {};</code></p><p>$\\color{red}{\u6CE8\u610F\uFF1A}$\u521D\u59CB\u5316\u53D8\u91CF\u65F6\u8D4B\u503C</p><h3 id="\u6570\u7EC4\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u957F\u5EA6" aria-hidden="true">#</a> \u6570\u7EC4\u957F\u5EA6</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u53D8\u957F\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u53D8\u957F\u6570\u7EC4" aria-hidden="true">#</a> \u53D8\u957F\u6570\u7EC4</h3><p>\u4EFB\u4F55\u957F\u5EA6\u9700\u8981\u8FD0\u884C\u65F6\u624D\u80FD\u786E\u5B9A\u7684\u6570\u7EC4\uFF0C\u90FD\u662F\u53D8\u957F\u6570\u7EC4</p><h3 id="\u6570\u7EC4\u7684\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u5730\u5740" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u5730\u5740</h3><p>\u6570\u7EC4\u662F\u4E00\u8FDE\u4E32\u8FDE\u7EED\u50A8\u5B58\u7684\u540C\u7C7B\u578B\u503C\uFF0C\u53EA\u8981\u83B7\u5F97\u8D77\u59CB\u5730\u5740\uFF08\u9996\u4E2A\u6210\u5458\u7684\u5185\u5B58\u5730\u5740\uFF09\uFF0C\u5C31\u80FD\u63A8\u7B97\u51FA\u5176\u4ED6\u6210\u5458\u7684\u5730\u5740\u3002</p><!--]-->`);
}
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/5\u3001\u6570\u7EC4.html.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
var _5____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["ssrRender", _sfc_ssrRender$X]]);
var _5____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _5____html$1
});
const _sfc_main$1e = {};
function _sfc_ssrRender$W(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u58F0\u660E\u5B57\u7B26\u4E32\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5B57\u7B26\u4E32\u53D8\u91CF" aria-hidden="true">#</a> \u58F0\u660E\u5B57\u7B26\u4E32\u53D8\u91CF</h2><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>
// \u5B57\u7B26\u6570\u7EC4\u5B8C\u6574\u5F62\u5F0F\uFF1A
char a[10] = { &#39;H&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;,&#39;\\0&#39;,&#39;i&#39;,&#39;a&#39;,&#39;m&#39;};

// \u5B57\u7B26\u6570\u7EC4\u65B9\u6CD5\u4E00\u7B80\u5199\u5F62\u5F0F\uFF1A
	char b[10] = &quot;hi&quot;;

// \u5B57\u7B26\u6307\u9488 \u65B9\u6CD5\u4E8C\uFF1A
	const char* c = &quot;123456&quot;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="color-red-\u5B57\u7B26\u6570\u7EC4\u4E0E\u5B57\u7B26\u6307\u9488\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#color-red-\u5B57\u7B26\u6570\u7EC4\u4E0E\u5B57\u7B26\u6307\u9488\u7684\u533A\u522B" aria-hidden="true">#</a> $\\color{red}{\u5B57\u7B26\u6570\u7EC4\u4E0E\u5B57\u7B26\u6307\u9488\u7684\u533A\u522B}$</h3><p>\u5B57\u7B26\u6570\u7EC4\u53EF\u4EE5\u4FEE\u6539\u6570\u7EC4\u6210\u5458</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hi&quot;</span><span class="token punctuation">;</span>

a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B57\u7B26\u6307\u9488\u53EF\u4EE5\u4FEE\u6539\u6574\u4E2A\u5B57\u7B26</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">char</span><span class="token operator">*</span> a <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">;</span>

a <span class="token operator">=</span> <span class="token string">&quot;654321&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>sudo pip3 uninstall yagmail you-get uwsgi pyinstaller django /usr/local/lib/python3.7/dist-packages</p><p>Requirement already satisfied: premailer in /usr/local/lib/python3.7/dist-packages (from yagmail) (3.10.0) Requirement already satisfied: setuptools in /usr/local/lib/python3.7/dist-packages (from pyinstaller) (58.4.0) Requirement already satisfied: importlib-metadata in /usr/local/lib/python3.7/dist-packages (from pyinstaller) (4.6.4) Requirement already satisfied: altgraph in /usr/local/lib/python3.7/dist-packages (from pyinstaller) (0.17) Requirement already satisfied: pyinstaller-hooks-contrib&gt;=2020.6 in /usr/local/lib/python3.7/dist-packages (from pyinstaller) (2021.2) Requirement already satisfied: asgiref&lt;4,&gt;=3.3.2 in /usr/local/lib/python3.7/dist-packages (from django) (3.4.1) Requirement already satisfied: sqlparse&gt;=0.2.2 in /usr/local/lib/python3.7/dist-packages (from django) (0.4.1) Requirement already satisfied: pytz in /usr/local/lib/python3.7/dist-packages (from django) (2021.1) Requirement already satisfied: typing-extensions in /usr/local/lib/python3.7/dist-packages (from asgiref&lt;4,&gt;=3.3.2-&gt;django) (3.10.0.0) Requirement already satisfied: zipp&gt;=0.5 in /usr/local/lib/python3.7/dist-packages (from importlib-metadata-&gt;pyinstaller) (3.5.0) Requirement already satisfied: requests in /usr/lib/python3/dist-packages (from premailer-&gt;yagmail) (2.21.0) Requirement already satisfied: cachetools in /usr/local/lib/python3.7/dist-packages (from premailer-&gt;yagmail) (4.2.4) Requirement already satisfied: cssutils in /usr/local/lib/python3.7/dist-packages (from premailer-&gt;yagmail) (2.3.0) Requirement already satisfied: lxml in /usr/lib/python3/dist-packages (from premailer-&gt;yagmail) (4.3.2) Requirement already satisfied: cssselect in /usr/local/lib/python3.7/dist-packages (from premailer-&gt;yagmail) (1.1.0)</p><!--]-->`);
}
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/6.\u5B57\u7B26\u4E32.html.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
var _6_____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["ssrRender", _sfc_ssrRender$W]]);
var _6_____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _6_____html$1
});
const _sfc_main$1d = {};
function _sfc_ssrRender$V(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/C\u8BED\u8A00Json\u5B9E\u73B0.html.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
var C__Json___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["ssrRender", _sfc_ssrRender$V]]);
var C__Json___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": C__Json___html$1
});
const _sfc_main$1c = {};
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/C\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0.html.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
var C__________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["ssrRender", _sfc_ssrRender$U]]);
var C__________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": C__________html$1
});
const _sfc_main$1b = {};
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/C\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0.html.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
var C_________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["ssrRender", _sfc_ssrRender$T]]);
var C_________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": C_________html$1
});
const _sfc_main$1a = {};
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="_2\u3001printf" tabindex="-1"><a class="header-anchor" href="#_2\u3001printf" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/2%E3%80%81printf.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`2\u3001printf`);
      } else {
        return [
          vue.createTextVNode("2\u3001printf")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_5\u3001\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u6570\u7EC4" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/5%E3%80%81%E6%95%B0%E7%BB%84.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`5\u3001\u6570\u7EC4`);
      } else {
        return [
          vue.createTextVNode("5\u3001\u6570\u7EC4")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_3\u3001\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u6307\u9488" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/3%E3%80%81%E6%8C%87%E9%92%88.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`3\u3001\u6307\u9488`);
      } else {
        return [
          vue.createTextVNode("3\u3001\u6307\u9488")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_1\u3001\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/1%E3%80%81%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`1\u3001\u6570\u636E\u7C7B\u578B`);
      } else {
        return [
          vue.createTextVNode("1\u3001\u6570\u636E\u7C7B\u578B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_6-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_6-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/6.%E5%AD%97%E7%AC%A6%E4%B8%B2.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`6.\u5B57\u7B26\u4E32`);
      } else {
        return [
          vue.createTextVNode("6.\u5B57\u7B26\u4E32")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_4\u3001\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u51FD\u6570" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/4%E3%80%81%E5%87%BD%E6%95%B0.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`4\u3001\u51FD\u6570`);
      } else {
        return [
          vue.createTextVNode("4\u3001\u51FD\u6570")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="c\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#c\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/C%E8%AF%AD%E8%A8%80%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`C\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0`);
      } else {
        return [
          vue.createTextVNode("C\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="c\u8BED\u8A00json\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#c\u8BED\u8A00json\u5B9E\u73B0" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/C%E8%AF%AD%E8%A8%80Json%E5%AE%9E%E7%8E%B0.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`C\u8BED\u8A00Json\u5B9E\u73B0`);
      } else {
        return [
          vue.createTextVNode("C\u8BED\u8A00Json\u5B9E\u73B0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="c\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#c\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/C/C%E8%AF%AD%E8%A8%80%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`C\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0`);
      } else {
        return [
          vue.createTextVNode("C\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><!--]-->`);
}
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/C/index.html.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
var index_html$q = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["ssrRender", _sfc_ssrRender$S]]);
var index_html$r = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$q
});
const _sfc_main$19 = {};
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h3 id="git-init-warehouse-name-\u521D\u59CB\u5316\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#git-init-warehouse-name-\u521D\u59CB\u5316\u4ED3\u5E93" aria-hidden="true">#</a> git init [warehouse name] \u521D\u59CB\u5316\u4ED3\u5E93</h3><h3 id="git-add-file-name-\u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#git-add-file-name-\u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93" aria-hidden="true">#</a> git add [file name] \u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93</h3><h3 id="git-commit-m-\u8BF4\u660E-\u628A\u6587\u4EF6\u63D0\u4EA4\u5230\u4ED3\u5E93\u5E76\u63D0\u4F9B\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#git-commit-m-\u8BF4\u660E-\u628A\u6587\u4EF6\u63D0\u4EA4\u5230\u4ED3\u5E93\u5E76\u63D0\u4F9B\u89E3\u91CA" aria-hidden="true">#</a> git commit -m &quot;\u8BF4\u660E&quot; \u628A\u6587\u4EF6\u63D0\u4EA4\u5230\u4ED3\u5E93\u5E76\u63D0\u4F9B\u89E3\u91CA</h3><h3 id="git-status-\u67E5\u770B\u4ED3\u5E93\u5F53\u524D\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#git-status-\u67E5\u770B\u4ED3\u5E93\u5F53\u524D\u72B6\u6001" aria-hidden="true">#</a> git status \u67E5\u770B\u4ED3\u5E93\u5F53\u524D\u72B6\u6001</h3><h3 id="git-diff-\u67E5\u770B\u4E0A\u6B21\u4FEE\u6539\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#git-diff-\u67E5\u770B\u4E0A\u6B21\u4FEE\u6539\u7684\u5185\u5BB9" aria-hidden="true">#</a> git diff \u67E5\u770B\u4E0A\u6B21\u4FEE\u6539\u7684\u5185\u5BB9</h3><h3 id="git-log-pretty-oneline-\u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#git-log-pretty-oneline-\u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7" aria-hidden="true">#</a> git log [--pretty=oneline] \u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7</h3><h3 id="git-reset-hard-\u7248\u672C\u53F7-\u6307\u5B9A\u67D0\u4E00\u7248\u672C-\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#git-reset-hard-\u7248\u672C\u53F7-\u6307\u5B9A\u67D0\u4E00\u7248\u672C-\u7248\u672C\u53F7" aria-hidden="true">#</a> git reset --hard \u7248\u672C\u53F7 \u6307\u5B9A\u67D0\u4E00\u7248\u672C(\u7248\u672C\u53F7)</h3><h3 id="git-reflog-\u663E\u793A\u547D\u4EE4\u5386\u53F2" tabindex="-1"><a class="header-anchor" href="#git-reflog-\u663E\u793A\u547D\u4EE4\u5386\u53F2" aria-hidden="true">#</a> git reflog \u663E\u793A\u547D\u4EE4\u5386\u53F2</h3><h3 id="git-checkout-file-name-\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#git-checkout-file-name-\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539" aria-hidden="true">#</a> git checkout -- [file name] \u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539</h3><h3 id="git-rm-file-name-\u5220\u9664\u4E00\u4E2A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#git-rm-file-name-\u5220\u9664\u4E00\u4E2A\u6587\u4EF6" aria-hidden="true">#</a> git rm [file name] \u5220\u9664\u4E00\u4E2A\u6587\u4EF6</h3><h2 id="\u5173\u8054\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u5173\u8054\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93</h2><h2 id="git-remote-add-\u5206\u652F\u540D-url-\u6DFB\u52A0\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#git-remote-add-\u5206\u652F\u540D-url-\u6DFB\u52A0\u5173\u8054" aria-hidden="true">#</a> git remote add [\u5206\u652F\u540D] url \u6DFB\u52A0\u5173\u8054</h2><h2 id="git-push-u-\u5206\u652F\u540D-master-\u5C06\u672C\u5730\u5E93\u7684\u6240\u6709\u5185\u5BB9\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93-\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528git-push\u7B80\u5316\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-push-u-\u5206\u652F\u540D-master-\u5C06\u672C\u5730\u5E93\u7684\u6240\u6709\u5185\u5BB9\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93-\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528git-push\u7B80\u5316\u547D\u4EE4" aria-hidden="true">#</a> git push -u [\u5206\u652F\u540D] master \u5C06\u672C\u5730\u5E93\u7684\u6240\u6709\u5185\u5BB9\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93\uFF0C\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528git push\u7B80\u5316\u547D\u4EE4</h2><h2 id="git-config-global-credential-helper-store\u514D\u5BC6push" tabindex="-1"><a class="header-anchor" href="#git-config-global-credential-helper-store\u514D\u5BC6push" aria-hidden="true">#</a> git config --global credential.helper store\u514D\u5BC6push</h2><h2 id="git-config-global-core-quotepath-false-\u4E2D\u6587\u4E71\u7801" tabindex="-1"><a class="header-anchor" href="#git-config-global-core-quotepath-false-\u4E2D\u6587\u4E71\u7801" aria-hidden="true">#</a> git config --global core.quotepath false \u4E2D\u6587\u4E71\u7801</h2><!--]-->`);
}
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/git/Git.html.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var Git_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["ssrRender", _sfc_ssrRender$R]]);
var Git_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Git_html$1
});
const _sfc_main$18 = {};
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#add .gitignore
#\u67E5\u770B\u72B6\u6001\uFF0C\u662F\u5426\u5FFD\u7565\u4E86\u6307\u5B9A\u7684\u6587\u4EF6\uFF1F 
$ git status --ignored #\u67E5\u770B\u72B6\u6001\uFF0C\u5305\u62EC\u5FFD\u7565\u7684\u6587\u4EF6
 
#\u8BA9\u5176\u5BF9\u5DF2\u7ECF\u8DDF\u8E2A\u7684\u6587\u4EF6\u4E5F\u8D77\u4F5C\u7528
$ git rm -r --cached .  #\u6E05\u9664\u7F13\u5B58 -r \u8868\u793A\u9012\u5F52\u5220\u9664\uFF08\u5982\u679C\u6709\u6587\u4EF6\u5939\u7684\u8BDD\uFF09 . \u8868\u793A\u6240\u6709\u6587\u4EF6
 
#\u67E5\u770B\u4E00\u4E0B\u5177\u4F53\u6548\u679C
$ git status --ignored
$ git add .           #\u91CD\u65B0trace file
$ git commit -m &quot;update .gitignore&quot;     #\u63D0\u4EA4\u548C\u6CE8\u91CA
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u672C\u5730\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u63D0\u4EA4" aria-hidden="true">#</a> \u672C\u5730\u63D0\u4EA4</h2><p>echo &quot;# test&quot; &gt;&gt; README.md git init git add README.md git commit -m &quot;first commit&quot; git branch -M main git remote add origin git@github.com:CharmGo/test.git git push -u origin main</p><h2 id="\u62C9\u53D6\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u63D0\u4EA4" aria-hidden="true">#</a> \u62C9\u53D6\u63D0\u4EA4</h2><p>git remote add origin git@github.com:CharmGo/test.git git branch -M main git push -u origin main</p><!--]-->`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/git/tip.html.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var tip_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$Q]]);
var tip_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": tip_html$1
});
const _sfc_main$17 = {};
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/git/\u672C\u5730\u63D0\u4EA4.html.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var _____html$g = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$P]]);
var _____html$h = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$g
});
const _sfc_main$16 = {};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h2 id="\u53D8\u91CF-variable" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF-variable" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics#%E5%8F%98%E9%87%8F%EF%BC%88variable%EF%BC%89" title="Permalink to \u53D8\u91CF\uFF08Variable\uFF09" target="_blank" rel="noopener noreferrer">\u53D8\u91CF\uFF08Variable\uFF09`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p>\u662F\u5B58\u50A8\u503C\u7684\u5BB9\u5668\u3002\u8981\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5148\u8F93\u5165\u5173\u952E\u5B57\xA0<code>let</code>\xA0\u6216\xA0<code>var</code>\uFF0C\u7136\u540E\u8F93\u5165\u5408\u9002\u7684\u540D\u79F0\uFF1A <code>let myVariable;</code></p><p>$\\color{red}{let}$:\u4E0D\u80FD\u91CD\u590D\u58F0\u660E $\\color{red}{var}$:\u80FD\u91CD\u590D\u58F0\u660E $\\color{red}{const}$:\u58F0\u660E\u4E00\u4E2A\u5757\u4F5C\u7528\u57DF\u7684\u53EA\u8BFB\u5E38\u91CF\u3002</p><hr><h2 id="javascript-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#javascript-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> JavaScript \u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784</h2><ul><li>7 \u79CD<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive" target="_blank" rel="noopener noreferrer">\u539F\u59CB\u7C7B\u578B`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF0C\u4F7F\u7528\xA0typeof\xA0\u8FD0\u7B97\u7B26\u68C0\u67E5: <ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/undefined" target="_blank" rel="noopener noreferrer">undefined`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF1A<code>typeof instance === &quot;undefined&quot;</code></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean" target="_blank" rel="noopener noreferrer">Boolean`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF1A<code>typeof instance === &quot;boolean&quot;</code></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Number" target="_blank" rel="noopener noreferrer">Number`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF1A<code>typeof instance === &quot;number&quot;</code></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/String" target="_blank" rel="noopener noreferrer">String`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF1A<code>typeof instance === &quot;string</code></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt" target="_blank" rel="noopener noreferrer">BigInt`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF1A<code>typeof instance === &quot;bigint&quot;</code></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol" target="_blank" rel="noopener noreferrer">Symbol`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\xA0\uFF1A<code>typeof instance === &quot;symbol&quot;</code></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Null" target="_blank" rel="noopener noreferrer">null`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF1A<code>typeof instance === &quot;object&quot;</code>\u3002</li></ul></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Object" target="_blank" rel="noopener noreferrer">Object`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF1A<code>typeof instance === &quot;object&quot;</code>\u3002\u4EFB\u4F55\xA0constructed\xA0\u5BF9\u8C61\u5B9E\u4F8B\u7684\u7279\u6B8A\u975E\u6570\u636E\u7ED3\u6784\u7C7B\u578B\uFF0C\u4E5F\u7528\u505A\u6570\u636E\u7ED3\u6784\uFF1Anew\xA0<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Object" target="_blank" rel="noopener noreferrer">Object`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF0Cnew\xA0<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/array" target="_blank" rel="noopener noreferrer">Array`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF0Cnew\xA0Map\uFF0Cnew\xA0Set\uFF0Cnew\xA0WeakMap\uFF0Cnew\xA0WeakSet\uFF0Cnew\xA0Date\uFF0C\u548C\u51E0\u4E4E\u6240\u6709\u901A\u8FC7\xA0new keyword\xA0\u521B\u5EFA\u7684\u4E1C\u897F\u3002</li></ul><p><code>typeof</code>\u7528\u4E8E\u68C0\u67E5\u57FA\u672C\u6570\u636E\u7C7B\u578B <code>instanceof</code>\u7528\u4E8E\u68C0\u67E5object\u6D3E\u751F\u51FA\u6765\u7684\u7ED3\u6784\u7C7B\u578B</p><hr><h2 id="\u539F\u59CB\u503C" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u503C" aria-hidden="true">#</a> \u539F\u59CB\u503C</h2><p>\u9664 Object \u4EE5\u5916\u7684\u6240\u6709\u7C7B\u578B\u90FD\u662F\u4E0D\u53EF\u53D8\u7684\uFF08\u503C\u672C\u8EAB\u65E0\u6CD5\u88AB\u6539\u53D8\uFF09\u3002</p><h3 id="\u5E03\u5C14\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u7C7B\u578B" aria-hidden="true">#</a> \u5E03\u5C14\u7C7B\u578B</h3><p>\u5E03\u5C14\u8868\u793A\u4E00\u4E2A\u903B\u8F91\u5B9E\u4F53\uFF0C\u53EF\u4EE5\u6709\u4E24\u4E2A\u503C\uFF1Atrue \u548C false\u3002</p><h3 id="null-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#null-\u7C7B\u578B" aria-hidden="true">#</a> Null \u7C7B\u578B</h3><p>Null \u7C7B\u578B\u53EA\u6709\u4E00\u4E2A\u503C\uFF1A null</p><h3 id="\u6570\u5B57\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u5B57\u7C7B\u578B</h3><p>\u6839\u636EECMAScript,\u53CC\u7CBE\u5EA6 64 \u4F4D\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684\u503C -(253-1)\u5230(253-1)\u3002<strong>\u5B83\u5E76\u6CA1\u6709\u4E3A\u6574\u6570\u7ED9\u51FA\u4E00\u79CD\u7279\u5B9A\u7684\u7C7B\u578B</strong>\u3002\u9664\u4E86\u80FD\u591F\u8868\u793A\u6D6E\u70B9\u6570\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u5E26\u7B26\u53F7\u7684\u503C\uFF1A<code>+Infinity</code>\uFF0C<code>-Infinity</code>\xA0\u548C\xA0<code>NaN</code> (\u975E\u6570\u503C\uFF0CNot-a-Number)\u3002</p><h3 id="bigint-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#bigint-\u7C7B\u578B" aria-hidden="true">#</a> BigInt \u7C7B\u578B</h3><p>BigInt\u7C7B\u578B\u662F JavaScript \u4E2D\u7684\u4E00\u4E2A\u57FA\u7840\u7684\u6570\u503C\u7C7B\u578B\uFF0C\u53EF\u4EE5\u7528\u4EFB\u610F\u7CBE\u5EA6\u8868\u793A\u6574\u6570\u3002\u4F7F\u7528 BigInt\uFF0C\u60A8\u53EF\u4EE5\u5B89\u5168\u5730\u5B58\u50A8\u548C\u64CD\u4F5C\u5927\u6574\u6570\uFF0C\u751A\u81F3\u53EF\u4EE5\u8D85\u8FC7\u6570\u5B57\u7684\u5B89\u5168\u6574\u6570\u9650\u5236\u3002BigInt \u662F\u901A\u8FC7\u5728\u6574\u6570\u672B\u5C3E\u9644\u52A0 n \u6216\u8C03\u7528\u6784\u9020\u51FD\u6570\u6765\u521B\u5EFA\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; const x = 2n ** 53n;
9007199254740992n
&gt; const y = x + 1n;
9007199254740993n
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5B57\u7B26\u4E32\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7C7B\u578B</h3><p>JavaScript \u7684\u5B57\u7B26\u4E32\u7C7B\u578B\u7528\u4E8E\u8868\u793A\u6587\u672C\u6570\u636E\u3002\u5B83\u662F\u4E00\u7EC416\u4F4D\u7684\u65E0\u7B26\u53F7\u6574\u6570\u503C\u7684\u201C\u5143\u7D20\u201D\u3002\u5728\u5B57\u7B26\u4E32\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u5360\u636E\u4E86\u5B57\u7B26\u4E32\u7684\u4F4D\u7F6E\u3002\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7D22\u5F15\u4E3A 0\uFF0C\u4E0B\u4E00\u4E2A\u662F\u7D22\u5F15 1\uFF0C\u4F9D\u6B64\u7C7B\u63A8\u3002\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u662F\u5B83\u7684\u5143\u7D20\u7684\u6570\u91CF\u3002</p><h3 id="\u7B26\u53F7\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7B26\u53F7\u7C7B\u578B" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#%E7%AC%A6%E5%8F%B7%E7%B1%BB%E5%9E%8B" title="Permalink to \u7B26\u53F7\u7C7B\u578B" target="_blank" rel="noopener noreferrer">\u7B26\u53F7\u7C7B\u578B`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u7B26\u53F7(Symbols)\u662F ECMAScript \u7B2C6\u7248\u65B0\u5B9A\u4E49\u7684\u3002\u7B26\u53F7\u7C7B\u578B\u662F\u552F\u4E00\u7684\u5E76\u4E14\u662F\u4E0D\u53EF\u4FEE\u6539\u7684, \u5E76\u4E14\u4E5F\u53EF\u4EE5\u7528\u6765\u4F5C\u4E3A Object \u7684 key \u7684\u503C(\u5982\u4E0B). \u5728\u67D0\u4E9B\u8BED\u8A00\u5F53\u4E2D\u4E5F\u6709\u7C7B\u4F3C\u7684\u539F\u5B50\u7C7B\u578B(Atoms). \u4F60\u4E5F\u53EF\u4EE5\u8BA4\u4E3A\u4E3A\u5B83\u4EEC\u662F C \u91CC\u9762\u7684\u679A\u4E3E\u7C7B\u578B. \u66F4\u591A\u7EC6\u8282\u8BF7\u770B\xA0<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol" target="_blank" rel="noopener noreferrer">Symbol`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\xA0\u548C\xA0<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol" target="_blank" rel="noopener noreferrer"><code>Symbol</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\xA0\u3002</p><h3 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h3><p>\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D, \u5BF9\u8C61\u662F\u6307\u5185\u5B58\u4E2D\u7684\u53EF\u4EE5\u88AB \u6807\u8BC6\u7B26\u5F15\u7528\u7684\u4E00\u5757\u533A\u57DF\u3002 \u5728 JavaScript \u91CC\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u88AB\u770B\u4F5C\u662F\u4E00\u7EC4\u5C5E\u6027\u7684\u96C6\u5408\u3002</p><h4 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h4><blockquote><p>\u6570\u636E\u5C5E\u6027</p><blockquote><p>\u6570\u636E\u5C5E\u6027\u662F\u952E\u503C\u5BF9\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u6570\u636E\u5C5E\u6027\u62E5\u6709\u4E0B\u5217\u7279\u6027:</p></blockquote></blockquote><blockquote><p>\u8BBF\u95EE\u5668\u5C5E\u6027</p><blockquote><p>\u8BBF\u95EE\u5668\u5C5E\u6027\u6709\u4E00\u4E2A\u6216\u4E24\u4E2A\u8BBF\u95EE\u5668\u51FD\u6570 (get \u548C set) \u6765\u5B58\u53D6\u6570\u503C</p></blockquote></blockquote><h2 id="\u6807\u51C6\u7684-\u5BF9\u8C61-\u548C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u7684-\u5BF9\u8C61-\u548C\u51FD\u6570" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#%E6%A0%87%E5%87%86%E7%9A%84_%E5%AF%B9%E8%B1%A1_%E5%92%8C%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">&quot;\u6807\u51C6\u7684&quot; \u5BF9\u8C61, \u548C\u51FD\u6570`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p>\u4E00\u4E2A JavaScript \u5BF9\u8C61\u5C31\u662F\u952E\u548C\u503C\u4E4B\u95F4\u7684\u6620\u5C04\u3002\u952E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF08\u6216\u8005\xA0<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol" target="_blank" rel="noopener noreferrer"><code>Symbol</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\uFF09\uFF0C\u503C\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u503C\u3002\xA0\u8FD9\u4F7F\u5F97\u5BF9\u8C61\u975E\u5E38\u7B26\u5408\xA0<a href="http://en.wikipedia.org/wiki/Hash_table" target="_blank" rel="noopener noreferrer">\u54C8\u5E0C\u8868`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u3002</p><p>\u51FD\u6570\u662F\u4E00\u4E2A\u9644\u5E26\u53EF\u88AB\u8C03\u7528\u529F\u80FD\u7684\u5E38\u89C4\u5BF9\u8C61\u3002</p><hr><h2 id="\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F</h2><h3 id="\u4E3B\u8981\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E4%B8%BB%E8%A6%81%E8%A1%A8%E8%BE%BE%E5%BC%8F" title="Permalink to \u4E3B\u8981\u8868\u8FBE\u5F0F" target="_blank" rel="noopener noreferrer">\u4E3B\u8981\u8868\u8FBE\u5F0F`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>JavaScript\u4E2D\u57FA\u672C\u5173\u952E\u5B57\u548C\u5E38\u7528\u8868\u8FBE\u5F0F\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this" target="_blank" rel="noopener noreferrer"><code>this</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>this</code>\xA0\u5173\u952E\u5B57\u6307\u5411\u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function" target="_blank" rel="noopener noreferrer"><code>function</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>function</code>\xA0\u5173\u952E\u5B57\u5B9A\u4E49\u4E86\u51FD\u6570\u8868\u8FBE\u5F0F\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/class" target="_blank" rel="noopener noreferrer"><code>class</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>class</code>\xA0\u5173\u952E\u5B57\u5B9A\u4E49\u4E86\u7C7B\u8868\u8FBE\u5F0F\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function*" target="_blank" rel="noopener noreferrer"><code>function*</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>function*</code>\xA0\u5173\u952E\u5B57\u5B9A\u4E49\u4E86\u4E00\u4E2A generator \u51FD\u6570\u8868\u8FBE\u5F0F\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" target="_blank" rel="noopener noreferrer"><code>yield</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6682\u505C\u548C\u6062\u590D generator \u51FD\u6570\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*" target="_blank" rel="noopener noreferrer"><code>yield*</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u59D4\u6D3E\u7ED9\u53E6\u5916\u4E00\u4E2Agenerator\u51FD\u6570\u6216\u53EF\u8FED\u4EE3\u7684\u5BF9\u8C61\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function" target="_blank" rel="noopener noreferrer"><code>async function</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>async function</code>\xA0\u5B9A\u4E49\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u8868\u8FBE\u5F0F\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await" target="_blank" rel="noopener noreferrer"><code>await</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6682\u505C\u6216\u6062\u590D\u6267\u884C\u5F02\u6B65\u51FD\u6570\uFF0C\u5E76\u7B49\u5F85promise\u7684resolve/reject\u56DE\u8C03\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer"><code>[]</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6570\u7EC4\u521D\u59CB\u5316/\u5B57\u9762\u91CF\u8BED\u6CD5\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer" target="_blank" rel="noopener noreferrer"><code>{}</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5BF9\u8C61\u521D\u59CB\u5316/\u5B57\u9762\u91CF\u8BED\u6CD5\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp" target="_blank" rel="noopener noreferrer"><code>/ab+c/i</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF\u8BED\u6CD5\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping" target="_blank" rel="noopener noreferrer"><code>( )</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5206\u7EC4\u64CD\u4F5C\u7B26\u3002</p><h3 id="\u5DE6\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E5%B7%A6%E8%A1%A8%E8%BE%BE%E5%BC%8F" title="Permalink to \u5DE6\u8868\u8FBE\u5F0F" target="_blank" rel="noopener noreferrer">\u5DE6\u8868\u8FBE\u5F0F`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u5DE6\u8FB9\u7684\u503C\u662F\u8D4B\u503C\u7684\u76EE\u6807\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors" target="_blank" rel="noopener noreferrer">\u5C5E\u6027\u8BBF\u95EE\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6210\u5458\u8FD0\u7B97\u7B26\u63D0\u4F9B\u4E86\u5BF9\u5BF9\u8C61\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u7684\u8BBF\u95EE\u3002 (<code>object.property</code>\xA0\u548C\xA0<code>object[&quot;property&quot;]</code>).</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new" target="_blank" rel="noopener noreferrer"><code>new</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>new</code>\xA0\u8FD0\u7B97\u7B26\u521B\u5EFA\u4E86\u6784\u9020\u51FD\u6570\u5B9E\u4F8B\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target" target="_blank" rel="noopener noreferrer"><code>new.target</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5728\u6784\u9020\u5668\u4E2D\uFF0C<code>new.target</code>\xA0\u6307\u5411<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new" target="_blank" rel="noopener noreferrer"><code>new</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u8C03\u7528\u7684\u6784\u9020\u5668\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super" target="_blank" rel="noopener noreferrer"><code>super</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>super</code>\xA0\u5173\u952E\u5B57\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u5668\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank" rel="noopener noreferrer"><code>...obj</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5C55\u5F00\u8FD0\u7B97\u7B26\u53EF\u4EE5\u5C06\u4E00\u4E2A\u53EF\u8FED\u4EE3\u7684\u5BF9\u8C61\u5728\u51FD\u6570\u8C03\u7528\u7684\u4F4D\u7F6E\u5C55\u5F00\u6210\u4E3A\u591A\u4E2A\u53C2\u6570,\u6216\u8005\u5728\u6570\u7EC4\u5B57\u9762\u91CF\u4E2D\u5C55\u5F00\u6210\u591A\u4E2A\u6570\u7EC4\u5143\u7D20\u3002</p><hr><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h2><h3 id="\u4E00\u5143\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E00\u5143\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E4%B8%80%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u4E00\u5143\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u4E00\u5143\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u4E00\u5143\u8FD0\u7B97\u7B26\u53EA\u6709\u4E00\u4E2A\u64CD\u4F5C\u6570.</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete" target="_blank" rel="noopener noreferrer"><code>delete</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>delete</code>\xA0\u8FD0\u7B97\u7B26\u7528\u6765\u5220\u9664\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void" target="_blank" rel="noopener noreferrer"><code>void</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>void</code>\xA0\u8FD0\u7B97\u7B26\u8868\u793A\u8868\u8FBE\u5F0F\u653E\u5F03\u8FD4\u56DE\u503C\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof" target="_blank" rel="noopener noreferrer"><code>typeof</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>typeof</code>\xA0\u8FD0\u7B97\u7B26\u7528\u6765\u5224\u65AD\u7ED9\u5B9A\u5BF9\u8C61\u7684\u7C7B\u578B\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>+</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u4E00\u5143\u52A0\u8FD0\u7B97\u7B26\u5C06\u64CD\u4F5C\u8F6C\u6362\u4E3ANumber\u7C7B\u578B\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>-</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u4E00\u5143\u51CF\u8FD0\u7B97\u7B26\u5C06\u64CD\u4F5C\u8F6C\u6362\u4E3ANumber\u7C7B\u578B\u5E76\u53D6\u53CD\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>~</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6309\u4F4D\u975E\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>!</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u903B\u8F91\u975E\u8FD0\u7B97\u7B26\u3002</p><h3 id="\u7B97\u672F\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7B97\u672F\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E7%AE%97%E6%9C%AF%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u7B97\u672F\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u7B97\u672F\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u7B97\u672F\u8FD0\u7B97\u7B26\u4EE5\u4E8C\u4E2A\u6570\u503C\uFF08\u5B57\u9762\u91CF\u6216\u53D8\u91CF\uFF09\u4F5C\u4E3A\u64CD\u4F5C\u6570\uFF0C\u5E76\u8FD4\u56DE\u5355\u4E2A\u6570\u503C\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>+</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u52A0\u6CD5\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>-</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u51CF\u6CD5\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>/</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u9664\u6CD5\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>*</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u4E58\u6CD5\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>%</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u53D6\u6A21\u8FD0\u7B97\u7B26\u3002</p><h3 id="\u5173\u7CFB\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5173\u7CFB\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u5173\u7CFB\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u5173\u7CFB\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u6BD4\u8F83\u8FD0\u7B97\u7B26\u6BD4\u8F83\u4E8C\u4E2A\u64CD\u4F5C\u6570\u5E76\u8FD4\u56DE\u57FA\u4E8E\u6BD4\u8F83\u7ED3\u679C\u7684<code>Boolean</code>\u503C\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in" target="_blank" rel="noopener noreferrer"><code>in</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>in\u8FD0\u7B97\u7B26\u7528\u6765\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u62E5\u6709\u7ED9\u5B9A\u5C5E\u6027\u3002</code>.</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof" target="_blank" rel="noopener noreferrer"><code>instanceof</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><code>instanceof</code>\xA0\u8FD0\u7B97\u7B26\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&lt;</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5C0F\u4E8E\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&gt;</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5927\u4E8E\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&lt;=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5C0F\u4E8E\u7B49\u4E8E\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&gt;=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5927\u4E8E\u7B49\u4E8E\u8FD0\u7B97\u7B26\u3002</p><p><strong>\u6CE8\u610F\uFF1A\xA0=&gt;</strong>\xA0\u4E0D\u662F\u8FD0\u7B97\u7B26\uFF0C\u800C\u662F<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank" rel="noopener noreferrer"><code>\u7BAD\u5934\u51FD\u6570</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u7684\u8868\u793A\u7B26\u3002</p><h3 id="\u76F8\u7B49\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u76F8\u7B49\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E7%9B%B8%E7%AD%89%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u76F8\u7B49\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u76F8\u7B49\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u5982\u679C\u76F8\u7B49\uFF0C\u64CD\u4F5C\u7B26\u8FD4\u56DE\u7684\u662F\u5E03\u5C14\u7C7B\u578B\u7684true\uFF0C\u5426\u5219\u662Ffalse\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>==</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u76F8\u7B49 \u8FD0\u7B97\u7B26.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>!=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u4E0D\u7B49 \u8FD0\u7B97\u7B26.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>===</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5168\u7B49 \u8FD0\u7B97\u7B26.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>!==</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u975E\u5168\u7B49 \u8FD0\u7B97\u7B26.</p><h3 id="\u4F4D\u79FB\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u79FB\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E4%BD%8D%E7%A7%BB%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u4F4D\u79FB\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u4F4D\u79FB\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u5728\u4E8C\u8FDB\u5236\u7684\u57FA\u7840\u4E0A\u5BF9\u6570\u5B57\u8FDB\u884C\u79FB\u52A8\u64CD\u4F5C</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&lt;&lt;</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6309\u4F4D\u5DE6\u79FB\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&gt;&gt;</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6309\u4F4D\u53F3\u79FB\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&gt;&gt;&gt;</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6309\u4F4D\u65E0\u7B26\u53F7\u53F3\u79FB\u8FD0\u7B97\u7B26\u3002</p><h3 id="\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u4E8C\u8FDB\u5236\u8FD0\u7B97\u7B26\u5C06\u5B83\u4EEC\u7684\u64CD\u4F5C\u6570\u4F5C\u4E3A32\u4E2A\u4E8C\u8FDB\u5236\u4F4D\uFF080\u62161\uFF09\u7684\u96C6\u5408\uFF0C\u5E76\u8FD4\u56DE\u6807\u51C6\u7684JavaScript\u6570\u503C\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&amp;</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u4E8C\u8FDB\u5236\u4F4D\u4E0E\uFF08AND\uFF09\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>|</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u4E8C\u8FDB\u5236\u4F4D\u6216\uFF08OR\uFF09\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>^</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u4E8C\u8FDB\u5236\u4F4D\u5F02\u6216\uFF08XOR\uFF09\u3002</p><h3 id="\u4E8C\u5143\u903B\u8F91\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5143\u903B\u8F91\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E4%BA%8C%E5%85%83%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u4E8C\u5143\u903B\u8F91\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u4E8C\u5143\u903B\u8F91\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u903B\u8F91\u8FD0\u7B97\u7B26\u5178\u578B\u7684\u7528\u6CD5\u662F\u7528\u4E8E\u5E03\u5C14(\u903B\u8F91)\u503C\u8FD0\u7B97, \u5B83\u4EEC\u8FD4\u56DE\u5E03\u5C14\u503C\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&amp;&amp;</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u903B\u8F91\u4E0E\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>||</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u903B\u8F91\u6216\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator" target="_blank" rel="noopener noreferrer"><code>??</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u7A7A\u503C\u5408\u5E76\u8FD0\u7B97\u7B26\uFF0C\u5982\u679C ?? \u524D\u9762\u662F null \u6216 undefined\uFF0C\u53D6\u540E\u9762\u7684\u9ED8\u8BA4\u503C</p><h3 id="\u6761\u4EF6-\u4E09\u5143-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6-\u4E09\u5143-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E6%9D%A1%E4%BB%B6%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u6761\u4EF6(\u4E09\u5143)\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u6761\u4EF6(\u4E09\u5143)\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" target="_blank" rel="noopener noreferrer"><code>(condition ? ifTrue : ifFalse)</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u6761\u4EF6\u5143\u7D20\u8FD0\u7B97\u7B26\u628A\u4E24\u4E2A\u7ED3\u679C\u4E2D\u5176\u4E2D\u4E00\u4E2A\u7B26\u5408\u8FD0\u7B97\u903B\u8F91\u7684\u503C\u8FD4\u56DE\u3002</p><h3 id="\u8D4B\u503C\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8D4B\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators#%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6" title="Permalink to \u8D4B\u503C\u8FD0\u7B97\u7B26" target="_blank" rel="noopener noreferrer">\u8D4B\u503C\u8FD0\u7B97\u7B26`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><p>\u8D4B\u503C\u5143\u7D20\u7B26\u4F1A\u5C06\u53F3\u8FB9\u7684\u64CD\u4F5C\u6570\u7684\u503C\u5206\u914D\u7ED9\u5DE6\u8FB9\u7684\u64CD\u4F5C\u6570\uFF0C\u5E76\u5C06\u5176\u503C\u4FEE\u6539\u4E3A\u53F3\u8FB9\u64CD\u4F5C\u6570\u76F8\u7B49\u7684\u503C\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>*=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u4E58\u79EF\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>/=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u5546\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>%=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u6C42\u4F59\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>+=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u6C42\u548C\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>-=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u6C42\u5DEE\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&lt;&lt;=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u5DE6\u4F4D\u79FB\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&gt;&gt;=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u53F3\u4F4D\u79FB\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&gt;&gt;&gt;=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u65E0\u7B26\u53F7\u53F3\u4F4D\u79FB\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>&amp;=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u4E0E\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>^=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u6309\u4F4D\u5F02\u6216\u3002</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators" title="Currently only available in English (US)" target="_blank" rel="noopener noreferrer"><code>|=</code>\xA0(en-US)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u8D4B\u503C\u6216\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment" target="_blank" rel="noopener noreferrer"><code>&amp;&amp;=</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u903B\u8F91\u548C\u8D4B\u503C\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment" target="_blank" rel="noopener noreferrer"><code>||=</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u903B\u8F91\u6216\u8D4B\u503C\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment" target="_blank" rel="noopener noreferrer"><code>??=</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u903B\u8F91\u7A7A\u8D4B\u503C\u8FD0\u7B97\u7B26\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank" rel="noopener noreferrer"><code>[a, b] = [1, 2]</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank" rel="noopener noreferrer"><code>{a, b} = {a:1, b:2}</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u89E3\u6784\u8D4B\u503C\u5141\u8BB8\u4F60\u5206\u914D\u6570\u7EC4\u6216\u8005\u5BF9\u8C61\u53D8\u91CF\u7684\u5C5E\u6027\u901A\u8FC7\u4F7F\u7528\u89C4\u5B9A\u7684\u8BED\u6CD5\uFF0C\u5176\u770B\u8D77\u6765\u548C\u6570\u7EC4\u548C\u5BF9\u8C61\u5B57\u9762\u91CF\u5F88\u76F8\u4F3C\u3002</p><h3 id="\u9017\u53F7\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u9017\u53F7\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u9017\u53F7\u64CD\u4F5C\u7B26</h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator" target="_blank" rel="noopener noreferrer"><code>,</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>\u9017\u53F7\u64CD\u4F5C\u7B26\u5141\u8BB8\u5728\u4E00\u4E2A\u5224\u65AD\u72B6\u6001\u4E2D\u6709\u591A\u4E2A\u8868\u8FBE\u5F0F\u53BB\u8FDB\u884C\u8FD0\u7B97\u5E76\u4E14\u6700\u540E\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002</p><!--]-->`);
}
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/JavaScript\u57FA\u7840.html.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var JavaScript___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["ssrRender", _sfc_ssrRender$O]]);
var JavaScript___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": JavaScript___html$1
});
const _sfc_main$15 = {};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/axios.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`axios`);
      } else {
        return [
          vue.createTextVNode("axios")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="js\u7C7B\u5E93" tabindex="-1"><a class="header-anchor" href="#js\u7C7B\u5E93" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/js%E7%B1%BB%E5%BA%93.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`js\u7C7B\u5E93`);
      } else {
        return [
          vue.createTextVNode("js\u7C7B\u5E93")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vue`);
      } else {
        return [
          vue.createTextVNode("Vue")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u57FA\u672C\u6982\u5FF5`);
      } else {
        return [
          vue.createTextVNode("\u57FA\u672C\u6982\u5FF5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/canvas.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`canvas`);
      } else {
        return [
          vue.createTextVNode("canvas")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="javascript\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#javascript\u57FA\u7840" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/JavaScript%E5%9F%BA%E7%A1%80.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`JavaScript\u57FA\u7840`);
      } else {
        return [
          vue.createTextVNode("JavaScript\u57FA\u7840")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u5FAE\u8F6Fjavascript" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u8F6Fjavascript" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/%E5%BE%AE%E8%BD%AFjavascript.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5FAE\u8F6Fjavascript`);
      } else {
        return [
          vue.createTextVNode("\u5FAE\u8F6Fjavascript")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="selenium" tabindex="-1"><a class="header-anchor" href="#selenium" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Selenium.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Selenium`);
      } else {
        return [
          vue.createTextVNode("Selenium")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/nodejs/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`nodejs`);
      } else {
        return [
          vue.createTextVNode("nodejs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><!--]-->`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/index.html.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var index_html$o = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$N]]);
var index_html$p = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$o
});
const _sfc_main$14 = {};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u81EA\u52A8\u5316\u6D4B\u8BD5\u5E93</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p><code>npm install selenium-webdriver</code></p><h2 id="\u542F\u52A8\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u7A0B\u5E8F" aria-hidden="true">#</a> \u542F\u52A8\u7A0B\u5E8F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const {Builder} = require(&quot;selenium-webdriver&quot;);
const edge = require(&#39;selenium-webdriver/edge&#39;);
const edgeService = new edge.ServiceBuilder(&quot;edge/msedgedriver.exe&quot;);


let driver = new Builder().setEdgeService(edgeService).forBrowser(&#39;MicrosoftEdge&#39;).build();


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u6D4F\u89C8\u5668\u5BFC\u822A\u7F51\u5740" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5BFC\u822A\u7F51\u5740" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u5BFC\u822A\u7F51\u5740</h2><p><code>driver.get(url)</code></p><h2 id="\u83B7\u53D6\u5F53\u524D\u7F51\u5740" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5F53\u524D\u7F51\u5740" aria-hidden="true">#</a> \u83B7\u53D6\u5F53\u524D\u7F51\u5740</h2><p><code>driver.getCurrentUrl()</code></p><h2 id="\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a> \u8FD4\u56DE</h2><p>\u6D4F\u89C8\u5668\u540E\u9000\u6309\u94AE <code>driver.navigate().back();</code></p><h2 id="\u524D\u8FDB" tabindex="-1"><a class="header-anchor" href="#\u524D\u8FDB" aria-hidden="true">#</a> \u524D\u8FDB</h2><p>\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u6309\u94AE <code>driver.navigate().forward();</code></p><h2 id="\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0" aria-hidden="true">#</a> \u5237\u65B0</h2><p><code>driver.navigate().refresh();</code></p><h2 id="\u83B7\u5F97\u6807\u9898" tabindex="-1"><a class="header-anchor" href="#\u83B7\u5F97\u6807\u9898" aria-hidden="true">#</a> \u83B7\u5F97\u6807\u9898</h2><p><code>driver.getTitle();</code></p><h2 id="\u83B7\u53D6\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7A97\u53E3" aria-hidden="true">#</a> \u83B7\u53D6\u7A97\u53E3</h2><p><code>await driver.getWindowHandle();</code></p><!--]-->`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Selenium.html.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var Selenium_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$M]]);
var Selenium_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Selenium_html$1
});
const _sfc_main$13 = {};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="json-server" tabindex="-1"><a class="header-anchor" href="#json-server" aria-hidden="true">#</a> json-server</h1><p>npm install -g json-server</p><p>json-server --watch db.json</p><h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h1><h2 id="get-post-put-delete" tabindex="-1"><a class="header-anchor" href="#get-post-put-delete" aria-hidden="true">#</a> GET POST PUT DELETE</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	<span class="token comment">//\u4EE3\u7801\u5757</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	<span class="token comment">//\u4EE3\u7801\u5757</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h1 id="\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94" aria-hidden="true">#</a> \u54CD\u5E94</h1><h3 id="config-\u8BF7\u6C42\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#config-\u8BF7\u6C42\u914D\u7F6E" aria-hidden="true">#</a> config <em>\u8BF7\u6C42\u914D\u7F6E</em></h3><h3 id="data-\u54CD\u5E94\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#data-\u54CD\u5E94\u7ED3\u679C" aria-hidden="true">#</a> data <em>\u54CD\u5E94\u7ED3\u679C</em></h3><h3 id="headers-\u8BF7\u6C42\u5934" tabindex="-1"><a class="header-anchor" href="#headers-\u8BF7\u6C42\u5934" aria-hidden="true">#</a> headers <em>\u8BF7\u6C42\u5934</em></h3><h3 id="request-\u521B\u5EFA\u7684xmlhttprequest\u5B9E\u4F8B\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#request-\u521B\u5EFA\u7684xmlhttprequest\u5B9E\u4F8B\u5BF9\u8C61" aria-hidden="true">#</a> request <em>\u521B\u5EFA\u7684XMLHttpRequest\u5B9E\u4F8B\u5BF9\u8C61</em></h3><h3 id="status-\u54CD\u5E94\u7684\u72B6\u6001\u7801" tabindex="-1"><a class="header-anchor" href="#status-\u54CD\u5E94\u7684\u72B6\u6001\u7801" aria-hidden="true">#</a> status <em>\u54CD\u5E94\u7684\u72B6\u6001\u7801</em></h3><h3 id="statustext-\u54CD\u5E94\u7684\u6587\u672C\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#statustext-\u54CD\u5E94\u7684\u6587\u672C\u5B57\u7B26\u4E32" aria-hidden="true">#</a> statusText <em>\u54CD\u5E94\u7684\u6587\u672C\u5B57\u7B26\u4E32</em></h3><hr><h2 id="\u914D\u7F6E\u5BF9\u8C61-request-config" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5BF9\u8C61-request-config" aria-hidden="true">#</a> \u914D\u7F6E\u5BF9\u8C61: request config</h2><p>\u7565 <br></p><hr><p><strong>$\\color{red}{\u9ED8\u8BA4\u914D\u7F6E:}$</strong></p><p>axios.defaults.method = &#39;GET&#39;; axios.defaults.baseURL = &#39;http://localhost:3000&#39;; axios.defaults.timeout = 300;</p><hr><br><p><strong>$\\color{red}{\u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C61:}$</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ts <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//ts\u4E0Eaxios\u5BF9\u8C61\u7684\u529F\u80FD\u51E0\u4E4E\u4E00\u81F4</span>


<span class="token keyword">const</span> ts <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">2000</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><hr><br><p><strong>$\\color{red}{\u62E6\u622A\u5668:}$</strong></p><ul><li>\u8BF7\u6C42\u62E6\u622A\u5668</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u622A\u5668 \u6210\u529F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6C42\u62E6\u622A\u5668\u5931\u8D25&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u54CD\u5E94\u62E6\u622A\u5668</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u54CD\u5E94\u62E6\u622A\u5668\u6210\u529F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\u2018\u54CD\u5E94\u62E6\u622A\u5668\u5931\u8D25\u2019<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr><br><p>$\\color{red}{\u53D6\u6D88\u8BF7\u6C42:}$</p><p>$\\color{blue}{\u91CD\u70B9\uFF1A}$ cancelToken\u53C2\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> btns <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

btns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>cancel <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/posts&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">axios<span class="token punctuation">.</span>CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
			cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u6B63\u5728\u8BF7\u6C42&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

btns<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><hr><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B\uFF1A</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>axios<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./js/axios.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/vue.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
		<span class="token selector">#app</span> <span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token selector">ul li</span> <span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
			<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
			<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token selector">button</span> <span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
			<span class="token property">color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>
			<span class="token property">border</span><span class="token punctuation">:</span> #F0F8FF<span class="token punctuation">;</span>
			<span class="token property">border-radius</span><span class="token punctuation">:</span> 0.625rem<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token selector">button:hover</span> <span class="token punctuation">{</span>
			<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 8px 5px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 6px 11px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.19<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token selector">button:active</span> <span class="token punctuation">{</span>
			<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u57FA\u672C\u4F7F\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u53D1\u9001GET\u8BF7\u6C42<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> darkorange<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u53D1\u9001POST\u8BF7\u6C42<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u53D1\u9001PUT\u8BF7\u6C42<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u53D1\u9001DELETE\u8BF7\u6C42<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u53D6\u6D88\u8BF7\u6C42<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token comment">// http://localhost:3000/posts</span>
		<span class="token comment">// http://localhost:3000/comments</span>
		<span class="token comment">// http://localhost:3000/albums</span>
		<span class="token comment">// http://localhost:3000/photos</span>
		<span class="token comment">// http://localhost:3000/users</span>
		<span class="token comment">// http://localhost:3000/todos</span>

		<span class="token keyword">const</span> btns <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">var</span> cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

		btns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>cancel <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
					<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/posts&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">axios<span class="token punctuation">.</span>CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
					<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
					cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u6B63\u5728\u8BF7\u6C42&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		btns<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			cancel <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>

		btns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/test&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;2113733946@qq.com&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;\u4ECA\u5929\u4E0B\u5927\u96E8&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		btns<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/test/2&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;xdy@qq.com&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;\u4ECA\u5929\u6709\u4EBA\u6210\u4ED9&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		btns<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/test/1&#39;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>


		<span class="token comment">// const ts = axios.create({</span>
		<span class="token comment">// 	baseURL: &#39;http://localhost:3000&#39;,</span>
		<span class="token comment">// 	timeout: 2000</span>
		<span class="token comment">// });</span>

		<span class="token comment">// ts({</span>
		<span class="token comment">// 	method: &#39;GET&#39;,</span>
		<span class="token comment">// 	url: &#39;/test&#39;</span>
		<span class="token comment">// }).then(response=&gt;{</span>
		<span class="token comment">// 	console.log(response.data);</span>
		<span class="token comment">// })</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br></div></div><!--]-->`);
}
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/axios.html.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var axios_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["ssrRender", _sfc_ssrRender$L]]);
var axios_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": axios_html$1
});
const _sfc_main$12 = {};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage" title="zh-CN/docs/Canvas_tutorial/Basic_usage" target="_blank" rel="noopener noreferrer">\u57FA\u672C\u7528\u6CD5`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>[^basic]</li><li><ins>\u7ED8\u5236\u56FE\u5F62</ins>[^drawing]</li><li><ins>\u4F7F\u7528\u6837\u5F0F\u4E0E\u989C\u8272</ins>[^style]</li><li><ins>\u7ED8\u5236\u6587\u672C</ins>[^text]</li><li><ins>\u4F7F\u7528\u56FE\u50CF</ins>[^image]</li><li><ins>\u53D8\u5F62</ins>[^deformation]</li><li><ins>\u5408\u6210\u548C\u526A\u8F91</ins>[^clip]</li><li><ins>\u57FA\u672C\u52A8\u753B</ins>[^animation]</li><li><ins>\u9AD8\u7EA7\u52A8\u753B</ins>[^senior]</li><li><ins>\u50CF\u7D20\u5904\u7406</ins>[^pixel]</li><li><ins>\u70B9\u51FB\u533A\u57DF\u548C\u65E0\u969C\u788D\u8BBF\u95EE</ins><a href="%5B%5Eoptimization%5D:">^accessibility</a></li><li><ins>\u4F18\u5316 canvas</ins>[^optimization]</li><li><ins>\u7EC8\u66F2</ins>[^end]</li></ul><p>[^basic]:</p><p>[^drawing]:</p><p>[^style]:</p><p>[^text]:</p><p>[^image]:</p><p>[^deformation]:</p><p>[^clip]:</p><p>[^animation]:</p><p>[^senior]:</p><p>[^pixel]:</p><p>[^end]:</p><!--]-->`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/canvas.html.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var canvas_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$K]]);
var canvas_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": canvas_html$1
});
var _imports_0$5 = "/notes/assets/40f2bb7f03401a685fa56fa7e1aee5a1.e6f9a25f.png";
const _sfc_main$11 = {};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h2 id="togetherjs" tabindex="-1"><a class="header-anchor" href="#togetherjs" aria-hidden="true">#</a> <a href="https://togetherjs.com/" target="_blank" rel="noopener noreferrer">TogetherJS`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p>\u6DFB\u52A0 TogetherJS \u5230\u60A8\u7684\u7F51\u7AD9\uFF0C\u8BA9\u7528\u6237\u5B9E\u65F6\u4E92\u52A9\uFF0C\u534F\u4F5C\u66F4\u7B80\u5355\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script src=&quot;https://togetherjs.com/togetherjs-min.js&quot;&gt;&lt;/script&gt;

&lt;button onclick=&quot;TogetherJS(this); return false;&quot;&gt;Start TogetherJS&lt;/button&gt;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="jsfiddle" tabindex="-1"><a class="header-anchor" href="#jsfiddle" aria-hidden="true">#</a> <a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer">JSFiddle`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p>\u7F16\u8F91 JavaScript\u3001CSS \u548C HTML \u5E76\u83B7\u5F97\u5B9E\u65F6\u7ED3\u679C\u3002\u4F7F\u7528\u5916\u7F6E\u8D44\u6E90\uFF0C\u5E76\u548C\u4F60\u7684\u56E2\u961F\u5728\u7EBF\u5408\u4F5C</p><h2 id="antv-g6" tabindex="-1"><a class="header-anchor" href="#antv-g6" aria-hidden="true">#</a> <a href="https://g6.antv.vision/zh/docs/manual/tutorial/example" target="_blank" rel="noopener noreferrer">@antv/g6`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p><strong>G6 \u662F\u4E00\u4E2A\u56FE\u53EF\u89C6\u5316\u5F15\u64CE\u3002\u5B83\u63D0\u4F9B\u4E86\u56FE\u7684\u7ED8\u5236\u3001\u5E03\u5C40\u3001\u5206\u6790\u3001\u4EA4\u4E92\u3001\u52A8\u753B\u7B49\u57FA\u7840\u7684\u56FE\u53EF\u89C6\u5316\u80FD\u529B\u3002\u65E8\u5728\u8BA9\u5173\u7CFB\u53D8\u5F97\u900F\u660E\uFF0C\u7B80\u5355\u3002\u8BA9\u7528\u6237\u83B7\u5F97\u5173\u7CFB\u6570\u636E\u7684 Insight\u3002</strong></p><p>$\\color{red}{g6}$\u4E2D\uFF0CGraph\u5BF9\u8C61\u662F\u56FE\u7684\u8F7D\u4F53\uFF0C\u5305\u542B\u4E86\u56FE\u4E0A\u7684\u6240\u6709\u5143\u7D20\uFF0C<strong>$\\color{red}{\u5373\u662F\u8BF4\u4F7F\u7528G6\u662F\u5728Graph\u5BF9\u8C61\u4E4B\u4E0A\u8FDB\u884C\u6269\u5C55\u7684}$</strong></p><p>$\\color{red}{G6\u7684\u751F\u547D\u5468\u671F}$:<code>\u521D\u59CB\u5316 \u2014&gt; \u52A0\u8F7D\u6570\u636E \u2014&gt; \u6E32\u67D3 \u2014&gt; \u66F4\u65B0 \u2014&gt; \u9500\u6BC1</code></p><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$5)} alt="G6 \u6838\u5FC3\u6982\u5FF5\u603B\u89C8"></p><hr><h2 id="antv-x6" tabindex="-1"><a class="header-anchor" href="#antv-x6" aria-hidden="true">#</a> <a href="https://antv-x6.gitee.io/zh/docs/tutorial/getting-started" target="_blank" rel="noopener noreferrer">@antv/x6`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p><strong>X6 \u662F AntV \u65D7\u4E0B\u7684\u56FE\u7F16\u8F91\u5F15\u64CE\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u5F00\u7BB1\u5373\u7528\u7684\u4EA4\u4E92\u7EC4\u4EF6\u548C\u7B80\u5355\u6613\u7528\u7684\u8282\u70B9\u5B9A\u5236\u80FD\u529B\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5FEB\u901F\u642D\u5EFA\u6D41\u7A0B\u56FE\u3001DAG \u56FE\u3001ER \u56FE\u7B49\u56FE\u5E94\u7528\u3002</strong></p><!--]-->`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/js\u7C7B\u5E93.html.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var js___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$J]]);
var js___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": js___html$1
});
const _sfc_main$10 = {};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h2 id="javascript-js" tabindex="-1"><a class="header-anchor" href="#javascript-js" aria-hidden="true">#</a> JavaScript(JS)</h2><p>\u662F\u4E00\u79CD\u5177\u5177\u6709<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function" target="_blank" rel="noopener noreferrer">\u51FD\u6570\u4F18\u5148`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u7684\u8F7B\u91CF\u7EA7\uFF0C\u89E3\u91CA\u578B\u6216\u5373\u65F6\u7F16\u8BD1\u578B\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C \u662F\u4E00\u79CD<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Prototype-based_programming" target="_blank" rel="noopener noreferrer">\u57FA\u4E8E\u539F\u578B\u7F16\u7A0B`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u3001\u591A\u8303\u5F0F\u7684\u52A8\u6001\u811A\u672C\u8BED\u8A00\uFF0C\u5E76\u4E14\u652F\u6301\u9762\u5411\u5BF9\u8C61\u3001\u547D\u4EE4\u5F0F\u548C\u58F0\u660E\u5F0F\uFF08\u5982\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF09\u98CE\u683C\u3002</p><hr><h2 id="\u51FD\u6570\u4F18\u5148" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F18\u5148" aria-hidden="true">#</a> \u51FD\u6570\u4F18\u5148</h2><p>\u5F53\u4E00\u95E8\u7F16\u7A0B\u8BED\u8A00\u7684\u51FD\u6570\u53EF\u4EE5\u88AB\u5F53\u4F5C\u53D8\u91CF\u4E00\u6837\u7528\u65F6\uFF0C\u5219\u79F0\u8FD9\u95E8\u8BED\u8A00\u62E5\u6709\u5934\u7B49\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53D8\u91CF\u8C03\u7528\u51FD\u6570
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
</code></pre><h6 id="color-red-\u68C0\u6D4B\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#color-red-\u68C0\u6D4B\u6570\u7EC4" aria-hidden="true">#</a> $\\color{red}{\u68C0\u6D4B\u6570\u7EC4}$:</h6><p><code>Array.isArray(value)</code></p><h5 id="color-red-\u8F6C\u6362\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#color-red-\u8F6C\u6362\u65B9\u6CD5" aria-hidden="true">#</a> $\\color{red}{\u8F6C\u6362\u65B9\u6CD5}$\uFF1A</h5><p>\u6240\u6709\u5BF9\u8C61\u90FD\u5177\u6709<code>toLocaleString()</code>,<code>toString()</code>,<code>valueOf()</code></p><p><code>toString()</code>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u503C\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u62FC\u63A5\u800C\u6210\u7684\u4E00\u4E2A\u4EE5\u9017\u53F7\u5206\u5272\u7684\u5B57\u7B26\u4E32\u3002 <code>valueOf()</code>\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F46\u4E3A\u6570\u7EC4\u7684\u5143\u7D20\u8C03\u7528<code>toString()</code>\u3002</p><!--]-->`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/\u57FA\u672C\u6982\u5FF5.html.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var _____html$e = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$I]]);
var _____html$f = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$e
});
const _sfc_main$$ = {};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> &lt;script&gt;</h2><p>\u5C5E\u6027\uFF1A</p><blockquote><p>asycn\uFF1A\u8868\u793A\u7ACB\u5373\u4E0B\u8F7D\u811A\u672C\uFF0C\u4F46\u4E0D\u5E94\u59A8\u788D\u9875\u9762\u4E2D\u5176\u4ED6\u64CD\u4F5C\u3002\u53EA\u5BF9\u5916\u90E8\u811A\u672C\u6709\u6548\u3002 charset\uFF1A\u6307\u5B9A\u4EE3\u7801\u7684\u5B57\u7B26\u96C6 defer\uFF1A\u8868\u793A\u811A\u672C\u53EF\u4EE5\u5EF6\u8FDF\u5230\u6587\u6863\u5B8C\u5168\u88AB\u89E3\u6790\u548C\u663E\u793A\u4E4B\u540E\u518D\u6267\u884C\u3002\u53EA\u5BF9\u5916\u90E8\u811A\u672C\u6709\u6548 src\uFF1A\u5F15\u5165\u5916\u90E8\u811A\u672C type\uFF1A\u8868\u793A\u7F16\u5199\u4EE3\u7801\u4F7F\u7528\u7684\u811A\u672C\u8BED\u8A00\u7684\u5185\u5BB9\u7C7B\u578Btetx/javascript</p></blockquote><p>\u5EF6\u8FDF\u811A\u672C\uFF1Adefer=&quot;defer&quot; \u5F02\u6B65\u811A\u672C\uFF1Aasync</p><h2 id="\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F</h2><p>&quot;use strict&quot;</p><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><p>// \u5355\u884C\u6CE8\u91CA</p><p>/*</p><ul><li>\u591A\u884C\u6CE8\u91CA */</li></ul><h2 id="\u53D8\u91CF\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a> \u53D8\u91CF\u58F0\u660E</h2><blockquote><p>var \u5C11\u7528 let \u5C40\u90E8\u7528 const \u591A\u7528</p></blockquote><h2 id="\u6A21\u677F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u6A21\u677F\u5B57\u7B26\u4E32</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const place = &quot;world&quot;;
const greetion = &quot;Hello&quot;;
let bool  = true;

console.log(\`\${greetion},\${place}\`);

console.log(&#39;%s,%s&#39;,greetion,place);

console.log(\`\${1 + &#39;1&#39;}\`);
console.log(\`1+1==2 is \${!bool}\`);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h2><p>\u5728js\u4E2D\u53D8\u91CF\u4EE5\u4F2A\u52A8\u6001\u65B9\u5F0F\u5B9A\u4E49</p><blockquote><p>\u7B80\u5355\u7CFB\u7EDF\u7C7B\u578B\uFF1ANumber(float),String,Boolean,Date,Function,Array and Object \u7279\u6B8A\u7C7B\u578B\uFF1ANaN,null,undefind \u68C0\u67E5\u7C7B\u578B\uFF1Atypeof()\uFF0Cinstanceof()</p></blockquote><h2 id="\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u6570\u5B57\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u8F6C\u6362</h2><p>\u7565</p><h2 id="\u5F02\u5E38try-catch-finally" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38try-catch-finally" aria-hidden="true">#</a> \u5F02\u5E38try...catch...finally</h2><!--]-->`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/\u5FAE\u8F6Fjavascript.html.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
var __javascript_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$H]]);
var __javascript_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __javascript_html$1
});
const _sfc_main$_ = {};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="tcpdump" tabindex="-1"><a class="header-anchor" href="#tcpdump" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/tcpdump.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`tcpdump`);
      } else {
        return [
          vue.createTextVNode("tcpdump")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/echo.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`echo`);
      } else {
        return [
          vue.createTextVNode("echo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u4F7F\u7528\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u95EE\u9898" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4F7F\u7528\u95EE\u9898`);
      } else {
        return [
          vue.createTextVNode("\u4F7F\u7528\u95EE\u9898")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5B89\u88C5\u8F6F\u4EF6`);
      } else {
        return [
          vue.createTextVNode("\u5B89\u88C5\u8F6F\u4EF6")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u7F16\u8BD1deb" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1deb" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/%E7%BC%96%E8%AF%91deb.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7F16\u8BD1deb`);
      } else {
        return [
          vue.createTextVNode("\u7F16\u8BD1deb")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97" tabindex="-1"><a class="header-anchor" href="#\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/%E6%97%A0%E7%BA%BF%E6%94%BB%E5%87%BB%E4%B9%8Barp%E6%AC%BA%E9%AA%97.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97`);
      } else {
        return [
          vue.createTextVNode("\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/linux/%E5%91%BD%E4%BB%A4.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u547D\u4EE4`);
      } else {
        return [
          vue.createTextVNode("\u547D\u4EE4")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><!--]-->`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/index.html.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
var index_html$m = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$G]]);
var index_html$n = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$m
});
const _sfc_main$Z = {};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>echo\u6307\u4EE4\u7528\u4E8E\u5728Unix Like\u7C7B\u7684\u7CFB\u7EDF\u4E2D\u8F93\u51FA\u6307\u5B9A\u7684\u5B57\u7B26\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7279\u5B9A\u7684\u65B9\u5F0F\u7ED9\u8F93\u51FA\u7684\u5B57\u7B26\u5B9A\u4E49\u989C\u8272\u53CA\u80CC\u666F\u989C\u8272\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0Becho\u4F1A\u8F93\u51FA\u7070\u8272\uFF08\u767D\u8272\uFF09\u5B57\u7B26\uFF0C\u80CC\u666F\u4E3A\u9ED1\u8272\u3002</p><div class="language-echo ext-echo line-numbers-mode"><pre class="language-echo"><code>
x\u4EE3\u8868\u5B57\u7B26\u683C\u5F0F\uFF080-7\uFF09
0\uFF1A\u6700\u666E\u901A\u7684\uFF0C\u9ED8\u8BA4
1\uFF1A\u52A0\u9AD8\u4EAE
2\uFF1A\u52A0\u6DF1
3\uFF1A\u659C\u4F53
4\uFF1A\u4E0B\u5212\u7EBF
5\uFF1A\u95EA\u70C1
6\uFF1A\u95EA\u70C1
7\uFF1A\u989C\u8272\u53CD\u8F6C

y\u4EE3\u8868\u5B57\u7B26\u989C\u8272



</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol><li>\u7ED9\u8F93\u51FA\u7684\u5B57\u7B26\u6307\u5B9A\u989C\u8272 \u501F\u52A9echo\u7684-e\u9009\u9879\u6765\u5B9E\u73B0\uFF0C\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</li></ol><p><code>echo -e &quot;\\033[3xmsome things you want to print out.\\033[0m&quot;</code></p><p><code>\\033[3xm</code>\u4E3AANSI\u63A7\u5236\u7801\uFF0C\u8868\u793A\u8981\u5F00\u59CB\u8F93\u51FA\u6709\u989C\u8272\u7684\u5B57\u7B26\u4E86\u3002 some things you want to print out.\u8868\u793A\u8981\u8F93\u51FA\u7684\u5B57\u7B26\uFF0C\u548C<code>3xm</code>\u7D27\u6328\u7740\uFF0C\u5982\u679C\u4E2D\u95F4\u6709\u7A7A\u683C\uFF0C\u8F93\u51FA\u7684\u5B57\u7B26\u524D\u9762\u4E5F\u4F1A\u6709\u7A7A\u683C\u3002 3x\u4E3A\u8868\u793A\u989C\u8272\u7684\u4E00\u7EC4\u6570\u5B57\uFF0Cx\u53D6\u503C\u4E3A0\u52307\uFF0C\u5206\u522B\u4EE3\u8868\u7684\u989C\u8272\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>30\u8868\u793A\u9ED1\u8272\u3002
31\u8868\u793A\u7EA2\u8272\u3002
32\u8868\u793A\u7EFF\u8272\u3002
33\u8868\u793A\u9EC4\u8272\u3002
34\u8868\u793A\u84DD\u8272\u3002
35\u8868\u793A\u7D2B\u8272\u3002
36\u8868\u793A\u6D45\u84DD\u8272\u3002
37\u8868\u793A\u7070\u8272\u3002
033[0m\u4E3AANSI\u63A7\u5236\u7801\uFF0C\u8868\u793A\u7ED3\u675F\u8F93\u51FA\u6709\u989C\u8272\u7684\u5B57\u7B26\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2"><li>\u7ED9\u8F93\u51FA\u7684\u5B57\u7B26\u6307\u5B9A\u80CC\u666F\u989C\u8272 \u540C\u6837\u501F\u52A9echo\u7684-e\u9009\u9879\u6765\u5B9E\u73B0\uFF0C\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</li></ol><p><code>echo -e &quot;\\033[4xsome things you want to print out.\\033[0m&quot;</code></p><p><code>\\033</code>\u5F00\u5934\u7684\u90FD\u4E3AANSI\u63A7\u5236\u7801\uFF0C\u548C\u6307\u5B9A\u5B57\u7B26\u7684\u989C\u8272\u4E0D\u540C\u7684\u662F\uFF0C\u8FD9\u91CC\u7528\u7684\u662F<code>4x</code>\uFF0C\u5E38\u7528\u7684\u80CC\u666F\u989C\u8272\u4E5F\u51718\u79CD\uFF0Cx\u53D6\u503C\u4E3A0\u52307\u3002\u5E38\u7528\u80CC\u666F\u8272\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>40\u8868\u793A\u80CC\u666F\u4E3A\u9ED1\u8272\u3002
41\u8868\u793A\u80CC\u666F\u4E3A\u7EA2\u8272\u3002
42\u8868\u793A\u80CC\u666F\u4E3A\u7EFF\u8272\u3002
43\u8868\u793A\u80CC\u666F\u4E3A\u9EC4\u8272\u3002
44\u8868\u793A\u80CC\u666F\u4E3A\u84DD\u8272\u3002
45\u8868\u793A\u80CC\u666F\u4E3A\u7D2B\u8272\u3002
46\u8868\u793A\u80CC\u666F\u4E3A\u6D45\u84DD\u8272\u3002
47\u8868\u793A\u80CC\u666F\u4E3A\u7070\u767D\u8272\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>\u5176\u5B83\u5E38\u7528\u7684ANSI\u63A7\u5236\u7801</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\033[3m\u8F93\u51FA\u659C\u4F53\u5B57
\\033[4m\u7ED9\u8F93\u51FA\u7684\u5B57\u7B26\u52A0\u4E0A\u4E0B\u5212\u7EBF
\\033[5m\u8BA9\u8F93\u51FA\u7684\u5B57\u7B26\u95EA\u70C1\u663E\u5F0F
\\033[7m\u8BBE\u7F6E\u53CD\u663E\u6548\u679C\uFF0C\u5373\u628A\u80CC\u666F\u8272\u548C\u5B57\u4F53\u989C\u8272\u53CD\u8FC7\u6765\u663E\u793A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/echo.html.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
var echo_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$F]]);
var echo_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": echo_html$1
});
const _sfc_main$Y = {};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>Usage: tcpdump [-aAbdDefhHIJKlLnNOpqStuUvxX#] [ -B size ] [ -c count ]</p><p>[ -C file_size ] [ -E algo:secret ] [ -F file ] [ -G seconds ]</p><p>[ -i interface ] [ -j tstamptype ] [ -M secret ] [ --number ]</p><p>[ -Q in|out|inout ]</p><p>[ -r file ] [ -s snaplen ] [ --time-stamp-precision precision ]</p><p>[ --immediate-mode ] [ -T type ] [ --version ] [ -V file ]</p><p>[ -w file ] [ -W filecount ] [ -y datalinktype ] [ -z postrotate-command ]</p><p>[ -Z user ] [ expression ]</p><!--]-->`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/tcpdump.html.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
var tcpdump_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$E]]);
var tcpdump_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": tcpdump_html$1
});
var _imports_0$4 = "/notes/assets/\u622A\u56FE_\u9009\u62E9\u533A\u57DF_20220210174434.359dee81.png";
const _sfc_main$X = {};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="system-limit-for-number-of-file-watchers-reached" tabindex="-1"><a class="header-anchor" href="#system-limit-for-number-of-file-watchers-reached" aria-hidden="true">#</a> System limit for number of file watchers reached</h2><p><code>cat /proc/sys/fs/inotify/max_user_watches</code></p><p>\u901A\u8FC7\u7F16\u8F91$\\color{red}{/etc/sysctl.conf}$\u6DFB\u52A0 fs.inotify.max_user_watches=524288 \u518D\u4F7F\u7528<code>sudo sysctl -p</code>\u91CD\u65B0\u52A0\u8F7D</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img${serverRenderer.ssrRenderAttr("src", _imports_0$4)} alt="\u5173\u4E8Ewireshark\u7684\u6743\u9650\u95EE\u9898"></h2><!--]-->`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/\u4F7F\u7528\u95EE\u9898.html.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
var _____html$c = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$D]]);
var _____html$d = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$c
});
const _sfc_main$W = {};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="fdisk-\u78C1\u76D8\u7BA1\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#fdisk-\u78C1\u76D8\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a> fdisk \u78C1\u76D8\u7BA1\u7406\u5DE5\u5177</h2><p>fdisk -l \u663E\u793A\u78C1\u76D8\u5206\u533A fdisk \u2019\u5206\u533A\u540D\u2018 \u64CD\u4F5C\u5206\u533A</p><hr><h2 id="mkfs-\u683C\u5F0F\u5316\u78C1\u76D8" tabindex="-1"><a class="header-anchor" href="#mkfs-\u683C\u5F0F\u5316\u78C1\u76D8" aria-hidden="true">#</a> mkfs \u683C\u5F0F\u5316\u78C1\u76D8</h2><p>mkfs -t \u6587\u4EF6\u7CFB\u7EDF\u683C\u5F0F \u5206\u533A\u540D</p><hr><h2 id="ffmpeg" tabindex="-1"><a class="header-anchor" href="#ffmpeg" aria-hidden="true">#</a> ffmpeg</h2><p>\u53BB\u9664\u6C34\u5370</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ffmpeg -i ./1.mp4 -filter_complex &quot;delogo=x=30:y=210:w=500:h=140:&quot; 4.mp4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="flv\u8F6Cmp4" tabindex="-1"><a class="header-anchor" href="#flv\u8F6Cmp4" aria-hidden="true">#</a> flv\u8F6CMP4</h3><p><code>ffmpeg -i j.flv -c copy j.mp4</code> \u5C06mp4\u5408\u5E76</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ffmpeg -i ./4.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 1.ts
ffmpeg -i ./5.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 2.ts

ffmpeg -i &quot;concat:1.ts|2.ts&quot; -acodec copy -vcodec copy -absf aac_adtstoasc output.mp4

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u622A\u53D6\u89C6\u9891" tabindex="-1"><a class="header-anchor" href="#\u622A\u53D6\u89C6\u9891" aria-hidden="true">#</a> \u622A\u53D6\u89C6\u9891</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-ss \u8D77\u59CB\u4F4D\u7F6E
-t \u7ED3\u675F\u4F4D\u7F6E

ffmpeg -ss 00:00:03 -t 00:02:30 -i ./1.mp4 -vcodec copy -acodec copy out.mp4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u8F6C\u6362\u56FE\u7247\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u56FE\u7247\u683C\u5F0F" aria-hidden="true">#</a> \u8F6C\u6362\u56FE\u7247\u683C\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ffmpeg -i \u521D\u59CB\u6587\u4EF6 \u8F93\u51FA\u6587\u4EF6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u56FE\u7247\u5408\u6210\u89C6\u9891" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u5408\u6210\u89C6\u9891" aria-hidden="true">#</a> \u56FE\u7247\u5408\u6210\u89C6\u9891</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ffmpeg -i ./convert/mn3_%6d.png -c:v libx264 -vf &quot;fps=25,format=yuv420p&quot; out3.mp4

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> screen</h3><p>#screen</p><p>\u56DE\u8F66\u540E\u8FDB\u5165Screen\u5B50\u754C\u9762\uFF0C\u6B64\u65F6putty\u6807\u9898\u680F\u4F1A\u6307\u793A\u5904\u4E8E\u5B50\u754C\u9762\u72B6\u6001\uFF0C\u7136\u540E\u8FD0\u884C\u4F60\u7684\u7A0B\u5E8F</p><p>#\u5E94\u7528\u7A0B\u5E8F\u540D <code>screen</code> \u7136\u540E\u6309\u4E0BCtrl+A\u540E\u62AC\u8D77\uFF0C\u7136\u540E\u6309\u4E0Bd\u952E\uFF0C\u6B64\u65F6\u5207\u6362\u56DE\u4E3B\u754C\u9762\u3002 <code>exit</code> \uFF1A\u9000\u51FA <code>screen -ls</code> \uFF1A\u67E5\u770B\u5B50\u754C\u9762\u7684\u4EE3\u53F7 <code>screen -r \u5B50\u754C\u9762\u4EE3\u53F7</code> \uFF1A\u67E5\u770B\u5F53\u521D\u4F60\u7A0B\u5E8F\u8FD0\u884C\u6240\u5728\u7684\u5B50\u754C\u9762</p><!--]-->`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/\u547D\u4EE4.html.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
var ___html$7 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$C]]);
var ___html$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ___html$7
});
const _sfc_main$V = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>\u4E00\u952E\u811A\u672C bash &lt;(curl -sL https://s.hijk.art/v2ray.sh)</p><h2 id="mysql\u5B89\u88C5\u540E\u7684\u7528\u6237\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#mysql\u5B89\u88C5\u540E\u7684\u7528\u6237\u8BBE\u7F6E" aria-hidden="true">#</a> mysql\u5B89\u88C5\u540E\u7684\u7528\u6237\u8BBE\u7F6E</h2><p><code>alter user root@localhost identified by &#39;123456&#39;;</code></p><!--]-->`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/\u5B89\u88C5\u8F6F\u4EF6.html.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
var _____html$a = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$B]]);
var _____html$b = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$a
});
const _sfc_main$U = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>arpspoof\u5DE5\u5177</p><p>\u67E5\u770Bip</p><p>ip address show || ip add</p><p>\u67E5\u770B\u5C40\u57DF\u7F51\u4E0B\u6240\u4EE5ip</p><p>fping -g ip/24</p><p>arpspoof -i \u7F51\u5361 -t \u76EE\u6807ip \u7F51\u5173ip</p><p>scapy</p><!--]-->`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97.html.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
var _____arp___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$A]]);
var _____arp___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____arp___html$1
});
const _sfc_main$T = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u7F16\u8BD1\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u89C4\u8303" aria-hidden="true">#</a> \u7F16\u8BD1\u89C4\u8303</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>0 -  Maintainer: [ Deepin Linux ]
1 -  Summary: [ \u9002\u4E8EDeepin Linux\u7684PHP7.4.25 ]
2 -  Name:    [ php.deepin ]
3 -  Version: [ 7.4.25 ]
4 -  Release: [ 1 ]
5 -  License: [ GPL ]
6 -  Group:   [ php.net &amp; checkinstall &amp; charmgo ]
7 -  Architecture: [ amd64 ]
8 -  Source location: [ php7425 ]
9 -  Alternate source location: [  ]
10 - Requires: [  ]
11 - Provides: [ charm-pc ]
12 - Conflicts: [  ]
13 - Replaces: [  ]

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="php\u7BC7" tabindex="-1"><a class="header-anchor" href="#php\u7BC7" aria-hidden="true">#</a> php\u7BC7</h2><h3 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>autoconf automake libtool re2c build-essential libxml2 libxml2-dev

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p><code>--prefix=$HOME/Applib</code>\u5B89\u88C5\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--enable-fpm --enable-litespeed --enable-phpdbg --enable-phpdbg-webhelper --enable-phpdbg-debug --enable-phpdbg-readline --with-valgrind --enable-debug --enable-sigchild --enable-dmalloc --enable-dtrace --enable-fd-setsize --enable-werror --without-libxml --with-openssl --with-kerberos --with-system-ciphers --with-external-pcre --with-pcre-jit --without-sqlite3 --with-zlib --enable-bcmath --enable-calendar --disable-ctype --with-curl --enable-exif --with-ffi --enable-ftp --enable-gd  --with-external-gd --with-webp --with-jpeg --with-xpm --with-freetype --enable-gd-jis-conv --with-gettext --with-gmp --with-mhash --without-iconv --with-imap --with-kerberos --with-imap-ssl --enable-intl --with-ldap  --with-ldap-sasl --enable-mbstring --with-mysqli --with-oci8 --with-odbcver --with-adabas --with-sapdb --with-solid --with-ibm-db2 --with-empress --with-empress-bcs --with-custom-odbc --with-pdo-dblib --with-pdo-firebird --with-pdo-mysql --with-pdo-oci --with-pdo-odbc --without-pdo-sqlite --with-libedit --with-readline --disable-session --enable-shmop --with-xsl --with-zip --enable-mysqlnd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>auto-apt run ./configure --enable-bcmath --with-bz2 --enable-calendar --with-curl --enable-exif --with-ffi --enable-ftp --enable-gd --with-external-gd --with-webp --with-jpeg --with-xpm --with-freetype --enable-gd-jis-conv --with-gettext --with-gmp --with-iconv --enable-intl --with-libxml --with-mysqli --with-pdo-mysql --with-pdo-sqlite --enable-sockets --with-expat --with-xmlrpc --with-xsl --with-zip --with-zlib --with-openssl --enable-fpm --without-sqlite3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Installing shared extensions:     /usr/local/lib/php/extensions/no-debug-non-zts-20190902/
Installing PHP CLI binary:        /usr/local/bin/
Installing PHP CLI man page:      /usr/local/php/man/man1/
Installing PHP FPM binary:        /usr/local/sbin/
Installing PHP FPM defconfig:     /usr/local/etc/
Installing PHP FPM man page:      /usr/local/php/man/man8/
Installing PHP FPM status page:   /usr/local/php/php/fpm/
Installing phpdbg binary:         /usr/local/bin/
Installing phpdbg man page:       /usr/local/php/man/man1/
Installing PHP CGI binary:        /usr/local/bin/
Installing PHP CGI man page:      /usr/local/php/man/man1/
Installing build environment:     /usr/local/lib/php/build/
Installing header files:          /usr/local/include/php/
Installing helper programs:       /usr/local/bin/
 program: phpize
 program: php-config
Installing man pages:             /usr/local/php/man/man1/
 page: phpize.1
 page: php-config.1
/mnt/c/Users/charm/Desktop/php7425/build/shtool install -c ext/phar/phar.phar /usr/local/bin/phar.phar
ln -s -f phar.phar /usr/local/bin/phar
Installing PDO headers:           /usr/local/include/php/ext/pdo/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><!--]-->`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/linux/\u7F16\u8BD1deb.html.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
var __deb_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$z]]);
var __deb_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __deb_html$1
});
const _sfc_main$S = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "use",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#use" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/markdown/use.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`use`);
      } else {
        return [
          vue.createTextVNode("use")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/markdown/index.html.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var index_html$k = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$y]]);
var index_html$l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$k
});
const _sfc_main$R = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  const _component_font = vue.resolveComponent("font");
  _push(`<!--[--><p>^\u4E0A^\u89D2~\u6807~</p><h1 id="this-is-an-h1" tabindex="-1"><a class="header-anchor" href="#this-is-an-h1" aria-hidden="true">#</a> this is an H1</h1><h2 id="this-is-an-h2" tabindex="-1"><a class="header-anchor" href="#this-is-an-h2" aria-hidden="true">#</a> this is an H2</h2><h1 id="\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E" aria-hidden="true">#</a> \u6807\u7B7E</h1><h2 id="\u6807\u7B7E\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u4E8C" aria-hidden="true">#</a> \u6807\u7B7E\u4E8C</h2><h3 id="\u6807\u7B7E\u4E09" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u4E09" aria-hidden="true">#</a> \u6807\u7B7E\u4E09</h3><h4 id="\u6807\u7B7E\u56DB" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u56DB" aria-hidden="true">#</a> \u6807\u7B7E\u56DB</h4><h5 id="\u6807\u7B7E\u4E94" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u4E94" aria-hidden="true">#</a> \u6807\u7B7E\u4E94</h5><h6 id="\u6807\u7B7E\u516D" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u516D" aria-hidden="true">#</a> \u6807\u7B7E\u516D</h6><p><s><em><strong>\u659C\u4F53\u548C\u52A0\u7C97</strong></em></s></p><hr><p><u>\u4E0B\u5212\u7EBF</u></p><p><a href="http://www.baidu.com" title="HERE	" target="_blank" rel="noopener noreferrer">\u5185\u8054\u8D85\u94FE\u63A5`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a><a href="http://www.baidu.com" title="here" target="_blank" rel="noopener noreferrer">\u5F15\u7528`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><img src="https://octodex.github.com/images/bannekat.png" alt="\u5185\u8054\u56FE\u7247"></p><p>![\u5F15\u7528\u56FE\u7247] <a href="https://octodex.github.com/images/bannekat.png" title="here" target="_blank" rel="noopener noreferrer">png`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>*\u5217\u8868</p><p><strong>\u7C97\u4F53</strong></p><h4 id="\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a> \u8868\u683C</h4><table><thead><tr><th>\u8868\u5934\u4E00</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8868\u5934\u4E8C</th></tr></thead><tbody><tr><td>\u5565\u4E5F\u4E0D\u662F</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u4E0D\u77E5\u9053</td></tr></tbody></table><p><code>\u4EE3\u7801\u6846</code></p><hr><pre><code>for(var i=0;i&lt;10;i++){  
    console.log(i)  
}
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for(var i=0;i&lt;10;i++){
	console.log(i);
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>for i in range(10):
	print(i)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">http://www.baidu.com`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><a href="mailto:212123@qq.com">212123@qq.com</a></p><p>* \u8F6C\u4E49 *</p><ul><li>[ ] \u5565</li><li>[ ] \u4E0D\u77E5\u9053</li><li>[ ] \u55EF\u55EF</li><li>[ ] \u53EF\u4EE5</li><li>[ ] \u4E0D\u6293</li></ul><hr><blockquote><p>\u5F15\u7528\u5757</p><blockquote><p>\u5D4C\u5957</p><blockquote><p>\u989D\u55EF\u55EF</p><blockquote><p>\u55EF\u55EF\u55EF\u55EF\u55EF\u55EF</p></blockquote></blockquote></blockquote></blockquote><p>\u811A\u6CE8<a href="%E4%BC%BC%E4%B9%8E%E6%98%8E%E7%99%BD%E4%BA%86%E8%84%9A%E6%B3%A8">^RUNOOB</a></p>`);
  _push(serverRenderer.ssrRenderComponent(_component_font, { color: "red" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`red`);
      } else {
        return [
          vue.createTextVNode("red")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>$\\color{#fbbc05}{\u989C}\\color{#4285f4}{\u8272}$</p><p>qwe<a href="asd">^qw</a></p><!--]-->`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/markdown/use.html.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var use_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$x]]);
var use_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": use_html$1
});
const _sfc_main$Q = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>\u4F5C\u7528\u57DF\u95EE\u9898</p><p>global</p><p>nonlocal</p><p>\u521D\u59CB\u5316\u7C7B\u7684\u65B9\u6CD5__init__()\u76F8\u5F53\u4E8E\u6784\u9020\u65B9\u6CD5</p><!--]-->`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/Class.html.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var Class_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$w]]);
var Class_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Class_html$1
});
const _sfc_main$P = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/python/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2django%E9%A1%B9%E7%9B%AE.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE`);
      } else {
        return [
          vue.createTextVNode("\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u5185\u7F6E\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u529F\u80FD" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/python/%E5%86%85%E7%BD%AE%E5%8A%9F%E8%83%BD.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5185\u7F6E\u529F\u80FD`);
      } else {
        return [
          vue.createTextVNode("\u5185\u7F6E\u529F\u80FD")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="chrnet" tabindex="-1"><a class="header-anchor" href="#chrnet" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/python/chrNet.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`chrNet`);
      } else {
        return [
          vue.createTextVNode("chrNet")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u7F51\u7EDC\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u7F16\u7A0B" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7F51\u7EDC\u7F16\u7A0B`);
      } else {
        return [
          vue.createTextVNode("\u7F51\u7EDC\u7F16\u7A0B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/python/Class.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Class`);
      } else {
        return [
          vue.createTextVNode("Class")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="xlwings-excel\u64CD\u4F5C-xlwings-excel\u64CD\u4F5C-md" tabindex="-1"><a class="header-anchor" href="#xlwings-excel\u64CD\u4F5C-xlwings-excel\u64CD\u4F5C-md" aria-hidden="true">#</a> [xlwings ---- excel\u64CD\u4F5C](./xlwings ---- excel\u64CD\u4F5C.md)</h2><h2 id="django" tabindex="-1"><a class="header-anchor" href="#django" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/python/django.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`django`);
      } else {
        return [
          vue.createTextVNode("django")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><!--]-->`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/index.html.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var index_html$i = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$v]]);
var index_html$j = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$i
});
const _sfc_main$O = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>chrLocal</p><p>\u672C\u5730\u7C7B\u5BF9\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u68C0\u67E5</p><p>\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84configPath</p><p>\u914D\u7F6E\u6587\u4EF6\u72B6\u6001__configState</p><p>\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9__configContent</p><p>\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u72B6\u6001__configContentState</p><p>1.\u521B\u5EFA\u4E00\u4E2Ausr</p><p>\u521B\u5EFA\u6761\u4EF6\uFF1A\u672C\u5730\u914D\u7F6E\u6587\u4EF6\u4E2D\u6CA1\u6709\u8BE5usr</p><p>\u670D\u52A1\u7AEF\u6CA1\u6709usr</p><p>\u521B\u5EFA\u6D41\u7A0B\u68C0\u67E5\u672C\u5730\u914D\u7F6E\u6587\u4EF6\uFF0C\u662F\u5426\u5B58\u5728usr\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u53D1\u9001usr\u81F3\u670D\u52A1\u7AEF\uFF0C\u68C0\u67E5usr\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5C31\u5728\u672C\u5730\u914D\u7F6E\u6587\u4EF6\u521B\u5EFAusr\u5E76\u5199\u5165\u8EAB\u4EFD\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u540C\u65F6\u4E5F\u628A\u8EAB\u4EFD\u9A8C\u8BC1\u4FE1\u606F\u53D1\u9001\u81F3\u670D\u52A1\u7AEF\u5199\u5165\u5230\u670D\u52A1\u7AEF\u914D\u7F6E\u4E2D</p><!--]-->`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/chrNet.html.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var chrNet_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$u]]);
var chrNet_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": chrNet_html$1
});
var _imports_0$3 = "/notes/assets/Kazam_screenshot_00000.85efd4f5.png";
var _imports_1$1 = "/notes/assets/Kazam_screenshot_00000-2.46fab121.png";
var _imports_2 = "/notes/assets/Kazam_screenshot_00000-1.599bbbe1.png";
const _sfc_main$N = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="django-\u7BA1\u7406\u5DE5\u5177-django-admin" tabindex="-1"><a class="header-anchor" href="#django-\u7BA1\u7406\u5DE5\u5177-django-admin" aria-hidden="true">#</a> Django \u7BA1\u7406\u5DE5\u5177\uFF1Adjango-admin</h2><h3 id="\u521B\u5EFA\u9879\u76EE-django-admin-startproject-boo" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE-django-admin-startproject-boo" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE\uFF1A<code>django-admin startproject boo</code></h3><h3 id="\u521B\u5EFA\u5E94\u7528-django-admin-startapp-polls" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5E94\u7528-django-admin-startapp-polls" aria-hidden="true">#</a> \u521B\u5EFA\u5E94\u7528 <code>django-admin startapp polls</code></h3><h3 id="\u521B\u5EFA\u6570\u636E\u5E93\u8868-python3-manage-py-makemigrations" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u5E93\u8868-python3-manage-py-makemigrations" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u5E93\u8868 <code>python3 manage.py makemigrations</code></h3><h3 id="\u6267\u884C\u6570\u636E\u5E93\u8868\u5EFA\u7ACB-python3-manage-py-migrate" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6570\u636E\u5E93\u8868\u5EFA\u7ACB-python3-manage-py-migrate" aria-hidden="true">#</a> \u6267\u884C\u6570\u636E\u5E93\u8868\u5EFA\u7ACB <code>python3 manage.py migrate</code></h3><h3 id="\u521B\u5EFA\u7BA1\u7406\u5458\u5E10\u53F7-python3-manage-py-createsuperuser" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7BA1\u7406\u5458\u5E10\u53F7-python3-manage-py-createsuperuser" aria-hidden="true">#</a> \u521B\u5EFA\u7BA1\u7406\u5458\u5E10\u53F7 <code>python3 manage.py createsuperuser</code></h3><h3 id="\u6A21\u677F\u6E32\u67D3\u5D4C\u5165\u8BED\u6CD5-\u5728html\u4E2D\u53EF\u4EE5\u5D4C\u5165\u540E\u53F0\u8BED\u8A00-\u533A\u5206\u7B26\u53F7-\u547D\u4EE4-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u6E32\u67D3\u5D4C\u5165\u8BED\u6CD5-\u5728html\u4E2D\u53EF\u4EE5\u5D4C\u5165\u540E\u53F0\u8BED\u8A00-\u533A\u5206\u7B26\u53F7-\u547D\u4EE4-\u53D8\u91CF" aria-hidden="true">#</a> \u6A21\u677F\u6E32\u67D3\u5D4C\u5165\u8BED\u6CD5\uFF1A\u5728html\u4E2D\u53EF\u4EE5\u5D4C\u5165\u540E\u53F0\u8BED\u8A00\uFF0C\u533A\u5206\u7B26\u53F7\uFF1A{%\u547D\u4EE4%} ${serverRenderer.ssrInterpolate(_ctx.\u53D8\u91CF)}</h3><hr><h3 id="\u57FA\u672C\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u8BBE\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u8BBE\u7F6E</h3><p>Django\u6846\u67B6\u65F6\u95F4 Asia/Shanghai \u8BED\u8A00\u8BBE\u7F6E zh-Hans Django \u5E94\u7528\u6DFB\u52A0 templates\u76EE\u5F55\u8BBE\u7F6E\uFF08\u5728APP\u76EE\u5F55\u4E0B\uFF0C\u9700\u72EC\u7ACB\u521B\u5EFA\uFF09</p><hr><h3 id="urls\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#urls\u8BBE\u7F6E" aria-hidden="true">#</a> urls\u8BBE\u7F6E</h3><p>urlpatterns=[ url(r&#39;^\u8BBF\u95EE\u5730\u5740/&#39;,&#39;\u8C03\u7528\u6620\u5C04views\u91CC\u7684\u6587\u4EF6&#39;) ]</p><hr><h3 id="\u9879\u76EE\u521D\u59CB\u5316\u6587\u4EF6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u521D\u59CB\u5316\u6587\u4EF6\u8BF4\u660E" aria-hidden="true">#</a> \u9879\u76EE\u521D\u59CB\u5316\u6587\u4EF6\u8BF4\u660E\uFF1A</h3><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$3)} alt="\u6587\u4EF6\u8BF4\u660E"></p><ul><li>boo: \u9879\u76EE\u7684\u5BB9\u5668</li><li>manage.py: \u4E00\u4E2A\u5B9E\u7528\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u53EF\u8BA9\u4F60\u4EE5\u5404\u79CD\u65B9\u5F0F\u4E0E\u8BE5 Django \u9879\u76EE\u8FDB\u884C\u4EA4\u4E92\u3002</li><li>boo/init.py: \u4E00\u4E2A\u7A7A\u6587\u4EF6\uFF0C\u544A\u8BC9 Python \u8BE5\u76EE\u5F55\u662F\u4E00\u4E2A Python \u5305\u3002</li><li>boo/asgi.py: \u4E00\u4E2A ASGI \u517C\u5BB9\u7684 Web \u670D\u52A1\u5668\u7684\u5165\u53E3\uFF0C\u4EE5\u4FBF\u8FD0\u884C\u4F60\u7684\u9879\u76EE\u3002</li><li>boo/settings.py: \u8BE5 Django \u9879\u76EE\u7684\u8BBE\u7F6E/\u914D\u7F6E\u3002</li><li>boo/urls.py: \u8BE5 Django \u9879\u76EE\u7684 URL \u58F0\u660E; \u4E00\u4EFD\u7531 Django \u9A71\u52A8\u7684\u7F51\u7AD9&quot;\u76EE\u5F55&quot;\u3002</li><li>boo/wsgi.py: \u4E00\u4E2A WSGI \u517C\u5BB9\u7684 Web \u670D\u52A1\u5668\u7684\u5165\u53E3\uFF0C\u4EE5\u4FBF\u8FD0\u884C\u4F60\u7684\u9879\u76EE\u3002</li></ul><h3 id="\u51FD\u6570path-\u5177\u6709\u56DB\u4E2A\u53C2\u6570-\u4E24\u4E2A\u5FC5\u987B\u53C2\u6570-route\u548Cview-\u4E24\u4E2A\u53EF\u9009\u53C2\u6570-kwargs\u548Cname\u3002" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570path-\u5177\u6709\u56DB\u4E2A\u53C2\u6570-\u4E24\u4E2A\u5FC5\u987B\u53C2\u6570-route\u548Cview-\u4E24\u4E2A\u53EF\u9009\u53C2\u6570-kwargs\u548Cname\u3002" aria-hidden="true">#</a> \u51FD\u6570path()\u5177\u6709\u56DB\u4E2A\u53C2\u6570\uFF0C\u4E24\u4E2A\u5FC5\u987B\u53C2\u6570\uFF1Aroute\u548Cview\uFF0C\u4E24\u4E2A\u53EF\u9009\u53C2\u6570\uFF1Akwargs\u548Cname\u3002</h3><h4 id="path-\u53C2\u6570-route" tabindex="-1"><a class="header-anchor" href="#path-\u53C2\u6570-route" aria-hidden="true">#</a> path()\u53C2\u6570\uFF1Aroute:</h4><blockquote><p>route \u662F\u4E00\u4E2A\u5339\u914D URL \u7684\u51C6\u5219\uFF08\u7C7B\u4F3C\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\u3002\u5F53 Django \u54CD\u5E94\u4E00\u4E2A\u8BF7\u6C42\u65F6\uFF0C\u5B83\u4F1A\u4ECE urlpatterns \u7684\u7B2C\u4E00\u9879\u5F00\u59CB\uFF0C\u6309\u987A\u5E8F\u4F9D\u6B21\u5339\u914D\u5217\u8868\u4E2D\u7684\u9879\uFF0C\u76F4\u5230\u627E\u5230\u5339\u914D\u7684\u9879(\u8FD9\u4E9B\u51C6\u5219\u4E0D\u4F1A\u5339\u914D GET \u548C POST \u53C2\u6570\u6216\u57DF\u540D)\u3002</p></blockquote><h4 id="path-\u53C2\u6570-view" tabindex="-1"><a class="header-anchor" href="#path-\u53C2\u6570-view" aria-hidden="true">#</a> path()\u53C2\u6570\uFF1Aview:</h4><blockquote><p>\u5F53 Django \u627E\u5230\u4E86\u4E00\u4E2A\u5339\u914D\u7684\u51C6\u5219\uFF0C\u5C31\u4F1A\u8C03\u7528\u8FD9\u4E2A\u7279\u5B9A\u7684\u89C6\u56FE\u51FD\u6570\uFF0C\u5E76\u4F20\u5165\u4E00\u4E2A HttpRequest \u5BF9\u8C61\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u88AB\u201C\u6355\u83B7\u201D\u7684\u53C2\u6570\u4EE5\u5173\u952E\u5B57\u53C2\u6570\u7684\u5F62\u5F0F\u4F20\u5165\u3002</p></blockquote><h4 id="path\u53C2\u6570-kwargs" tabindex="-1"><a class="header-anchor" href="#path\u53C2\u6570-kwargs" aria-hidden="true">#</a> path\u53C2\u6570\uFF1Akwargs:</h4><blockquote><p>\u4EFB\u610F\u4E2A\u5173\u952E\u5B57\u53C2\u6570\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u5B57\u5178\u4F20\u9012\u7ED9\u76EE\u6807\u89C6\u56FE\u51FD\u6570\u3002</p></blockquote><h4 id="path\u53C2\u6570-name" tabindex="-1"><a class="header-anchor" href="#path\u53C2\u6570-name" aria-hidden="true">#</a> path\u53C2\u6570\uFF1Aname:</h4><blockquote><p>\u4E3A\u4F60\u7684 URL \u53D6\u540D\u80FD\u4F7F\u4F60\u5728 Django \u7684\u4EFB\u610F\u5730\u65B9\u552F\u4E00\u5730\u5F15\u7528\u5B83\uFF0C\u5C24\u5176\u662F\u5728\u6A21\u677F\u4E2D\u3002\u8FD9\u4E2A\u6709\u7528\u7684\u7279\u6027\u5141\u8BB8\u4F60\u53EA\u6539\u4E00\u4E2A\u6587\u4EF6\u5C31\u80FD\u5168\u5C40\u5730\u4FEE\u6539\u67D0\u4E2A URL \u6A21\u5F0F\u3002</p></blockquote><h2 id="\u4F7F\u7528\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4F7F\u7528\u6570\u636E\u5E93</h2><blockquote><p>\u4FEE\u6539/netsite/stetting.py\u6587\u4EF6\u7684DATABASES\u53C2\u6570 <img${serverRenderer.ssrRenderAttr("src", _imports_1$1)} alt="\u914D\u7F6E"></p></blockquote><h3 id="\u521B\u5EFA\u6570\u636E\u5E93\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u5E93\u6A21\u578B" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u5E93\u6A21\u578B</h3><blockquote><p>/polls/modes.py\u4E2D</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField(&#39;date published&#39;)

class Choice(models.Model):
    question = models.ForeignKey(Question,on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u6FC0\u6D3B\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u6FC0\u6D3B\u6A21\u578B" aria-hidden="true">#</a> \u6FC0\u6D3B\u6A21\u578B</h3><p>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6EINSTALLED_APPS <img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="\u6FC0\u6D3B\u6A21\u578B\u914D\u7F6E"></p><h2 id="uwsgi" tabindex="-1"><a class="header-anchor" href="#uwsgi" aria-hidden="true">#</a> uwsgi</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[uwsgi]
socket = :8888
chdir = /home/charm/Desktop/sunProject
module = sun.wsgi
master = true
processes = 4
vacuum = true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><!--]-->`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/django.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var django_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$t]]);
var django_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": django_html$1
});
const _sfc_main$M = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>import xlwings as xl</p><p>## \u521B\u5EFAexcel\u6587\u4EF6</p><p>wb = xl.Book()</p><p>xb.save(&#39;test.xlsx&#39;)</p><p>wb.close()</p><!--]-->`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/xlwings ---- excel\u64CD\u4F5C.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var xlwings______excel___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$s]]);
var xlwings______excel___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": xlwings______excel___html$1
});
var _imports_0$2 = "/notes/assets/899ecb89b2e4a5cca532b43b5b20544a.ccd21ecb.png";
const _sfc_main$L = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.ssrRenderAttrs(_attrs)}><img${serverRenderer.ssrRenderAttr("src", _imports_0$2)} alt="899ecb89b2e4a5cca532b43b5b20544a.png"></p>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/\u5185\u7F6E\u529F\u80FD.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var _____html$8 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$r]]);
var _____html$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$8
});
var _imports_0$1 = "/notes/assets/47c41deec22ae555e4437cb08b284716.f83da0b6.png";
const _sfc_main$K = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u8F6F\u4EF6</h2><p>pip3 install django pip3 install uwsgi apt install uwsgi apt install nginx</p><hr><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

def application(env, start_response):
    start_response(&#39;200 OK&#39;, [(&#39;Content-Type&#39;,&#39;text/html&#39;)])
    return [b&#39;Hello World&#39;]

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>uwsgi --http :8000 --wsgi-file test.py

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h2 id="\u914D\u7F6Euwsgi" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Euwsgi" aria-hidden="true">#</a> \u914D\u7F6Euwsgi</h2><p>\u5728\u9879\u76EE\u9876\u7EA7\u6587\u4EF6\u5939\u4E0B\u914D\u7F6Euwsgi.ini\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[uwsgi]

socket = :8888
chdir           = /home/setup/myweb
module          = myweb.wsgi
master          = true
processes       = 4
vacuum          = true

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$1)} alt="47c41deec22ae555e4437cb08b284716.png"></p><p>\u4F7F\u7528\u547D\u4EE4\u542F\u52A8\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>uwsgi --ini uwsgi.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F00\u673A\u81EA\u542F\u52A8<code>sudo vi /etc/rc.local</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>uwsgi --ini /home/setup/myweb/uwsgi.ini &amp;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>$\\color{red}{\u6CE8\u610F}$:\u8981\u6DFB\u52A0\u5230 exit 0 \u4E4B\u524D\uFF0C&amp; \u8868\u793A\u8BE5\u670D\u52A1\u662F\u5728\u540E\u53F0\u6267\u884C\u3002</p><h2 id="\u914D\u7F6Enginx" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Enginx" aria-hidden="true">#</a> \u914D\u7F6Enginx</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Django 2.0 \u9879\u76EE\u90E8\u7F72
server {

    listen          80; 
    server_name     data.labideas.cn 
    charset         UTF-8;
    access_log      /var/log/nginx/myweb_access.log;
    error_log       /var/log/nginx/myweb_error.log;

    client_max_body_size 75M;

    location / { 

        include uwsgi_params;
        uwsgi_pass 127.0.0.1:8888;
        uwsgi_read_timeout 2;
    }   

    location /static {

        expires 30d;
        autoindex on; 
        add_header Cache-Control private;
        alias /home/setup/myweb/static/;
    }   
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>django\u7BA1\u7406\u5458\u9875\u9762\u627E\u4E0D\u5230\u9759\u6001\u6587\u4EF6 \u8BBE\u7F6E\u6587\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>STATIC_URL = &#39;/static/&#39;
STATIC_ROOT = os.path.join(BASE_DIR, &#39;static&#39;)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8DEF\u7531urls.py</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>urlpatterns = [
    path(&#39;admin/&#39;, admin.site.urls),
    path(&#39;api/&#39;,views.api)
] + static(settings.STATIC_URL,document_root = settings.STATIC_ROOT)

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6267\u884C <code>python manage.py collectstatic</code></p><!--]-->`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var _____django___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$q]]);
var _____django___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____django___html$1
});
const _sfc_main$J = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="\u56DB\u4E2A\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u56DB\u4E2A\u4EFB\u52A1" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E5%9B%9B%E4%B8%AA%E4%BB%BB%E5%8A%A1.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u56DB\u4E2A\u4EFB\u52A1`);
      } else {
        return [
          vue.createTextVNode("\u56DB\u4E2A\u4EFB\u52A1")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u8FA9\u8BC1\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8FA9\u8BC1\u6CD5" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E8%BE%A9%E8%AF%81%E6%B3%95.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8FA9\u8BC1\u6CD5`);
      } else {
        return [
          vue.createTextVNode("\u8FA9\u8BC1\u6CD5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><!--]-->`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/index.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var index_html$g = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$p]]);
var index_html$h = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$g
});
const _sfc_main$I = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u53CD\u601D-\u6982\u5FF5\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u53CD\u601D-\u6982\u5FF5\u5206\u6790" aria-hidden="true">#</a> \u53CD\u601D\uFF1A\u6982\u5FF5\u5206\u6790</h2><p>\u574F\u6982\u5FF5\uFF1A\u91CA\u4E49\u7E41\u6742\u3001\u6240\u6307\u542B\u6DF7 \u597D\u6982\u5FF5\uFF1A\u91CA\u4E49\u7B80\u6D01\u3001\u6240\u6307\u7CBE\u51C6</p><h2 id="\u62BD\u8C61-\u62BD\u8C61\u5EFA\u6A21" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61-\u62BD\u8C61\u5EFA\u6A21" aria-hidden="true">#</a> \u62BD\u8C61\uFF1A\u62BD\u8C61\u5EFA\u6A21</h2><p>\u62BD\u53D6\u5171\u76F8 \u5EFA\u7ACB\u6A21\u578B</p><p>\u5206\u6790\u4E8B\u4EF6\u8981\u7D20\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u4EE5\u5EFA\u7ACB\u6A21\u578B</p><h2 id="\u903B\u8F91-\u63A8\u7406\u8BBA\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91-\u63A8\u7406\u8BBA\u8BC1" aria-hidden="true">#</a> \u903B\u8F91\uFF1A\u63A8\u7406\u8BBA\u8BC1</h2><blockquote><p>\u5F62\u5F0F\u903B\u8F91</p><blockquote><p>\u6F14\u7ECE\u903B\u8F91\uFF08\u53E4\u5178\u903B\u8F91\uFF09 \u6570\u7406\u903B\u8F91\uFF08\u73B0\u4EE3\u903B\u8F91\uFF09</p></blockquote></blockquote><blockquote><p>\u975E\u5F62\u5F0F\u903B\u8F91</p><blockquote><p>\u5F52\u7EB3\u63A8\u7406 \u7C7B\u6BD4\u63A8\u7406 \u8FA9\u8BC1\u903B\u8F91 ......</p></blockquote></blockquote><h2 id="\u8111\u6D1E-\u601D\u60F3\u5B9E\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u8111\u6D1E-\u601D\u60F3\u5B9E\u9A8C" aria-hidden="true">#</a> \u8111\u6D1E\uFF1A\u601D\u60F3\u5B9E\u9A8C</h2><!--]-->`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/\u56DB\u4E2A\u4EFB\u52A1.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var _____html$6 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$o]]);
var _____html$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$6
});
const _sfc_main$H = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u4E0D\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E0D\u662F\u4EC0\u4E48\uFF1F</h2><p>1.\u6298\u4E2D\u4E3B\u4E49 2.\u7384\u5B66 3.\u5BF9\u6027\u8D28\u7684\u7F57\u5217</p><p>\u603B\u7ED3\uFF1A\u4E0D\u662F\u72ED\u4E49\u5F62\u800C\u4E0A\u5B66</p><p>\u5F62\u800C\u4E0A\u5B66\u662F\u9759\u6B62\u7684\u3001\u5B64\u7ACB\u7684\u3001\u7247\u9762\u7684\u8BA4\u8BC6\u4E16\u754C\u7684\u601D\u7EF4\u65B9\u5F0F</p><h2 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48\uFF1F</h2><p>1.\u6838\u5FC3\u672C\u8D28\u7279\u5F81\uFF1A\u5BF9\u7ACB\u7EDF\u4E00\uFF08\u77DB\u76FE\uFF09</p><p>\u6700\u672C\u8D28\u7684\u6027\u8D28\u5DF2\u7ECF\u5305\u542B\u4E86\u5426\u5B9A\u6027=&gt;\u53D1\u5C55\u7684\u52A8\u529B=&gt;\u8FD0\u52A8\u662F\u7EDD\u5BF9\u7684 =&gt;\u6BCF\u4E00\u4E2A\u8303\u7574\u89C4\u5F8B\uFF08\u6982\u5FF5\uFF09\u90FD\u8D2F\u7A7F\u7740\u77DB\u76FE</p><p>\u8BA4\u8BC6\u4E16\u754C\u7684\u5206\u6790\u65B9\u6CD5=&gt;\u77DB\u76FE\u5206\u6790</p><h3 id="\u4E09\u5927\u89C4\u5F8B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5927\u89C4\u5F8B" aria-hidden="true">#</a> \u4E09\u5927\u89C4\u5F8B</h3><blockquote><p>\u5BF9\u7ACB\u7EDF\u4E00 \u91CF\u53D8\u548C\u8D28\u53D8 \u5426\u5B9A\u4E4B\u5426\u5B9A</p></blockquote><!--]-->`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/\u8FA9\u8BC1\u6CD5.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var ____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$n]]);
var ____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ____html$1
});
const _sfc_main$G = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="color-red-notes" tabindex="-1"><a class="header-anchor" href="#color-red-notes" aria-hidden="true">#</a> $\\color{red}{notes:}$</h2><p>\u5728\u4F7F\u7528$\\color{red}{data}$\u65F6\u5E94\u63D0\u524D\u5B9A\u4E49\u6240\u4F7F\u7528\u7684\u6570\u636E\u53D8\u91CF,\u4E0D\u80FD\u540E\u6765\u6DFB\u52A0\u5C5E\u6027\u6765\u4F7F\u7528Vue\u76F8\u5E94\u5F0F\u7684\u4F7F\u7528\u6570\u636E</p><p>\u53EF\u4EE5\u4F7F\u7528$\\color{red}{Object.freeze()}$ \u6765\u963B\u6B62\u4FEE\u6539\u73B0\u6709\u5C5E\u6027,\u4F7F\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u65E0\u6CD5\u518D\u8FFD\u8E2A\u53D8\u5316</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var data={
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><!--]-->`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/1.\u6570\u636E\u4E0E\u65B9\u6CD5.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var _1_______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$m]]);
var _1_______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _1_______html$1
});
const _sfc_main$F = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="color-red-notes" tabindex="-1"><a class="header-anchor" href="#color-red-notes" aria-hidden="true">#</a> $\\color{red}{notes:}$</h2><p>\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u4E2D\u4E0D\u80FD\u4F7F\u7528$\\color{red}_{\u7BAD\u5934\u51FD\u6570}$</p><br><br><h2 id="color-red-functiontype" tabindex="-1"><a class="header-anchor" href="#color-red-functiontype" aria-hidden="true">#</a> $\\color{red}{FunctionType}$</h2><ul><li><strong>beforeCreate():</strong> \u5728\u5B9E\u4F8B\u5316\u4E4B\u540E,\u6570\u636E\u89C2\u6D4B <code>data observer</code> \u548C <code>watch/event</code> \u4E8B\u4EF6\u914D\u7F6E\u4E4B\u524D\u88AB\u8C03\u7528</li><li><strong>created():</strong> \u5728\u8FD9\u4E00\u6B65,\u5B9E\u4F8B\u5DF2\u7ECF\u5B8C\u6210\u4E86:\u6570\u636E\u89C2\u6D4B <code>data observer</code>,\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u8FD0\u7B97, <code>watch/event \u4E8B\u4EF6\u56DE\u8C03.</code>. \u7136\u800C,\u6302\u8F7D\u9636\u6BB5\u8FD8\u6CA1\u5F00\u59CB, <code>$el</code> \u76EE\u524D\u4E0D\u53EF\u89C1.</li><li><strong>beforeMount():</strong> \u5728\u6302\u8F7D\u8282\u70B9\u4E4B\u524D\u88AB\u8C03\u7528,\u76F8\u5173\u7684\u6E32\u67D3\u51FD\u6570\u9996\u6B21\u88AB\u8C03\u7528.</li><li><strong>mounted():</strong><code>el</code> \u88AB\u65B0\u521B\u5EFA\u7684<code>vm.$el</code> \u66FF\u6362,\u6302\u8F7D\u6210\u529F $\\color{gray}_{(\u4E2A\u4EBA\u7406\u89E3:\u5C06html\u8282\u70B9\u66FF\u6362\u6210vue\u7684\u6E32\u67D3\u7684\u8282\u70B9\u4E4B\u540E,\u5373\u6302\u5728\u6210\u529F)}$</li><li><strong>beforeUpdate():</strong> \u6570\u636E\u66F4\u65B0\u4E4B\u524D\u8C03\u7528</li><li><strong>update():</strong> \u7EC4\u4EF6,DOM,\u5DF2\u7ECF\u66F4\u65B0,\u7EC4\u5EFA\u66F4\u65B0\u5B8C\u6BD5\u540E\u8C03\u7528</li></ul><!--]-->`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/2.\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var _2___________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$l]]);
var _2___________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _2___________html$1
});
const _sfc_main$E = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="color-red-notes" tabindex="-1"><a class="header-anchor" href="#color-red-notes" aria-hidden="true">#</a> $\\color{red}{notes:}$</h2><hr><p>\u4F7F\u7528\u4E86\u57FA\u4E8EHTML\u7684\u6A21\u677F\u8BED\u6CD5,\u5141\u8BB8\u5F00\u53D1\u8005\u58F0\u660E\u5F0F\u5730\u5C06DOM\u7ED1\u5B9A\u81F3\u5E95\u5C42Vue\u5B9E\u4F8B\u7684\u6570\u636E.</p><p>\u5728\u5E95\u5C42\u7684\u5B9E\u73B0\u4E0A,Vue\u5C06\u6A21\u677F\u7F16\u8BD1\u6210\u865A\u62DFDOM\u6E32\u67D3\u51FD\u6570,\u7ED3\u5408\u54CD\u5E94\u7CFB\u7EDF,Vue\u80FD\u591F\u667A\u80FD\u5730\u8BA1\u7B97\u51FA\u6700\u5C11\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u591A\u5C11\u7EC4\u4EF6,\u5E76\u628ADOM\u64CD\u4F5C\u6B21\u6570\u51CF\u5230\u6700\u5C11. \u4E5F\u53EF\u5DF2\u4E0D\u4F7F\u7528\u6A21\u677F,$\\color{green}{\u76F4\u63A5\u5199\u6E32\u67D3 _{render}\u51FD\u6570} ,$\u4F7F\u7528\u53EF\u9009\u7684JSX\u8BED\u6CD5</p><h1 id="\u63D2\u503C" tabindex="-1"><a class="header-anchor" href="#\u63D2\u503C" aria-hidden="true">#</a> \u63D2\u503C</h1><h4 id="v-once" tabindex="-1"><a class="header-anchor" href="#v-once" aria-hidden="true">#</a> #v-once</h4><p>\u89C6\u56FE\u53EA\u968F\u6570\u636E\u7684\u6539\u53D8\u800C\u6539\u53D8\u4E00\u6B21</p><h4 id="\u6587\u672C-v-text" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C-v-text" aria-hidden="true">#</a> #\u6587\u672C v-text</h4><p>\u4F7F\u7528\u53CC\u5927\u62EC\u53F7 ${serverRenderer.ssrInterpolate()} \u6216\u8005\u6307\u4EE4\u63D2\u5165\u6587\u672C</p><h4 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> #HTML</h4><p>v-html=&quot;&quot; \u63D2\u5165HTML\u4EE3\u7801</p><h4 id="\u4F7F\u7528javascript\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528javascript\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> #\u4F7F\u7528javascript\u8868\u8FBE\u5F0F</h4><p>\u5728${serverRenderer.ssrInterpolate()}\u4E2D\u4F7F\u7528\u8868\u8FBE\u5F0F\u5373\u53EF</p><!--]-->`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/3.\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var _3_________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$k]]);
var _3_________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _3_________html$1
});
const _sfc_main$D = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="_1-\u4F7F\u7528vue-extend" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528vue-extend" aria-hidden="true">#</a> 1.\u4F7F\u7528Vue.extend({})</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const temp = Vue.extend({
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2.</h2><!--]-->`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/4.\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var _4_________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$j]]);
var _4_________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _4_________html$1
});
const _sfc_main$C = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u5B89\u88C5-vue-cli" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-vue-cli" aria-hidden="true">#</a> \u5B89\u88C5@vue/cli</h2><p><code>npm install @vue/cli -g</code></p><hr><h2 id="\u521B\u5EFAvue\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAvue\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFAvue\u9879\u76EE</h2><p><code>vue create ${serverRenderer.ssrInterpolate(_ctx.projectName)}</code></p><hr><h2 id="\u811A\u624B\u67B6\u7ED3\u6784\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u811A\u624B\u67B6\u7ED3\u6784\u5206\u6790" aria-hidden="true">#</a> \u811A\u624B\u67B6\u7ED3\u6784\u5206\u6790</h2><p><code> .gitignore \u6587\u4EF6\u914D\u7F6Egit\u4E0D\u540C\u6B65\u7684\u6587\u4EF6</code></p><p><code>babel.config babel(ES6=&gt;ES5\u5DE5\u5177)\u914D\u7F6E\u6587\u4EF6</code></p><p><code>assets \u5B58\u653E\u9759\u6001\u8D44\u6E90</code></p><hr><h2 id="\u5173\u4E8E\u4E0D\u540C\u7248\u672C\u7684vue" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u4E0D\u540C\u7248\u672C\u7684vue" aria-hidden="true">#</a> \u5173\u4E8E\u4E0D\u540C\u7248\u672C\u7684Vue</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.vue.js\u4E0Evue.runtime.js\u7684\u533A\u522B\uFF1A
	(1).vue.js\u662F\u5B8C\u6574\u7248\u7684vue\uFF0C\u5305\u542B\uFF1A\u6838\u5FC3\u529F\u80FD+\u6A21\u677F\u89E3\u6790\u5668\u3002
	(2).vue.runtime.xxx,js\u662F\u8FD0\u884C\u7248\u7684vue\uFF0C\u53EA\u5305\u542B\uFF1A\u6838\u5FC3\u529F\u80FD\uFF0C\u6CA1\u6709\u6A21\u677F\u89E3\u6790\u5668\u3002

2.\u56E0\u4E3Avue.runtime.xxx.js\u6CA1\u6709\u6A21\u677F\u89E3\u6790\u5668\uFF0C\u6240\u4EE5\u4E0D\u80FD\u4F7F\u7528template\u914D\u7F6E\u9879\uFF0C\u9700\u8981\u4F7F\u7528render\u51FD\u6570\u63A5\u6536createElement\u51FD\u6570\u53BB\u6307\u5B9A\u5177\u4F53\u5185\u5BB9\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h2 id="vue\u811A\u624B\u67B6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vue\u811A\u624B\u67B6\u914D\u7F6E" aria-hidden="true">#</a> vue\u811A\u624B\u67B6\u914D\u7F6E</h2><p>vue.config.js</p><!--]-->`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/5.\u4F7F\u7528Vue\u811A\u624B\u67B6.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var _5___Vue____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$i]]);
var _5___Vue____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _5___Vue____html$1
});
const _sfc_main$B = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="ref\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#ref\u5C5E\u6027" aria-hidden="true">#</a> ref\u5C5E\u6027</h2><p>1.\u88AB\u7528\u6765\u7ED9\u5143\u7D20\u6216\u5B50\u7EC4\u4EF6\u6CE8\u518C\u5F15\u7528\u4FE1\u606F\uFF08id\u7684\u66FF\u4EE3\u8005\uFF09\u3002 2.\u5E94\u7528\u5728html\u6807\u7B7E\u4E0A\u83B7\u53D6\u7684\u662F\u771F\u5B9EDOM\u5143\u7D20\uFF0C\u5E94\u7528\u5728\u7EC4\u4EF6\u6807\u7B7E\u4E0A\u662F\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u3002 3.\u4F7F\u7528\u65B9\u5F0F\uFF1A \u6253\u6807\u8BC6\uFF1A<code>&lt;h1 ref=&#39;xxx&#39;&gt;...&lt;/h1&gt; or &lt;component ref=&#39;xxx&#39;&gt;&lt;/component&gt;</code> \u83B7\u53D6\uFF1A<code>this.$refs.xxx</code></p><hr><h2 id="\u914D\u7F6E\u9879props" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879props" aria-hidden="true">#</a> \u914D\u7F6E\u9879props</h2><p>\u529F\u80FD\uFF1A\u8BA9\u7EC4\u4EF6\u63A5\u6536\u5916\u90E8\u4F20\u8FC7\u6765\u7684\u6570\u636E</p><blockquote><p>(1).\u4F20\u9012\u6570\u636E\uFF1A</p><blockquote><p><code>&lt;Demo name=&quot;xxx&quot; /&gt;</code></p></blockquote></blockquote><blockquote><p>(2).\u63A5\u6536\u6570\u636E\uFF1A</p><blockquote><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F(\u53EA\u63A5\u6536):</p><blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>props:[&#39;name&#39;]
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h2 id="scoped\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#scoped\u6837\u5F0F" aria-hidden="true">#</a> scoped\u6837\u5F0F</h2><p>\u4F5C\u7528\uFF1A\u8BA9\u6837\u5F0F\u5728\u5C40\u90E8\u751F\u6548\uFF0C\u9632\u6B62\u51B2\u7A81 \u5199\u6CD5\uFF1A<code>&lt;style scoped&gt;</code></p><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/6.\u7279\u6B8A\u5C5E\u6027.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var _6______html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$h]]);
var _6______html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _6______html$1
});
const _sfc_main$A = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD\uFF1A</h2><p>\u7528\u4E8E\u589E\u5F3AVue</p><h2 id="\u672C\u8D28" tabindex="-1"><a class="header-anchor" href="#\u672C\u8D28" aria-hidden="true">#</a> \u672C\u8D28\uFF1A</h2><p>\u5305\u542Binstall\u65B9\u6CD5\u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0Cinstall\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662FVue\uFF0C\u7B2C\u4E8C\u4E2A\u4EE5\u540E\u7684\u53C2\u6570\u662F\u63D2\u4EF6\u4F7F\u7528\u8005\u4F20\u9012\u7684\u53C2\u6570\u3002</p><h2 id="\u5B9A\u4E49\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u63D2\u4EF6" aria-hidden="true">#</a> \u5B9A\u4E49\u63D2\u4EF6\uFF1A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5BF9\u8C61.install = function(Vue,options){
	// 1.\u6DFB\u52A0\u5168\u5C40\u8FC7\u6EE4\u5668
	Vue.fillter(...)
	
	// 2.\u6DFB\u52A0\u5168\u5C40\u6307\u4EE4
	Vue.directive(...)
	
	// 3.\u914D\u7F6E\u5168\u5C40\u6DF7\u5165
	Vue.mixin(...)
	
	// 4.\u6DFB\u52A0\u5B9E\u4F8B\u65B9\u6CD5
	Vue.prototype.$myMethod = functioon(){...}
	Vue.prototype.$myProperty = xxx
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u4F7F\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u63D2\u4EF6\uFF1A</h2><p><code>Vue.use()</code></p><!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/7.Vue\u63D2\u4EF6.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var _7_Vue___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$g]]);
var _7_Vue___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _7_Vue___html$1
});
var _imports_0 = "/notes/assets/bffe40ee75a8ea91315096bb6b2b3768.6566cebf.png";
var _imports_1 = "/notes/assets/85a5e57f31bab0be3dddcdacccf98a2c.cf36d2b1.png";
const _sfc_main$z = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h3 id="vuex\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#vuex\u662F\u4EC0\u4E48" aria-hidden="true">#</a> vuex\u662F\u4EC0\u4E48\uFF1F</h3><p><code>Vuex \u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002</code></p><h3 id="\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528" aria-hidden="true">#</a> \u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\uFF1F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u591A\u4E2A\u89C6\u56FE\u4F9D\u8D56\u4E8E\u540C\u4E00\u72B6\u6001\u3002
\u6765\u81EA\u4E0D\u540C\u89C6\u56FE\u7684\u884C\u4E3A\u9700\u8981\u53D8\u66F4\u540C\u4E00\u72B6\u6001\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u7EC4\u6210\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u6210\u90E8\u5206" aria-hidden="true">#</a> \u7EC4\u6210\u90E8\u5206</h3><p>$\\color{blue}{\u4EE5\u4E0B\u662F\u4E00\u4E2A\u8868\u793A\u201C\u5355\u5411\u6570\u636E\u6D41\u201D\u7406\u5FF5\u7684\u7B80\u5355\u793A\u610F\uFF1A}$ <img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="bffe40ee75a8ea91315096bb6b2b3768.png"></p><p>\u8FD9\u4E2A\u72B6\u6001\u81EA\u7BA1\u7406\u5E94\u7528\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\uFF1A</p><ul><li>state\uFF0C\u9A71\u52A8\u5E94\u7528\u7684\u6570\u636E\u6E90\uFF1B</li><li>view\uFF0C\u4EE5\u58F0\u660E\u65B9\u5F0F\u5C06 state \u6620\u5C04\u5230\u89C6\u56FE\uFF1B</li><li>actions\uFF0C\u54CD\u5E94\u5728 view \u4E0A\u7684\u7528\u6237\u8F93\u5165\u5BFC\u81F4\u7684\u72B6\u6001\u53D8\u5316\u3002</li></ul><p>$\\color{red}{vuex\u539F\u7406\u56FE}$ <img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="85a5e57f31bab0be3dddcdacccf98a2c.png"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BE5\u6587\u4EF6\u7528\u4E8E\u521B\u5EFA\u6838\u5FC3store
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/8.vuex.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var _8_vuex_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$f]]);
var _8_vuex_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _8_vuex_html$1
});
const _sfc_main$y = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/9.vue-router.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var _9_vueRouter_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$e]]);
var _9_vueRouter_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _9_vueRouter_html$1
});
const _sfc_main$x = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/%E6%B3%A8%E6%84%8F.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6CE8\u610F`);
      } else {
        return [
          vue.createTextVNode("\u6CE8\u610F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_4-\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/4.%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%9B%E5%BB%BA%E6%96%B9%E5%BC%8F.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`4.\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F`);
      } else {
        return [
          vue.createTextVNode("4.\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_3-\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C" tabindex="-1"><a class="header-anchor" href="#_3-\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/3.%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95-%E6%8F%92%E5%80%BC.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`3.\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C`);
      } else {
        return [
          vue.createTextVNode("3.\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_6-\u7279\u6B8A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_6-\u7279\u6B8A\u5C5E\u6027" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/6.%E7%89%B9%E6%AE%8A%E5%B1%9E%E6%80%A7.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`6.\u7279\u6B8A\u5C5E\u6027`);
      } else {
        return [
          vue.createTextVNode("6.\u7279\u6B8A\u5C5E\u6027")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_5-\u4F7F\u7528vue\u811A\u624B\u67B6" tabindex="-1"><a class="header-anchor" href="#_5-\u4F7F\u7528vue\u811A\u624B\u67B6" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/5.%E4%BD%BF%E7%94%A8Vue%E8%84%9A%E6%89%8B%E6%9E%B6.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`5.\u4F7F\u7528Vue\u811A\u624B\u67B6`);
      } else {
        return [
          vue.createTextVNode("5.\u4F7F\u7528Vue\u811A\u624B\u67B6")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/vuepress.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`vuepress`);
      } else {
        return [
          vue.createTextVNode("vuepress")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="webpack\u7ECF\u5178\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack\u7ECF\u5178\u914D\u7F6E" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/webpack%E7%BB%8F%E5%85%B8%E9%85%8D%E7%BD%AE.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`webpack\u7ECF\u5178\u914D\u7F6E`);
      } else {
        return [
          vue.createTextVNode("webpack\u7ECF\u5178\u914D\u7F6E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_2-\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/2.%E5%AE%9E%E4%BE%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`2.\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50`);
      } else {
        return [
          vue.createTextVNode("2.\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_1-\u6570\u636E\u4E0E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u4E0E\u65B9\u6CD5" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/1.%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`1.\u6570\u636E\u4E0E\u65B9\u6CD5`);
      } else {
        return [
          vue.createTextVNode("1.\u6570\u636E\u4E0E\u65B9\u6CD5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_8-vuex" tabindex="-1"><a class="header-anchor" href="#_8-vuex" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/8.vuex.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`8.vuex`);
      } else {
        return [
          vue.createTextVNode("8.vuex")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/emoji.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`emoji`);
      } else {
        return [
          vue.createTextVNode("emoji")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_9-vue-router" tabindex="-1"><a class="header-anchor" href="#_9-vue-router" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/9.vue-router.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`9.vue-router`);
      } else {
        return [
          vue.createTextVNode("9.vue-router")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="_7-vue\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-vue\u63D2\u4EF6" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/7.Vue%E6%8F%92%E4%BB%B6.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`7.Vue\u63D2\u4EF6`);
      } else {
        return [
          vue.createTextVNode("7.Vue\u63D2\u4EF6")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/Vue/%E7%BB%84%E4%BB%B6.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u7EC4\u4EF6`);
      } else {
        return [
          vue.createTextVNode("\u7EC4\u4EF6")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/index.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var index_html$e = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$d]]);
var index_html$f = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$e
});
const _sfc_main$w = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.ssrRenderAttrs(_attrs)}>{ &quot;100&quot;: &quot;\u{1F4AF}&quot;, &quot;1234&quot;: &quot;\u{1F522}&quot;, &quot;grinning&quot;: &quot;\u{1F600}&quot;, &quot;smiley&quot;: &quot;\u{1F603}&quot;, &quot;smile&quot;: &quot;\u{1F604}&quot;, &quot;grin&quot;: &quot;\u{1F601}&quot;, &quot;laughing&quot;: &quot;\u{1F606}&quot;, &quot;satisfied&quot;: &quot;\u{1F606}&quot;, &quot;sweat_smile&quot;: &quot;\u{1F605}&quot;, &quot;rofl&quot;: &quot;\u{1F923}&quot;, &quot;joy&quot;: &quot;\u{1F602}&quot;, &quot;slightly_smiling_face&quot;: &quot;\u{1F642}&quot;, &quot;upside_down_face&quot;: &quot;\u{1F643}&quot;, &quot;wink&quot;: &quot;\u{1F609}&quot;, &quot;blush&quot;: &quot;\u{1F60A}&quot;, &quot;innocent&quot;: &quot;\u{1F607}&quot;, &quot;smiling_face_with_three_hearts&quot;: &quot;\u{1F970}&quot;, &quot;heart_eyes&quot;: &quot;\u{1F60D}&quot;, &quot;star_struck&quot;: &quot;\u{1F929}&quot;, &quot;kissing_heart&quot;: &quot;\u{1F618}&quot;, &quot;kissing&quot;: &quot;\u{1F617}&quot;, &quot;relaxed&quot;: &quot;\u263A\uFE0F&quot;, &quot;kissing_closed_eyes&quot;: &quot;\u{1F61A}&quot;, &quot;kissing_smiling_eyes&quot;: &quot;\u{1F619}&quot;, &quot;smiling_face_with_tear&quot;: &quot;\u{1F972}&quot;, &quot;yum&quot;: &quot;\u{1F60B}&quot;, &quot;stuck_out_tongue&quot;: &quot;\u{1F61B}&quot;, &quot;stuck_out_tongue_winking_eye&quot;: &quot;\u{1F61C}&quot;, &quot;zany_face&quot;: &quot;\u{1F92A}&quot;, &quot;stuck_out_tongue_closed_eyes&quot;: &quot;\u{1F61D}&quot;, &quot;money_mouth_face&quot;: &quot;\u{1F911}&quot;, &quot;hugs&quot;: &quot;\u{1F917}&quot;, &quot;hand_over_mouth&quot;: &quot;\u{1F92D}&quot;, &quot;shushing_face&quot;: &quot;\u{1F92B}&quot;, &quot;thinking&quot;: &quot;\u{1F914}&quot;, &quot;zipper_mouth_face&quot;: &quot;\u{1F910}&quot;, &quot;raised_eyebrow&quot;: &quot;\u{1F928}&quot;, &quot;neutral_face&quot;: &quot;\u{1F610}&quot;, &quot;expressionless&quot;: &quot;\u{1F611}&quot;, &quot;no_mouth&quot;: &quot;\u{1F636}&quot;, &quot;smirk&quot;: &quot;\u{1F60F}&quot;, &quot;unamused&quot;: &quot;\u{1F612}&quot;, &quot;roll_eyes&quot;: &quot;\u{1F644}&quot;, &quot;grimacing&quot;: &quot;\u{1F62C}&quot;, &quot;lying_face&quot;: &quot;\u{1F925}&quot;, &quot;relieved&quot;: &quot;\u{1F60C}&quot;, &quot;pensive&quot;: &quot;\u{1F614}&quot;, &quot;sleepy&quot;: &quot;\u{1F62A}&quot;, &quot;drooling_face&quot;: &quot;\u{1F924}&quot;, &quot;sleeping&quot;: &quot;\u{1F634}&quot;, &quot;mask&quot;: &quot;\u{1F637}&quot;, &quot;face_with_thermometer&quot;: &quot;\u{1F912}&quot;, &quot;face_with_head_bandage&quot;: &quot;\u{1F915}&quot;, &quot;nauseated_face&quot;: &quot;\u{1F922}&quot;, &quot;vomiting_face&quot;: &quot;\u{1F92E}&quot;, &quot;sneezing_face&quot;: &quot;\u{1F927}&quot;, &quot;hot_face&quot;: &quot;\u{1F975}&quot;, &quot;cold_face&quot;: &quot;\u{1F976}&quot;, &quot;woozy_face&quot;: &quot;\u{1F974}&quot;, &quot;dizzy_face&quot;: &quot;\u{1F635}&quot;, &quot;exploding_head&quot;: &quot;\u{1F92F}&quot;, &quot;cowboy_hat_face&quot;: &quot;\u{1F920}&quot;, &quot;partying_face&quot;: &quot;\u{1F973}&quot;, &quot;disguised_face&quot;: &quot;\u{1F978}&quot;, &quot;sunglasses&quot;: &quot;\u{1F60E}&quot;, &quot;nerd_face&quot;: &quot;\u{1F913}&quot;, &quot;monocle_face&quot;: &quot;\u{1F9D0}&quot;, &quot;confused&quot;: &quot;\u{1F615}&quot;, &quot;worried&quot;: &quot;\u{1F61F}&quot;, &quot;slightly_frowning_face&quot;: &quot;\u{1F641}&quot;, &quot;frowning_face&quot;: &quot;\u2639\uFE0F&quot;, &quot;open_mouth&quot;: &quot;\u{1F62E}&quot;, &quot;hushed&quot;: &quot;\u{1F62F}&quot;, &quot;astonished&quot;: &quot;\u{1F632}&quot;, &quot;flushed&quot;: &quot;\u{1F633}&quot;, &quot;pleading_face&quot;: &quot;\u{1F97A}&quot;, &quot;frowning&quot;: &quot;\u{1F626}&quot;, &quot;anguished&quot;: &quot;\u{1F627}&quot;, &quot;fearful&quot;: &quot;\u{1F628}&quot;, &quot;cold_sweat&quot;: &quot;\u{1F630}&quot;, &quot;disappointed_relieved&quot;: &quot;\u{1F625}&quot;, &quot;cry&quot;: &quot;\u{1F622}&quot;, &quot;sob&quot;: &quot;\u{1F62D}&quot;, &quot;scream&quot;: &quot;\u{1F631}&quot;, &quot;confounded&quot;: &quot;\u{1F616}&quot;, &quot;persevere&quot;: &quot;\u{1F623}&quot;, &quot;disappointed&quot;: &quot;\u{1F61E}&quot;, &quot;sweat&quot;: &quot;\u{1F613}&quot;, &quot;weary&quot;: &quot;\u{1F629}&quot;, &quot;tired_face&quot;: &quot;\u{1F62B}&quot;, &quot;yawning_face&quot;: &quot;\u{1F971}&quot;, &quot;triumph&quot;: &quot;\u{1F624}&quot;, &quot;rage&quot;: &quot;\u{1F621}&quot;, &quot;pout&quot;: &quot;\u{1F621}&quot;, &quot;angry&quot;: &quot;\u{1F620}&quot;, &quot;cursing_face&quot;: &quot;\u{1F92C}&quot;, &quot;smiling_imp&quot;: &quot;\u{1F608}&quot;, &quot;imp&quot;: &quot;\u{1F47F}&quot;, &quot;skull&quot;: &quot;\u{1F480}&quot;, &quot;skull_and_crossbones&quot;: &quot;\u2620\uFE0F&quot;, &quot;hankey&quot;: &quot;\u{1F4A9}&quot;, &quot;poop&quot;: &quot;\u{1F4A9}&quot;, &quot;shit&quot;: &quot;\u{1F4A9}&quot;, &quot;clown_face&quot;: &quot;\u{1F921}&quot;, &quot;japanese_ogre&quot;: &quot;\u{1F479}&quot;, &quot;japanese_goblin&quot;: &quot;\u{1F47A}&quot;, &quot;ghost&quot;: &quot;\u{1F47B}&quot;, &quot;alien&quot;: &quot;\u{1F47D}&quot;, &quot;space_invader&quot;: &quot;\u{1F47E}&quot;, &quot;robot&quot;: &quot;\u{1F916}&quot;, &quot;smiley_cat&quot;: &quot;\u{1F63A}&quot;, &quot;smile_cat&quot;: &quot;\u{1F638}&quot;, &quot;joy_cat&quot;: &quot;\u{1F639}&quot;, &quot;heart_eyes_cat&quot;: &quot;\u{1F63B}&quot;, &quot;smirk_cat&quot;: &quot;\u{1F63C}&quot;, &quot;kissing_cat&quot;: &quot;\u{1F63D}&quot;, &quot;scream_cat&quot;: &quot;\u{1F640}&quot;, &quot;crying_cat_face&quot;: &quot;\u{1F63F}&quot;, &quot;pouting_cat&quot;: &quot;\u{1F63E}&quot;, &quot;see_no_evil&quot;: &quot;\u{1F648}&quot;, &quot;hear_no_evil&quot;: &quot;\u{1F649}&quot;, &quot;speak_no_evil&quot;: &quot;\u{1F64A}&quot;, &quot;kiss&quot;: &quot;\u{1F48B}&quot;, &quot;love_letter&quot;: &quot;\u{1F48C}&quot;, &quot;cupid&quot;: &quot;\u{1F498}&quot;, &quot;gift_heart&quot;: &quot;\u{1F49D}&quot;, &quot;sparkling_heart&quot;: &quot;\u{1F496}&quot;, &quot;heartpulse&quot;: &quot;\u{1F497}&quot;, &quot;heartbeat&quot;: &quot;\u{1F493}&quot;, &quot;revolving_hearts&quot;: &quot;\u{1F49E}&quot;, &quot;two_hearts&quot;: &quot;\u{1F495}&quot;, &quot;heart_decoration&quot;: &quot;\u{1F49F}&quot;, &quot;heavy_heart_exclamation&quot;: &quot;\u2763\uFE0F&quot;, &quot;broken_heart&quot;: &quot;\u{1F494}&quot;, &quot;heart&quot;: &quot;\u2764\uFE0F&quot;, &quot;orange_heart&quot;: &quot;\u{1F9E1}&quot;, &quot;yellow_heart&quot;: &quot;\u{1F49B}&quot;, &quot;green_heart&quot;: &quot;\u{1F49A}&quot;, &quot;blue_heart&quot;: &quot;\u{1F499}&quot;, &quot;purple_heart&quot;: &quot;\u{1F49C}&quot;, &quot;brown_heart&quot;: &quot;\u{1F90E}&quot;, &quot;black_heart&quot;: &quot;\u{1F5A4}&quot;, &quot;white_heart&quot;: &quot;\u{1F90D}&quot;, &quot;anger&quot;: &quot;\u{1F4A2}&quot;, &quot;boom&quot;: &quot;\u{1F4A5}&quot;, &quot;collision&quot;: &quot;\u{1F4A5}&quot;, &quot;dizzy&quot;: &quot;\u{1F4AB}&quot;, &quot;sweat_drops&quot;: &quot;\u{1F4A6}&quot;, &quot;dash&quot;: &quot;\u{1F4A8}&quot;, &quot;hole&quot;: &quot;\u{1F573}\uFE0F&quot;, &quot;bomb&quot;: &quot;\u{1F4A3}&quot;, &quot;speech_balloon&quot;: &quot;\u{1F4AC}&quot;, &quot;eye_speech_bubble&quot;: &quot;\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F&quot;, &quot;left_speech_bubble&quot;: &quot;\u{1F5E8}\uFE0F&quot;, &quot;right_anger_bubble&quot;: &quot;\u{1F5EF}\uFE0F&quot;, &quot;thought_balloon&quot;: &quot;\u{1F4AD}&quot;, &quot;zzz&quot;: &quot;\u{1F4A4}&quot;, &quot;wave&quot;: &quot;\u{1F44B}&quot;, &quot;raised_back_of_hand&quot;: &quot;\u{1F91A}&quot;, &quot;raised_hand_with_fingers_splayed&quot;: &quot;\u{1F590}\uFE0F&quot;, &quot;hand&quot;: &quot;\u270B&quot;, &quot;raised_hand&quot;: &quot;\u270B&quot;, &quot;vulcan_salute&quot;: &quot;\u{1F596}&quot;, &quot;ok_hand&quot;: &quot;\u{1F44C}&quot;, &quot;pinched_fingers&quot;: &quot;\u{1F90C}&quot;, &quot;pinching_hand&quot;: &quot;\u{1F90F}&quot;, &quot;v&quot;: &quot;\u270C\uFE0F&quot;, &quot;crossed_fingers&quot;: &quot;\u{1F91E}&quot;, &quot;love_you_gesture&quot;: &quot;\u{1F91F}&quot;, &quot;metal&quot;: &quot;\u{1F918}&quot;, &quot;call_me_hand&quot;: &quot;\u{1F919}&quot;, &quot;point_left&quot;: &quot;\u{1F448}&quot;, &quot;point_right&quot;: &quot;\u{1F449}&quot;, &quot;point_up_2&quot;: &quot;\u{1F446}&quot;, &quot;middle_finger&quot;: &quot;\u{1F595}&quot;, &quot;fu&quot;: &quot;\u{1F595}&quot;, &quot;point_down&quot;: &quot;\u{1F447}&quot;, &quot;point_up&quot;: &quot;\u261D\uFE0F&quot;, &quot;+1&quot;: &quot;\u{1F44D}&quot;, &quot;thumbsup&quot;: &quot;\u{1F44D}&quot;, &quot;-1&quot;: &quot;\u{1F44E}&quot;, &quot;thumbsdown&quot;: &quot;\u{1F44E}&quot;, &quot;fist_raised&quot;: &quot;\u270A&quot;, &quot;fist&quot;: &quot;\u270A&quot;, &quot;fist_oncoming&quot;: &quot;\u{1F44A}&quot;, &quot;facepunch&quot;: &quot;\u{1F44A}&quot;, &quot;punch&quot;: &quot;\u{1F44A}&quot;, &quot;fist_left&quot;: &quot;\u{1F91B}&quot;, &quot;fist_right&quot;: &quot;\u{1F91C}&quot;, &quot;clap&quot;: &quot;\u{1F44F}&quot;, &quot;raised_hands&quot;: &quot;\u{1F64C}&quot;, &quot;open_hands&quot;: &quot;\u{1F450}&quot;, &quot;palms_up_together&quot;: &quot;\u{1F932}&quot;, &quot;handshake&quot;: &quot;\u{1F91D}&quot;, &quot;pray&quot;: &quot;\u{1F64F}&quot;, &quot;writing_hand&quot;: &quot;\u270D\uFE0F&quot;, &quot;nail_care&quot;: &quot;\u{1F485}&quot;, &quot;selfie&quot;: &quot;\u{1F933}&quot;, &quot;muscle&quot;: &quot;\u{1F4AA}&quot;, &quot;mechanical_arm&quot;: &quot;\u{1F9BE}&quot;, &quot;mechanical_leg&quot;: &quot;\u{1F9BF}&quot;, &quot;leg&quot;: &quot;\u{1F9B5}&quot;, &quot;foot&quot;: &quot;\u{1F9B6}&quot;, &quot;ear&quot;: &quot;\u{1F442}&quot;, &quot;ear_with_hearing_aid&quot;: &quot;\u{1F9BB}&quot;, &quot;nose&quot;: &quot;\u{1F443}&quot;, &quot;brain&quot;: &quot;\u{1F9E0}&quot;, &quot;anatomical_heart&quot;: &quot;\u{1FAC0}&quot;, &quot;lungs&quot;: &quot;\u{1FAC1}&quot;, &quot;tooth&quot;: &quot;\u{1F9B7}&quot;, &quot;bone&quot;: &quot;\u{1F9B4}&quot;, &quot;eyes&quot;: &quot;\u{1F440}&quot;, &quot;eye&quot;: &quot;\u{1F441}\uFE0F&quot;, &quot;tongue&quot;: &quot;\u{1F445}&quot;, &quot;lips&quot;: &quot;\u{1F444}&quot;, &quot;baby&quot;: &quot;\u{1F476}&quot;, &quot;child&quot;: &quot;\u{1F9D2}&quot;, &quot;boy&quot;: &quot;\u{1F466}&quot;, &quot;girl&quot;: &quot;\u{1F467}&quot;, &quot;adult&quot;: &quot;\u{1F9D1}&quot;, &quot;blond_haired_person&quot;: &quot;\u{1F471}&quot;, &quot;man&quot;: &quot;\u{1F468}&quot;, &quot;bearded_person&quot;: &quot;\u{1F9D4}&quot;, &quot;red_haired_man&quot;: &quot;\u{1F468}\u200D\u{1F9B0}&quot;, &quot;curly_haired_man&quot;: &quot;\u{1F468}\u200D\u{1F9B1}&quot;, &quot;white_haired_man&quot;: &quot;\u{1F468}\u200D\u{1F9B3}&quot;, &quot;bald_man&quot;: &quot;\u{1F468}\u200D\u{1F9B2}&quot;, &quot;woman&quot;: &quot;\u{1F469}&quot;, &quot;red_haired_woman&quot;: &quot;\u{1F469}\u200D\u{1F9B0}&quot;, &quot;person_red_hair&quot;: &quot;\u{1F9D1}\u200D\u{1F9B0}&quot;, &quot;curly_haired_woman&quot;: &quot;\u{1F469}\u200D\u{1F9B1}&quot;, &quot;person_curly_hair&quot;: &quot;\u{1F9D1}\u200D\u{1F9B1}&quot;, &quot;white_haired_woman&quot;: &quot;\u{1F469}\u200D\u{1F9B3}&quot;, &quot;person_white_hair&quot;: &quot;\u{1F9D1}\u200D\u{1F9B3}&quot;, &quot;bald_woman&quot;: &quot;\u{1F469}\u200D\u{1F9B2}&quot;, &quot;person_bald&quot;: &quot;\u{1F9D1}\u200D\u{1F9B2}&quot;, &quot;blond_haired_woman&quot;: &quot;\u{1F471}\u200D\u2640\uFE0F&quot;, &quot;blonde_woman&quot;: &quot;\u{1F471}\u200D\u2640\uFE0F&quot;, &quot;blond_haired_man&quot;: &quot;\u{1F471}\u200D\u2642\uFE0F&quot;, &quot;older_adult&quot;: &quot;\u{1F9D3}&quot;, &quot;older_man&quot;: &quot;\u{1F474}&quot;, &quot;older_woman&quot;: &quot;\u{1F475}&quot;, &quot;frowning_person&quot;: &quot;\u{1F64D}&quot;, &quot;frowning_man&quot;: &quot;\u{1F64D}\u200D\u2642\uFE0F&quot;, &quot;frowning_woman&quot;: &quot;\u{1F64D}\u200D\u2640\uFE0F&quot;, &quot;pouting_face&quot;: &quot;\u{1F64E}&quot;, &quot;pouting_man&quot;: &quot;\u{1F64E}\u200D\u2642\uFE0F&quot;, &quot;pouting_woman&quot;: &quot;\u{1F64E}\u200D\u2640\uFE0F&quot;, &quot;no_good&quot;: &quot;\u{1F645}&quot;, &quot;no_good_man&quot;: &quot;\u{1F645}\u200D\u2642\uFE0F&quot;, &quot;ng_man&quot;: &quot;\u{1F645}\u200D\u2642\uFE0F&quot;, &quot;no_good_woman&quot;: &quot;\u{1F645}\u200D\u2640\uFE0F&quot;, &quot;ng_woman&quot;: &quot;\u{1F645}\u200D\u2640\uFE0F&quot;, &quot;ok_person&quot;: &quot;\u{1F646}&quot;, &quot;ok_man&quot;: &quot;\u{1F646}\u200D\u2642\uFE0F&quot;, &quot;ok_woman&quot;: &quot;\u{1F646}\u200D\u2640\uFE0F&quot;, &quot;tipping_hand_person&quot;: &quot;\u{1F481}&quot;, &quot;information_desk_person&quot;: &quot;\u{1F481}&quot;, &quot;tipping_hand_man&quot;: &quot;\u{1F481}\u200D\u2642\uFE0F&quot;, &quot;sassy_man&quot;: &quot;\u{1F481}\u200D\u2642\uFE0F&quot;, &quot;tipping_hand_woman&quot;: &quot;\u{1F481}\u200D\u2640\uFE0F&quot;, &quot;sassy_woman&quot;: &quot;\u{1F481}\u200D\u2640\uFE0F&quot;, &quot;raising_hand&quot;: &quot;\u{1F64B}&quot;, &quot;raising_hand_man&quot;: &quot;\u{1F64B}\u200D\u2642\uFE0F&quot;, &quot;raising_hand_woman&quot;: &quot;\u{1F64B}\u200D\u2640\uFE0F&quot;, &quot;deaf_person&quot;: &quot;\u{1F9CF}&quot;, &quot;deaf_man&quot;: &quot;\u{1F9CF}\u200D\u2642\uFE0F&quot;, &quot;deaf_woman&quot;: &quot;\u{1F9CF}\u200D\u2640\uFE0F&quot;, &quot;bow&quot;: &quot;\u{1F647}&quot;, &quot;bowing_man&quot;: &quot;\u{1F647}\u200D\u2642\uFE0F&quot;, &quot;bowing_woman&quot;: &quot;\u{1F647}\u200D\u2640\uFE0F&quot;, &quot;facepalm&quot;: &quot;\u{1F926}&quot;, &quot;man_facepalming&quot;: &quot;\u{1F926}\u200D\u2642\uFE0F&quot;, &quot;woman_facepalming&quot;: &quot;\u{1F926}\u200D\u2640\uFE0F&quot;, &quot;shrug&quot;: &quot;\u{1F937}&quot;, &quot;man_shrugging&quot;: &quot;\u{1F937}\u200D\u2642\uFE0F&quot;, &quot;woman_shrugging&quot;: &quot;\u{1F937}\u200D\u2640\uFE0F&quot;, &quot;health_worker&quot;: &quot;\u{1F9D1}\u200D\u2695\uFE0F&quot;, &quot;man_health_worker&quot;: &quot;\u{1F468}\u200D\u2695\uFE0F&quot;, &quot;woman_health_worker&quot;: &quot;\u{1F469}\u200D\u2695\uFE0F&quot;, &quot;student&quot;: &quot;\u{1F9D1}\u200D\u{1F393}&quot;, &quot;man_student&quot;: &quot;\u{1F468}\u200D\u{1F393}&quot;, &quot;woman_student&quot;: &quot;\u{1F469}\u200D\u{1F393}&quot;, &quot;teacher&quot;: &quot;\u{1F9D1}\u200D\u{1F3EB}&quot;, &quot;man_teacher&quot;: &quot;\u{1F468}\u200D\u{1F3EB}&quot;, &quot;woman_teacher&quot;: &quot;\u{1F469}\u200D\u{1F3EB}&quot;, &quot;judge&quot;: &quot;\u{1F9D1}\u200D\u2696\uFE0F&quot;, &quot;man_judge&quot;: &quot;\u{1F468}\u200D\u2696\uFE0F&quot;, &quot;woman_judge&quot;: &quot;\u{1F469}\u200D\u2696\uFE0F&quot;, &quot;farmer&quot;: &quot;\u{1F9D1}\u200D\u{1F33E}&quot;, &quot;man_farmer&quot;: &quot;\u{1F468}\u200D\u{1F33E}&quot;, &quot;woman_farmer&quot;: &quot;\u{1F469}\u200D\u{1F33E}&quot;, &quot;cook&quot;: &quot;\u{1F9D1}\u200D\u{1F373}&quot;, &quot;man_cook&quot;: &quot;\u{1F468}\u200D\u{1F373}&quot;, &quot;woman_cook&quot;: &quot;\u{1F469}\u200D\u{1F373}&quot;, &quot;mechanic&quot;: &quot;\u{1F9D1}\u200D\u{1F527}&quot;, &quot;man_mechanic&quot;: &quot;\u{1F468}\u200D\u{1F527}&quot;, &quot;woman_mechanic&quot;: &quot;\u{1F469}\u200D\u{1F527}&quot;, &quot;factory_worker&quot;: &quot;\u{1F9D1}\u200D\u{1F3ED}&quot;, &quot;man_factory_worker&quot;: &quot;\u{1F468}\u200D\u{1F3ED}&quot;, &quot;woman_factory_worker&quot;: &quot;\u{1F469}\u200D\u{1F3ED}&quot;, &quot;office_worker&quot;: &quot;\u{1F9D1}\u200D\u{1F4BC}&quot;, &quot;man_office_worker&quot;: &quot;\u{1F468}\u200D\u{1F4BC}&quot;, &quot;woman_office_worker&quot;: &quot;\u{1F469}\u200D\u{1F4BC}&quot;, &quot;scientist&quot;: &quot;\u{1F9D1}\u200D\u{1F52C}&quot;, &quot;man_scientist&quot;: &quot;\u{1F468}\u200D\u{1F52C}&quot;, &quot;woman_scientist&quot;: &quot;\u{1F469}\u200D\u{1F52C}&quot;, &quot;technologist&quot;: &quot;\u{1F9D1}\u200D\u{1F4BB}&quot;, &quot;man_technologist&quot;: &quot;\u{1F468}\u200D\u{1F4BB}&quot;, &quot;woman_technologist&quot;: &quot;\u{1F469}\u200D\u{1F4BB}&quot;, &quot;singer&quot;: &quot;\u{1F9D1}\u200D\u{1F3A4}&quot;, &quot;man_singer&quot;: &quot;\u{1F468}\u200D\u{1F3A4}&quot;, &quot;woman_singer&quot;: &quot;\u{1F469}\u200D\u{1F3A4}&quot;, &quot;artist&quot;: &quot;\u{1F9D1}\u200D\u{1F3A8}&quot;, &quot;man_artist&quot;: &quot;\u{1F468}\u200D\u{1F3A8}&quot;, &quot;woman_artist&quot;: &quot;\u{1F469}\u200D\u{1F3A8}&quot;, &quot;pilot&quot;: &quot;\u{1F9D1}\u200D\u2708\uFE0F&quot;, &quot;man_pilot&quot;: &quot;\u{1F468}\u200D\u2708\uFE0F&quot;, &quot;woman_pilot&quot;: &quot;\u{1F469}\u200D\u2708\uFE0F&quot;, &quot;astronaut&quot;: &quot;\u{1F9D1}\u200D\u{1F680}&quot;, &quot;man_astronaut&quot;: &quot;\u{1F468}\u200D\u{1F680}&quot;, &quot;woman_astronaut&quot;: &quot;\u{1F469}\u200D\u{1F680}&quot;, &quot;firefighter&quot;: &quot;\u{1F9D1}\u200D\u{1F692}&quot;, &quot;man_firefighter&quot;: &quot;\u{1F468}\u200D\u{1F692}&quot;, &quot;woman_firefighter&quot;: &quot;\u{1F469}\u200D\u{1F692}&quot;, &quot;police_officer&quot;: &quot;\u{1F46E}&quot;, &quot;cop&quot;: &quot;\u{1F46E}&quot;, &quot;policeman&quot;: &quot;\u{1F46E}\u200D\u2642\uFE0F&quot;, &quot;policewoman&quot;: &quot;\u{1F46E}\u200D\u2640\uFE0F&quot;, &quot;detective&quot;: &quot;\u{1F575}\uFE0F&quot;, &quot;male_detective&quot;: &quot;\u{1F575}\uFE0F\u200D\u2642\uFE0F&quot;, &quot;female_detective&quot;: &quot;\u{1F575}\uFE0F\u200D\u2640\uFE0F&quot;, &quot;guard&quot;: &quot;\u{1F482}&quot;, &quot;guardsman&quot;: &quot;\u{1F482}\u200D\u2642\uFE0F&quot;, &quot;guardswoman&quot;: &quot;\u{1F482}\u200D\u2640\uFE0F&quot;, &quot;ninja&quot;: &quot;\u{1F977}&quot;, &quot;construction_worker&quot;: &quot;\u{1F477}&quot;, &quot;construction_worker_man&quot;: &quot;\u{1F477}\u200D\u2642\uFE0F&quot;, &quot;construction_worker_woman&quot;: &quot;\u{1F477}\u200D\u2640\uFE0F&quot;, &quot;prince&quot;: &quot;\u{1F934}&quot;, &quot;princess&quot;: &quot;\u{1F478}&quot;, &quot;person_with_turban&quot;: &quot;\u{1F473}&quot;, &quot;man_with_turban&quot;: &quot;\u{1F473}\u200D\u2642\uFE0F&quot;, &quot;woman_with_turban&quot;: &quot;\u{1F473}\u200D\u2640\uFE0F&quot;, &quot;man_with_gua_pi_mao&quot;: &quot;\u{1F472}&quot;, &quot;woman_with_headscarf&quot;: &quot;\u{1F9D5}&quot;, &quot;person_in_tuxedo&quot;: &quot;\u{1F935}&quot;, &quot;man_in_tuxedo&quot;: &quot;\u{1F935}\u200D\u2642\uFE0F&quot;, &quot;woman_in_tuxedo&quot;: &quot;\u{1F935}\u200D\u2640\uFE0F&quot;, &quot;person_with_veil&quot;: &quot;\u{1F470}&quot;, &quot;man_with_veil&quot;: &quot;\u{1F470}\u200D\u2642\uFE0F&quot;, &quot;woman_with_veil&quot;: &quot;\u{1F470}\u200D\u2640\uFE0F&quot;, &quot;bride_with_veil&quot;: &quot;\u{1F470}\u200D\u2640\uFE0F&quot;, &quot;pregnant_woman&quot;: &quot;\u{1F930}&quot;, &quot;breast_feeding&quot;: &quot;\u{1F931}&quot;, &quot;woman_feeding_baby&quot;: &quot;\u{1F469}\u200D\u{1F37C}&quot;, &quot;man_feeding_baby&quot;: &quot;\u{1F468}\u200D\u{1F37C}&quot;, &quot;person_feeding_baby&quot;: &quot;\u{1F9D1}\u200D\u{1F37C}&quot;, &quot;angel&quot;: &quot;\u{1F47C}&quot;, &quot;santa&quot;: &quot;\u{1F385}&quot;, &quot;mrs_claus&quot;: &quot;\u{1F936}&quot;, &quot;mx_claus&quot;: &quot;\u{1F9D1}\u200D\u{1F384}&quot;, &quot;superhero&quot;: &quot;\u{1F9B8}&quot;, &quot;superhero_man&quot;: &quot;\u{1F9B8}\u200D\u2642\uFE0F&quot;, &quot;superhero_woman&quot;: &quot;\u{1F9B8}\u200D\u2640\uFE0F&quot;, &quot;supervillain&quot;: &quot;\u{1F9B9}&quot;, &quot;supervillain_man&quot;: &quot;\u{1F9B9}\u200D\u2642\uFE0F&quot;, &quot;supervillain_woman&quot;: &quot;\u{1F9B9}\u200D\u2640\uFE0F&quot;, &quot;mage&quot;: &quot;\u{1F9D9}&quot;, &quot;mage_man&quot;: &quot;\u{1F9D9}\u200D\u2642\uFE0F&quot;, &quot;mage_woman&quot;: &quot;\u{1F9D9}\u200D\u2640\uFE0F&quot;, &quot;fairy&quot;: &quot;\u{1F9DA}&quot;, &quot;fairy_man&quot;: &quot;\u{1F9DA}\u200D\u2642\uFE0F&quot;, &quot;fairy_woman&quot;: &quot;\u{1F9DA}\u200D\u2640\uFE0F&quot;, &quot;vampire&quot;: &quot;\u{1F9DB}&quot;, &quot;vampire_man&quot;: &quot;\u{1F9DB}\u200D\u2642\uFE0F&quot;, &quot;vampire_woman&quot;: &quot;\u{1F9DB}\u200D\u2640\uFE0F&quot;, &quot;merperson&quot;: &quot;\u{1F9DC}&quot;, &quot;merman&quot;: &quot;\u{1F9DC}\u200D\u2642\uFE0F&quot;, &quot;mermaid&quot;: &quot;\u{1F9DC}\u200D\u2640\uFE0F&quot;, &quot;elf&quot;: &quot;\u{1F9DD}&quot;, &quot;elf_man&quot;: &quot;\u{1F9DD}\u200D\u2642\uFE0F&quot;, &quot;elf_woman&quot;: &quot;\u{1F9DD}\u200D\u2640\uFE0F&quot;, &quot;genie&quot;: &quot;\u{1F9DE}&quot;, &quot;genie_man&quot;: &quot;\u{1F9DE}\u200D\u2642\uFE0F&quot;, &quot;genie_woman&quot;: &quot;\u{1F9DE}\u200D\u2640\uFE0F&quot;, &quot;zombie&quot;: &quot;\u{1F9DF}&quot;, &quot;zombie_man&quot;: &quot;\u{1F9DF}\u200D\u2642\uFE0F&quot;, &quot;zombie_woman&quot;: &quot;\u{1F9DF}\u200D\u2640\uFE0F&quot;, &quot;massage&quot;: &quot;\u{1F486}&quot;, &quot;massage_man&quot;: &quot;\u{1F486}\u200D\u2642\uFE0F&quot;, &quot;massage_woman&quot;: &quot;\u{1F486}\u200D\u2640\uFE0F&quot;, &quot;haircut&quot;: &quot;\u{1F487}&quot;, &quot;haircut_man&quot;: &quot;\u{1F487}\u200D\u2642\uFE0F&quot;, &quot;haircut_woman&quot;: &quot;\u{1F487}\u200D\u2640\uFE0F&quot;, &quot;walking&quot;: &quot;\u{1F6B6}&quot;, &quot;walking_man&quot;: &quot;\u{1F6B6}\u200D\u2642\uFE0F&quot;, &quot;walking_woman&quot;: &quot;\u{1F6B6}\u200D\u2640\uFE0F&quot;, &quot;standing_person&quot;: &quot;\u{1F9CD}&quot;, &quot;standing_man&quot;: &quot;\u{1F9CD}\u200D\u2642\uFE0F&quot;, &quot;standing_woman&quot;: &quot;\u{1F9CD}\u200D\u2640\uFE0F&quot;, &quot;kneeling_person&quot;: &quot;\u{1F9CE}&quot;, &quot;kneeling_man&quot;: &quot;\u{1F9CE}\u200D\u2642\uFE0F&quot;, &quot;kneeling_woman&quot;: &quot;\u{1F9CE}\u200D\u2640\uFE0F&quot;, &quot;person_with_probing_cane&quot;: &quot;\u{1F9D1}\u200D\u{1F9AF}&quot;, &quot;man_with_probing_cane&quot;: &quot;\u{1F468}\u200D\u{1F9AF}&quot;, &quot;woman_with_probing_cane&quot;: &quot;\u{1F469}\u200D\u{1F9AF}&quot;, &quot;person_in_motorized_wheelchair&quot;: &quot;\u{1F9D1}\u200D\u{1F9BC}&quot;, &quot;man_in_motorized_wheelchair&quot;: &quot;\u{1F468}\u200D\u{1F9BC}&quot;, &quot;woman_in_motorized_wheelchair&quot;: &quot;\u{1F469}\u200D\u{1F9BC}&quot;, &quot;person_in_manual_wheelchair&quot;: &quot;\u{1F9D1}\u200D\u{1F9BD}&quot;, &quot;man_in_manual_wheelchair&quot;: &quot;\u{1F468}\u200D\u{1F9BD}&quot;, &quot;woman_in_manual_wheelchair&quot;: &quot;\u{1F469}\u200D\u{1F9BD}&quot;, &quot;runner&quot;: &quot;\u{1F3C3}&quot;, &quot;running&quot;: &quot;\u{1F3C3}&quot;, &quot;running_man&quot;: &quot;\u{1F3C3}\u200D\u2642\uFE0F&quot;, &quot;running_woman&quot;: &quot;\u{1F3C3}\u200D\u2640\uFE0F&quot;, &quot;woman_dancing&quot;: &quot;\u{1F483}&quot;, &quot;dancer&quot;: &quot;\u{1F483}&quot;, &quot;man_dancing&quot;: &quot;\u{1F57A}&quot;, &quot;business_suit_levitating&quot;: &quot;\u{1F574}\uFE0F&quot;, &quot;dancers&quot;: &quot;\u{1F46F}&quot;, &quot;dancing_men&quot;: &quot;\u{1F46F}\u200D\u2642\uFE0F&quot;, &quot;dancing_women&quot;: &quot;\u{1F46F}\u200D\u2640\uFE0F&quot;, &quot;sauna_person&quot;: &quot;\u{1F9D6}&quot;, &quot;sauna_man&quot;: &quot;\u{1F9D6}\u200D\u2642\uFE0F&quot;, &quot;sauna_woman&quot;: &quot;\u{1F9D6}\u200D\u2640\uFE0F&quot;, &quot;climbing&quot;: &quot;\u{1F9D7}&quot;, &quot;climbing_man&quot;: &quot;\u{1F9D7}\u200D\u2642\uFE0F&quot;, &quot;climbing_woman&quot;: &quot;\u{1F9D7}\u200D\u2640\uFE0F&quot;, &quot;person_fencing&quot;: &quot;\u{1F93A}&quot;, &quot;horse_racing&quot;: &quot;\u{1F3C7}&quot;, &quot;skier&quot;: &quot;\u26F7\uFE0F&quot;, &quot;snowboarder&quot;: &quot;\u{1F3C2}&quot;, &quot;golfing&quot;: &quot;\u{1F3CC}\uFE0F&quot;, &quot;golfing_man&quot;: &quot;\u{1F3CC}\uFE0F\u200D\u2642\uFE0F&quot;, &quot;golfing_woman&quot;: &quot;\u{1F3CC}\uFE0F\u200D\u2640\uFE0F&quot;, &quot;surfer&quot;: &quot;\u{1F3C4}&quot;, &quot;surfing_man&quot;: &quot;\u{1F3C4}\u200D\u2642\uFE0F&quot;, &quot;surfing_woman&quot;: &quot;\u{1F3C4}\u200D\u2640\uFE0F&quot;, &quot;rowboat&quot;: &quot;\u{1F6A3}&quot;, &quot;rowing_man&quot;: &quot;\u{1F6A3}\u200D\u2642\uFE0F&quot;, &quot;rowing_woman&quot;: &quot;\u{1F6A3}\u200D\u2640\uFE0F&quot;, &quot;swimmer&quot;: &quot;\u{1F3CA}&quot;, &quot;swimming_man&quot;: &quot;\u{1F3CA}\u200D\u2642\uFE0F&quot;, &quot;swimming_woman&quot;: &quot;\u{1F3CA}\u200D\u2640\uFE0F&quot;, &quot;bouncing_ball_person&quot;: &quot;\u26F9\uFE0F&quot;, &quot;bouncing_ball_man&quot;: &quot;\u26F9\uFE0F\u200D\u2642\uFE0F&quot;, &quot;basketball_man&quot;: &quot;\u26F9\uFE0F\u200D\u2642\uFE0F&quot;, &quot;bouncing_ball_woman&quot;: &quot;\u26F9\uFE0F\u200D\u2640\uFE0F&quot;, &quot;basketball_woman&quot;: &quot;\u26F9\uFE0F\u200D\u2640\uFE0F&quot;, &quot;weight_lifting&quot;: &quot;\u{1F3CB}\uFE0F&quot;, &quot;weight_lifting_man&quot;: &quot;\u{1F3CB}\uFE0F\u200D\u2642\uFE0F&quot;, &quot;weight_lifting_woman&quot;: &quot;\u{1F3CB}\uFE0F\u200D\u2640\uFE0F&quot;, &quot;bicyclist&quot;: &quot;\u{1F6B4}&quot;, &quot;biking_man&quot;: &quot;\u{1F6B4}\u200D\u2642\uFE0F&quot;, &quot;biking_woman&quot;: &quot;\u{1F6B4}\u200D\u2640\uFE0F&quot;, &quot;mountain_bicyclist&quot;: &quot;\u{1F6B5}&quot;, &quot;mountain_biking_man&quot;: &quot;\u{1F6B5}\u200D\u2642\uFE0F&quot;, &quot;mountain_biking_woman&quot;: &quot;\u{1F6B5}\u200D\u2640\uFE0F&quot;, &quot;cartwheeling&quot;: &quot;\u{1F938}&quot;, &quot;man_cartwheeling&quot;: &quot;\u{1F938}\u200D\u2642\uFE0F&quot;, &quot;woman_cartwheeling&quot;: &quot;\u{1F938}\u200D\u2640\uFE0F&quot;, &quot;wrestling&quot;: &quot;\u{1F93C}&quot;, &quot;men_wrestling&quot;: &quot;\u{1F93C}\u200D\u2642\uFE0F&quot;, &quot;women_wrestling&quot;: &quot;\u{1F93C}\u200D\u2640\uFE0F&quot;, &quot;water_polo&quot;: &quot;\u{1F93D}&quot;, &quot;man_playing_water_polo&quot;: &quot;\u{1F93D}\u200D\u2642\uFE0F&quot;, &quot;woman_playing_water_polo&quot;: &quot;\u{1F93D}\u200D\u2640\uFE0F&quot;, &quot;handball_person&quot;: &quot;\u{1F93E}&quot;, &quot;man_playing_handball&quot;: &quot;\u{1F93E}\u200D\u2642\uFE0F&quot;, &quot;woman_playing_handball&quot;: &quot;\u{1F93E}\u200D\u2640\uFE0F&quot;, &quot;juggling_person&quot;: &quot;\u{1F939}&quot;, &quot;man_juggling&quot;: &quot;\u{1F939}\u200D\u2642\uFE0F&quot;, &quot;woman_juggling&quot;: &quot;\u{1F939}\u200D\u2640\uFE0F&quot;, &quot;lotus_position&quot;: &quot;\u{1F9D8}&quot;, &quot;lotus_position_man&quot;: &quot;\u{1F9D8}\u200D\u2642\uFE0F&quot;, &quot;lotus_position_woman&quot;: &quot;\u{1F9D8}\u200D\u2640\uFE0F&quot;, &quot;bath&quot;: &quot;\u{1F6C0}&quot;, &quot;sleeping_bed&quot;: &quot;\u{1F6CC}&quot;, &quot;people_holding_hands&quot;: &quot;\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}&quot;, &quot;two_women_holding_hands&quot;: &quot;\u{1F46D}&quot;, &quot;couple&quot;: &quot;\u{1F46B}&quot;, &quot;two_men_holding_hands&quot;: &quot;\u{1F46C}&quot;, &quot;couplekiss&quot;: &quot;\u{1F48F}&quot;, &quot;couplekiss_man_woman&quot;: &quot;\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}&quot;, &quot;couplekiss_man_man&quot;: &quot;\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}&quot;, &quot;couplekiss_woman_woman&quot;: &quot;\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}&quot;, &quot;couple_with_heart&quot;: &quot;\u{1F491}&quot;, &quot;couple_with_heart_woman_man&quot;: &quot;\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}&quot;, &quot;couple_with_heart_man_man&quot;: &quot;\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}&quot;, &quot;couple_with_heart_woman_woman&quot;: &quot;\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}&quot;, &quot;family&quot;: &quot;\u{1F46A}&quot;, &quot;family_man_woman_boy&quot;: &quot;\u{1F468}\u200D\u{1F469}\u200D\u{1F466}&quot;, &quot;family_man_woman_girl&quot;: &quot;\u{1F468}\u200D\u{1F469}\u200D\u{1F467}&quot;, &quot;family_man_woman_girl_boy&quot;: &quot;\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}&quot;, &quot;family_man_woman_boy_boy&quot;: &quot;\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}&quot;, &quot;family_man_woman_girl_girl&quot;: &quot;\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}&quot;, &quot;family_man_man_boy&quot;: &quot;\u{1F468}\u200D\u{1F468}\u200D\u{1F466}&quot;, &quot;family_man_man_girl&quot;: &quot;\u{1F468}\u200D\u{1F468}\u200D\u{1F467}&quot;, &quot;family_man_man_girl_boy&quot;: &quot;\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}&quot;, &quot;family_man_man_boy_boy&quot;: &quot;\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}&quot;, &quot;family_man_man_girl_girl&quot;: &quot;\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}&quot;, &quot;family_woman_woman_boy&quot;: &quot;\u{1F469}\u200D\u{1F469}\u200D\u{1F466}&quot;, &quot;family_woman_woman_girl&quot;: &quot;\u{1F469}\u200D\u{1F469}\u200D\u{1F467}&quot;, &quot;family_woman_woman_girl_boy&quot;: &quot;\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}&quot;, &quot;family_woman_woman_boy_boy&quot;: &quot;\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}&quot;, &quot;family_woman_woman_girl_girl&quot;: &quot;\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}&quot;, &quot;family_man_boy&quot;: &quot;\u{1F468}\u200D\u{1F466}&quot;, &quot;family_man_boy_boy&quot;: &quot;\u{1F468}\u200D\u{1F466}\u200D\u{1F466}&quot;, &quot;family_man_girl&quot;: &quot;\u{1F468}\u200D\u{1F467}&quot;, &quot;family_man_girl_boy&quot;: &quot;\u{1F468}\u200D\u{1F467}\u200D\u{1F466}&quot;, &quot;family_man_girl_girl&quot;: &quot;\u{1F468}\u200D\u{1F467}\u200D\u{1F467}&quot;, &quot;family_woman_boy&quot;: &quot;\u{1F469}\u200D\u{1F466}&quot;, &quot;family_woman_boy_boy&quot;: &quot;\u{1F469}\u200D\u{1F466}\u200D\u{1F466}&quot;, &quot;family_woman_girl&quot;: &quot;\u{1F469}\u200D\u{1F467}&quot;, &quot;family_woman_girl_boy&quot;: &quot;\u{1F469}\u200D\u{1F467}\u200D\u{1F466}&quot;, &quot;family_woman_girl_girl&quot;: &quot;\u{1F469}\u200D\u{1F467}\u200D\u{1F467}&quot;, &quot;speaking_head&quot;: &quot;\u{1F5E3}\uFE0F&quot;, &quot;bust_in_silhouette&quot;: &quot;\u{1F464}&quot;, &quot;busts_in_silhouette&quot;: &quot;\u{1F465}&quot;, &quot;people_hugging&quot;: &quot;\u{1FAC2}&quot;, &quot;footprints&quot;: &quot;\u{1F463}&quot;, &quot;monkey_face&quot;: &quot;\u{1F435}&quot;, &quot;monkey&quot;: &quot;\u{1F412}&quot;, &quot;gorilla&quot;: &quot;\u{1F98D}&quot;, &quot;orangutan&quot;: &quot;\u{1F9A7}&quot;, &quot;dog&quot;: &quot;\u{1F436}&quot;, &quot;dog2&quot;: &quot;\u{1F415}&quot;, &quot;guide_dog&quot;: &quot;\u{1F9AE}&quot;, &quot;service_dog&quot;: &quot;\u{1F415}\u200D\u{1F9BA}&quot;, &quot;poodle&quot;: &quot;\u{1F429}&quot;, &quot;wolf&quot;: &quot;\u{1F43A}&quot;, &quot;fox_face&quot;: &quot;\u{1F98A}&quot;, &quot;raccoon&quot;: &quot;\u{1F99D}&quot;, &quot;cat&quot;: &quot;\u{1F431}&quot;, &quot;cat2&quot;: &quot;\u{1F408}&quot;, &quot;black_cat&quot;: &quot;\u{1F408}\u200D\u2B1B&quot;, &quot;lion&quot;: &quot;\u{1F981}&quot;, &quot;tiger&quot;: &quot;\u{1F42F}&quot;, &quot;tiger2&quot;: &quot;\u{1F405}&quot;, &quot;leopard&quot;: &quot;\u{1F406}&quot;, &quot;horse&quot;: &quot;\u{1F434}&quot;, &quot;racehorse&quot;: &quot;\u{1F40E}&quot;, &quot;unicorn&quot;: &quot;\u{1F984}&quot;, &quot;zebra&quot;: &quot;\u{1F993}&quot;, &quot;deer&quot;: &quot;\u{1F98C}&quot;, &quot;bison&quot;: &quot;\u{1F9AC}&quot;, &quot;cow&quot;: &quot;\u{1F42E}&quot;, &quot;ox&quot;: &quot;\u{1F402}&quot;, &quot;water_buffalo&quot;: &quot;\u{1F403}&quot;, &quot;cow2&quot;: &quot;\u{1F404}&quot;, &quot;pig&quot;: &quot;\u{1F437}&quot;, &quot;pig2&quot;: &quot;\u{1F416}&quot;, &quot;boar&quot;: &quot;\u{1F417}&quot;, &quot;pig_nose&quot;: &quot;\u{1F43D}&quot;, &quot;ram&quot;: &quot;\u{1F40F}&quot;, &quot;sheep&quot;: &quot;\u{1F411}&quot;, &quot;goat&quot;: &quot;\u{1F410}&quot;, &quot;dromedary_camel&quot;: &quot;\u{1F42A}&quot;, &quot;camel&quot;: &quot;\u{1F42B}&quot;, &quot;llama&quot;: &quot;\u{1F999}&quot;, &quot;giraffe&quot;: &quot;\u{1F992}&quot;, &quot;elephant&quot;: &quot;\u{1F418}&quot;, &quot;mammoth&quot;: &quot;\u{1F9A3}&quot;, &quot;rhinoceros&quot;: &quot;\u{1F98F}&quot;, &quot;hippopotamus&quot;: &quot;\u{1F99B}&quot;, &quot;mouse&quot;: &quot;\u{1F42D}&quot;, &quot;mouse2&quot;: &quot;\u{1F401}&quot;, &quot;rat&quot;: &quot;\u{1F400}&quot;, &quot;hamster&quot;: &quot;\u{1F439}&quot;, &quot;rabbit&quot;: &quot;\u{1F430}&quot;, &quot;rabbit2&quot;: &quot;\u{1F407}&quot;, &quot;chipmunk&quot;: &quot;\u{1F43F}\uFE0F&quot;, &quot;beaver&quot;: &quot;\u{1F9AB}&quot;, &quot;hedgehog&quot;: &quot;\u{1F994}&quot;, &quot;bat&quot;: &quot;\u{1F987}&quot;, &quot;bear&quot;: &quot;\u{1F43B}&quot;, &quot;polar_bear&quot;: &quot;\u{1F43B}\u200D\u2744\uFE0F&quot;, &quot;koala&quot;: &quot;\u{1F428}&quot;, &quot;panda_face&quot;: &quot;\u{1F43C}&quot;, &quot;sloth&quot;: &quot;\u{1F9A5}&quot;, &quot;otter&quot;: &quot;\u{1F9A6}&quot;, &quot;skunk&quot;: &quot;\u{1F9A8}&quot;, &quot;kangaroo&quot;: &quot;\u{1F998}&quot;, &quot;badger&quot;: &quot;\u{1F9A1}&quot;, &quot;feet&quot;: &quot;\u{1F43E}&quot;, &quot;paw_prints&quot;: &quot;\u{1F43E}&quot;, &quot;turkey&quot;: &quot;\u{1F983}&quot;, &quot;chicken&quot;: &quot;\u{1F414}&quot;, &quot;rooster&quot;: &quot;\u{1F413}&quot;, &quot;hatching_chick&quot;: &quot;\u{1F423}&quot;, &quot;baby_chick&quot;: &quot;\u{1F424}&quot;, &quot;hatched_chick&quot;: &quot;\u{1F425}&quot;, &quot;bird&quot;: &quot;\u{1F426}&quot;, &quot;penguin&quot;: &quot;\u{1F427}&quot;, &quot;dove&quot;: &quot;\u{1F54A}\uFE0F&quot;, &quot;eagle&quot;: &quot;\u{1F985}&quot;, &quot;duck&quot;: &quot;\u{1F986}&quot;, &quot;swan&quot;: &quot;\u{1F9A2}&quot;, &quot;owl&quot;: &quot;\u{1F989}&quot;, &quot;dodo&quot;: &quot;\u{1F9A4}&quot;, &quot;feather&quot;: &quot;\u{1FAB6}&quot;, &quot;flamingo&quot;: &quot;\u{1F9A9}&quot;, &quot;peacock&quot;: &quot;\u{1F99A}&quot;, &quot;parrot&quot;: &quot;\u{1F99C}&quot;, &quot;frog&quot;: &quot;\u{1F438}&quot;, &quot;crocodile&quot;: &quot;\u{1F40A}&quot;, &quot;turtle&quot;: &quot;\u{1F422}&quot;, &quot;lizard&quot;: &quot;\u{1F98E}&quot;, &quot;snake&quot;: &quot;\u{1F40D}&quot;, &quot;dragon_face&quot;: &quot;\u{1F432}&quot;, &quot;dragon&quot;: &quot;\u{1F409}&quot;, &quot;sauropod&quot;: &quot;\u{1F995}&quot;, &quot;t-rex&quot;: &quot;\u{1F996}&quot;, &quot;whale&quot;: &quot;\u{1F433}&quot;, &quot;whale2&quot;: &quot;\u{1F40B}&quot;, &quot;dolphin&quot;: &quot;\u{1F42C}&quot;, &quot;flipper&quot;: &quot;\u{1F42C}&quot;, &quot;seal&quot;: &quot;\u{1F9AD}&quot;, &quot;fish&quot;: &quot;\u{1F41F}&quot;, &quot;tropical_fish&quot;: &quot;\u{1F420}&quot;, &quot;blowfish&quot;: &quot;\u{1F421}&quot;, &quot;shark&quot;: &quot;\u{1F988}&quot;, &quot;octopus&quot;: &quot;\u{1F419}&quot;, &quot;shell&quot;: &quot;\u{1F41A}&quot;, &quot;snail&quot;: &quot;\u{1F40C}&quot;, &quot;butterfly&quot;: &quot;\u{1F98B}&quot;, &quot;bug&quot;: &quot;\u{1F41B}&quot;, &quot;ant&quot;: &quot;\u{1F41C}&quot;, &quot;bee&quot;: &quot;\u{1F41D}&quot;, &quot;honeybee&quot;: &quot;\u{1F41D}&quot;, &quot;beetle&quot;: &quot;\u{1FAB2}&quot;, &quot;lady_beetle&quot;: &quot;\u{1F41E}&quot;, &quot;cricket&quot;: &quot;\u{1F997}&quot;, &quot;cockroach&quot;: &quot;\u{1FAB3}&quot;, &quot;spider&quot;: &quot;\u{1F577}\uFE0F&quot;, &quot;spider_web&quot;: &quot;\u{1F578}\uFE0F&quot;, &quot;scorpion&quot;: &quot;\u{1F982}&quot;, &quot;mosquito&quot;: &quot;\u{1F99F}&quot;, &quot;fly&quot;: &quot;\u{1FAB0}&quot;, &quot;worm&quot;: &quot;\u{1FAB1}&quot;, &quot;microbe&quot;: &quot;\u{1F9A0}&quot;, &quot;bouquet&quot;: &quot;\u{1F490}&quot;, &quot;cherry_blossom&quot;: &quot;\u{1F338}&quot;, &quot;white_flower&quot;: &quot;\u{1F4AE}&quot;, &quot;rosette&quot;: &quot;\u{1F3F5}\uFE0F&quot;, &quot;rose&quot;: &quot;\u{1F339}&quot;, &quot;wilted_flower&quot;: &quot;\u{1F940}&quot;, &quot;hibiscus&quot;: &quot;\u{1F33A}&quot;, &quot;sunflower&quot;: &quot;\u{1F33B}&quot;, &quot;blossom&quot;: &quot;\u{1F33C}&quot;, &quot;tulip&quot;: &quot;\u{1F337}&quot;, &quot;seedling&quot;: &quot;\u{1F331}&quot;, &quot;potted_plant&quot;: &quot;\u{1FAB4}&quot;, &quot;evergreen_tree&quot;: &quot;\u{1F332}&quot;, &quot;deciduous_tree&quot;: &quot;\u{1F333}&quot;, &quot;palm_tree&quot;: &quot;\u{1F334}&quot;, &quot;cactus&quot;: &quot;\u{1F335}&quot;, &quot;ear_of_rice&quot;: &quot;\u{1F33E}&quot;, &quot;herb&quot;: &quot;\u{1F33F}&quot;, &quot;shamrock&quot;: &quot;\u2618\uFE0F&quot;, &quot;four_leaf_clover&quot;: &quot;\u{1F340}&quot;, &quot;maple_leaf&quot;: &quot;\u{1F341}&quot;, &quot;fallen_leaf&quot;: &quot;\u{1F342}&quot;, &quot;leaves&quot;: &quot;\u{1F343}&quot;, &quot;grapes&quot;: &quot;\u{1F347}&quot;, &quot;melon&quot;: &quot;\u{1F348}&quot;, &quot;watermelon&quot;: &quot;\u{1F349}&quot;, &quot;tangerine&quot;: &quot;\u{1F34A}&quot;, &quot;orange&quot;: &quot;\u{1F34A}&quot;, &quot;mandarin&quot;: &quot;\u{1F34A}&quot;, &quot;lemon&quot;: &quot;\u{1F34B}&quot;, &quot;banana&quot;: &quot;\u{1F34C}&quot;, &quot;pineapple&quot;: &quot;\u{1F34D}&quot;, &quot;mango&quot;: &quot;\u{1F96D}&quot;, &quot;apple&quot;: &quot;\u{1F34E}&quot;, &quot;green_apple&quot;: &quot;\u{1F34F}&quot;, &quot;pear&quot;: &quot;\u{1F350}&quot;, &quot;peach&quot;: &quot;\u{1F351}&quot;, &quot;cherries&quot;: &quot;\u{1F352}&quot;, &quot;strawberry&quot;: &quot;\u{1F353}&quot;, &quot;blueberries&quot;: &quot;\u{1FAD0}&quot;, &quot;kiwi_fruit&quot;: &quot;\u{1F95D}&quot;, &quot;tomato&quot;: &quot;\u{1F345}&quot;, &quot;olive&quot;: &quot;\u{1FAD2}&quot;, &quot;coconut&quot;: &quot;\u{1F965}&quot;, &quot;avocado&quot;: &quot;\u{1F951}&quot;, &quot;eggplant&quot;: &quot;\u{1F346}&quot;, &quot;potato&quot;: &quot;\u{1F954}&quot;, &quot;carrot&quot;: &quot;\u{1F955}&quot;, &quot;corn&quot;: &quot;\u{1F33D}&quot;, &quot;hot_pepper&quot;: &quot;\u{1F336}\uFE0F&quot;, &quot;bell_pepper&quot;: &quot;\u{1FAD1}&quot;, &quot;cucumber&quot;: &quot;\u{1F952}&quot;, &quot;leafy_green&quot;: &quot;\u{1F96C}&quot;, &quot;broccoli&quot;: &quot;\u{1F966}&quot;, &quot;garlic&quot;: &quot;\u{1F9C4}&quot;, &quot;onion&quot;: &quot;\u{1F9C5}&quot;, &quot;mushroom&quot;: &quot;\u{1F344}&quot;, &quot;peanuts&quot;: &quot;\u{1F95C}&quot;, &quot;chestnut&quot;: &quot;\u{1F330}&quot;, &quot;bread&quot;: &quot;\u{1F35E}&quot;, &quot;croissant&quot;: &quot;\u{1F950}&quot;, &quot;baguette_bread&quot;: &quot;\u{1F956}&quot;, &quot;flatbread&quot;: &quot;\u{1FAD3}&quot;, &quot;pretzel&quot;: &quot;\u{1F968}&quot;, &quot;bagel&quot;: &quot;\u{1F96F}&quot;, &quot;pancakes&quot;: &quot;\u{1F95E}&quot;, &quot;waffle&quot;: &quot;\u{1F9C7}&quot;, &quot;cheese&quot;: &quot;\u{1F9C0}&quot;, &quot;meat_on_bone&quot;: &quot;\u{1F356}&quot;, &quot;poultry_leg&quot;: &quot;\u{1F357}&quot;, &quot;cut_of_meat&quot;: &quot;\u{1F969}&quot;, &quot;bacon&quot;: &quot;\u{1F953}&quot;, &quot;hamburger&quot;: &quot;\u{1F354}&quot;, &quot;fries&quot;: &quot;\u{1F35F}&quot;, &quot;pizza&quot;: &quot;\u{1F355}&quot;, &quot;hotdog&quot;: &quot;\u{1F32D}&quot;, &quot;sandwich&quot;: &quot;\u{1F96A}&quot;, &quot;taco&quot;: &quot;\u{1F32E}&quot;, &quot;burrito&quot;: &quot;\u{1F32F}&quot;, &quot;tamale&quot;: &quot;\u{1FAD4}&quot;, &quot;stuffed_flatbread&quot;: &quot;\u{1F959}&quot;, &quot;falafel&quot;: &quot;\u{1F9C6}&quot;, &quot;egg&quot;: &quot;\u{1F95A}&quot;, &quot;fried_egg&quot;: &quot;\u{1F373}&quot;, &quot;shallow_pan_of_food&quot;: &quot;\u{1F958}&quot;, &quot;stew&quot;: &quot;\u{1F372}&quot;, &quot;fondue&quot;: &quot;\u{1FAD5}&quot;, &quot;bowl_with_spoon&quot;: &quot;\u{1F963}&quot;, &quot;green_salad&quot;: &quot;\u{1F957}&quot;, &quot;popcorn&quot;: &quot;\u{1F37F}&quot;, &quot;butter&quot;: &quot;\u{1F9C8}&quot;, &quot;salt&quot;: &quot;\u{1F9C2}&quot;, &quot;canned_food&quot;: &quot;\u{1F96B}&quot;, &quot;bento&quot;: &quot;\u{1F371}&quot;, &quot;rice_cracker&quot;: &quot;\u{1F358}&quot;, &quot;rice_ball&quot;: &quot;\u{1F359}&quot;, &quot;rice&quot;: &quot;\u{1F35A}&quot;, &quot;curry&quot;: &quot;\u{1F35B}&quot;, &quot;ramen&quot;: &quot;\u{1F35C}&quot;, &quot;spaghetti&quot;: &quot;\u{1F35D}&quot;, &quot;sweet_potato&quot;: &quot;\u{1F360}&quot;, &quot;oden&quot;: &quot;\u{1F362}&quot;, &quot;sushi&quot;: &quot;\u{1F363}&quot;, &quot;fried_shrimp&quot;: &quot;\u{1F364}&quot;, &quot;fish_cake&quot;: &quot;\u{1F365}&quot;, &quot;moon_cake&quot;: &quot;\u{1F96E}&quot;, &quot;dango&quot;: &quot;\u{1F361}&quot;, &quot;dumpling&quot;: &quot;\u{1F95F}&quot;, &quot;fortune_cookie&quot;: &quot;\u{1F960}&quot;, &quot;takeout_box&quot;: &quot;\u{1F961}&quot;, &quot;crab&quot;: &quot;\u{1F980}&quot;, &quot;lobster&quot;: &quot;\u{1F99E}&quot;, &quot;shrimp&quot;: &quot;\u{1F990}&quot;, &quot;squid&quot;: &quot;\u{1F991}&quot;, &quot;oyster&quot;: &quot;\u{1F9AA}&quot;, &quot;icecream&quot;: &quot;\u{1F366}&quot;, &quot;shaved_ice&quot;: &quot;\u{1F367}&quot;, &quot;ice_cream&quot;: &quot;\u{1F368}&quot;, &quot;doughnut&quot;: &quot;\u{1F369}&quot;, &quot;cookie&quot;: &quot;\u{1F36A}&quot;, &quot;birthday&quot;: &quot;\u{1F382}&quot;, &quot;cake&quot;: &quot;\u{1F370}&quot;, &quot;cupcake&quot;: &quot;\u{1F9C1}&quot;, &quot;pie&quot;: &quot;\u{1F967}&quot;, &quot;chocolate_bar&quot;: &quot;\u{1F36B}&quot;, &quot;candy&quot;: &quot;\u{1F36C}&quot;, &quot;lollipop&quot;: &quot;\u{1F36D}&quot;, &quot;custard&quot;: &quot;\u{1F36E}&quot;, &quot;honey_pot&quot;: &quot;\u{1F36F}&quot;, &quot;baby_bottle&quot;: &quot;\u{1F37C}&quot;, &quot;milk_glass&quot;: &quot;\u{1F95B}&quot;, &quot;coffee&quot;: &quot;\u2615&quot;, &quot;teapot&quot;: &quot;\u{1FAD6}&quot;, &quot;tea&quot;: &quot;\u{1F375}&quot;, &quot;sake&quot;: &quot;\u{1F376}&quot;, &quot;champagne&quot;: &quot;\u{1F37E}&quot;, &quot;wine_glass&quot;: &quot;\u{1F377}&quot;, &quot;cocktail&quot;: &quot;\u{1F378}&quot;, &quot;tropical_drink&quot;: &quot;\u{1F379}&quot;, &quot;beer&quot;: &quot;\u{1F37A}&quot;, &quot;beers&quot;: &quot;\u{1F37B}&quot;, &quot;clinking_glasses&quot;: &quot;\u{1F942}&quot;, &quot;tumbler_glass&quot;: &quot;\u{1F943}&quot;, &quot;cup_with_straw&quot;: &quot;\u{1F964}&quot;, &quot;bubble_tea&quot;: &quot;\u{1F9CB}&quot;, &quot;beverage_box&quot;: &quot;\u{1F9C3}&quot;, &quot;mate&quot;: &quot;\u{1F9C9}&quot;, &quot;ice_cube&quot;: &quot;\u{1F9CA}&quot;, &quot;chopsticks&quot;: &quot;\u{1F962}&quot;, &quot;plate_with_cutlery&quot;: &quot;\u{1F37D}\uFE0F&quot;, &quot;fork_and_knife&quot;: &quot;\u{1F374}&quot;, &quot;spoon&quot;: &quot;\u{1F944}&quot;, &quot;hocho&quot;: &quot;\u{1F52A}&quot;, &quot;knife&quot;: &quot;\u{1F52A}&quot;, &quot;amphora&quot;: &quot;\u{1F3FA}&quot;, &quot;earth_africa&quot;: &quot;\u{1F30D}&quot;, &quot;earth_americas&quot;: &quot;\u{1F30E}&quot;, &quot;earth_asia&quot;: &quot;\u{1F30F}&quot;, &quot;globe_with_meridians&quot;: &quot;\u{1F310}&quot;, &quot;world_map&quot;: &quot;\u{1F5FA}\uFE0F&quot;, &quot;japan&quot;: &quot;\u{1F5FE}&quot;, &quot;compass&quot;: &quot;\u{1F9ED}&quot;, &quot;mountain_snow&quot;: &quot;\u{1F3D4}\uFE0F&quot;, &quot;mountain&quot;: &quot;\u26F0\uFE0F&quot;, &quot;volcano&quot;: &quot;\u{1F30B}&quot;, &quot;mount_fuji&quot;: &quot;\u{1F5FB}&quot;, &quot;camping&quot;: &quot;\u{1F3D5}\uFE0F&quot;, &quot;beach_umbrella&quot;: &quot;\u{1F3D6}\uFE0F&quot;, &quot;desert&quot;: &quot;\u{1F3DC}\uFE0F&quot;, &quot;desert_island&quot;: &quot;\u{1F3DD}\uFE0F&quot;, &quot;national_park&quot;: &quot;\u{1F3DE}\uFE0F&quot;, &quot;stadium&quot;: &quot;\u{1F3DF}\uFE0F&quot;, &quot;classical_building&quot;: &quot;\u{1F3DB}\uFE0F&quot;, &quot;building_construction&quot;: &quot;\u{1F3D7}\uFE0F&quot;, &quot;bricks&quot;: &quot;\u{1F9F1}&quot;, &quot;rock&quot;: &quot;\u{1FAA8}&quot;, &quot;wood&quot;: &quot;\u{1FAB5}&quot;, &quot;hut&quot;: &quot;\u{1F6D6}&quot;, &quot;houses&quot;: &quot;\u{1F3D8}\uFE0F&quot;, &quot;derelict_house&quot;: &quot;\u{1F3DA}\uFE0F&quot;, &quot;house&quot;: &quot;\u{1F3E0}&quot;, &quot;house_with_garden&quot;: &quot;\u{1F3E1}&quot;, &quot;office&quot;: &quot;\u{1F3E2}&quot;, &quot;post_office&quot;: &quot;\u{1F3E3}&quot;, &quot;european_post_office&quot;: &quot;\u{1F3E4}&quot;, &quot;hospital&quot;: &quot;\u{1F3E5}&quot;, &quot;bank&quot;: &quot;\u{1F3E6}&quot;, &quot;hotel&quot;: &quot;\u{1F3E8}&quot;, &quot;love_hotel&quot;: &quot;\u{1F3E9}&quot;, &quot;convenience_store&quot;: &quot;\u{1F3EA}&quot;, &quot;school&quot;: &quot;\u{1F3EB}&quot;, &quot;department_store&quot;: &quot;\u{1F3EC}&quot;, &quot;factory&quot;: &quot;\u{1F3ED}&quot;, &quot;japanese_castle&quot;: &quot;\u{1F3EF}&quot;, &quot;european_castle&quot;: &quot;\u{1F3F0}&quot;, &quot;wedding&quot;: &quot;\u{1F492}&quot;, &quot;tokyo_tower&quot;: &quot;\u{1F5FC}&quot;, &quot;statue_of_liberty&quot;: &quot;\u{1F5FD}&quot;, &quot;church&quot;: &quot;\u26EA&quot;, &quot;mosque&quot;: &quot;\u{1F54C}&quot;, &quot;hindu_temple&quot;: &quot;\u{1F6D5}&quot;, &quot;synagogue&quot;: &quot;\u{1F54D}&quot;, &quot;shinto_shrine&quot;: &quot;\u26E9\uFE0F&quot;, &quot;kaaba&quot;: &quot;\u{1F54B}&quot;, &quot;fountain&quot;: &quot;\u26F2&quot;, &quot;tent&quot;: &quot;\u26FA&quot;, &quot;foggy&quot;: &quot;\u{1F301}&quot;, &quot;night_with_stars&quot;: &quot;\u{1F303}&quot;, &quot;cityscape&quot;: &quot;\u{1F3D9}\uFE0F&quot;, &quot;sunrise_over_mountains&quot;: &quot;\u{1F304}&quot;, &quot;sunrise&quot;: &quot;\u{1F305}&quot;, &quot;city_sunset&quot;: &quot;\u{1F306}&quot;, &quot;city_sunrise&quot;: &quot;\u{1F307}&quot;, &quot;bridge_at_night&quot;: &quot;\u{1F309}&quot;, &quot;hotsprings&quot;: &quot;\u2668\uFE0F&quot;, &quot;carousel_horse&quot;: &quot;\u{1F3A0}&quot;, &quot;ferris_wheel&quot;: &quot;\u{1F3A1}&quot;, &quot;roller_coaster&quot;: &quot;\u{1F3A2}&quot;, &quot;barber&quot;: &quot;\u{1F488}&quot;, &quot;circus_tent&quot;: &quot;\u{1F3AA}&quot;, &quot;steam_locomotive&quot;: &quot;\u{1F682}&quot;, &quot;railway_car&quot;: &quot;\u{1F683}&quot;, &quot;bullettrain_side&quot;: &quot;\u{1F684}&quot;, &quot;bullettrain_front&quot;: &quot;\u{1F685}&quot;, &quot;train2&quot;: &quot;\u{1F686}&quot;, &quot;metro&quot;: &quot;\u{1F687}&quot;, &quot;light_rail&quot;: &quot;\u{1F688}&quot;, &quot;station&quot;: &quot;\u{1F689}&quot;, &quot;tram&quot;: &quot;\u{1F68A}&quot;, &quot;monorail&quot;: &quot;\u{1F69D}&quot;, &quot;mountain_railway&quot;: &quot;\u{1F69E}&quot;, &quot;train&quot;: &quot;\u{1F68B}&quot;, &quot;bus&quot;: &quot;\u{1F68C}&quot;, &quot;oncoming_bus&quot;: &quot;\u{1F68D}&quot;, &quot;trolleybus&quot;: &quot;\u{1F68E}&quot;, &quot;minibus&quot;: &quot;\u{1F690}&quot;, &quot;ambulance&quot;: &quot;\u{1F691}&quot;, &quot;fire_engine&quot;: &quot;\u{1F692}&quot;, &quot;police_car&quot;: &quot;\u{1F693}&quot;, &quot;oncoming_police_car&quot;: &quot;\u{1F694}&quot;, &quot;taxi&quot;: &quot;\u{1F695}&quot;, &quot;oncoming_taxi&quot;: &quot;\u{1F696}&quot;, &quot;car&quot;: &quot;\u{1F697}&quot;, &quot;red_car&quot;: &quot;\u{1F697}&quot;, &quot;oncoming_automobile&quot;: &quot;\u{1F698}&quot;, &quot;blue_car&quot;: &quot;\u{1F699}&quot;, &quot;pickup_truck&quot;: &quot;\u{1F6FB}&quot;, &quot;truck&quot;: &quot;\u{1F69A}&quot;, &quot;articulated_lorry&quot;: &quot;\u{1F69B}&quot;, &quot;tractor&quot;: &quot;\u{1F69C}&quot;, &quot;racing_car&quot;: &quot;\u{1F3CE}\uFE0F&quot;, &quot;motorcycle&quot;: &quot;\u{1F3CD}\uFE0F&quot;, &quot;motor_scooter&quot;: &quot;\u{1F6F5}&quot;, &quot;manual_wheelchair&quot;: &quot;\u{1F9BD}&quot;, &quot;motorized_wheelchair&quot;: &quot;\u{1F9BC}&quot;, &quot;auto_rickshaw&quot;: &quot;\u{1F6FA}&quot;, &quot;bike&quot;: &quot;\u{1F6B2}&quot;, &quot;kick_scooter&quot;: &quot;\u{1F6F4}&quot;, &quot;skateboard&quot;: &quot;\u{1F6F9}&quot;, &quot;roller_skate&quot;: &quot;\u{1F6FC}&quot;, &quot;busstop&quot;: &quot;\u{1F68F}&quot;, &quot;motorway&quot;: &quot;\u{1F6E3}\uFE0F&quot;, &quot;railway_track&quot;: &quot;\u{1F6E4}\uFE0F&quot;, &quot;oil_drum&quot;: &quot;\u{1F6E2}\uFE0F&quot;, &quot;fuelpump&quot;: &quot;\u26FD&quot;, &quot;rotating_light&quot;: &quot;\u{1F6A8}&quot;, &quot;traffic_light&quot;: &quot;\u{1F6A5}&quot;, &quot;vertical_traffic_light&quot;: &quot;\u{1F6A6}&quot;, &quot;stop_sign&quot;: &quot;\u{1F6D1}&quot;, &quot;construction&quot;: &quot;\u{1F6A7}&quot;, &quot;anchor&quot;: &quot;\u2693&quot;, &quot;boat&quot;: &quot;\u26F5&quot;, &quot;sailboat&quot;: &quot;\u26F5&quot;, &quot;canoe&quot;: &quot;\u{1F6F6}&quot;, &quot;speedboat&quot;: &quot;\u{1F6A4}&quot;, &quot;passenger_ship&quot;: &quot;\u{1F6F3}\uFE0F&quot;, &quot;ferry&quot;: &quot;\u26F4\uFE0F&quot;, &quot;motor_boat&quot;: &quot;\u{1F6E5}\uFE0F&quot;, &quot;ship&quot;: &quot;\u{1F6A2}&quot;, &quot;airplane&quot;: &quot;\u2708\uFE0F&quot;, &quot;small_airplane&quot;: &quot;\u{1F6E9}\uFE0F&quot;, &quot;flight_departure&quot;: &quot;\u{1F6EB}&quot;, &quot;flight_arrival&quot;: &quot;\u{1F6EC}&quot;, &quot;parachute&quot;: &quot;\u{1FA82}&quot;, &quot;seat&quot;: &quot;\u{1F4BA}&quot;, &quot;helicopter&quot;: &quot;\u{1F681}&quot;, &quot;suspension_railway&quot;: &quot;\u{1F69F}&quot;, &quot;mountain_cableway&quot;: &quot;\u{1F6A0}&quot;, &quot;aerial_tramway&quot;: &quot;\u{1F6A1}&quot;, &quot;artificial_satellite&quot;: &quot;\u{1F6F0}\uFE0F&quot;, &quot;rocket&quot;: &quot;\u{1F680}&quot;, &quot;flying_saucer&quot;: &quot;\u{1F6F8}&quot;, &quot;bellhop_bell&quot;: &quot;\u{1F6CE}\uFE0F&quot;, &quot;luggage&quot;: &quot;\u{1F9F3}&quot;, &quot;hourglass&quot;: &quot;\u231B&quot;, &quot;hourglass_flowing_sand&quot;: &quot;\u23F3&quot;, &quot;watch&quot;: &quot;\u231A&quot;, &quot;alarm_clock&quot;: &quot;\u23F0&quot;, &quot;stopwatch&quot;: &quot;\u23F1\uFE0F&quot;, &quot;timer_clock&quot;: &quot;\u23F2\uFE0F&quot;, &quot;mantelpiece_clock&quot;: &quot;\u{1F570}\uFE0F&quot;, &quot;clock12&quot;: &quot;\u{1F55B}&quot;, &quot;clock1230&quot;: &quot;\u{1F567}&quot;, &quot;clock1&quot;: &quot;\u{1F550}&quot;, &quot;clock130&quot;: &quot;\u{1F55C}&quot;, &quot;clock2&quot;: &quot;\u{1F551}&quot;, &quot;clock230&quot;: &quot;\u{1F55D}&quot;, &quot;clock3&quot;: &quot;\u{1F552}&quot;, &quot;clock330&quot;: &quot;\u{1F55E}&quot;, &quot;clock4&quot;: &quot;\u{1F553}&quot;, &quot;clock430&quot;: &quot;\u{1F55F}&quot;, &quot;clock5&quot;: &quot;\u{1F554}&quot;, &quot;clock530&quot;: &quot;\u{1F560}&quot;, &quot;clock6&quot;: &quot;\u{1F555}&quot;, &quot;clock630&quot;: &quot;\u{1F561}&quot;, &quot;clock7&quot;: &quot;\u{1F556}&quot;, &quot;clock730&quot;: &quot;\u{1F562}&quot;, &quot;clock8&quot;: &quot;\u{1F557}&quot;, &quot;clock830&quot;: &quot;\u{1F563}&quot;, &quot;clock9&quot;: &quot;\u{1F558}&quot;, &quot;clock930&quot;: &quot;\u{1F564}&quot;, &quot;clock10&quot;: &quot;\u{1F559}&quot;, &quot;clock1030&quot;: &quot;\u{1F565}&quot;, &quot;clock11&quot;: &quot;\u{1F55A}&quot;, &quot;clock1130&quot;: &quot;\u{1F566}&quot;, &quot;new_moon&quot;: &quot;\u{1F311}&quot;, &quot;waxing_crescent_moon&quot;: &quot;\u{1F312}&quot;, &quot;first_quarter_moon&quot;: &quot;\u{1F313}&quot;, &quot;moon&quot;: &quot;\u{1F314}&quot;, &quot;waxing_gibbous_moon&quot;: &quot;\u{1F314}&quot;, &quot;full_moon&quot;: &quot;\u{1F315}&quot;, &quot;waning_gibbous_moon&quot;: &quot;\u{1F316}&quot;, &quot;last_quarter_moon&quot;: &quot;\u{1F317}&quot;, &quot;waning_crescent_moon&quot;: &quot;\u{1F318}&quot;, &quot;crescent_moon&quot;: &quot;\u{1F319}&quot;, &quot;new_moon_with_face&quot;: &quot;\u{1F31A}&quot;, &quot;first_quarter_moon_with_face&quot;: &quot;\u{1F31B}&quot;, &quot;last_quarter_moon_with_face&quot;: &quot;\u{1F31C}&quot;, &quot;thermometer&quot;: &quot;\u{1F321}\uFE0F&quot;, &quot;sunny&quot;: &quot;\u2600\uFE0F&quot;, &quot;full_moon_with_face&quot;: &quot;\u{1F31D}&quot;, &quot;sun_with_face&quot;: &quot;\u{1F31E}&quot;, &quot;ringed_planet&quot;: &quot;\u{1FA90}&quot;, &quot;star&quot;: &quot;\u2B50&quot;, &quot;star2&quot;: &quot;\u{1F31F}&quot;, &quot;stars&quot;: &quot;\u{1F320}&quot;, &quot;milky_way&quot;: &quot;\u{1F30C}&quot;, &quot;cloud&quot;: &quot;\u2601\uFE0F&quot;, &quot;partly_sunny&quot;: &quot;\u26C5&quot;, &quot;cloud_with_lightning_and_rain&quot;: &quot;\u26C8\uFE0F&quot;, &quot;sun_behind_small_cloud&quot;: &quot;\u{1F324}\uFE0F&quot;, &quot;sun_behind_large_cloud&quot;: &quot;\u{1F325}\uFE0F&quot;, &quot;sun_behind_rain_cloud&quot;: &quot;\u{1F326}\uFE0F&quot;, &quot;cloud_with_rain&quot;: &quot;\u{1F327}\uFE0F&quot;, &quot;cloud_with_snow&quot;: &quot;\u{1F328}\uFE0F&quot;, &quot;cloud_with_lightning&quot;: &quot;\u{1F329}\uFE0F&quot;, &quot;tornado&quot;: &quot;\u{1F32A}\uFE0F&quot;, &quot;fog&quot;: &quot;\u{1F32B}\uFE0F&quot;, &quot;wind_face&quot;: &quot;\u{1F32C}\uFE0F&quot;, &quot;cyclone&quot;: &quot;\u{1F300}&quot;, &quot;rainbow&quot;: &quot;\u{1F308}&quot;, &quot;closed_umbrella&quot;: &quot;\u{1F302}&quot;, &quot;open_umbrella&quot;: &quot;\u2602\uFE0F&quot;, &quot;umbrella&quot;: &quot;\u2614&quot;, &quot;parasol_on_ground&quot;: &quot;\u26F1\uFE0F&quot;, &quot;zap&quot;: &quot;\u26A1&quot;, &quot;snowflake&quot;: &quot;\u2744\uFE0F&quot;, &quot;snowman_with_snow&quot;: &quot;\u2603\uFE0F&quot;, &quot;snowman&quot;: &quot;\u26C4&quot;, &quot;comet&quot;: &quot;\u2604\uFE0F&quot;, &quot;fire&quot;: &quot;\u{1F525}&quot;, &quot;droplet&quot;: &quot;\u{1F4A7}&quot;, &quot;ocean&quot;: &quot;\u{1F30A}&quot;, &quot;jack_o_lantern&quot;: &quot;\u{1F383}&quot;, &quot;christmas_tree&quot;: &quot;\u{1F384}&quot;, &quot;fireworks&quot;: &quot;\u{1F386}&quot;, &quot;sparkler&quot;: &quot;\u{1F387}&quot;, &quot;firecracker&quot;: &quot;\u{1F9E8}&quot;, &quot;sparkles&quot;: &quot;\u2728&quot;, &quot;balloon&quot;: &quot;\u{1F388}&quot;, &quot;tada&quot;: &quot;\u{1F389}&quot;, &quot;confetti_ball&quot;: &quot;\u{1F38A}&quot;, &quot;tanabata_tree&quot;: &quot;\u{1F38B}&quot;, &quot;bamboo&quot;: &quot;\u{1F38D}&quot;, &quot;dolls&quot;: &quot;\u{1F38E}&quot;, &quot;flags&quot;: &quot;\u{1F38F}&quot;, &quot;wind_chime&quot;: &quot;\u{1F390}&quot;, &quot;rice_scene&quot;: &quot;\u{1F391}&quot;, &quot;red_envelope&quot;: &quot;\u{1F9E7}&quot;, &quot;ribbon&quot;: &quot;\u{1F380}&quot;, &quot;gift&quot;: &quot;\u{1F381}&quot;, &quot;reminder_ribbon&quot;: &quot;\u{1F397}\uFE0F&quot;, &quot;tickets&quot;: &quot;\u{1F39F}\uFE0F&quot;, &quot;ticket&quot;: &quot;\u{1F3AB}&quot;, &quot;medal_military&quot;: &quot;\u{1F396}\uFE0F&quot;, &quot;trophy&quot;: &quot;\u{1F3C6}&quot;, &quot;medal_sports&quot;: &quot;\u{1F3C5}&quot;, &quot;1st_place_medal&quot;: &quot;\u{1F947}&quot;, &quot;2nd_place_medal&quot;: &quot;\u{1F948}&quot;, &quot;3rd_place_medal&quot;: &quot;\u{1F949}&quot;, &quot;soccer&quot;: &quot;\u26BD&quot;, &quot;baseball&quot;: &quot;\u26BE&quot;, &quot;softball&quot;: &quot;\u{1F94E}&quot;, &quot;basketball&quot;: &quot;\u{1F3C0}&quot;, &quot;volleyball&quot;: &quot;\u{1F3D0}&quot;, &quot;football&quot;: &quot;\u{1F3C8}&quot;, &quot;rugby_football&quot;: &quot;\u{1F3C9}&quot;, &quot;tennis&quot;: &quot;\u{1F3BE}&quot;, &quot;flying_disc&quot;: &quot;\u{1F94F}&quot;, &quot;bowling&quot;: &quot;\u{1F3B3}&quot;, &quot;cricket_game&quot;: &quot;\u{1F3CF}&quot;, &quot;field_hockey&quot;: &quot;\u{1F3D1}&quot;, &quot;ice_hockey&quot;: &quot;\u{1F3D2}&quot;, &quot;lacrosse&quot;: &quot;\u{1F94D}&quot;, &quot;ping_pong&quot;: &quot;\u{1F3D3}&quot;, &quot;badminton&quot;: &quot;\u{1F3F8}&quot;, &quot;boxing_glove&quot;: &quot;\u{1F94A}&quot;, &quot;martial_arts_uniform&quot;: &quot;\u{1F94B}&quot;, &quot;goal_net&quot;: &quot;\u{1F945}&quot;, &quot;golf&quot;: &quot;\u26F3&quot;, &quot;ice_skate&quot;: &quot;\u26F8\uFE0F&quot;, &quot;fishing_pole_and_fish&quot;: &quot;\u{1F3A3}&quot;, &quot;diving_mask&quot;: &quot;\u{1F93F}&quot;, &quot;running_shirt_with_sash&quot;: &quot;\u{1F3BD}&quot;, &quot;ski&quot;: &quot;\u{1F3BF}&quot;, &quot;sled&quot;: &quot;\u{1F6F7}&quot;, &quot;curling_stone&quot;: &quot;\u{1F94C}&quot;, &quot;dart&quot;: &quot;\u{1F3AF}&quot;, &quot;yo_yo&quot;: &quot;\u{1FA80}&quot;, &quot;kite&quot;: &quot;\u{1FA81}&quot;, &quot;8ball&quot;: &quot;\u{1F3B1}&quot;, &quot;crystal_ball&quot;: &quot;\u{1F52E}&quot;, &quot;magic_wand&quot;: &quot;\u{1FA84}&quot;, &quot;nazar_amulet&quot;: &quot;\u{1F9FF}&quot;, &quot;video_game&quot;: &quot;\u{1F3AE}&quot;, &quot;joystick&quot;: &quot;\u{1F579}\uFE0F&quot;, &quot;slot_machine&quot;: &quot;\u{1F3B0}&quot;, &quot;game_die&quot;: &quot;\u{1F3B2}&quot;, &quot;jigsaw&quot;: &quot;\u{1F9E9}&quot;, &quot;teddy_bear&quot;: &quot;\u{1F9F8}&quot;, &quot;pinata&quot;: &quot;\u{1FA85}&quot;, &quot;nesting_dolls&quot;: &quot;\u{1FA86}&quot;, &quot;spades&quot;: &quot;\u2660\uFE0F&quot;, &quot;hearts&quot;: &quot;\u2665\uFE0F&quot;, &quot;diamonds&quot;: &quot;\u2666\uFE0F&quot;, &quot;clubs&quot;: &quot;\u2663\uFE0F&quot;, &quot;chess_pawn&quot;: &quot;\u265F\uFE0F&quot;, &quot;black_joker&quot;: &quot;\u{1F0CF}&quot;, &quot;mahjong&quot;: &quot;\u{1F004}&quot;, &quot;flower_playing_cards&quot;: &quot;\u{1F3B4}&quot;, &quot;performing_arts&quot;: &quot;\u{1F3AD}&quot;, &quot;framed_picture&quot;: &quot;\u{1F5BC}\uFE0F&quot;, &quot;art&quot;: &quot;\u{1F3A8}&quot;, &quot;thread&quot;: &quot;\u{1F9F5}&quot;, &quot;sewing_needle&quot;: &quot;\u{1FAA1}&quot;, &quot;yarn&quot;: &quot;\u{1F9F6}&quot;, &quot;knot&quot;: &quot;\u{1FAA2}&quot;, &quot;eyeglasses&quot;: &quot;\u{1F453}&quot;, &quot;dark_sunglasses&quot;: &quot;\u{1F576}\uFE0F&quot;, &quot;goggles&quot;: &quot;\u{1F97D}&quot;, &quot;lab_coat&quot;: &quot;\u{1F97C}&quot;, &quot;safety_vest&quot;: &quot;\u{1F9BA}&quot;, &quot;necktie&quot;: &quot;\u{1F454}&quot;, &quot;shirt&quot;: &quot;\u{1F455}&quot;, &quot;tshirt&quot;: &quot;\u{1F455}&quot;, &quot;jeans&quot;: &quot;\u{1F456}&quot;, &quot;scarf&quot;: &quot;\u{1F9E3}&quot;, &quot;gloves&quot;: &quot;\u{1F9E4}&quot;, &quot;coat&quot;: &quot;\u{1F9E5}&quot;, &quot;socks&quot;: &quot;\u{1F9E6}&quot;, &quot;dress&quot;: &quot;\u{1F457}&quot;, &quot;kimono&quot;: &quot;\u{1F458}&quot;, &quot;sari&quot;: &quot;\u{1F97B}&quot;, &quot;one_piece_swimsuit&quot;: &quot;\u{1FA71}&quot;, &quot;swim_brief&quot;: &quot;\u{1FA72}&quot;, &quot;shorts&quot;: &quot;\u{1FA73}&quot;, &quot;bikini&quot;: &quot;\u{1F459}&quot;, &quot;womans_clothes&quot;: &quot;\u{1F45A}&quot;, &quot;purse&quot;: &quot;\u{1F45B}&quot;, &quot;handbag&quot;: &quot;\u{1F45C}&quot;, &quot;pouch&quot;: &quot;\u{1F45D}&quot;, &quot;shopping&quot;: &quot;\u{1F6CD}\uFE0F&quot;, &quot;school_satchel&quot;: &quot;\u{1F392}&quot;, &quot;thong_sandal&quot;: &quot;\u{1FA74}&quot;, &quot;mans_shoe&quot;: &quot;\u{1F45E}&quot;, &quot;shoe&quot;: &quot;\u{1F45E}&quot;, &quot;athletic_shoe&quot;: &quot;\u{1F45F}&quot;, &quot;hiking_boot&quot;: &quot;\u{1F97E}&quot;, &quot;flat_shoe&quot;: &quot;\u{1F97F}&quot;, &quot;high_heel&quot;: &quot;\u{1F460}&quot;, &quot;sandal&quot;: &quot;\u{1F461}&quot;, &quot;ballet_shoes&quot;: &quot;\u{1FA70}&quot;, &quot;boot&quot;: &quot;\u{1F462}&quot;, &quot;crown&quot;: &quot;\u{1F451}&quot;, &quot;womans_hat&quot;: &quot;\u{1F452}&quot;, &quot;tophat&quot;: &quot;\u{1F3A9}&quot;, &quot;mortar_board&quot;: &quot;\u{1F393}&quot;, &quot;billed_cap&quot;: &quot;\u{1F9E2}&quot;, &quot;military_helmet&quot;: &quot;\u{1FA96}&quot;, &quot;rescue_worker_helmet&quot;: &quot;\u26D1\uFE0F&quot;, &quot;prayer_beads&quot;: &quot;\u{1F4FF}&quot;, &quot;lipstick&quot;: &quot;\u{1F484}&quot;, &quot;ring&quot;: &quot;\u{1F48D}&quot;, &quot;gem&quot;: &quot;\u{1F48E}&quot;, &quot;mute&quot;: &quot;\u{1F507}&quot;, &quot;speaker&quot;: &quot;\u{1F508}&quot;, &quot;sound&quot;: &quot;\u{1F509}&quot;, &quot;loud_sound&quot;: &quot;\u{1F50A}&quot;, &quot;loudspeaker&quot;: &quot;\u{1F4E2}&quot;, &quot;mega&quot;: &quot;\u{1F4E3}&quot;, &quot;postal_horn&quot;: &quot;\u{1F4EF}&quot;, &quot;bell&quot;: &quot;\u{1F514}&quot;, &quot;no_bell&quot;: &quot;\u{1F515}&quot;, &quot;musical_score&quot;: &quot;\u{1F3BC}&quot;, &quot;musical_note&quot;: &quot;\u{1F3B5}&quot;, &quot;notes&quot;: &quot;\u{1F3B6}&quot;, &quot;studio_microphone&quot;: &quot;\u{1F399}\uFE0F&quot;, &quot;level_slider&quot;: &quot;\u{1F39A}\uFE0F&quot;, &quot;control_knobs&quot;: &quot;\u{1F39B}\uFE0F&quot;, &quot;microphone&quot;: &quot;\u{1F3A4}&quot;, &quot;headphones&quot;: &quot;\u{1F3A7}&quot;, &quot;radio&quot;: &quot;\u{1F4FB}&quot;, &quot;saxophone&quot;: &quot;\u{1F3B7}&quot;, &quot;accordion&quot;: &quot;\u{1FA97}&quot;, &quot;guitar&quot;: &quot;\u{1F3B8}&quot;, &quot;musical_keyboard&quot;: &quot;\u{1F3B9}&quot;, &quot;trumpet&quot;: &quot;\u{1F3BA}&quot;, &quot;violin&quot;: &quot;\u{1F3BB}&quot;, &quot;banjo&quot;: &quot;\u{1FA95}&quot;, &quot;drum&quot;: &quot;\u{1F941}&quot;, &quot;long_drum&quot;: &quot;\u{1FA98}&quot;, &quot;iphone&quot;: &quot;\u{1F4F1}&quot;, &quot;calling&quot;: &quot;\u{1F4F2}&quot;, &quot;phone&quot;: &quot;\u260E\uFE0F&quot;, &quot;telephone&quot;: &quot;\u260E\uFE0F&quot;, &quot;telephone_receiver&quot;: &quot;\u{1F4DE}&quot;, &quot;pager&quot;: &quot;\u{1F4DF}&quot;, &quot;fax&quot;: &quot;\u{1F4E0}&quot;, &quot;battery&quot;: &quot;\u{1F50B}&quot;, &quot;electric_plug&quot;: &quot;\u{1F50C}&quot;, &quot;computer&quot;: &quot;\u{1F4BB}&quot;, &quot;desktop_computer&quot;: &quot;\u{1F5A5}\uFE0F&quot;, &quot;printer&quot;: &quot;\u{1F5A8}\uFE0F&quot;, &quot;keyboard&quot;: &quot;\u2328\uFE0F&quot;, &quot;computer_mouse&quot;: &quot;\u{1F5B1}\uFE0F&quot;, &quot;trackball&quot;: &quot;\u{1F5B2}\uFE0F&quot;, &quot;minidisc&quot;: &quot;\u{1F4BD}&quot;, &quot;floppy_disk&quot;: &quot;\u{1F4BE}&quot;, &quot;cd&quot;: &quot;\u{1F4BF}&quot;, &quot;dvd&quot;: &quot;\u{1F4C0}&quot;, &quot;abacus&quot;: &quot;\u{1F9EE}&quot;, &quot;movie_camera&quot;: &quot;\u{1F3A5}&quot;, &quot;film_strip&quot;: &quot;\u{1F39E}\uFE0F&quot;, &quot;film_projector&quot;: &quot;\u{1F4FD}\uFE0F&quot;, &quot;clapper&quot;: &quot;\u{1F3AC}&quot;, &quot;tv&quot;: &quot;\u{1F4FA}&quot;, &quot;camera&quot;: &quot;\u{1F4F7}&quot;, &quot;camera_flash&quot;: &quot;\u{1F4F8}&quot;, &quot;video_camera&quot;: &quot;\u{1F4F9}&quot;, &quot;vhs&quot;: &quot;\u{1F4FC}&quot;, &quot;mag&quot;: &quot;\u{1F50D}&quot;, &quot;mag_right&quot;: &quot;\u{1F50E}&quot;, &quot;candle&quot;: &quot;\u{1F56F}\uFE0F&quot;, &quot;bulb&quot;: &quot;\u{1F4A1}&quot;, &quot;flashlight&quot;: &quot;\u{1F526}&quot;, &quot;izakaya_lantern&quot;: &quot;\u{1F3EE}&quot;, &quot;lantern&quot;: &quot;\u{1F3EE}&quot;, &quot;diya_lamp&quot;: &quot;\u{1FA94}&quot;, &quot;notebook_with_decorative_cover&quot;: &quot;\u{1F4D4}&quot;, &quot;closed_book&quot;: &quot;\u{1F4D5}&quot;, &quot;book&quot;: &quot;\u{1F4D6}&quot;, &quot;open_book&quot;: &quot;\u{1F4D6}&quot;, &quot;green_book&quot;: &quot;\u{1F4D7}&quot;, &quot;blue_book&quot;: &quot;\u{1F4D8}&quot;, &quot;orange_book&quot;: &quot;\u{1F4D9}&quot;, &quot;books&quot;: &quot;\u{1F4DA}&quot;, &quot;notebook&quot;: &quot;\u{1F4D3}&quot;, &quot;ledger&quot;: &quot;\u{1F4D2}&quot;, &quot;page_with_curl&quot;: &quot;\u{1F4C3}&quot;, &quot;scroll&quot;: &quot;\u{1F4DC}&quot;, &quot;page_facing_up&quot;: &quot;\u{1F4C4}&quot;, &quot;newspaper&quot;: &quot;\u{1F4F0}&quot;, &quot;newspaper_roll&quot;: &quot;\u{1F5DE}\uFE0F&quot;, &quot;bookmark_tabs&quot;: &quot;\u{1F4D1}&quot;, &quot;bookmark&quot;: &quot;\u{1F516}&quot;, &quot;label&quot;: &quot;\u{1F3F7}\uFE0F&quot;, &quot;moneybag&quot;: &quot;\u{1F4B0}&quot;, &quot;coin&quot;: &quot;\u{1FA99}&quot;, &quot;yen&quot;: &quot;\u{1F4B4}&quot;, &quot;dollar&quot;: &quot;\u{1F4B5}&quot;, &quot;euro&quot;: &quot;\u{1F4B6}&quot;, &quot;pound&quot;: &quot;\u{1F4B7}&quot;, &quot;money_with_wings&quot;: &quot;\u{1F4B8}&quot;, &quot;credit_card&quot;: &quot;\u{1F4B3}&quot;, &quot;receipt&quot;: &quot;\u{1F9FE}&quot;, &quot;chart&quot;: &quot;\u{1F4B9}&quot;, &quot;envelope&quot;: &quot;\u2709\uFE0F&quot;, &quot;email&quot;: &quot;\u{1F4E7}&quot;, &quot;e-mail&quot;: &quot;\u{1F4E7}&quot;, &quot;incoming_envelope&quot;: &quot;\u{1F4E8}&quot;, &quot;envelope_with_arrow&quot;: &quot;\u{1F4E9}&quot;, &quot;outbox_tray&quot;: &quot;\u{1F4E4}&quot;, &quot;inbox_tray&quot;: &quot;\u{1F4E5}&quot;, &quot;package&quot;: &quot;\u{1F4E6}&quot;, &quot;mailbox&quot;: &quot;\u{1F4EB}&quot;, &quot;mailbox_closed&quot;: &quot;\u{1F4EA}&quot;, &quot;mailbox_with_mail&quot;: &quot;\u{1F4EC}&quot;, &quot;mailbox_with_no_mail&quot;: &quot;\u{1F4ED}&quot;, &quot;postbox&quot;: &quot;\u{1F4EE}&quot;, &quot;ballot_box&quot;: &quot;\u{1F5F3}\uFE0F&quot;, &quot;pencil2&quot;: &quot;\u270F\uFE0F&quot;, &quot;black_nib&quot;: &quot;\u2712\uFE0F&quot;, &quot;fountain_pen&quot;: &quot;\u{1F58B}\uFE0F&quot;, &quot;pen&quot;: &quot;\u{1F58A}\uFE0F&quot;, &quot;paintbrush&quot;: &quot;\u{1F58C}\uFE0F&quot;, &quot;crayon&quot;: &quot;\u{1F58D}\uFE0F&quot;, &quot;memo&quot;: &quot;\u{1F4DD}&quot;, &quot;pencil&quot;: &quot;\u{1F4DD}&quot;, &quot;briefcase&quot;: &quot;\u{1F4BC}&quot;, &quot;file_folder&quot;: &quot;\u{1F4C1}&quot;, &quot;open_file_folder&quot;: &quot;\u{1F4C2}&quot;, &quot;card_index_dividers&quot;: &quot;\u{1F5C2}\uFE0F&quot;, &quot;date&quot;: &quot;\u{1F4C5}&quot;, &quot;calendar&quot;: &quot;\u{1F4C6}&quot;, &quot;spiral_notepad&quot;: &quot;\u{1F5D2}\uFE0F&quot;, &quot;spiral_calendar&quot;: &quot;\u{1F5D3}\uFE0F&quot;, &quot;card_index&quot;: &quot;\u{1F4C7}&quot;, &quot;chart_with_upwards_trend&quot;: &quot;\u{1F4C8}&quot;, &quot;chart_with_downwards_trend&quot;: &quot;\u{1F4C9}&quot;, &quot;bar_chart&quot;: &quot;\u{1F4CA}&quot;, &quot;clipboard&quot;: &quot;\u{1F4CB}&quot;, &quot;pushpin&quot;: &quot;\u{1F4CC}&quot;, &quot;round_pushpin&quot;: &quot;\u{1F4CD}&quot;, &quot;paperclip&quot;: &quot;\u{1F4CE}&quot;, &quot;paperclips&quot;: &quot;\u{1F587}\uFE0F&quot;, &quot;straight_ruler&quot;: &quot;\u{1F4CF}&quot;, &quot;triangular_ruler&quot;: &quot;\u{1F4D0}&quot;, &quot;scissors&quot;: &quot;\u2702\uFE0F&quot;, &quot;card_file_box&quot;: &quot;\u{1F5C3}\uFE0F&quot;, &quot;file_cabinet&quot;: &quot;\u{1F5C4}\uFE0F&quot;, &quot;wastebasket&quot;: &quot;\u{1F5D1}\uFE0F&quot;, &quot;lock&quot;: &quot;\u{1F512}&quot;, &quot;unlock&quot;: &quot;\u{1F513}&quot;, &quot;lock_with_ink_pen&quot;: &quot;\u{1F50F}&quot;, &quot;closed_lock_with_key&quot;: &quot;\u{1F510}&quot;, &quot;key&quot;: &quot;\u{1F511}&quot;, &quot;old_key&quot;: &quot;\u{1F5DD}\uFE0F&quot;, &quot;hammer&quot;: &quot;\u{1F528}&quot;, &quot;axe&quot;: &quot;\u{1FA93}&quot;, &quot;pick&quot;: &quot;\u26CF\uFE0F&quot;, &quot;hammer_and_pick&quot;: &quot;\u2692\uFE0F&quot;, &quot;hammer_and_wrench&quot;: &quot;\u{1F6E0}\uFE0F&quot;, &quot;dagger&quot;: &quot;\u{1F5E1}\uFE0F&quot;, &quot;crossed_swords&quot;: &quot;\u2694\uFE0F&quot;, &quot;gun&quot;: &quot;\u{1F52B}&quot;, &quot;boomerang&quot;: &quot;\u{1FA83}&quot;, &quot;bow_and_arrow&quot;: &quot;\u{1F3F9}&quot;, &quot;shield&quot;: &quot;\u{1F6E1}\uFE0F&quot;, &quot;carpentry_saw&quot;: &quot;\u{1FA9A}&quot;, &quot;wrench&quot;: &quot;\u{1F527}&quot;, &quot;screwdriver&quot;: &quot;\u{1FA9B}&quot;, &quot;nut_and_bolt&quot;: &quot;\u{1F529}&quot;, &quot;gear&quot;: &quot;\u2699\uFE0F&quot;, &quot;clamp&quot;: &quot;\u{1F5DC}\uFE0F&quot;, &quot;balance_scale&quot;: &quot;\u2696\uFE0F&quot;, &quot;probing_cane&quot;: &quot;\u{1F9AF}&quot;, &quot;link&quot;: &quot;\u{1F517}&quot;, &quot;chains&quot;: &quot;\u26D3\uFE0F&quot;, &quot;hook&quot;: &quot;\u{1FA9D}&quot;, &quot;toolbox&quot;: &quot;\u{1F9F0}&quot;, &quot;magnet&quot;: &quot;\u{1F9F2}&quot;, &quot;ladder&quot;: &quot;\u{1FA9C}&quot;, &quot;alembic&quot;: &quot;\u2697\uFE0F&quot;, &quot;test_tube&quot;: &quot;\u{1F9EA}&quot;, &quot;petri_dish&quot;: &quot;\u{1F9EB}&quot;, &quot;dna&quot;: &quot;\u{1F9EC}&quot;, &quot;microscope&quot;: &quot;\u{1F52C}&quot;, &quot;telescope&quot;: &quot;\u{1F52D}&quot;, &quot;satellite&quot;: &quot;\u{1F4E1}&quot;, &quot;syringe&quot;: &quot;\u{1F489}&quot;, &quot;drop_of_blood&quot;: &quot;\u{1FA78}&quot;, &quot;pill&quot;: &quot;\u{1F48A}&quot;, &quot;adhesive_bandage&quot;: &quot;\u{1FA79}&quot;, &quot;stethoscope&quot;: &quot;\u{1FA7A}&quot;, &quot;door&quot;: &quot;\u{1F6AA}&quot;, &quot;elevator&quot;: &quot;\u{1F6D7}&quot;, &quot;mirror&quot;: &quot;\u{1FA9E}&quot;, &quot;window&quot;: &quot;\u{1FA9F}&quot;, &quot;bed&quot;: &quot;\u{1F6CF}\uFE0F&quot;, &quot;couch_and_lamp&quot;: &quot;\u{1F6CB}\uFE0F&quot;, &quot;chair&quot;: &quot;\u{1FA91}&quot;, &quot;toilet&quot;: &quot;\u{1F6BD}&quot;, &quot;plunger&quot;: &quot;\u{1FAA0}&quot;, &quot;shower&quot;: &quot;\u{1F6BF}&quot;, &quot;bathtub&quot;: &quot;\u{1F6C1}&quot;, &quot;mouse_trap&quot;: &quot;\u{1FAA4}&quot;, &quot;razor&quot;: &quot;\u{1FA92}&quot;, &quot;lotion_bottle&quot;: &quot;\u{1F9F4}&quot;, &quot;safety_pin&quot;: &quot;\u{1F9F7}&quot;, &quot;broom&quot;: &quot;\u{1F9F9}&quot;, &quot;basket&quot;: &quot;\u{1F9FA}&quot;, &quot;roll_of_paper&quot;: &quot;\u{1F9FB}&quot;, &quot;bucket&quot;: &quot;\u{1FAA3}&quot;, &quot;soap&quot;: &quot;\u{1F9FC}&quot;, &quot;toothbrush&quot;: &quot;\u{1FAA5}&quot;, &quot;sponge&quot;: &quot;\u{1F9FD}&quot;, &quot;fire_extinguisher&quot;: &quot;\u{1F9EF}&quot;, &quot;shopping_cart&quot;: &quot;\u{1F6D2}&quot;, &quot;smoking&quot;: &quot;\u{1F6AC}&quot;, &quot;coffin&quot;: &quot;\u26B0\uFE0F&quot;, &quot;headstone&quot;: &quot;\u{1FAA6}&quot;, &quot;funeral_urn&quot;: &quot;\u26B1\uFE0F&quot;, &quot;moyai&quot;: &quot;\u{1F5FF}&quot;, &quot;placard&quot;: &quot;\u{1FAA7}&quot;, &quot;atm&quot;: &quot;\u{1F3E7}&quot;, &quot;put_litter_in_its_place&quot;: &quot;\u{1F6AE}&quot;, &quot;potable_water&quot;: &quot;\u{1F6B0}&quot;, &quot;wheelchair&quot;: &quot;\u267F&quot;, &quot;mens&quot;: &quot;\u{1F6B9}&quot;, &quot;womens&quot;: &quot;\u{1F6BA}&quot;, &quot;restroom&quot;: &quot;\u{1F6BB}&quot;, &quot;baby_symbol&quot;: &quot;\u{1F6BC}&quot;, &quot;wc&quot;: &quot;\u{1F6BE}&quot;, &quot;passport_control&quot;: &quot;\u{1F6C2}&quot;, &quot;customs&quot;: &quot;\u{1F6C3}&quot;, &quot;baggage_claim&quot;: &quot;\u{1F6C4}&quot;, &quot;left_luggage&quot;: &quot;\u{1F6C5}&quot;, &quot;warning&quot;: &quot;\u26A0\uFE0F&quot;, &quot;children_crossing&quot;: &quot;\u{1F6B8}&quot;, &quot;no_entry&quot;: &quot;\u26D4&quot;, &quot;no_entry_sign&quot;: &quot;\u{1F6AB}&quot;, &quot;no_bicycles&quot;: &quot;\u{1F6B3}&quot;, &quot;no_smoking&quot;: &quot;\u{1F6AD}&quot;, &quot;do_not_litter&quot;: &quot;\u{1F6AF}&quot;, &quot;non-potable_water&quot;: &quot;\u{1F6B1}&quot;, &quot;no_pedestrians&quot;: &quot;\u{1F6B7}&quot;, &quot;no_mobile_phones&quot;: &quot;\u{1F4F5}&quot;, &quot;underage&quot;: &quot;\u{1F51E}&quot;, &quot;radioactive&quot;: &quot;\u2622\uFE0F&quot;, &quot;biohazard&quot;: &quot;\u2623\uFE0F&quot;, &quot;arrow_up&quot;: &quot;\u2B06\uFE0F&quot;, &quot;arrow_upper_right&quot;: &quot;\u2197\uFE0F&quot;, &quot;arrow_right&quot;: &quot;\u27A1\uFE0F&quot;, &quot;arrow_lower_right&quot;: &quot;\u2198\uFE0F&quot;, &quot;arrow_down&quot;: &quot;\u2B07\uFE0F&quot;, &quot;arrow_lower_left&quot;: &quot;\u2199\uFE0F&quot;, &quot;arrow_left&quot;: &quot;\u2B05\uFE0F&quot;, &quot;arrow_upper_left&quot;: &quot;\u2196\uFE0F&quot;, &quot;arrow_up_down&quot;: &quot;\u2195\uFE0F&quot;, &quot;left_right_arrow&quot;: &quot;\u2194\uFE0F&quot;, &quot;leftwards_arrow_with_hook&quot;: &quot;\u21A9\uFE0F&quot;, &quot;arrow_right_hook&quot;: &quot;\u21AA\uFE0F&quot;, &quot;arrow_heading_up&quot;: &quot;\u2934\uFE0F&quot;, &quot;arrow_heading_down&quot;: &quot;\u2935\uFE0F&quot;, &quot;arrows_clockwise&quot;: &quot;\u{1F503}&quot;, &quot;arrows_counterclockwise&quot;: &quot;\u{1F504}&quot;, &quot;back&quot;: &quot;\u{1F519}&quot;, &quot;end&quot;: &quot;\u{1F51A}&quot;, &quot;on&quot;: &quot;\u{1F51B}&quot;, &quot;soon&quot;: &quot;\u{1F51C}&quot;, &quot;top&quot;: &quot;\u{1F51D}&quot;, &quot;place_of_worship&quot;: &quot;\u{1F6D0}&quot;, &quot;atom_symbol&quot;: &quot;\u269B\uFE0F&quot;, &quot;om&quot;: &quot;\u{1F549}\uFE0F&quot;, &quot;star_of_david&quot;: &quot;\u2721\uFE0F&quot;, &quot;wheel_of_dharma&quot;: &quot;\u2638\uFE0F&quot;, &quot;yin_yang&quot;: &quot;\u262F\uFE0F&quot;, &quot;latin_cross&quot;: &quot;\u271D\uFE0F&quot;, &quot;orthodox_cross&quot;: &quot;\u2626\uFE0F&quot;, &quot;star_and_crescent&quot;: &quot;\u262A\uFE0F&quot;, &quot;peace_symbol&quot;: &quot;\u262E\uFE0F&quot;, &quot;menorah&quot;: &quot;\u{1F54E}&quot;, &quot;six_pointed_star&quot;: &quot;\u{1F52F}&quot;, &quot;aries&quot;: &quot;\u2648&quot;, &quot;taurus&quot;: &quot;\u2649&quot;, &quot;gemini&quot;: &quot;\u264A&quot;, &quot;cancer&quot;: &quot;\u264B&quot;, &quot;leo&quot;: &quot;\u264C&quot;, &quot;virgo&quot;: &quot;\u264D&quot;, &quot;libra&quot;: &quot;\u264E&quot;, &quot;scorpius&quot;: &quot;\u264F&quot;, &quot;sagittarius&quot;: &quot;\u2650&quot;, &quot;capricorn&quot;: &quot;\u2651&quot;, &quot;aquarius&quot;: &quot;\u2652&quot;, &quot;pisces&quot;: &quot;\u2653&quot;, &quot;ophiuchus&quot;: &quot;\u26CE&quot;, &quot;twisted_rightwards_arrows&quot;: &quot;\u{1F500}&quot;, &quot;repeat&quot;: &quot;\u{1F501}&quot;, &quot;repeat_one&quot;: &quot;\u{1F502}&quot;, &quot;arrow_forward&quot;: &quot;\u25B6\uFE0F&quot;, &quot;fast_forward&quot;: &quot;\u23E9&quot;, &quot;next_track_button&quot;: &quot;\u23ED\uFE0F&quot;, &quot;play_or_pause_button&quot;: &quot;\u23EF\uFE0F&quot;, &quot;arrow_backward&quot;: &quot;\u25C0\uFE0F&quot;, &quot;rewind&quot;: &quot;\u23EA&quot;, &quot;previous_track_button&quot;: &quot;\u23EE\uFE0F&quot;, &quot;arrow_up_small&quot;: &quot;\u{1F53C}&quot;, &quot;arrow_double_up&quot;: &quot;\u23EB&quot;, &quot;arrow_down_small&quot;: &quot;\u{1F53D}&quot;, &quot;arrow_double_down&quot;: &quot;\u23EC&quot;, &quot;pause_button&quot;: &quot;\u23F8\uFE0F&quot;, &quot;stop_button&quot;: &quot;\u23F9\uFE0F&quot;, &quot;record_button&quot;: &quot;\u23FA\uFE0F&quot;, &quot;eject_button&quot;: &quot;\u23CF\uFE0F&quot;, &quot;cinema&quot;: &quot;\u{1F3A6}&quot;, &quot;low_brightness&quot;: &quot;\u{1F505}&quot;, &quot;high_brightness&quot;: &quot;\u{1F506}&quot;, &quot;signal_strength&quot;: &quot;\u{1F4F6}&quot;, &quot;vibration_mode&quot;: &quot;\u{1F4F3}&quot;, &quot;mobile_phone_off&quot;: &quot;\u{1F4F4}&quot;, &quot;female_sign&quot;: &quot;\u2640\uFE0F&quot;, &quot;male_sign&quot;: &quot;\u2642\uFE0F&quot;, &quot;transgender_symbol&quot;: &quot;\u26A7\uFE0F&quot;, &quot;heavy_multiplication_x&quot;: &quot;\u2716\uFE0F&quot;, &quot;heavy_plus_sign&quot;: &quot;\u2795&quot;, &quot;heavy_minus_sign&quot;: &quot;\u2796&quot;, &quot;heavy_division_sign&quot;: &quot;\u2797&quot;, &quot;infinity&quot;: &quot;\u267E\uFE0F&quot;, &quot;bangbang&quot;: &quot;\u203C\uFE0F&quot;, &quot;interrobang&quot;: &quot;\u2049\uFE0F&quot;, &quot;question&quot;: &quot;\u2753&quot;, &quot;grey_question&quot;: &quot;\u2754&quot;, &quot;grey_exclamation&quot;: &quot;\u2755&quot;, &quot;exclamation&quot;: &quot;\u2757&quot;, &quot;heavy_exclamation_mark&quot;: &quot;\u2757&quot;, &quot;wavy_dash&quot;: &quot;\u3030\uFE0F&quot;, &quot;currency_exchange&quot;: &quot;\u{1F4B1}&quot;, &quot;heavy_dollar_sign&quot;: &quot;\u{1F4B2}&quot;, &quot;medical_symbol&quot;: &quot;\u2695\uFE0F&quot;, &quot;recycle&quot;: &quot;\u267B\uFE0F&quot;, &quot;fleur_de_lis&quot;: &quot;\u269C\uFE0F&quot;, &quot;trident&quot;: &quot;\u{1F531}&quot;, &quot;name_badge&quot;: &quot;\u{1F4DB}&quot;, &quot;beginner&quot;: &quot;\u{1F530}&quot;, &quot;o&quot;: &quot;\u2B55&quot;, &quot;white_check_mark&quot;: &quot;\u2705&quot;, &quot;ballot_box_with_check&quot;: &quot;\u2611\uFE0F&quot;, &quot;heavy_check_mark&quot;: &quot;\u2714\uFE0F&quot;, &quot;x&quot;: &quot;\u274C&quot;, &quot;negative_squared_cross_mark&quot;: &quot;\u274E&quot;, &quot;curly_loop&quot;: &quot;\u27B0&quot;, &quot;loop&quot;: &quot;\u27BF&quot;, &quot;part_alternation_mark&quot;: &quot;\u303D\uFE0F&quot;, &quot;eight_spoked_asterisk&quot;: &quot;\u2733\uFE0F&quot;, &quot;eight_pointed_black_star&quot;: &quot;\u2734\uFE0F&quot;, &quot;sparkle&quot;: &quot;\u2747\uFE0F&quot;, &quot;copyright&quot;: &quot;\xA9\uFE0F&quot;, &quot;registered&quot;: &quot;\xAE\uFE0F&quot;, &quot;tm&quot;: &quot;\u2122\uFE0F&quot;, &quot;hash&quot;: &quot;#\uFE0F\u20E3&quot;, &quot;asterisk&quot;: &quot;*\uFE0F\u20E3&quot;, &quot;zero&quot;: &quot;0\uFE0F\u20E3&quot;, &quot;one&quot;: &quot;1\uFE0F\u20E3&quot;, &quot;two&quot;: &quot;2\uFE0F\u20E3&quot;, &quot;three&quot;: &quot;3\uFE0F\u20E3&quot;, &quot;four&quot;: &quot;4\uFE0F\u20E3&quot;, &quot;five&quot;: &quot;5\uFE0F\u20E3&quot;, &quot;six&quot;: &quot;6\uFE0F\u20E3&quot;, &quot;seven&quot;: &quot;7\uFE0F\u20E3&quot;, &quot;eight&quot;: &quot;8\uFE0F\u20E3&quot;, &quot;nine&quot;: &quot;9\uFE0F\u20E3&quot;, &quot;keycap_ten&quot;: &quot;\u{1F51F}&quot;, &quot;capital_abcd&quot;: &quot;\u{1F520}&quot;, &quot;abcd&quot;: &quot;\u{1F521}&quot;, &quot;symbols&quot;: &quot;\u{1F523}&quot;, &quot;abc&quot;: &quot;\u{1F524}&quot;, &quot;a&quot;: &quot;\u{1F170}\uFE0F&quot;, &quot;ab&quot;: &quot;\u{1F18E}&quot;, &quot;b&quot;: &quot;\u{1F171}\uFE0F&quot;, &quot;cl&quot;: &quot;\u{1F191}&quot;, &quot;cool&quot;: &quot;\u{1F192}&quot;, &quot;free&quot;: &quot;\u{1F193}&quot;, &quot;information_source&quot;: &quot;\u2139\uFE0F&quot;, &quot;id&quot;: &quot;\u{1F194}&quot;, &quot;m&quot;: &quot;\u24C2\uFE0F&quot;, &quot;new&quot;: &quot;\u{1F195}&quot;, &quot;ng&quot;: &quot;\u{1F196}&quot;, &quot;o2&quot;: &quot;\u{1F17E}\uFE0F&quot;, &quot;ok&quot;: &quot;\u{1F197}&quot;, &quot;parking&quot;: &quot;\u{1F17F}\uFE0F&quot;, &quot;sos&quot;: &quot;\u{1F198}&quot;, &quot;up&quot;: &quot;\u{1F199}&quot;, &quot;vs&quot;: &quot;\u{1F19A}&quot;, &quot;koko&quot;: &quot;\u{1F201}&quot;, &quot;sa&quot;: &quot;\u{1F202}\uFE0F&quot;, &quot;ideograph_advantage&quot;: &quot;\u{1F250}&quot;, &quot;accept&quot;: &quot;\u{1F251}&quot;, &quot;congratulations&quot;: &quot;\u3297\uFE0F&quot;, &quot;secret&quot;: &quot;\u3299\uFE0F&quot;, &quot;u6e80&quot;: &quot;\u{1F235}&quot;, &quot;red_circle&quot;: &quot;\u{1F534}&quot;, &quot;orange_circle&quot;: &quot;\u{1F7E0}&quot;, &quot;yellow_circle&quot;: &quot;\u{1F7E1}&quot;, &quot;green_circle&quot;: &quot;\u{1F7E2}&quot;, &quot;large_blue_circle&quot;: &quot;\u{1F535}&quot;, &quot;purple_circle&quot;: &quot;\u{1F7E3}&quot;, &quot;brown_circle&quot;: &quot;\u{1F7E4}&quot;, &quot;black_circle&quot;: &quot;\u26AB&quot;, &quot;white_circle&quot;: &quot;\u26AA&quot;, &quot;red_square&quot;: &quot;\u{1F7E5}&quot;, &quot;orange_square&quot;: &quot;\u{1F7E7}&quot;, &quot;yellow_square&quot;: &quot;\u{1F7E8}&quot;, &quot;green_square&quot;: &quot;\u{1F7E9}&quot;, &quot;blue_square&quot;: &quot;\u{1F7E6}&quot;, &quot;purple_square&quot;: &quot;\u{1F7EA}&quot;, &quot;brown_square&quot;: &quot;\u{1F7EB}&quot;, &quot;black_large_square&quot;: &quot;\u2B1B&quot;, &quot;white_large_square&quot;: &quot;\u2B1C&quot;, &quot;black_medium_square&quot;: &quot;\u25FC\uFE0F&quot;, &quot;white_medium_square&quot;: &quot;\u25FB\uFE0F&quot;, &quot;black_medium_small_square&quot;: &quot;\u25FE&quot;, &quot;white_medium_small_square&quot;: &quot;\u25FD&quot;, &quot;black_small_square&quot;: &quot;\u25AA\uFE0F&quot;, &quot;white_small_square&quot;: &quot;\u25AB\uFE0F&quot;, &quot;large_orange_diamond&quot;: &quot;\u{1F536}&quot;, &quot;large_blue_diamond&quot;: &quot;\u{1F537}&quot;, &quot;small_orange_diamond&quot;: &quot;\u{1F538}&quot;, &quot;small_blue_diamond&quot;: &quot;\u{1F539}&quot;, &quot;small_red_triangle&quot;: &quot;\u{1F53A}&quot;, &quot;small_red_triangle_down&quot;: &quot;\u{1F53B}&quot;, &quot;diamond_shape_with_a_dot_inside&quot;: &quot;\u{1F4A0}&quot;, &quot;radio_button&quot;: &quot;\u{1F518}&quot;, &quot;white_square_button&quot;: &quot;\u{1F533}&quot;, &quot;black_square_button&quot;: &quot;\u{1F532}&quot;, &quot;checkered_flag&quot;: &quot;\u{1F3C1}&quot;, &quot;triangular_flag_on_post&quot;: &quot;\u{1F6A9}&quot;, &quot;crossed_flags&quot;: &quot;\u{1F38C}&quot;, &quot;black_flag&quot;: &quot;\u{1F3F4}&quot;, &quot;white_flag&quot;: &quot;\u{1F3F3}\uFE0F&quot;, &quot;rainbow_flag&quot;: &quot;\u{1F3F3}\uFE0F\u200D\u{1F308}&quot;, &quot;transgender_flag&quot;: &quot;\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F&quot;, &quot;pirate_flag&quot;: &quot;\u{1F3F4}\u200D\u2620\uFE0F&quot;, &quot;ascension_island&quot;: &quot;\u{1F1E6}\u{1F1E8}&quot;, &quot;andorra&quot;: &quot;\u{1F1E6}\u{1F1E9}&quot;, &quot;united_arab_emirates&quot;: &quot;\u{1F1E6}\u{1F1EA}&quot;, &quot;afghanistan&quot;: &quot;\u{1F1E6}\u{1F1EB}&quot;, &quot;antigua_barbuda&quot;: &quot;\u{1F1E6}\u{1F1EC}&quot;, &quot;anguilla&quot;: &quot;\u{1F1E6}\u{1F1EE}&quot;, &quot;albania&quot;: &quot;\u{1F1E6}\u{1F1F1}&quot;, &quot;armenia&quot;: &quot;\u{1F1E6}\u{1F1F2}&quot;, &quot;angola&quot;: &quot;\u{1F1E6}\u{1F1F4}&quot;, &quot;antarctica&quot;: &quot;\u{1F1E6}\u{1F1F6}&quot;, &quot;argentina&quot;: &quot;\u{1F1E6}\u{1F1F7}&quot;, &quot;american_samoa&quot;: &quot;\u{1F1E6}\u{1F1F8}&quot;, &quot;austria&quot;: &quot;\u{1F1E6}\u{1F1F9}&quot;, &quot;australia&quot;: &quot;\u{1F1E6}\u{1F1FA}&quot;, &quot;aruba&quot;: &quot;\u{1F1E6}\u{1F1FC}&quot;, &quot;aland_islands&quot;: &quot;\u{1F1E6}\u{1F1FD}&quot;, &quot;azerbaijan&quot;: &quot;\u{1F1E6}\u{1F1FF}&quot;, &quot;bosnia_herzegovina&quot;: &quot;\u{1F1E7}\u{1F1E6}&quot;, &quot;barbados&quot;: &quot;\u{1F1E7}\u{1F1E7}&quot;, &quot;bangladesh&quot;: &quot;\u{1F1E7}\u{1F1E9}&quot;, &quot;belgium&quot;: &quot;\u{1F1E7}\u{1F1EA}&quot;, &quot;burkina_faso&quot;: &quot;\u{1F1E7}\u{1F1EB}&quot;, &quot;bulgaria&quot;: &quot;\u{1F1E7}\u{1F1EC}&quot;, &quot;bahrain&quot;: &quot;\u{1F1E7}\u{1F1ED}&quot;, &quot;burundi&quot;: &quot;\u{1F1E7}\u{1F1EE}&quot;, &quot;benin&quot;: &quot;\u{1F1E7}\u{1F1EF}&quot;, &quot;st_barthelemy&quot;: &quot;\u{1F1E7}\u{1F1F1}&quot;, &quot;bermuda&quot;: &quot;\u{1F1E7}\u{1F1F2}&quot;, &quot;brunei&quot;: &quot;\u{1F1E7}\u{1F1F3}&quot;, &quot;bolivia&quot;: &quot;\u{1F1E7}\u{1F1F4}&quot;, &quot;caribbean_netherlands&quot;: &quot;\u{1F1E7}\u{1F1F6}&quot;, &quot;brazil&quot;: &quot;\u{1F1E7}\u{1F1F7}&quot;, &quot;bahamas&quot;: &quot;\u{1F1E7}\u{1F1F8}&quot;, &quot;bhutan&quot;: &quot;\u{1F1E7}\u{1F1F9}&quot;, &quot;bouvet_island&quot;: &quot;\u{1F1E7}\u{1F1FB}&quot;, &quot;botswana&quot;: &quot;\u{1F1E7}\u{1F1FC}&quot;, &quot;belarus&quot;: &quot;\u{1F1E7}\u{1F1FE}&quot;, &quot;belize&quot;: &quot;\u{1F1E7}\u{1F1FF}&quot;, &quot;canada&quot;: &quot;\u{1F1E8}\u{1F1E6}&quot;, &quot;cocos_islands&quot;: &quot;\u{1F1E8}\u{1F1E8}&quot;, &quot;congo_kinshasa&quot;: &quot;\u{1F1E8}\u{1F1E9}&quot;, &quot;central_african_republic&quot;: &quot;\u{1F1E8}\u{1F1EB}&quot;, &quot;congo_brazzaville&quot;: &quot;\u{1F1E8}\u{1F1EC}&quot;, &quot;switzerland&quot;: &quot;\u{1F1E8}\u{1F1ED}&quot;, &quot;cote_divoire&quot;: &quot;\u{1F1E8}\u{1F1EE}&quot;, &quot;cook_islands&quot;: &quot;\u{1F1E8}\u{1F1F0}&quot;, &quot;chile&quot;: &quot;\u{1F1E8}\u{1F1F1}&quot;, &quot;cameroon&quot;: &quot;\u{1F1E8}\u{1F1F2}&quot;, &quot;cn&quot;: &quot;\u{1F1E8}\u{1F1F3}&quot;, &quot;colombia&quot;: &quot;\u{1F1E8}\u{1F1F4}&quot;, &quot;clipperton_island&quot;: &quot;\u{1F1E8}\u{1F1F5}&quot;, &quot;costa_rica&quot;: &quot;\u{1F1E8}\u{1F1F7}&quot;, &quot;cuba&quot;: &quot;\u{1F1E8}\u{1F1FA}&quot;, &quot;cape_verde&quot;: &quot;\u{1F1E8}\u{1F1FB}&quot;, &quot;curacao&quot;: &quot;\u{1F1E8}\u{1F1FC}&quot;, &quot;christmas_island&quot;: &quot;\u{1F1E8}\u{1F1FD}&quot;, &quot;cyprus&quot;: &quot;\u{1F1E8}\u{1F1FE}&quot;, &quot;czech_republic&quot;: &quot;\u{1F1E8}\u{1F1FF}&quot;, &quot;de&quot;: &quot;\u{1F1E9}\u{1F1EA}&quot;, &quot;diego_garcia&quot;: &quot;\u{1F1E9}\u{1F1EC}&quot;, &quot;djibouti&quot;: &quot;\u{1F1E9}\u{1F1EF}&quot;, &quot;denmark&quot;: &quot;\u{1F1E9}\u{1F1F0}&quot;, &quot;dominica&quot;: &quot;\u{1F1E9}\u{1F1F2}&quot;, &quot;dominican_republic&quot;: &quot;\u{1F1E9}\u{1F1F4}&quot;, &quot;algeria&quot;: &quot;\u{1F1E9}\u{1F1FF}&quot;, &quot;ceuta_melilla&quot;: &quot;\u{1F1EA}\u{1F1E6}&quot;, &quot;ecuador&quot;: &quot;\u{1F1EA}\u{1F1E8}&quot;, &quot;estonia&quot;: &quot;\u{1F1EA}\u{1F1EA}&quot;, &quot;egypt&quot;: &quot;\u{1F1EA}\u{1F1EC}&quot;, &quot;western_sahara&quot;: &quot;\u{1F1EA}\u{1F1ED}&quot;, &quot;eritrea&quot;: &quot;\u{1F1EA}\u{1F1F7}&quot;, &quot;es&quot;: &quot;\u{1F1EA}\u{1F1F8}&quot;, &quot;ethiopia&quot;: &quot;\u{1F1EA}\u{1F1F9}&quot;, &quot;eu&quot;: &quot;\u{1F1EA}\u{1F1FA}&quot;, &quot;european_union&quot;: &quot;\u{1F1EA}\u{1F1FA}&quot;, &quot;finland&quot;: &quot;\u{1F1EB}\u{1F1EE}&quot;, &quot;fiji&quot;: &quot;\u{1F1EB}\u{1F1EF}&quot;, &quot;falkland_islands&quot;: &quot;\u{1F1EB}\u{1F1F0}&quot;, &quot;micronesia&quot;: &quot;\u{1F1EB}\u{1F1F2}&quot;, &quot;faroe_islands&quot;: &quot;\u{1F1EB}\u{1F1F4}&quot;, &quot;fr&quot;: &quot;\u{1F1EB}\u{1F1F7}&quot;, &quot;gabon&quot;: &quot;\u{1F1EC}\u{1F1E6}&quot;, &quot;gb&quot;: &quot;\u{1F1EC}\u{1F1E7}&quot;, &quot;uk&quot;: &quot;\u{1F1EC}\u{1F1E7}&quot;, &quot;grenada&quot;: &quot;\u{1F1EC}\u{1F1E9}&quot;, &quot;georgia&quot;: &quot;\u{1F1EC}\u{1F1EA}&quot;, &quot;french_guiana&quot;: &quot;\u{1F1EC}\u{1F1EB}&quot;, &quot;guernsey&quot;: &quot;\u{1F1EC}\u{1F1EC}&quot;, &quot;ghana&quot;: &quot;\u{1F1EC}\u{1F1ED}&quot;, &quot;gibraltar&quot;: &quot;\u{1F1EC}\u{1F1EE}&quot;, &quot;greenland&quot;: &quot;\u{1F1EC}\u{1F1F1}&quot;, &quot;gambia&quot;: &quot;\u{1F1EC}\u{1F1F2}&quot;, &quot;guinea&quot;: &quot;\u{1F1EC}\u{1F1F3}&quot;, &quot;guadeloupe&quot;: &quot;\u{1F1EC}\u{1F1F5}&quot;, &quot;equatorial_guinea&quot;: &quot;\u{1F1EC}\u{1F1F6}&quot;, &quot;greece&quot;: &quot;\u{1F1EC}\u{1F1F7}&quot;, &quot;south_georgia_south_sandwich_islands&quot;: &quot;\u{1F1EC}\u{1F1F8}&quot;, &quot;guatemala&quot;: &quot;\u{1F1EC}\u{1F1F9}&quot;, &quot;guam&quot;: &quot;\u{1F1EC}\u{1F1FA}&quot;, &quot;guinea_bissau&quot;: &quot;\u{1F1EC}\u{1F1FC}&quot;, &quot;guyana&quot;: &quot;\u{1F1EC}\u{1F1FE}&quot;, &quot;hong_kong&quot;: &quot;\u{1F1ED}\u{1F1F0}&quot;, &quot;heard_mcdonald_islands&quot;: &quot;\u{1F1ED}\u{1F1F2}&quot;, &quot;honduras&quot;: &quot;\u{1F1ED}\u{1F1F3}&quot;, &quot;croatia&quot;: &quot;\u{1F1ED}\u{1F1F7}&quot;, &quot;haiti&quot;: &quot;\u{1F1ED}\u{1F1F9}&quot;, &quot;hungary&quot;: &quot;\u{1F1ED}\u{1F1FA}&quot;, &quot;canary_islands&quot;: &quot;\u{1F1EE}\u{1F1E8}&quot;, &quot;indonesia&quot;: &quot;\u{1F1EE}\u{1F1E9}&quot;, &quot;ireland&quot;: &quot;\u{1F1EE}\u{1F1EA}&quot;, &quot;israel&quot;: &quot;\u{1F1EE}\u{1F1F1}&quot;, &quot;isle_of_man&quot;: &quot;\u{1F1EE}\u{1F1F2}&quot;, &quot;india&quot;: &quot;\u{1F1EE}\u{1F1F3}&quot;, &quot;british_indian_ocean_territory&quot;: &quot;\u{1F1EE}\u{1F1F4}&quot;, &quot;iraq&quot;: &quot;\u{1F1EE}\u{1F1F6}&quot;, &quot;iran&quot;: &quot;\u{1F1EE}\u{1F1F7}&quot;, &quot;iceland&quot;: &quot;\u{1F1EE}\u{1F1F8}&quot;, &quot;it&quot;: &quot;\u{1F1EE}\u{1F1F9}&quot;, &quot;jersey&quot;: &quot;\u{1F1EF}\u{1F1EA}&quot;, &quot;jamaica&quot;: &quot;\u{1F1EF}\u{1F1F2}&quot;, &quot;jordan&quot;: &quot;\u{1F1EF}\u{1F1F4}&quot;, &quot;jp&quot;: &quot;\u{1F1EF}\u{1F1F5}&quot;, &quot;kenya&quot;: &quot;\u{1F1F0}\u{1F1EA}&quot;, &quot;kyrgyzstan&quot;: &quot;\u{1F1F0}\u{1F1EC}&quot;, &quot;cambodia&quot;: &quot;\u{1F1F0}\u{1F1ED}&quot;, &quot;kiribati&quot;: &quot;\u{1F1F0}\u{1F1EE}&quot;, &quot;comoros&quot;: &quot;\u{1F1F0}\u{1F1F2}&quot;, &quot;st_kitts_nevis&quot;: &quot;\u{1F1F0}\u{1F1F3}&quot;, &quot;north_korea&quot;: &quot;\u{1F1F0}\u{1F1F5}&quot;, &quot;kr&quot;: &quot;\u{1F1F0}\u{1F1F7}&quot;, &quot;kuwait&quot;: &quot;\u{1F1F0}\u{1F1FC}&quot;, &quot;cayman_islands&quot;: &quot;\u{1F1F0}\u{1F1FE}&quot;, &quot;kazakhstan&quot;: &quot;\u{1F1F0}\u{1F1FF}&quot;, &quot;laos&quot;: &quot;\u{1F1F1}\u{1F1E6}&quot;, &quot;lebanon&quot;: &quot;\u{1F1F1}\u{1F1E7}&quot;, &quot;st_lucia&quot;: &quot;\u{1F1F1}\u{1F1E8}&quot;, &quot;liechtenstein&quot;: &quot;\u{1F1F1}\u{1F1EE}&quot;, &quot;sri_lanka&quot;: &quot;\u{1F1F1}\u{1F1F0}&quot;, &quot;liberia&quot;: &quot;\u{1F1F1}\u{1F1F7}&quot;, &quot;lesotho&quot;: &quot;\u{1F1F1}\u{1F1F8}&quot;, &quot;lithuania&quot;: &quot;\u{1F1F1}\u{1F1F9}&quot;, &quot;luxembourg&quot;: &quot;\u{1F1F1}\u{1F1FA}&quot;, &quot;latvia&quot;: &quot;\u{1F1F1}\u{1F1FB}&quot;, &quot;libya&quot;: &quot;\u{1F1F1}\u{1F1FE}&quot;, &quot;morocco&quot;: &quot;\u{1F1F2}\u{1F1E6}&quot;, &quot;monaco&quot;: &quot;\u{1F1F2}\u{1F1E8}&quot;, &quot;moldova&quot;: &quot;\u{1F1F2}\u{1F1E9}&quot;, &quot;montenegro&quot;: &quot;\u{1F1F2}\u{1F1EA}&quot;, &quot;st_martin&quot;: &quot;\u{1F1F2}\u{1F1EB}&quot;, &quot;madagascar&quot;: &quot;\u{1F1F2}\u{1F1EC}&quot;, &quot;marshall_islands&quot;: &quot;\u{1F1F2}\u{1F1ED}&quot;, &quot;macedonia&quot;: &quot;\u{1F1F2}\u{1F1F0}&quot;, &quot;mali&quot;: &quot;\u{1F1F2}\u{1F1F1}&quot;, &quot;myanmar&quot;: &quot;\u{1F1F2}\u{1F1F2}&quot;, &quot;mongolia&quot;: &quot;\u{1F1F2}\u{1F1F3}&quot;, &quot;macau&quot;: &quot;\u{1F1F2}\u{1F1F4}&quot;, &quot;northern_mariana_islands&quot;: &quot;\u{1F1F2}\u{1F1F5}&quot;, &quot;martinique&quot;: &quot;\u{1F1F2}\u{1F1F6}&quot;, &quot;mauritania&quot;: &quot;\u{1F1F2}\u{1F1F7}&quot;, &quot;montserrat&quot;: &quot;\u{1F1F2}\u{1F1F8}&quot;, &quot;malta&quot;: &quot;\u{1F1F2}\u{1F1F9}&quot;, &quot;mauritius&quot;: &quot;\u{1F1F2}\u{1F1FA}&quot;, &quot;maldives&quot;: &quot;\u{1F1F2}\u{1F1FB}&quot;, &quot;malawi&quot;: &quot;\u{1F1F2}\u{1F1FC}&quot;, &quot;mexico&quot;: &quot;\u{1F1F2}\u{1F1FD}&quot;, &quot;malaysia&quot;: &quot;\u{1F1F2}\u{1F1FE}&quot;, &quot;mozambique&quot;: &quot;\u{1F1F2}\u{1F1FF}&quot;, &quot;namibia&quot;: &quot;\u{1F1F3}\u{1F1E6}&quot;, &quot;new_caledonia&quot;: &quot;\u{1F1F3}\u{1F1E8}&quot;, &quot;niger&quot;: &quot;\u{1F1F3}\u{1F1EA}&quot;, &quot;norfolk_island&quot;: &quot;\u{1F1F3}\u{1F1EB}&quot;, &quot;nigeria&quot;: &quot;\u{1F1F3}\u{1F1EC}&quot;, &quot;nicaragua&quot;: &quot;\u{1F1F3}\u{1F1EE}&quot;, &quot;netherlands&quot;: &quot;\u{1F1F3}\u{1F1F1}&quot;, &quot;norway&quot;: &quot;\u{1F1F3}\u{1F1F4}&quot;, &quot;nepal&quot;: &quot;\u{1F1F3}\u{1F1F5}&quot;, &quot;nauru&quot;: &quot;\u{1F1F3}\u{1F1F7}&quot;, &quot;niue&quot;: &quot;\u{1F1F3}\u{1F1FA}&quot;, &quot;new_zealand&quot;: &quot;\u{1F1F3}\u{1F1FF}&quot;, &quot;oman&quot;: &quot;\u{1F1F4}\u{1F1F2}&quot;, &quot;panama&quot;: &quot;\u{1F1F5}\u{1F1E6}&quot;, &quot;peru&quot;: &quot;\u{1F1F5}\u{1F1EA}&quot;, &quot;french_polynesia&quot;: &quot;\u{1F1F5}\u{1F1EB}&quot;, &quot;papua_new_guinea&quot;: &quot;\u{1F1F5}\u{1F1EC}&quot;, &quot;philippines&quot;: &quot;\u{1F1F5}\u{1F1ED}&quot;, &quot;pakistan&quot;: &quot;\u{1F1F5}\u{1F1F0}&quot;, &quot;poland&quot;: &quot;\u{1F1F5}\u{1F1F1}&quot;, &quot;st_pierre_miquelon&quot;: &quot;\u{1F1F5}\u{1F1F2}&quot;, &quot;pitcairn_islands&quot;: &quot;\u{1F1F5}\u{1F1F3}&quot;, &quot;puerto_rico&quot;: &quot;\u{1F1F5}\u{1F1F7}&quot;, &quot;palestinian_territories&quot;: &quot;\u{1F1F5}\u{1F1F8}&quot;, &quot;portugal&quot;: &quot;\u{1F1F5}\u{1F1F9}&quot;, &quot;palau&quot;: &quot;\u{1F1F5}\u{1F1FC}&quot;, &quot;paraguay&quot;: &quot;\u{1F1F5}\u{1F1FE}&quot;, &quot;qatar&quot;: &quot;\u{1F1F6}\u{1F1E6}&quot;, &quot;reunion&quot;: &quot;\u{1F1F7}\u{1F1EA}&quot;, &quot;romania&quot;: &quot;\u{1F1F7}\u{1F1F4}&quot;, &quot;serbia&quot;: &quot;\u{1F1F7}\u{1F1F8}&quot;, &quot;ru&quot;: &quot;\u{1F1F7}\u{1F1FA}&quot;, &quot;rwanda&quot;: &quot;\u{1F1F7}\u{1F1FC}&quot;, &quot;saudi_arabia&quot;: &quot;\u{1F1F8}\u{1F1E6}&quot;, &quot;solomon_islands&quot;: &quot;\u{1F1F8}\u{1F1E7}&quot;, &quot;seychelles&quot;: &quot;\u{1F1F8}\u{1F1E8}&quot;, &quot;sudan&quot;: &quot;\u{1F1F8}\u{1F1E9}&quot;, &quot;sweden&quot;: &quot;\u{1F1F8}\u{1F1EA}&quot;, &quot;singapore&quot;: &quot;\u{1F1F8}\u{1F1EC}&quot;, &quot;st_helena&quot;: &quot;\u{1F1F8}\u{1F1ED}&quot;, &quot;slovenia&quot;: &quot;\u{1F1F8}\u{1F1EE}&quot;, &quot;svalbard_jan_mayen&quot;: &quot;\u{1F1F8}\u{1F1EF}&quot;, &quot;slovakia&quot;: &quot;\u{1F1F8}\u{1F1F0}&quot;, &quot;sierra_leone&quot;: &quot;\u{1F1F8}\u{1F1F1}&quot;, &quot;san_marino&quot;: &quot;\u{1F1F8}\u{1F1F2}&quot;, &quot;senegal&quot;: &quot;\u{1F1F8}\u{1F1F3}&quot;, &quot;somalia&quot;: &quot;\u{1F1F8}\u{1F1F4}&quot;, &quot;suriname&quot;: &quot;\u{1F1F8}\u{1F1F7}&quot;, &quot;south_sudan&quot;: &quot;\u{1F1F8}\u{1F1F8}&quot;, &quot;sao_tome_principe&quot;: &quot;\u{1F1F8}\u{1F1F9}&quot;, &quot;el_salvador&quot;: &quot;\u{1F1F8}\u{1F1FB}&quot;, &quot;sint_maarten&quot;: &quot;\u{1F1F8}\u{1F1FD}&quot;, &quot;syria&quot;: &quot;\u{1F1F8}\u{1F1FE}&quot;, &quot;swaziland&quot;: &quot;\u{1F1F8}\u{1F1FF}&quot;, &quot;tristan_da_cunha&quot;: &quot;\u{1F1F9}\u{1F1E6}&quot;, &quot;turks_caicos_islands&quot;: &quot;\u{1F1F9}\u{1F1E8}&quot;, &quot;chad&quot;: &quot;\u{1F1F9}\u{1F1E9}&quot;, &quot;french_southern_territories&quot;: &quot;\u{1F1F9}\u{1F1EB}&quot;, &quot;togo&quot;: &quot;\u{1F1F9}\u{1F1EC}&quot;, &quot;thailand&quot;: &quot;\u{1F1F9}\u{1F1ED}&quot;, &quot;tajikistan&quot;: &quot;\u{1F1F9}\u{1F1EF}&quot;, &quot;tokelau&quot;: &quot;\u{1F1F9}\u{1F1F0}&quot;, &quot;timor_leste&quot;: &quot;\u{1F1F9}\u{1F1F1}&quot;, &quot;turkmenistan&quot;: &quot;\u{1F1F9}\u{1F1F2}&quot;, &quot;tunisia&quot;: &quot;\u{1F1F9}\u{1F1F3}&quot;, &quot;tonga&quot;: &quot;\u{1F1F9}\u{1F1F4}&quot;, &quot;tr&quot;: &quot;\u{1F1F9}\u{1F1F7}&quot;, &quot;trinidad_tobago&quot;: &quot;\u{1F1F9}\u{1F1F9}&quot;, &quot;tuvalu&quot;: &quot;\u{1F1F9}\u{1F1FB}&quot;, &quot;taiwan&quot;: &quot;\u{1F1F9}\u{1F1FC}&quot;, &quot;tanzania&quot;: &quot;\u{1F1F9}\u{1F1FF}&quot;, &quot;ukraine&quot;: &quot;\u{1F1FA}\u{1F1E6}&quot;, &quot;uganda&quot;: &quot;\u{1F1FA}\u{1F1EC}&quot;, &quot;us_outlying_islands&quot;: &quot;\u{1F1FA}\u{1F1F2}&quot;, &quot;united_nations&quot;: &quot;\u{1F1FA}\u{1F1F3}&quot;, &quot;us&quot;: &quot;\u{1F1FA}\u{1F1F8}&quot;, &quot;uruguay&quot;: &quot;\u{1F1FA}\u{1F1FE}&quot;, &quot;uzbekistan&quot;: &quot;\u{1F1FA}\u{1F1FF}&quot;, &quot;vatican_city&quot;: &quot;\u{1F1FB}\u{1F1E6}&quot;, &quot;st_vincent_grenadines&quot;: &quot;\u{1F1FB}\u{1F1E8}&quot;, &quot;venezuela&quot;: &quot;\u{1F1FB}\u{1F1EA}&quot;, &quot;british_virgin_islands&quot;: &quot;\u{1F1FB}\u{1F1EC}&quot;, &quot;us_virgin_islands&quot;: &quot;\u{1F1FB}\u{1F1EE}&quot;, &quot;vietnam&quot;: &quot;\u{1F1FB}\u{1F1F3}&quot;, &quot;vanuatu&quot;: &quot;\u{1F1FB}\u{1F1FA}&quot;, &quot;wallis_futuna&quot;: &quot;\u{1F1FC}\u{1F1EB}&quot;, &quot;samoa&quot;: &quot;\u{1F1FC}\u{1F1F8}&quot;, &quot;kosovo&quot;: &quot;\u{1F1FD}\u{1F1F0}&quot;, &quot;yemen&quot;: &quot;\u{1F1FE}\u{1F1EA}&quot;, &quot;mayotte&quot;: &quot;\u{1F1FE}\u{1F1F9}&quot;, &quot;south_africa&quot;: &quot;\u{1F1FF}\u{1F1E6}&quot;, &quot;zambia&quot;: &quot;\u{1F1FF}\u{1F1F2}&quot;, &quot;zimbabwe&quot;: &quot;\u{1F1FF}\u{1F1FC}&quot;, &quot;england&quot;: &quot;\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}&quot;, &quot;scotland&quot;: &quot;\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}&quot;, &quot;wales&quot;: &quot;\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}&quot; }</p>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/emoji.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var emoji_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$c]]);
var emoji_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": emoji_html$1
});
const _sfc_main$v = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="vuepress-\u9075\u5FAA-\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E-\u7684\u539F\u5219-\u63A8\u8350\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#vuepress-\u9075\u5FAA-\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E-\u7684\u539F\u5219-\u63A8\u8350\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B" aria-hidden="true">#</a> VuePress \u9075\u5FAA \u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201D \u7684\u539F\u5219\uFF0C\u63A8\u8350\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 docs
\u2502   \u251C\u2500\u2500 .vuepress (\u53EF\u9009\u7684)
\u2502   \u2502   \u251C\u2500\u2500 components (\u53EF\u9009\u7684)
\u2502   \u2502   \u251C\u2500\u2500 theme (\u53EF\u9009\u7684)
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Layout.vue
\u2502   \u2502   \u251C\u2500\u2500 public (\u53EF\u9009\u7684)
\u2502   \u2502   \u251C\u2500\u2500 styles (\u53EF\u9009\u7684)
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.styl
\u2502   \u2502   \u2502   \u2514\u2500\u2500 palette.styl
\u2502   \u2502   \u251C\u2500\u2500 templates (\u53EF\u9009\u7684, \u8C28\u614E\u914D\u7F6E)
\u2502   \u2502   \u2502   \u251C\u2500\u2500 dev.html
\u2502   \u2502   \u2502   \u2514\u2500\u2500 ssr.html
\u2502   \u2502   \u251C\u2500\u2500 config.js (\u53EF\u9009\u7684)
\u2502   \u2502   \u2514\u2500\u2500 enhanceApp.js (\u53EF\u9009\u7684)
\u2502   \u2502 
\u2502   \u251C\u2500\u2500 README.md
\u2502   \u251C\u2500\u2500 guide
\u2502   \u2502   \u2514\u2500\u2500 README.md
\u2502   \u2514\u2500\u2500 config.md
\u2502 
\u2514\u2500\u2500 package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="color-red-\u6CE8\u610F-\u76EE\u5F55\u540D\u5927\u5199" tabindex="-1"><a class="header-anchor" href="#color-red-\u6CE8\u610F-\u76EE\u5F55\u540D\u5927\u5199" aria-hidden="true">#</a> $\\color{red}{\u6CE8\u610F\uFF1A}$ \u76EE\u5F55\u540D\u5927\u5199</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docs/.vuepress: \u7528\u4E8E\u5B58\u653E\u5168\u5C40\u7684\u914D\u7F6E\u3001\u7EC4\u4EF6\u3001\u9759\u6001\u8D44\u6E90\u7B49\u3002
docs/.vuepress/components: \u8BE5\u76EE\u5F55\u4E2D\u7684 Vue \u7EC4\u4EF6\u5C06\u4F1A\u88AB\u81EA\u52A8\u6CE8\u518C\u4E3A\u5168\u5C40\u7EC4\u4EF6\u3002
docs/.vuepress/theme: \u7528\u4E8E\u5B58\u653E\u672C\u5730\u4E3B\u9898\u3002
docs/.vuepress/styles: \u7528\u4E8E\u5B58\u653E\u6837\u5F0F\u76F8\u5173\u7684\u6587\u4EF6\u3002
docs/.vuepress/styles/index.styl: \u5C06\u4F1A\u88AB\u81EA\u52A8\u5E94\u7528\u7684\u5168\u5C40\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F1A\u751F\u6210\u5728\u6700\u7EC8\u7684 CSS \u6587\u4EF6\u7ED3\u5C3E\uFF0C\u5177\u6709\u6BD4\u9ED8\u8BA4\u6837\u5F0F\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\u3002
docs/.vuepress/styles/palette.styl: \u7528\u4E8E\u91CD\u5199\u9ED8\u8BA4\u989C\u8272\u5E38\u91CF\uFF0C\u6216\u8005\u8BBE\u7F6E\u65B0\u7684 stylus \u989C\u8272\u5E38\u91CF\u3002
docs/.vuepress/public: \u9759\u6001\u8D44\u6E90\u76EE\u5F55\u3002
docs/.vuepress/templates: \u5B58\u50A8 HTML \u6A21\u677F\u6587\u4EF6\u3002
docs/.vuepress/templates/dev.html: \u7528\u4E8E\u5F00\u53D1\u73AF\u5883\u7684 HTML \u6A21\u677F\u6587\u4EF6\u3002
docs/.vuepress/templates/ssr.html: \u6784\u5EFA\u65F6\u57FA\u4E8E Vue SSR \u7684 HTML \u6A21\u677F\u6587\u4EF6\u3002
docs/.vuepress/config.js: \u914D\u7F6E\u6587\u4EF6\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F YML \u6216 toml\u3002
docs/.vuepress/enhanceApp.js: \u5BA2\u6237\u7AEF\u5E94\u7528\u7684\u589E\u5F3A\u3002

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90</h2><p>\u516C\u5171\u6587\u4EF6\u653E\u5728.vuepress/public\u4E2D</p><h2 id="makedown" tabindex="-1"><a class="header-anchor" href="#makedown" aria-hidden="true">#</a> makedown</h2><h3 id="\u94FE\u63A5home" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5home" aria-hidden="true">#</a> \u94FE\u63A5<a href="/" target="_blank" rel="noopener noreferrer">Home`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><table><thead><tr><th>Tables</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Are</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">right-aligned</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$1600</td></tr><tr><td>col 2 is</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">centered</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$12</td></tr><tr><td>zebra stripes</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">are neat</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$1</td></tr></tbody></table><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noopener noreferrer">Emoji`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h2><p>\u{1F389} \u{1F4AF}</p><h2 id="\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a> \u76EE\u5F55</h2><nav class="table-of-contents"><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#vuepress-\u9075\u5FAA-\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E-\u7684\u539F\u5219-\u63A8\u8350\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`VuePress \u9075\u5FAA \u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201D \u7684\u539F\u5219\uFF0C\u63A8\u8350\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A`);
      } else {
        return [
          vue.createTextVNode("VuePress \u9075\u5FAA \u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201D \u7684\u539F\u5219\uFF0C\u63A8\u8350\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#color-red-\u6CE8\u610F-\u76EE\u5F55\u540D\u5927\u5199" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`$\\color{red}{\u6CE8\u610F\uFF1A}$ \u76EE\u5F55\u540D\u5927\u5199`);
      } else {
        return [
          vue.createTextVNode("$\\color{red}{\u6CE8\u610F\uFF1A}$ \u76EE\u5F55\u540D\u5927\u5199")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u9759\u6001\u8D44\u6E90" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u9759\u6001\u8D44\u6E90`);
      } else {
        return [
          vue.createTextVNode("\u9759\u6001\u8D44\u6E90")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#makedown" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`makedown`);
      } else {
        return [
          vue.createTextVNode("makedown")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u94FE\u63A5home" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u94FE\u63A5Home`);
      } else {
        return [
          vue.createTextVNode("\u94FE\u63A5Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#emoji" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Emoji`);
      } else {
        return [
          vue.createTextVNode("Emoji")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u76EE\u5F55" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u76EE\u5F55`);
      } else {
        return [
          vue.createTextVNode("\u76EE\u5F55")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u81EA\u5B9A\u4E49\u5BB9\u5668" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u81EA\u5B9A\u4E49\u5BB9\u5668`);
      } else {
        return [
          vue.createTextVNode("\u81EA\u5B9A\u4E49\u5BB9\u5668")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "#\u4F7F\u7528\u7EC4\u4EF6" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4F7F\u7528\u7EC4\u4EF6`);
      } else {
        return [
          vue.createTextVNode("\u4F7F\u7528\u7EC4\u4EF6")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav><h2 id="\u81EA\u5B9A\u4E49\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5BB9\u5668" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5BB9\u5668</h2><div class="custom-container tip"><p class="custom-container-title">help</p><p>\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A</p></div><details class="custom-container details"><p>\u8FD9\u662F\u4E00\u4E2A\u8BE6\u60C5\u5757\uFF0C\u5728 IE / Edge \u4E2D\u4E0D\u751F\u6548</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u597D\uFF0CVuePress\uFF01&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h2 id="\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u7EC4\u4EF6</h2><p>\u6240\u6709\u5728 .vuepress/components \u4E2D\u627E\u5230\u7684 *.vue \u6587\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5730\u88AB\u6CE8\u518C\u4E3A\u5168\u5C40\u7684\u5F02\u6B65\u7EC4\u4EF6 \u4F60\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u7EC4\u4EF6\u5728\u4EFB\u610F\u7684 Markdown \u6587\u4EF6\u4E2D\uFF08\u7EC4\u4EF6\u540D\u662F\u901A\u8FC7\u6587\u4EF6\u540D\u53D6\u5230\u7684\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u2514\u2500 .vuepress
   \u2514\u2500 components
      \u251C\u2500 demo-1.vue
      \u251C\u2500 OtherComponent.vue
      \u2514\u2500 Foo
         \u2514\u2500 Bar.vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;demo-1/&gt;
&lt;OtherComponent/&gt;
&lt;Foo-Bar/&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u914D\u7F6E`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/vuepress.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var vuepress_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$b]]);
var vuepress_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": vuepress_html$1
});
const _sfc_main$u = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>const path = require(&#39;path&#39;);</p><p>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</p><p>const webpack = require(&#39;webpack&#39;);</p><p>module.exports = {</p><p>entry: &#39;./src/index.js&#39;,</p><p>output: {</p><p>path: path.resolve(__dirname, &#39;dist&#39;),</p><p>filename: &#39;main.js&#39;</p><p>},</p><p>mode: &#39;development&#39;,</p><p>module: {</p><p>rules: [</p><p>{</p><p>test: /\\.txt$/,</p><p>loader: &#39;raw-loader&#39;</p><p>},</p><p>{</p><p>test: /\\.css$/,</p><p>use: [&#39;style-loader&#39;, &#39;css-loader&#39;]</p><p>},</p><p>{</p><p>test: /\\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,</p><p>loader: &#39;file-loader&#39;,</p><p>options: {</p><p>name: &#39;[name].[ext]&#39;,</p><p>outputPath: &#39;./images/&#39;,</p><p>publicPath: &#39;./images/&#39;</p><p>}</p><p>},</p><p>// {</p><p>//\xA0 \xA0test: /\\.html$/,</p><p>//\xA0 \xA0loader: &#39;html-loader&#39;,</p><p>//\xA0 \xA0options:{</p><p>//\xA0 \xA0 \xA0esModule:false</p><p>//\xA0 \xA0}</p><p>// }</p><p>]</p><p>},</p><p>plugins: [</p><p>new HtmlWebpackPlugin({</p><p>template: &#39;./src/index.html&#39;</p><p>}),</p><p>new webpack.ProvidePlugin({</p><p>$: &quot;jquery&quot;,</p><p>jQuery: &quot;jquery&quot;</p><p>})</p><p>]</p><p>}</p><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/webpack\u7ECF\u5178\u914D\u7F6E.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var webpack_____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$a]]);
var webpack_____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": webpack_____html$1
});
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9488\u5BF9IE\u6D4F\u89C8\u5668\u7684\u4E00\u4E2A\u7279\u6B8A\u914D\u7F6E\uFF0C\u542B\u4E49\u662F\u8BA9IE\u6D4F\u89C8\u5668\u4EE5\u6700\u9AD8\u7684\u6E32\u67D3\u7EA7\u522B\u6E32\u67D3\u9875\u9762
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F00\u542F\u79FB\u52A8\u7AEF\u7684\u7406\u60F3\u89C6\u53E3
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF-\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF-\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1" aria-hidden="true">#</a> \u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF1A\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1</h3><p>\u5728Vue\u7684\u539F\u578B\u94FE\u4E0A\u64CD\u4F5C <code>Vue.prototype.x</code></p><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/\u6CE8\u610F.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var ___html$5 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9]]);
var ___html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ___html$5
});
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u57FA\u672C\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u5B9E\u4F8B" aria-hidden="true">#</a> <strong>\u57FA\u672C\u5B9E\u4F8B</strong></h2><p>// \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A button-counter \u7684\u65B0\u7EC4\u4EF6 Vue.component(&#39;button-counter&#39;, { data: function () { return { count: 0 } }, template: &#39;&lt;button v-on:click=&quot;count++&quot;&gt;You clicked me ${serverRenderer.ssrInterpolate(_ctx.count)} times.&lt;/button&gt;&#39; })</p><p>\u4F7F\u7528\u7EC4\u4EF6\uFF1Anew Vue({el:\u8282\u70B9\u3002\u3002\u3002})</p><h3 id="\u7EC4\u4EF6\u53EF\u91CD\u590D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u53EF\u91CD\u590D\u4F7F\u7528" aria-hidden="true">#</a> \u7EC4\u4EF6\u53EF\u91CD\u590D\u4F7F\u7528</h3><p>\u7EC4\u5EFA\u4E2D\uFF0Cdata\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570</p><h2 id="\u7EC4\u4EF6\u7684\u7EC4\u7EC7" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u7EC4\u7EC7" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u7EC4\u7EC7</h2><p><img src="https://cn.vuejs.org/images/components.png" alt="Component Tree"></p><p>\u901A\u5E38\u4E00\u4E2A\u5E94\u7528\u4F1A\u4EE5\u4E00\u68F5\u5D4C\u5957\u7684\u7EC4\u4EF6\u6811\u7684\u5F62\u5F0F\u6765\u7EC4\u7EC7\u3002</p><p>\u4E3A\u4E86\u80FD\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\uFF0C\u8FD9\u4E9B\u7EC4\u4EF6\u5FC5\u987B\u5148\u6CE8\u518C\u4EE5\u4FBFVue\u80FD\u591F\u8BC6\u522B\u3002\u8FD9\u91CC\u6709\u4E24\u79CD\u7EC4\u4EF6\u6CE8\u518C\u7684\u7C7B\u578B\uFF1A\u5168\u5C40\u6CE8\u518C\u548C\u5C40\u90E8\u6CE8\u518C\u3002</p><p>\u5168\u5C40\u6CE8\u518C\u4F7F\u7528Vue.component</p><p>\u6CE8\u518C\u540E\u901A\u8FC7new Vue\u4F7F\u7528</p><p>\u53EF\u4EE5\u901A\u8FC7data\u6216prop\u6765\u4F20\u9012\u6570\u636E</p><h2 id="\u901A\u8FC7prop\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7prop\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7Prop\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E</h2><p>Prop\u662F\u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u7684attribute\u3002\u5F53\u4E00\u4E2A\u503C\u4F20\u9012\u7ED9\u4E00\u4E2Aprop attribute\u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u53D8\u6210\u4E86\u90A3\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u4E00\u4E2Aproperty\u3002</p><p><code>\u901A\u8FC7prop\u5B9A\u4E49\u5C5E\u6027\u4F20\u9012\u6570\u636E\uFF0C\u82E5\u5C5E\u6027\u540D\u4E0E\u539F\u751FDOM\u5C5E\u6027\u76F8\u540C\u5219\u4F1A\u8986\u76D6\u539F\u751F\u5C5E\u6027\u7684\u7528\u6CD5</code></p><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
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
</code></pre><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/Vue/\u7EC4\u4EF6.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var ___html$3 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8]]);
var ___html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ___html$3
});
const _sfc_main$r = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h2 id="nodejs\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#nodejs\u57FA\u7840" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/nodejs/nodejs%E5%9F%BA%E7%A1%80.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`nodejs\u57FA\u7840`);
      } else {
        return [
          vue.createTextVNode("nodejs\u57FA\u7840")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="fs" tabindex="-1"><a class="header-anchor" href="#fs" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/nodejs/fs.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`fs`);
      } else {
        return [
          vue.createTextVNode("fs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h2 id="electron" tabindex="-1"><a class="header-anchor" href="#electron" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/javascript/nodejs/electron.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`electron`);
      } else {
        return [
          vue.createTextVNode("electron")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/nodejs/index.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var index_html$c = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$7]]);
var index_html$d = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$c
});
const _sfc_main$q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h1><p>1.\u5C06 Electron Forge \u6DFB\u52A0\u5230\u60A8\u5E94\u7528\u7684\u5F00\u53D1\u4F9D\u8D56\u4E2D\uFF0C\u5E76\u4F7F\u7528\u5176&quot;import&quot;\u547D\u4EE4\u8BBE\u7F6E Forge \u7684\u811A\u624B\u67B6\uFF1A <code>npm install --save-dev @electron-forge/cli</code><code>npx electron-forge import</code> 2.\u4F7F\u7528 Forge \u7684 make \u547D\u4EE4\u6765\u521B\u5EFA\u53EF\u5206\u53D1\u7684\u5E94\u7528\u7A0B\u5E8F\uFF1A <code>npm run make</code></p><h3 id="\u6253\u5305\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u914D\u7F6E" aria-hidden="true">#</a> \u6253\u5305\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &quot;config&quot;: {
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u4E24\u4E2A\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u6A21\u5757" aria-hidden="true">#</a> \u4E24\u4E2A\u6A21\u5757</h2><p>app \u6A21\u5757\uFF0C\u5B83\u63A7\u5236\u5E94\u7528\u7A0B\u5E8F\u7684\u4E8B\u4EF6\u751F\u547D\u5468\u671F\u3002 BrowserWindow \u6A21\u5757\uFF0C\u5B83\u521B\u5EFA\u548C\u7BA1\u7406\u5E94\u7528\u7A0B\u5E8F\u7A97\u53E3\u3002</p><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><ul><li><p><code>window-all-closed</code> \u6240\u6709\u7A97\u53E3\u90FD\u5173\u95ED\u65F6\u89E6\u53D1</p></li><li><p><code>activate</code> <sup>macOS</sup> \u5F53\u5E94\u7528\u91CD\u65B0\u88AB\u6FC0\u6D3B\u65F6\u89E6\u53D1</p></li></ul><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/nodejs/electron.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var electron_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$6]]);
var electron_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": electron_html$1
});
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p><code>fs.constants</code> \u5E38\u6570api</p><h4 id="color-red-\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#color-red-\u6CE8\u610F" aria-hidden="true">#</a> $\\color{red}{\u6CE8\u610F\uFF1A}$</h4><p><code>flags</code>\u8868\u793A\u6587\u4EF6\u64CD\u4F5C\u53C2\u6570\uFF0C\u7C7B\u4F3C\u4E8Epython\u7684<code>w\u3001r\u3001a\u3001b</code></p><p><code>a</code>\u6253\u5F00\u6587\u4EF6\u8FDB\u884C\u8FFD\u52A0\u3002\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6587\u4EF6 <code>a+</code>\u6253\u5F00\u6587\u4EF6\u8FDB\u884C\u8BFB\u53D6\u548C\u8FFD\u52A0\u3002\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6587\u4EF6 <code>r</code>\u6253\u5F00\u6587\u4EF6\u8FDB\u884C\u8BFB\u53D6\u3002\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u53D1\u751F\u5F02\u5E38 <code>r+</code>\u6253\u5F00\u6587\u4EF6\u8FDB\u884C\u8BFB\u5199\u3002\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u53D1\u751F\u5F02\u5E38 <code>w</code>\u6253\u5F00\u6587\u4EF6\u8FDB\u884C\u5199\u5165\u3002\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA <code>w+</code>\u6253\u5F00\u6587\u4EF6\u8FDB\u884C\u8BFB\u5199\u3002\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA</p><h6 id="color-red-\u540C\u6B65\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#color-red-\u540C\u6B65\u6A21\u5F0F" aria-hidden="true">#</a> $\\color{red}{\u540C\u6B65\u6A21\u5F0F}$</h6><p><code>as</code>\u4EE5\u540C\u6B65\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\u8FDB\u884C\u8FFD\u52A0\u3002\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6587\u4EF6 <code>as+</code>\u4EE5\u540C\u6B65\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\u8FDB\u884C\u8BFB\u53D6\u548C\u8FFD\u52A0\u3002\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6587\u4EF6 <code>rs+</code>\u4EE5\u540C\u6B65\u6A21\u5F0F\u8FDB\u884C\u8BFB\u5199</p><h2 id="\u540C\u6B65api" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65api" aria-hidden="true">#</a> \u540C\u6B65api</h2><h4 id="color-blue-\u5224\u65AD\u6587\u4EF6\u6216\u76EE\u5F55\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#color-blue-\u5224\u65AD\u6587\u4EF6\u6216\u76EE\u5F55\u6743\u9650" aria-hidden="true">#</a> $\\color{blue}{\u5224\u65AD\u6587\u4EF6\u6216\u76EE\u5F55\u6743\u9650}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">accessSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>mode<span class="token punctuation">)</span>
<span class="token comment">// mode: constants....F.OK R.OK W.OK X.OK</span>



<span class="token comment">// eg:</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">accessSync</span><span class="token punctuation">(</span><span class="token string">&quot;./new.js&quot;</span><span class="token punctuation">,</span> fs<span class="token punctuation">.</span>constants<span class="token punctuation">.</span><span class="token constant">R_OK</span> <span class="token operator">|</span> fs<span class="token punctuation">.</span>constants<span class="token punctuation">.</span><span class="token constant">W_OK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;can read/write&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;no access!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="color-blue-\u8FFD\u52A0\u6570\u636E\u5230\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#color-blue-\u8FFD\u52A0\u6570\u636E\u5230\u6587\u4EF6" aria-hidden="true">#</a> $\\color{blue}{\u8FFD\u52A0\u6570\u636E\u5230\u6587\u4EF6}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">appendFildSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>data<span class="token punctuation">,</span>encodeing<span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">appendFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./tfs.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;//\u7ED9\u6211\u65E0\u8BED\u6B7B\u4E86&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="color-blue-\u6253\u5F00\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#color-blue-\u6253\u5F00\u6587\u4EF6" aria-hidden="true">#</a> $\\color{blue}{\u6253\u5F00\u6587\u4EF6}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">openSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>flags<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="color-blue-\u5173\u95ED\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#color-blue-\u5173\u95ED\u6587\u4EF6" aria-hidden="true">#</a> $\\color{blue}{\u5173\u95ED\u6587\u4EF6}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">closeSync</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span>

<span class="token comment">// fd:\u5173\u95ED\u6587\u4EF6\u63CF\u8FF0\u7B26</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="color-blue-\u4FEE\u6539\u6587\u4EF6\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#color-blue-\u4FEE\u6539\u6587\u4EF6\u6743\u9650" aria-hidden="true">#</a> $\\color{blue}{\u4FEE\u6539\u6587\u4EF6\u6743\u9650}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">chmod</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>mode<span class="token punctuation">)</span>

<span class="token comment">// mode:\u6743\u9650\u7EA7\u522B String|Number</span>
<span class="token comment">// 1:x 2:w 4:r</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="color-blue-\u590D\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#color-blue-\u590D\u5236\u6587\u4EF6" aria-hidden="true">#</a> $\\color{blue}{\u590D\u5236\u6587\u4EF6}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">copyFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>dest<span class="token punctuation">,</span>mode<span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">copyFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;new.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ord.js&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="color-blue-\u590D\u5236\u76EE\u5F55\u53CA\u5176\u5B50\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#color-blue-\u590D\u5236\u76EE\u5F55\u53CA\u5176\u5B50\u6587\u4EF6" aria-hidden="true">#</a> $\\color{blue}{\u590D\u5236\u76EE\u5F55\u53CA\u5176\u5B50\u6587\u4EF6}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">cpSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>dest<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">cpSync</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;~&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="color-blue-\u5224\u65AD\u8DEF\u5F84\u5B58\u5728\u8FD4\u56DEfalse-\u5426\u5219\u8FD4\u56DEtrue" tabindex="-1"><a class="header-anchor" href="#color-blue-\u5224\u65AD\u8DEF\u5F84\u5B58\u5728\u8FD4\u56DEfalse-\u5426\u5219\u8FD4\u56DEtrue" aria-hidden="true">#</a> $\\color{blue}{\u5224\u65AD\u8DEF\u5F84\u5B58\u5728\u8FD4\u56DEfalse\uFF0C\u5426\u5219\u8FD4\u56DEtrue}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">+/asdf</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;no&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;yes&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="color-blue-\u521B\u5EFA\u6587\u4EF6\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#color-blue-\u521B\u5EFA\u6587\u4EF6\u94FE\u63A5" aria-hidden="true">#</a> $\\color{blue}{\u521B\u5EFA\u6587\u4EF6\u94FE\u63A5}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">linkSync</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>newPath<span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">linkSync</span><span class="token punctuation">(</span>__filename<span class="token punctuation">,</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/tt.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="color-blue-\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#color-blue-\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> $\\color{blue}{\u521B\u5EFA\u76EE\u5F55}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token literal-property property">options</span><span class="token operator">:</span>
	<span class="token literal-property property">recursive</span><span class="token operator">:</span>boolean<span class="token punctuation">,</span><span class="token boolean">false</span>\u8FD4\u56DE<span class="token keyword">undefined</span>\uFF0C<span class="token boolean">true</span>\u8FD4\u56DE\u521B\u5EFA\u7684\u7B2C\u4E00\u4E2A\u76EE\u5F55\u8DEF\u5F84

fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="color-blue-\u6253\u5F00\u76EE\u5F55\u7528\u4E8E\u540E\u7EED\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#color-blue-\u6253\u5F00\u76EE\u5F55\u7528\u4E8E\u540E\u7EED\u64CD\u4F5C" aria-hidden="true">#</a> $\\color{blue}{\u6253\u5F00\u76EE\u5F55\u7528\u4E8E\u540E\u7EED\u64CD\u4F5C}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">opendirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token literal-property property">options</span><span class="token operator">:</span>
		<span class="token literal-property property">encoding</span><span class="token operator">:</span> <span class="token string">&#39;uhf-8&#39;</span>\u9ED8\u8BA4
		<span class="token literal-property property">bufferSize</span><span class="token operator">:</span> <span class="token number">32</span> \u9ED8\u8BA4\uFF0C\u6570\u503C\u8D8A\u5927\u6027\u80FD\u8D8A\u597D\uFF0C\u5360\u7528\u5185\u5B58\u8D8A\u591A

fs<span class="token punctuation">.</span><span class="token function">opendirSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/test</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
\u8FD4\u56DEfs<span class="token punctuation">.</span>Dir\u7528\u4E8E\u540E\u7EED\u5BF9\u76EE\u5F55\u8FDB\u884C\u64CD\u4F5C
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="color-blue-\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u540E\u7EED\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#color-blue-\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u540E\u7EED\u64CD\u4F5C" aria-hidden="true">#</a> $\\color{blue}{\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u540E\u7EED\u64CD\u4F5C}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">openSync</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>flages<span class="token punctuation">,</span>mode<span class="token punctuation">]</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">opemSync</span><span class="token punctuation">(</span>__filename<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">flag</span><span class="token operator">:</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

\u8FD4\u56DE\u8868\u793A\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6574\u6570
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="color-blue-\u8BFB\u53D6\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#color-blue-\u8BFB\u53D6\u76EE\u5F55" aria-hidden="true">#</a> $\\color{blue}{\u8BFB\u53D6\u76EE\u5F55}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token literal-property property">options</span><span class="token operator">:</span>
		<span class="token literal-property property">encoding</span><span class="token operator">:</span> <span class="token string">&#39;utf-8&#39;</span>
		<span class="token literal-property property">withFileTypes</span><span class="token operator">:</span> boolean

fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">withFileTypes</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
withFileTypes\u4E3A<span class="token boolean">false</span>\u65F6\u8FD4\u56DE\u76EE\u5F55\u5185\u5BB9\uFF0C
\u5426\u5219\u8FD4\u56DEfs<span class="token punctuation">.</span>Dirent\u5BF9\u8C61
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="color-blue" tabindex="-1"><a class="header-anchor" href="#color-blue" aria-hidden="true">#</a> $\\color{blue}{}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code></code></pre><div class="line-numbers"></div></div><h4 id="color-blue-1" tabindex="-1"><a class="header-anchor" href="#color-blue-1" aria-hidden="true">#</a> $\\color{blue}{}$</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code></code></pre><div class="line-numbers"></div></div><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/nodejs/fs.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var fs_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5]]);
var fs_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": fs_html$1
});
const _sfc_main$o = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="nodejs\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#nodejs\u57FA\u7840" aria-hidden="true">#</a> nodejs\u57FA\u7840</h1><h3 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h3><h3 id="color-red-filename-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#color-red-filename-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0" aria-hidden="true">#</a> $\\color{red}{__filename}$ \u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0</h3><h3 id="color-red-dirname-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#color-red-dirname-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0" aria-hidden="true">#</a> $\\color{red}{__dirname}$ \u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0</h3><h3 id="\u5168\u5C40\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5BF9\u8C61" aria-hidden="true">#</a> \u5168\u5C40\u5BF9\u8C61</h3><h3 id="color-red-console-\u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#color-red-console-\u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA" aria-hidden="true">#</a> $\\color{red}{console}$ \u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA</h3><h3 id="color-red-process-\u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#color-red-process-\u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001" aria-hidden="true">#</a> $\\color{red}{process}$ \u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001</h3><h3 id="color-red-process-node-js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#color-red-process-node-js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3" aria-hidden="true">#</a> $\\color{red}{process}$ Node.js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3</h3><h3 id="\u5168\u5C40\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u51FD\u6570" aria-hidden="true">#</a> \u5168\u5C40\u51FD\u6570</h3><h3 id="color-red-settimeout" tabindex="-1"><a class="header-anchor" href="#color-red-settimeout" aria-hidden="true">#</a> $\\color{red}{setTimeout()}$</h3><h3 id="color-red-cleartimeout" tabindex="-1"><a class="header-anchor" href="#color-red-cleartimeout" aria-hidden="true">#</a> $\\color{red}{clearTimeout()}$</h3><h3 id="color-red-setinterval" tabindex="-1"><a class="header-anchor" href="#color-red-setinterval" aria-hidden="true">#</a> $\\color{red}{setInterval()}$</h3><h3 id="\u6A21\u5757\u5316\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316\u7F16\u7A0B" aria-hidden="true">#</a> \u6A21\u5757\u5316\u7F16\u7A0B</h3><h3 id="color-red-exports\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#color-red-exports\u5BF9\u8C61" aria-hidden="true">#</a> $\\color{red}{exports\u5BF9\u8C61}$</h3><h3 id="color-red-module\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#color-red-module\u5BF9\u8C61" aria-hidden="true">#</a> $\\color{red}{module\u5BF9\u8C61}$</h3><h3 id="\u5305\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5305\u7BA1\u7406" aria-hidden="true">#</a> \u5305\u7BA1\u7406</h3><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5305\u7ED3\u6784</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">package.json</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5728\u9876\u5C42\u76EE\u5F55\u7684\u5305\u63CF\u8FF0\u6587\u4EF6\uFF0C\u8BF4\u660E\u6587\u4EF6</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">bin</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B58\u653E\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u76EE\u5F55</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">lib</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B58\u653EJavaScript\u6587\u4EF6\u7684\u76EE\u5F55</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">doc</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B58\u653E\u6587\u6863\u7684\u76EE\u5F55</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">test</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B58\u653E\u5355\u5143\u6D4B\u8BD5\u7684\u76EE\u5F55</td></tr></tbody></table><h4 id="package-json-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#package-json-\u8BF4\u660E" aria-hidden="true">#</a> package.json \u8BF4\u660E</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>\u5305\u7684\u540D\u79F0</td></tr><tr><td>description</td><td>\u5305\u7684\u7B80\u4ECB</td></tr><tr><td>version</td><td>\u5305\u7684\u7248\u672C\u53F7</td></tr><tr><td>keywords</td><td>\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5728NPM\u4E2D\u5206\u7C7B\u641C\u7D22</td></tr><tr><td>author</td><td>\u5305\u7684\u4F5C\u8005</td></tr><tr><td>main</td><td>\u914D\u7F6E\u5305\u7684\u5165\u53E3\uFF0C\u9ED8\u8BA4\u662F\u6A21\u5757\u6839\u76EE\u5F55\u4E0B\u7684index.js\u6587\u4EF6</td></tr><tr><td>dependencies</td><td>\u5305\u7684\u4F9D\u8D56\u9879\uFF0CNPM\u4F1A\u6839\u636E\u8BE5\u5C5E\u6027\u81EA\u52A8\u52A0\u8F7D\u4F9D\u8D56\u5305</td></tr><tr><td>script</td><td>\u6307\u5B9A\u4E86\u8FD0\u884C\u811A\u672C\u547D\u4EE4\u7684NPM\u547D\u4EE4\u884C\u7F29\u5199</td></tr></tbody></table><h4 id="npm-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#npm-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> NPM \u5E38\u7528\u547D\u4EE4</h4><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>init -y</td><td>\u521D\u59CB\u5316\u4E00\u4E2Apackage.json\u6587\u4EF6</td></tr><tr><td>install \u5305\u540D</td><td>\u5B89\u88C5\u4E00\u4E2A\u5305</td></tr><tr><td>install -save \u5305\u540D</td><td>\u5C06\u5B89\u88C5\u7684\u5305\u6DFB\u52A0\u5230package.json\u7684\u4F9D\u8D56\u4E2D</td></tr><tr><td>install -g \u5305\u540D</td><td>\u5168\u5C40\u5B89\u88C5\u5305</td></tr><tr><td>docs \u5305\u540D</td><td>\u67E5\u770B\u5305\u7684\u6587\u6863</td></tr><tr><td>root -g</td><td>\u67E5\u770B\u5168\u5C40\u5B89\u88C5\u8DEF\u5F84</td></tr><tr><td>comfig set prefix \u8DEF\u5F84</td><td>\u4FEE\u6539\u5168\u5C40\u5305\u5B89\u88C5\u8DEF\u5F84</td></tr><tr><td>list</td><td>\u67E5\u770B\u5F53\u524D\u76EE\u5F55\u4E0B\u5B89\u88C5\u7684\u5305</td></tr><tr><td>list -g</td><td>\u67E5\u770B\u5168\u5C40\u5B89\u88C5\u7684\u5305</td></tr><tr><td>uninstall \u5305\u540D</td><td>\u5220\u9664\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u5305</td></tr><tr><td>uninstall -g</td><td>\u5220\u9664\u5168\u5C40\u5B89\u88C5\u7684\u5305</td></tr><tr><td>update \u5305\u540D</td><td>\u5347\u7EA7\u5F53\u524D\u76EE\u5F55\u7684\u5305</td></tr></tbody></table><h1 id="nodejs\u57FA\u7840-1" tabindex="-1"><a class="header-anchor" href="#nodejs\u57FA\u7840-1" aria-hidden="true">#</a> nodejs\u57FA\u7840</h1><h3 id="\u5168\u5C40\u53D8\u91CF-1" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF-1" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h3><h3 id="color-red-filename-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0-1" tabindex="-1"><a class="header-anchor" href="#color-red-filename-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0-1" aria-hidden="true">#</a> $\\color{red}{__filename}$ \u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0</h3><h3 id="color-red-dirname-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0-1" tabindex="-1"><a class="header-anchor" href="#color-red-dirname-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0-1" aria-hidden="true">#</a> $\\color{red}{__dirname}$ \u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0</h3><h3 id="\u5168\u5C40\u5BF9\u8C61-1" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5BF9\u8C61-1" aria-hidden="true">#</a> \u5168\u5C40\u5BF9\u8C61</h3><h3 id="color-red-console-\u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA-1" tabindex="-1"><a class="header-anchor" href="#color-red-console-\u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA-1" aria-hidden="true">#</a> $\\color{red}{console}$ \u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA</h3><h3 id="color-red-process-\u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001-1" tabindex="-1"><a class="header-anchor" href="#color-red-process-\u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001-1" aria-hidden="true">#</a> $\\color{red}{process}$ \u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001</h3><h3 id="color-red-process-node-js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3-1" tabindex="-1"><a class="header-anchor" href="#color-red-process-node-js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3-1" aria-hidden="true">#</a> $\\color{red}{process}$ Node.js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3</h3><h3 id="\u5168\u5C40\u51FD\u6570-1" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u51FD\u6570-1" aria-hidden="true">#</a> \u5168\u5C40\u51FD\u6570</h3><h3 id="color-red-settimeout-1" tabindex="-1"><a class="header-anchor" href="#color-red-settimeout-1" aria-hidden="true">#</a> $\\color{red}{setTimeout()}$</h3><h3 id="color-red-cleartimeout-1" tabindex="-1"><a class="header-anchor" href="#color-red-cleartimeout-1" aria-hidden="true">#</a> $\\color{red}{clearTimeout()}$</h3><h3 id="color-red-setinterval-1" tabindex="-1"><a class="header-anchor" href="#color-red-setinterval-1" aria-hidden="true">#</a> $\\color{red}{setInterval()}$</h3><h3 id="\u6A21\u5757\u5316\u7F16\u7A0B-1" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316\u7F16\u7A0B-1" aria-hidden="true">#</a> \u6A21\u5757\u5316\u7F16\u7A0B</h3><h3 id="color-red-exports\u5BF9\u8C61-1" tabindex="-1"><a class="header-anchor" href="#color-red-exports\u5BF9\u8C61-1" aria-hidden="true">#</a> $\\color{red}{exports\u5BF9\u8C61}$</h3><h3 id="color-red-module\u5BF9\u8C61-1" tabindex="-1"><a class="header-anchor" href="#color-red-module\u5BF9\u8C61-1" aria-hidden="true">#</a> $\\color{red}{module\u5BF9\u8C61}$</h3><h3 id="\u5305\u7BA1\u7406-1" tabindex="-1"><a class="header-anchor" href="#\u5305\u7BA1\u7406-1" aria-hidden="true">#</a> \u5305\u7BA1\u7406</h3><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5305\u7ED3\u6784</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">package.json</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5728\u9876\u5C42\u76EE\u5F55\u7684\u5305\u63CF\u8FF0\u6587\u4EF6\uFF0C\u8BF4\u660E\u6587\u4EF6</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">bin</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B58\u653E\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u76EE\u5F55</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">lib</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B58\u653EJavaScript\u6587\u4EF6\u7684\u76EE\u5F55</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">doc</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B58\u653E\u6587\u6863\u7684\u76EE\u5F55</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">test</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5B58\u653E\u5355\u5143\u6D4B\u8BD5\u7684\u76EE\u5F55</td></tr></tbody></table><h4 id="package-json-\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#package-json-\u8BF4\u660E-1" aria-hidden="true">#</a> package.json \u8BF4\u660E</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>\u5305\u7684\u540D\u79F0</td></tr><tr><td>description</td><td>\u5305\u7684\u7B80\u4ECB</td></tr><tr><td>version</td><td>\u5305\u7684\u7248\u672C\u53F7</td></tr><tr><td>keywords</td><td>\u5173\u952E\u8BCD\u6570\u7EC4\uFF0C\u7528\u4E8E\u5728NPM\u4E2D\u5206\u7C7B\u641C\u7D22</td></tr><tr><td>author</td><td>\u5305\u7684\u4F5C\u8005</td></tr><tr><td>main</td><td>\u914D\u7F6E\u5305\u7684\u5165\u53E3\uFF0C\u9ED8\u8BA4\u662F\u6A21\u5757\u6839\u76EE\u5F55\u4E0B\u7684index.js\u6587\u4EF6</td></tr><tr><td>dependencies</td><td>\u5305\u7684\u4F9D\u8D56\u9879\uFF0CNPM\u4F1A\u6839\u636E\u8BE5\u5C5E\u6027\u81EA\u52A8\u52A0\u8F7D\u4F9D\u8D56\u5305</td></tr><tr><td>script</td><td>\u6307\u5B9A\u4E86\u8FD0\u884C\u811A\u672C\u547D\u4EE4\u7684NPM\u547D\u4EE4\u884C\u7F29\u5199</td></tr></tbody></table><h4 id="npm-\u5E38\u7528\u547D\u4EE4-1" tabindex="-1"><a class="header-anchor" href="#npm-\u5E38\u7528\u547D\u4EE4-1" aria-hidden="true">#</a> NPM \u5E38\u7528\u547D\u4EE4</h4><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>init -y</td><td>\u521D\u59CB\u5316\u4E00\u4E2Apackage.json\u6587\u4EF6</td></tr><tr><td>install \u5305\u540D</td><td>\u5B89\u88C5\u4E00\u4E2A\u5305</td></tr><tr><td>install -save \u5305\u540D</td><td>\u5C06\u5B89\u88C5\u7684\u5305\u6DFB\u52A0\u5230package.json\u7684\u4F9D\u8D56\u4E2D</td></tr><tr><td>install -g \u5305\u540D</td><td>\u5168\u5C40\u5B89\u88C5\u5305</td></tr><tr><td>docs \u5305\u540D</td><td>\u67E5\u770B\u5305\u7684\u6587\u6863</td></tr><tr><td>root -g</td><td>\u67E5\u770B\u5168\u5C40\u5B89\u88C5\u8DEF\u5F84</td></tr><tr><td>comfig set prefix \u8DEF\u5F84</td><td>\u4FEE\u6539\u5168\u5C40\u5305\u5B89\u88C5\u8DEF\u5F84</td></tr><tr><td>list</td><td>\u67E5\u770B\u5F53\u524D\u76EE\u5F55\u4E0B\u5B89\u88C5\u7684\u5305</td></tr><tr><td>list -g</td><td>\u67E5\u770B\u5168\u5C40\u5B89\u88C5\u7684\u5305</td></tr><tr><td>uninstall \u5305\u540D</td><td>\u5220\u9664\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u5305</td></tr><tr><td>uninstall -g</td><td>\u5220\u9664\u5168\u5C40\u5B89\u88C5\u7684\u5305</td></tr><tr><td>update \u5305\u540D</td><td>\u5347\u7EA7\u5F53\u524D\u76EE\u5F55\u7684\u5305</td></tr></tbody></table><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/javascript/nodejs/nodejs\u57FA\u7840.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var nodejs___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4]]);
var nodejs___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": nodejs___html$1
});
const _sfc_main$n = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "socket",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#socket" aria-hidden="true">#</a> `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/socket.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`socket`);
      } else {
        return [
          vue.createTextVNode("socket")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/\u7F51\u7EDC\u7F16\u7A0B/index.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var index_html$a = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$3]]);
var index_html$b = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$a
});
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u521B\u5EFA\u5957\u63A5\u5B57" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5957\u63A5\u5B57" aria-hidden="true">#</a> \u521B\u5EFA\u5957\u63A5\u5B57</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> socket
sock <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>
    socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span>
    socket<span class="token punctuation">.</span>SOCK_STREAM <span class="token operator">|</span> socket<span class="token punctuation">.</span>SOCK_NONBLOCK<span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5173\u95ED\u5957\u63A5\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u5957\u63A5\u5B57" aria-hidden="true">#</a> \u5173\u95ED\u5957\u63A5\u5B57</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>socket<span class="token punctuation">.</span>close<span class="token punctuation">(</span>fd<span class="token punctuation">)</span>
<span class="token comment"># fd:\u6587\u4EF6\u63CF\u8FF0\u7B26</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/python/\u7F51\u7EDC\u7F16\u7A0B/socket.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var socket_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2]]);
var socket_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": socket_html$1
});
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _404_html$1
});
const data$$ = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "linux",
      "slug": "linux",
      "children": []
    },
    {
      "level": 2,
      "title": "python",
      "slug": "python",
      "children": []
    },
    {
      "level": 2,
      "title": "markdown",
      "slug": "markdown",
      "children": []
    },
    {
      "level": 2,
      "title": "git",
      "slug": "git",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1",
      "slug": "\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1",
      "children": []
    },
    {
      "level": 2,
      "title": "C",
      "slug": "c",
      "children": []
    },
    {
      "level": 2,
      "title": "javascript",
      "slug": "javascript",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "README.md"
};
var index_html$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$$
});
const data$_ = {
  "key": "v-372e1400",
  "path": "/C/1%E3%80%81%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7EAF\u91CF\u7C7B\u578B",
      "slug": "\u7EAF\u91CF\u7C7B\u578B",
      "children": [
        {
          "level": 3,
          "title": "\u7B97\u6570\u7C7B\u578B",
          "slug": "\u7B97\u6570\u7C7B\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6307\u9488\u7C7B\u578B(*)",
          "slug": "\u6307\u9488\u7C7B\u578B",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u7EC4\u5408\u7C7B\u578B",
      "slug": "\u7EC4\u5408\u7C7B\u578B",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7B26\u53F7\u5C5E\u6027",
      "slug": "\u7B26\u53F7\u5C5E\u6027",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "C/1\u3001\u6570\u636E\u7C7B\u578B.md"
};
var _1______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$_
});
const data$Z = {
  "key": "v-00f307d9",
  "path": "/C/2%E3%80%81printf.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "printf()\u5360\u4F4D\u7B26",
      "slug": "printf-\u5360\u4F4D\u7B26",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8F6C\u4E49\u5B57\u7B26",
      "slug": "\u8F6C\u4E49\u5B57\u7B26",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B57\u9762\u91CF\u540E\u7F00",
      "slug": "\u5B57\u9762\u91CF\u540E\u7F00",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "C/2\u3001printf.md"
};
var _2_printf_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$Z
});
const data$Y = {
  "key": "v-e4db34c6",
  "path": "/C/3%E3%80%81%E6%8C%87%E9%92%88.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5173\u4E8E\u6307\u9488",
      "slug": "\u5173\u4E8E\u6307\u9488",
      "children": [
        {
          "level": 3,
          "title": "*\u8FD0\u7B97\u7B26",
          "slug": "\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "&\u8FD0\u7B97\u7B26",
          "slug": "\u8FD0\u7B97\u7B26-1",
          "children": []
        },
        {
          "level": 3,
          "title": "\u51FD\u6570\u6307\u9488",
          "slug": "\u51FD\u6570\u6307\u9488",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "exit()",
      "slug": "exit",
      "children": []
    },
    {
      "level": 2,
      "title": "atexit()",
      "slug": "atexit",
      "children": []
    },
    {
      "level": 2,
      "title": "\u51FD\u6570\u8BF4\u660E\u7B26",
      "slug": "\u51FD\u6570\u8BF4\u660E\u7B26",
      "children": [
        {
          "level": 3,
          "title": "extern \u8BF4\u660E\u7B26",
          "slug": "extern-\u8BF4\u660E\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "static \u8BF4\u660E\u7B26",
          "slug": "static-\u8BF4\u660E\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "const \u8BF4\u660E\u7B26",
          "slug": "const-\u8BF4\u660E\u7B26",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u6570\u7EC4\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488",
      "slug": "\u6570\u7EC4\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "C/3\u3001\u6307\u9488.md"
};
var _3____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$Y
});
const data$X = {
  "key": "v-5e3ce9b8",
  "path": "/C/4%E3%80%81%E5%87%BD%E6%95%B0.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u51FD\u6570\u7684\u58F0\u660E",
      "slug": "\u51FD\u6570\u7684\u58F0\u660E",
      "children": [
        {
          "level": 3,
          "title": "exit()",
          "slug": "exit",
          "children": []
        },
        {
          "level": 3,
          "title": "ataxit()",
          "slug": "ataxit",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u51FD\u6570\u8BF4\u660E\u7B26",
      "slug": "\u51FD\u6570\u8BF4\u660E\u7B26",
      "children": [
        {
          "level": 3,
          "title": "extern",
          "slug": "extern",
          "children": []
        },
        {
          "level": 3,
          "title": "static",
          "slug": "static",
          "children": []
        },
        {
          "level": 3,
          "title": "const",
          "slug": "const",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u53EF\u53D8\u53C2\u6570",
      "slug": "\u53EF\u53D8\u53C2\u6570",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "C/4\u3001\u51FD\u6570.md"
};
var _4____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$X
});
const data$W = {
  "key": "v-936c3cec",
  "path": "/C/5%E3%80%81%E6%95%B0%E7%BB%84.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u4E00\u7EF4\u6570\u7EC4",
      "slug": "\u4E00\u7EF4\u6570\u7EC4",
      "children": []
    },
    {
      "level": 3,
      "title": "\u6570\u7EC4\u957F\u5EA6",
      "slug": "\u6570\u7EC4\u957F\u5EA6",
      "children": []
    },
    {
      "level": 3,
      "title": "\u53D8\u957F\u6570\u7EC4",
      "slug": "\u53D8\u957F\u6570\u7EC4",
      "children": []
    },
    {
      "level": 3,
      "title": "\u6570\u7EC4\u7684\u5730\u5740",
      "slug": "\u6570\u7EC4\u7684\u5730\u5740",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "C/5\u3001\u6570\u7EC4.md"
};
var _5____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$W
});
const data$V = {
  "key": "v-4865d122",
  "path": "/C/6.%E5%AD%97%E7%AC%A6%E4%B8%B2.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u58F0\u660E\u5B57\u7B26\u4E32\u53D8\u91CF",
      "slug": "\u58F0\u660E\u5B57\u7B26\u4E32\u53D8\u91CF",
      "children": [
        {
          "level": 3,
          "title": "$\\color{red}{\u5B57\u7B26\u6570\u7EC4\u4E0E\u5B57\u7B26\u6307\u9488\u7684\u533A\u522B}$",
          "slug": "color-red-\u5B57\u7B26\u6570\u7EC4\u4E0E\u5B57\u7B26\u6307\u9488\u7684\u533A\u522B",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "C/6.\u5B57\u7B26\u4E32.md"
};
var _6_____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$V
});
const data$U = {
  "key": "v-50d25096",
  "path": "/C/C%E8%AF%AD%E8%A8%80Json%E5%AE%9E%E7%8E%B0.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "C/C\u8BED\u8A00Json\u5B9E\u73B0.md"
};
var C__Json___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$U
});
const data$T = {
  "key": "v-5cd2a837",
  "path": "/C/C%E8%AF%AD%E8%A8%80%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "C/C\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0.md"
};
var C__________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$T
});
const data$S = {
  "key": "v-4a99c884",
  "path": "/C/C%E8%AF%AD%E8%A8%80%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C%E5%AE%9E%E7%8E%B0.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "C/C\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0.md"
};
var C_________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$S
});
const data$R = {
  "key": "v-1a3a2105",
  "path": "/C/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "2\u3001printf",
      "slug": "_2\u3001printf",
      "children": []
    },
    {
      "level": 2,
      "title": "5\u3001\u6570\u7EC4",
      "slug": "_5\u3001\u6570\u7EC4",
      "children": []
    },
    {
      "level": 2,
      "title": "3\u3001\u6307\u9488",
      "slug": "_3\u3001\u6307\u9488",
      "children": []
    },
    {
      "level": 2,
      "title": "1\u3001\u6570\u636E\u7C7B\u578B",
      "slug": "_1\u3001\u6570\u636E\u7C7B\u578B",
      "children": []
    },
    {
      "level": 2,
      "title": "6.\u5B57\u7B26\u4E32",
      "slug": "_6-\u5B57\u7B26\u4E32",
      "children": []
    },
    {
      "level": 2,
      "title": "4\u3001\u51FD\u6570",
      "slug": "_4\u3001\u51FD\u6570",
      "children": []
    },
    {
      "level": 2,
      "title": "C\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0",
      "slug": "c\u8BED\u8A00\u6570\u7EC4\u64CD\u4F5C\u5B9E\u73B0",
      "children": []
    },
    {
      "level": 2,
      "title": "C\u8BED\u8A00Json\u5B9E\u73B0",
      "slug": "c\u8BED\u8A00json\u5B9E\u73B0",
      "children": []
    },
    {
      "level": 2,
      "title": "C\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0",
      "slug": "c\u8BED\u8A00\u5B57\u7B26\u4E32\u64CD\u4F5C\u5B9E\u73B0",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "C/README.md"
};
var index_html$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$R
});
const data$Q = {
  "key": "v-fb262906",
  "path": "/git/Git.html",
  "title": "Git",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "git init [warehouse name] \u521D\u59CB\u5316\u4ED3\u5E93",
      "slug": "git-init-warehouse-name-\u521D\u59CB\u5316\u4ED3\u5E93",
      "children": []
    },
    {
      "level": 3,
      "title": "git add [file name] \u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93",
      "slug": "git-add-file-name-\u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u4ED3\u5E93",
      "children": []
    },
    {
      "level": 3,
      "title": 'git commit -m "\u8BF4\u660E" \u628A\u6587\u4EF6\u63D0\u4EA4\u5230\u4ED3\u5E93\u5E76\u63D0\u4F9B\u89E3\u91CA',
      "slug": "git-commit-m-\u8BF4\u660E-\u628A\u6587\u4EF6\u63D0\u4EA4\u5230\u4ED3\u5E93\u5E76\u63D0\u4F9B\u89E3\u91CA",
      "children": []
    },
    {
      "level": 3,
      "title": "git status \u67E5\u770B\u4ED3\u5E93\u5F53\u524D\u72B6\u6001",
      "slug": "git-status-\u67E5\u770B\u4ED3\u5E93\u5F53\u524D\u72B6\u6001",
      "children": []
    },
    {
      "level": 3,
      "title": "git diff \u67E5\u770B\u4E0A\u6B21\u4FEE\u6539\u7684\u5185\u5BB9",
      "slug": "git-diff-\u67E5\u770B\u4E0A\u6B21\u4FEE\u6539\u7684\u5185\u5BB9",
      "children": []
    },
    {
      "level": 3,
      "title": "git log  [--pretty=oneline]  \u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7",
      "slug": "git-log-pretty-oneline-\u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7",
      "children": []
    },
    {
      "level": 3,
      "title": "git reset --hard \u7248\u672C\u53F7 \u6307\u5B9A\u67D0\u4E00\u7248\u672C(\u7248\u672C\u53F7)",
      "slug": "git-reset-hard-\u7248\u672C\u53F7-\u6307\u5B9A\u67D0\u4E00\u7248\u672C-\u7248\u672C\u53F7",
      "children": []
    },
    {
      "level": 3,
      "title": "git reflog \u663E\u793A\u547D\u4EE4\u5386\u53F2",
      "slug": "git-reflog-\u663E\u793A\u547D\u4EE4\u5386\u53F2",
      "children": []
    },
    {
      "level": 3,
      "title": "git checkout -- [file name]  \u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539",
      "slug": "git-checkout-file-name-\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539",
      "children": []
    },
    {
      "level": 3,
      "title": "git rm [file name]  \u5220\u9664\u4E00\u4E2A\u6587\u4EF6",
      "slug": "git-rm-file-name-\u5220\u9664\u4E00\u4E2A\u6587\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5173\u8054\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93",
      "slug": "\u5173\u8054\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93",
      "children": []
    },
    {
      "level": 2,
      "title": "git remote add [\u5206\u652F\u540D] url  \u6DFB\u52A0\u5173\u8054",
      "slug": "git-remote-add-\u5206\u652F\u540D-url-\u6DFB\u52A0\u5173\u8054",
      "children": []
    },
    {
      "level": 2,
      "title": "git push -u [\u5206\u652F\u540D] master \u5C06\u672C\u5730\u5E93\u7684\u6240\u6709\u5185\u5BB9\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93\uFF0C\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528git push\u7B80\u5316\u547D\u4EE4",
      "slug": "git-push-u-\u5206\u652F\u540D-master-\u5C06\u672C\u5730\u5E93\u7684\u6240\u6709\u5185\u5BB9\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93-\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528git-push\u7B80\u5316\u547D\u4EE4",
      "children": []
    },
    {
      "level": 2,
      "title": "git config --global credential.helper store\u514D\u5BC6push",
      "slug": "git-config-global-credential-helper-store\u514D\u5BC6push",
      "children": []
    },
    {
      "level": 2,
      "title": "git config --global core.quotepath false    \u4E2D\u6587\u4E71\u7801",
      "slug": "git-config-global-core-quotepath-false-\u4E2D\u6587\u4E71\u7801",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "git/Git.md"
};
var Git_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$Q
});
const data$P = {
  "key": "v-83a32798",
  "path": "/git/tip.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u672C\u5730\u63D0\u4EA4",
      "slug": "\u672C\u5730\u63D0\u4EA4",
      "children": []
    },
    {
      "level": 2,
      "title": "\u62C9\u53D6\u63D0\u4EA4",
      "slug": "\u62C9\u53D6\u63D0\u4EA4",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "git/tip.md"
};
var tip_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$P
});
const data$O = {
  "key": "v-04a7b2af",
  "path": "/git/%E6%9C%AC%E5%9C%B0%E6%8F%90%E4%BA%A4.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "git/\u672C\u5730\u63D0\u4EA4.md"
};
var _____html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$O
});
const data$N = {
  "key": "v-1596d78b",
  "path": "/javascript/JavaScript%E5%9F%BA%E7%A1%80.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u53D8\u91CF\uFF08Variable\uFF09",
      "slug": "\u53D8\u91CF-variable",
      "children": []
    },
    {
      "level": 2,
      "title": "JavaScript \u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784",
      "slug": "javascript-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784",
      "children": []
    },
    {
      "level": 2,
      "title": "\u539F\u59CB\u503C",
      "slug": "\u539F\u59CB\u503C",
      "children": [
        {
          "level": 3,
          "title": "\u5E03\u5C14\u7C7B\u578B",
          "slug": "\u5E03\u5C14\u7C7B\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "Null \u7C7B\u578B",
          "slug": "null-\u7C7B\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6570\u5B57\u7C7B\u578B",
          "slug": "\u6570\u5B57\u7C7B\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "BigInt \u7C7B\u578B",
          "slug": "bigint-\u7C7B\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5B57\u7B26\u4E32\u7C7B\u578B",
          "slug": "\u5B57\u7B26\u4E32\u7C7B\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B26\u53F7\u7C7B\u578B",
          "slug": "\u7B26\u53F7\u7C7B\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5BF9\u8C61",
          "slug": "\u5BF9\u8C61",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": '"\u6807\u51C6\u7684" \u5BF9\u8C61, \u548C\u51FD\u6570',
      "slug": "\u6807\u51C6\u7684-\u5BF9\u8C61-\u548C\u51FD\u6570",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8868\u8FBE\u5F0F",
      "slug": "\u8868\u8FBE\u5F0F",
      "children": [
        {
          "level": 3,
          "title": "\u4E3B\u8981\u8868\u8FBE\u5F0F",
          "slug": "\u4E3B\u8981\u8868\u8FBE\u5F0F",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5DE6\u8868\u8FBE\u5F0F",
          "slug": "\u5DE6\u8868\u8FBE\u5F0F",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u8FD0\u7B97\u7B26",
      "slug": "\u8FD0\u7B97\u7B26",
      "children": [
        {
          "level": 3,
          "title": "\u4E00\u5143\u8FD0\u7B97\u7B26",
          "slug": "\u4E00\u5143\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u7B97\u672F\u8FD0\u7B97\u7B26",
          "slug": "\u7B97\u672F\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5173\u7CFB\u8FD0\u7B97\u7B26",
          "slug": "\u5173\u7CFB\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u76F8\u7B49\u8FD0\u7B97\u7B26",
          "slug": "\u76F8\u7B49\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4F4D\u79FB\u8FD0\u7B97\u7B26",
          "slug": "\u4F4D\u79FB\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26",
          "slug": "\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4E8C\u5143\u903B\u8F91\u8FD0\u7B97\u7B26",
          "slug": "\u4E8C\u5143\u903B\u8F91\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6761\u4EF6(\u4E09\u5143)\u8FD0\u7B97\u7B26",
          "slug": "\u6761\u4EF6-\u4E09\u5143-\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8D4B\u503C\u8FD0\u7B97\u7B26",
          "slug": "\u8D4B\u503C\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u9017\u53F7\u64CD\u4F5C\u7B26",
          "slug": "\u9017\u53F7\u64CD\u4F5C\u7B26",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "javascript/JavaScript\u57FA\u7840.md"
};
var JavaScript___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$N
});
const data$M = {
  "key": "v-e02a086e",
  "path": "/javascript/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "axios",
      "slug": "axios",
      "children": []
    },
    {
      "level": 2,
      "title": "js\u7C7B\u5E93",
      "slug": "js\u7C7B\u5E93",
      "children": []
    },
    {
      "level": 2,
      "title": "Vue",
      "slug": "vue",
      "children": []
    },
    {
      "level": 2,
      "title": "\u57FA\u672C\u6982\u5FF5",
      "slug": "\u57FA\u672C\u6982\u5FF5",
      "children": []
    },
    {
      "level": 2,
      "title": "canvas",
      "slug": "canvas",
      "children": []
    },
    {
      "level": 2,
      "title": "JavaScript\u57FA\u7840",
      "slug": "javascript\u57FA\u7840",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5FAE\u8F6Fjavascript",
      "slug": "\u5FAE\u8F6Fjavascript",
      "children": []
    },
    {
      "level": 2,
      "title": "Selenium",
      "slug": "selenium",
      "children": []
    },
    {
      "level": 2,
      "title": "nodejs",
      "slug": "nodejs",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/README.md"
};
var index_html$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$M
});
const data$L = {
  "key": "v-9c377a1c",
  "path": "/javascript/Selenium.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4ECB\u7ECD",
      "slug": "\u4ECB\u7ECD",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B89\u88C5",
      "slug": "\u5B89\u88C5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u542F\u52A8\u7A0B\u5E8F",
      "slug": "\u542F\u52A8\u7A0B\u5E8F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6D4F\u89C8\u5668\u5BFC\u822A\u7F51\u5740",
      "slug": "\u6D4F\u89C8\u5668\u5BFC\u822A\u7F51\u5740",
      "children": []
    },
    {
      "level": 2,
      "title": "\u83B7\u53D6\u5F53\u524D\u7F51\u5740",
      "slug": "\u83B7\u53D6\u5F53\u524D\u7F51\u5740",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8FD4\u56DE",
      "slug": "\u8FD4\u56DE",
      "children": []
    },
    {
      "level": 2,
      "title": "\u524D\u8FDB",
      "slug": "\u524D\u8FDB",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5237\u65B0",
      "slug": "\u5237\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "\u83B7\u5F97\u6807\u9898",
      "slug": "\u83B7\u5F97\u6807\u9898",
      "children": []
    },
    {
      "level": 2,
      "title": "\u83B7\u53D6\u7A97\u53E3",
      "slug": "\u83B7\u53D6\u7A97\u53E3",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Selenium.md"
};
var Selenium_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$L
});
const data$K = {
  "key": "v-8f69baa8",
  "path": "/javascript/axios.html",
  "title": "json-server",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "GET POST PUT DELETE",
      "slug": "get-post-put-delete",
      "children": [
        {
          "level": 3,
          "title": "config \u8BF7\u6C42\u914D\u7F6E",
          "slug": "config-\u8BF7\u6C42\u914D\u7F6E",
          "children": []
        },
        {
          "level": 3,
          "title": "data \u54CD\u5E94\u7ED3\u679C",
          "slug": "data-\u54CD\u5E94\u7ED3\u679C",
          "children": []
        },
        {
          "level": 3,
          "title": "headers \u8BF7\u6C42\u5934",
          "slug": "headers-\u8BF7\u6C42\u5934",
          "children": []
        },
        {
          "level": 3,
          "title": "request \u521B\u5EFA\u7684XMLHttpRequest\u5B9E\u4F8B\u5BF9\u8C61",
          "slug": "request-\u521B\u5EFA\u7684xmlhttprequest\u5B9E\u4F8B\u5BF9\u8C61",
          "children": []
        },
        {
          "level": 3,
          "title": "status \u54CD\u5E94\u7684\u72B6\u6001\u7801",
          "slug": "status-\u54CD\u5E94\u7684\u72B6\u6001\u7801",
          "children": []
        },
        {
          "level": 3,
          "title": "statusText \u54CD\u5E94\u7684\u6587\u672C\u5B57\u7B26\u4E32",
          "slug": "statustext-\u54CD\u5E94\u7684\u6587\u672C\u5B57\u7B26\u4E32",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u914D\u7F6E\u5BF9\u8C61: request config",
      "slug": "\u914D\u7F6E\u5BF9\u8C61-request-config",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B9E\u4F8B\uFF1A",
      "slug": "\u5B9E\u4F8B",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/axios.md"
};
var axios_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$K
});
const data$J = {
  "key": "v-01c141d0",
  "path": "/javascript/canvas.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "javascript/canvas.md"
};
var canvas_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$J
});
const data$I = {
  "key": "v-5f47777f",
  "path": "/javascript/js%E7%B1%BB%E5%BA%93.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "TogetherJS",
      "slug": "togetherjs",
      "children": []
    },
    {
      "level": 2,
      "title": "JSFiddle",
      "slug": "jsfiddle",
      "children": []
    },
    {
      "level": 2,
      "title": "@antv/g6",
      "slug": "antv-g6",
      "children": [
        {
          "level": 3,
          "title": "\u57FA\u672C\u4F7F\u7528",
          "slug": "\u57FA\u672C\u4F7F\u7528",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "@antv/x6",
      "slug": "antv-x6",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/js\u7C7B\u5E93.md"
};
var js___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$I
});
const data$H = {
  "key": "v-304f1580",
  "path": "/javascript/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "JavaScript(JS)",
      "slug": "javascript-js",
      "children": []
    },
    {
      "level": 2,
      "title": "\u51FD\u6570\u4F18\u5148",
      "slug": "\u51FD\u6570\u4F18\u5148",
      "children": []
    },
    {
      "level": 2,
      "title": "\u56DE\u8C03\u51FD\u6570",
      "slug": "\u56DE\u8C03\u51FD\u6570",
      "children": []
    },
    {
      "level": 2,
      "title": "\u9AD8\u9636\u51FD\u6570\uFF08Higher-Order Function\uFF09",
      "slug": "\u9AD8\u9636\u51FD\u6570-higher-order-function",
      "children": []
    },
    {
      "level": 2,
      "title": "\u539F\u578B\u7F16\u7A0B",
      "slug": "\u539F\u578B\u7F16\u7A0B",
      "children": [
        {
          "level": 3,
          "title": "\u5783\u573E\u6536\u96C6",
          "slug": "\u5783\u573E\u6536\u96C6",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5185\u5B58\u7BA1\u7406",
          "slug": "\u5185\u5B58\u7BA1\u7406",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5F15\u7528\u7C7B\u578B",
          "slug": "\u5F15\u7528\u7C7B\u578B",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "javascript/\u57FA\u672C\u6982\u5FF5.md"
};
var _____html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$H
});
const data$G = {
  "key": "v-20bfb01e",
  "path": "/javascript/%E5%BE%AE%E8%BD%AFjavascript.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "<script>",
      "slug": "script",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E25\u683C\u6A21\u5F0F",
      "slug": "\u4E25\u683C\u6A21\u5F0F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6CE8\u91CA",
      "slug": "\u6CE8\u91CA",
      "children": []
    },
    {
      "level": 2,
      "title": "\u53D8\u91CF\u58F0\u660E",
      "slug": "\u53D8\u91CF\u58F0\u660E",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6A21\u677F\u5B57\u7B26\u4E32",
      "slug": "\u6A21\u677F\u5B57\u7B26\u4E32",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6570\u636E\u7C7B\u578B",
      "slug": "\u6570\u636E\u7C7B\u578B",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u8F6C\u6362",
      "slug": "\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u8F6C\u6362",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5F02\u5E38try...catch...finally",
      "slug": "\u5F02\u5E38try-catch-finally",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/\u5FAE\u8F6Fjavascript.md"
};
var __javascript_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$G
});
const data$F = {
  "key": "v-f0383c18",
  "path": "/linux/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "tcpdump",
      "slug": "tcpdump",
      "children": []
    },
    {
      "level": 2,
      "title": "echo",
      "slug": "echo",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F7F\u7528\u95EE\u9898",
      "slug": "\u4F7F\u7528\u95EE\u9898",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B89\u88C5\u8F6F\u4EF6",
      "slug": "\u5B89\u88C5\u8F6F\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7F16\u8BD1deb",
      "slug": "\u7F16\u8BD1deb",
      "children": []
    },
    {
      "level": 2,
      "title": "\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97",
      "slug": "\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97",
      "children": []
    },
    {
      "level": 2,
      "title": "\u547D\u4EE4",
      "slug": "\u547D\u4EE4",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "linux/README.md"
};
var index_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$F
});
const data$E = {
  "key": "v-1aaf1340",
  "path": "/linux/echo.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "linux/echo.md"
};
var echo_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$E
});
const data$D = {
  "key": "v-32db7ed0",
  "path": "/linux/tcpdump.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "linux/tcpdump.md"
};
var tcpdump_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$D
});
const data$C = {
  "key": "v-e69c6640",
  "path": "/linux/%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "System limit for number of file watchers reached",
      "slug": "system-limit-for-number-of-file-watchers-reached",
      "children": []
    },
    {
      "level": 2,
      "title": "",
      "slug": "",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "linux/\u4F7F\u7528\u95EE\u9898.md"
};
var _____html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$C
});
const data$B = {
  "key": "v-08e8e01d",
  "path": "/linux/%E5%91%BD%E4%BB%A4.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "fdisk \u78C1\u76D8\u7BA1\u7406\u5DE5\u5177",
      "slug": "fdisk-\u78C1\u76D8\u7BA1\u7406\u5DE5\u5177",
      "children": []
    },
    {
      "level": 2,
      "title": "mkfs \u683C\u5F0F\u5316\u78C1\u76D8",
      "slug": "mkfs-\u683C\u5F0F\u5316\u78C1\u76D8",
      "children": []
    },
    {
      "level": 2,
      "title": "ffmpeg",
      "slug": "ffmpeg",
      "children": [
        {
          "level": 3,
          "title": "flv\u8F6CMP4",
          "slug": "flv\u8F6Cmp4",
          "children": []
        },
        {
          "level": 3,
          "title": "\u622A\u53D6\u89C6\u9891",
          "slug": "\u622A\u53D6\u89C6\u9891",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8F6C\u6362\u56FE\u7247\u683C\u5F0F",
          "slug": "\u8F6C\u6362\u56FE\u7247\u683C\u5F0F",
          "children": []
        },
        {
          "level": 3,
          "title": "\u56FE\u7247\u5408\u6210\u89C6\u9891",
          "slug": "\u56FE\u7247\u5408\u6210\u89C6\u9891",
          "children": []
        },
        {
          "level": 3,
          "title": "screen",
          "slug": "screen",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "linux/\u547D\u4EE4.md"
};
var ___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$B
});
const data$A = {
  "key": "v-11b35267",
  "path": "/linux/%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "mysql\u5B89\u88C5\u540E\u7684\u7528\u6237\u8BBE\u7F6E",
      "slug": "mysql\u5B89\u88C5\u540E\u7684\u7528\u6237\u8BBE\u7F6E",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "linux/\u5B89\u88C5\u8F6F\u4EF6.md"
};
var _____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$A
});
const data$z = {
  "key": "v-ae048d4e",
  "path": "/linux/%E6%97%A0%E7%BA%BF%E6%94%BB%E5%87%BB%E4%B9%8Barp%E6%AC%BA%E9%AA%97.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "linux/\u65E0\u7EBF\u653B\u51FB\u4E4Barp\u6B3A\u9A97.md"
};
var _____arp___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$z
});
const data$y = {
  "key": "v-60a2f6b8",
  "path": "/linux/%E7%BC%96%E8%AF%91deb.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7F16\u8BD1\u89C4\u8303",
      "slug": "\u7F16\u8BD1\u89C4\u8303",
      "children": []
    },
    {
      "level": 2,
      "title": "php\u7BC7",
      "slug": "php\u7BC7",
      "children": [
        {
          "level": 3,
          "title": "\u4F9D\u8D56",
          "slug": "\u4F9D\u8D56",
          "children": []
        },
        {
          "level": 3,
          "title": "\u914D\u7F6E",
          "slug": "\u914D\u7F6E",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "linux/\u7F16\u8BD1deb.md"
};
var __deb_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$y
});
const data$x = {
  "key": "v-72881372",
  "path": "/markdown/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "use",
      "slug": "use",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "markdown/README.md"
};
var index_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$x
});
const data$w = {
  "key": "v-ac6cd20e",
  "path": "/markdown/use.html",
  "title": "this is an H1",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "this is an H2",
      "slug": "this-is-an-h2",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6807\u7B7E\u4E8C",
      "slug": "\u6807\u7B7E\u4E8C",
      "children": [
        {
          "level": 3,
          "title": "\u6807\u7B7E\u4E09",
          "slug": "\u6807\u7B7E\u4E09",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "markdown/use.md"
};
var use_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$w
});
const data$v = {
  "key": "v-6d739bbb",
  "path": "/python/Class.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "python/Class.md"
};
var Class_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$v
});
const data$u = {
  "key": "v-63cd5dba",
  "path": "/python/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE",
      "slug": "\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5185\u7F6E\u529F\u80FD",
      "slug": "\u5185\u7F6E\u529F\u80FD",
      "children": []
    },
    {
      "level": 2,
      "title": "chrNet",
      "slug": "chrnet",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7F51\u7EDC\u7F16\u7A0B",
      "slug": "\u7F51\u7EDC\u7F16\u7A0B",
      "children": []
    },
    {
      "level": 2,
      "title": "Class",
      "slug": "class",
      "children": []
    },
    {
      "level": 2,
      "title": "[xlwings ---- excel\u64CD\u4F5C](./xlwings ---- excel\u64CD\u4F5C.md)",
      "slug": "xlwings-excel\u64CD\u4F5C-xlwings-excel\u64CD\u4F5C-md",
      "children": []
    },
    {
      "level": 2,
      "title": "django",
      "slug": "django",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "python/README.md"
};
var index_html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$u
});
const data$t = {
  "key": "v-7115a32f",
  "path": "/python/chrNet.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "python/chrNet.md"
};
var chrNet_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$t
});
const data$s = {
  "key": "v-736bb064",
  "path": "/python/django.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Django \u7BA1\u7406\u5DE5\u5177\uFF1Adjango-admin",
      "slug": "django-\u7BA1\u7406\u5DE5\u5177-django-admin",
      "children": [
        {
          "level": 3,
          "title": "\u521B\u5EFA\u9879\u76EE\uFF1Adjango-admin startproject boo",
          "slug": "\u521B\u5EFA\u9879\u76EE-django-admin-startproject-boo",
          "children": []
        },
        {
          "level": 3,
          "title": "\u521B\u5EFA\u5E94\u7528 django-admin startapp polls",
          "slug": "\u521B\u5EFA\u5E94\u7528-django-admin-startapp-polls",
          "children": []
        },
        {
          "level": 3,
          "title": "\u521B\u5EFA\u6570\u636E\u5E93\u8868 python3 manage.py makemigrations",
          "slug": "\u521B\u5EFA\u6570\u636E\u5E93\u8868-python3-manage-py-makemigrations",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6267\u884C\u6570\u636E\u5E93\u8868\u5EFA\u7ACB python3 manage.py migrate",
          "slug": "\u6267\u884C\u6570\u636E\u5E93\u8868\u5EFA\u7ACB-python3-manage-py-migrate",
          "children": []
        },
        {
          "level": 3,
          "title": "\u521B\u5EFA\u7BA1\u7406\u5458\u5E10\u53F7 python3 manage.py createsuperuser",
          "slug": "\u521B\u5EFA\u7BA1\u7406\u5458\u5E10\u53F7-python3-manage-py-createsuperuser",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6A21\u677F\u6E32\u67D3\u5D4C\u5165\u8BED\u6CD5\uFF1A\u5728html\u4E2D\u53EF\u4EE5\u5D4C\u5165\u540E\u53F0\u8BED\u8A00\uFF0C\u533A\u5206\u7B26\u53F7\uFF1A{%\u547D\u4EE4%}  {{\u53D8\u91CF}}",
          "slug": "\u6A21\u677F\u6E32\u67D3\u5D4C\u5165\u8BED\u6CD5-\u5728html\u4E2D\u53EF\u4EE5\u5D4C\u5165\u540E\u53F0\u8BED\u8A00-\u533A\u5206\u7B26\u53F7-\u547D\u4EE4-\u53D8\u91CF",
          "children": []
        },
        {
          "level": 3,
          "title": "\u57FA\u672C\u8BBE\u7F6E",
          "slug": "\u57FA\u672C\u8BBE\u7F6E",
          "children": []
        },
        {
          "level": 3,
          "title": "urls\u8BBE\u7F6E",
          "slug": "urls\u8BBE\u7F6E",
          "children": []
        },
        {
          "level": 3,
          "title": "\u9879\u76EE\u521D\u59CB\u5316\u6587\u4EF6\u8BF4\u660E\uFF1A",
          "slug": "\u9879\u76EE\u521D\u59CB\u5316\u6587\u4EF6\u8BF4\u660E",
          "children": []
        },
        {
          "level": 3,
          "title": "\u51FD\u6570path()\u5177\u6709\u56DB\u4E2A\u53C2\u6570\uFF0C\u4E24\u4E2A\u5FC5\u987B\u53C2\u6570\uFF1Aroute\u548Cview\uFF0C\u4E24\u4E2A\u53EF\u9009\u53C2\u6570\uFF1Akwargs\u548Cname\u3002",
          "slug": "\u51FD\u6570path-\u5177\u6709\u56DB\u4E2A\u53C2\u6570-\u4E24\u4E2A\u5FC5\u987B\u53C2\u6570-route\u548Cview-\u4E24\u4E2A\u53EF\u9009\u53C2\u6570-kwargs\u548Cname\u3002",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4F7F\u7528\u6570\u636E\u5E93",
      "slug": "\u4F7F\u7528\u6570\u636E\u5E93",
      "children": [
        {
          "level": 3,
          "title": "\u521B\u5EFA\u6570\u636E\u5E93\u6A21\u578B",
          "slug": "\u521B\u5EFA\u6570\u636E\u5E93\u6A21\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6FC0\u6D3B\u6A21\u578B",
          "slug": "\u6FC0\u6D3B\u6A21\u578B",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "uwsgi",
      "slug": "uwsgi",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "python/django.md"
};
var django_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$s
});
const data$r = {
  "key": "v-47485488",
  "path": "/python/xlwings%20----%20excel%E6%93%8D%E4%BD%9C.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "python/xlwings ---- excel\u64CD\u4F5C.md"
};
var xlwings______excel___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$r
});
const data$q = {
  "key": "v-6821f654",
  "path": "/python/%E5%86%85%E7%BD%AE%E5%8A%9F%E8%83%BD.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "python/\u5185\u7F6E\u529F\u80FD.md"
};
var _____html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$q
});
const data$p = {
  "key": "v-75a3ffce",
  "path": "/python/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2django%E9%A1%B9%E7%9B%AE.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5B89\u88C5\u8F6F\u4EF6",
      "slug": "\u5B89\u88C5\u8F6F\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6D4B\u8BD5",
      "slug": "\u6D4B\u8BD5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u914D\u7F6Euwsgi",
      "slug": "\u914D\u7F6Euwsgi",
      "children": []
    },
    {
      "level": 2,
      "title": "\u914D\u7F6Enginx",
      "slug": "\u914D\u7F6Enginx",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "python/\u670D\u52A1\u5668\u90E8\u7F72django\u9879\u76EE.md"
};
var _____django___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$p
});
const data$o = {
  "key": "v-dcabfe22",
  "path": "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u56DB\u4E2A\u4EFB\u52A1",
      "slug": "\u56DB\u4E2A\u4EFB\u52A1",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8FA9\u8BC1\u6CD5",
      "slug": "\u8FA9\u8BC1\u6CD5",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/README.md"
};
var index_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$o
});
const data$n = {
  "key": "v-11ddaf4e",
  "path": "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E5%9B%9B%E4%B8%AA%E4%BB%BB%E5%8A%A1.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u53CD\u601D\uFF1A\u6982\u5FF5\u5206\u6790",
      "slug": "\u53CD\u601D-\u6982\u5FF5\u5206\u6790",
      "children": []
    },
    {
      "level": 2,
      "title": "\u62BD\u8C61\uFF1A\u62BD\u8C61\u5EFA\u6A21",
      "slug": "\u62BD\u8C61-\u62BD\u8C61\u5EFA\u6A21",
      "children": []
    },
    {
      "level": 2,
      "title": "\u903B\u8F91\uFF1A\u63A8\u7406\u8BBA\u8BC1",
      "slug": "\u903B\u8F91-\u63A8\u7406\u8BBA\u8BC1",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8111\u6D1E\uFF1A\u601D\u60F3\u5B9E\u9A8C",
      "slug": "\u8111\u6D1E-\u601D\u60F3\u5B9E\u9A8C",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/\u56DB\u4E2A\u4EFB\u52A1.md"
};
var _____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$n
});
const data$m = {
  "key": "v-1c0cff34",
  "path": "/%E5%85%B3%E4%BA%8E%E5%94%AF%E7%89%A9%E8%BE%A9%E8%AF%81/%E8%BE%A9%E8%AF%81%E6%B3%95.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4E0D\u662F\u4EC0\u4E48\uFF1F",
      "slug": "\u4E0D\u662F\u4EC0\u4E48",
      "children": []
    },
    {
      "level": 2,
      "title": "\u662F\u4EC0\u4E48\uFF1F",
      "slug": "\u662F\u4EC0\u4E48",
      "children": [
        {
          "level": 3,
          "title": "\u4E09\u5927\u89C4\u5F8B",
          "slug": "\u4E09\u5927\u89C4\u5F8B",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "\u5173\u4E8E\u552F\u7269\u8FA9\u8BC1/\u8FA9\u8BC1\u6CD5.md"
};
var ____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$m
});
const data$l = {
  "key": "v-a8e497dc",
  "path": "/javascript/Vue/1.%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "$\\color{red}{notes:}$",
      "slug": "color-red-notes",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/1.\u6570\u636E\u4E0E\u65B9\u6CD5.md"
};
var _1_______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$l
});
const data$k = {
  "key": "v-21cfc464",
  "path": "/javascript/Vue/2.%E5%AE%9E%E4%BE%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "$\\color{red}{notes:}$",
      "slug": "color-red-notes",
      "children": []
    },
    {
      "level": 2,
      "title": "$\\color{red}{FunctionType}$",
      "slug": "color-red-functiontype",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/2.\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50.md"
};
var _2___________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$k
});
const data$j = {
  "key": "v-f05262b2",
  "path": "/javascript/Vue/3.%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95-%E6%8F%92%E5%80%BC.html",
  "title": "\u63D2\u503C",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "$\\color{red}{notes:}$",
      "slug": "color-red-notes",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/3.\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C.md"
};
var _3_________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$j
});
const data$i = {
  "key": "v-4e3e11a7",
  "path": "/javascript/Vue/4.%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%9B%E5%BB%BA%E6%96%B9%E5%BC%8F.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1.\u4F7F\u7528Vue.extend({})",
      "slug": "_1-\u4F7F\u7528vue-extend",
      "children": [
        {
          "level": 3,
          "title": "\u8C03\u7528\uFF1A",
          "slug": "\u8C03\u7528",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2.",
      "slug": "_2",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/4.\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F.md"
};
var _4_________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$i
});
const data$h = {
  "key": "v-1b16a914",
  "path": "/javascript/Vue/5.%E4%BD%BF%E7%94%A8Vue%E8%84%9A%E6%89%8B%E6%9E%B6.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5B89\u88C5@vue/cli",
      "slug": "\u5B89\u88C5-vue-cli",
      "children": []
    },
    {
      "level": 2,
      "title": "\u521B\u5EFAvue\u9879\u76EE",
      "slug": "\u521B\u5EFAvue\u9879\u76EE",
      "children": []
    },
    {
      "level": 2,
      "title": "\u811A\u624B\u67B6\u7ED3\u6784\u5206\u6790",
      "slug": "\u811A\u624B\u67B6\u7ED3\u6784\u5206\u6790",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5173\u4E8E\u4E0D\u540C\u7248\u672C\u7684Vue",
      "slug": "\u5173\u4E8E\u4E0D\u540C\u7248\u672C\u7684vue",
      "children": []
    },
    {
      "level": 2,
      "title": "vue\u811A\u624B\u67B6\u914D\u7F6E",
      "slug": "vue\u811A\u624B\u67B6\u914D\u7F6E",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/5.\u4F7F\u7528Vue\u811A\u624B\u67B6.md"
};
var _5___Vue____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$h
});
const data$g = {
  "key": "v-507b795f",
  "path": "/javascript/Vue/6.%E7%89%B9%E6%AE%8A%E5%B1%9E%E6%80%A7.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "ref\u5C5E\u6027",
      "slug": "ref\u5C5E\u6027",
      "children": []
    },
    {
      "level": 2,
      "title": "\u914D\u7F6E\u9879props",
      "slug": "\u914D\u7F6E\u9879props",
      "children": []
    },
    {
      "level": 2,
      "title": "mixin(\u6DF7\u5165)",
      "slug": "mixin-\u6DF7\u5165",
      "children": []
    },
    {
      "level": 2,
      "title": "scoped\u6837\u5F0F",
      "slug": "scoped\u6837\u5F0F",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/6.\u7279\u6B8A\u5C5E\u6027.md"
};
var _6______html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-2a126896",
  "path": "/javascript/Vue/7.Vue%E6%8F%92%E4%BB%B6.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u529F\u80FD\uFF1A",
      "slug": "\u529F\u80FD",
      "children": []
    },
    {
      "level": 2,
      "title": "\u672C\u8D28\uFF1A",
      "slug": "\u672C\u8D28",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B9A\u4E49\u63D2\u4EF6\uFF1A",
      "slug": "\u5B9A\u4E49\u63D2\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F7F\u7528\u63D2\u4EF6\uFF1A",
      "slug": "\u4F7F\u7528\u63D2\u4EF6",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/7.Vue\u63D2\u4EF6.md"
};
var _7_Vue___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-634ae41f",
  "path": "/javascript/Vue/8.vuex.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "vuex\u662F\u4EC0\u4E48\uFF1F",
      "slug": "vuex\u662F\u4EC0\u4E48",
      "children": []
    },
    {
      "level": 3,
      "title": "\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\uFF1F",
      "slug": "\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528",
      "children": []
    },
    {
      "level": 3,
      "title": "\u7EC4\u6210\u90E8\u5206",
      "slug": "\u7EC4\u6210\u90E8\u5206",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/8.vuex.md"
};
var _8_vuex_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-7d985dbc",
  "path": "/javascript/Vue/9.vue-router.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "javascript/Vue/9.vue-router.md"
};
var _9_vueRouter_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-672ecad2",
  "path": "/javascript/Vue/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6CE8\u610F",
      "slug": "\u6CE8\u610F",
      "children": []
    },
    {
      "level": 2,
      "title": "4.\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F",
      "slug": "_4-\u7EC4\u4EF6\u7684\u521B\u5EFA\u65B9\u5F0F",
      "children": []
    },
    {
      "level": 2,
      "title": "3.\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C",
      "slug": "_3-\u6A21\u677F\u8BED\u6CD5-\u63D2\u503C",
      "children": []
    },
    {
      "level": 2,
      "title": "6.\u7279\u6B8A\u5C5E\u6027",
      "slug": "_6-\u7279\u6B8A\u5C5E\u6027",
      "children": []
    },
    {
      "level": 2,
      "title": "5.\u4F7F\u7528Vue\u811A\u624B\u67B6",
      "slug": "_5-\u4F7F\u7528vue\u811A\u624B\u67B6",
      "children": []
    },
    {
      "level": 2,
      "title": "vuepress",
      "slug": "vuepress",
      "children": []
    },
    {
      "level": 2,
      "title": "webpack\u7ECF\u5178\u914D\u7F6E",
      "slug": "webpack\u7ECF\u5178\u914D\u7F6E",
      "children": []
    },
    {
      "level": 2,
      "title": "2.\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50",
      "slug": "_2-\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50",
      "children": []
    },
    {
      "level": 2,
      "title": "1.\u6570\u636E\u4E0E\u65B9\u6CD5",
      "slug": "_1-\u6570\u636E\u4E0E\u65B9\u6CD5",
      "children": []
    },
    {
      "level": 2,
      "title": "8.vuex",
      "slug": "_8-vuex",
      "children": []
    },
    {
      "level": 2,
      "title": "emoji",
      "slug": "emoji",
      "children": []
    },
    {
      "level": 2,
      "title": "9.vue-router",
      "slug": "_9-vue-router",
      "children": []
    },
    {
      "level": 2,
      "title": "7.Vue\u63D2\u4EF6",
      "slug": "_7-vue\u63D2\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7EC4\u4EF6",
      "slug": "\u7EC4\u4EF6",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/README.md"
};
var index_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-ef622eb6",
  "path": "/javascript/Vue/emoji.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "javascript/Vue/emoji.md"
};
var emoji_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-1c3dc2ea",
  "path": "/javascript/Vue/vuepress.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "VuePress \u9075\u5FAA \u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201D \u7684\u539F\u5219\uFF0C\u63A8\u8350\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A",
      "slug": "vuepress-\u9075\u5FAA-\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E-\u7684\u539F\u5219-\u63A8\u8350\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B",
      "children": [
        {
          "level": 3,
          "title": "$\\color{red}{\u6CE8\u610F\uFF1A}$ \u76EE\u5F55\u540D\u5927\u5199",
          "slug": "color-red-\u6CE8\u610F-\u76EE\u5F55\u540D\u5927\u5199",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u9759\u6001\u8D44\u6E90",
      "slug": "\u9759\u6001\u8D44\u6E90",
      "children": []
    },
    {
      "level": 2,
      "title": "makedown",
      "slug": "makedown",
      "children": [
        {
          "level": 3,
          "title": "\u94FE\u63A5Home",
          "slug": "\u94FE\u63A5home",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Emoji",
      "slug": "emoji",
      "children": []
    },
    {
      "level": 2,
      "title": "\u76EE\u5F55",
      "slug": "\u76EE\u5F55",
      "children": []
    },
    {
      "level": 2,
      "title": "\u81EA\u5B9A\u4E49\u5BB9\u5668",
      "slug": "\u81EA\u5B9A\u4E49\u5BB9\u5668",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F7F\u7528\u7EC4\u4EF6",
      "slug": "\u4F7F\u7528\u7EC4\u4EF6",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/vuepress.md"
};
var vuepress_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-2135e2c4",
  "path": "/javascript/Vue/webpack%E7%BB%8F%E5%85%B8%E9%85%8D%E7%BD%AE.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "javascript/Vue/webpack\u7ECF\u5178\u914D\u7F6E.md"
};
var webpack_____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-250fbd0a",
  "path": "/javascript/Vue/%E6%B3%A8%E6%84%8F.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF1A\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1",
      "slug": "\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF-\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/\u6CE8\u610F.md"
};
var ___html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-940e4bdc",
  "path": "/javascript/Vue/%E7%BB%84%E4%BB%B6.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u57FA\u672C\u5B9E\u4F8B",
      "slug": "\u57FA\u672C\u5B9E\u4F8B",
      "children": [
        {
          "level": 3,
          "title": "\u7EC4\u4EF6\u53EF\u91CD\u590D\u4F7F\u7528",
          "slug": "\u7EC4\u4EF6\u53EF\u91CD\u590D\u4F7F\u7528",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u7EC4\u4EF6\u7684\u7EC4\u7EC7",
      "slug": "\u7EC4\u4EF6\u7684\u7EC4\u7EC7",
      "children": []
    },
    {
      "level": 2,
      "title": "\u901A\u8FC7Prop\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E",
      "slug": "\u901A\u8FC7prop\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E",
      "children": [
        {
          "level": 3,
          "title": "\u5173\u4E8EVueComponent:",
          "slug": "\u5173\u4E8Evuecomponent",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "javascript/Vue/\u7EC4\u4EF6.md"
};
var ___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-69a8f6db",
  "path": "/javascript/nodejs/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "nodejs\u57FA\u7840",
      "slug": "nodejs\u57FA\u7840",
      "children": []
    },
    {
      "level": 2,
      "title": "fs",
      "slug": "fs",
      "children": []
    },
    {
      "level": 2,
      "title": "electron",
      "slug": "electron",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/nodejs/README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-e2bda588",
  "path": "/javascript/nodejs/electron.html",
  "title": "\u6253\u5305",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u6253\u5305\u914D\u7F6E",
      "slug": "\u6253\u5305\u914D\u7F6E",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E24\u4E2A\u6A21\u5757",
      "slug": "\u4E24\u4E2A\u6A21\u5757",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E8B\u4EF6",
      "slug": "\u4E8B\u4EF6",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/nodejs/electron.md"
};
var electron_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-02c9d8f1",
  "path": "/javascript/nodejs/fs.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u540C\u6B65api",
      "slug": "\u540C\u6B65api",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/nodejs/fs.md"
};
var fs_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-3be30e5b",
  "path": "/javascript/nodejs/nodejs%E5%9F%BA%E7%A1%80.html",
  "title": "nodejs\u57FA\u7840",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u5168\u5C40\u53D8\u91CF",
      "slug": "\u5168\u5C40\u53D8\u91CF",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{__filename}$ \u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0",
      "slug": "color-red-filename-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{__dirname}$ \u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0",
      "slug": "color-red-dirname-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5168\u5C40\u5BF9\u8C61",
      "slug": "\u5168\u5C40\u5BF9\u8C61",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{console}$ \u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA",
      "slug": "color-red-console-\u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{process}$ \u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001",
      "slug": "color-red-process-\u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{process}$ Node.js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3",
      "slug": "color-red-process-node-js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5168\u5C40\u51FD\u6570",
      "slug": "\u5168\u5C40\u51FD\u6570",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{setTimeout()}$",
      "slug": "color-red-settimeout",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{clearTimeout()}$",
      "slug": "color-red-cleartimeout",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{setInterval()}$",
      "slug": "color-red-setinterval",
      "children": []
    },
    {
      "level": 3,
      "title": "\u6A21\u5757\u5316\u7F16\u7A0B",
      "slug": "\u6A21\u5757\u5316\u7F16\u7A0B",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{exports\u5BF9\u8C61}$",
      "slug": "color-red-exports\u5BF9\u8C61",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{module\u5BF9\u8C61}$",
      "slug": "color-red-module\u5BF9\u8C61",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5305\u7BA1\u7406",
      "slug": "\u5305\u7BA1\u7406",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5168\u5C40\u53D8\u91CF",
      "slug": "\u5168\u5C40\u53D8\u91CF-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{__filename}$ \u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0",
      "slug": "color-red-filename-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u540D\u79F0-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{__dirname}$ \u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0",
      "slug": "color-red-dirname-\u8868\u793A\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u6240\u5728\u76EE\u5F55\u7684\u540D\u79F0-1",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5168\u5C40\u5BF9\u8C61",
      "slug": "\u5168\u5C40\u5BF9\u8C61-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{console}$ \u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA",
      "slug": "color-red-console-\u63D0\u4F9B\u63A7\u5236\u53F0\u6807\u51C6\u8F93\u51FA-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{process}$ \u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001",
      "slug": "color-red-process-\u63CF\u8FF0\u5F53\u524D\u7A0B\u5E8F\u72B6\u6001-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{process}$ Node.js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3",
      "slug": "color-red-process-node-js\u6A21\u5757\u7CFB\u7EDF\u4E2D\u516C\u5F00\u7684\u63A5\u53E3-1",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5168\u5C40\u51FD\u6570",
      "slug": "\u5168\u5C40\u51FD\u6570-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{setTimeout()}$",
      "slug": "color-red-settimeout-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{clearTimeout()}$",
      "slug": "color-red-cleartimeout-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{setInterval()}$",
      "slug": "color-red-setinterval-1",
      "children": []
    },
    {
      "level": 3,
      "title": "\u6A21\u5757\u5316\u7F16\u7A0B",
      "slug": "\u6A21\u5757\u5316\u7F16\u7A0B-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{exports\u5BF9\u8C61}$",
      "slug": "color-red-exports\u5BF9\u8C61-1",
      "children": []
    },
    {
      "level": 3,
      "title": "$\\color{red}{module\u5BF9\u8C61}$",
      "slug": "color-red-module\u5BF9\u8C61-1",
      "children": []
    },
    {
      "level": 3,
      "title": "\u5305\u7BA1\u7406",
      "slug": "\u5305\u7BA1\u7406-1",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "javascript/nodejs/nodejs\u57FA\u7840.md"
};
var nodejs___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-58d4996a",
  "path": "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "socket",
      "slug": "socket",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "python/\u7F51\u7EDC\u7F16\u7A0B/README.md"
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-2dba119c",
  "path": "/python/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/socket.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u521B\u5EFA\u5957\u63A5\u5B57",
      "slug": "\u521B\u5EFA\u5957\u63A5\u5B57",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5173\u95ED\u5957\u63A5\u5B57",
      "slug": "\u5173\u95ED\u5957\u63A5\u5B57",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "python/\u7F51\u7EDC\u7F16\u7A0B/socket.md"
};
var socket_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$1
});
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$g, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$b, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$2, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$1, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$4, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createVueApp = createVueApp;
