(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),a=(n(0),n(176)),i={id:"intro",title:"Introduction",sidebar_label:"Introduction"},c={id:"intro",title:"Introduction",description:"Welcome to the Neon guides! This documentation should help you get up and running quickly, as well as learn useful techniques for making the most of Neon. If you\u2019re looking for reference material, you might want to try the API documentation.",source:"@site/docs/intro.md",permalink:"/docs/intro",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/getting-started"}},l=[{value:"What is Neon?",id:"what-is-neon",children:[]},{value:"Why Neon?",id:"why-neon",children:[]},{value:"Where Do I Start?",id:"where-do-i-start",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to the Neon guides! This documentation should help you get up and running quickly, as well as learn useful techniques for making the most of Neon. If you\u2019re looking for reference material, you might want to try the API documentation."),Object(a.b)("h2",{id:"what-is-neon"},"What is Neon?"),Object(a.b)("p",null,"Neon is a library and toolchain for embedding ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.rust-lang.org/en-US/"}),"Rust")," in your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org"}),"Node.js")," apps and libraries."),Object(a.b)("h2",{id:"why-neon"},"Why Neon?"),Object(a.b)("p",null,"With Neon, you can create native Node modules like you might in C or C++, but with none of the fear and headaches associated with unsafe systems programming. Embedding Rust in Node can be useful for many reasons:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Raw performance"),Object(a.b)("li",{parentName:"ul"},"Threads and parallel programming"),Object(a.b)("li",{parentName:"ul"},"Access to Rust\u2019s growing package ecosystem"),Object(a.b)("li",{parentName:"ul"},"Access to native OS-specific libraries")),Object(a.b)("p",null,"Neon also works hard to make creating native modules easy, with a convenient command-line interface and workflow built around sensible project conventions. This eliminates a lot of the usual hassle of building native Node modules."),Object(a.b)("h2",{id:"where-do-i-start"},"Where Do I Start?"),Object(a.b)("p",null,"The best place to go next is the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started"}),"Getting Started guide"),", which will help you get Neon installed on your system. From there, try out the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/hello-world"}),"Hello, World! guide")," to write your first native Node module with Neon!"))}s.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(f,c({ref:t},u,{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);