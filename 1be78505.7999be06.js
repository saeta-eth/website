(window.webpackJsonp=window.webpackJsonp||[]).push([[12,51],{173:function(e,t,a){"use strict";a.r(t);a(23),a(18),a(19),a(50),a(233);var n=a(0),r=a.n(n),l=a(176),o=a(178),c=a(58),i=a(186),s=a(1),u=a(177),m=a.n(u),f=a(180),d=a(209),p=a(179),b=a(208),v=a(133),h=a.n(v);function E(e){var t=e.item,a=e.onItemClick,l=e.collapsible,o=t.items,c=t.href,i=t.label,u=t.type,f=Object(n.useState)(t.collapsed),d=f[0],v=f[1],h=Object(n.useState)(null),g=h[0],k=h[1];t.collapsed!==g&&(k(t.collapsed),v(t.collapsed));var y=Object(n.useCallback)((function(e){e.preventDefault(),v((function(e){return!e}))}));switch(u){case"category":return o.length>0&&r.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":d}),key:i},r.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":l,"menu__link--active":l&&!t.collapsed}),href:"#!",onClick:l?y:void 0},i),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(E,{key:e.label,item:e,onItemClick:a,collapsible:l})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(p.a,Object(s.a)({className:"menu__link",to:c},Object(b.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"}),i))}}var g=function(e){var t=Object(n.useState)(!1),a=t[0],l=t[1],c=Object(o.a)().siteConfig,i=(c=void 0===c?{}:c).themeConfig.navbar,s=(i=void 0===i?{}:i).title,u=i.logo,p=void 0===u?{}:u,b=Object(f.a)(p.src),v=e.docsSidebars,g=e.path,k=e.sidebar,y=e.sidebarCollapsible;if(Object(d.a)(a),!k)return null;var _=v[k];if(!_)throw new Error('Cannot find the sidebar "'+k+'" in the sidebar config!');return y&&_.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var l=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!l,l;case"link":default:return r===a}}(e,g)})),r.a.createElement("div",{className:h.a.sidebar},r.a.createElement("div",{className:h.a.sidebarLogo},null!=p&&r.a.createElement("img",{src:b,alt:p.alt}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:m()("menu","menu--responsive",h.a.menu,{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){l(!a)}},a?r.a.createElement("span",{className:m()(h.a.sidebarMenuIcon,h.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:h.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},_.map((function(e){return r.a.createElement(E,{key:e.label,item:e,onItemClick:function(){l(!1)},collapsible:y})})))))},k=a(204),y=a(206),_=a(194),N=a(137),w=a.n(N);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,s=t.routes.find((function(e){return Object(_.a)(n.pathname,e)}))||{},u=a.permalinkToSidebar,m=a.docsSidebars,f=a.version,d=u[s.path],p=Object(o.a)(),b=p.siteConfig,v=(b=void 0===b?{}:b).themeConfig,h=void 0===v?{}:v,E=p.isClient,N=h.sidebarCollapsible,C=void 0===N||N;return 0===Object.keys(s).length?r.a.createElement(y.default,e):r.a.createElement(i.a,{version:f,key:E},r.a.createElement("div",{className:w.a.docPage},d&&r.a.createElement("div",{className:w.a.docSidebarContainer},r.a.createElement(g,{docsSidebars:m,path:s.path,sidebar:d,sidebarCollapsible:C})),r.a.createElement("main",{className:w.a.docMainContainer},r.a.createElement(l.a,{components:k.a},Object(c.a)(t.routes)))))}},187:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),o=a(177),c=a.n(o),i=a(179),s=a(178),u=a(180),m=a(118),f=a.n(m);function d(e){var t=e.item,a=Object(u.a)(t.to);return l.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},t,t.href?{target:"_blank",rel:"noopener noreferrer",href:t.href}:{to:a}),t.label)}t.a=function(){var e=Object(s.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,o=n.links,i=void 0===o?[]:o,m=n.logo,p=void 0===m?{}:m,b=Object(u.a)(p.src);return a?l.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===a.style})},l.a.createElement("div",{className:"container"},i&&i.length>0&&l.a.createElement("div",{className:"row footer__links"},i.map((function(e,t){return l.a.createElement("div",{key:e.title,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e){return l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(d,{item:e}))}))):null)}))),(p||r)&&l.a.createElement("div",{className:["text--center",f.a.logoContainer].join(" ")},p&&p.src&&l.a.createElement("div",{className:"margin-bottom--sm"},l.a.createElement("img",{className:"footer__logo",alt:p.alt,src:b})),l.a.createElement("div",{className:f.a.sponsor},l.a.createElement("a",{href:"https://www.netlify.com"},l.a.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-color-accent.svg",alt:"netlify sponsor"}))),r))):null}},195:function(e,t,a){"use strict";(function(e){var n=a(1),r=(a(196),a(0)),l=a.n(r),o=a(177),c=a.n(o),i=a(205),s=a(200),u=a.n(s),m=a(197),f=a.n(m),d=a(178),p=a(183),b=a(119),v=a.n(b);(void 0!==e?e:window).Prism=p.a,a(198),a(199),t.a=function(e){var t=e.children,a=e.className,o=Object(d.a)().siteConfig.themeConfig.prismTheme,s=Object(r.useState)(!1),m=s[0],p=s[1],b=Object(r.useRef)(null),h=Object(r.useRef)(null);Object(r.useEffect)((function(){var e;return h.current&&(e=new f.a(h.current,{target:function(){return b.current}})),function(){e&&e.destroy()}}),[h.current,b.current]);var E=a&&a.replace(/language-/,""),g=function(){window.getSelection().empty(),p(!0),setTimeout((function(){return p(!1)}),2e3)};return l.a.createElement(i.a,Object(n.a)({},i.b,{theme:o||u.a,code:t.trim(),language:E}),(function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("div",{className:v.a.codeBlockWrapper},l.a.createElement("pre",{ref:b,className:c()(t,v.a.codeBlock),style:a},n.map((function(e,t){return l.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return l.a.createElement("span",o({token:e,key:t}))})))}))),l.a.createElement("button",{ref:h,type:"button","aria-label":"Copy code to clipboard",className:v.a.copyButton,onClick:g},m?"Copied":"Copy"))}))}}).call(this,a(66))},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(186);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},233:function(e,t,a){"use strict";var n=a(17),r=a(234)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(72)("find")},234:function(e,t,a){var n=a(26),r=a(73),l=a(48),o=a(34),c=a(235);e.exports=function(e,t){var a=1==e,i=2==e,s=3==e,u=4==e,m=6==e,f=5==e||m,d=t||c;return function(t,c,p){for(var b,v,h=l(t),E=r(h),g=n(c,p,3),k=o(E.length),y=0,_=a?d(t,k):i?d(t,0):void 0;k>y;y++)if((f||y in E)&&(v=g(b=E[y],y,h),e))if(a)_[y]=v;else if(v)switch(e){case 3:return!0;case 5:return b;case 6:return y;case 2:_.push(b)}else if(u)return!1;return m?-1:s||u?u:_}}},235:function(e,t,a){var n=a(236);e.exports=function(e,t){return new(n(e))(t)}},236:function(e,t,a){var n=a(12),r=a(237),l=a(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},237:function(e,t,a){var n=a(20);e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);