(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1120],{61120:function(n,i,t){"use strict";t.d(i,{f:function(){return S}});var l=t(84513),e=t(2265),r=t(32921),d=function(n){var i=n.stickyHeight,t=(0,e.useState)(!1),l=t[0],r=t[1];return(0,e.useEffect)(function(){var n,t=function(){window.scrollY>i?r(!0):r(!1)};return null===(n=window)||void 0===n||n.addEventListener("scroll",t),function(){var n;null===(n=window)||void 0===n||n.removeEventListener("scroll",t)}},[]),{isSticky:l}},a=t(94702),o=t(55378),x=t(14477),m=t(57437);function u(n,i){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,l)}return t}function p(n){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?u(Object(t),!0).forEach(function(i){(0,l.Z)(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var s=function(n){var i,t=n.item,l=n.onClick,e=n.isActive;return(0,m.jsx)("button",p(p({onClick:function(){return null==l?void 0:l(t)}},o.NQ([x.W.defaultBtn,e?x.W.activeBtn:x.W.nonActiveBtn])),{},{children:null!==(i=null==t?void 0:t.title)&&void 0!==i?i:"-"}))},g=t(79950),c=function(n){var i=n.onClickFilterHandler,t=n.isActive;return n.isHidden?null:(0,m.jsx)(s,{item:g.x4,isActive:t,onClick:i})},h=function(){return(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",children:[(0,m.jsx)("g",{clipPath:"url(#clip0_10235_10954)",children:(0,m.jsx)("path",{d:"M5.63663 18.364L18.3646 5.63604M18.3646 18.364L12.0006 12L5.63663 5.63604",stroke:"white"})}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_10235_10954",children:(0,m.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]})},w=function(){return(0,m.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsxs)("g",{id:"Icon / More",children:[(0,m.jsx)("path",{id:"Vector",d:"M12.0098 12L11.9997 12",stroke:"#101820",strokeWidth:"2",strokeLinecap:"round"}),(0,m.jsx)("path",{id:"Vector_2",d:"M6.00977 12L5.99974 12",stroke:"#101820",strokeWidth:"2",strokeLinecap:"round"}),(0,m.jsx)("path",{id:"Vector_3",d:"M18.0098 12L17.9997 12",stroke:"#101820",strokeWidth:"2",strokeLinecap:"round"})]})})};function f(n,i){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,l)}return t}function b(n){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?f(Object(t),!0).forEach(function(i){(0,l.Z)(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var y=function(n){var i=n.isExpanded,t=n.onClick;return(0,m.jsx)("button",b(b({onClick:t},o.NQ([x.W.defaultBtn,x.W.nonActiveBtn,x.W.expandBtn,i?x.W.activeBtn:null])),{},{children:(0,m.jsx)("span",b(b({},o.NQ([x.W.closeBtn])),{},{children:i?(0,m.jsx)(h,{}):(0,m.jsx)(w,{})}))}))},_=t(50804),v=t.n(_),k=t(54779);function C(n,i){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,l)}return t}function j(n){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?C(Object(t),!0).forEach(function(i){(0,l.Z)(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var S=function(n){var i,t=n.filters,l=n.settings,u=n.settingsFade,p=n.countDisplayItemsStickPC,h=n.countDisplayItemsStickMob,w=n.onClickHandler,f=(0,r.useRouter)().push,b=(0,e.useState)(!1),_=b[0],C=b[1],S=(0,a.Z)().isMobile,B=d({stickyHeight:50}).isSticky,I=(0,r.usePathname)(),$=(0,r.useSearchParams)(),O=(0,e.useState)($.get(k.S)),E=O[0],R=O[1];(0,e.useEffect)(function(){R($.get(k.S))},[$]);var T=function(n){var i=new URLSearchParams(Array.from($.entries()));null!=n&&n.id?i.set(k.S,null==n?void 0:n.id):i.delete(k.S);var t=i.toString();f("".concat(I).concat(t?"?".concat(t):"")),C(!1),null==w||w(n)},W=function(){C(function(n){return!n})};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",j(j({},o.NQ([x.W.categoryItemContainer,l])),{},{children:[(0,m.jsx)(c,{isActive:E===g.yE,onClickFilterHandler:T,isHidden:!!(S&&!_&&E)}),t.filter(function(n){if(!S)return!0;var i=E?n.id===E:n.isTop;return _||i}).map(function(n){return(0,m.jsx)(s,{item:n,isActive:E===n.id,onClick:T},n.id)}),S&&(0,m.jsx)(y,{isExpanded:_,onClick:W})]})),(0,m.jsxs)("div",j(j({className:"".concat(B?v().fadeInAnimation:""," ").concat(null===(i=o.NQ([x.W.categoryItemContainer,x.W.categoryItemsContainerSticky,B&&x.W.sticky,!B&&x.W.hidden]))||void 0===i?void 0:i.className)},o.NQ([u])),{},{children:[(0,m.jsx)(c,{isActive:E===g.yE,onClickFilterHandler:T,isHidden:!!(S&&!_&&E)}),t.filter(function(n,i){if(!S&&B&&!_)return i<(p||8);if(!S&&B&&_)return!0;var t=E?n.id===E:n.isTop;return h&&(t=i<h),_||t}).map(function(n){return(0,m.jsx)(s,{item:n,isActive:E===n.id,onClick:T},n.id)}),B&&(0,m.jsx)(y,{isExpanded:_,onClick:W})]}))]})}},14477:function(n,i,t){"use strict";t.d(i,{W:function(){return l}});var l={newsGridContainer:{display:"xrvj5dj",gridTemplateColumns:"x1o61qjw",margin:"x19bbpc0",marginInline:null,marginInlineStart:null,marginLeft:null,marginInlineEnd:null,marginRight:null,marginBlock:null,marginTop:null,marginBottom:null,gap:"x15iy025",rowGap:null,columnGap:null,fontSize:"x1jchvi3",paddingBottom:"x169j7ul",paddingInline:"xtlx1li",paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,fontFamily:"x1mprafp",$$css:!0},categoryItemContainer:{display:"x78zum5",alignItems:"x6s0dn4",alignContent:"xc26acl",flex:"x5mp9sv",flexGrow:null,flexShrink:null,flexBasis:null,gap:"xb6y1gh",rowGap:null,columnGap:null,position:"x1n2onr6",shadowOffset:"x1av6tce",backdropFilter:"xgv0goc",backgroundColor:"x11gdpij",width:"xh8yej3",margin:"x19bbpc0",marginInline:null,marginInlineStart:null,marginLeft:null,marginInlineEnd:null,marginRight:null,marginBlock:null,marginTop:null,marginBottom:null,flexWrap:"x1a02dak",zIndex:"x1u8a7rm",paddingTop:"xx9p1qp",paddingBottom:"x2vhoib",paddingInline:"xtlx1li",paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,"-webkit-backdrop-filter":"x1fh82p7",transition:"xw430in",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,opacity:"x1hc1fzr","@media (max-width: 767px)_left":"x1afm83z","@media (max-width: 767px)_insetInlineStart":null,"@media (max-width: 767px)_insetInlineEnd":null,"@media (max-width: 767px)_gap":"x1gxgjq","@media (max-width: 767px)_rowGap":null,"@media (max-width: 767px)_columnGap":null,"@media (max-width: 767px)_margin":"x1mv7fvz","@media (max-width: 767px)_marginInline":null,"@media (max-width: 767px)_marginInlineStart":null,"@media (max-width: 767px)_marginLeft":null,"@media (max-width: 767px)_marginInlineEnd":null,"@media (max-width: 767px)_marginRight":null,"@media (max-width: 767px)_marginBlock":null,"@media (max-width: 767px)_marginTop":null,"@media (max-width: 767px)_marginBottom":null,"@media (max-width: 767px)_paddingTop":"xpky1g7","@media (max-width: 767px)_paddingBottom":"x8f1qrx","@media (max-width: 767px)_paddingInline":"x37s953","@media (max-width: 767px)_paddingStart":null,"@media (max-width: 767px)_paddingLeft":null,"@media (max-width: 767px)_paddingEnd":null,"@media (max-width: 767px)_paddingRight":null,"@media (max-width: 767px)_backgroundColor":"xzzyyte","@media (max-width: 767px)_shadowColor":"x2ckbn5","@media (max-width: 767px)_shadowOffset":"x1tgkeh","@media (max-width: 767px)_backdropFilter":"x19d7j7w","@media (max-width: 767px)_-webkit-backdrop-filter":"x1qf9sjk","@media (max-width: 767px)_borderBottom":"xioha7i","@media (max-width: 767px)_borderBottomWidth":null,"@media (max-width: 767px)_borderBottomStyle":null,"@media (max-width: 767px)_borderBottomColor":null,$$css:!0},categoryItemsContainerSticky:{zIndex:"x1n327nk",paddingTop:"x1bntw3w","@media (max-width: 767px)_paddingTop":"xpky1g7",$$css:!0},defaultBtn:{padding:"xtsbmjc",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,borderRadius:"xzl92wl",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,border:"x1gs6z28",borderWidth:null,borderInlineWidth:null,borderInlineStartWidth:null,borderLeftWidth:null,borderInlineEndWidth:null,borderRightWidth:null,borderBlockWidth:null,borderTopWidth:null,borderBottomWidth:null,borderStyle:null,borderInlineStyle:null,borderInlineStartStyle:null,borderLeftStyle:null,borderInlineEndStyle:null,borderRightStyle:null,borderBlockStyle:null,borderTopStyle:null,borderBottomStyle:null,borderColor:null,borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottomColor:null,fontFamily:"x1mprafp",fontWeight:"x1iikomf",margin:"x1ghz6dp",marginInline:null,marginInlineStart:null,marginLeft:null,marginInlineEnd:null,marginRight:null,marginBlock:null,marginTop:null,marginBottom:null,fontSize:"x6u19be",lineHeight:"x8r4c90",fontStyle:"x1j61x8r",transition:"x1nubzjo",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,cursor:"x1ypdohk","-webkit-tap-highlight-color":"x1ika30y","@media (max-width: 767px)_padding":"xlbaw4","@media (max-width: 767px)_paddingInline":null,"@media (max-width: 767px)_paddingStart":null,"@media (max-width: 767px)_paddingLeft":null,"@media (max-width: 767px)_paddingEnd":null,"@media (max-width: 767px)_paddingRight":null,"@media (max-width: 767px)_paddingBlock":null,"@media (max-width: 767px)_paddingTop":null,"@media (max-width: 767px)_paddingBottom":null,"@media (max-width: 767px)_fontSize":"xr8665o","@media (max-width: 767px)_lineHeight":"x8bjizj",$$css:!0},activeBtn:{backgroundColor:"x1cl2ijq",color:"x1f7m26b",$$css:!0},nonActiveBtn:{backgroundColor:"x10sffx1 x43rm0e x1bfafog",color:"x1xnyvwy xwnt5dq x1u63q0v",$$css:!0},expandBtn:{maxHeight:"x1yyrp5n",maxWidth:"x11amdke","@media (max-width: 767px)_maxHeight":"xm0mchd","@media (max-width: 767px)_maxWidth":"x1ayyhxf",$$css:!0},closeBtn:{height:"xpfg90v",width:"x5ezxib",$$css:!0},sticky:{position:"xixxii4",top:"xljdvb9",opacity:"x1hc1fzr","@media (max-width: 767px)_top":"xnzjo22",$$css:!0},hidden:{display:"x1s85apg",$$css:!0},viewSwitchContainer:{display:"x78zum5",margin:"x19bbpc0",marginBlock:null,marginTop:null,justifyContent:"x1qughib",minHeight:"xl96fnv",maxHeight:"x1h0u1u",borderBottom:"x17m58df",borderBottomWidth:null,borderBottomStyle:null,borderColor:"x18bjwwh",borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottomColor:null,marginInline:"x1x56qfr",marginInlineStart:null,marginLeft:null,marginInlineEnd:null,marginRight:null,marginBottom:"x1rry8lb","@media (max-width: 767px)_display":"x137v6ai","@media (max-width: 767px)_minHeight":"x1hscjo2","@media (max-width: 767px)_maxHeight":"x1v2vo6w","@media (max-width: 767px)_marginInline":"x18w09aw","@media (max-width: 767px)_marginInlineStart":null,"@media (max-width: 767px)_marginLeft":null,"@media (max-width: 767px)_marginInlineEnd":null,"@media (max-width: 767px)_marginRight":null,"@media (max-width: 767px)_borderColor":"x14whmll","@media (max-width: 767px)_borderInlineColor":null,"@media (max-width: 767px)_borderInlineStartColor":null,"@media (max-width: 767px)_borderLeftColor":null,"@media (max-width: 767px)_borderInlineEndColor":null,"@media (max-width: 767px)_borderRightColor":null,"@media (max-width: 767px)_borderBlockColor":null,"@media (max-width: 767px)_borderTopColor":null,"@media (max-width: 767px)_marginBottom":"x1lhsz42","@media (max-width: 767px)_borderBottom":"x1dw2iom","@media (max-width: 767px)_borderBottomWidth":null,"@media (max-width: 767px)_borderBottomStyle":null,"@media (max-width: 767px)_borderBottomColor":null,$$css:!0},viewSwitcher:{display:"x78zum5",maxWidth:"x1nmtmj3",minWidth:"x12wlv3c",justifyContent:"x1qughib",margin:"xe7mz8o",marginInline:null,marginInlineStart:null,marginLeft:null,marginInlineEnd:null,marginRight:null,marginBlock:null,marginTop:null,marginBottom:null,"@media (max-width: 767px)_display":"x137v6ai",$$css:!0},indexBtnText:{textAlign:"xdpxx8g",marginBlock:"x1nkss2m",marginTop:null,marginBottom:null,$$css:!0},indexIcon:{display:"x1lliihq",marginBlock:"x1nkss2m",marginTop:null,marginBottom:null,minWidth:"x16l2gpo",height:"x1fu1fag",$$css:!0},indexBtn:{width:"x1rnskjf",boxSizing:"x1afcbsf",zIndex:"x1u8a7rm",margin:"xe7mz8o",marginInline:null,marginLeft:null,marginBlock:null,marginTop:null,marginBottom:null,marginRight:"x1sqbst9",marginInlineStart:null,marginInlineEnd:null,"@media (max-width: 767px)_width":"x12vfm4e","@media (max-width: 767px)_height":"xl7jn43","@media (max-width: 767px)_marginInline":"xztz9bh","@media (max-width: 767px)_marginLeft":null,"@media (max-width: 767px)_paddingBlock":"x1hcai9w","@media (max-width: 767px)_paddingTop":null,"@media (max-width: 767px)_paddingBottom":null,"@media (max-width: 767px)_marginRight":"xcnho10","@media (max-width: 767px)_marginInlineStart":null,"@media (max-width: 767px)_marginInlineEnd":null,$$css:!0},newsCard:{backgroundColor:"x10sffx1",paddingBottom:"x143l2de",position:"x1n2onr6",$$css:!0},newsCardContent:{zIndex:"xzkaem6",position:"x10l6tqk",width:"xh8yej3",height:"x5yr21d",padding:"xb0mvso",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,color:"x1awj2ng",display:"x78zum5",flexDirection:"xdt5ytf",backgroundColor:"xj4c5ne",$$css:!0},newsCardImg:{zIndex:"xhtitgo",position:"x10l6tqk",objectFit:"xl1xv1r",width:"xh8yej3",height:"x5yr21d",transition:"x1voivod",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,$$css:!0},newsCardCategory:{marginBottom:"x4ii5y1",backgroundColor:"x10sffx1",color:"x1xnyvwy",width:"xezivpi",padding:"x1jqnqki",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,borderRadius:"xzl92wl",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,fontSize:"x6u19be",$$css:!0},newsCardDate:{fontSize:"x1603h9y",paddingBottom:"x10l3h1t",$$css:!0},newsCardHeading:{textTransform:"xtvhhri",fontSize:"xcg35fi",lineHeight:"xzw6c15",color:"x1f7m26b",fontWeight:"x1iikomf",fontFamily:"x1mprafp",$$css:!0},newsColumnCard:{backgroundColor:"xg0un9r",transition:"xx55ryq",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,paddingInline:"xtlx1li",paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,"@media (max-width: 767px)_flexDirection":"x19xhxss","@media (max-width: 767px)_paddingInline":"x12ankde","@media (max-width: 767px)_paddingStart":null,"@media (max-width: 767px)_paddingLeft":null,"@media (max-width: 767px)_paddingEnd":null,"@media (max-width: 767px)_paddingRight":null,$$css:!0},newsColumnCardContentWrapper:{display:"xrvj5dj",gridTemplateColumns:"x1up0gr6",borderColor:"x18bjwwh",borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottom:"x17m58df",borderBottomWidth:null,borderBottomStyle:null,borderBottomColor:null,paddingBlock:"xb0ozop",paddingTop:null,paddingBottom:null,gap:"x1dt46jy",rowGap:null,columnGap:null,justifyContent:"x1qughib","@media (max-width: 767px)_gridTemplateColumns":"xerloh7","@media (max-width: 767px)_marginInline":"x1he4ali","@media (max-width: 767px)_marginInlineStart":null,"@media (max-width: 767px)_marginLeft":null,"@media (max-width: 767px)_marginInlineEnd":null,"@media (max-width: 767px)_marginRight":null,"@media (max-width: 767px)_paddingBlock":"x1sav843","@media (max-width: 767px)_paddingTop":null,"@media (max-width: 767px)_paddingBottom":null,"@media (max-width: 767px)_gap":"x1yg81pb","@media (max-width: 767px)_rowGap":null,"@media (max-width: 767px)_columnGap":null,$$css:!0},newsColumnCardImage:{height:"x2uvbx4",objectFit:"xl1xv1r",transition:"xh8on2s",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,maxWidth:"x6c8nl2",minWidth:"xbfca90",maxHeight:"xmkvmha",minHeight:"xwx3pkj","@media (max-width: 767px)_height":"x1odognp","@media (max-width: 767px)_maxWidth":"x1q9t86b","@media (max-width: 767px)_minWidth":"xesy6y7","@media (max-width: 767px)_minHeight":"x1hq4jyi","@media (max-width: 767px)_maxHeight":"xfgpi8h",$$css:!0},newsColumnCardCenterContainer:{$$css:!0},newsColumnCardTitle:{fontFamily:"x1mprafp",color:"xdwo0da",fontSize:"xcg35fi",lineHeight:"xzw6c15",paddingBottom:"x10l3h1t",textTransform:"xtvhhri","@media (max-width: 767px)_fontSize":"x1tb6mcy","@media (max-width: 767px)_lineHeight":"x1u6bhaf","@media (max-width: 767px)_paddingBottom":"xxb599r",$$css:!0},newsColumnCardDate:{fontFamily:"x1mprafp",fontSize:"x6u19be",lineHeight:"x8r4c90",color:"x1old5x5","@media (max-width: 767px)_fontSize":"x1pmh8cn","@media (max-width: 767px)_lineHeight":"x17caxwj",$$css:!0},newsColumnCardContent:{minWidth:"xbfca90",maxWidth:"x6c8nl2",fontFamily:"x1mprafp",color:"xdwo0da",fontSize:"xy6omfd",lineHeight:"x83n61p",overflow:"xb3r6kr",overflowX:null,overflowY:null,textOverflow:"xlyipyv","@media (max-width: 767px)_fontSize":"xffbhg1","@media (max-width: 767px)_lineHeight":"x8bjizj","@media (max-width: 767px)_minWidth":"xesy6y7","@media (max-width: 767px)_maxWidth":"x1q9t86b",$$css:!0},link:{textDecoration:"x120d3lb",textDecorationColor:null,textDecorationLine:null,textDecorationStyle:null,textDecorationThickness:null,color:"x1heor9g",$$css:!0}}},54779:function(n,i,t){"use strict";t.d(i,{S:function(){return e},q:function(){return l}});var l="is-grid",e="active-cat"},79950:function(n,i,t){"use strict";t.d(i,{aJ:function(){return d},tz:function(){return r},x4:function(){return l},yE:function(){return e}});var l={title:"Все",id:null},e=null,r=[{title:"Sminex",id:"33",isTop:!0},{title:"Малая Ордынка 19",id:"34"},{title:"Ильинка 3/8",id:"56",isTop:!0},{title:"Городская усадьба",id:"52"},{title:"Врубеля 4",id:"59",isTop:!0},{title:"Фрунзенская набережная",id:"73"},{title:"Достижение",id:"48",isTop:!0},{title:"Тишинский бульвар",id:"61"},{title:"Вестердам",id:"58"},{title:"Лаврушинский",id:"51"},{title:"Обыденский № 1",id:"54"},{title:"West Garden",id:"55"},{title:"Чистые Пруды",id:"53"},{title:"Life Time",id:"57"},{title:"Twist",id:"60"}],d=function(n){var i=n.filters,t=n.news,l=n.loaderRef,e=n.hasMore,r=n.isLoading;return[{component:"CategoryFilter",props:{filters:i,onClickHandler:n.onClickHandler}},{component:"ViewSwitchSection",props:{}},{component:"NewsContainer",props:{news:t,loaderRef:l,hasMore:e,isLoading:r}}]}},50804:function(n){n.exports={linkStyle:"styles_linkStyle__SawGb",fadeInAnimation:"styles_fadeInAnimation__5FS_g",fadeIn:"styles_fadeIn__9wWkf"}}}]);