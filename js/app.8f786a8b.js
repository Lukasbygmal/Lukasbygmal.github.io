(function(){"use strict";var e={120:function(e,t,o){var n=o(751),r=o(641),a=o(33);const i={id:"app"},s=(0,r.Lk)("div",{class:"line"},null,-1),c=(0,r.Lk)("div",{class:"line"},null,-1),l=(0,r.Lk)("div",{class:"line"},null,-1),u=[s,c,l],d=(0,r.Lk)("button",null,"CV",-1),m=[d],p={class:"content"};function g(e,t,o,n,s,c){const l=(0,r.g2)("MainLayout"),d=(0,r.g2)("ProjectLayout"),g=(0,r.g2)("ContactLayout");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("header",null,[(0,r.Lk)("button",{class:"title-button",onClick:t[0]||(t[0]=e=>c.handleButtonClick("mainLayout"))},"Lukas BM"),(0,r.Lk)("div",{class:"menu-toggle",onClick:t[1]||(t[1]=(...e)=>c.toggleMenu&&c.toggleMenu(...e))},u),(0,r.Lk)("div",{class:(0,a.C4)(["button-group",{"show-menu":s.isMenuOpen}])},[(0,r.Lk)("button",{onClick:t[2]||(t[2]=e=>c.handleButtonClick("projectLayout"))},"Projekt"),(0,r.Lk)("button",{onClick:t[3]||(t[3]=e=>c.handleButtonClick("contactLayout"))},"Kontakt"),(0,r.Lk)("a",{href:"/LukasBygdellMalmstig-CV.pdf",target:"_blank",onClick:t[4]||(t[4]=(...e)=>c.closeMenu&&c.closeMenu(...e))},m)],2)]),(0,r.Lk)("div",p,[(0,r.bF)(l,{id:"mainLayout"}),(0,r.bF)(d,{id:"projectLayout"}),(0,r.bF)(g,{id:"contactLayout"})])])}const f={class:"main-container"},h={class:"content-container"};function v(e,t,o,n,a,i){const s=(0,r.g2)("LayoutPortrait"),c=(0,r.g2)("LayoutDescription");return(0,r.uX)(),(0,r.CE)("div",f,[(0,r.Lk)("div",h,[(0,r.bF)(s),(0,r.bF)(c)])])}const k={class:"layout-portrait"},b=["src"];function L(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("div",k,[(0,r.Lk)("img",{src:a.imageSrc,alt:"Portrait Image",class:"image"},null,8,b)])}var y={name:"LayoutPortrait",data(){return{imageSrc:o(954)}}},j=o(262);const C=(0,j.A)(y,[["render",L],["__scopeId","data-v-627ee1e7"]]);var w=C;const M=e=>((0,r.Qi)("data-v-7463b2bb"),e=e(),(0,r.jt)(),e),P=M((()=>(0,r.Lk)("div",{class:"layout-description-title"}," IT Student Uppsala Universitet ",-1))),S=M((()=>(0,r.Lk)("div",{class:"layout-description"}," Välkommen till min portfoliosida! Jag är student på civilingenjörsprogrammet i informationsteknik på Uppsala Universitet. Jag har arbetat med olika programmeringsspråk, som C, Java, Python, SQL, och JavaScript, samt moderna ramverk som React och Flutter. I de projektarbeten jag haft under utbildningen har jag lärt mig att kommunicera effektivt och samarbeta för att nå gemensamma mål. Att få lära sig ny saker är bland det bästa jag vet och försöker alltid lära mig nya saker. På min fritid håller jag på med egna projekt, som ni kan se längre ner på sidan, och utforskar nya teknologier för att bredda min kompetens. Jag ser fram emot nya utmaningar där jag kan bidra med mina kunskaper och erfarenheter för att utveckla lösningar som bidrar positivt till samhällsutvecklingen. ",-1)));function _(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)(r.FK,null,[P,S],64)}var O={name:"LayoutDescription"};const T=(0,j.A)(O,[["render",_],["__scopeId","data-v-7463b2bb"]]);var E=T,F={name:"MainLayout",components:{LayoutPortrait:w,LayoutDescription:E}};const I=(0,j.A)(F,[["render",v],["__scopeId","data-v-77db072a"]]);var A=I;const X={class:"main-container"},J={class:"content-container"};function x(e,t,o,n,a,i){const s=(0,r.g2)("ProjectCard");return(0,r.uX)(),(0,r.CE)("div",X,[(0,r.Lk)("div",J,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.projects,(e=>((0,r.uX)(),(0,r.Wv)(s,{key:e.id,title:e.title,image:e.image,description:e.description,technologies:e.technologies},null,8,["title","image","description","technologies"])))),128))])])}const U={class:"card"},V={class:"card-title"},B=["src"],Q={class:"card-description"},q={class:"technologies-used"};function D(e,t,o,n,i,s){return(0,r.uX)(),(0,r.CE)("div",U,[(0,r.Lk)("h3",V,(0,a.v_)(o.title),1),(0,r.Lk)("img",{src:o.image,alt:"Project Image",class:"card-image"},null,8,B),(0,r.Lk)("p",Q,(0,a.v_)(o.description),1),(0,r.Lk)("p",q,(0,a.v_)(s.technologiesUsed),1)])}var R={name:"ProjectCard",props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String,required:!0},technologies:{type:Array,required:!0}},computed:{technologiesUsed(){return this.technologies.join(", ")}}};const K=(0,j.A)(R,[["render",D],["__scopeId","data-v-465f3cc6"]]);var N=K,W=o.p+"img/mountain.8da1c89a.jpeg",H={name:"ProjectLayout",components:{ProjectCard:N},data(){return{projects:[{id:1,title:"Project One",image:W,description:"This project involved creating a dynamic portfolio website using Vue.js, focusing on a modern interface, smooth navigation, and interactive features such as a project gallery and contact form. It integrates a headless CMS for content management, ensuring responsiveness across devices. The result is a high-performance website demonstrating proficiency in building engaging web applications. word word word word word word word word word word word word word word word word",technologies:["Vue.js","JavaScript","CSS"]},{id:2,title:"Project Two",image:W,description:"This is a description for project two.",technologies:["React","JavaScript","HTML"]},{id:3,title:"Project Three",image:W,description:"This is a description for project three.",technologies:["Angular","TypeScript","SCSS"]},{id:4,title:"Project Four",image:W,description:"This is a description for project four.",technologies:["Node.js","Express","MongoDB"]},{id:5,title:"Project Five",image:W,description:"This is a description for project five.",technologies:["Python","Django","PostgreSQL"]},{id:6,title:"Project Six",image:W,description:"This is a description for project six.",technologies:["Ruby on Rails","Ruby","SQLite"]}]}}};const $=(0,j.A)(H,[["render",x],["__scopeId","data-v-3ec0e34d"]]);var z=$;const G=e=>((0,r.Qi)("data-v-5452c28f"),e=e(),(0,r.jt)(),e),Y={class:"main-container"},Z={class:"content-container"},ee=G((()=>(0,r.Lk)("div",{class:"contact-title"},[(0,r.Lk)("h1",null,"Kontakta mig")],-1))),te=G((()=>(0,r.Lk)("div",{class:"contact-email"},[(0,r.eW)(" Email: Lukasbygmal@gmail.com "),(0,r.Lk)("br"),(0,r.eW)(" eller formuläret nedan (fungerar ej just nu) ")],-1)));function oe(e,t,o,n,a,i){const s=(0,r.g2)("ContactForm");return(0,r.uX)(),(0,r.CE)("div",Y,[(0,r.Lk)("div",Z,[ee,te,(0,r.bF)(s)])])}const ne=e=>((0,r.Qi)("data-v-ded3c310"),e=e(),(0,r.jt)(),e),re={class:"form-container"},ae={class:"form-group"},ie=ne((()=>(0,r.Lk)("label",{for:"name"},null,-1))),se={class:"form-group"},ce=ne((()=>(0,r.Lk)("label",{for:"email"},null,-1))),le={class:"form-group"},ue=ne((()=>(0,r.Lk)("label",{for:"message"},null,-1))),de=ne((()=>(0,r.Lk)("button",{type:"submit"},"Skicka",-1))),me={key:0,class:"success-message"},pe={key:1,class:"error-message"};function ge(e,t,o,i,s,c){return(0,r.uX)(),(0,r.CE)("div",re,[(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,n.D$)(((...e)=>c.submitForm&&c.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",ae,[ie,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>s.form.name=e),placeholder:"Namn",required:""},null,512),[[n.Jo,s.form.name]])]),(0,r.Lk)("div",se,[ce,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>s.form.email=e),placeholder:"Email",required:""},null,512),[[n.Jo,s.form.email]])]),(0,r.Lk)("div",le,[ue,(0,r.bo)((0,r.Lk)("textarea",{id:"message","onUpdate:modelValue":t[2]||(t[2]=e=>s.form.message=e),placeholder:"Meddelande",required:""},null,512),[[n.Jo,s.form.message]])]),de],32),s.successMessage?((0,r.uX)(),(0,r.CE)("div",me,(0,a.v_)(s.successMessage),1)):(0,r.Q3)("",!0),s.errorMessage?((0,r.uX)(),(0,r.CE)("div",pe,(0,a.v_)(s.errorMessage),1)):(0,r.Q3)("",!0)])}var fe={data(){return{form:{name:"",email:"",message:""},successMessage:"",errorMessage:""}},methods:{async submitForm(){try{const e=await fetch("http://localhost:3000/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.form)}),t=await e.json();e.ok?(this.successMessage=t.message,this.errorMessage="",this.form.name="",this.form.email="",this.form.message=""):(this.errorMessage=t.error,this.successMessage="")}catch(e){this.errorMessage="An error occurred while sending the email.",this.successMessage=""}}}};const he=(0,j.A)(fe,[["render",ge],["__scopeId","data-v-ded3c310"]]);var ve=he,ke={name:"ContactLayout",components:{ContactForm:ve}};const be=(0,j.A)(ke,[["render",oe],["__scopeId","data-v-5452c28f"]]);var Le=be,ye={name:"App",components:{MainLayout:A,ProjectLayout:z,ContactLayout:Le},data(){return{isMenuOpen:!1}},methods:{handleButtonClick(e){this.scrollTo(e),this.closeMenu()},scrollTo(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1}}};const je=(0,j.A)(ye,[["render",g]]);var Ce=je;(0,n.Ef)(Ce).mount("#app")},954:function(e,t,o){e.exports=o.p+"img/port.fa6c454e.jpeg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p=""}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(120)}));n=o.O(n)})();
//# sourceMappingURL=app.8f786a8b.js.map