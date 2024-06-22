(function(){"use strict";var e={7195:function(e,t,n){var o=n(5130),r=n(6768),a=n(4232);const i={id:"app"},s=(0,r.Lk)("div",{class:"line"},null,-1),c=(0,r.Lk)("div",{class:"line"},null,-1),l=(0,r.Lk)("div",{class:"line"},null,-1),u=[s,c,l],d=(0,r.Lk)("button",null,"CV",-1),m=[d],g={class:"content"};function p(e,t,n,o,s,c){const l=(0,r.g2)("MainLayout"),d=(0,r.g2)("ProjectLayout"),p=(0,r.g2)("ContactLayout");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("header",null,[(0,r.Lk)("button",{class:"title-button",onClick:t[0]||(t[0]=e=>c.handleButtonClick("mainLayout"))},"Lukas BM"),(0,r.Lk)("div",{class:"menu-toggle",onClick:t[1]||(t[1]=(...e)=>c.toggleMenu&&c.toggleMenu(...e))},u),(0,r.Lk)("div",{class:(0,a.C4)(["button-group",{"show-menu":s.isMenuOpen}])},[(0,r.Lk)("button",{onClick:t[2]||(t[2]=e=>c.handleButtonClick("projectLayout"))},"Projects"),(0,r.Lk)("button",{onClick:t[3]||(t[3]=e=>c.handleButtonClick("contactLayout"))},"Contact"),(0,r.Lk)("a",{href:"/LukasBygdellMalmstig-CV.pdf",target:"_blank",onClick:t[4]||(t[4]=(...e)=>c.closeMenu&&c.closeMenu(...e))},m)],2)]),(0,r.Lk)("div",g,[(0,r.bF)(l,{id:"mainLayout"}),(0,r.bF)(d,{id:"projectLayout"}),(0,r.bF)(p,{id:"contactLayout"})])])}const f={class:"main-container"},v={class:"content-container"};function h(e,t,n,o,a,i){const s=(0,r.g2)("LayoutPortrait"),c=(0,r.g2)("LayoutDescription");return(0,r.uX)(),(0,r.CE)("div",f,[(0,r.Lk)("div",v,[(0,r.bF)(s),(0,r.bF)(c)])])}const k={class:"layout-portrait"},y=["src"];function L(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div",k,[(0,r.Lk)("img",{src:a.imageSrc,alt:"Portrait Image",class:"image"},null,8,y)])}var b={name:"LayoutPortrait",data(){return{imageSrc:n(7954)}}},j=n(1241);const C=(0,j.A)(b,[["render",L],["__scopeId","data-v-627ee1e7"]]);var M=C;const w=e=>((0,r.Qi)("data-v-71f535c5"),e=e(),(0,r.jt)(),e),P=w((()=>(0,r.Lk)("div",{class:"layout-description-title"}," Civilingenjör IT Uppsala Universitet ",-1))),S=w((()=>(0,r.Lk)("div",{class:"layout-description"}," Jag är en engagerad systemutvecklare med en civilingenjörsexamen i informationsteknik från Uppsala universitet. Med flera års erfarenhet inom mjukvaruutveckling har jag utvecklat en stark kompetens inom hela utvecklingscykeln, från kravinsamling till implementation och testning. Jag har arbetat med olika programmeringsspråk, inklusive Java, Python, och JavaScript, samt moderna ramverk som React och Angular. Genom mitt arbete i agila team har jag lärt mig att kommunicera effektivt och samarbeta för att nå gemensamma mål. Min passion för teknologi driver mig att ständigt uppdatera mina kunskaper och jag är särskilt intresserad av att skapa robusta och skalbara system som verkligen gör skillnad. På min fritid bidrar jag till open source-projekt och utforskar nya teknologier för att bredda min kompetens. Jag ser fram emot nya utmaningar där jag kan bidra med mina kunskaper och erfarenheter för att utveckla innovativa lösningar. ",-1)));function _(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)(r.FK,null,[P,S],64)}var O={name:"LayoutDescription"};const T=(0,j.A)(O,[["render",_],["__scopeId","data-v-71f535c5"]]);var E=T,F={name:"MainLayout",components:{LayoutPortrait:M,LayoutDescription:E}};const I=(0,j.A)(F,[["render",h],["__scopeId","data-v-77db072a"]]);var A=I;const x={class:"main-container"},X={class:"content-container"};function J(e,t,n,o,a,i){const s=(0,r.g2)("ProjectCard");return(0,r.uX)(),(0,r.CE)("div",x,[(0,r.Lk)("div",X,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.projects,(e=>((0,r.uX)(),(0,r.Wv)(s,{key:e.id,title:e.title,image:e.image,description:e.description,technologies:e.technologies},null,8,["title","image","description","technologies"])))),128))])])}const B={class:"card"},U={class:"card-title"},V=["src"],q={class:"card-description"},Q={class:"technologies-used"};function D(e,t,n,o,i,s){return(0,r.uX)(),(0,r.CE)("div",B,[(0,r.Lk)("h3",U,(0,a.v_)(n.title),1),(0,r.Lk)("img",{src:n.image,alt:"Project Image",class:"card-image"},null,8,V),(0,r.Lk)("p",q,(0,a.v_)(n.description),1),(0,r.Lk)("p",Q,(0,a.v_)(s.technologiesUsed),1)])}var R={name:"ProjectCard",props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String,required:!0},technologies:{type:Array,required:!0}},computed:{technologiesUsed(){return this.technologies.join(", ")}}};const K=(0,j.A)(R,[["render",D],["__scopeId","data-v-465f3cc6"]]);var N=K,W=n.p+"img/mountain.8da1c89a.jpeg",G={name:"ProjectLayout",components:{ProjectCard:N},data(){return{projects:[{id:1,title:"Project One",image:W,description:"This project involved creating a dynamic portfolio website using Vue.js, focusing on a modern interface, smooth navigation, and interactive features such as a project gallery and contact form. It integrates a headless CMS for content management, ensuring responsiveness across devices. The result is a high-performance website demonstrating proficiency in building engaging web applications. word word word word word word word word word word word word word word word word",technologies:["Vue.js","JavaScript","CSS"]},{id:2,title:"Project Two",image:W,description:"This is a description for project two.",technologies:["React","JavaScript","HTML"]},{id:3,title:"Project Three",image:W,description:"This is a description for project three.",technologies:["Angular","TypeScript","SCSS"]},{id:4,title:"Project Four",image:W,description:"This is a description for project four.",technologies:["Node.js","Express","MongoDB"]},{id:5,title:"Project Five",image:W,description:"This is a description for project five.",technologies:["Python","Django","PostgreSQL"]},{id:6,title:"Project Six",image:W,description:"This is a description for project six.",technologies:["Ruby on Rails","Ruby","SQLite"]}]}}};const H=(0,j.A)(G,[["render",J],["__scopeId","data-v-3ec0e34d"]]);var $=H;const z=e=>((0,r.Qi)("data-v-2b88416a"),e=e(),(0,r.jt)(),e),Y={class:"main-container"},Z={class:"content-container"},ee=z((()=>(0,r.Lk)("div",{class:"contact-title"},[(0,r.Lk)("h1",null,"Kontakta mig")],-1))),te=z((()=>(0,r.Lk)("div",{class:"contact-email"},[(0,r.eW)(" Email: Lukasbygmal@gmail.com "),(0,r.Lk)("br"),(0,r.eW)(" eller formuläret nedan ")],-1)));function ne(e,t,n,o,a,i){const s=(0,r.g2)("ContactForm");return(0,r.uX)(),(0,r.CE)("div",Y,[(0,r.Lk)("div",Z,[ee,te,(0,r.bF)(s)])])}const oe=e=>((0,r.Qi)("data-v-5305c1c6"),e=e(),(0,r.jt)(),e),re={class:"form-container"},ae={class:"form-group"},ie=oe((()=>(0,r.Lk)("label",{for:"name"},null,-1))),se={class:"form-group"},ce=oe((()=>(0,r.Lk)("label",{for:"email"},null,-1))),le={class:"form-group"},ue=oe((()=>(0,r.Lk)("label",{for:"message"},null,-1))),de=oe((()=>(0,r.Lk)("button",{type:"submit"},"Send",-1))),me={key:0,class:"success-message"},ge={key:1,class:"error-message"};function pe(e,t,n,i,s,c){return(0,r.uX)(),(0,r.CE)("div",re,[(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>c.submitForm&&c.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",ae,[ie,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>s.form.name=e),placeholder:"Name",required:""},null,512),[[o.Jo,s.form.name]])]),(0,r.Lk)("div",se,[ce,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>s.form.email=e),placeholder:"Email",required:""},null,512),[[o.Jo,s.form.email]])]),(0,r.Lk)("div",le,[ue,(0,r.bo)((0,r.Lk)("textarea",{id:"message","onUpdate:modelValue":t[2]||(t[2]=e=>s.form.message=e),placeholder:"Message",required:""},null,512),[[o.Jo,s.form.message]])]),de],32),s.successMessage?((0,r.uX)(),(0,r.CE)("div",me,(0,a.v_)(s.successMessage),1)):(0,r.Q3)("",!0),s.errorMessage?((0,r.uX)(),(0,r.CE)("div",ge,(0,a.v_)(s.errorMessage),1)):(0,r.Q3)("",!0)])}var fe={data(){return{form:{name:"",email:"",message:""},successMessage:"",errorMessage:""}},methods:{async submitForm(){try{const e=await fetch("http://localhost:3000/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.form)}),t=await e.json();e.ok?(this.successMessage=t.message,this.errorMessage="",this.form.name="",this.form.email="",this.form.message=""):(this.errorMessage=t.error,this.successMessage="")}catch(e){this.errorMessage="An error occurred while sending the email.",this.successMessage=""}}}};const ve=(0,j.A)(fe,[["render",pe],["__scopeId","data-v-5305c1c6"]]);var he=ve,ke={name:"ContactLayout",components:{ContactForm:he}};const ye=(0,j.A)(ke,[["render",ne],["__scopeId","data-v-2b88416a"]]);var Le=ye,be={name:"App",components:{MainLayout:A,ProjectLayout:$,ContactLayout:Le},data(){return{isMenuOpen:!1}},methods:{handleButtonClick(e){this.scrollTo(e),this.closeMenu()},scrollTo(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1}}};const je=(0,j.A)(be,[["render",p]]);var Ce=je;(0,o.Ef)(Ce).mount("#app")},7954:function(e,t,n){e.exports=n.p+"img/port.fa6c454e.jpeg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7195)}));o=n.O(o)})();
//# sourceMappingURL=app.6c9f6a00.js.map