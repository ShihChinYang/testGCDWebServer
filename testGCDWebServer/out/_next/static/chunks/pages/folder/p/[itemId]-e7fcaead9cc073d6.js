(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3652],{72659:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/folder/p/[itemId]",function(){return n(90470)}])},90470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var c=n(85893);n(67294);var o=n(11163),a=n(9473),r=n(34051),i=n(31555),s=n(38712),l=n.n(s),d=n(41975),u=n(32552),f=n(32132),h=n(69563),g=n(37865),p=n(85056),x=n(93530),v=n(24638),j=n(49411),N=n(49486),P=n(51892);function _(){(0,N.qu)(!1,"Rendering item");let e=(0,a.I0)(),t=(0,o.useRouter)(),n=(0,a.v9)(e=>e.page.changingPage),s=(0,a.v9)(e=>e.page.id),_=(0,a.v9)(e=>e.page.container),m=(0,a.v9)(e=>e.page.position),w=(0,a.v9)(e=>e.container.container);async function C(c){if((0,N.qu)(!1,"gotoAnotherPage ".concat(n," ").concat(s," ").concat(_," ").concat(m)),n||!(s||!_||!m))return;(0,j.cD)(!0);let o,a=null;switch(c){case"-1":try{o=await (0,P.IS)("getPreviousFolderPage",_,m,e),a="EndOfFolder"===o?"/folder/contents/".concat(_):"/folder/p/".concat(o)}catch(e){}break;case"+1":try{o=await (0,P.IS)("getNextFolderPage",_,m,e),"EndOfFolder"===o?alert("End of folder"):a="/folder/p/".concat(o)}catch(e){}}(0,N.qu)(!1,"setNavigationInSameContainer ..."),(0,v.RB)(!0),a?t.push(a):(0,j.cD)(!1)}let k=async()=>{try{let n=await (0,v.Nl)(w,e);n&&t.push("/folder/p/".concat(n))}catch(e){alert("Could not get the first item in the container")}},I=async()=>{try{let n=await (0,v.DG)(w,e);n&&t.push("/folder/p/".concat(n))}catch(e){alert("Could not get the first item in the container")}};return(0,c.jsxs)("div",{className:l().pageBackground,children:[(0,c.jsx)(u.Z,{children:(0,c.jsxs)(f.Z,{itemId:t.query.itemId,children:[(0,c.jsx)("br",{}),(0,c.jsx)(h.Z,{onCoverClicked:()=>{let e="/folder/".concat(w);t.push(e)},onContentsClicked:()=>{let e="/folder/contents/".concat(_);t.push(e)},onGotoFirstItem:k,onGotoLastItem:I}),(0,c.jsx)("br",{}),(0,c.jsx)(r.Z,{children:(0,c.jsx)(i.Z,{lg:{span:10,offset:1},children:(0,c.jsxs)("div",{className:"".concat(l().pagePanel),children:[(0,c.jsx)(g.Z,{}),(0,c.jsx)(p.Z,{})]})})}),(0,c.jsx)(x.Z,{onNextClicked:()=>{(0,N.qu)(!1,"Next Page "),C("+1")},onPreviousClicked:()=>{(0,N.qu)(!1,"Previous Page "),C("-1")}})]})}),(0,c.jsx)(d.Z,{})]})}}},function(e){e.O(0,[571,9769,6743,2890,416,2552,6216,9706,6536,3362,9774,2888,179],function(){return e(e.s=72659)}),_N_E=e.O()}]);