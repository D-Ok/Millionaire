(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"name":"Who wants to be a millionaire?","currency":"$","questions":[{"key":"500-1","score":500,"question":"In the UK, the abbreviation NHS stands for National what Service?","correct":["B"],"options":[{"id":"A","text":"Humanity"},{"id":"B","text":"Health"},{"id":"C","text":"Honour"},{"id":"D","text":"Household"}]},{"key":"1000-1","score":1000,"question":"Which Disney character famously leaves a glass slipper behind at a royal ball?","correct":["C"],"options":[{"id":"A","text":"Pocahontas"},{"id":"B","text":"Sleeping Beauty"},{"id":"C","text":"Cinderella"},{"id":"D","text":"Elsa"}]},{"key":"2000-1","score":2000,"question":"What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?","correct":["D"],"options":[{"id":"A","text":"Hangar"},{"id":"B","text":"Terminal"},{"id":"C","text":"Concourse"},{"id":"D","text":"Carousel"}]},{"key":"4000-1","score":4000,"question":"Which of these brands was chiefly associated with the manufacture of household locks?","correct":["C"],"options":[{"id":"A","text":"Phillips"},{"id":"B","text":"Flymo"},{"id":"C","text":"Chubb"},{"id":"D","text":"Ronseal"}]},{"key":"8000-1","score":8000,"question":"The hammer and sickle is one of the most recognisable symbols of which political ideology?","correct":["B"],"options":[{"id":"A","text":"Republicanism"},{"id":"B","text":"Communism"},{"id":"C","text":"Conservatism"},{"id":"D","text":"Liberalism"}]},{"key":"16000-1","score":16000,"question":"Which toys have been marketed with the phrase \u201crobots in disguise\u201d?","correct":["D"],"options":[{"id":"A","text":"Bratz Dolls"},{"id":"B","text":"Sylvanian Families"},{"id":"C","text":"Hatchimals"},{"id":"D","text":"Transformers"}]},{"key":"32000-1","score":32000,"question":"What does the word loquacious mean?","correct":["B"],"options":[{"id":"A","text":"Angry"},{"id":"B","text":"Chatty"},{"id":"C","text":"Beautiful"},{"id":"D","text":"Shy"}]},{"key":"64000-1","score":64000,"question":"Obstetrics is a branch of medicine particularly concerned with what?","correct":["A"],"options":[{"id":"A","text":"Childbirth"},{"id":"B","text":"Broken bones"},{"id":"C","text":"Heart conditions"},{"id":"D","text":"Old age"}]},{"key":"125000-1","score":125000,"question":"In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?","correct":["B"],"options":[{"id":"A","text":"Bow-tie, braces and tweed jacket"},{"id":"B","text":"Wide-brimmed hat and extra long scarf"},{"id":"C","text":"Pinstripe suit and trainers"},{"id":"D","text":"Cape, velvet jacket and frilly shirt"}]},{"key":"250000-1","score":250000,"question":"At the closest point, which island group is only 50 miles south-east of the coast of Florida?","correct":["A"],"options":[{"id":"A","text":"Bahamas"},{"id":"B","text":"US Virgin Islands"},{"id":"C","text":"Turks and Caicos Islands"},{"id":"D","text":"Bermuda"}]},{"key":"500000-1","score":500000,"question":"Construction of which of these famous landmarks was completed first?","correct":["D"],"options":[{"id":"A","text":"Empire State Building"},{"id":"B","text":"Royal Albert Hall"},{"id":"C","text":"Eiffel Tower"},{"id":"D","text":"Big Ben Clock Tower"}]},{"key":"1000000-1","score":1000000,"question":"Which of these cetaceans is classified as a \u201ctoothed whale\u201d?","correct":["C"],"options":[{"id":"A","text":"Gray whale"},{"id":"B","text":"Minke whale"},{"id":"C","text":"Sperm whale"},{"id":"D","text":"Humpback whale"}]}]}')},21:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(10),i=n.n(o),a=(n(21),n(11)),s=n(3),u=(n(25),n(14)),l={SYNTHETIC:function(){},END_GAME:function(){},END_ACT:function(){}},d=n(0),b=function(e){var t=e.onClick,n=e.label,c=e.className,r="button ".concat(c);return Object(d.jsx)("button",{className:r,onClick:t,type:"button",children:n})};b.defaultProps={onClick:l.SYNTHETIC,label:"",className:""};var f=b,h=function(e){var t=e.label,n=e.text,c=e.buttonLabel,r=e.onButtonClick,o=e.addBackground,i="main-screen ".concat(o?"add-background":"");return Object(d.jsxs)("div",{className:i,children:[Object(d.jsx)("div",{className:"main-image-container"}),Object(d.jsxs)("div",{className:"main-text-container",children:[Object(d.jsx)("p",{className:"game-label",children:t}),Object(d.jsx)("p",{className:"game-header",children:n}),Object(d.jsx)(f,{className:"game-button",label:c,onClick:r})]})]})};h.defaultProps={label:"",text:"",buttonLabel:"",onButtonClick:l.SYNTHETIC,addBackground:!1};var x,m,p,j=h,v=n(15),O=function(e){return e.toLocaleString()},y=function(e,t){return e.score-t.score};function C(e,t){var n,c=e.length,r=e[(n=c,Math.floor(Math.random()*n))];return t.find((function(e){return e.key===r}))}!function(e){e.Correct="correct",e.Incorrect="incorrect",e.Selected="selected",e.Default="default"}(x||(x={})),function(e){e.Next="next",e.Current="current",e.Previous="prev"}(m||(m={})),function(e){e.START="start",e.GAME="game",e.END="end"}(p||(p={}));var g={text:"1000",type:m.Next},k=function(e){var t=e.text,n=e.type;return Object(d.jsx)("div",{className:"step-container line-container step-type-".concat(n),children:Object(d.jsx)("div",{className:"image-base step",children:t})})};k.defaultProps=g;var w=k;var S=function(e){var t=e.steps,n=e.currentStep,c=e.currency;return Object(d.jsx)("div",{className:"score-container",children:t&&t.map((function(e){var t=function(e,t){switch(!0){case e===t:return m.Current;case t&&e>t:return m.Next;default:return m.Previous}}(e,n),r=O(e);return Object(d.jsx)(w,{text:"".concat(c).concat(r),type:t},r)}))})};S.defaultProps={steps:[],currentStep:0,currency:"$"};var N=S,B=n(6),A=n.n(B),E=n(16),D=n(8);function T(e,t,n){switch(!0){case n.correct.includes(e):return x.Correct;case n.wrong.includes(e):return x.Incorrect;case t.includes(e):return x.Selected;default:return x.Default}}function q(e){return new Promise((function(t){return setTimeout(t,e)}))}var H={onClick:l.SYNTHETIC,item:{id:"H",text:"Hello"},type:x.Default,disabled:!1},P=function(e){var t=e.item,n=e.type,c=e.onClick,r=e.disabled;return Object(d.jsx)("button",{className:"option-container line-container \n    option-type-".concat(n," \n    ").concat(r||n!==x.Default?"no-hover":"can-hover","\n    "),onClick:c,type:"button",disabled:r,children:Object(d.jsx)("div",{className:"option image-base",children:t&&Object(d.jsxs)("div",{className:"option-text-container",children:[Object(d.jsx)("span",{className:"option-text option-id",children:t.id}),Object(d.jsx)("p",{className:"option-text option-label",children:t.text})]})})})};P.defaultProps=H;var I=P,R={question:"",options:[],correct:[],onEndAct:l.END_ACT,waitResults:1e3,waitSelected:1500},M=function(e){var t=e.question,n=e.options,r=e.correct,o=e.onEndAct,i=e.waitResults,a=e.waitSelected,u=Object(c.useState)([]),l=Object(s.a)(u,2),b=l[0],f=l[1],h=Object(c.useState)(!1),x=Object(s.a)(h,2),m=x[0],p=x[1],j=Object(c.useState)({correct:[],wrong:[]}),v=Object(s.a)(j,2),O=v[0],y=v[1];function C(){return(C=Object(D.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,q(a||R.waitSelected);case 3:y({correct:r||[],wrong:b.filter((function(e){return!(null===r||void 0===r?void 0:r.includes(e))}))});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(D.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(i||R.waitResults);case 2:o&&o(!O.wrong.length);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){b.length===(null===r||void 0===r?void 0:r.length)&&function(){C.apply(this,arguments)}()}),[b,r,a]),Object(c.useEffect)((function(){O.correct.length&&function(){g.apply(this,arguments)}()}),[O,i]);return Object(d.jsxs)("div",{className:"act-container",children:[Object(d.jsx)("p",{className:"game-label",children:t}),Object(d.jsx)("div",{className:"options-container",children:n&&n.map((function(e,t){return Object(d.jsx)(I,{disabled:m,item:{id:(n=t,String.fromCharCode("A".charCodeAt(0)+n)),text:e.text},type:T(e.id,b,O),onClick:function(){return t=e.id,void f((function(e){return[].concat(Object(E.a)(e),[t])}));var t}},e.id);var n}))})]})};M.defaultProps=R;var G=M,W=function(e){var t=e.questions,n=e.onEndGame,r=e.currency,o=Object(c.useState)([]),i=Object(s.a)(o,2),a=i[0],u=i[1],l=Object(c.useState)(0),b=Object(s.a)(l,2),f=b[0],h=b[1],x=Object(c.useState)(!1),m=Object(s.a)(x,2),p=m[0],j=m[1],g=Object(c.useState)(!1),k=Object(s.a)(g,2),w=k[0],S=k[1],B=Object(c.useState)(),A=Object(s.a)(B,2),E=A[0],D=A[1],T=function(e){if(e&&e[0]){var t=e[0].contentRect.width<900;p!==t&&(S(!t),j(t))}};Object(c.useEffect)((function(){if(t){var e=function(e){if(!e)return[];var t,n=new Array;return e.forEach((function(e){(t=n.find((function(t){return t.score===e.score})))?t.questions.push(e.key):n.push({score:e.score,questions:[e.key]})})),n.sort(y),n}(t),n=e[0];u(e),h(n?n.score:0)}}),[t]),Object(c.useEffect)((function(){var e=new v.ResizeObserver(T);return e.observe(document.documentElement),function(){return e.unobserve(document.documentElement)}}),[p]),Object(c.useEffect)((function(){var e=a.find((function(e){return e.score===f})),n=e?C(e.questions,t||[]):void 0;D(n)}),[f,t]);var q=Object(c.useCallback)((function(e){var t=a.findIndex((function(e){return e.score===f})),c=a[t+1],r=O(f),o=a[t-1],i=O(o?o.score:0);switch(!0){case e&&!c:n&&n(r,!0);break;case e:h(c.score);break;default:n&&n(i,!1)}}),[a,f,n]);return Object(d.jsxs)("div",{className:"game-container",children:[Object(d.jsx)("button",{className:"mobile-buttons image-".concat(w?"close":"menu"),onClick:function(){return S(!w)},type:"button"}),(!p||!w)&&E&&Object(d.jsx)(G,{question:E.question,options:E.options,correct:E.correct,onEndAct:function(e){return q(e)}},E.key),(!p||w)&&Object(d.jsx)(N,{currency:r,currentStep:f,steps:a.map((function(e){return e.score}))})]})};W.defaultProps={currency:"$",questions:[],onEndGame:l.END_GAME};var F=W,L={name:"Millionaire",currency:"$",questions:[]},Y=function(){var e=Object(c.useState)(p.START),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(L),i=Object(s.a)(o,2),a=i[0],l=i[1],b=Object(c.useState)("0"),f=Object(s.a)(b,2),h=f[0],x=f[1];Object(c.useEffect)((function(){l(u)}),[]);return Object(d.jsx)("div",{className:"App",children:function(){if(null===a)return Object(d.jsx)(d.Fragment,{children:" "});switch(n){case p.START:return Object(d.jsx)(j,{text:a.name,buttonLabel:"Start",onButtonClick:function(){return r(p.GAME)},addBackground:!0});case p.GAME:return Object(d.jsx)(F,{questions:a.questions,onEndGame:function(e){return x(e),void r(p.END)}});default:return Object(d.jsx)(j,{label:"Total score: ",text:"".concat(a.currency).concat(h," earned"),buttonLabel:"Try again",onButtonClick:function(){return r(p.START)}})}}()})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(d.jsxs)(r.a.StrictMode,{children:[Object(d.jsx)(a.a,{children:Object(d.jsx)("title",{children:"Millionaire"})}),Object(d.jsx)(Y,{})]}),document.getElementById("root")),$()}},[[30,1,2]]]);
//# sourceMappingURL=main.821c45ed.chunk.js.map