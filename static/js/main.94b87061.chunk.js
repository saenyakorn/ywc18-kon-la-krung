(this["webpackJsonpkon-la-krung"]=this["webpackJsonpkon-la-krung"]||[]).push([[0],{139:function(e,t,c){},145:function(e,t,c){},180:function(e,t,c){},183:function(e,t,c){},263:function(e,t,c){},264:function(e,t,c){},283:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(0),r=c.n(a),s=c(15),i=c.n(s),l=c(36),o=(c(124),c(67)),j=(c(126),c(43)),u=(c(114),c(71)),d=(c(180),c(146),c(106)),b=(c(183),c(130),c(66)),O=c(48),h=c(72),v=c(78),x=c.n(v),m=c(91),p=c(147),f=c.n(p).a.create({baseURL:"https://panjs.com/ywc18.json",timeout:5e3}),g=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=r.a.createContext({}),E=function(){return Object(a.useContext)(B)};function N(e){var t=Object.assign({},e),c=Object(a.useState)(!1),r=Object(O.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(),o=Object(O.a)(l,2),j=o[0],u=o[1],d=Object(a.useCallback)(Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!1),e.next=3,g();case 3:t=e.sent,u(t),i(!0);case 6:case"end":return e.stop()}}),e)}))),[]);Object(a.useEffect)((function(){try{d()}catch(e){console.error(e)}}),[d]);var b={categories:Object(a.useMemo)((function(){return null===j||void 0===j?void 0:j.categories}),[j]),provinces:Object(a.useMemo)((function(){return null===j||void 0===j?void 0:j.provinces}),[j]),priceRange:Object(a.useMemo)((function(){return null===j||void 0===j?void 0:j.priceRange}),[j]),merchants:Object(a.useMemo)((function(){return null===j||void 0===j?void 0:j.merchants}),[j]),isReady:s};return Object(n.jsx)(B.Provider,Object(h.a)({value:b},t))}var y=c(148),S=c.n(y),k="\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",C="\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",A="\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",w=r.a.createContext({}),P=function(){return Object(a.useContext)(w)};function M(e){var t=Object.assign({},e),c=E(),r=c.categories,s=c.merchants,i=Object(a.useState)(k),l=Object(O.a)(i,2),o=l[0],j=l[1],u=Object(a.useState)(C),d=Object(O.a)(u,2),b=d[0],v=d[1],x=Object(a.useState)(5),m=Object(O.a)(x,2),p=m[0],f=m[1],g=Object(a.useState)(A),B=Object(O.a)(g,2),N=B[0],y=B[1],P=Object(a.useMemo)((function(){var e;return null===(e=S.a.find(r,(function(e){return e.name===o})))||void 0===e?void 0:e.subcategories}),[r,o]),M=Object(a.useMemo)((function(){return null===s||void 0===s?void 0:s.filter((function(e,t){if(o===k)return!0;var c=N===A||-1!==e.addressProvinceName.indexOf(N),n=b===C||e.subcategoryName===b,a=e.priceLevel<=p;return console.log(t,c,n,a),c&&n&&a}))}),[s,b,p,N,o]),T={selectedShop:o,setSelectedShop:j,selectedCategory:b,setSelectedCategory:v,selectedPriceLevel:p,setSelectedPriceLevel:f,selectedProvince:N,setSelectedProvince:y,currentCategory:P,currentMerchants:M};return Object(n.jsx)(w.Provider,Object(h.a)({value:T},t))}c(139);function T(){var e=Object(a.useState)(),t=Object(O.a)(e,2),c=t[0],r=t[1],s=E().categories,i=P().setSelectedShop,l=Object(a.useCallback)((function(e){r(e.target.value),i(e.target.value)}),[i]);return Object(n.jsxs)(b.a.Group,{value:c,onChange:l,className:"radio-group",defaultValue:k,children:[Object(n.jsx)(b.a,{value:k,children:k}),null===s||void 0===s?void 0:s.map((function(e,t){return Object(n.jsx)(b.a,{value:e.name,children:e.name},"category-".concat(t))}))]})}c(118);var L=c(54),I=c(89),R=L.a.Option;function F(e){var t=E().provinces,c=P().setSelectedProvince,r=Object(a.useCallback)((function(e){c(e)}),[c]);return Object(n.jsxs)(L.a,Object(h.a)(Object(h.a)({showSearch:!0,defaultValue:A,placeholder:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48",optionFilterProp:"children",onChange:r},e),{},{children:[Object(n.jsxs)(R,{value:A,children:[Object(n.jsx)(I.b,{}),A]}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(n.jsx)(R,{value:e,children:e},"province-".concat(t))}))]}))}function V(){var e=Object(a.useState)(),t=Object(O.a)(e,2),c=t[0],r=t[1],s=P(),i=s.currentCategory,l=s.setSelectedCategory,o=Object(a.useCallback)((function(e){r(e.target.value),l(e.target.value)}),[l]);return Object(n.jsxs)(b.a.Group,{value:c,onChange:o,className:"radio-group",defaultValue:C,children:[Object(n.jsx)(b.a,{value:C,children:C}),null===i||void 0===i?void 0:i.map((function(e,t){return Object(n.jsx)(b.a,{value:e,children:e},"category-".concat(t))}))]})}var z=L.a.Option;function D(){var e=E().priceRange,t=P().setSelectedPriceLevel,c=Object(a.useCallback)((function(e){t(e)}),[t]);return Object(n.jsxs)(L.a,{showSearch:!0,placeholder:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01",optionFilterProp:"children",defaultValue:5,onChange:c,children:[Object(n.jsx)(z,{value:5,children:"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),null===e||void 0===e?void 0:e.map((function(e,t){return Object(n.jsx)(z,{value:t+1,children:e},"price-".concat(t))}))]})}var H=u.a.Title;function G(){var e=P().selectedShop;return Object(n.jsxs)(d.a,{className:"sidebar",children:[Object(n.jsx)(H,{level:5,children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"}),Object(n.jsx)(T,{}),Object(n.jsx)(H,{level:5,children:"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14/\u0e43\u0e01\u0e25\u0e49\u0e09\u0e31\u0e19"}),Object(n.jsx)(F,{}),Object(n.jsx)(H,{level:5,children:"\u0e23\u0e32\u0e04\u0e32"}),Object(n.jsx)(D,{}),e!==k&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(H,{level:5,children:["\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17",e]}),Object(n.jsx)(V,{})]})]})}c(257);var J=c(162),Y=(c(259),c(123)),_=(c(261),c(168));function U(e){var t=e.type;return Object(n.jsx)(_.a,{color:"Y"===t?"#87d068":"#a1a1a1",children:"Y"===t?"\u0e40\u0e1b\u0e34\u0e14\u0e2d\u0e22\u0e39\u0e48":"\u0e1b\u0e34\u0e14\u0e41\u0e25\u0e49\u0e27"})}c(263),c(264);function W(e){switch(e.facility){case"\u0e17\u0e35\u0e48\u0e08\u0e2d\u0e14\u0e23\u0e16":return Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{alt:"car-icon",src:"https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%96.png"})});case"\u0e23\u0e31\u0e1a\u0e08\u0e2d\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32":return Object(n.jsx)("div",{className:"icon",style:{paddingLeft:6},children:Object(n.jsx)("img",{alt:"booking-icon",src:"https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2.png"})});case"\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e19\u0e33\u0e2a\u0e31\u0e15\u0e27\u0e4c\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07\u0e40\u0e02\u0e49\u0e32\u0e44\u0e14\u0e49":return Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{alt:"pet-icon",src:"https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%99%E0%B8%B3%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%94%E0%B9%89.png"})})}}var q=u.a.Title,K=u.a.Text;function Q(){var e=P().currentMerchants;return Object(n.jsx)(Y.b,{direction:"vertical",className:"space-container",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(n.jsx)("div",{className:"horizontal",children:Object(n.jsxs)(d.a,{className:"card",children:[Object(n.jsx)("img",{width:240,height:240,alt:e.shopNameTH,src:e.coverImageId}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"title-container",children:[Object(n.jsxs)(Y.b,{direction:"horizontal",align:"start",className:"full-width",children:[Object(n.jsx)(q,{level:4,className:"title",children:e.shopNameTH}),"N/A"!==e.isOpen&&Object(n.jsx)(U,{type:e.isOpen})]}),Object(n.jsxs)(K,{className:"grey-text",children:[Object(n.jsx)("span",{children:"".concat(e.categoryName," | ")}),Object(n.jsx)("span",{children:["\u0e3f","\u0e3f","\u0e3f","\u0e3f"].map((function(t,c){return Object(n.jsx)("span",{className:c<e.priceLevel?"black":"grey-text",children:t},"baht-".concat(c))}))}),Object(n.jsx)("span",{children:" | ".concat(e.addressDistrictName," ").concat(e.addressProvinceName)})]}),Object(n.jsx)(J.a,{type:"horizontal"}),Object(n.jsx)("div",{className:"highlightText",children:Object(n.jsx)(K,{className:"grey-text",children:Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(e.highlightText)}})})}),Object(n.jsx)("div",{children:Object(n.jsxs)(K,{className:"grey-text",children:[Object(n.jsx)("span",{className:"bold",children:"\u0e41\u0e19\u0e30\u0e19\u0e33:"}),Object(n.jsxs)("span",{children:["".concat(e.recommendedItems.reduce((function(e,t){return e+t}),""))," "]})]})}),Object(n.jsx)("div",{className:"facilities",children:e.facilities.map((function(e,t){return Object(n.jsx)(W,{facility:e},"facility-".concat(t))}))})]})})]},"merchant-".concat(t))},"card-".concat(t))}))})}c(285);var X=c(111);c(145);function Z(){return Object(n.jsx)("div",{className:"navbar-container bg-blue",children:Object(n.jsxs)(X.a,{className:"navbar-item ",children:[Object(n.jsx)(X.a.Item,{children:"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01"}),Object(n.jsx)(X.a.Item,{children:"\u0e04\u0e49\u0e19\u0e2b\u0e32"})]})})}c(274);var $=c(164),ee=(c(128),c(167));function te(){var e=E().categories,t=Object(a.useCallback)((function(){}),[]);return Object(n.jsx)("div",{className:"navbar-container",children:Object(n.jsxs)("div",{className:"navbar-item",children:[Object(n.jsx)("img",{alt:"logo",height:40,src:"https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/halfhalf-logo.png"}),Object(n.jsx)("div",{className:"province-select-container",children:Object(n.jsx)(F,{})}),Object(n.jsx)($.a,{className:"autocomplete",dropdownClassName:"autocomplete-dropdown",dropdownMatchSelectWidth:250,onSearch:t,options:null===e||void 0===e?void 0:e.map((function(e){return{value:e.name,label:Object(n.jsxs)("div",{className:"autocomplete-dropdown-label",children:["\u0e23\u0e49\u0e32\u0e19\u0e18\u0e07\u0e1f\u0e49\u0e32"===e.name?Object(n.jsx)(I.a,{}):Object(n.jsx)(I.c,{}),Object(n.jsx)("span",{children:e.name})]})}})),children:Object(n.jsx)(ee.a.Search,{placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32 \u0e0a\u0e37\u0e48\u0e2d \u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23 \u0e41\u0e25\u0e30\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e37\u0e48\u0e21 \u0e23\u0e49\u0e32\u0e19\u0e18\u0e07\u0e1f\u0e49\u0e32 \u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32 OTOP \u0e41\u0e25\u0e30\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"})})]})})}var ce=u.a.Title,ne=function(){var e=P().selectedShop,t=Object(a.useMemo)((function(){return"\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32 ".concat(e," ").concat(e!==k?k:"")}),[e]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(te,{}),Object(n.jsx)(Z,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(ce,{level:4,className:"header",children:t}),Object(n.jsxs)(o.a,{gutter:16,children:[Object(n.jsx)(j.a,{xs:0,md:6,children:Object(n.jsx)(G,{})}),Object(n.jsx)(j.a,{xs:24,md:18,children:Object(n.jsx)(Q,{})})]})]})]})},ae=function(){return Object(n.jsx)(l.c,{children:Object(n.jsx)(l.a,{path:"/",exact:!0,component:ne})})},re=c(119),se=function(){return Object(n.jsx)(re.a,{basename:"/ywc18-kon-la-krung",children:Object(n.jsx)(N,{children:Object(n.jsx)(M,{children:Object(n.jsx)(ae,{})})})})};i.a.render(Object(n.jsx)(se,{}),document.getElementById("root"))}},[[283,1,2]]]);
//# sourceMappingURL=main.94b87061.chunk.js.map