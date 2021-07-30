(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),m=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),u=n,d=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return a?l.a.createElement(d,o(o({ref:t},s),{},{components:a})):l.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),l=a(7),r=(a(0),a(115)),i={id:"static-tiles",title:"Static Tiles Layer",slug:"/layers/static-tiles"},o={unversionedId:"layers/static-tiles",id:"layers/static-tiles",isDocsHomePage:!1,title:"Static Tiles Layer",description:"In this section, we will learn about creating a static tile layer. A static tile is a single image that occupies an entry on the map grid. You can specify the column, row and zoom",source:"@site/docs/layers/static-tiles.md",slug:"/layers/static-tiles",permalink:"/web-map-doc/docs/layers/static-tiles",version:"current",sidebar:"sidebar",previous:{title:'<map is="web-map">',permalink:"/web-map-doc/docs/maps/web-map"},next:{title:"Static Features Layer",permalink:"/web-map-doc/docs/layers/static-features"}},c=[{value:"Adding a single tile",id:"adding-a-single-tile",children:[]},{value:"Associated Elements",id:"associated-elements",children:[{value:"<code>&lt;tile&gt;</code>",id:"tile",children:[]}]},{value:"Additional Context",id:"additional-context",children:[{value:"<code>&lt;link rel=&quot;license&quot;&gt;</code>",id:"link-rellicense",children:[]},{value:"<code>&lt;meta name=&quot;zoom&quot;&gt;</code>",id:"meta-namezoom",children:[]},{value:"<code>&lt;meta name=&quot;projection&quot;&gt;</code>",id:"meta-nameprojection",children:[]}]},{value:"Full Examples",id:"full-examples",children:[]}],s={toc:c};function m(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section, we will learn about creating a static tile layer. A static tile is a single image that occupies an entry on the map grid. You can specify the column, row and zoom\nto present an image at that location on the map."),Object(r.b)("h2",{id:"adding-a-single-tile"},"Adding a single tile"),Object(r.b)("p",null,"Add an image file to your project directory. Now you can access this image in MapML."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Static Tile Layer" checked>\n  <tile zoom="0" row="1" col="1" src="my-tile.png"></tile>\n</layer->\n\n')),Object(r.b)("h2",{id:"associated-elements"},"Associated Elements"),Object(r.b)("h3",{id:"tile"},Object(r.b)("inlineCode",{parentName:"h3"},"<tile>")),Object(r.b)("h4",{id:"attributes"},"Attributes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"col"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The col attribute allows you to set the column value of the static tile."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"row"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The row attribute allows you to set the row value of the static tile."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The src attribute lets you set the path to the image source of the static tile."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"zoom"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This allows you to set the zoom level the tile is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of a ",Object(r.b)("a",{parentName:"li",href:"http://example.org/"},"projection"),".")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"additional-context"},"Additional Context"),Object(r.b)("p",null,"You can also provide a set of elements to further define the static tile layer. This is the list of available additions with examples."),Object(r.b)("h3",{id:"link-rellicense"},Object(r.b)("inlineCode",{parentName:"h3"},'<link rel="license">')),Object(r.b)("p",null,"Sets the attribution link of the layer. Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map \xa9 Natural Resources Canada">\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"meta-namezoom"},Object(r.b)("inlineCode",{parentName:"h3"},'<meta name="zoom">')),Object(r.b)("p",null,"Sets the native minimum and maximum ",Object(r.b)("a",{parentName:"p",href:"http://example.org/"},"native zoom"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<meta name="zoom" content="min=1,max=4">\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"meta-nameprojection"},Object(r.b)("inlineCode",{parentName:"h3"},'<meta name="projection">')),Object(r.b)("p",null,"Sets the ",Object(r.b)("a",{parentName:"p",href:"http://example.org/"},"projection")," of the layer. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<meta name="projection" content="CBMTILE">\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"full-examples"},"Full Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" zoom="2" lat="59" lon="-53" width="900" height="400" controls>\n  <layer- label="Static MapML with tiles" checked>\n    <meta name="zoom" content="min=1,max=4">\n    <meta name="projection" content="CBMTILE">\n    <link rel="license"\n      href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285"\n      title="Canada Base Map \xa9 Natural Resources Canada">\n    <tile zoom="3" row="18" col="17" src="data/cbmt/3/c17_r18.png"></tile>\n    <tile zoom="2" row="10" col="11" src="data/cbmt/2/c11_r10.png"></tile>\n    <tile zoom="2" row="10" col="9" src="data/cbmt/2/c9_r10.png"></tile>\n    <tile zoom="2" row="11" col="9" src="data/cbmt/2/c9_r11.png"></tile>\n  </layer->\n</mapml-viewer>\n')),Object(r.b)("p",null,"[ADD MAP HERE]"))}m.isMDXComponent=!0}}]);