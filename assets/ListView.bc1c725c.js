import{d as m,P as f}from"./PrimaryButton.5150bbe5.js";import{d as r,_ as l,o,c as i,a as e,t as n,b as h,l as b,u as k,e as v,F as $,r as g,s as w,f as C,g as y}from"./main.eab2c642.js";const B=r({name:"PureCard",props:{book:{type:Object,default:{}}},data(){return{defaultImage:m}}}),L={class:"card w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-110 transition-all"},V={class:"h-64"},D=["src"],P={class:"card-body"},I={class:"card-title"},j={class:"text-xs"},F={class:"font-bold self-start whitespace-pre-line line-clamp-3"};function S(s,c,t,d,_,u){return o(),i("div",L,[e("figure",V,[e("img",{class:"h-full object-cover",src:s.book.image||s.defaultImage,alt:"\u5716\u7247"},null,8,D)]),e("div",P,[e("h2",I,n(s.book.title),1),e("span",j,n(s.book.author),1),e("span",F,n(s.book.description),1)])])}const x=l(B,[["render",S]]);const A=r({name:"ListView",setup(){h(()=>b());const{toViewPage:s}=k();return{bookList:v,viewDetail:t=>{w(t),s(t.id)}}},components:{Card:x,PrimaryButton:f}}),E={class:"list"},M={class:"book-list"};function N(s,c,t,d,_,u){const p=y("Card");return o(),i("div",E,[e("div",M,[(o(!0),i($,null,g(s.bookList,a=>(o(),C(p,{key:a.id,book:a,onClick:O=>s.viewDetail(a)},null,8,["book","onClick"]))),128))])])}const z=l(A,[["render",N],["__scopeId","data-v-193c1cb9"]]);export{z as default};