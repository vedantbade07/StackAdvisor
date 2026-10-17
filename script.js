// ---------- DATA (separate from UI; swap for an API later) ----------
const T=[];const t=(id,name,cat,diff,oss,free,desc,inst,docs,alts,use)=>T.push({id,name,cat,diff,oss,free,desc,inst,docs,alts:alts.split(','),use:use.split(',')});
t('react','React','Frontend','Intermediate',1,1,'Component library for interactive UIs.','npm create vite@latest frontend -- --template react-ts','https://react.dev','Vue,Angular,Svelte','SPAs,dashboards,SaaS');
t('vue','Vue','Frontend','Beginner',1,1,'Approachable progressive UI framework.','npm create vue@latest','https://vuejs.org','React,Svelte','SPAs,prototypes');
t('angular','Angular','Frontend','Advanced',1,1,'Batteries-included framework by Google.','npm i -g @angular/cli && ng new app','https://angular.dev','React,Vue','Enterprise apps');
t('svelte','Svelte','Frontend','Beginner',1,1,'Compiler-based UI framework with little boilerplate.','npm create svelte@latest app','https://svelte.dev','React,Vue','Fast sites,widgets');
t('nextjs','Next.js','Frontend','Intermediate',1,1,'React framework with SSR and routing.','npx create-next-app@latest','https://nextjs.org/docs','React,Nuxt','Portfolios,e-commerce,SaaS');
t('node','Node.js','Backend','Beginner',1,1,'JavaScript runtime for servers.','winget install OpenJS.NodeJS.LTS  # or brew install node','https://nodejs.org/docs','Deno,Bun','APIs,real-time');
t('express','Express','Backend','Beginner',1,1,'Minimal Node.js web framework.','npm i express','https://expressjs.com','Fastify,NestJS','REST APIs');
t('django','Django','Backend','Intermediate',1,1,'Full-featured Python web framework.','pip install django','https://docs.djangoproject.com','Flask,FastAPI','E-commerce,CMS');
t('fastapi','FastAPI','Backend','Intermediate',1,1,'Fast typed Python API framework.','pip install "fastapi[standard]"','https://fastapi.tiangolo.com','Flask,Django','ML APIs,REST');
t('spring','Spring Boot','Backend','Advanced',1,1,'Enterprise Java application framework.','# generate a project at https://start.spring.io','https://spring.io/projects/spring-boot','Quarkus,Micronaut','Enterprise,microservices');
t('python','Python','Language','Beginner',1,1,'General-purpose language, strong in AI and data.','winget install Python.Python.3.12  # or brew install python','https://docs.python.org','JavaScript,Go','AI/ML,automation,data');
t('js','JavaScript','Language','Beginner',1,1,'The language of the web.','# runs in any browser; use Node.js for servers','https://developer.mozilla.org/docs/Web/JavaScript','TypeScript','Web,servers');
t('ts','TypeScript','Language','Intermediate',1,1,'JavaScript with static types.','npm i -D typescript','https://www.typescriptlang.org/docs','JavaScript','Large web apps');
t('java','Java','Language','Intermediate',1,1,'Mature JVM language for enterprise systems.','winget install EclipseAdoptium.Temurin.21.JDK','https://dev.java','Kotlin,C#','Enterprise,Android');
t('cpp','C++','Language','Advanced',1,1,'High-performance systems language.','# install GCC/Clang/MSVC','https://isocpp.org','Rust,C','Games,embedded');
t('go','Go','Language','Intermediate',1,1,'Simple compiled language for services.','winget install GoLang.Go','https://go.dev/doc','Rust,Java','Cloud services,CLIs');
t('rust','Rust','Language','Advanced',1,1,'Memory-safe systems language.','# install via https://rustup.rs','https://doc.rust-lang.org','C++,Go','Systems,security tools');
t('postgres','PostgreSQL','Database','Intermediate',1,1,'Reliable relational database.','docker run -e POSTGRES_PASSWORD=dev -p 5432:5432 postgres','https://www.postgresql.org/docs','MySQL','SaaS,e-commerce,analytics');
t('mysql','MySQL','Database','Beginner',1,1,'Popular relational database.','docker run -e MYSQL_ROOT_PASSWORD=dev -p 3306:3306 mysql','https://dev.mysql.com/doc','PostgreSQL','CMS,web apps');
t('mongo','MongoDB','Database','Beginner',1,1,'Document database with flexible schemas.','docker run -p 27017:27017 mongo','https://www.mongodb.com/docs','PostgreSQL','Prototypes,content');
t('redis','Redis','Database','Intermediate',1,1,'In-memory store for caching and queues.','docker run -p 6379:6379 redis','https://redis.io/docs','Memcached','Caching,real-time');
t('firebase','Firebase','Database','Beginner',0,1,'Managed backend with auth and realtime DB.','npm i -g firebase-tools','https://firebase.google.com/docs','Supabase','Mobile,real-time');
t('aws','AWS','Cloud','Advanced',0,1,'Broadest cloud platform.','# install AWS CLI v2 from aws.amazon.com/cli','https://docs.aws.amazon.com','Azure,GCP','Scalable backends');
t('azure','Azure','Cloud','Advanced',0,1,'Microsoft cloud with strong enterprise tooling.','winget install Microsoft.AzureCLI','https://learn.microsoft.com/azure','AWS,GCP','Enterprise,.NET');
t('gcp','Google Cloud','Cloud','Advanced',0,1,'Cloud with strong data and ML services.','# install gcloud CLI','https://cloud.google.com/docs','AWS,Azure','ML,data');
t('vercel','Vercel','Cloud','Beginner',0,1,'Frontend hosting with git-based deploys.','npm i -g vercel && vercel','https://vercel.com/docs','Netlify','Next.js,static sites');
t('render','Render','Cloud','Beginner',0,1,'Simple hosting for web services and databases.','# connect your GitHub repo at render.com','https://render.com/docs','Railway,Heroku','APIs,small apps');
t('docker','Docker','DevOps','Intermediate',1,1,'Containers for reproducible environments.','winget install Docker.DockerDesktop','https://docs.docker.com','Podman','Dev environments,deploys');
t('k8s','Kubernetes','DevOps','Advanced',1,1,'Container orchestration at scale.','winget install Kubernetes.kubectl','https://kubernetes.io/docs','Nomad,ECS','Large deployments');
t('gha','GitHub Actions','DevOps','Intermediate',0,1,'CI/CD built into GitHub.','# add .github/workflows/ci.yml','https://docs.github.com/actions','GitLab CI','CI/CD');
t('git','Git','Tools','Beginner',1,1,'Distributed version control.','winget install Git.Git  # or brew install git','https://git-scm.com/doc','Mercurial','Everything');
t('github','GitHub','Tools','Beginner',0,1,'Code hosting and collaboration.','# sign up at github.com','https://docs.github.com','GitLab','Collaboration');
t('vscode','VS Code','Tools','Beginner',1,1,'Extensible code editor.','winget install Microsoft.VisualStudioCode','https://code.visualstudio.com/docs','JetBrains IDEs','Editing');
t('postman','Postman','Tools','Beginner',0,1,'API testing client.','winget install Postman.Postman','https://learning.postman.com','Insomnia','API testing');
t('figma','Figma','Tools','Beginner',0,1,'Collaborative UI design.','# web app: figma.com','https://help.figma.com','Penpot','UI design');
t('pytorch','PyTorch','AI/ML','Advanced',1,1,'Deep-learning framework.','pip install torch','https://pytorch.org/docs','TensorFlow','Deep learning');
t('tf','TensorFlow','AI/ML','Advanced',1,1,'End-to-end ML platform.','pip install tensorflow','https://www.tensorflow.org/learn','PyTorch','Production ML');
t('sklearn','scikit-learn','AI/ML','Beginner',1,1,'Classical machine learning in Python.','pip install scikit-learn','https://scikit-learn.org','XGBoost','Tabular ML');
t('hf','Hugging Face','AI/ML','Intermediate',1,1,'Pretrained models and transformers library.','pip install transformers','https://huggingface.co/docs','OpenAI API','NLP,LLMs');
t('pandas','pandas','Data Science','Beginner',1,1,'Dataframes for analysis.','pip install pandas numpy jupyter','https://pandas.pydata.org/docs','Polars','Data analysis');
t('tailwind','Tailwind CSS','Frontend','Beginner',1,1,'Utility-first CSS framework.','npm i -D tailwindcss','https://tailwindcss.com/docs','Bootstrap','Styling');
t('clerk','Clerk / Auth.js','Authentication','Beginner',0,1,'Drop-in authentication.','npm i @clerk/clerk-react','https://clerk.com/docs','Auth0,Firebase Auth','Login,sessions');
const byId=id=>T.find(x=>x.id===id);
const PROJECTS=[['portfolio','Portfolio Website','🌐','Showcase your work'],['ecom','E-commerce Website','🛒','Store with payments'],['saas','SaaS Application','☁️','Multi-user web product'],['mobile','Mobile Application','📱','iOS / Android'],['ai','AI/ML Project','🤖','Models & AI features'],['data','Data Science Project','📊','Analysis & notebooks'],['api','REST API','🔌','Backend service'],['realtime','Real-Time Application','⚡','Chat, live data'],['iot','IoT Application','📡','Devices & sensors'],['cloud','Cloud Application','🌩️','Cloud-native app'],['desktop','Desktop Application','🖥️','Native / Electron'],['security','Cybersecurity Project','🛡️','Tools & analysis'],['auto','Automation Tool','⚙️','Scripts & bots'],['college','College/Academic Project','🎓','Coursework'],['other','Other','✨','Something else']];
const EXP=[['Beginner','Learning programming, building first projects'],['Intermediate','Comfortable, built multiple projects'],['Advanced','Comfortable with architecture and deployment'],['Professional','Production apps, scale and team workflows']];
const LANGS=['Python','JavaScript','TypeScript','Java','C++','C#','Go','Rust','PHP','HTML/CSS'];
const REQS=['Fast development','Performance','Scalability','Low cost','Easy deployment','Security','Real-time functionality','AI/ML integration','Large ecosystem','Beginner friendly','Enterprise readiness','Open source','Cross-platform support'];
const OSES=['Windows','macOS','Linux'],BUDGETS=['Free only','Mostly free','Student budget','Flexible budget','Enterprise'],DEPLOY=['Local only','Cloud','Hybrid'],CLOUDS=['AWS','Azure','Google Cloud','Vercel','Netlify','Render','Railway','No preference'];
const CATS=['Frontend','Backend','Database','Language','Cloud','DevOps','Tools','AI/ML','Data Science','Authentication'];
const DIFF={Beginner:1,Intermediate:2,Advanced:3};
// ---------- RECOMMENDATION ENGINE ----------
const clamp=n=>Math.max(40,Math.min(98,Math.round(n)));
function recommend(S){
 const has=l=>S.known.includes(l),rq=r=>S.req.includes(r),P=S.proj,is=k=>P.includes(k);
 const ai=is('ai')||rq('AI/ML integration'),ds=is('data'),beg=S.exp==='Beginner';
 const why={},slots={};const pick=(slot,id,...r)=>{slots[slot]=id;why[id]=(why[id]||[]).concat(r)};
 const lang=has('Python')||ai||ds?(has('Python')||ai||ds?'python':'ts'):has('Java')?'java':has('TypeScript')||has('JavaScript')?'ts':'ts';
 pick('Language',lang,lang==='python'?(has('Python')?'You already know Python':'Best ecosystem for AI and data work'):lang==='java'?'You already know Java':has('TypeScript')||has('JavaScript')?'Builds on your JavaScript/TypeScript skills':'One language across frontend and backend');
 if(!is('data')||is('ai')){
  if(is('portfolio')||is('college')&&beg){pick('Frontend',beg?'react':'nextjs','Suits content-driven sites',beg?'Huge number of tutorials for beginners':'SSR and static export built in')}
  else pick('Frontend','react','Component model fits interactive apps','Large ecosystem'+(has('JavaScript')?' and you know JavaScript':''));
  if(!is('portfolio')){
   const be=lang==='python'?(is('ecom')||beg?'django':'fastapi'):lang==='java'?'spring':'express';
   pick('Backend',be,be==='fastapi'?'Typed, fast to build and ideal next to ML code':be==='django'?'Includes auth, admin and ORM out of the box':be==='spring'?'Enterprise-grade and matches your Java skills':'Simple API development in the JS/TS ecosystem');
   pick('Database',is('realtime')&&S.budget!=='Enterprise'?'firebase':'postgres',is('realtime')?'Realtime sync with little setup':'Reliable relational DB with strong production support');
   if(is('saas')||is('ecom'))pick('Authentication','clerk','Avoids writing authentication yourself');
  }
 }
 if(ai)pick('AI/ML',rq('Performance')||S.exp==='Professional'?'pytorch':'sklearn','Matches Python and AI/ML goals');
 if(ai&&!beg)pick('AI/ML2','hf','Pretrained models speed up development');
 if(ds){pick('Data Science','pandas','Standard for analysis in Python');pick('AI/ML','sklearn','Approachable classical ML');pick('Database','postgres','Store results and query with SQL')}
 if(!is('portfolio')&&!beg&&S.deploy!=='Local only')pick('DevOps','docker','Reproducible environments and simple deploys');
 const cp={AWS:'aws',Azure:'azure','Google Cloud':'gcp',Vercel:'vercel',Render:'render'}[S.cloud];
 if(S.deploy!=='Local only'){const free=['Free only','Mostly free','Student budget'].includes(S.budget);
  pick('Cloud',cp||(is('portfolio')?'vercel':S.budget==='Enterprise'?'aws':free?'render':'aws'),cp?'Your cloud preference':free?'Generous free tier suits your budget':'Scalable infrastructure');}
 pick('Tools','git','Standard version control');pick('Tools2','vscode','Free, works on '+(S.os||'any OS'));
 if(is('portfolio')||S.req.includes('Low cost'))pick('Tools3','github','Free hosting and collaboration');
 const ids=Object.values(slots),ts=ids.map(byId);
 const known=ts.filter(x=>x.cat==='Language'&&((x.id==='python'&&has('Python'))||(x.id==='ts'&&(has('TypeScript')||has('JavaScript')))||(x.id==='java'&&has('Java')))).length;
 const avg=ts.reduce((a,x)=>a+DIFF[x.diff],0)/ts.length,lvl={Beginner:1.4,Intermediate:1.9,Advanced:2.3,Professional:2.6}[S.exp]||2;
 const paid=ts.filter(x=>!x.free).length;
 const sc={'Project fit':clamp(84+(P.length?6:0)+(ai&&lang==='python'?6:0)),'Skill fit':clamp(68+known*18+(S.known.length>1?5:0)-Math.max(0,avg-lvl)*15),
  'Budget fit':clamp(96-paid*3-(S.budget==='Free only'&&paid?8:0)),'Scalability':clamp(72+(rq('Scalability')?8:0)+(slots.Cloud==='aws'||slots.DevOps?10:0)-(slots.Database==='firebase'?6:0)),
  'Learning curve':clamp(96-Math.max(0,avg-lvl)*30-(beg?avg*5:0))};
 const overall=Math.round(Object.values(sc).reduce((a,b)=>a+b,0)/5);
 const notes=[];if(slots.Database==='firebase')notes.push('Firebase is a managed NoSQL service; if you later need relational queries, consider adding PostgreSQL.');
 if(slots.Cloud==='vercel'&&slots.Backend&&slots.Backend!=='express')notes.push('Vercel is best for frontend; host your '+byId(slots.Backend).name+' API on Render or AWS.');
 if(S.os==='Windows'&&slots.DevOps)notes.push('Docker Desktop on Windows needs WSL2 enabled.');
 if(beg&&avg>2)notes.push('Some picks are advanced; learn them one at a time.');
 const alts=lang==='python'?[['Next.js + PostgreSQL + Vercel','Your team prefers JavaScript end-to-end','Single codebase, fast deploys','Weaker fit for ML workloads','Intermediate'],['Vue + FastAPI + PostgreSQL','You want a gentler frontend learning curve','Typed API, simple UI framework','Smaller job market than React','Beginner'],['Django + PostgreSQL + AWS','You need auth/admin built in','Batteries included, mature','More opinionated, heavier','Intermediate']]
  :[['Next.js + PostgreSQL + Vercel','You want SSR and easy deploys','Great DX, one framework','Serverless limits for long jobs','Intermediate'],['Vue + FastAPI + PostgreSQL','You also work in Python','Clean separation of concerns','Two languages to maintain','Beginner'],['Angular + Spring Boot + Azure','Enterprise team conventions','Strong structure and tooling','Steep learning curve','Advanced']];
 const steps=[];const L=(s,c)=>steps.push([s,c]);
 L('Install prerequisites',['# '+(S.os||'Windows')+': '+byId('git').inst,byId('vscode').inst,slots.Language==='python'?byId('python').inst:byId('node').inst].join('\n'));
 if(slots.Frontend)L('Create frontend',byId(slots.Frontend).inst+'\ncd frontend && npm install && npm run dev');
 if(slots.Backend)L('Create backend',({express:'mkdir backend && cd backend\nnpm init -y && npm i express cors dotenv',fastapi:'mkdir backend && cd backend\npython -m venv .venv\npip install "fastapi[standard]" sqlalchemy psycopg[binary]\nfastapi dev main.py',django:'pip install django\ndjango-admin startproject backend\npython backend/manage.py runserver',spring:'# generate at start.spring.io (Web, JPA, PostgreSQL), then:\n./mvnw spring-boot:run'})[slots.Backend]);
 if(slots.Database)L('Configure database',byId(slots.Database).inst+'\n\n# .env\nDATABASE_URL=postgresql://postgres:dev@localhost:5432/app');
 L('Connect frontend & backend','# .env (frontend)\nVITE_API_URL=http://localhost:8000\n# enable CORS on the backend for http://localhost:5173');
 if(S.deploy!=='Local only')L('Deploy',slots.Cloud?byId(slots.Cloud).inst:'# choose a host');
 return{slots,why,sc,overall,notes,alts,steps,ids};
}
// ---------- STATE ----------
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
let S={proj:['ai'],exp:'Intermediate',known:['Python','JavaScript'],req:['AI/ML integration','Fast development','Scalability','Low cost'],os:'Windows',budget:'Student budget',deploy:'Cloud',cloud:'No preference'}; // demo data
let step=0,view='home',R=null,loading=false,mine=load('sa_mine',['react','node','postgres','aws','docker','vscode','github']),saved=load('sa_saved',[]),cmp=[],F={q:'',cat:'',diff:'',oss:false,free:false},msgs=[];
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const NAV=[['home','Home'],['advisor','Advisor'],['explore','Explore Tools'],['mystack','My Stack'],['guide','Setup Guide']];
function toast(m){const d=document.createElement('div');d.className='toast';d.setAttribute('role','status');d.textContent=m;document.body.append(d);setTimeout(()=>d.remove(),1600)}
async function copy(txt,b){try{await navigator.clipboard.writeText(txt)}catch(e){const a=document.createElement('textarea');a.value=txt;document.body.append(a);a.select();try{document.execCommand('copy')}catch(_){}a.remove()}
 if(b){const o=b.textContent;b.textContent='Copied!';setTimeout(()=>b.textContent=o,1200)}else toast('Copied!')}
