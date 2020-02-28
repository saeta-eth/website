(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),c=(n(0),n(176)),i={id:"type-checking",title:"Type Checking",sidebar_label:"Type Checking"},o={id:"type-checking",title:"Type Checking",description:"If we can declare functions with Rust that can be called from JS then we need to know the type of the argument that was passed to the argument in order to work with in Rust. This is where casting comes into play. **Upcasting** makes a type less specific while **Downcasting** makes a type more specific. A `JsValue`, which represents an arbitrary JS value that we do not know the type of. We can cast this value to something more specific like a `JsNumber` so that we can use it in Rust as if it were a number. Downcasting use useful when we want to pass values back to the JS engine. See the [classes section](classes.md) for more on this.",source:"@site/docs/type-checking.md",permalink:"/docs/type-checking",sidebar_label:"Type Checking",sidebar:"docs",previous:{title:"Arguments",permalink:"/docs/arguments"},next:{title:"Functions",permalink:"/docs/functions"}},s=[{value:"Upcasting",id:"upcasting",children:[]},{value:"Downcasting",id:"downcasting",children:[]},{value:"Checking Types",id:"checking-types",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"If we can declare functions with Rust that can be called from JS then we need to know the type of the argument that was passed to the argument in order to work with in Rust. This is where casting comes into play. ",Object(c.b)("strong",{parentName:"p"},"Upcasting")," makes a type less specific while ",Object(c.b)("strong",{parentName:"p"},"Downcasting")," makes a type more specific. A ",Object(c.b)("inlineCode",{parentName:"p"},"JsValue"),", which represents an arbitrary JS value that we do not know the type of. We can cast this value to something more specific like a ",Object(c.b)("inlineCode",{parentName:"p"},"JsNumber")," so that we can use it in Rust as if it were a number. Downcasting use useful when we want to pass values back to the JS engine. See the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/classes"}),"classes section")," for more on this."),Object(c.b)("h2",{id:"upcasting"},"Upcasting"),Object(c.b)("p",null,"Every method of a JS class implicity returns a ",Object(c.b)("inlineCode",{parentName:"p"},"JsValue"),". No type more or less specific than a ",Object(c.b)("inlineCode",{parentName:"p"},"JsValue")," can be returned."),Object(c.b)("p",null,"For example, the following class method would fail to compile:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'declare_types! {\n    /// JS class wrapping Employee records.\n    pub class JsEmployee for Employee {\n        method talk(mut cx) {\n            Ok(cx.string("Hello").upcast())\n        }\n    }\n}\n')),Object(c.b)("p",null,"Safely upcast a handle to a supertype.\nThis method does not require an execution context because it only copies a handle."),Object(c.b)("h2",{id:"downcasting"},"Downcasting"),Object(c.b)("p",null,"Attempts to downcast a handle to another type, which may fail. A failure to downcast does not throw a JavaScript exception, so it's OK to continue interacting with the JS engine if this method produces an ",Object(c.b)("inlineCode",{parentName:"p"},"Err")," result."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"// --snip\ncx.number(17).downcast();\ncx.number(17).downcast_or_throw();\n// --snip--\n")),Object(c.b)("h2",{id:"checking-types"},"Checking Types"),Object(c.b)("p",null,"Test whether this value is an instance of the given type."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"// --snip--\nlet v: Handle<JsValue> = cx.number(17).upcast();\nv.is_a::<JsString>(); // false\nv.is_a::<JsNumber>(); // true\nv.is_a::<JsValue>();  // true\n// --snip--\n")))}l.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(i,".").concat(h)]||u[h]||b[h]||c;return n?r.a.createElement(m,o({ref:t},p,{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);