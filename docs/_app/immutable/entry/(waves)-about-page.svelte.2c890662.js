import{S as R,i as O,s as P,y as q,z as w,A as V,g as j,d as S,B as N,k as m,l as h,m as v,h as u,n as c,b as y,H as Q,a as x,q as M,c as D,r as T,T as X,G as o,M as U}from"../chunks/index.a7d29886.js";import{C as z}from"../chunks/ContentSection.503871f6.js";import{B as K}from"../chunks/Button.17e3ceae.js";function H(r,e,a){const t=r.slice();return t[1]=e[a],t}function G(r){let e,a,t,s,i,n,l,f=r[1].name+"",d,I,_,E=r[1].position+"",k,C;return{c(){e=m("div"),a=m("div"),t=m("img"),i=x(),n=m("div"),l=m("h3"),d=M(f),I=x(),_=m("p"),k=M(E),C=x(),this.h()},l(p){e=h(p,"DIV",{class:!0});var g=v(e);a=h(g,"DIV",{class:!0});var $=v(a);t=h($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(u),i=D(g),n=h(g,"DIV",{class:!0});var b=v(n);l=h(b,"H3",{class:!0});var F=v(l);d=T(F,f),F.forEach(u),I=D(b),_=h(b,"P",{class:!0});var A=v(_);k=T(A,E),A.forEach(u),b.forEach(u),C=D(g),g.forEach(u),this.h()},h(){X(t.src,s=r[1].image)||c(t,"src",s),c(t,"alt",r[1].name),c(t,"class","svelte-1v34qu9"),c(a,"class","image-container svelte-1v34qu9"),c(l,"class","svelte-1v34qu9"),c(_,"class","svelte-1v34qu9"),c(n,"class","info"),c(e,"class","card svelte-1v34qu9")},m(p,g){y(p,e,g),o(e,a),o(a,t),o(e,i),o(e,n),o(n,l),o(l,d),o(n,I),o(n,_),o(_,k),o(e,C)},p:U,d(p){p&&u(e)}}}function W(r){let e,a=r[0],t=[];for(let s=0;s<a.length;s+=1)t[s]=G(H(r,a,s));return{c(){e=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=h(s,"DIV",{class:!0});var i=v(e);for(let n=0;n<t.length;n+=1)t[n].l(i);i.forEach(u),this.h()},h(){c(e,"class","grid svelte-1v34qu9")},m(s,i){y(s,e,i);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(s,i){if(i&1){a=s[0];let n;for(n=0;n<a.length;n+=1){const l=H(s,a,n);t[n]?t[n].p(l,i):(t[n]=G(l),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},d(s){s&&u(e),Q(t,s)}}}function Y(r){let e;return{c(){e=M("Contáctanos")},l(a){e=T(a,"Contáctanos")},m(a,t){y(a,e,t)},d(a){a&&u(e)}}}function Z(r){let e,a,t;return a=new K({props:{href:"/contactUs",$$slots:{default:[Y]},$$scope:{ctx:r}}}),{c(){e=m("div"),q(a.$$.fragment),this.h()},l(s){e=h(s,"DIV",{slot:!0});var i=v(e);w(a.$$.fragment,i),i.forEach(u),this.h()},h(){c(e,"slot","button")},m(s,i){y(s,e,i),V(a,e,null),t=!0},p(s,i){const n={};i&16&&(n.$$scope={dirty:i,ctx:s}),a.$set(n)},i(s){t||(j(a.$$.fragment,s),t=!0)},o(s){S(a.$$.fragment,s),t=!1},d(s){s&&u(e),N(a)}}}function ee(r){let e,a;return e=new z({props:{id:"team-section",title:"Nuestro Equipo",description:"Conoce a los profesionales detrás de nuestro éxito.",align:"left",$$slots:{button:[Z],default:[W]},$$scope:{ctx:r}}}),{c(){q(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){V(e,t,s),a=!0},p(t,[s]){const i={};s&16&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){a||(j(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function te(r){return[[{name:"Melvin Cevallos",position:"UI/UX Designer - Frontend Developer",image:"/images/team/melvin.png"},{name:"Luis Gaona",position:"Project Manager",image:"/images/team/luis.png"},{name:"John Pérez",position:"Quality Assurance",image:"/images/team/john.png"},{name:"Roberth Loaiza",position:"Backend Developer",image:"/images/team/roberth.png"},{name:"Ricardo Valle",position:"Backend Developer",image:"/images/team/ricardo.png"}]]}class se extends R{constructor(e){super(),O(this,e,te,ee,P,{})}}function L(r,e,a){const t=r.slice();return t[1]=e[a],t}function ae(r){let e,a=r[1].cta+"",t;return{c(){e=m("a"),t=M(a),this.h()},l(s){e=h(s,"A",{href:!0,class:!0});var i=v(e);t=T(i,a),i.forEach(u),this.h()},h(){c(e,"href",r[1].link),c(e,"class","cta-button svelte-1lobj8w")},m(s,i){y(s,e,i),o(e,t)},p:U,d(s){s&&u(e)}}}function J(r){let e,a,t,s=r[1].title+"",i,n,l,f=r[1].description+"",d,I,_,E,k,C,p=r[1].cta&&ae(r);return{c(){e=m("div"),a=m("div"),t=m("h2"),i=M(s),n=x(),l=m("p"),d=x(),p&&p.c(),I=x(),_=m("div"),E=m("img"),C=x(),this.h()},l(g){e=h(g,"DIV",{class:!0,id:!0});var $=v(e);a=h($,"DIV",{class:!0});var b=v(a);t=h(b,"H2",{class:!0});var F=v(t);i=T(F,s),F.forEach(u),n=D(b),l=h(b,"P",{class:!0});var A=v(l);A.forEach(u),d=D(b),p&&p.l(b),b.forEach(u),I=D($),_=h($,"DIV",{class:!0});var B=v(_);E=h(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(u),C=D($),$.forEach(u),this.h()},h(){c(t,"class","svelte-1lobj8w"),c(l,"class","svelte-1lobj8w"),c(a,"class","section-content svelte-1lobj8w"),X(E.src,k=r[1].image)||c(E,"src",k),c(E,"alt",r[1].title),c(E,"class","svelte-1lobj8w"),c(_,"class","section-image"),c(e,"class","section svelte-1lobj8w"),c(e,"id",r[1].id)},m(g,$){y(g,e,$),o(e,a),o(a,t),o(t,i),o(a,n),o(a,l),l.innerHTML=f,o(a,d),p&&p.m(a,null),o(e,I),o(e,_),o(_,E),o(e,C)},p(g,$){g[1].cta&&p.p(g,$)},d(g){g&&u(e),p&&p.d()}}}function ne(r){let e,a=r[0],t=[];for(let s=0;s<a.length;s+=1)t[s]=J(L(r,a,s));return{c(){e=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=h(s,"DIV",{class:!0});var i=v(e);for(let n=0;n<t.length;n+=1)t[n].l(i);i.forEach(u),this.h()},h(){c(e,"class","sections-container svelte-1lobj8w")},m(s,i){y(s,e,i);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(s,i){if(i&1){a=s[0];let n;for(n=0;n<a.length;n+=1){const l=L(s,a,n);t[n]?t[n].p(l,i):(t[n]=J(l),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},d(s){s&&u(e),Q(t,s)}}}function ie(r){let e,a;return e=new z({props:{title:"Sobre Nosotros",description:"Explora nuestra misión, visión y valores.",$$slots:{default:[ne]},$$scope:{ctx:r}}}),{c(){q(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){V(e,t,s),a=!0},p(t,[s]){const i={};s&16&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){a||(j(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function re(r){return[[{id:"mision",title:"NUESTRA MISIÓN",description:`
                Nuestra misión es liderar la transformación hacia un mundo más sostenible, impulsando la 
                transición hacia una economía baja en carbono y mejorando la calidad de vida de las personas.
                Nos enfocamos en proporcionar soluciones innovadoras y eficientes de energía renovable, 
                eficiencia energética y transformación digital a nuestros clientes.`,image:"/images/features/solar1.jpg",cta:"CONTÁCTANOS",link:"/contactUs"},{id:"vision",title:"NUESTRA VISIÓN",description:`
                En Master Energy, nuestra visión es un mundo en el que la energía sostenible y limpia es 
                accesible para todos. Creemos que la tecnología puede ser una fuerza para el bien y estamos 
                dedicados a desarrollar soluciones tecnológicas innovadoras que aborden los desafíos más 
                urgentes de nuestro tiempo.`,image:"/images/features/solar2.jpg",cta:"CONTÁCTANOS",link:"/contactUs"},{id:"valores",title:"NUESTROS VALORES",description:`
                1. Sostenibilidad: Protegemos el medio ambiente y reducimos la huella de carbono.<br>
                2. Innovación: Ofrecemos soluciones energéticas de vanguardia.<br>
                3. Orientación al cliente: Soluciones personalizadas y eficientes.<br>
                4. Trabajo en equipo: Colaboración y aprovechamiento máximo de habilidades.<br>
                5. Integridad: Honestidad, transparencia y ética en nuestras decisiones.<br>
                6. Excelencia: Calidad en proyectos y servicios.<br>
                7. Respeto: Valoramos la diversidad y la cultura.`,image:"/images/features/solar3.jpg"}]]}class le extends R{constructor(e){super(),O(this,e,re,ie,P,{})}}function oe(r){let e,a;return e=new se({props:{posts:r[1]}}),{c(){q(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){V(e,t,s),a=!0},p:U,i(t){a||(j(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function ce(r){let e,a,t,s,i,n;a=new z({props:{title:"About"}}),s=new le({props:{features:r[0]}});let l=r[1]&&r[1].length>0&&oe(r);return{c(){e=m("div"),q(a.$$.fragment),t=x(),q(s.$$.fragment),i=x(),l&&l.c(),this.h()},l(f){e=h(f,"DIV",{class:!0});var d=v(e);w(a.$$.fragment,d),t=D(d),w(s.$$.fragment,d),i=D(d),l&&l.l(d),d.forEach(u),this.h()},h(){c(e,"class","container")},m(f,d){y(f,e,d),V(a,e,null),o(e,t),V(s,e,null),o(e,i),l&&l.m(e,null),n=!0},p(f,[d]){f[1]&&f[1].length>0&&l.p(f,d)},i(f){n||(j(a.$$.fragment,f),j(s.$$.fragment,f),j(l),n=!0)},o(f){S(a.$$.fragment,f),S(s.$$.fragment,f),S(l),n=!1},d(f){f&&u(e),N(a),N(s),l&&l.d()}}}function ue(r,e,a){let{data:t}=e,{features:s,posts:i}=t;return r.$$set=n=>{"data"in n&&a(2,t=n.data)},[s,i,t]}class he extends R{constructor(e){super(),O(this,e,ue,ce,P,{data:2})}}export{he as default};