const hl=c=>esc(c).split('\n').map(l=>l.trim().startsWith('#')?`<span class="cm">${l}</span>`:l.replace(/^(npm|pip|npx|docker|winget|cd|mkdir|python|fastapi|django-admin)\b/,'<span class="k">$1</span>')).join('\n');
const code=c=>`<div class="cb"><pre><code>${hl(c)}</code></pre><button class="btn g sm" data-copy="${esc(c)}" aria-label="Copy command">Copy</button></div>`;
const chip=(on,a,v,l)=>`<button class="chip ${on?'on':''}" aria-pressed="${on}" data-act="${a}" data-v="${esc(v)}">${esc(l||v)}</button>`;
// ---------- VIEWS ----------
function home(){const d=R||recommend(S);const row=['Frontend','Backend','Database','Cloud','DevOps'].filter(k=>d.slots[k]);
return `<section class="hero fade"><div><h1>Build the Right Tech Stack for Your Next Project.</h1><p class="mu">Tell us what you’re building, your experience level, and your goals. StackAdvisor recommends the languages, frameworks, databases, tools, and deployment platforms that fit your project.</p>
<div class="row"><button class="btn" data-go="advisor">Build My Stack</button><button class="btn g" data-go="explore">Explore Technologies</button></div></div>
<div class="viz" aria-label="Sample stack visualization">${row.map((k,i)=>`${i?'<div class="l"></div>':''}<div class="n"><small class="mu">${k}</small><br><b>${byId(d.slots[k]).name}</b></div>`).join('')}</div></section>
<div class="stats"><div class="card"><b>${T.length}+</b>Technologies (prototype)</div><div class="card"><b>15</b>Project types</div><div class="card"><b>100+</b>Stack combinations</div><div class="card"><b>Beginner → Pro</b>Skill levels</div></div>
<h2>How StackAdvisor Works</h2><div class="grid">${[['📝','Describe Your Project','Enter your project type, requirements, and goals.'],['🎛️','Set Your Preferences','Choose skill level, budget, OS, and ecosystem.'],['🧩','Get Your Recommended Stack','Receive a personalized technology stack.'],['🚀','Follow the Setup Guide','Get installation commands and configuration steps.']].map((s,i)=>`<div class="card h"><div style="font-size:26px">${s[0]}</div><small class="mu">Step ${i+1}</small><h3>${s[1]}</h3><span class="mu">${s[2]}</span></div>`).join('')}</div>
<h2 style="margin-top:28px">Dashboard</h2><div class="card"><b>Welcome back!</b> <span class="mu">Your current stack:</span><div>${mine.slice(0,6).map(i=>`<span class="badge">${byId(i).cat}: ${byId(i).name}</span>`).join('')}</div>
<div class="row" style="margin-top:10px"><button class="btn sm" data-go="advisor">Build New Stack</button><button class="btn g sm" data-go="explore">Explore Tools</button><button class="btn g sm" data-go="explore" data-act="cmpfocus">Compare Technologies</button><button class="btn g sm" data-go="guide">Generate Setup Guide</button></div>
<p class="mu" style="margin:10px 0 0">Recent stacks: ${saved.length?saved.slice(-3).map(s=>esc(s.name)).join(', '):'none yet'}</p></div>`}
function wizard(){
const titles=['What are you building?','What is your experience level?','What matters most for your project?','Where will you develop and deploy?'];
if(loading)return`<div class="empty" role="status"><div class="spin"></div><p>Generating your stack…</p></div>`;
if(step===4)return results();
let b='';
if(step===0)b=`<div class="grid">${PROJECTS.map(p=>`<button class="card h sel ${S.proj.includes(p[0])?'on':''}" aria-pressed="${S.proj.includes(p[0])}" data-act="proj" data-v="${p[0]}"><span style="font-size:22px">${p[2]}</span> <b>${p[1]}</b><br><small class="mu">${p[3]}</small></button>`).join('')}</div><p class="mu">Select one or more.</p>`;
if(step===1)b=`<div class="grid">${EXP.map(e=>`<button class="card h sel ${S.exp===e[0]?'on':''}" aria-pressed="${S.exp===e[0]}" data-act="exp" data-v="${e[0]}"><b>${e[0]}</b><br><small class="mu">${e[1]}</small></button>`).join('')}</div><h3 style="margin-top:18px">Which technologies do you already know?</h3>${LANGS.map(l=>chip(S.known.includes(l),'known',l)).join('')}`;
if(step===2)b=`<p class="mu">Pick up to 5.</p>${REQS.map(r=>chip(S.req.includes(r),'req',r)).join('')}`;
if(step===3){const sel=(l,k,o)=>`<label class="mu" for="${k}">${l}</label><br><select id="${k}" data-sel="${k}"><option value="">Select…</option>${o.map(x=>`<option ${S[k]===x?'selected':''}>${x}</option>`).join('')}</select>`;
 b=`<div class="grid">${sel('Operating system','os',OSES)}${sel('Budget','budget',BUDGETS)}${sel('Deployment','deploy',DEPLOY)}${sel('Cloud preference','cloud',CLOUDS)}</div>`}
const ok=[S.proj.length,S.exp,S.req.length,S.os&&S.budget&&S.deploy][step];
return`<h1>Build Your Personalized Tech Stack</h1><div class="steps" role="progressbar" aria-valuenow="${step+1}" aria-valuemin="1" aria-valuemax="5">${[0,1,2,3,4].map(i=>`<i class="${i<=step?'d':''}"></i>`).join('')}</div>
<p class="mu">Step ${step+1} of 5 · ${['Project','Experience','Requirements','Environment'][step]}</p><h2>${titles[step]}</h2><div class="fade">${b}</div>
${ok?'':'<p class="warn" role="alert">Please complete this step to continue.</p>'}
<div class="row sp" style="margin-top:18px"><button class="btn g" data-act="back" ${step?'':'disabled'}>Back</button><button class="btn" data-act="next" ${ok?'':'disabled'}>${step===3?'Generate Recommendations':'Continue'}</button></div>`}
function results(){R=recommend(S);const d=R;const names=k=>k.replace(/\d$/,'');
const projNames=S.proj.map(p=>PROJECTS.find(x=>x[0]===p)[1]).join(', ');
return`<div class="row sp"><div><small class="mu">PROJECT</small><h1>${esc(projNames)}</h1></div><div class="row"><button class="btn g sm" data-act="edit">Edit answers</button><button class="btn sm" data-act="adopt">Add to My Stack</button><button class="btn g sm" data-act="savestack">Save Stack</button></div></div>
<div class="card fade"><b>Stack Compatibility</b> <span class="badge">Estimated compatibility</span><div class="bar" style="margin:10px 0"><i style="width:${d.overall}%"></i></div><b>${d.overall}%</b> overall
${Object.entries(d.sc).map(([k,v])=>`<div class="row sp" style="margin-top:8px"><span>${k}</span><span>${v}%</span></div><div class="bar"><i style="width:${v}%"></i></div>`).join('')}
<p class="mu"><small>Heuristic estimates from your answers and the rules below, not scientifically validated.</small></p></div>
${d.notes.map(n=>`<div class="warn">⚠ ${esc(n)}</div>`).join('')}
<h2 style="margin-top:20px">Your Recommended Tech Stack</h2><div class="grid">${d.ids.map(id=>{const x=byId(id);return`<div class="card h fade"><small class="mu">${x.cat}</small><h3>${x.name}</h3><span class="badge">${x.diff}</span><span class="badge">${x.oss?'Open source':'Commercial'}</span>
<p class="mu" style="margin:6px 0"><b>Why:</b> ${esc((d.why[id]||[]).join('; '))}.</p><p class="mu"><small>Alternatives: ${x.alts.join(', ')}</small></p><div class="row"><button class="btn g sm" data-detail="${id}">Details</button><a href="${x.docs}" target="_blank" rel="noopener">Docs</a></div></div>`}).join('')}</div>
<h2 style="margin-top:20px">Alternative Stacks</h2><div class="grid">${d.alts.map((a,i)=>`<div class="card"><small class="mu">Alternative ${i+1}</small><h3>${a[0]}</h3><p><b>Choose when:</b> ${a[1]}</p><p class="mu"><b>Pros:</b> ${a[2]}<br><b>Trade-offs:</b> ${a[3]}<br><b>Difficulty:</b> ${a[4]}</p></div>`).join('')}</div>
<div class="row" style="margin:16px 0"><button class="btn" data-go="guide">Generate Setup Guide</button></div>${assistant()}`}
function assistant(){return`<div class="card"><h3>Ask StackAdvisor</h3><div class="row">${['What stack should I use for an AI-powered web app?','I know Python but not JavaScript. What should I learn?','What database should I use for my project?','How do I deploy my application?'].map(q=>`<button class="chip" data-ask="${esc(q)}">${esc(q)}</button>`).join('')}</div>
<div aria-live="polite">${msgs.map(m=>`<p><b>${m[0]}:</b> ${m[1]}</p>`).join('')}</div><div class="row"><input type="text" id="askin" placeholder="Ask about your stack…" aria-label="Ask StackAdvisor" style="flex:1"><button class="btn sm" data-act="ask">Ask</button></div></div>`}
function answer(q){const d=recommend(S),s=d.slots,l=q.toLowerCase(),n=id=>id&&byId(id).name;
 if(/deploy/.test(l))return`For your setup, deploy on ${n(s.Cloud)||'a static host'}${s.DevOps?' using Docker containers':''}, and automate with GitHub Actions. See the Setup Guide for commands.`;
 if(/database|db/.test(l))return`${n(s.Database)||'PostgreSQL'} fits your answers. ${s.Database==='firebase'?'It gives realtime sync quickly.':'It is reliable and widely supported.'} Alternatives: MongoDB for flexible schemas, Redis for caching.`;
 if(/python|learn/.test(l))return`Keep Python for the backend (${n(s.Backend)||'FastAPI'}). For the UI, learn JavaScript basics and then React. You can ship an API first and add a frontend later.`;
 if(/ai|web app|stack/.test(l))return`Based on your answers: ${d.ids.map(n).join(' + ')}. Estimated compatibility is ${d.overall}%.`;
 return`Try asking about databases, deployment, or what to learn. With your profile I'd start from ${d.ids.slice(0,4).map(n).join(', ')}.`}
