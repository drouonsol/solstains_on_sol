(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{116:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return h}));var r=n(2),c=n.n(r),a=n(3),o=n(25),i=n(45),s=new o.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new o.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new o.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var o,i,s,u,d,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=l.length>3&&void 0!==l[3]?l[3]:"recent",i=l.length>4&&void 0!==l[4]&&l[4],s=!1,u={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(l,p){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),p({timeout:!0}))}),n);try{d=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),p(u)):(console.log("Resolved via websocket",e),l(u))}),o)}catch(b){s=!0,console.error("WS error in setup",t,b)}case 2:if(s||!i){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,p(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,l(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,g(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[d]&&r.removeSignatureListener(d),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:o.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i.b,isSigner:!1,isWritable:!1},{pubkey:o.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,i,u,d,l,p,b,f,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new o.b(r,t,{preflightCommitment:"recent"}),e.next=3,o.a.fetchIdl(s,a);case 3:return i=e.sent,u=new o.a(i,s,a),d={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return l=e.sent,p=l.data.itemsAvailable.toNumber(),b=l.itemsRedeemed.toNumber(),f=p-b,m=l.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:p,itemsRedeemed:b,itemsRemaining:f,goLiveDate:m}),e.abrupt("return",{candyMachine:d,itemsAvailable:p,itemsRedeemed:b,itemsRemaining:f,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.PublicKey.findProgramAddress([t.toBuffer(),i.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,l,b,h,g,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,l=t.connection,b=t.program,e.next=7,m(s.publicKey);case 7:return h=e.sent,e.next=10,f(s.publicKey);case 10:return g=e.sent,e.next=13,l.getMinimumBalanceForRentExemption(i.a.span);case 13:return x=e.sent,e.next=16,b.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:h,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:d,tokenProgram:i.b,systemProgram:o.d.SystemProgram.programId,rent:o.d.SYSVAR_RENT_PUBKEY,clock:o.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[o.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:i.a.span,lamports:x,programId:i.b}),i.c.createInitMintInstruction(i.b,s.publicKey,0,r,r),p(u,r,r,s.publicKey),i.c.createMintToInstruction(i.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),g=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(12).Buffer)},196:function(e,t,n){},197:function(e,t,n){},200:function(e,t){},203:function(e,t){},232:function(e,t){},233:function(e,t){},261:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i=n(0),s=n.n(i),u=n(23),d=n.n(u),l=(n(196),n(197),n(16)),p=n(2),b=n.n(p),f=n(3),m=n(13),j=n(91),h=n(92),g=n(163),x=n(292),O=n(298),y=n(307),v=n(305),w=n(7),S=n(297),k=n(113),P=n(114),T=n(116),R=n(20),K=Object(h.a)(k.a)(r||(r=Object(j.a)([""]))),B=h.a.span(c||(c=Object(j.a)([""]))),A=h.a.div(a||(a=Object(j.a)([""]))),M=Object(h.a)(x.a)(o||(o=Object(j.a)([""]))),I=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(B,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},L=function(e){var t=Object(i.useState)(),n=Object(m.a)(t,2),r=(n[0],n[1]),c=Object(i.useState)(!1),a=Object(m.a)(c,2),o=a[0],s=a[1],u=Object(i.useState)(!1),d=Object(m.a)(u,2),p=d[0],j=d[1],h=Object(i.useState)(!1),x=Object(m.a)(h,2),k=x[0],B=x[1],L=Object(i.useState)(0),C=Object(m.a)(L,2),D=C[0],_=C[1],E=Object(i.useState)(0),W=Object(m.a)(E,2),F=(W[0],W[1]),N=Object(i.useState)(0),V=Object(m.a)(N,2),z=V[0],G=V[1],J=Object(i.useState)({open:!1,message:"",severity:void 0}),U=Object(m.a)(J,2),Y=U[0],q=U[1],H=Object(i.useState)(new Date(e.startDate)),Z=Object(m.a)(H,2),Q=Z[0],X=Z[1],$=Object(S.a)(),ee=Object(i.useState)(),te=Object(m.a)(ee,2),ne=te[0],re=te[1],ce=function(){Object(f.a)(b.a.mark((function t(){var n,r,c,a,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if($){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.b)($,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,o=n.itemsRemaining,i=n.itemsRedeemed,_(a),G(o),F(i),j(0===o),X(c),re(r);case 16:case"end":return t.stop()}}),t)})))()},ae=function(){var t=Object(f.a)(b.a.mark((function t(){var n,c,a,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,B(!0),!$||!(null===ne||void 0===ne?void 0:ne.program)){t.next=10;break}return t.next=5,Object(T.c)(ne,e.config,$.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(T.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?q({open:!0,message:"The candy machine has let you down",severity:"error"}):q({open:!0,message:"",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Beeb Bop Mint Failed",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",j(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),q({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!$){t.next=23;break}return t.next=21,e.connection.getBalance($.publicKey);case 21:o=t.sent,r(o/w.LAMPORTS_PER_SOL);case 23:return B(!1),ce(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){Object(f.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!$){t.next=5;break}return t.next=3,e.connection.getBalance($.publicKey);case 3:n=t.sent,r(n/w.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[$,e.connection]),Object(i.useEffect)(ce,[$,e.candyMachineId,e.connection]),Object(R.jsxs)("main",{style:{},children:[Object(R.jsxs)("div",{style:{backgroundColor:"black",fontSize:"50px",padding:"10px",color:"white",fontFamily:"VT323"},children:[Object(R.jsx)("a",{href:"https://solstains.xyz",children:"Solstains"}),"        \xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",$&&Object(R.jsx)(P.a,{style:{fontSize:"55px",fontFamily:"VT323",backgroundColor:"transparent",border:"2px solid purple",color:"purple"},children:Object(R.jsx)("a",{children:" Disconnect"})})," ",Object(R.jsx)("a",{href:"https://discord.gg/fMyjkWcufJ",children:"Discord"}),"    ",Object(R.jsx)("a",{href:"https://twitter.com/Solana_Stains",children:"Twitter"})]}),Object(R.jsx)("div",{style:{display:"flex",textAlign:"center",fontWeight:"bold",flexDirection:"column",justifyContent:"center",backgroundColor:"orange",padding:"20px",height:"100vh",fontFamily:"VT323",backgroundImage:"url(https://cdn.discordapp.com/attachments/875370923954430013/910880109341335632/beach_at_ogs.png)"},children:Object(R.jsxs)("div",{style:{border:"2px solid black",borderRadius:"5px",backgroundImage:"url(https://media.discordapp.net/attachments/875370923954430013/910879937265823764/clean.jpg?width=384&height=384)",padding:"25px",fontFamily:"VT323"},children:[Object(R.jsx)("img",{src:"https://cdn.discordapp.com/attachments/902629967274344490/912326730130288660/output-onlinepngtools_6.png",style:{width:"140px"}})," ",Object(R.jsx)("img",{src:"https://cdn.discordapp.com/attachments/902629967274344490/912323817047724112/output-onlinepngtools_2.png",style:{width:"140px",borderImage:"2px",borderColor:"black"}})," ",Object(R.jsx)("img",{src:"https://cdn.discordapp.com/attachments/902629967274344490/912326730574860308/output-onlinepngtools_4.png",style:{width:"140px"}})," ",Object(R.jsx)("img",{src:"https://cdn.discordapp.com/attachments/902629967274344490/912326730369359912/output-onlinepngtools_5.png",style:{width:"140px"}})," ",Object(R.jsx)("img",{src:"https://cdn.discordapp.com/attachments/902629967274344490/912326730776190996/output-onlinepngtools_3.png",style:{width:"140px"}}),Object(R.jsx)("p",{children:Object(R.jsxs)("h2",{children:["The official Solstain mint. Get your own Solstain today",$&&Object(R.jsxs)("div",{children:[D,"/",D]})]})}),$&&Object(R.jsx)("p",{children:Object(R.jsxs)("h2",{children:["Supply: ",z," /1777.",Object(R.jsx)("div",{children:"Price: .2 SOL"})]})}),Object(R.jsx)(A,{children:$?Object(R.jsx)(M,{disabled:p||k||!o,onClick:ae,variant:"contained",style:{fontFamily:"VT323"},className:"btn btn-rg btn-auto btn-outline btn-grad on-bg-theme btn-round",children:p?"SOLD OUT BOI":o?k?Object(R.jsx)(O.a,{}):"MINT":Object(R.jsx)(g.a,{date:Q,onMount:function(e){return e.completed&&s(!0)},onComplete:function(){return s(!0)},renderer:I})}):Object(R.jsx)(K,{style:{fontFamily:"VT323",backgroundColor:"white",color:"purple"},children:"Select wallet"})})]})}),Object(R.jsx)(y.a,{open:Y.open,autoHideDuration:6e3,onClose:function(){return q(Object(l.a)(Object(l.a)({},Y),{},{open:!1}))},children:Object(R.jsx)(v.a,{onClose:function(){return q(Object(l.a)(Object(l.a)({},Y),{},{open:!1}))},severity:Y.severity,children:Y.message})})]})},C=n(25),D=n(308),_=n(309),E=n(310),W=n(301),F=n(302),N=n(311),V=n(306),z=n(181),G=n(303),J=new C.d.PublicKey("ABuywtbjWp8MbkP5mzCMdVq8LvvDKpTtwdJyr6dw61NJ"),U=new C.d.PublicKey("4twrouftC7CwEvoywkJ9369RrGpvSi16DWtNSJDrsBa6"),Y=new C.d.PublicKey("2GoFpqFzttG2cSST1YpH6gKxZ3GzmiEobLAFiBmWA13a"),q="devnet",H=new C.d.Connection("https://explorer-api.devnet.solana.com"),Z=parseInt("1637133900",10),Q=Object(z.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"15px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),X=function(){var e=Object(i.useMemo)((function(){return Object(w.clusterApiUrl)(q)}),[]),t=Object(i.useMemo)((function(){return[Object(D.a)(),Object(_.a)(),Object(E.a)(),Object(W.a)({network:q}),Object(F.a)({network:q})]}),[]);return Object(R.jsx)(G.a,{theme:Q,children:Object(R.jsx)(N.a,{endpoint:e,children:Object(R.jsx)(V.a,{wallets:t,autoConnect:!0,children:Object(R.jsx)(k.b,{children:Object(R.jsx)(P.b,{logo:"https://cdn.discordapp.com/attachments/902629967274344490/908788472540704788/output_ShNei3.gif",children:Object(R.jsx)(L,{candyMachineId:Y,config:U,connection:H,startDate:Z,treasury:J,txTimeout:3e4})})})})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,312)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};d.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(X,{})}),document.getElementById("root")),$()}},[[261,1,2]]]);
//# sourceMappingURL=main.76fef934.chunk.js.map