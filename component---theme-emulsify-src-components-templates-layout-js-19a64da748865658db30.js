(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(e,t,n){"use strict";n.r(t);n(16);var r=n(0),a=n.n(r),i=n(81),o=(n(130),n(192)),c=(n(195),n(29),n(197),n(198),n(199)),l=n.n(c),s=n(188),u=n.n(s),d=n(200),m=n.n(d),p=(n(63),n(128),n(62),n(48),n(47),n(18),n(36),n(14),n(12),n(7),n(20),n(201),n(202),n(203)),f=n.n(p),h=(n(189),n(185));var g=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={toggled:!1},t.toggle=function(){t.setState(function(e){return{toggled:!e.toggled}})},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.item,n=e.itemLink,r=e.children,i=e.active,o=t.childMdx.frontmatter;return a.a.createElement("li",{className:"menu-item--child"+(!0===i?" menu-item--child--active":"")},a.a.createElement(h.Link,{className:"menu-link",to:n},o.title),r)},r}(r.Component);g.defaultProps={item:[],itemName:null,itemLink:null,children:[],filter:null};var y=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.menu,n=e.id,r={children:[]};return t.forEach(function(e){var a=!1;if("components"===e.sourceInstanceName){if("Code"===e.name){if(!(a=e.childMdx.id===n)){var i=e.childMdx.fields.slug.replace("code/","");a=t.filter(function(e){return e.childMdx?e.childMdx.id===n&&e.childMdx.fields.slug.startsWith(i):""}).length>0}r.children.push({item:e,active:a})}}else e.childMdx&&(a=e.childMdx.id===n,r.children.push({item:e,active:a}))}),a.a.createElement("ul",{className:"menu-child"},r.children.map(function(e,t){return a.a.createElement(g,{active:e.active,item:e.item,key:e.item.childMdx.id,itemName:e.item.childMdx.frontmatter.title,itemLink:e.item.childMdx.fields.slug,icon:!0})}))},r}(r.Component);var v=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.menu,n=e.id,r={children:[]};return t.forEach(function(e){var a=!1;if("Code"===e.name){if(!(a=e.childMdx.id===n)){var i=e.childMdx.fields.slug.replace("code/","");a=t.filter(function(e){return e.childMdx?e.childMdx.id===n&&e.childMdx.fields.slug.startsWith(i):""}).length>0}r.children.push({item:e,active:a})}}),a.a.createElement("ul",{className:"menu-child"},r.children.map(function(e,t){return a.a.createElement(g,{active:e.active,item:e.item,key:e.item.childMdx.id,itemName:e.item.childMdx.frontmatter.title,itemLink:e.item.childMdx.fields.slug,icon:!0})}))},r}(r.Component);function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={activeIndex:null},t.toggle=function(e){t.state.activeIndex!==e?t.setState({activeIndex:e}):t.setState({activeIndex:null})},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props,n=t.menu,r=t.id,i=t.filter,o=t.collection,c={children:[]};n.forEach(function(e){if(e.sourceInstanceName===i&&("index"!==e.name||"404"!==e.name)){var t=e.relativeDirectory;""!==t&&c.children.push({parent:t,item:e,active:e.childMdx.id===r})}}),c.children.sort(function(e,t){return e.parent[0]<t.parent[0]?-1:e.parent[0]>t.parent[0]?1:0});var l=c.children.reduce(function(e,t){var n,r=e[t.parent]||[];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,((n={})[t.parent]=[].concat(b(r),[t.item]),n))},{});return a.a.createElement("div",null,Object.keys(l).map(function(t,i){var c=t.split("__").pop(),s=!1;return l[t].forEach(function(e){e.childMdx.id===r&&(s=!0)}),a.a.createElement("li",{key:i,className:"menu-item "+(!0===s||e.state.activeIndex===i||l[t][0].name.toLowerCase()===o?"menu-item--open":""),onClick:e.toggle.bind(e,i)},a.a.createElement("span",null,c,a.a.createElement(u.a,{className:"menu-icon menu-icon--down","aria-label":"Toggle Open"}),a.a.createElement(f.a,{className:"menu-icon menu-icon--up","aria-label":"Toggle Closed"})),"Components"===c?a.a.createElement(v,{menu:n,filter:"components",id:r}):a.a.createElement(y,{menu:l[t],filter:"pages",id:r}))}))},r}(r.Component);var _={}.STORYBOOK_ENV?function(e){return e.children}:n(185).Link,x=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isSidebarOpen:!1},t.toggleSidebar=function(){t.setState(function(e){return{isSidebarOpen:!e.isSidebarOpen}})},t.open=function(){t.props.toggleOpen()},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.siteTitle,n=e.menu,r=e.id,i=e.collection,o=e.designSystems;return a.a.createElement("div",{className:"sidebar"},o.length?a.a.createElement("nav",{className:"parent-menu"},a.a.createElement(l.a,{className:"parent-menu__toggle parent-menu__toggle--close",onClick:this.open,"aria-label":"Toggle Parent Menu"}),a.a.createElement("ul",null,o.map(function(e){return a.a.createElement("li",{key:e.name},a.a.createElement("a",{href:e.link},e.name))}))):null,a.a.createElement("div",{className:"sidebar__inner"},a.a.createElement("div",{className:"sidebar__header"},a.a.createElement(u.a,{className:"parent-menu__toggle parent-menu__toggle--open",onClick:this.open,"aria-label":"Toggle Parent Menu"}),a.a.createElement("h1",{className:"sidebar__heading"},a.a.createElement(_,{to:"/"},t)),a.a.createElement(m.a,{className:"sidebar__toggle",onClick:this.toggleSidebar,"aria-label":"Toggle Sidebar Menu"})),a.a.createElement("nav",{className:this.state.isSidebarOpen?"sidebar__nav sidebar__nav--open":"sidebar__nav"},a.a.createElement("ul",{className:"main-menu"},a.a.createElement(O,{menu:n,id:r,filter:"pages",collection:i}))),a.a.createElement("footer",{className:"sidebar__footer"},"Design System Powered by"," ",a.a.createElement("a",{href:"http://emulsify.info",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("strong",null,"Emulsify")))))},r}(r.Component);x.defaultProps={siteTitle:""};var P=function(e){var t=e.tabs,n=e.id;return a.a.createElement("nav",{className:"tabs"},a.a.createElement("ul",null,t.map(function(e){return a.a.createElement("li",{key:e.node.id},a.a.createElement(h.Link,{to:e.node.fields.slug,className:e.node.id===n?"active":""},e.node.frontmatter.tab))})))},N=(n(205),n(206),n(207),function(e){var t=e.title,n=e.body,r=e.docPages,i=e.designSystems,c=e.id,l=e.menu,s=e.parentDirectory,u=e.collection,d=a.a.useState(!1),m=d[0],p=d[1],f=r.filter(function(e){return e.node.fields&&e.node.fields.parentDir===s&&e.node.frontmatter.tab}).sort(function(e,t){return e.node.frontmatter.tabOrder-t.node.frontmatter.tabOrder});return a.a.createElement("div",{className:m?"wrapper-open wrapper":"wrapper"},a.a.createElement("div",{className:"main"},a.a.createElement(x,{id:c,pages:r,siteTitle:t,toggleOpen:function(){p(function(e){return!e})},menu:l,collection:u,designSystems:i}),a.a.createElement("div",{className:"main-content"},a.a.createElement("h1",{className:"main-title"},t),f.length?a.a.createElement(P,{tabs:f,id:c}):null,a.a.createElement("div",{className:"main-content-content"},a.a.createElement(o.MDXRenderer,null,n)))))}),k=n(208),M=n(209),j=n.n(M);function C(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,o=e.title,c=k.data.site,l=t||c.siteMetadata.description;return a.a.createElement(j.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}C.defaultProps={lang:"en",meta:[],keywords:[],description:""};var S=C,L=(n(215),n(216),function(e){var t=e.url;return a.a.createElement("iframe",{src:t,frameBorder:"0",className:"ComponentViewer",scrolling:"no",title:"Component Viewer"})});L.defaultProps={url:null};var D=L,T=(n(17),n(221)),A=(n(219),function(e){var t=e.code;return a.a.createElement("div",{className:"code-snippet"},a.a.createElement(T.a,Object.assign({},T.b,{code:t.trim(),language:"jsx"}),function(e){var t=e.className,n=e.style,r=e.tokens,i=e.getLineProps,o=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return a.a.createElement("div",i({line:e,key:t}),e.map(function(e,t){return a.a.createElement("span",o({token:e,key:t}))}))}))}))});A.defaultProps={code:"// No code specified."};var I=A,V=(n(220),function e(t){var n=t.items;return n?a.a.createElement("ul",{className:"toc__list"},n.map(function(t){return a.a.createElement("li",{key:t.url,className:"toc__item"},a.a.createElement("a",{className:"toc__link",href:t.url},t.title),a.a.createElement(e,{items:t.items}))})):null}),Q=function(e){var t=e.items;return a.a.createElement("section",{className:"toc"},a.a.createElement("h2",{className:"toc__h2"},"Table of Contents"),a.a.createElement(V,{items:t}))};n.d(t,"pageQuery",function(){return G});var q=[function(e){var t=e.children,n=e.props;return a.a.createElement("h1",n,t)},function(e){var t=e.children,n=e.props;return a.a.createElement("h2",n,t)},function(e){var t=e.children,n=e.props;return a.a.createElement("h3",n,t)},function(e){var t=e.children,n=e.props;return a.a.createElement("h4",n,t)},function(e){var t=e.children,n=e.props;return a.a.createElement("h5",n,t)},function(e){var t=e.children,n=e.props;return a.a.createElement("h6",n,t)}],B=function(e){return function(t){var n=t.props,r=t.children,i=q[e-1],o="string"==typeof r?r.replace(/\s+/g,"-").toLowerCase():"";return a.a.createElement("a",{name:o,href:"#"+o},a.a.createElement(i,n,r))}},G=(t.default=function(e){var t=e.pageContext,n=e.data.mdx,r=a.a.useState({h1:B(1),h2:B(2),h3:B(3),h4:B(4),h5:B(5),h6:B(6),TableOfContents:function(){return a.a.createElement(Q,{items:n.tableOfContents.items})},Component:function(e){return null===!t.iframePath?"Error: No Component Found":"undefined"!=typeof window&&a.a.createElement(D,{url:window.origin+"/"+t.iframePath})},Code:function(e){return null===!t.twigCode?"Error: No Code Found":a.a.createElement(I,{code:""+t.twigCode})}})[0],o=e.data.site,c=e.data.allMdx.edges,l=e.data.allFile.nodes;return a.a.createElement(i.MDXProvider,{components:r},a.a.createElement(N,{collection:n.fields.collection,id:n.id,menu:l,fields:n.fields,frontmatter:n.frontmatter,body:n.body,title:o.siteMetadata.title,docPages:c,designSystems:o.siteMetadata.designSystems,parentDirectory:e.pageContext.parentDir}),a.a.createElement(S,{title:n.frontmatter.title,description:n.frontmatter.description||n.excerpt,keywords:["gatsby","application","react"]}))},"1405617593")},185:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return d}),n.d(t,"useStaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(61),o=n.n(i);n.d(t,"Link",function(){return o.a}),n.d(t,"withAssetPrefix",function(){return i.withAssetPrefix}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"parsePath",function(){return i.parsePath}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var c=n(190),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var s=a.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,r=e.query,i=e.render,o=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,r=e.render,i=e.children;return a.a.createElement(s.Consumer,null,function(e){return a.a.createElement(u,{data:t,query:n,render:r||i,staticQueryData:e})})},m=function(e){a.a.useContext;var t=a.a.useContext(s);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},188:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M16.797 11.5c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.219-0.156 0.359-0.156 0.125 0 0.266 0.063 0.359 0.156l6.141 6.141 6.141-6.141c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.234 0.156 0.359z"}))}a.defaultProps={width:"18",height:"28",viewBox:"0 0 18 28"},e.exports=a,a.default=a},190:function(e,t,n){var r;e.exports=(r=n(204))&&r.default||r},199:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M27.7082 9.34788L25.6519 7.29163L17.4998 15.4437L9.34775 7.29163L7.2915 9.34788L15.4436 17.5L7.2915 25.652L9.34775 27.7083L17.4998 19.5562L25.6519 27.7083L27.7082 25.652L19.5561 17.5L27.7082 9.34788Z"}))}a.defaultProps={width:"35",height:"35",viewBox:"0 0 35 35"},e.exports=a,a.default=a},200:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M0 16.4763H25V13.7815H0V16.4763ZM0 9.73933H25V7.04452H0V9.73933ZM0 0.307495V3.0023H25V0.307495H0Z"}))}a.defaultProps={width:"25",height:"17",viewBox:"0 0 25 17"},e.exports=a,a.default=a},203:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M16.797 18.5c0 0.125-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.219 0.156-0.359 0.156-0.125 0-0.266-0.063-0.359-0.156l-6.141-6.141-6.141 6.141c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"}))}a.defaultProps={width:"18",height:"28",viewBox:"0 0 18 28"},e.exports=a,a.default=a},204:function(e,t,n){"use strict";n.r(t);n(47),n(18),n(14),n(12),n(7),n(20);var r=n(0),a=n.n(r),i=n(120);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Project Name",description:"A Design System Driven by Gatsby",author:"Your Organization"}}}}}}]);
//# sourceMappingURL=component---theme-emulsify-src-components-templates-layout-js-19a64da748865658db30.js.map