function explore(){const l=T.filter(x=>(!F.q||(x.name+x.desc+x.use.join()).toLowerCase().includes(F.q.toLowerCase()))&&(!F.cat||x.cat===F.cat)&&(!F.diff||x.diff===F.diff)&&(!F.oss||x.oss)&&(!F.free||x.free));
return`<h1>Explore Tools</h1><div class="row"><input type="search" id="q" value="${esc(F.q)}" placeholder="Search technologies…" aria-label="Search technologies" style="flex:1;min-width:180px">
<select data-f="cat" aria-label="Category"><option value="">All categories</option>${CATS.map(c=>`<option ${F.cat===c?'selected':''}>${c}</option>`).join('')}</select>
<select data-f="diff" aria-label="Difficulty"><option value="">Any difficulty</option>${Object.keys(DIFF).map(c=>`<option ${F.diff===c?'selected':''}>${c}</option>`).join('')}</select>
<label><input type="checkbox" data-f="oss" ${F.oss?'checked':''}> Open source</label><label><input type="checkbox" data-f="free" ${F.free?'checked':''}> Free tier</label></div>
${cmp.length>1?compare():cmp.length?'<p class="mu">Pick one more tool to compare.</p>':''}
<p class="mu">${l.length} result${l.length==1?'':'s'}</p>
${l.length?`<div class="grid">${l.map(x=>`<div class="card h"><small class="mu">${x.cat}</small><h3>${x.name}</h3><p class="mu" style="margin:0 0 6px">${x.desc}</p><span class="badge">${x.diff}</span><span class="badge">${x.oss?'Open source':'Commercial'}</span><span class="badge">Free tier</span>
<div class="row" style="margin-top:8px"><button class="btn g sm" data-detail="${x.id}">Details</button><button class="btn sm" data-add="${x.id}">${mine.includes(x.id)?'✓ Added':'+ My Stack'}</button><label><input type="checkbox" data-cmp="${x.id}" ${cmp.includes(x.id)?'checked':''}> Compare</label></div></div>`).join('')}</div>`:`<div class="empty"><h3>No technologies match your filters.</h3>Try removing one or more filters.</div>`}`}
function compare(){const c=cmp.map(byId);const rows=[['Category',x=>x.cat],['Learning curve',x=>x.diff],['License',x=>x.oss?'Open source':'Commercial'],['Free tier',x=>x.free?'Yes':'No'],['Typical use cases',x=>x.use.join(', ')],['Alternatives',x=>x.alts.join(', ')],['Documentation',x=>`<a href="${x.docs}" target="_blank" rel="noopener">Docs</a>`]];
return`<div class="card tbl" style="--c:${c.length+1};margin:12px 0" id="cmp"><div class="r"><b>Compare</b>${c.map(x=>`<b>${x.name}</b>`).join('')}</div>${rows.map(r=>`<div class="r"><span class="mu">${r[0]}</span>${c.map(x=>`<span>${r[1](x)}</span>`).join('')}</div>`).join('')}<small class="mu">Neutral comparison of facts; no overall winner.</small></div>`}
function detail(id){const x=byId(id);const w=[...x.alts.slice(0,0),...T.filter(y=>y.id!==id&&(y.cat!==x.cat)&&['react','ts','tailwind','node','postgres'].includes(y.id)).map(y=>y.name)].slice(0,4);
return`<div class="modal" data-close role="dialog" aria-modal="true" aria-label="${x.name}"><div class="card"><div class="row sp"><h2>${x.name}</h2><button class="btn g sm" data-close aria-label="Close">✕</button></div><span class="badge">${x.cat}</span><span class="badge">${x.diff}</span><span class="badge">${x.oss?'Open source':'Commercial'}</span>
<p>${x.desc}</p><p class="mu"><b>Use cases:</b> ${x.use.join(', ')}<br><b>Alternatives:</b> ${x.alts.join(', ')}<br><b>Works well with:</b> ${w.join(', ')}</p><b>Install / setup</b>${code(x.inst)}
<div class="row"><button class="btn" data-add="${x.id}" data-close>${mine.includes(x.id)?'✓ In My Stack':'Add to My Stack'}</button><button class="btn g" data-cmp2="${x.id}">Compare</button><a href="${x.docs}" target="_blank" rel="noopener">View Documentation</a></div></div></div>`}
function mdOf(ids){const g={};ids.map(byId).forEach(x=>(g[x.cat]=g[x.cat]||[]).push(x.name));return'# My Tech Stack\n\n'+Object.entries(g).map(([k,v])=>`## ${k}\n${v.join('\n')}`).join('\n\n')}
function mystack(){const g={};mine.forEach(i=>(g[byId(i).cat]=g[byId(i).cat]||[]).push(i));
const w=[];if(mine.includes('firebase')&&mine.includes('postgres'))w.push('You selected Firebase and PostgreSQL. Consider whether both databases are necessary.');if(mine.includes('vercel')&&mine.includes('django'))w.push('Django may require a different deployment configuration than Vercel.');if(mine.includes('mysql')&&mine.includes('postgres'))w.push('Two relational databases selected; you may only need one.');
return`<h1>My Development Stack</h1>${w.map(m=>`<div class="warn">⚠ Compatibility Notice: ${m}</div>`).join('')}
${mine.length?`<div class="grid">${Object.entries(g).map(([c,ids])=>`<div class="card"><small class="mu">${c}</small>${ids.map(i=>`<div class="row sp"><b>${byId(i).name}</b><span><button class="btn g sm" data-rep="${i}" aria-label="Replace ${byId(i).name}">Replace</button> <button class="btn g sm" data-rm="${i}" aria-label="Remove ${byId(i).name}">✕</button></span></div>`).join('')}</div>`).join('')}</div>`:`<div class="empty"><h3>Your stack is empty</h3>Add tools from Explore or the Advisor.</div>`}
<div class="row" style="margin:14px 0"><select id="addsel" aria-label="Add technology"><option value="">Add technology…</option>${T.filter(x=>!mine.includes(x.id)).map(x=>`<option value="${x.id}">${x.name} (${x.cat})</option>`).join('')}</select>
<button class="btn sm" data-act="addsel">Add</button><button class="btn g sm" data-act="exp-md">Markdown</button><button class="btn g sm" data-act="exp-json">JSON</button><button class="btn g sm" data-act="exp-copy">Copy</button><button class="btn g sm" data-act="exp-pdf">PDF (print)</button><button class="btn g sm" data-go="guide">Setup guide</button></div>
<div class="card"><h3>Saved Stacks</h3><div class="row"><input type="text" id="sname" placeholder="Name this stack" aria-label="Stack name"><button class="btn sm" data-act="savemine">Save current</button></div>
${saved.length?saved.map((s,i)=>`<div class="row sp" style="margin-top:8px"><span><b>${esc(s.name)}</b> <small class="mu">${s.ids.map(x=>byId(x).name).join(', ')}</small></span><span><button class="btn g sm" data-sv="load" data-i="${i}">Load</button> <button class="btn g sm" data-sv="ren" data-i="${i}">Rename</button> <button class="btn g sm" data-sv="dup" data-i="${i}">Duplicate</button> <button class="btn g sm" data-sv="del" data-i="${i}">Delete</button></span></div>`).join(''):'<div class="empty">No saved stacks yet.</div>'}</div>`}
function guide(){const d=R||recommend(S);const src=mine.length?{label:'My Stack'}:null;
return`<h1>Your ${d.ids.slice(0,4).map(i=>byId(i).name).join(' + ')} Setup Guide</h1><p class="mu">Based on your latest recommendation. Commands assume ${S.os||'Windows'}.</p>
${d.steps.map((s,i)=>`<div class="card fade" style="margin:10px 0"><small class="mu">SECTION ${i+1}</small><h3>${s[0]}</h3>${code(s[1])}</div>`).join('')}
<div class="row"><button class="btn" data-copy="${esc(d.steps.map(s=>'# '+s[0]+'\n'+s[1]).join('\n\n'))}">Copy all commands</button></div>`}
// ---------- RENDER / EVENTS ----------
function render(){$('#links').innerHTML=NAV.map(n=>`<button class="${view===n[0]?'on':''}" data-go="${n[0]}">${n[1]}</button>`).join('');
 $('#app').innerHTML={home,advisor:wizard,explore,mystack,guide}[view]();}
