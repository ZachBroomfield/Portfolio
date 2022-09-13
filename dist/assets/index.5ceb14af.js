(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();function Z(){}function fe(t){return t()}function V(){return Object.create(null)}function F(t){t.forEach(fe)}function pe(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ge(t){return Object.keys(t).length===0}function _(t,e){t.appendChild(e)}function x(t,e,i){t.insertBefore(e,i||null)}function w(t){t.parentNode.removeChild(t)}function j(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function v(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function L(){return E(" ")}function ue(){return E("")}function m(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function be(t){return Array.from(t.childNodes)}function z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let W;function P(t){W=t}const C=[],X=[],N=[],Y=[],_e=Promise.resolve();let H=!1;function ke(){H||(H=!0,_e.then(de))}function J(t){N.push(t)}const q=new Set;let O=0;function de(){const t=W;do{for(;O<C.length;){const e=C[O];O++,P(e),ve(e.$$)}for(P(null),C.length=0,O=0;X.length;)X.pop()();for(let e=0;e<N.length;e+=1){const i=N[e];q.has(i)||(q.add(i),i())}N.length=0}while(C.length);for(;Y.length;)Y.pop()();H=!1,q.clear(),P(t)}function ve(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const I=new Set;let B;function he(){B={r:0,c:[],p:B}}function me(){B.r||F(B.c),B=B.p}function T(t,e){t&&t.i&&(I.delete(t),t.i(e))}function S(t,e,i,l){if(t&&t.o){if(I.has(t))return;I.add(t),B.c.push(()=>{I.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}function K(t){t&&t.c()}function U(t,e,i,l){const{fragment:n,on_mount:r,on_destroy:a,after_update:u}=t.$$;n&&n.m(e,i),l||J(()=>{const d=r.map(fe).filter(pe);a?a.push(...d):F(d),t.$$.on_mount=[]}),u.forEach(J)}function G(t,e){const i=t.$$;i.fragment!==null&&(F(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function we(t,e){t.$$.dirty[0]===-1&&(C.push(t),ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,i,l,n,r,a,u=[-1]){const d=W;P(t);const h=t.$$={fragment:null,ctx:null,props:r,update:Z,not_equal:n,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:V(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};a&&a(h.root);let k=!1;if(h.ctx=i?i(t,e.props||{},(s,$,...o)=>{const f=o.length?o[0]:$;return h.ctx&&n(h.ctx[s],h.ctx[s]=f)&&(!h.skip_bound&&h.bound[s]&&h.bound[s](f),k&&we(t,s)),$}):[],h.update(),k=!0,F(h.before_update),h.fragment=l?l(h.ctx):!1,e.target){if(e.hydrate){const s=be(e.target);h.fragment&&h.fragment.l(s),s.forEach(w)}else h.fragment&&h.fragment.c();e.intro&&T(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),de()}P(d)}class D{$destroy(){G(this,1),this.$destroy=Z}$on(e,i){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const n=l.indexOf(i);n!==-1&&l.splice(n,1)}}$set(e){this.$$set&&!ge(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ee(t,e,i){const l=t.slice();return l[1]=e[i],l}function te(t){let e,i=t[1]+"",l;return{c(){e=v("p"),l=E(i),m(e,"class","text-left ml-4")},m(n,r){x(n,e,r),_(e,l)},p(n,r){r&1&&i!==(i=n[1]+"")&&z(l,i)},d(n){n&&w(e)}}}function xe(t){let e,i,l;return{c(){e=v("a"),i=E("Example"),m(e,"href",l=t[0].exampleLink),m(e,"target","_blank"),m(e,"class","btn btn-outline btn-md"),m(e,"disabled","")},m(n,r){x(n,e,r),_(e,i)},p(n,r){r&1&&l!==(l=n[0].exampleLink)&&m(e,"href",l)},d(n){n&&w(e)}}}function ye(t){let e,i,l;return{c(){e=v("a"),i=E("Example"),m(e,"href",l=t[0].exampleLink),m(e,"target","_blank"),m(e,"class","btn btn-outline btn-md")},m(n,r){x(n,e,r),_(e,i)},p(n,r){r&1&&l!==(l=n[0].exampleLink)&&m(e,"href",l)},d(n){n&&w(e)}}}function $e(t){let e,i,l,n=t[0].title+"",r,a,u,d,h,k,s,$,o=t[0].description,f=[];for(let g=0;g<o.length;g+=1)f[g]=te(ee(t,o,g));function c(g,A){return g[0].exampleLink!==void 0?ye:xe}let b=c(t),p=b(t);return{c(){e=v("div"),i=v("div"),l=v("h3"),r=E(n),a=L();for(let g=0;g<f.length;g+=1)f[g].c();u=L(),d=v("div"),h=v("a"),k=E("Code"),$=L(),p.c(),m(l,"class","text-xl text-left ml-4 mb-2"),m(i,"class","col-span-3"),m(h,"href",s=t[0].codeLink),m(h,"target","_blank"),m(h,"class","btn btn-outline btn-md"),m(d,"class","btn-group max-w-fit mx-auto my-4 sm:btn-group-vertical sm:justify-center sm:ml-auto sm:mr-2 sm:my-0"),m(e,"class","sm:grid sm:grid-cols-4 sm:gap-4 my-4")},m(g,A){x(g,e,A),_(e,i),_(i,l),_(l,r),_(i,a);for(let y=0;y<f.length;y+=1)f[y].m(i,null);_(e,u),_(e,d),_(d,h),_(h,k),_(d,$),p.m(d,null)},p(g,[A]){if(A&1&&n!==(n=g[0].title+"")&&z(r,n),A&1){o=g[0].description;let y;for(y=0;y<o.length;y+=1){const Q=ee(g,o,y);f[y]?f[y].p(Q,A):(f[y]=te(Q),f[y].c(),f[y].m(i,null))}for(;y<f.length;y+=1)f[y].d(1);f.length=o.length}A&1&&s!==(s=g[0].codeLink)&&m(h,"href",s),b===(b=c(g))&&p?p.p(g,A):(p.d(1),p=b(g),p&&(p.c(),p.m(d,null)))},i:Z,o:Z,d(g){g&&w(e),j(f,g),p.d()}}}function Le(t,e,i){let{example:l}=e;return t.$$set=n=>{"example"in n&&i(0,l=n.example)},[l]}class Te extends D{constructor(e){super(),M(this,e,Le,$e,R,{example:0})}}function ie(t,e,i){const l=t.slice();return l[1]=e[i],l[3]=i,l}function ne(t,e,i){const l=t.slice();return l[4]=e[i],l}function le(t){let e,i,l=t[0].subheading,n=[];for(let r=0;r<l.length;r+=1)n[r]=re(ne(t,l,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=L(),i=v("div"),m(i,"class","divider")},m(r,a){for(let u=0;u<n.length;u+=1)n[u].m(r,a);x(r,e,a),x(r,i,a)},p(r,a){if(a&1){l=r[0].subheading;let u;for(u=0;u<l.length;u+=1){const d=ne(r,l,u);n[u]?n[u].p(d,a):(n[u]=re(d),n[u].c(),n[u].m(e.parentNode,e))}for(;u<n.length;u+=1)n[u].d(1);n.length=l.length}},d(r){j(n,r),r&&w(e),r&&w(i)}}}function re(t){let e,i=t[4]+"";return{c(){e=v("h3"),m(e,"class","text-left text-2xl m-4")},m(l,n){x(l,e,n),e.innerHTML=i},p(l,n){n&1&&i!==(i=l[4]+"")&&(e.innerHTML=i)},d(l){l&&w(e)}}}function oe(t){let e;return{c(){e=v("div"),m(e,"class","divider")},m(i,l){x(i,e,l)},d(i){i&&w(e)}}}function ae(t){let e,i,l,n;e=new Te({props:{example:t[1]}});let r=t[3]!==t[0].examples.length-1&&oe();return{c(){K(e.$$.fragment),i=L(),r&&r.c(),l=ue()},m(a,u){U(e,a,u),x(a,i,u),r&&r.m(a,u),x(a,l,u),n=!0},p(a,u){const d={};u&1&&(d.example=a[1]),e.$set(d),a[3]!==a[0].examples.length-1?r||(r=oe(),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null)},i(a){n||(T(e.$$.fragment,a),n=!0)},o(a){S(e.$$.fragment,a),n=!1},d(a){G(e,a),a&&w(i),r&&r.d(a),a&&w(l)}}}function Ee(t){let e,i,l,n,r=t[0].name+"",a,u,d,h,k,s=t[0].subheading!==void 0&&le(t),$=t[0].examples,o=[];for(let c=0;c<$.length;c+=1)o[c]=ae(ie(t,$,c));const f=c=>S(o[c],1,1,()=>{o[c]=null});return{c(){e=v("div"),i=v("input"),l=L(),n=v("h2"),a=E(r),u=L(),d=v("div"),s&&s.c(),h=L();for(let c=0;c<o.length;c+=1)o[c].c();m(i,"type","checkbox"),m(n,"class","collapse-title text-2xl text-left"),m(d,"class","collapse-content"),m(e,"class","collapse collapse-arrow border border-base-300 bg-base-300 rounded-box max-w-4xl mx-auto my-2")},m(c,b){x(c,e,b),_(e,i),_(e,l),_(e,n),_(n,a),_(e,u),_(e,d),s&&s.m(d,null),_(d,h);for(let p=0;p<o.length;p+=1)o[p].m(d,null);k=!0},p(c,[b]){if((!k||b&1)&&r!==(r=c[0].name+"")&&z(a,r),c[0].subheading!==void 0?s?s.p(c,b):(s=le(c),s.c(),s.m(d,h)):s&&(s.d(1),s=null),b&1){$=c[0].examples;let p;for(p=0;p<$.length;p+=1){const g=ie(c,$,p);o[p]?(o[p].p(g,b),T(o[p],1)):(o[p]=ae(g),o[p].c(),T(o[p],1),o[p].m(d,null))}for(he(),p=$.length;p<o.length;p+=1)f(p);me()}},i(c){if(!k){for(let b=0;b<$.length;b+=1)T(o[b]);k=!0}},o(c){o=o.filter(Boolean);for(let b=0;b<o.length;b+=1)S(o[b]);k=!1},d(c){c&&w(e),s&&s.d(),j(o,c)}}}function Ae(t,e,i){let{skill:l}=e;return t.$$set=n=>{"skill"in n&&i(0,l=n.skill)},[l]}class Be extends D{constructor(e){super(),M(this,e,Ae,Ee,R,{skill:0})}}function se(t,e,i){const l=t.slice();return l[3]=e[i],l}function ce(t){let e,i;return e=new Be({props:{skill:t[3]}}),{c(){K(e.$$.fragment)},m(l,n){U(e,l,n),i=!0},p(l,n){const r={};n&4&&(r.skill=l[3]),e.$set(r)},i(l){i||(T(e.$$.fragment,l),i=!0)},o(l){S(e.$$.fragment,l),i=!1},d(l){G(e,l)}}}function Se(t){let e,i,l,n,r,a,u,d,h,k=t[2],s=[];for(let o=0;o<k.length;o+=1)s[o]=ce(se(t,k,o));const $=o=>S(s[o],1,1,()=>{s[o]=null});return{c(){e=v("h1"),i=E(t[0]),l=L(),n=v("h3"),r=v("a"),a=E(t[1]),u=L();for(let o=0;o<s.length;o+=1)s[o].c();d=ue(),m(e,"class","text-4xl text-primary-content m-6"),m(r,"href",t[1]),m(r,"target","_blank"),m(n,"class","text-2xl m-6 underline")},m(o,f){x(o,e,f),_(e,i),x(o,l,f),x(o,n,f),_(n,r),_(r,a),x(o,u,f);for(let c=0;c<s.length;c+=1)s[c].m(o,f);x(o,d,f),h=!0},p(o,[f]){if((!h||f&1)&&z(i,o[0]),(!h||f&2)&&z(a,o[1]),(!h||f&2)&&m(r,"href",o[1]),f&4){k=o[2];let c;for(c=0;c<k.length;c+=1){const b=se(o,k,c);s[c]?(s[c].p(b,f),T(s[c],1)):(s[c]=ce(b),s[c].c(),T(s[c],1),s[c].m(d.parentNode,d))}for(he(),c=k.length;c<s.length;c+=1)$(c);me()}},i(o){if(!h){for(let f=0;f<k.length;f+=1)T(s[f]);h=!0}},o(o){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)S(s[f]);h=!1},d(o){o&&w(e),o&&w(l),o&&w(n),o&&w(u),j(s,o),o&&w(d)}}}function Ce(t,e,i){let{name:l}=e,{link:n}=e,{skills:r}=e;return t.$$set=a=>{"name"in a&&i(0,l=a.name),"link"in a&&i(1,n=a.link),"skills"in a&&i(2,r=a.skills)},[l,n,r]}class Pe extends D{constructor(e){super(),M(this,e,Ce,Se,R,{name:0,link:1,skills:2})}}const Ze="Zachary Broomfield",ze="https://github.com/ZachBroomfield",Fe=[{name:"TypeScript",examples:[{title:"2D breadth-first path finding",description:["Editable 2D grid with the ability to place a start, end and barriers to create a maze.","Barrier positions can be randomised, with validations to ensure resulting maze is traversable.","Pathing to diagonally adjacent points can be enabled or disabled.","When running, generates a path one point at a time, then displays shortest path once found."],codeLink:"https://github.com/ZachBroomfield/Path-Finding",exampleLink:"https://zachbroomfield.github.io/Path-Finding"}]},{name:"JavaScript",examples:[{title:"Grid based simple cellular automata.",description:["Creates a grid with an initial placement of randomised 'life' forms and food.","The life forms use a simple neural network combined with short range sensors to detect their local environment.","The life forms require energy from the food they can collect to survive and reproduce.","The offspring they produce receives a slightly mutated version of their own neural network."],codeLink:"https://github.com/ZachBroomfield/Grid-Evolution",exampleLink:"https://zachbroomfield.github.io/Grid-Evolution"},{title:"Orbiting particles with simple collision handling.",description:["A small set of particles orbiting a central particle.","Each particle exerts a gravitation effect upon each other particle.","A simple, mostly elastic collision handling system mediates collisions.","Particles resting upon other particles in not properly handled."],codeLink:"https://github.com/ZachBroomfield/Colliding-Orbits",exampleLink:"https://zachbroomfield.github.io/Colliding-Orbits"},{title:"CLI simulation of a robot moving in a grid.",description:["Using a command line, give commands to a robot.","The robot can rotate, move and give a report of it's current position and direction faced."],codeLink:"https://github.com/ZachBroomfield/Robot-Grid"}]},{name:"JavaScript with p5 library",subheading:["The following simulations were created during <a href='https://www.kadenze.com/courses/the-nature-of-code-ii/info' target='_blank' class='underline'>The Nature of Code</a> course.","<a href='https://www.kadenze.com/certificates/verified/78URGAU2' target='_blank' class='underline'>Achieved</a> top 5% marks."],examples:[{title:"Evolving orbits",description:["A set of particles with random initial conditions orbit a large, stationary particle.","The smaller particles are removed if they touch the centre particle, or leave the canvas.","When particles are removed, new particles are created from inherited genes selected using a fitness function.","The fitness function biases towards older 'parents' with circular orbits.","The population eventually tends towards circular orbits."],codeLink:"https://github.com/ZachBroomfield/Evolving-Orbits",exampleLink:"https://zachbroomfield.github.io/Evolving-Orbits"},{title:"Fractal creator",description:["Creates and draws various fractal shapes using points placed upon the canvas.","Fractals can be modified with provided parameters.","Also provides several preset fractals to draw."],codeLink:"https://github.com/ZachBroomfield/Fractal-Creator",exampleLink:"https://zachbroomfield.github.io/Fractal-Creator"},{title:"Steering forces",description:["The application of multiple simultaneous steering forces to produce flocking behaviours.","A 2D Perlin noise flow field that applies a set force in the indicated direction upon every particle.","The flocking behaviour is determined by alignment, cohesion and separation forces between particles.","Each force can be modified in real time to witness the effect upon the particles."],codeLink:"https://github.com/ZachBroomfield/Steering-Forces",exampleLink:"https://zachbroomfield.github.io/Steering-Forces"},{title:"Attract and repel",description:["Initially particles repel each other and are attracted to the mouse when clicked.","Pressing space toggles this attraction and repulsion.","Up and down increase and decrease number of particles respectively."],codeLink:"https://github.com/ZachBroomfield/Attract-Repel",exampleLink:"https://zachbroomfield.github.io/Attract-Repel"},{title:"Following target",description:["A particle that accelerates towards the target.","The target uses Perlin noise to dictate its position."],codeLink:"https://github.com/ZachBroomfield/Follow-Target",exampleLink:"https://zachbroomfield.github.io/Follow-Target"}]},{name:"Svelte with Tailwind CSS and daisyUI",examples:[{title:"Portfolio webpage",description:["This webpage, created using Svelte.","Tailwind CSS along with daisyUI are utilised for visual design."],codeLink:"https://github.com/ZachBroomfield/Portfolio"}]},{name:"Ruby on Rails",examples:[{title:"Rails website for logging storage items.",description:["An older Rails application designed for use as a hotel luggage storage system.","Incorporates multiple searching parameters for locating correct records.","Includes several database tables for storing information regarding:","\u2022 Current luggage details","\u2022 Prior luggage details","\u2022 Employees","\u2022 Administration users"],codeLink:"https://github.com/ZachBroomfield/storage_app",exampleLink:"https://safe-savannah-84053.herokuapp.com"}]}];function Oe(t){let e,i,l;return i=new Pe({props:{name:Ze,link:ze,skills:Fe}}),{c(){e=v("div"),K(i.$$.fragment),m(e,"class","text-center m-10")},m(n,r){x(n,e,r),U(i,e,null),l=!0},p:Z,i(n){l||(T(i.$$.fragment,n),l=!0)},o(n){S(i.$$.fragment,n),l=!1},d(n){n&&w(e),G(i)}}}class Ne extends D{constructor(e){super(),M(this,e,null,Oe,R,{})}}new Ne({target:document.getElementById("app")});