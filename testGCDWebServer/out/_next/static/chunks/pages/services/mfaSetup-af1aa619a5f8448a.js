(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455,6216,347],{26028:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/mfaSetup",function(){return s(91677)}])},91677:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return v}});var n=s(85893),t=s(67294),c=s(9473),a=s(10682),i=s(34051),l=s(31555),o=s(12529),d=s(35005),h=s(32171),u=s(76515),x=s(92592),j=s(38712),y=s.n(j),p=s(32552),f=s(17384),Z=s(49486);function v(){let e=(0,c.I0)(),[r,s]=(0,t.useState)(!1),[j,v]=(0,t.useState)(null),[m,g]=(0,t.useState)(""),[w,C]=(0,t.useState)(!1),[S,N]=(0,t.useState)(!1),[_,b]=(0,t.useState)(!1),[k,A]=(0,t.useState)(""),E=(0,t.useRef)(null),R=(0,c.v9)(e=>e.auth.isLoggedIn),F=(0,c.v9)(e=>e.account.mfa),z=async()=>{try{e((0,f.Qz)({token:m})),g("")}catch(e){alert(e)}},T=()=>{A(""),b(!1)},B=async()=>{e((0,f._n)()),T()};return(0,t.useEffect)(()=>{R&&e((0,f.DR)())},[R]),(0,t.useEffect)(()=>{F&&(F.mfaSetup&&C(!0),F.mfaEnabled?s(!0):(s(!1),F.otpAuthUrl?(async()=>{try{let e=await x.toDataURL(F.otpAuthUrl);v(e)}catch(e){(0,Z.qu)(!1,"QRCode error.")}})():e((0,f.DR)())))},[F]),(0,n.jsx)(p.Z,{children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),r?(0,n.jsx)("div",{className:"m-3",children:(0,n.jsxs)(l.Z,{xs:12,children:[(0,n.jsx)("h1",{children:"2FA is enabled."}),(0,n.jsx)(d.Z,{variant:"warning",className:"py-2",onClick:()=>b(!0),children:"Disable"}),(0,n.jsx)(h.Z,{show:_,onEntered:()=>{E.current.focus()},onHide:T,children:(0,n.jsxs)(h.Z.Body,{children:[(0,n.jsx)("h3",{children:"Are you sure?"}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(u.Z,{className:"mb-3",children:(0,n.jsx)(o.Z.Control,{ref:E,size:"lg",type:"text",value:k,onChange:e=>A(e.target.value),placeholder:"Yes"})})}),(0,n.jsx)(d.Z,{variant:"primary",className:"pull-right",size:"md",onClick:B,disabled:"Yes"!==k,children:"Go"}),(0,n.jsx)(d.Z,{variant:"light",className:"pull-right",size:"md",onClick:T,children:"Cancel"})]})}),(0,n.jsxs)(h.Z,{show:w,fullscreen:!0,onHide:()=>C(!1),children:[(0,n.jsx)(h.Z.Header,{closeButton:!0,children:(0,n.jsx)(h.Z.Title,{children:"2FA Recovery Words"})}),(0,n.jsxs)(h.Z.Body,{children:[(0,n.jsx)("p",{children:"Store your recovery words in a secure location. If you lost your 2FA authenticator account, using recovery words is the only way to pass the 2FA step."}),(0,n.jsx)("hr",{}),(0,n.jsx)("h3",{children:F&&F.recoveryWords}),(0,n.jsx)("hr",{}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(d.Z,{variant:"primary",onClick:()=>{navigator.clipboard.writeText(F.recoveryWords),N(!0)},children:S?"Copied":"Copy"})})]})]})]})}):(0,n.jsxs)("div",{className:"m-3",children:[(0,n.jsx)(i.Z,{children:(0,n.jsx)("h1",{children:"Turn On 2FA"})}),(0,n.jsx)(i.Z,{children:(0,n.jsx)("h4",{children:"Step 1. Open your authenticator app., or download one if you don't have any;"})}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("h4",{children:"Step 2. Add an account by scanning the following QR code;"}),j&&(0,n.jsx)("img",{className:y().qrCode,alt:"qrcode",src:j})]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)("h4",{children:"Step 3. Enter the token displayed on your app, then verify."})}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Z,{xs:4,md:3,children:(0,n.jsx)(o.Z.Control,{className:y().inputBox,size:"lg",type:"text",placeholder:"",value:m,onChange:e=>g(e.target.value)})}),(0,n.jsx)(l.Z,{xs:8,md:9,children:(0,n.jsx)(d.Z,{variant:"primary",onClick:z,children:"Verify"})})]}),(0,n.jsx)("br",{}),(0,n.jsx)(i.Z,{children:(0,n.jsx)("h4",{children:"Step 4. Store your recovery phrase in a secure location. You would need the recovery phrase if you lost your 2FA account."})})]})]})})}}},function(e){e.O(0,[9769,2592,2552,9774,2888,179],function(){return e(e.s=26028)}),_N_E=e.O()}]);