function exportBox(title,txt){$('#ov').innerHTML=`<div class="modal" data-close role="dialog" aria-modal="true"><div class="card"><div class="row sp"><h3>${title}</h3><button class="btn g sm" data-close>✕</button></div><textarea readonly aria-label="Export">${esc(txt)}</textarea><button class="btn" data-copy="${esc(txt)}">Copy to clipboard</button></div></div>`}
function toggle(a,v,max){const i=a.indexOf(v);i>-1?a.splice(i,1):(!max||a.length<max)&&a.push(v)}
document.addEventListener('click',e=>{const el=e.target.closest('[data-go],[data-act],[data-copy],[data-detail],[data-add],[data-rm],[data-rep],[data-ask],[data-close],[data-sv],[data-cmp2]');if(!el)return;
 if(el.dataset.close!==undefined){if(el.classList.contains('modal')&&e.target!==el)return;if(!el.dataset.add)return $('#ov').innerHTML='';}
 const D=el.dataset;
 if(D.copy!==undefined)return copy(D.copy,el);
 if(D.go){view=D.go;$('#links').classList.remove('open');if(view==='advisor'&&step===4&&!R)step=0;render();scrollTo(0,0);if(D.act==='cmpfocus'){}return}
 if(D.detail){$('#ov').innerHTML=detail(D.detail);return}
 if(D.cmp2){if(!cmp.includes(D.cmp2))cmp.push(D.cmp2);cmp=cmp.slice(-3);$('#ov').innerHTML='';view='explore';render();return}
 if(D.add){if(!mine.includes(D.add)){mine.push(D.add);save('sa_mine',mine);toast('Added to My Stack')}$('#ov').innerHTML='';render();return}
 if(D.rm){mine=mine.filter(x=>x!==D.rm);save('sa_mine',mine);render();return}
 if(D.rep){const x=byId(D.rep);const o=T.filter(y=>y.cat===x.cat&&y.id!==x.id&&!mine.includes(y.id));if(!o.length)return toast('No alternatives in this category');const pick=o.find(y=>x.alts.includes(y.name))||o[0];mine[mine.indexOf(D.rep)]=pick.id;save('sa_mine',mine);toast(x.name+' → '+pick.name);render();return}
 if(D.ask){msgs.push(['You',esc(D.ask)],['StackAdvisor',answer(D.ask)]);render();return}
 if(D.sv){const i=+D.i,s=saved[i];if(D.sv==='load'){mine=[...s.ids];save('sa_mine',mine);toast('Loaded')}if(D.sv==='del')saved.splice(i,1);if(D.sv==='dup')saved.splice(i+1,0,{name:s.name+' (copy)',ids:[...s.ids]});if(D.sv==='ren'){const n=prompt('New name',s.name);if(n)s.name=n}save('sa_saved',saved);render();return}
 const a=D.act;
 if(a==='theme'){const r=document.documentElement;const dark=getComputedStyle(r).getPropertyValue('--bg').trim()==='#0a0d1a';r.dataset.theme=dark?'light':'dark'}
 if(a==='menu')$('#links').classList.toggle('open');
 if(a==='proj'){toggle(S.proj,D.v);render()}if(a==='exp'){S.exp=D.v;render()}if(a==='known'){toggle(S.known,D.v);render()}
 if(a==='req'){toggle(S.req,D.v,5);render()}
 if(a==='back'){step--;render()}if(a==='edit'){step=0;render()}
 if(a==='next'){if(step<3){step++;render()}else{loading=true;render();setTimeout(()=>{loading=false;step=4;render()},800)}}
 if(a==='adopt'){R.ids.forEach(i=>mine.includes(i)||mine.push(i));save('sa_mine',mine);toast('Added to My Stack')}
 if(a==='savestack'){saved.push({name:'Recommended stack '+(saved.length+1),ids:[...R.ids]});save('sa_saved',saved);toast('Saved — see My Stack')}
 if(a==='ask'){const v=$('#askin').value.trim();if(v){msgs.push(['You',esc(v)],['StackAdvisor',answer(v)]);render()}}
 if(a==='addsel'){const v=$('#addsel').value;if(v){mine.push(v);save('sa_mine',mine);render()}}
 if(a==='savemine'){const n=$('#sname').value.trim()||'My Stack '+(saved.length+1);saved.push({name:n,ids:[...mine]});save('sa_saved',saved);render()}
 if(a==='exp-md')exportBox('Markdown',mdOf(mine));if(a==='exp-json')exportBox('JSON',JSON.stringify(mine.map(i=>({id:i,name:byId(i).name,category:byId(i).cat})),null,2));
 if(a==='exp-copy')copy(mdOf(mine));if(a==='exp-pdf')exportBox('PDF: copy, then print or “Save as PDF” from your editor',mdOf(mine));
});
document.addEventListener('change',e=>{const t=e.target;if(t.dataset.sel){S[t.dataset.sel]=t.value;render()}
 if(t.dataset.f){F[t.dataset.f]=t.type==='checkbox'?t.checked:t.value;render()}
 if(t.dataset.cmp){t.checked?cmp.length<3&&cmp.push(t.dataset.cmp):(cmp=cmp.filter(x=>x!==t.dataset.cmp));render()}});
document.addEventListener('input',e=>{if(e.target.id==='q'){F.q=e.target.value;const p=e.target.selectionStart;render();const q=$('#q');q.focus();q.setSelectionRange(p,p)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#ov').innerHTML='';if(e.key==='Enter'&&e.target.id==='askin')document.querySelector('[data-act=ask]').click()});
R=recommend(S);render();
