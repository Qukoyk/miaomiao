const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EffectComposer-CiHvzZoV.js","assets/CopyShader-BzTUYzf6.js","assets/Pass-BKcpSscj.js","assets/RenderPass-BDO1NnpG.js","assets/UnrealBloomPass-BrQ8-lHx.js","assets/OutputPass-k8USjhY1.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const b={nightDeep:1511723,warmLight:16765066,cream:16774887,paper:16775920,ink:2826560,inkSoft:6048883,pink:16752315,pinkDeep:15695780,mint:9429710,lavender:12101618,plum:7228558,gold:16173151,goldDeep:14264380,leaf:7323546,leafDeep:5151354,coral:16747136,sky:9425919,wood:10120015,woodDark:7227959,stone:10129326,stoneDark:7168896,glass:12577013},Ys=[{name:"莓粉",shirt:16748467,accent:16764124,hair:5913166,accessory:"bow"},{name:"薄荷",shirt:8378564,accent:13498601,hair:4147770,accessory:"beret"},{name:"蓝铃",shirt:9419007,accent:14083327,hair:3817306,accessory:"scarf"},{name:"杏橙",shirt:16757631,accent:16769224,hair:6964784,accessory:"backpack"},{name:"丁香",shirt:12822527,accent:15128831,hair:4864606,accessory:"headband"}],cs={skin:16770273,dress:16748467,dressLight:16762070,hair:4863784},Ea={station:{top:2234942,horizon:9071262,fog:4864875,moon:16773833,ambientSky:14273535,ambientGround:8021646,ambientIntensity:1.08,moonIntensity:2.15,warmIntensity:1.55},park:{top:1906752,horizon:8215208,fog:4536944,moon:16771512,ambientSky:14862591,ambientGround:8284320,ambientIntensity:1.12,moonIntensity:2.2,warmIntensity:1.8},manor:{top:1709622,horizon:7232398,fog:3945824,moon:16181247,ambientSky:13814e3,ambientGround:6971012,ambientIntensity:1.05,moonIntensity:2.05,warmIntensity:1.6}};function yt(s,t){return{x:s,z:t}}const Bl=[];function Jt(s,t,e,i={}){Bl.push({kind:s,x:t,z:e,...i})}Jt("trainCar",-18,-21.5,{variant:"blue",rotY:0});Jt("trainCar",0,-21.5,{variant:"pink",rotY:0});Jt("trainCar",18,-21.5,{variant:"cream",rotY:0});Jt("clockTower",-28,18,{scale:1.05});Jt("ticketBooth",26,12,{variant:"station"});Jt("canopy",0,8,{length:16});Jt("sign",24,20,{variant:"station",rotY:Math.PI});Jt("bench",12,8,{rotY:Math.PI});Jt("bench",-8,8,{rotY:Math.PI});Jt("bench",16,-8,{rotY:0});Jt("bench",-14,-8,{rotY:0});Jt("luggage",8,14,{variant:"rose"});Jt("luggage",-12,10,{variant:"mint"});Jt("luggage",20,-6,{variant:"gold"});Jt("luggage",-20,4,{variant:"blue"});Jt("planter",-4,14,{variant:"pink"});Jt("planter",0,-10,{variant:"mint"});Jt("planter",-24,8,{variant:"gold"});Jt("planter",24,-4,{variant:"pink"});Jt("planter",14,18,{variant:"mint"});Jt("planter",-6,-18,{variant:"gold"});Jt("lamp",-30,22);Jt("lamp",30,22);Jt("lamp",-30,-8);Jt("lamp",30,-12);Jt("lamp",-14,0);Jt("lamp",14,0);Jt("tree",-31,-20,{variant:"green"});Jt("tree",31,20,{variant:"pink"});Jt("tree",-31,22,{variant:"gold"});Jt("tree",31,-22,{variant:"green"});Jt("hedge",-24,23,{length:10,variant:"green"});Jt("hedge",24,23,{length:10,variant:"green"});Jt("hedge",0,-4,{length:8,variant:"pink",rotY:Math.PI/2});Jt("fence",0,24,{length:28,variant:"station"});Jt("fence",-32,0,{length:26,variant:"station",rotY:Math.PI/2});Jt("fence",32,0,{length:26,variant:"station",rotY:Math.PI/2});const ia={id:"station",name:"火车站",subtitle:"童话火车站",difficulty:2,bounds:{minX:-33,maxX:33,minZ:-25,maxZ:25},ground:{base:14207160,accent:16765066,path:13220008,detail:7323546},sky:Ea.station,spawns:{hiders:[yt(4,18),yt(20,-16),yt(-20,16),yt(10,20),yt(28,0)],ghost:yt(-28,0)},jail:{theme:"station",center:yt(-27,-14.5),radius:4,slots:[yt(-29,-14.5),yt(-28,-16),yt(-27,-14.5),yt(-26,-16),yt(-25,-14.5)],releasePoint:yt(-22,-12)},patrol:[yt(-26,0),yt(-14,16),yt(0,20),yt(16,16),yt(26,0),yt(16,-12),yt(0,-14),yt(-16,-12)],hidingSpots:[{x:-18,z:-18.4,cover:"high"},{x:0,z:-18.4,cover:"high"},{x:18,z:-18.4,cover:"high"},{x:-9,z:-19.8,cover:"high"},{x:9,z:-19.8,cover:"high"},{x:22.6,z:12,cover:"high"},{x:26,z:9.2,cover:"high"},{x:8,z:17,cover:"high"},{x:-12,z:13,cover:"high"},{x:20,z:-3,cover:"high"},{x:-20,z:7,cover:"high"},{x:12,z:10.2,cover:"low"},{x:-8,z:10.2,cover:"low"},{x:16,z:-6,cover:"low"},{x:-14,z:-6,cover:"low"},{x:-4,z:16.2,cover:"low"},{x:1.4,z:-8,cover:"low"},{x:-24,z:10.2,cover:"low"},{x:24,z:-2,cover:"low"},{x:14,z:20.2,cover:"low"},{x:-6,z:-16,cover:"low"},{x:-7.2,z:6,cover:"high"},{x:7.2,z:6,cover:"high"},{x:-24.8,z:18,cover:"high"},{x:-28,z:15,cover:"high"},{x:-28,z:-19.2,cover:"low"},{x:28,z:20,cover:"low"},{x:-24,z:20.8,cover:"low"},{x:24,z:20.8,cover:"low"}],props:Bl,fireflies:80,petals:24},Gl=[];function Bt(s,t,e,i={}){Gl.push({kind:s,x:t,z:e,...i})}Bt("carousel",0,0,{scale:1.05});Bt("ferrisWheel",-30,18,{scale:1.2,variant:"park"});Bt("teacup",-12,18,{variant:"pink"});Bt("fountain",20,0,{scale:.95});Bt("sign",0,25,{variant:"park",rotY:Math.PI});Bt("stall",20,12,{variant:"candy",rotY:Math.PI});Bt("balloonCart",-18,12,{variant:"pink"});Bt("stall",22,-12,{variant:"ticket",rotY:Math.PI});Bt("stall",-20,-12,{variant:"prize",rotY:Math.PI});Bt("stall",10,-18,{variant:"popcorn",rotY:Math.PI});Bt("stall",14,18,{variant:"cotton",rotY:Math.PI});Bt("hedge",-10,10,{length:8,variant:"green"});Bt("hedge",10,10,{length:8,variant:"green"});Bt("hedge",-10,-10,{length:8,variant:"green"});Bt("hedge",10,-10,{length:8,variant:"green"});Bt("hedge",-24,0,{length:10,variant:"pink",rotY:Math.PI/2});Bt("hedge",26,4,{length:10,variant:"pink",rotY:Math.PI/2});Bt("hedge",0,20,{length:12,variant:"green"});Bt("hedge",0,-20,{length:12,variant:"green"});Bt("bench",6,10,{rotY:Math.PI});Bt("bench",-6,-10,{rotY:0});Bt("bench",24,4,{rotY:Math.PI/2});Bt("bench",-24,4,{rotY:-Math.PI/2});Bt("picnicTable",28,18,{variant:"pink"});Bt("picnicTable",-28,8,{variant:"mint"});Bt("lamp",-14,14);Bt("lamp",14,14);Bt("lamp",-14,-14);Bt("lamp",14,-14);Bt("lamp",-30,-6);Bt("lamp",30,-6);Bt("lamp",0,24);Bt("tree",32,18,{variant:"pink"});Bt("tree",-32,8,{variant:"green"});Bt("tree",18,-24,{variant:"gold"});Bt("tree",-16,-22,{variant:"pink"});Bt("tree",34,2,{variant:"green"});Bt("tree",-34,-2,{variant:"gold"});Bt("fence",0,28,{length:34,variant:"park"});Bt("fence",0,-28,{length:34,variant:"park"});Bt("fence",-36,0,{length:28,variant:"park",rotY:Math.PI/2});Bt("fence",36,0,{length:28,variant:"park",rotY:Math.PI/2});const na={id:"park",name:"游乐园",subtitle:"月光游乐园",difficulty:3,bounds:{minX:-37,maxX:37,minZ:-29,maxZ:29},ground:{base:8376218,accent:16752315,path:14733488,detail:9429710},sky:Ea.park,spawns:{hiders:[yt(24,8),yt(24,-22),yt(-24,22),yt(8,24),yt(32,0)],ghost:yt(-32,0)},jail:{theme:"park",center:yt(-30,-22),radius:4,slots:[yt(-32,-22),yt(-31,-23.6),yt(-30,-22),yt(-29,-23.6),yt(-28,-22)],releasePoint:yt(-25.8,-22)},patrol:[yt(-28,0),yt(-18,22),yt(0,26),yt(18,22),yt(28,0),yt(18,-20),yt(0,-24),yt(-18,-20)],hidingSpots:[{x:20,z:9,cover:"high"},{x:-18,z:9,cover:"high"},{x:22,z:-9,cover:"high"},{x:-20,z:-9,cover:"high"},{x:10,z:-15,cover:"high"},{x:14,z:15,cover:"high"},{x:-10,z:11.2,cover:"low"},{x:10,z:11.2,cover:"low"},{x:-10,z:-11.2,cover:"low"},{x:10,z:-11.2,cover:"low"},{x:-22.8,z:4.8,cover:"low"},{x:27.2,z:0,cover:"low"},{x:4,z:21.4,cover:"low"},{x:-4,z:-21.4,cover:"low"},{x:9.5,z:0,cover:"high"},{x:-9.5,z:0,cover:"high"},{x:0,z:9.5,cover:"high"},{x:0,z:-9.5,cover:"high"},{x:-24.8,z:18,cover:"high"},{x:-30,z:14,cover:"high"},{x:6,z:12,cover:"low"},{x:-6,z:-12,cover:"low"},{x:27.4,z:4,cover:"low"},{x:-26,z:4,cover:"low"},{x:32,z:19.6,cover:"low"},{x:-32,z:9.6,cover:"low"},{x:18,z:-22.4,cover:"low"},{x:-16,z:-20.4,cover:"low"}],props:Gl,fireflies:110,petals:34},Hl=[];function kt(s,t,e,i={}){Hl.push({kind:s,x:t,z:e,...i})}kt("mansion",0,-28.5,{scale:1.05,variant:"manor"});kt("clockTower",26,-22,{scale:1.15});kt("greenhouse",18,8,{scale:1});kt("fountain",0,0,{scale:1.1});kt("gazebo",-24,16,{scale:1.05});kt("flowerArch",-16,12,{variant:"rose"});kt("flowerArch",16,-12,{variant:"lilac"});kt("sign",0,27,{variant:"manor",rotY:Math.PI});kt("hedge",-10,10,{length:8,variant:"green"});kt("hedge",10,10,{length:8,variant:"green"});kt("hedge",-10,-10,{length:8,variant:"green"});kt("hedge",10,-10,{length:8,variant:"green"});kt("hedge",-20,0,{length:10,variant:"rose",rotY:Math.PI/2});kt("hedge",20,0,{length:10,variant:"rose",rotY:Math.PI/2});kt("hedge",-16,20,{length:8,variant:"green"});kt("hedge",16,-20,{length:8,variant:"green"});kt("bench",24,4,{rotY:Math.PI/2});kt("bench",-24,-4,{rotY:-Math.PI/2});kt("bench",8,24,{rotY:Math.PI});kt("bench",-8,-24,{rotY:0});kt("picnicTable",-18,8,{variant:"lavender"});kt("picnicTable",8,18,{variant:"mint"});kt("lamp",-30,20);kt("lamp",30,20);kt("lamp",-30,-12);kt("lamp",30,-12);kt("lamp",-12,0);kt("lamp",12,0);kt("lamp",0,24);kt("lamp",0,-16);kt("tree",34,22,{variant:"pink"});kt("tree",-34,24,{variant:"green"});kt("tree",34,-14,{variant:"gold"});kt("tree",-34,-14,{variant:"pink"});kt("planter",30,10,{variant:"pink"});kt("planter",-30,8,{variant:"mint"});kt("planter",12,-22,{variant:"gold"});kt("planter",-12,22,{variant:"pink"});kt("rock",30,-24,{variant:"stone"});kt("rock",-36,-28,{variant:"stone"});kt("fence",0,30,{length:38,variant:"manor"});kt("fence",-38,0,{length:30,variant:"manor",rotY:Math.PI/2});kt("fence",38,0,{length:30,variant:"manor",rotY:Math.PI/2});const sa={id:"manor",name:"庄园",subtitle:"绘本庄园",difficulty:4,bounds:{minX:-39,maxX:39,minZ:-31,maxZ:31},ground:{base:9421978,accent:12101618,path:14207200,detail:7323546},sky:Ea.manor,spawns:{hiders:[yt(28,22),yt(30,-27),yt(-28,25),yt(10,28),yt(36,0)],ghost:yt(-36,0)},jail:{theme:"manor",center:yt(-32,-25),radius:4,slots:[yt(-34,-25),yt(-33,-26.6),yt(-32,-25),yt(-31,-26.6),yt(-30,-25)],releasePoint:yt(-27.5,-25)},patrol:[yt(-32,0),yt(-20,22),yt(0,26),yt(20,22),yt(32,0),yt(22,-18),yt(0,-24),yt(-20,-20)],hidingSpots:[{x:18,z:8,cover:"high"},{x:16,z:6,cover:"high"},{x:20,z:10,cover:"high"},{x:18,z:4,cover:"high"},{x:-10,z:11.2,cover:"low"},{x:10,z:11.2,cover:"low"},{x:-10,z:-11.2,cover:"low"},{x:10,z:-11.2,cover:"low"},{x:-21.4,z:4,cover:"low"},{x:21.4,z:4,cover:"low"},{x:-16,z:17,cover:"low"},{x:16,z:-17,cover:"low"},{x:0,z:5.6,cover:"high"},{x:0,z:-5.6,cover:"high"},{x:5.6,z:0,cover:"high"},{x:-5.6,z:0,cover:"high"},{x:-22,z:16,cover:"high"},{x:-26,z:14,cover:"high"},{x:-16,z:12,cover:"high"},{x:16,z:-12,cover:"high"},{x:-4,z:-24,cover:"high"},{x:6,z:-24,cover:"high"},{x:-14,z:-24,cover:"high"},{x:16,z:-24,cover:"high"},{x:24,z:7,cover:"low"},{x:-24,z:-7,cover:"low"},{x:8,z:26,cover:"low"},{x:-8,z:-22,cover:"low"},{x:-30,z:10,cover:"low"},{x:30,z:18,cover:"low"},{x:-18,z:10,cover:"low"}],props:Hl,fireflies:95,petals:46},ra={station:ia,park:na,manor:sa},$a=["station","park","manor"],$c=[{id:"random",name:"随机地图",subtitle:"每次都有新惊喜"},{id:"station",name:ia.name,subtitle:ia.subtitle},{id:"park",name:na.name,subtitle:na.subtitle},{id:"manor",name:sa.name,subtitle:sa.subtitle}];function Zc(s,t){return s==="random"?ra[$a[Math.floor(t()*$a.length)]]:ra[s]}function rr(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Vl(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}const jc={menu:{root:261.63,scale:[0,2,4,7,9,12,14,16],pattern:[0,2,4,3,5,4,2,0,1,3,5,4,2,0,2,3,4,5,7,5,4,2,0,1,2,3,4,2,0,-1,0,2],wave:"sine",stepSeconds:.42},station:{root:349.23,scale:[0,2,4,7,9,12,14,16],pattern:[0,4,2,5,3,7,5,3,1,5,3,6,4,2,0,2,3,5,7,6,4,3,1,3,2,4,5,3,1,0,2,4],wave:"triangle",stepSeconds:.44},park:{root:392,scale:[0,2,4,7,9,12,14,16],pattern:[0,2,5,4,7,5,3,2,0,3,5,7,6,4,2,1,2,5,4,7,5,3,2,0,1,3,5,4,2,0,2,4],wave:"sine",stepSeconds:.38},manor:{root:220,scale:[0,3,5,7,10,12,15,17],pattern:[0,2,4,3,1,4,2,0,3,5,4,2,1,3,0,2,4,3,5,4,2,1,3,0,2,4,3,1,0,2,1,3],wave:"sine",stepSeconds:.48}},Za="miaomiao.muted";class Jc{ctx=null;master=null;musicBus=null;sfxBus=null;reverbSend=null;noiseBuffer=null;theme="menu";muted=!1;volume=.78;step=0;nextNoteTime=0;musicTimer=null;heartbeat=0;heartbeatTimer=0;started=!1;constructor(){try{this.muted=localStorage.getItem(Za)==="1"}catch{this.muted=!1}}get isMuted(){return this.muted}async start(t){if(this.started){this.setTheme(t),this.startScheduler(),await this.ctx?.resume();return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const i=new e;this.ctx=i,this.started=!0;const n=i.createGain();n.gain.value=this.muted?0:this.volume,n.connect(i.destination),this.master=n;const r=i.createGain();r.gain.value=.24,r.connect(n),this.musicBus=r;const a=i.createGain();a.gain.value=.55,a.connect(n),this.sfxBus=a;const o=i.createConvolver();o.buffer=this.createImpulse(i,1.9,2.8);const l=i.createGain();l.gain.value=.16,l.connect(o),o.connect(n),this.reverbSend=l,this.noiseBuffer=this.createNoise(i),await i.resume(),this.setTheme(t),this.startScheduler()}setTheme(t){this.theme===t&&this.musicTimer!==null||(this.theme=t,this.step=0,this.ctx&&(this.nextNoteTime=this.ctx.currentTime+.12))}setMuted(t){this.muted=t;try{localStorage.setItem(Za,t?"1":"0")}catch{}this.ctx&&this.master&&this.master.gain.setTargetAtTime(t?0:this.volume,this.ctx.currentTime,.06)}setPaused(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}stopMusic(){this.musicTimer!==null&&(window.clearInterval(this.musicTimer),this.musicTimer=null)}setHeartbeat(t){this.heartbeat=Math.max(0,Math.min(1,t))}update(t){if(!(!this.ctx||this.ctx.state!=="running"||this.muted)){if(this.heartbeat<.06){this.heartbeatTimer=0;return}if(this.heartbeatTimer-=t,this.heartbeatTimer<=0){this.heartbeatTimer=1.25-this.heartbeat*.82;const e=this.ctx.currentTime;this.thump(e,58,.16),this.thump(e+.17,72,.12)}}}play(t){if(!this.ctx||!this.sfxBus||this.muted)return;const e=this.ctx.currentTime+.01;switch(t){case"contact":this.chime(e,880,.14,.16,"triangle"),this.chime(e+.03,1320,.18,.12,"sine"),this.noise(e,.08,.08,900);break;case"jail":this.chime(e,660,.2,.14,"sine"),this.chime(e+.12,494,.24,.12,"sine"),this.chime(e+.24,330,.32,.1,"sine");break;case"rescue":this.chime(e,523,.18,.12,"triangle"),this.chime(e+.1,659,.2,.12,"triangle"),this.chime(e+.2,784,.28,.13,"triangle");break;case"eliminate":this.chime(e,523,.22,.11,"sine"),this.chime(e+.14,392,.28,.1,"sine"),this.chime(e+.28,262,.4,.09,"sine");break;case"lunge":this.noise(e,.28,.16,500);break;case"call":this.chime(e,659,.24,.13,"triangle"),this.chime(e+.16,880,.32,.11,"triangle");break;case"win":for(const[i,n]of[523,659,784,1047].entries())this.chime(e+i*.13,n,.45,.12,"triangle");break;case"lose":for(const[i,n]of[392,330,262].entries())this.chime(e+i*.18,n,.5,.1,"sine");break;case"step":this.noise(e,.055,.045,280+Math.random()*160);break}}dispose(){this.stopMusic(),this.ctx?.close(),this.ctx=null}startScheduler(){this.musicTimer===null&&(this.musicTimer=window.setInterval(()=>this.scheduleMusic(),120))}scheduleMusic(){if(!this.ctx||!this.musicBus)return;const t=jc[this.theme],e=this.ctx.currentTime+.45;for(;this.nextNoteTime<e;)this.scheduleStep(t,this.step,this.nextNoteTime),this.nextNoteTime+=t.stepSeconds,this.step=(this.step+1)%t.pattern.length}scheduleStep(t,e,i){if(!this.musicBus)return;const n=t.pattern[e];if(n>=0){const r=t.scale[n%t.scale.length],a=Math.floor(n/t.scale.length)*12,o=t.root*Math.pow(2,(r+a)/12);this.chime(i,o,t.stepSeconds*1.6,.055,t.wave,this.musicBus,!0)}if(e%8===0){const r=t.root/2;this.chime(i,r,t.stepSeconds*6,.05,"sine",this.musicBus,!0)}if(e%16===0){const r=[0,4,7];for(const a of r)this.chime(i,t.root*Math.pow(2,a/12),t.stepSeconds*10,.022,"sine",this.musicBus,!0)}}chime(t,e,i,n,r,a,o=!1){if(!this.ctx||!this.sfxBus||!this.musicBus)return;const l=a??this.sfxBus,c=this.ctx.createOscillator();c.type=r,c.frequency.setValueAtTime(e,t);const h=this.ctx.createGain();h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(n,t+.015),h.gain.exponentialRampToValueAtTime(1e-4,t+i),c.connect(h),h.connect(l),o&&this.reverbSend&&h.connect(this.reverbSend),c.start(t),c.stop(t+i+.05)}thump(t,e,i){if(!this.ctx||!this.sfxBus)return;const n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(e,t);const r=this.ctx.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.18,t+.015),r.gain.exponentialRampToValueAtTime(1e-4,t+i),n.connect(r),r.connect(this.sfxBus),n.start(t),n.stop(t+i+.02)}noise(t,e,i,n){if(!this.ctx||!this.sfxBus||!this.noiseBuffer)return;const r=this.ctx.createBufferSource();r.buffer=this.noiseBuffer;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=n,a.Q.value=.8;const o=this.ctx.createGain();o.gain.setValueAtTime(i,t),o.gain.exponentialRampToValueAtTime(1e-4,t+e),r.connect(a),a.connect(o),o.connect(this.sfxBus),r.start(t),r.stop(t+e+.03)}createNoise(t){const e=t.createBuffer(1,Math.floor(t.sampleRate*.6),t.sampleRate),i=e.getChannelData(0);for(let n=0;n<i.length;n++)i[n]=Math.random()*2-1;return e}createImpulse(t,e,i){const n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let a=0;a<2;a++){const o=r.getChannelData(a);for(let l=0;l<n;l++)o[l]=(Math.random()*2-1)*Math.pow(1-l/n,i)}return r}}const vr=Math.PI*2;function En(s,t,e){return Math.max(t,Math.min(e,s))}function Kc(s,t,e){return s+(t-s)*e}function Ze(s,t,e,i){return Kc(s,t,1-Math.exp(-e*i))}function aa(s){let t=s%vr;return t>Math.PI&&(t-=vr),t<-Math.PI&&(t+=vr),t}function oa(s,t){return aa(s-t)}function se(s,t,e,i){return Math.hypot(e-s,i-t)}function ja(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),i=t%60;return`${e}:${i.toString().padStart(2,"0")}`}function Ja(s,t,e){const i=oa(t,s);return Math.abs(i)<=e?aa(t):aa(s+Math.sign(i)*e)}const Qc={star:'<path d="M12 3.4l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.6 9.5l5.8-.8L12 3.4z" fill="currentColor" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>',knot:'<path d="M4.2 8.2c2.4-2.5 5.1-2.3 7.8.4 2.7-2.7 5.4-2.9 7.8-.4-1.7 2.4-2.3 4.4-.8 6.4-2.4 2.4-5 2.3-7-.5-2 2.8-4.6 2.9-7 .5 1.5-2 0.9-4-.8-6.4z" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>',clock:'<circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.2v5.1l3.4 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',runner:'<circle cx="14.2" cy="4.8" r="2.1" fill="currentColor"/><path d="M12.8 8.2l-2.4 3.1 2.5 2.1-1.5 4.2M11.4 10.2l4.1 1.4 1.8 3.2M10.4 11.3l-3.2 1.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',ghost:'<path d="M5.2 19.5V10a6.8 6.8 0 0 1 13.6 0v9.5l-2.3-1.7-2.2 1.7-2.3-1.7-2.2 1.7-2.3-1.7-2.3 1.7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="9.5" cy="10.2" r="1" fill="currentColor"/><circle cx="14.5" cy="10.2" r="1" fill="currentColor"/>',play:'<path d="M8.2 5.6l10 6.4-10 6.4V5.6z" fill="currentColor"/>',pause:'<rect x="7" y="5.4" width="3.4" height="13.2" rx="1.2" fill="currentColor"/><rect x="13.6" y="5.4" width="3.4" height="13.2" rx="1.2" fill="currentColor"/>',map:'<path d="M3.8 5.8l5.2-1.7 6 2 5.2-1.7v14.4l-5.2 1.7-6-2-5.2 1.7V5.8z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 4.1v14.4M15 6.1v14.4" fill="none" stroke="currentColor" stroke-width="1.5"/>',dice:'<rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="8.6" cy="8.6" r="1.2" fill="currentColor"/><circle cx="15.4" cy="8.6" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="8.6" cy="15.4" r="1.2" fill="currentColor"/><circle cx="15.4" cy="15.4" r="1.2" fill="currentColor"/>',volume:'<path d="M4.2 9.4h3.4l4.2-3.5v12.2L7.6 14.6H4.2V9.4z" fill="currentColor"/><path d="M15 8.2c1.6 1.8 1.6 5.8 0 7.6M17.8 5.6c3.1 3.4 3.1 9.4 0 12.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',volumeOff:'<path d="M4.2 9.4h3.4l4.2-3.5v12.2L7.6 14.6H4.2V9.4z" fill="currentColor"/><path d="M15.2 9.2l5.6 5.6M20.8 9.2l-5.6 5.6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',arrowLeft:'<path d="M19 12H5.4M11 5.4L4.4 12l6.6 6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',check:'<path d="M4.8 12.4l4.7 4.7 9.7-10.2" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',close:'<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',gear:'<circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 3.4v2.2M12 18.4v2.2M3.4 12h2.2M18.4 12h2.2M5.9 5.9l1.6 1.6M16.5 16.5l1.6 1.6M18.1 5.9l-1.6 1.6M7.5 16.5l-1.6 1.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',book:'<path d="M4.2 5.2c2.8-.9 5.2-.5 7.8 1.1 2.6-1.6 5-2 7.8-1.1v13.2c-2.8-.9-5.2-.5-7.8 1.1-2.6-1.6-5-2-7.8-1.1V5.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 6.3v13.2" fill="none" stroke="currentColor" stroke-width="1.5"/>',bolt:'<path d="M13.4 2.6L4.8 13.8h6l-1.2 7.6 8.8-11.6h-6.2l1.2-7.2z" fill="currentColor"/>',call:'<path d="M4.4 9.2l4.8-4.8 2.4 2.4-2 2 3.6 3.6 2-2 2.4 2.4-4.8 4.8c-2.4-1-4.4-2.2-6-3.8s-2.8-3.6-3.6-6l1.2-1.2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15.6 4.6c1.8.8 3 2 3.8 3.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',burst:'<path d="M12 3.2l1.6 5.4 5.2-2.4-2.4 5.2 5.4 1.6-5.4 1.6 2.4 5.2-5.2-2.4L12 20.8l-1.6-5.4-5.2 2.4 2.4-5.2-5.4-1.6 5.4-1.6-2.4-5.2 5.2 2.4L12 3.2z" fill="currentColor"/>',crown:'<path d="M3.6 7.6l4.2 3.2L12 5l4.2 5.8 4.2-3.2-1.6 10.2H5.2L3.6 7.6z" fill="currentColor"/><circle cx="12" cy="4" r="1.2" fill="currentColor"/>',home:'<path d="M4 11.2L12 4l8 7.2V20h-5.6v-5.4H9.6V20H4v-8.8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',restart:'<path d="M5.2 8.2A7.6 7.6 0 1 1 4.4 14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M4.4 4.6v4.2h4.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',chevronRight:'<path d="M9 5.4l6.6 6.6L9 18.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',heart:'<path d="M12 20.2S3.8 15.2 3.8 9.4c0-3 3.8-4.7 6.2-2.2L12 9.1l2-1.9c2.4-2.5 6.2-.8 6.2 2.2 0 5.8-8.2 10.8-8.2 10.8z" fill="currentColor"/>',sparkle:'<path d="M12 3.2l1.4 5.2 5.2 1.4-5.2 1.4-1.4 5.2-1.4-5.2-5.2-1.4 5.2-1.4L12 3.2z" fill="currentColor"/><path d="M18.6 15.2l.7 2.5 2.5.7-2.5.7-.7 2.5-.7-2.5-2.5-.7 2.5-.7.7-2.5z" fill="currentColor"/>',users:'<circle cx="9" cy="8.4" r="2.6" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.8 19.2c0-3 2.3-5.2 5.2-5.2s5.2 2.2 5.2 5.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M15.2 6.4a2.4 2.4 0 0 1 0 4.4M17.4 14.4c1.8.6 3 2.2 3 4.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',eye:'<path d="M2.8 12s3.4-5.6 9.2-5.6S21.2 12 21.2 12s-3.4 5.6-9.2 5.6S2.8 12 2.8 12z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/>'};function jt(s,t=24){return`<svg viewBox="0 0 24 24" width="${t}" height="${t}" aria-hidden="true">${Qc[s]}</svg>`}function Ka(s){return s==="hider"?`
      <svg viewBox="0 0 100 100" role="img" aria-label="逃离者">
        <defs>
          <linearGradient id="hider-dress" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#9ff0dc"/>
            <stop offset="1" stop-color="#5fc9b3"/>
          </linearGradient>
        </defs>
        <circle cx="50" cy="35" r="23" fill="#ffe4c4" stroke="#2b2140" stroke-width="2"/>
        <path d="M27 33c2-17 13-24 23-24s21 7 23 24c-8-7-15-9-23-9s-15 2-23 9z" fill="#4a3a5e" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
        <path d="M31 28c-5-7-4-13 0-15 4 3 5 8 3 13zM69 28c5-7 4-13 0-15-4 3-5 8-3 13z" fill="#ff9ebb" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="42" cy="37" r="3.2" fill="#2b2140"/>
        <circle cx="58" cy="37" r="3.2" fill="#2b2140"/>
        <circle cx="43" cy="36" r="1" fill="#fff"/>
        <circle cx="59" cy="36" r="1" fill="#fff"/>
        <ellipse cx="35" cy="44" rx="4" ry="2.6" fill="#ff9ebb" opacity=".65"/>
        <ellipse cx="65" cy="44" rx="4" ry="2.6" fill="#ff9ebb" opacity=".65"/>
        <path d="M45 45c2 3 8 3 10 0" fill="none" stroke="#ef7fa4" stroke-width="2" stroke-linecap="round"/>
        <path d="M35 62c6-5 24-5 30 0l6 22c-14 7-28 7-42 0l6-22z" fill="url(#hider-dress)" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
        <path d="M39 64l-7 12M61 64l7 12" fill="none" stroke="#ffe4c4" stroke-width="6" stroke-linecap="round"/>
        <path d="M41 84v9M59 84v9" fill="none" stroke="#ffe4c4" stroke-width="6" stroke-linecap="round"/>
        <path d="M35 94h11M54 94h11" fill="none" stroke="#4a3a5e" stroke-width="5" stroke-linecap="round"/>
        <path d="M50 65l2.2 4.4 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.5-3.4 4.8-.7L50 65z" fill="#f6c85f" stroke="#2b2140" stroke-width="1.4"/>
        <path d="M22 17l1.4 5.2 5.2 1.4-5.2 1.4-1.4 5.2-1.4-5.2-5.2-1.4 5.2-1.4L22 17z" fill="#fff6e7" opacity=".8"/>
        <path d="M84 62l1.1 4.1 4.1 1.1-4.1 1.1-1.1 4.1-1.1-4.1-4.1-1.1 4.1-1.1L84 62z" fill="#f6c85f" opacity=".9"/>
      </svg>`:`
    <svg viewBox="0 0 100 100" role="img" aria-label="鬼">
      <defs>
        <linearGradient id="ghost-dress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffb3c8"/>
          <stop offset="1" stop-color="#ef7fa4"/>
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="55" rx="31" ry="40" fill="#fff" opacity=".14"/>
      <circle cx="50" cy="35" r="23" fill="#ffe7ee" stroke="#2b2140" stroke-width="2"/>
      <path d="M27 33c2-17 13-24 23-24s21 7 23 24c-8-7-15-9-23-9s-15 2-23 9z" fill="#4a3728" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
      <path d="M31 27c-4-7-3-13 1-15 4 3 4 8 2 13zM69 27c4-7 3-13-1-15-4 3-4 8-2 13z" fill="#ffc4d6" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="42" cy="37" r="3.2" fill="#2b2140"/>
      <circle cx="58" cy="37" r="3.2" fill="#2b2140"/>
      <circle cx="43" cy="36" r="1" fill="#fff"/>
      <circle cx="59" cy="36" r="1" fill="#fff"/>
      <ellipse cx="35" cy="44" rx="4" ry="2.6" fill="#ff9ebb" opacity=".65"/>
      <ellipse cx="65" cy="44" rx="4" ry="2.6" fill="#ff9ebb" opacity=".65"/>
      <path d="M45 45c2 3 8 3 10 0" fill="none" stroke="#ef7fa4" stroke-width="2" stroke-linecap="round"/>
      <path d="M35 62c6-5 24-5 30 0l6 22c-14 7-28 7-42 0l6-22z" fill="url(#ghost-dress)" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
      <path d="M39 64l-7 12M61 64l7 12" fill="none" stroke="#ffe7ee" stroke-width="6" stroke-linecap="round"/>
      <path d="M41 84v9M59 84v9" fill="none" stroke="#ffe7ee" stroke-width="6" stroke-linecap="round"/>
      <path d="M35 94h11M54 94h11" fill="none" stroke="#4a3728" stroke-width="5" stroke-linecap="round"/>
      <path d="M22 17l1.4 5.2 5.2 1.4-5.2 1.4-1.4 5.2-1.4-5.2-5.2-1.4 5.2-1.4L22 17z" fill="#fff6e7" opacity=".8"/>
      <path d="M84 62l1.1 4.1 4.1 1.1-4.1 1.1-1.1 4.1-1.1-4.1-4.1-1.1 4.1-1.1L84 62z" fill="#f6c85f" opacity=".9"/>
    </svg>`}function th(s){return s==="random"?`
      <svg viewBox="0 0 160 100" role="img" aria-label="随机地图">
        <defs>
          <linearGradient id="rand-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#4a3b6b"/>
            <stop offset="1" stop-color="#221a3e"/>
          </linearGradient>
        </defs>
        <rect width="160" height="100" fill="url(#rand-sky)"/>
        <circle cx="80" cy="52" r="28" fill="#f6c85f" opacity=".16"/>
        <path d="M80 20l6.2 19.4 20.3 1.5-15.8 12.7 5.1 19.6L80 62.6 64.2 73.2l5.1-19.6-15.8-12.7 20.3-1.5L80 20z" fill="#f6c85f" stroke="#fff6e7" stroke-width="2"/>
        <path d="M36 28l2 7.4 7.4 2-7.4 2-2 7.4-2-7.4-7.4-2 7.4-2 2-7.4z" fill="#fff6e7" opacity=".8"/>
        <path d="M124 62l1.6 5.8 5.8 1.6-5.8 1.6-1.6 5.8-1.6-5.8-5.8-1.6 5.8-1.6 1.6-5.8z" fill="#8fe2ce" opacity=".85"/>
      </svg>`:s==="station"?`
      <svg viewBox="0 0 160 100" role="img" aria-label="童话火车站">
        <defs>
          <linearGradient id="station-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#6d5a92"/>
            <stop offset="1" stop-color="#2e2452"/>
          </linearGradient>
        </defs>
        <rect width="160" height="100" fill="url(#station-sky)"/>
        <circle cx="126" cy="22" r="12" fill="#fff2c9" opacity=".95"/>
        <circle cx="126" cy="22" r="19" fill="#fff2c9" opacity=".14"/>
        <rect y="72" width="160" height="28" fill="#8f84a6"/>
        <rect y="70" width="160" height="5" fill="#ffd08a"/>
        <rect x="16" y="48" width="92" height="25" rx="5" fill="#8fb8ff" stroke="#2b2140" stroke-width="2"/>
        <rect x="22" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="39" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="56" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="73" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="90" y="52" width="12" height="8" rx="2" fill="#ffe8b8"/>
        <rect x="16" y="66" width="92" height="6" fill="#6e4c8e"/>
        <circle cx="32" cy="75" r="6" fill="#2b2140"/>
        <circle cx="91" cy="75" r="6" fill="#2b2140"/>
        <rect x="120" y="35" width="22" height="38" fill="#fff6e7" stroke="#2b2140" stroke-width="2"/>
        <path d="M117 35h28l-14-11-14 11z" fill="#6e4c8e"/>
        <circle cx="131" cy="49" r="7" fill="#fff6e7" stroke="#2b2140" stroke-width="2"/>
        <path d="M131 44v5l3 2" stroke="#2b2140" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <rect x="126" y="63" width="10" height="10" fill="#ffe8b8"/>
        <path d="M8 28l1.4 5 5 1.4-5 1.4-1.4 5-1.4-5-5-1.4 5-1.4 1.4-5z" fill="#fff6e7" opacity=".85"/>
      </svg>`:s==="park"?`
      <svg viewBox="0 0 160 100" role="img" aria-label="月光游乐园">
        <defs>
          <linearGradient id="park-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#5b4b86"/>
            <stop offset="1" stop-color="#221a3e"/>
          </linearGradient>
        </defs>
        <rect width="160" height="100" fill="url(#park-sky)"/>
        <circle cx="30" cy="20" r="10" fill="#fff2c9" opacity=".95"/>
        <circle cx="30" cy="20" r="17" fill="#fff2c9" opacity=".16"/>
        <circle cx="110" cy="34" r="24" fill="none" stroke="#f6c85f" stroke-width="2.5"/>
        <circle cx="110" cy="34" r="16" fill="none" stroke="#fff6e7" stroke-width="1.5" opacity=".6"/>
        <g stroke="#fff6e7" stroke-width="1.6" opacity=".8">
          <path d="M110 10v48M86 34h48M93 17l34 34M127 17l-34 34"/>
        </g>
        <circle cx="110" cy="10" r="3.5" fill="#ff9ebb"/>
        <circle cx="134" cy="34" r="3.5" fill="#8fe2ce"/>
        <circle cx="110" cy="58" r="3.5" fill="#f6c85f"/>
        <circle cx="86" cy="34" r="3.5" fill="#b8a7f2"/>
        <rect y="78" width="160" height="22" fill="#6fbf9a"/>
        <path d="M0 80c20-12 36-12 56 0 18 10 32 10 48 0 20-12 36-12 56 0v20H0V80z" fill="#4e9a7a"/>
        <path d="M54 82c0-10 7-18 16-18s16 8 16 18" fill="#ff9ebb" stroke="#2b2140" stroke-width="2"/>
        <path d="M62 82V70M78 82V70M58 66h24" stroke="#fff6e7" stroke-width="2" stroke-linecap="round"/>
        <circle cx="70" cy="62" r="2.5" fill="#f6c85f"/>
        <circle cx="30" cy="54" r="6" fill="#ff9ebb" stroke="#2b2140" stroke-width="1.5"/>
        <path d="M30 60v8" stroke="#fff6e7" stroke-width="1.5"/>
        <circle cx="44" cy="48" r="5" fill="#8fe2ce" stroke="#2b2140" stroke-width="1.5"/>
        <path d="M44 53v10" stroke="#fff6e7" stroke-width="1.5"/>
      </svg>`:`
    <svg viewBox="0 0 160 100" role="img" aria-label="庄园">
      <defs>
        <linearGradient id="manor-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#5f4f83"/>
          <stop offset="1" stop-color="#241c42"/>
        </linearGradient>
      </defs>
      <rect width="160" height="100" fill="url(#manor-sky)"/>
      <circle cx="130" cy="20" r="11" fill="#f6e7ff" opacity=".95"/>
      <circle cx="130" cy="20" r="18" fill="#f6e7ff" opacity=".14"/>
      <rect y="76" width="160" height="24" fill="#7fa88a"/>
      <path d="M20 76V42l18-13 18 13v34H20z" fill="#fff6e7" stroke="#2b2140" stroke-width="2"/>
      <path d="M14 43L38 22l24 21" fill="#4a2f66" stroke="#2b2140" stroke-width="2" stroke-linejoin="round"/>
      <rect x="31" y="54" width="8" height="10" fill="#ffe8b8"/>
      <rect x="45" y="54" width="8" height="10" fill="#ffe8b8"/>
      <rect x="33" y="66" width="12" height="10" fill="#6e4c8e"/>
      <rect x="76" y="52" width="34" height="24" fill="#bfe8f5" opacity=".65" stroke="#fff6e7" stroke-width="2"/>
      <path d="M76 52l17-12 17 12" fill="none" stroke="#fff6e7" stroke-width="2"/>
      <path d="M90 76V64h8v12" fill="#6fbf9a"/>
      <path d="M120 76V58l10-8 10 8v18h-20z" fill="#fff6e7" stroke="#2b2140" stroke-width="2"/>
      <path d="M116 59l14-12 14 12" fill="#4a2f66" stroke="#2b2140" stroke-width="2"/>
      <circle cx="60" cy="70" r="4" fill="#ff9ebb"/>
      <circle cx="68" cy="72" r="3" fill="#fff6e7"/>
      <circle cx="112" cy="70" r="4" fill="#ff9ebb"/>
      <path d="M18 16l1.4 5 5 1.4-5 1.4-1.4 5-1.4-5-5-1.4 5-1.4 1.4-5z" fill="#fff6e7" opacity=".85"/>
      <path d="M92 20l1.1 4 4 1.1-4 1.1-1.1 4-1.1-4-4-1.1 4-1.1 1.1-4z" fill="#f6c85f" opacity=".9"/>
    </svg>`}function eh(){return`
    <svg viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0 190c80-8 110-52 180-50 60 2 74 30 126 26 62-5 82-48 150-46 70 2 88 44 156 44 72 0 90-40 158-40 70 0 92 40 162 38 66-2 84-42 150-40 64 2 82 38 118 40v58H0v-30z" fill="currentColor" opacity=".55"/>
      <g fill="currentColor">
        <rect x="112" y="126" width="64" height="66" rx="5"/>
        <path d="M104 126h80l-40-26-40 26z"/>
        <rect x="136" y="148" width="16" height="24" rx="3"/>
        <circle cx="966" cy="130" r="42" fill="none" stroke="currentColor" stroke-width="7"/>
        <circle cx="966" cy="130" r="24" fill="none" stroke="currentColor" stroke-width="4"/>
        <path d="M966 88v84M924 130h84M936 100l60 60M996 100l-60 60" stroke="currentColor" stroke-width="4"/>
        <path d="M930 172l-18 34M1002 172l18 34" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
        <rect x="512" y="118" width="100" height="74" rx="8"/>
        <path d="M504 118h116l-58-34-58 34z"/>
        <rect x="536" y="140" width="18" height="26" rx="3" fill="#17112b" opacity=".35"/>
        <rect x="570" y="140" width="18" height="26" rx="3" fill="#17112b" opacity=".35"/>
        <path d="M760 192V130l26-20 26 20v62h-52z"/>
        <path d="M748 132l38-30 38 30" fill="none" stroke="currentColor" stroke-width="7"/>
        <rect x="280" y="150" width="46" height="42" rx="4"/>
        <rect x="1060" y="152" width="54" height="40" rx="5"/>
        <rect x="1068" y="160" width="10" height="12" rx="2" fill="#17112b" opacity=".35"/>
        <rect x="1086" y="160" width="10" height="12" rx="2" fill="#17112b" opacity=".35"/>
        <circle cx="380" cy="170" r="18"/>
        <rect x="374" y="182" width="12" height="24"/>
        <circle cx="840" cy="174" r="14"/>
        <rect x="836" y="184" width="8" height="22"/>
      </g>
      <g fill="#fff6e7" opacity=".55">
        <circle cx="160" cy="60" r="2"/>
        <circle cx="360" cy="40" r="1.6"/>
        <circle cx="520" cy="72" r="2.2"/>
        <circle cx="700" cy="38" r="1.5"/>
        <circle cx="860" cy="64" r="2"/>
        <circle cx="1040" cy="44" r="1.7"/>
        <circle cx="1120" cy="90" r="1.4"/>
      </g>
    </svg>`}class ih{root;input;onPause;joystick;handle;actionBtn;joystickPointer=null;joystickActive=!1;currentAction=null;constructor(t,e,i){this.input=e,this.onPause=i,this.root=document.createElement("div"),this.root.className="mobile-controls",this.root.innerHTML=`
      <div class="joystick" data-joystick>
        <div class="joystick__handle" data-handle></div>
      </div>
      <div class="action-cluster">
        <button type="button" class="action-btn action-btn--sprint" data-sprint aria-label="冲刺">
          ${jt("bolt",28)}
          <span class="action-btn__label">冲刺</span>
        </button>
        <button type="button" class="action-btn action-btn--lunge" data-action hidden aria-label="扑击">
          ${jt("burst",28)}
          <span class="action-btn__label">扑击</span>
        </button>
      </div>
      <div class="mobile-top-actions">
        <button type="button" class="icon-btn" data-pause aria-label="暂停">${jt("pause",22)}</button>
      </div>
    `,t.appendChild(this.root),this.joystick=this.root.querySelector("[data-joystick]"),this.handle=this.root.querySelector("[data-handle]"),this.actionBtn=this.root.querySelector("[data-action]"),this.bindJoystick(),this.bindSprint(),this.bindAction(),this.root.querySelector("[data-pause]")?.addEventListener("click",()=>this.onPause())}updateState(t){const e=t.isGhost?"lunge":t.playerIsJailed?"call":null;e!==this.currentAction&&(this.currentAction=e,this.actionBtn.hidden=e===null,this.actionBtn.classList.toggle("action-btn--lunge",e==="lunge"),this.actionBtn.classList.toggle("action-btn--call",e==="call"),e==="lunge"?(this.actionBtn.innerHTML=`${jt("burst",28)}<span class="action-btn__label">扑击</span>`,this.actionBtn.setAttribute("aria-label","扑击")):e==="call"&&(this.actionBtn.innerHTML=`${jt("call",28)}<span class="action-btn__label">呼救</span>`,this.actionBtn.setAttribute("aria-label","呼救")))}dispose(){this.input.setMobileMove(0,0,!1),this.input.setMobileSprint(!1),this.root.remove()}bindJoystick(){this.joystick.addEventListener("pointerdown",e=>{e.preventDefault(),this.joystickActive=!0,this.joystickPointer=e.pointerId,this.joystick.classList.add("is-active"),this.joystick.setPointerCapture(e.pointerId),this.updateJoystick(e)}),this.joystick.addEventListener("pointermove",e=>{!this.joystickActive||e.pointerId!==this.joystickPointer||(e.preventDefault(),this.updateJoystick(e))});const t=e=>{e.pointerId===this.joystickPointer&&(this.joystickActive=!1,this.joystickPointer=null,this.joystick.classList.remove("is-active"),this.handle.style.transform="translate(-50%, -50%)",this.input.setMobileMove(0,0,!1))};this.joystick.addEventListener("pointerup",t),this.joystick.addEventListener("pointercancel",t),this.joystick.addEventListener("lostpointercapture",t)}updateJoystick(t){const e=this.joystick.getBoundingClientRect(),i=e.left+e.width/2,n=e.top+e.height/2;let r=t.clientX-i,a=t.clientY-n;const o=e.width*.33,l=Math.hypot(r,a);l>o&&(r=r/l*o,a=a/l*o),this.handle.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${a}px))`;let c=r/o,h=-a/o;Math.abs(c)<.14&&(c=0),Math.abs(h)<.14&&(h=0),this.input.setMobileMove(c,h,!0)}bindSprint(){const t=this.root.querySelector("[data-sprint]"),e=n=>{n.preventDefault(),t.classList.add("is-active"),t.setPointerCapture(n.pointerId),this.input.setMobileSprint(!0)},i=()=>{t.classList.remove("is-active"),this.input.setMobileSprint(!1)};t.addEventListener("pointerdown",e),t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("lostpointercapture",i)}bindAction(){const t=i=>{i.preventDefault(),this.actionBtn.classList.add("is-active"),this.actionBtn.setPointerCapture(i.pointerId),this.currentAction&&this.input.triggerAction(this.currentAction)},e=()=>{this.actionBtn.classList.remove("is-active")};this.actionBtn.addEventListener("pointerdown",t),this.actionBtn.addEventListener("pointerup",e),this.actionBtn.addEventListener("pointercancel",e),this.actionBtn.addEventListener("lostpointercapture",e)}}const Qa="miaomiao.tutorialSeen";class nh{root;actions;input;mobile;feedbackLayer;toastLayer;flashEl;heartbeatEl;clickPrompt;settings;selectedMode="hider";selectedMap="random";menuEl=null;hudEl=null;pauseEl=null;tutorialEl=null;mobileControls=null;tutorialPage=0;tutorialClose=null;lastStatusKey="";lastHint="";pointerLocked=!1;promptBlocked=!1;constructor(t,e,i,n,r){this.root=t,this.actions=e,this.settings=i,this.mobile=n,this.input=r,this.feedbackLayer=document.createElement("div"),this.feedbackLayer.innerHTML=`
      <div class="vignette"></div>
      <div class="heartbeat"></div>
      <div class="flash"></div>
    `,document.body.appendChild(this.feedbackLayer),this.flashEl=this.feedbackLayer.querySelector(".flash"),this.heartbeatEl=this.feedbackLayer.querySelector(".heartbeat"),this.toastLayer=document.createElement("div"),this.toastLayer.className="toast-layer",document.body.appendChild(this.toastLayer),this.clickPrompt=document.createElement("div"),this.clickPrompt.className="click-prompt hidden",this.clickPrompt.innerHTML=`${jt("eye",18)} 点击画面锁定鼠标`,document.body.appendChild(this.clickPrompt)}showMenu(){this.promptBlocked=!0,this.clearRoot(),this.hideMobileControls(),this.menuEl=document.createElement("div"),this.menuEl.className="menu-screen",this.menuEl.innerHTML=`
      <div class="menu-skyline">${eh()}</div>
      <div class="menu-shell">
        <header class="brand">
          <div class="brand__eyebrow">${jt("sparkle",14)} 3D 捉迷藏 ${jt("sparkle",14)}</div>
          <h1 class="brand__title">苗苗<em>捉迷藏</em></h1>
          <div class="brand__subtitle">1 个鬼 · 5 个逃离者</div>
        </header>

        <div class="paper-card menu-card">
          <section class="menu-section">
            <h2 class="section-heading">
              <span class="section-heading__num">1</span>选择你的角色
              <span class="section-heading__hint">玩家算其中一个</span>
            </h2>
            <div class="role-grid">
              <button type="button" class="role-card role-card--hider" data-role="hider" aria-pressed="true">
                <div class="role-card__art">${Ka("hider")}</div>
                <div class="role-card__body">
                  <h3 class="role-card__title">当逃离者 <span class="tag">躲好</span></h3>
                  <p class="role-card__desc">躲开鬼，和四位队友一起坚持 5 分钟。被关进关押区也别怕，队友会来救你。</p>
                </div>
                <span class="role-card__check">${jt("check",16)}</span>
              </button>

              <button type="button" class="role-card role-card--ghost" data-role="ghost" aria-pressed="false">
                <div class="role-card__art">${Ka("ghost")}</div>
                <div class="role-card__body">
                  <h3 class="role-card__title">当鬼 <span class="tag">追捕</span></h3>
                  <p class="role-card__desc">你是负责追捕的鬼。接触逃离者 3 次，就能把他们关进关押区。</p>
                </div>
                <span class="role-card__check">${jt("check",16)}</span>
              </button>
            </div>
          </section>

          <section class="menu-section">
            <h2 class="section-heading">
              <span class="section-heading__num">2</span>选择地图
              <span class="section-heading__hint">默认随机</span>
            </h2>
            <div class="map-grid">
              ${$c.map(t=>`
                <button type="button" class="map-card${t.id===this.selectedMap?" map-card--selected":""}" data-map="${t.id}" aria-pressed="${t.id===this.selectedMap}">
                  <div class="map-card__art">${th(t.id)}</div>
                  <span class="map-card__name">${t.id==="random"?jt("dice",16):""}${t.name}</span>
                  <span class="map-card__desc">${t.subtitle}</span>
                  <span class="map-card__check">${jt("check",15)}</span>
                </button>
              `).join("")}
            </div>
          </section>

          <div class="menu-actions">
            <button type="button" class="btn btn--primary btn--lg" data-action="start">
              ${jt("play",22)} 开始游戏
            </button>
          </div>

          <div class="menu-footer">
            <div class="control-hints">
              ${this.mobile?`
                <span>${jt("runner",16)} 摇杆移动</span>
                <span>${jt("eye",16)} 右半屏转视角</span>
                <span>${jt("bolt",16)} 按钮冲刺</span>
              `:`
                <span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> 移动</span>
                <span><kbd>Shift</kbd> 冲刺</span>
                <span>${jt("eye",16)} 鼠标转视角</span>
                <span><kbd>Esc</kbd> 暂停</span>
              `}
            </div>
            <div class="menu-footer__spacer"></div>
            <button type="button" class="btn" data-action="tutorial">${jt("book",16)} 玩法说明</button>
            <button type="button" class="btn" data-action="mute">${this.mutedIcon()} ${this.settings.muted?"已静音":"音效"}</button>
          </div>
        </div>
      </div>
    `,this.root.appendChild(this.menuEl),this.bindMenu(),this.updateRoleSelection()}showLoading(t){this.promptBlocked=!0,this.clearRoot(),this.hideMobileControls();const e=document.createElement("div");e.className="loading-screen",e.innerHTML=`
      <div class="loading-screen__inner">
        <div class="loading-spinner"><i></i><i></i><i></i></div>
        <p class="loading-screen__map">${t}</p>
        <p class="loading-screen__tip">正在点亮路灯、摆好长椅、准备场景……</p>
      </div>
    `,this.root.appendChild(e)}showHud(t,e){this.settings=e,this.promptBlocked=!1,this.clearRoot(),this.hudEl=document.createElement("div"),this.hudEl.className=`hud${this.mobile?" hud--mobile":""}`;const i=t==="hider"?{icon:"runner",title:"坚持到最后",text:"躲开鬼，坚持 5 分钟",color:"#8fe2ce"}:{icon:"ghost",title:"抓住所有逃离者",text:"把 5 位逃离者关进关押区",color:"#ff9ebb"};this.hudEl.innerHTML=`
      <div class="hud__top">
        <div class="hud__objective" style="--objective-color:${i.color}">
          <span class="hud__objective-icon">${jt(i.icon,20)}</span>
          <span class="hud__objective-text">
            <strong>${i.title}</strong>
            <span>${i.text}</span>
          </span>
        </div>
        <div class="hud__timer">
          <div class="timer-pill">${jt("clock",18)} <span data-hud="timer">5:00</span></div>
          <div class="hud__role">${t==="hider"?"逃离者模式":"鬼模式"}</div>
        </div>
        <div class="hud__status" data-hud="status"></div>
      </div>
      <div class="hud__rescue" data-hud="rescue" hidden>
        <div class="ring" data-hud="rescue-ring" style="--value:0"><span data-hud="rescue-pct">0%</span></div>
        <div class="hud__rescue-body">
          <div class="hud__rescue-title"><span data-hud="rescue-name">救援</span><span data-hud="rescue-time">0.0 / 5.0</span></div>
          <div class="bar"><div class="bar__fill" data-hud="rescue-bar" style="--value:0"></div></div>
        </div>
      </div>
      <div class="hud__hint" data-hud="hint"></div>
      <div class="hud__sprint">
        ${jt(t==="hider"?"bolt":"burst",16)}
        <div class="bar"><div class="bar__fill" data-hud="sprint-bar" style="--value:1"></div></div>
        <span class="hud__sprint-label" data-hud="sprint-label">${t==="hider"?"体力":"扑击"}</span>
      </div>
      <div class="countdown-badge" data-hud="countdown" hidden></div>
    `,this.root.appendChild(this.hudEl),this.mobileControls=this.mobile?new ih(this.root,this.input,()=>this.onPauseRequested?.()):null,this.setPointerLocked(this.pointerLocked)}updateHud(t){if(!this.hudEl)return;const e=this.hudEl.querySelector('[data-hud="timer"]');e&&(e.textContent=ja(t.remaining)),this.hudEl.querySelector(".timer-pill")?.classList.toggle("timer-pill--urgent",t.remaining<=30);const n=this.hudEl.querySelector('[data-hud="countdown"]');if(n){const c=t.countdown>0;n.hidden=!c,c&&(n.textContent=`准备 ${Math.max(1,Math.ceil(t.countdown))}`)}const r=JSON.stringify(t.hiders)+t.isGhost+t.playerContactCount+t.playerJailCount+t.playerBoost;if(r!==this.lastStatusKey){this.lastStatusKey=r;const c=this.hudEl.querySelector('[data-hud="status"]');c&&(c.innerHTML=this.statusHtml(t))}const a=this.hudEl.querySelector('[data-hud="hint"]');a&&t.hint!==this.lastHint&&(this.lastHint=t.hint,a.innerHTML=t.hint?`${jt("sparkle",16)} ${t.hint}`:"",a.classList.toggle("is-visible",!!t.hint));const o=this.hudEl.querySelector('[data-hud="sprint-bar"]');if(o){const c=t.isGhost?1-t.lungeCooldown:t.stamina;o.style.setProperty("--value",String(c));const h=this.hudEl.querySelector('[data-hud="sprint-label"]');h&&(h.textContent=t.isGhost?"扑击":"体力"),this.hudEl.querySelector(".hud__sprint")?.classList.toggle("is-empty",c<=.02)}const l=this.hudEl.querySelector('[data-hud="rescue"]');if(l){const c=t.rescueProgress>0||t.playerIsJailed;if(l.hidden=!c,c){const h=Math.round(t.rescueProgress*100);l.querySelector('[data-hud="rescue-ring"]')?.style.setProperty("--value",String(t.rescueProgress));const d=l.querySelector('[data-hud="rescue-pct"]');d&&(d.textContent=`${h}%`);const p=l.querySelector('[data-hud="rescue-name"]');p&&(p.textContent=t.playerIsJailed?t.rescueProgress>0?"正在被救援":"等待救援":`救援 ${t.rescueName}`);const g=l.querySelector('[data-hud="rescue-time"]');g&&(g.textContent=`${(t.rescueProgress*5).toFixed(1)} / 5.0`),l.querySelector('[data-hud="rescue-bar"]')?.style.setProperty("--value",String(t.rescueProgress))}}this.heartbeatEl.style.setProperty("--heartbeat",String(t.ghostProximity)),this.mobileControls?.updateState(t)}setPointerLocked(t){this.pointerLocked=t,!this.mobile&&this.clickPrompt.classList.toggle("hidden",t||!this.hudEl||this.promptBlocked)}showPause(t){this.pauseEl||(this.promptBlocked=!0,this.clickPrompt.classList.add("hidden"),this.pauseEl=document.createElement("div"),this.pauseEl.className="overlay-screen pause-screen",this.pauseEl.innerHTML=`
      <div class="paper-card pause-card">
        <h2 class="pause-card__title">暂停</h2>
        <p class="pause-card__subtitle">游戏已暂停。</p>
        <div class="pause-actions">
          <button type="button" class="btn btn--primary" data-action="resume">${jt("play",18)} 继续游戏</button>
          <button type="button" class="btn" data-action="tutorial">${jt("book",18)} 玩法说明</button>
          <button type="button" class="btn btn--danger" data-action="menu">${jt("home",18)} 返回菜单</button>
        </div>
        <hr class="rule" />
        <div class="settings-row">
          <span>音效</span>
          <button type="button" class="switch ${this.settings.muted?"":"is-on"}" data-action="mute" aria-label="切换音效"></button>
        </div>
        <div class="settings-row">
          <span>画质 <small style="color:var(--ink-faint);font-weight:600">（下局生效）</small></span>
          <span class="segmented" data-action="quality">
            ${["high","medium","low"].map(e=>`
              <button type="button" data-quality="${e}" class="${this.settings.quality===e?"is-active":""}">${sh(e)}</button>
            `).join("")}
          </span>
        </div>
        <p class="pause-card__subtitle" style="margin-top:18px;margin-bottom:0">
          ${this.mobile?"摇杆移动，右半屏转视角。":"WASD 移动 · Shift 冲刺 · 鼠标转视角 · Esc 暂停"}
        </p>
      </div>
    `,this.root.appendChild(this.pauseEl),this.bindPause())}hidePause(){this.pauseEl?.remove(),this.pauseEl=null,this.promptBlocked=!1,this.setPointerLocked(this.pointerLocked)}showResult(t,e,i){this.hidePause(),this.promptBlocked=!0,this.clickPrompt.classList.add("hidden"),this.hideMobileControls(),this.toastLayer.innerHTML="";const n=t==="hider-win"||t==="ghost-win",r=rh(t,e),a=document.createElement("div");a.className=`overlay-screen result-screen ${n?"result-screen--win":"result-screen--lose"}`,a.innerHTML=`
      <div class="paper-card result-card ${n?"result-card--win":"result-card--lose"}">
        ${n?ah():""}
        <div class="result-card__emblem">${jt(n?"crown":"heart",46)}</div>
        <h2 class="result-card__title">${r.title}</h2>
        <p class="result-card__message">${r.message}</p>
        <div class="result-stats">
          <div class="stat"><span class="stat__value">${ja(e.elapsed)}</span><span class="stat__label">坚持时间</span></div>
          <div class="stat"><span class="stat__value">${e.jails}</span><span class="stat__label">关押次数</span></div>
          <div class="stat"><span class="stat__value">${e.rescues}</span><span class="stat__label">成功救援</span></div>
          <div class="stat"><span class="stat__value">${e.eliminated}</span><span class="stat__label">出局人数</span></div>
        </div>
        <div class="result-card__actions">
          <button type="button" class="btn btn--primary" data-action="restart">${jt("restart",18)} 再来一局</button>
          <button type="button" class="btn" data-action="menu">${jt("home",18)} 返回菜单</button>
        </div>
      </div>
    `,this.root.appendChild(a),a.querySelector('[data-action="restart"]')?.addEventListener("click",()=>{a.remove(),this.actions.onRestart()}),a.querySelector('[data-action="menu"]')?.addEventListener("click",()=>{a.remove(),this.actions.onMenu()})}showTutorial(t){this.tutorialClose=t??null,this.tutorialPage=0,this.tutorialEl?.remove(),this.tutorialEl=document.createElement("div"),this.tutorialEl.className="overlay-screen tutorial-screen",this.root.appendChild(this.tutorialEl),this.renderTutorial()}maybeShowTutorial(){try{if(localStorage.getItem(Qa)==="1")return}catch{return}this.showTutorial(()=>this.markTutorialSeen())}setSettings(t){this.settings=t;const e=this.menuEl?.querySelector('[data-action="mute"]');e&&(e.innerHTML=`${this.mutedIcon()} ${t.muted?"已静音":"音效"}`)}toast(t,e="gold"){for(;this.toastLayer.children.length>=3;)this.toastLayer.firstElementChild?.remove();const i=document.createElement("div");i.className=`toast toast--${e}`,i.textContent=t,this.toastLayer.appendChild(i),window.setTimeout(()=>i.remove(),2600)}flash(){this.flashEl.classList.remove("is-active"),this.flashEl.offsetWidth,this.flashEl.classList.add("is-active")}dispose(){this.feedbackLayer.remove(),this.toastLayer.remove(),this.clickPrompt.remove(),this.clearRoot()}bindMenu(){this.menuEl&&(this.menuEl.querySelectorAll(".role-card").forEach(t=>{t.addEventListener("click",()=>{this.selectedMode=t.dataset.role==="ghost"?"ghost":"hider",this.updateRoleSelection()})}),this.menuEl.querySelectorAll(".map-card").forEach(t=>{t.addEventListener("click",()=>{this.selectedMap=t.dataset.map??"random",this.menuEl?.querySelectorAll(".map-card").forEach(e=>{const i=e===t;e.classList.toggle("map-card--selected",i),e.setAttribute("aria-pressed",String(i))})})}),this.menuEl.querySelector('[data-action="start"]')?.addEventListener("click",()=>{this.actions.onStart(this.selectedMode,this.selectedMap)}),this.menuEl.querySelector('[data-action="tutorial"]')?.addEventListener("click",()=>{this.showTutorial()}),this.menuEl.querySelector('[data-action="mute"]')?.addEventListener("click",()=>{this.actions.onSettingsChange({muted:!this.settings.muted})}))}bindPause(){this.pauseEl&&(this.pauseEl.querySelector('[data-action="resume"]')?.addEventListener("click",()=>{this.actions.onResume()}),this.pauseEl.querySelector('[data-action="menu"]')?.addEventListener("click",()=>{this.actions.onMenu()}),this.pauseEl.querySelector('[data-action="tutorial"]')?.addEventListener("click",()=>{this.showTutorial()}),this.pauseEl.querySelector('[data-action="mute"]')?.addEventListener("click",t=>{const e=t.currentTarget,i=!e.classList.contains("is-on");e.classList.toggle("is-on",!i),this.actions.onSettingsChange({muted:i})}),this.pauseEl.querySelectorAll("[data-quality]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.quality;this.pauseEl?.querySelectorAll("[data-quality]").forEach(i=>{i.classList.toggle("is-active",i===t)}),this.actions.onSettingsChange({quality:e})})}))}updateRoleSelection(){this.menuEl?.querySelectorAll(".role-card").forEach(t=>{const e=t.dataset.role===this.selectedMode;t.classList.toggle("role-card--selected",e),t.setAttribute("aria-pressed",String(e))})}statusHtml(t){if(t.isGhost)return`
        <div class="status-pill">
          <span class="status-pill__label">逃离者</span>
          <span class="hider-chips">
            ${t.hiders.map(n=>`
              <span class="hider-chip hider-chip--${n.state==="jailed"?"jailed":n.state==="eliminated"?"eliminated":"free"}" title="${n.name}">
                ${n.id+1}
                <span class="hider-chip__dots">
                  ${[0,1,2].map(r=>`<i class="${r<n.contactCount?"is-on":""}"></i>`).join("")}
                </span>
              </span>
            `).join("")}
          </span>
        </div>
      `;const e=[0,1,2].map(n=>jt("star",15).replace("<svg ",`<svg class="${n<t.playerContactCount?"is-on":""}" `)).join(""),i=[0,1,2].map(n=>jt("knot",14).replace("<svg ",`<svg class="${n<t.playerJailCount?"is-on":""}" `)).join("");return`
      <div class="status-pill" title="当前被抓次数">
        <span class="status-pill__label">星星</span>
        <span class="stars">${e}</span>
      </div>
      <div class="status-pill" title="累计被关押次数">
        <span class="status-pill__label">关押</span>
        <span class="knots">${i}</span>
      </div>
      ${t.playerBoost?'<div class="status-pill" title="受击后短暂加速"><span class="status-pill__label">加速</span></div>':""}
    `}renderTutorial(){if(!this.tutorialEl)return;const t=oh(),e=t[this.tutorialPage];this.tutorialEl.innerHTML=`
      <div class="paper-card tutorial-card">
        <div class="tutorial-header">
          <h2>怎么玩</h2>
          <button type="button" class="icon-btn" data-action="close" aria-label="关闭">${jt("close",20)}</button>
        </div>
        <div class="tutorial-pages">
          <div class="tutorial-page">
            <div class="tutorial-page__art" style="--page-accent:${e.accent}">${jt(e.icon,68)}</div>
            <div>
              <h3>${e.title}</h3>
              <p>${e.body}</p>
            </div>
          </div>
        </div>
        <div class="tutorial-dots">
          ${t.map((i,n)=>`<i class="${n===this.tutorialPage?"is-on":""}"></i>`).join("")}
        </div>
        <div class="tutorial-actions">
          <button type="button" class="btn btn--sm" data-action="prev" ${this.tutorialPage===0?"disabled":""}>${jt("arrowLeft",16)} 上一步</button>
          ${this.tutorialPage===t.length-1?`<button type="button" class="btn btn--primary btn--sm" data-action="done">知道啦 ${jt("check",16)}</button>`:`<button type="button" class="btn btn--primary btn--sm" data-action="next">下一步 ${jt("chevronRight",16)}</button>`}
        </div>
      </div>
    `,this.tutorialEl.querySelector('[data-action="close"]')?.addEventListener("click",()=>this.closeTutorial()),this.tutorialEl.querySelector('[data-action="prev"]')?.addEventListener("click",()=>{this.tutorialPage=Math.max(0,this.tutorialPage-1),this.renderTutorial()}),this.tutorialEl.querySelector('[data-action="next"]')?.addEventListener("click",()=>{this.tutorialPage=Math.min(t.length-1,this.tutorialPage+1),this.renderTutorial()}),this.tutorialEl.querySelector('[data-action="done"]')?.addEventListener("click",()=>this.closeTutorial())}closeTutorial(){this.markTutorialSeen(),this.tutorialEl?.remove(),this.tutorialEl=null;const t=this.tutorialClose;this.tutorialClose=null,t?.()}markTutorialSeen(){try{localStorage.setItem(Qa,"1")}catch{}}onPauseRequested=null;mutedIcon(){return this.settings.muted?jt("volumeOff",16):jt("volume",16)}hideMobileControls(){this.mobileControls?.dispose(),this.mobileControls=null}clearRoot(){this.hideMobileControls(),this.root.innerHTML="",this.menuEl=null,this.hudEl=null,this.pauseEl=null,this.tutorialEl=null,this.clickPrompt.classList.add("hidden"),this.lastStatusKey="",this.lastHint=""}}function sh(s){return s==="high"?"高":s==="medium"?"中":"低"}function rh(s,t){return s==="hider-win"?{title:"成功逃脱！",message:"时间到，你成功坚持了 5 分钟。"}:s==="hider-lose"?{title:"这次被抓住了……",message:"别灰心，下一次一定能躲得更好。"}:s==="ghost-win"?{title:"全部抓住了！",message:`你把 ${t.jails+t.eliminated} 位逃离者关进了关押区。`}:{title:"时间到！",message:`你抓住了 ${t.jails+t.eliminated} / 5 位逃离者，下一次会更快。`}}function ah(){const s=["#f6c85f","#ff9ebb","#8fe2ce","#b8a7f2","#fff6e7"];let t='<div class="confetti">';for(let e=0;e<28;e++){const i=Math.round(Math.random()*100),n=Math.round((Math.random()-.5)*140),r=(Math.random()*1.8).toFixed(2),a=(2.6+Math.random()*1.8).toFixed(2);t+=`<i style="left:${i}%;--confetti-color:${s[e%s.length]};--confetti-drift:${n}px;--confetti-delay:${r}s;--confetti-duration:${a}s"></i>`}return t+="</div>",t}function oh(){return[{icon:"runner",title:"移动与视角",body:"电脑端用 WASD 移动、Shift 冲刺、鼠标转动视角；手机端用左下摇杆移动，右半屏滑动看四周。前进永远是朝镜头看向的方向。",accent:"#8fe2ce"},{icon:"heart",title:"星星、关押与救援",body:"被鬼碰到 3 次会关进关押区，头顶的星星就是当前被抓次数。自由的逃离者碰到被关押者 5 秒就能救出；累计被关押 3 次才会出局。",accent:"#ff9ebb"},{icon:"map",title:"角色与地图",body:"每局固定 1 个鬼和 5 个逃离者。三张地图分别是火车站、游乐园和庄园，默认随机。躲进灌木、行李或摊位后蹲下，会更难被发现。",accent:"#f6c85f"}]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="160",lh=0,to=1,ch=2,Wl=1,Xl=2,mi=3,Oe=0,Fe=1,Be=2,Li=0,_i=1,$i=2,eo=3,io=4,hh=5,Hi=100,uh=101,dh=102,no=103,so=104,fh=200,ph=201,mh=202,gh=203,la=204,ca=205,vh=206,_h=207,xh=208,yh=209,Mh=210,Sh=211,bh=212,wh=213,Eh=214,Th=0,Ah=1,Ch=2,$s=3,Rh=4,Ph=5,Lh=6,Ih=7,ql=0,Dh=1,Uh=2,Ii=0,Nh=1,kh=2,zh=3,Yl=4,Fh=5,Oh=6,$l=300,An=301,Cn=302,ha=303,ua=304,ar=306,da=1e3,si=1001,fa=1002,ze=1003,ro=1004,_r=1005,je=1006,Bh=1007,Qn=1008,Di=1009,Gh=1010,Hh=1011,Aa=1012,Zl=1013,Ri=1014,Pi=1015,ts=1016,jl=1017,Jl=1018,Wi=1020,Vh=1021,ri=1023,Wh=1024,Xh=1025,Xi=1026,Rn=1027,qh=1028,Kl=1029,Yh=1030,Ql=1031,tc=1033,xr=33776,yr=33777,Mr=33778,Sr=33779,ao=35840,oo=35841,lo=35842,co=35843,ec=36196,ho=37492,uo=37496,fo=37808,po=37809,mo=37810,go=37811,vo=37812,_o=37813,xo=37814,yo=37815,Mo=37816,So=37817,bo=37818,wo=37819,Eo=37820,To=37821,br=36492,Ao=36494,Co=36495,$h=36283,Ro=36284,Po=36285,Lo=36286,ic=3e3,qi=3001,Zh=3200,jh=3201,nc=0,Jh=1,Ke="",ye="srgb",yi="srgb-linear",Ca="display-p3",or="display-p3-linear",Zs="linear",he="srgb",js="rec709",Js="p3",Qi=7680,Io=519,Kh=512,Qh=513,tu=514,sc=515,eu=516,iu=517,nu=518,su=519,pa=35044,Do="300 es",ma=1035,vi=2e3,Ks=2001;class Un{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wr=Math.PI/180,ga=180/Math.PI;function xi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function ru(s,t){return(s%t+t)%t}function Er(s,t,e){return(1-e)*s+e*t}function Uo(s){return(s&s-1)===0&&s!==0}function va(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,n,r,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],x=n[1],v=n[4],M=n[7],P=n[2],A=n[5],R=n[8];return r[0]=a*_+o*x+l*P,r[3]=a*m+o*v+l*A,r[6]=a*f+o*M+l*R,r[1]=c*_+h*x+u*P,r[4]=c*m+h*v+u*A,r[7]=c*f+h*M+u*R,r[2]=d*_+p*x+g*P,r[5]=d*m+p*v+g*A,r[8]=d*f+p*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*c-h*i)*_,t[2]=(o*i-n*a)*_,t[3]=d*_,t[4]=(h*e-n*l)*_,t[5]=(n*r-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tr=new $t;function rc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function au(){const s=Qs("canvas");return s.style.display="block",s}const No={};function Zn(s){s in No||(No[s]=!0,console.warn(s))}const ko=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zo=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[yi]:{transfer:Zs,primaries:js,toReference:s=>s,fromReference:s=>s},[ye]:{transfer:he,primaries:js,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[or]:{transfer:Zs,primaries:Js,toReference:s=>s.applyMatrix3(zo),fromReference:s=>s.applyMatrix3(ko)},[Ca]:{transfer:he,primaries:Js,toReference:s=>s.convertSRGBToLinear().applyMatrix3(zo),fromReference:s=>s.applyMatrix3(ko).convertLinearToSRGB()}},ou=new Set([yi,or]),ne={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ou.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=hs[t].toReference,n=hs[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return hs[s].primaries},getTransfer:function(s){return s===Ke?Zs:hs[s].transfer}};function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let tn;class ac{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tn===void 0&&(tn=Qs("canvas")),tn.width=t.width,tn.height=t.height;const i=tn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=tn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Tn(e[i]/255)*255):e[i]=Tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lu=0;class oc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=xi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Cr(n[a].image)):r.push(Cr(n[a]))}else r=Cr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Cr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ac.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cu=0;class Ge extends Un{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=si,n=si,r=je,a=Qn,o=ri,l=Di,c=Ge.DEFAULT_ANISOTROPY,h=Ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=xi(),this.name="",this.source=new oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qi?ye:Ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?qi:ic}set encoding(t){Zn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qi?ye:Ke}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=$l;Ge.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,n=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(p+1)/2,P=(f+1)/2,A=(h+d)/4,R=(u+_)/4,k=(g+m)/4;return v>M&&v>P?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=A/i,r=R/i):M>P?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=A/n,r=k/n):P<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(P),i=R/r,n=k/r),this.set(i,n,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hu extends Un{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(Zn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qi?ye:Ke),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ge(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends hu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lc extends Ge{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uu extends Ge{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,f*x);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const M=o*x;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),p=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new C,Fo=new as;class Ji{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fn),ds.subVectors(this.max,Fn),en.subVectors(t.a,Fn),nn.subVectors(t.b,Fn),sn.subVectors(t.c,Fn),Si.subVectors(nn,en),bi.subVectors(sn,nn),ki.subVectors(en,sn);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-ki.z,ki.y,Si.z,0,-Si.x,bi.z,0,-bi.x,ki.z,0,-ki.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-ki.y,ki.x,0];return!Pr(e,en,nn,sn,ds)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,en,nn,sn,ds))?!1:(fs.crossVectors(Si,bi),e=[fs.x,fs.y,fs.z],Pr(e,en,nn,sn,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hi=[new C,new C,new C,new C,new C,new C,new C,new C],ti=new C,us=new Ji,en=new C,nn=new C,sn=new C,Si=new C,bi=new C,ki=new C,Fn=new C,ds=new C,fs=new C,zi=new C;function Pr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){zi.fromArray(s,r);const o=n.x*Math.abs(zi.x)+n.y*Math.abs(zi.y)+n.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=i.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const du=new Ji,On=new C,Lr=new C;class Nn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):du.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;On.subVectors(t,this.center);const e=On.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(On,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(On.copy(t.center).add(Lr)),this.expandByPoint(On.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new C,Ir=new C,ps=new C,wi=new C,Dr=new C,ms=new C,Ur=new C;class cc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ir.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Ir);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=wi.dot(this.direction),l=-wi.dot(ps),c=wi.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ir).addScaledVector(ps,d),p}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const i=ui.dot(this.direction),n=ui.dot(ui)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,n,r){Dr.subVectors(e,t),ms.subVectors(i,t),Ur.crossVectors(Dr,ms);let a=this.direction.dot(Ur),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);const l=o*this.direction.dot(ms.crossVectors(wi,ms));if(l<0)return null;const c=o*this.direction.dot(Dr.cross(wi));if(c<0||l+c>a)return null;const h=-o*wi.dot(Ur);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,i,n,r,a,o,l,c,h,u,d,p,g,_,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,i,n,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/rn.setFromMatrixColumn(t,0).length(),r=1/rn.setFromMatrixColumn(t,1).length(),a=1/rn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fu,t,pu)}lookAt(t,e,i){const n=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Ei.crossVectors(i,Ve),Ei.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Ei.crossVectors(i,Ve)),Ei.normalize(),gs.crossVectors(Ve,Ei),n[0]=Ei.x,n[4]=gs.x,n[8]=Ve.x,n[1]=Ei.y,n[5]=gs.y,n[9]=Ve.y,n[2]=Ei.z,n[6]=gs.z,n[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],x=i[3],v=i[7],M=i[11],P=i[15],A=n[0],R=n[4],k=n[8],S=n[12],T=n[1],z=n[5],W=n[9],rt=n[13],D=n[2],F=n[6],H=n[10],j=n[14],$=n[3],X=n[7],et=n[11],it=n[15];return r[0]=a*A+o*T+l*D+c*$,r[4]=a*R+o*z+l*F+c*X,r[8]=a*k+o*W+l*H+c*et,r[12]=a*S+o*rt+l*j+c*it,r[1]=h*A+u*T+d*D+p*$,r[5]=h*R+u*z+d*F+p*X,r[9]=h*k+u*W+d*H+p*et,r[13]=h*S+u*rt+d*j+p*it,r[2]=g*A+_*T+m*D+f*$,r[6]=g*R+_*z+m*F+f*X,r[10]=g*k+_*W+m*H+f*et,r[14]=g*S+_*rt+m*j+f*it,r[3]=x*A+v*T+M*D+P*$,r[7]=x*R+v*z+M*F+P*X,r[11]=x*k+v*W+M*H+P*et,r[15]=x*S+v*rt+M*j+P*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-n*c*u-r*o*d+i*c*d+n*o*p-i*l*p)+_*(+e*l*p-e*c*d+r*a*d-n*a*p+n*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,v=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,M=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,P=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=e*x+i*v+n*M+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=x*R,t[1]=(_*d*r-u*m*r-_*n*p+i*m*p+u*n*f-i*d*f)*R,t[2]=(o*m*r-_*l*r+_*n*c-i*m*c-o*n*f+i*l*f)*R,t[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*p-i*l*p)*R,t[4]=v*R,t[5]=(h*m*r-g*d*r+g*n*p-e*m*p-h*n*f+e*d*f)*R,t[6]=(g*l*r-a*m*r-g*n*c+e*m*c+a*n*f-e*l*f)*R,t[7]=(a*d*r-h*l*r+h*n*c-e*d*c-a*n*p+e*l*p)*R,t[8]=M*R,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*f-e*u*f)*R,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*R,t[12]=P*R,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*R,t[14]=(g*o*n-a*_*n-g*i*l+e*_*l+a*i*m-e*o*m)*R,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*R,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,x=l*c,v=l*h,M=l*u,P=i.x,A=i.y,R=i.z;return n[0]=(1-(_+f))*P,n[1]=(p+M)*P,n[2]=(g-v)*P,n[3]=0,n[4]=(p-M)*A,n[5]=(1-(d+f))*A,n[6]=(m+x)*A,n[7]=0,n[8]=(g+v)*R,n[9]=(m-x)*R,n[10]=(1-(d+_))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=rn.set(n[0],n[1],n[2]).length();const a=rn.set(n[4],n[5],n[6]).length(),o=rn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],ei.copy(this);const c=1/r,h=1/a,u=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,e.setFromRotationMatrix(ei),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=vi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let p,g;if(o===vi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ks)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=vi){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),d=(e+t)*c,p=(i+n)*h;let g,_;if(o===vi)g=(a+r)*u,_=-2*u;else if(o===Ks)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const rn=new C,ei=new Kt,fu=new C(0,0,0),pu=new C(1,1,1),Ei=new C,gs=new C,Ve=new C,Oo=new Kt,Bo=new as;class lr{constructor(t=0,e=0,i=0,n=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mu=0;const Go=new C,an=new as,di=new Kt,vs=new C,Bn=new C,gu=new C,vu=new as,Ho=new C(1,0,0),Vo=new C(0,1,0),Wo=new C(0,0,1),_u={type:"added"},xu={type:"removed"};class Me extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new C,e=new lr,i=new as,n=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Kt},normalMatrix:{value:new $t}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return an.setFromAxisAngle(t,e),this.quaternion.multiply(an),this}rotateOnWorldAxis(t,e){return an.setFromAxisAngle(t,e),this.quaternion.premultiply(an),this}rotateX(t){return this.rotateOnAxis(Ho,t)}rotateY(t){return this.rotateOnAxis(Vo,t)}rotateZ(t){return this.rotateOnAxis(Wo,t)}translateOnAxis(t,e){return Go.copy(t).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ho,t)}translateY(t){return this.translateOnAxis(Vo,t)}translateZ(t){return this.translateOnAxis(Wo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vs.copy(t):vs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Bn,vs,this.up):di.lookAt(vs,Bn,this.up),this.quaternion.setFromRotationMatrix(di),n&&(di.extractRotation(n.matrixWorld),an.setFromRotationMatrix(di),this.quaternion.premultiply(an.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(_u)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,t,gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Me.DEFAULT_UP=new C(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new C,fi=new C,Nr=new C,pi=new C,on=new C,ln=new C,Xo=new C,kr=new C,zr=new C,Fr=new C;let _s=!1;class Je{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ii.subVectors(t,e),n.cross(ii);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){ii.subVectors(n,e),fi.subVectors(i,e),Nr.subVectors(t,e);const a=ii.dot(ii),o=ii.dot(fi),l=ii.dot(Nr),c=fi.dot(fi),h=fi.dot(Nr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(t,e,i,n,r,a,o,l){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(t,e,i,n,r,a,o,l)}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static isFrontFacing(t,e,i,n){return ii.subVectors(i,e),fi.subVectors(t,e),ii.cross(fi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),ii.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),Je.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}getInterpolation(t,e,i,n,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;on.subVectors(n,i),ln.subVectors(r,i),kr.subVectors(t,i);const l=on.dot(kr),c=ln.dot(kr);if(l<=0&&c<=0)return e.copy(i);zr.subVectors(t,n);const h=on.dot(zr),u=ln.dot(zr);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(on,a);Fr.subVectors(t,r);const p=on.dot(Fr),g=ln.dot(Fr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ln,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Xo.subVectors(r,n),o=(u-h)/(u-h+(p-g)),e.copy(n).addScaledVector(Xo,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(i).addScaledVector(on,a).addScaledVector(ln,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Or(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ne.workingColorSpace){if(t=ru(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Or(a,r,t+1/3),this.g=Or(a,r,t),this.b=Or(a,r,t-1/3)}return ne.toWorkingColorSpace(this,n),this}setStyle(t,e=ye){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const i=uc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ne.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ae(Pe.r*255,0,255))*65536+Math.round(Ae(Pe.g*255,0,255))*256+Math.round(Ae(Pe.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Pe.copy(this),e);const i=Pe.r,n=Pe.g,r=Pe.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ye){ne.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,i=Pe.g,n=Pe.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(xs);const i=Er(Ti.h,xs.h,e),n=Er(Ti.s,xs.s,e),r=Er(Ti.l,xs.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Ot;Ot.NAMES=uc;let yu=0;class Ki extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=_i,this.side=Oe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(i.blending=this.blending),this.side!==Oe&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==la&&(i.blendSrc=this.blendSrc),this.blendDst!==ca&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pn extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new C,ys=new st;class Ie{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=pa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pa&&(t.usage=this.usage),t}}class dc extends Ie{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fc extends Ie{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends Ie{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Mu=0;const Ye=new Kt,Br=new Me,cn=new C,We=new Ji,Gn=new Ji,Te=new C;class _e extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rc(t)?fc:dc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,i){return Ye.makeTranslation(t,e,i),this.applyMatrix4(Ye),this}scale(t,e,i){return Ye.makeScale(t,e,i),this.applyMatrix4(Ye),this}lookAt(t){return Br.lookAt(t),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cn).negate(),this.translate(cn.x,cn.y,cn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(We.min,Gn.min),We.expandByPoint(Te),Te.addVectors(We.max,Gn.max),We.expandByPoint(Te)):(We.expandByPoint(Gn.min),We.expandByPoint(Gn.max))}We.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(cn.fromBufferAttribute(t,c),Te.add(cn)),n=Math.max(n,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,r=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new C,h[T]=new C;const u=new C,d=new C,p=new C,g=new st,_=new st,m=new st,f=new C,x=new C;function v(T,z,W){u.fromArray(n,T*3),d.fromArray(n,z*3),p.fromArray(n,W*3),g.fromArray(a,T*2),_.fromArray(a,z*2),m.fromArray(a,W*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const rt=1/(_.x*m.y-m.x*_.y);isFinite(rt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(rt),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(rt),c[T].add(f),c[z].add(f),c[W].add(f),h[T].add(x),h[z].add(x),h[W].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,z=M.length;T<z;++T){const W=M[T],rt=W.start,D=W.count;for(let F=rt,H=rt+D;F<H;F+=3)v(i[F+0],i[F+1],i[F+2])}const P=new C,A=new C,R=new C,k=new C;function S(T){R.fromArray(r,T*3),k.copy(R);const z=c[T];P.copy(z),P.sub(R.multiplyScalar(R.dot(z))).normalize(),A.crossVectors(k,z);const rt=A.dot(h[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=rt}for(let T=0,z=M.length;T<z;++T){const W=M[T],rt=W.start,D=W.count;for(let F=rt,H=rt+D;F<H;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new Kt,Fi=new cc,Ms=new Nn,Yo=new C,hn=new C,un=new C,dn=new C,Gr=new C,Ss=new C,bs=new st,ws=new st,Es=new st,$o=new C,Zo=new C,jo=new C,Ts=new C,As=new C;class pt extends Me{constructor(t=new _e,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Gr.fromBufferAttribute(u,t),a?Ss.addScaledVector(Gr,h):Ss.addScaledVector(Gr.sub(e),h))}e.add(Ss)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(Ms.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Ms,Yo)===null||Fi.origin.distanceToSquared(Yo)>(t.far-t.near)**2))&&(qo.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(qo),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,P=v;M<P;M+=3){const A=o.getX(M),R=o.getX(M+1),k=o.getX(M+2);n=Cs(this,f,t,i,c,h,u,A,R,k),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);n=Cs(this,a,t,i,c,h,u,x,v,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,P=v;M<P;M+=3){const A=M,R=M+1,k=M+2;n=Cs(this,f,t,i,c,h,u,A,R,k),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,M=m+2;n=Cs(this,a,t,i,c,h,u,x,v,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Su(s,t,e,i,n,r,a,o){let l;if(t.side===Fe?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Oe,o),l===null)return null;As.copy(o),As.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(As);return c<e.near||c>e.far?null:{distance:c,point:As.clone(),object:s}}function Cs(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,hn),s.getVertexPosition(l,un),s.getVertexPosition(c,dn);const h=Su(s,t,e,i,hn,un,dn,Ts);if(h){n&&(bs.fromBufferAttribute(n,o),ws.fromBufferAttribute(n,l),Es.fromBufferAttribute(n,c),h.uv=Je.getInterpolation(Ts,hn,un,dn,bs,ws,Es,new st)),r&&(bs.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,l),Es.fromBufferAttribute(r,c),h.uv1=Je.getInterpolation(Ts,hn,un,dn,bs,ws,Es,new st),h.uv2=h.uv1),a&&($o.fromBufferAttribute(a,o),Zo.fromBufferAttribute(a,l),jo.fromBufferAttribute(a,c),h.normal=Je.getInterpolation(Ts,hn,un,dn,$o,Zo,jo,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};Je.getNormal(hn,un,dn,u.normal),h.face=u}return h}class Qe extends _e{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,f,x,v,M,P,A,R,k,S){const T=M/R,z=P/k,W=M/2,rt=P/2,D=A/2,F=R+1,H=k+1;let j=0,$=0;const X=new C;for(let et=0;et<H;et++){const it=et*z-rt;for(let ft=0;ft<F;ft++){const V=ft*T-W;X[_]=V*x,X[m]=it*v,X[f]=D,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[f]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(ft/R),u.push(1-et/k),j+=1}}for(let et=0;et<k;et++)for(let it=0;it<R;it++){const ft=d+it+F*et,V=d+it+F*(et+1),K=d+(it+1)+F*(et+1),mt=d+(it+1)+F*et;l.push(ft,V,mt),l.push(V,K,mt),$+=6}o.addGroup(p,$,S),p+=$,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ln(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ke(s){const t={};for(let e=0;e<s.length;e++){const i=Ln(s[e]);for(const n in i)t[n]=i[n]}return t}function bu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pc(s){return s.getRenderTarget()===null?s.outputColorSpace:ne.workingColorSpace}const wu={clone:Ln,merge:ke};var Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ln(t.uniforms),this.uniformsGroups=bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class mc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xe extends mc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fn=-90,pn=1;class Au extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Xe(fn,pn,t,e);n.layers=this.layers,this.add(n);const r=new Xe(fn,pn,t,e);r.layers=this.layers,this.add(r);const a=new Xe(fn,pn,t,e);a.layers=this.layers,this.add(a);const o=new Xe(fn,pn,t,e);o.layers=this.layers,this.add(o);const l=new Xe(fn,pn,t,e);l.layers=this.layers,this.add(l);const c=new Xe(fn,pn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gc extends Ge{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:An,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cu extends Zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Zn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qi?ye:Ke),this.texture=new gc(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Qe(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Ln(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Li});r.uniforms.tEquirect.value=e;const a=new pt(n,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=je),new Au(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Hr=new C,Ru=new C,Pu=new $t;class Bi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Hr.subVectors(i,e).cross(Ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Hr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Pu.getNormalMatrix(t),n=this.coplanarPoint(Hr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Nn,Rs=new C;class Ra{constructor(t=new Bi,e=new Bi,i=new Bi,n=new Bi,r=new Bi,a=new Bi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],x=n[13],v=n[14],M=n[15];if(i[0].setComponents(l-r,d-c,m-p,M-f).normalize(),i[1].setComponents(l+r,d+c,m+p,M+f).normalize(),i[2].setComponents(l+a,d+h,m+g,M+x).normalize(),i[3].setComponents(l-a,d-h,m-g,M-x).normalize(),i[4].setComponents(l-o,d-u,m-_,M-v).normalize(),e===vi)i[5].setComponents(l+o,d+u,m+_,M+v).normalize();else if(e===Ks)i[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Rs.x=n.normal.x>0?t.max.x:t.min.x,Rs.y=n.normal.y>0?t.max.y:t.min.y,Rs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vc(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Lu(s,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class In extends _e{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-a;for(let v=0;v<c;v++){const M=v*u-r;g.push(M,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,M=x+c*(f+1),P=x+1+c*(f+1),A=x+1+c*f;p.push(v,M,A),p.push(M,P,A)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.widthSegments,t.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ed=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ld=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Id=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Af=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Of=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Bf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Iu,alphahash_pars_fragment:Du,alphamap_fragment:Uu,alphamap_pars_fragment:Nu,alphatest_fragment:ku,alphatest_pars_fragment:zu,aomap_fragment:Fu,aomap_pars_fragment:Ou,batching_pars_vertex:Bu,batching_vertex:Gu,begin_vertex:Hu,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:ju,color_fragment:Ju,color_pars_fragment:Ku,color_pars_vertex:Qu,color_vertex:td,common:ed,cube_uv_reflection_fragment:id,defaultnormal_vertex:nd,displacementmap_pars_vertex:sd,displacementmap_vertex:rd,emissivemap_fragment:ad,emissivemap_pars_fragment:od,colorspace_fragment:ld,colorspace_pars_fragment:cd,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:dd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:Ed,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:vd,fog_pars_fragment:_d,gradientmap_pars_fragment:xd,lightmap_fragment:yd,lightmap_pars_fragment:Md,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:bd,lights_pars_begin:wd,lights_toon_fragment:Td,lights_toon_pars_fragment:Ad,lights_phong_fragment:Cd,lights_phong_pars_fragment:Rd,lights_physical_fragment:Pd,lights_physical_pars_fragment:Ld,lights_fragment_begin:Id,lights_fragment_maps:Dd,lights_fragment_end:Ud,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Fd,map_fragment:Od,map_pars_fragment:Bd,map_particle_fragment:Gd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Wd,morphcolor_vertex:Xd,morphnormal_vertex:qd,morphtarget_pars_vertex:Yd,morphtarget_vertex:$d,normal_fragment_begin:Zd,normal_fragment_maps:jd,normal_pars_fragment:Jd,normal_pars_vertex:Kd,normal_vertex:Qd,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:rf,opaque_fragment:af,packing:of,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:uf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:vf,skinbase_vertex:_f,skinning_pars_vertex:xf,skinning_vertex:yf,skinnormal_vertex:Mf,specularmap_fragment:Sf,specularmap_pars_fragment:bf,tonemapping_fragment:wf,tonemapping_pars_fragment:Ef,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:Cf,uv_pars_vertex:Rf,uv_vertex:Pf,worldpos_vertex:Lf,background_vert:If,background_frag:Df,backgroundCube_vert:Uf,backgroundCube_frag:Nf,cube_vert:kf,cube_frag:zf,depth_vert:Ff,depth_frag:Of,distanceRGBA_vert:Bf,distanceRGBA_frag:Gf,equirect_vert:Hf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:Yf,meshlambert_vert:$f,meshlambert_frag:Zf,meshmatcap_vert:jf,meshmatcap_frag:Jf,meshnormal_vert:Kf,meshnormal_frag:Qf,meshphong_vert:tp,meshphong_frag:ep,meshphysical_vert:ip,meshphysical_frag:np,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:ap,points_frag:op,shadow_vert:lp,shadow_frag:cp,sprite_vert:hp,sprite_frag:up},ct={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},oi={basic:{uniforms:ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:ke([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:ke([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:ke([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:ke([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:ke([ct.points,ct.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:ke([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:ke([ct.common,ct.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:ke([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:ke([ct.sprite,ct.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:ke([ct.common,ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:ke([ct.lights,ct.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};oi.physical={uniforms:ke([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ps={r:0,b:0,g:0};function dp(s,t,e,i,n,r,a){const o=new Ot(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ar)?(h===void 0&&(h=new pt(new Qe(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ln(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ne.getTransfer(v.colorSpace)!==he,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pt(new In(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ln(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ne.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Ps,pc(s)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function fp(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(D,F,H,j,$){let X=!1;if(a){const et=_(j,H,F);c!==et&&(c=et,p(c.object)),X=f(D,j,H,$),X&&x(D,j,H,$)}else{const et=F.wireframe===!0;(c.geometry!==j.id||c.program!==H.id||c.wireframe!==et)&&(c.geometry=j.id,c.program=H.id,c.wireframe=et,X=!0)}$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,k(D,F,H,j),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(D){return i.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,F,H){const j=H.wireframe===!0;let $=o[D.id];$===void 0&&($={},o[D.id]=$);let X=$[F.id];X===void 0&&(X={},$[F.id]=X);let et=X[j];return et===void 0&&(et=m(d()),X[j]=et),et}function m(D){const F=[],H=[],j=[];for(let $=0;$<n;$++)F[$]=0,H[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:j,object:D,attributes:{},index:null}}function f(D,F,H,j){const $=c.attributes,X=F.attributes;let et=0;const it=H.getAttributes();for(const ft in it)if(it[ft].location>=0){const K=$[ft];let mt=X[ft];if(mt===void 0&&(ft==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),ft==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),K===void 0||K.attribute!==mt||mt&&K.data!==mt.data)return!0;et++}return c.attributesNum!==et||c.index!==j}function x(D,F,H,j){const $={},X=F.attributes;let et=0;const it=H.getAttributes();for(const ft in it)if(it[ft].location>=0){let K=X[ft];K===void 0&&(ft==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),ft==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const mt={};mt.attribute=K,K&&K.data&&(mt.data=K.data),$[ft]=mt,et++}c.attributes=$,c.attributesNum=et,c.index=j}function v(){const D=c.newAttributes;for(let F=0,H=D.length;F<H;F++)D[F]=0}function M(D){P(D,0)}function P(D,F){const H=c.newAttributes,j=c.enabledAttributes,$=c.attributeDivisors;H[D]=1,j[D]===0&&(s.enableVertexAttribArray(D),j[D]=1),$[D]!==F&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),$[D]=F)}function A(){const D=c.newAttributes,F=c.enabledAttributes;for(let H=0,j=F.length;H<j;H++)F[H]!==D[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function R(D,F,H,j,$,X,et){et===!0?s.vertexAttribIPointer(D,F,H,$,X):s.vertexAttribPointer(D,F,H,j,$,X)}function k(D,F,H,j){if(i.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const $=j.attributes,X=H.getAttributes(),et=F.defaultAttributeValues;for(const it in X){const ft=X[it];if(ft.location>=0){let V=$[it];if(V===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const K=V.normalized,mt=V.itemSize,bt=e.get(V);if(bt===void 0)continue;const _t=bt.buffer,Lt=bt.type,zt=bt.bytesPerElement,wt=i.isWebGL2===!0&&(Lt===s.INT||Lt===s.UNSIGNED_INT||V.gpuType===Zl);if(V.isInterleavedBufferAttribute){const Ut=V.data,L=Ut.stride,ot=V.offset;if(Ut.isInstancedInterleavedBuffer){for(let Y=0;Y<ft.locationSize;Y++)P(ft.location+Y,Ut.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Y=0;Y<ft.locationSize;Y++)M(ft.location+Y);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Y=0;Y<ft.locationSize;Y++)R(ft.location+Y,mt/ft.locationSize,Lt,K,L*zt,(ot+mt/ft.locationSize*Y)*zt,wt)}else{if(V.isInstancedBufferAttribute){for(let Ut=0;Ut<ft.locationSize;Ut++)P(ft.location+Ut,V.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ut=0;Ut<ft.locationSize;Ut++)M(ft.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Ut=0;Ut<ft.locationSize;Ut++)R(ft.location+Ut,mt/ft.locationSize,Lt,K,mt*zt,mt/ft.locationSize*Ut*zt,wt)}}else if(et!==void 0){const K=et[it];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ft.location,K);break;case 3:s.vertexAttrib3fv(ft.location,K);break;case 4:s.vertexAttrib4fv(ft.location,K);break;default:s.vertexAttrib1fv(ft.location,K)}}}}A()}function S(){W();for(const D in o){const F=o[D];for(const H in F){const j=F[H];for(const $ in j)g(j[$].object),delete j[$];delete F[H]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const F=o[D.id];for(const H in F){const j=F[H];for(const $ in j)g(j[$].object),delete j[$];delete F[H]}delete o[D.id]}function z(D){for(const F in o){const H=o[F];if(H[D.id]===void 0)continue;const j=H[D.id];for(const $ in j)g(j[$].object),delete j[$];delete H[D.id]}}function W(){rt(),h=!0,c!==l&&(c=l,p(c.object))}function rt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:rt,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:M,disableUnusedAttributes:A}}function pp(s,t,e,i){const n=i.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(n)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function mp(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||t.has("OES_texture_float"),P=v&&M,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:A}}function gp(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Bi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:i,v=x*4;let M=f.clippingState||null;l.value=M,M=h(g,d,v,p);for(let P=0;P!==v;++P)M[P]=e[P];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,M=p;v!==_;++v,M+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vp(s){let t=new WeakMap;function e(a,o){return o===ha?a.mapping=An:o===ua&&(a.mapping=Cn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ha||o===ua)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cu(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class _c extends mc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mn=4,Jo=[.125,.215,.35,.446,.526,.582],Vi=20,Vr=new _c,Ko=new Ot;let Wr=null,Xr=0,qr=0;const Gi=(1+Math.sqrt(5))/2,mn=1/Gi,Qo=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Gi,mn),new C(0,Gi,-mn),new C(mn,0,Gi),new C(-mn,0,Gi),new C(Gi,mn,0),new C(-Gi,mn,0)];class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Xr,qr),t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===An||t.mapping===Cn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:ts,format:ri,colorSpace:yi,depthBuffer:!1},n=el(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(r)),this._blurMaterial=xp(r,t,e)}return n}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,i,n){const o=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ko),h.toneMapping=Ii,h.autoClear=!1;const p=new Pn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new pt(new Qe,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ko),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Ls(n,x*v,f>2?v:0,v,v),h.setRenderTarget(n),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===An||t.mapping===Cn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Vr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Qo[(n-1)%Qo.length];this._blur(t,n-1,n,r,a)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pt(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const f=[];let x=0;for(let R=0;R<Vi;++R){const k=R/_,S=Math.exp(-k*k/2);f.push(S),R===0?x+=S:R<m&&(x+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const M=this._sizeLods[n],P=3*M*(n>v-Mn?n-v+Mn:0),A=4*(this._cubeSize-M);Ls(e,P,A,3*M,2*M),l.setRenderTarget(e),l.render(u,Vr)}}function _p(s){const t=[],e=[],i=[];let n=s;const r=s-Mn+1+Jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Mn?l=Jo[a-s+Mn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,k=A>2?0:-1,S=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];x.set(S,_*g*A),v.set(d,m*g*A);const T=[A,A,A,A,A,A];M.set(T,f*g*A)}const P=new _e;P.setAttribute("position",new Ie(x,_)),P.setAttribute("uv",new Ie(v,m)),P.setAttribute("faceIndex",new Ie(M,f)),t.push(P),n>Mn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function el(s,t,e){const i=new Zi(s,t,e);return i.texture.mapping=ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function xp(s,t,e){const i=new Float32Array(Vi),n=new C(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function il(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function nl(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yp(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ha||l===ua,h=l===An||l===Cn;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new tl(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new tl(s));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Mp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Sp(s,t,e,i){const n={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete n[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,M=x.length;v<M;v+=3){const P=x[v+0],A=x[v+1],R=x[v+2];d.push(P,A,A,R,R,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const P=v+0,A=v+1,R=v+2;d.push(P,A,A,R,R,P)}}else return;const m=new(rc(d)?fc:dc)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bp(s,t,e,i){const n=i.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(n)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,_),e.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function wp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Ep(s,t){return s[0]-t[0]}function Tp(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ap(s,t,e){const i={},n=new Float32Array(8),r=new WeakMap,a=new de,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let D=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let k=0;x===!0&&(k=1),v===!0&&(k=2),M===!0&&(k=3);let S=h.attributes.position.count*k,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const z=new Float32Array(S*T*4*g),W=new lc(z,S,T,g);W.type=Pi,W.needsUpdate=!0;const rt=k*4;for(let F=0;F<g;F++){const H=P[F],j=A[F],$=R[F],X=S*T*4*F;for(let et=0;et<H.count;et++){const it=et*rt;x===!0&&(a.fromBufferAttribute(H,et),z[X+it+0]=a.x,z[X+it+1]=a.y,z[X+it+2]=a.z,z[X+it+3]=0),v===!0&&(a.fromBufferAttribute(j,et),z[X+it+4]=a.x,z[X+it+5]=a.y,z[X+it+6]=a.z,z[X+it+7]=0),M===!0&&(a.fromBufferAttribute($,et),z[X+it+8]=a.x,z[X+it+9]=a.y,z[X+it+10]=a.z,z[X+it+11]=$.itemSize===4?a.w:1)}}_={count:g,texture:W,size:new st(S,T)},r.set(h,_),h.addEventListener("dispose",D)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];const f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",f),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<p;v++){const M=g[v];M[0]=v,M[1]=d[v]}g.sort(Tp);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Ep);const _=h.morphAttributes.position,m=h.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const M=o[v],P=M[0],A=M[1];P!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+v)!==_[P]&&h.setAttribute("morphTarget"+v,_[P]),m&&h.getAttribute("morphNormal"+v)!==m[P]&&h.setAttribute("morphNormal"+v,m[P]),n[v]=A,f+=A):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),n[v]=0)}const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function Cp(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class xc extends Ge{constructor(t,e,i,n,r,a,o,l,c,h){if(h=h!==void 0?h:Xi,h!==Xi&&h!==Rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xi&&(i=Ri),i===void 0&&h===Rn&&(i=Wi),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yc=new Ge,Mc=new xc(1,1);Mc.compareFunction=sc;const Sc=new lc,bc=new uu,wc=new gc,sl=[],rl=[],al=new Float32Array(16),ol=new Float32Array(9),ll=new Float32Array(4);function kn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=sl[n];if(r===void 0&&(r=new Float32Array(n),sl[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function cr(s,t){let e=rl[t];e===void 0&&(e=new Int32Array(t),rl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Rp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function Dp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;ll.set(i),s.uniformMatrix2fv(this.addr,!1,ll),be(e,i)}}function Up(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;ol.set(i),s.uniformMatrix3fv(this.addr,!1,ol),be(e,i)}}function Np(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;al.set(i),s.uniformMatrix4fv(this.addr,!1,al),be(e,i)}}function kp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function Fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function Bp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function Wp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const r=this.type===s.SAMPLER_2D_SHADOW?Mc:yc;e.setTexture2D(t||r,n)}function Xp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||bc,n)}function qp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||wc,n)}function Yp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Sc,n)}function $p(s){switch(s){case 5126:return Rp;case 35664:return Pp;case 35665:return Lp;case 35666:return Ip;case 35674:return Dp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return kp;case 35667:case 35671:return zp;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return Gp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Zp(s,t){s.uniform1fv(this.addr,t)}function jp(s,t){const e=kn(t,this.size,2);s.uniform2fv(this.addr,e)}function Jp(s,t){const e=kn(t,this.size,3);s.uniform3fv(this.addr,e)}function Kp(s,t){const e=kn(t,this.size,4);s.uniform4fv(this.addr,e)}function Qp(s,t){const e=kn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function tm(s,t){const e=kn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function em(s,t){const e=kn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function im(s,t){s.uniform1iv(this.addr,t)}function nm(s,t){s.uniform2iv(this.addr,t)}function sm(s,t){s.uniform3iv(this.addr,t)}function rm(s,t){s.uniform4iv(this.addr,t)}function am(s,t){s.uniform1uiv(this.addr,t)}function om(s,t){s.uniform2uiv(this.addr,t)}function lm(s,t){s.uniform3uiv(this.addr,t)}function cm(s,t){s.uniform4uiv(this.addr,t)}function hm(s,t,e){const i=this.cache,n=t.length,r=cr(e,n);Se(i,r)||(s.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||yc,r[a])}function um(s,t,e){const i=this.cache,n=t.length,r=cr(e,n);Se(i,r)||(s.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||bc,r[a])}function dm(s,t,e){const i=this.cache,n=t.length,r=cr(e,n);Se(i,r)||(s.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||wc,r[a])}function fm(s,t,e){const i=this.cache,n=t.length,r=cr(e,n);Se(i,r)||(s.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Sc,r[a])}function pm(s){switch(s){case 5126:return Zp;case 35664:return jp;case 35665:return Jp;case 35666:return Kp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return im;case 35667:case 35671:return nm;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}}class gm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}}class vm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function cl(s,t){s.seq.push(t),s.map[t.id]=t}function _m(s,t,e){const i=s.name,n=i.length;for(Yr.lastIndex=0;;){const r=Yr.exec(i),a=Yr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){cl(e,c===void 0?new mm(o,s,t):new gm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new vm(o),cl(e,u)),e=u}}}class Xs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);_m(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function hl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const xm=37297;let ym=0;function Mm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Sm(s){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(s);let i;switch(t===e?i="":t===Js&&e===js?i="LinearDisplayP3ToLinearSRGB":t===js&&e===Js&&(i="LinearSRGBToLinearDisplayP3"),s){case yi:case or:return[i,"LinearTransferOETF"];case ye:case Ca:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function ul(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Mm(s.getShaderSource(t),a)}else return n}function bm(s,t){const e=Sm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wm(s,t){let e;switch(t){case Nh:e="Linear";break;case kh:e="Reinhard";break;case zh:e="OptimizedCineon";break;case Yl:e="ACESFilmic";break;case Oh:e="AgX";break;case Fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Em(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sn).join(`
`)}function Tm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sn).join(`
`)}function Am(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Cm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Sn(s){return s!==""}function dl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(s){return s.replace(Rm,Lm)}const Pm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lm(s,t){let e=Wt[t];if(e===void 0){const i=Pm.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _a(e)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(s){return s.replace(Im,Dm)}function Dm(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function ml(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Um(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case An:case Cn:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function km(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cn:t="ENVMAP_MODE_REFRACTION";break}return t}function zm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ql:t="ENVMAP_BLENDING_MULTIPLY";break;case Dh:t="ENVMAP_BLENDING_MIX";break;case Uh:t="ENVMAP_BLENDING_ADD";break}return t}function Fm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Om(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Um(e),c=Nm(e),h=km(e),u=zm(e),d=Fm(e),p=e.isWebGL2?"":Em(e),g=Tm(e),_=Am(r),m=n.createProgram();let f,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Sn).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Sn).join(`
`),x.length>0&&(x+=`
`)):(f=[ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sn).join(`
`),x=[p,ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Ii?wm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,bm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sn).join(`
`)),a=_a(a),a=dl(a,e),a=fl(a,e),o=_a(o),o=dl(o,e),o=fl(o,e),a=pl(a),o=pl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=v+f+a,P=v+x+o,A=hl(n,n.VERTEX_SHADER,M),R=hl(n,n.FRAGMENT_SHADER,P);n.attachShader(m,A),n.attachShader(m,R),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function k(W){if(s.debug.checkShaderErrors){const rt=n.getProgramInfoLog(m).trim(),D=n.getShaderInfoLog(A).trim(),F=n.getShaderInfoLog(R).trim();let H=!0,j=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,m,A,R);else{const $=ul(n,A,"vertex"),X=ul(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+$+`
`+X)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(D===""||F==="")&&(j=!1);j&&(W.diagnostics={runnable:H,programLog:rt,vertexShader:{log:D,prefix:f},fragmentShader:{log:F,prefix:x}})}n.deleteShader(A),n.deleteShader(R),S=new Xs(n,m),T=Cm(n,m)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(m,xm)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ym++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}let Bm=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Hm(t),e.set(t,i)),i}}class Hm{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}}function Vm(s,t,e,i,n,r,a){const o=new hc,l=new Gm,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,T,z,W,rt){const D=W.fog,F=rt.geometry,H=S.isMeshStandardMaterial?W.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),$=j&&j.mapping===ar?j.image.height:null,X=g[S.type];S.precision!==null&&(p=n.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=et!==void 0?et.length:0;let ft=0;F.morphAttributes.position!==void 0&&(ft=1),F.morphAttributes.normal!==void 0&&(ft=2),F.morphAttributes.color!==void 0&&(ft=3);let V,K,mt,bt;if(X){const De=oi[X];V=De.vertexShader,K=De.fragmentShader}else V=S.vertexShader,K=S.fragmentShader,l.update(S),mt=l.getVertexShaderID(S),bt=l.getFragmentShaderID(S);const _t=s.getRenderTarget(),Lt=rt.isInstancedMesh===!0,zt=rt.isBatchedMesh===!0,wt=!!S.map,Ut=!!S.matcap,L=!!j,ot=!!S.aoMap,Y=!!S.lightMap,at=!!S.bumpMap,q=!!S.normalMap,Tt=!!S.displacementMap,gt=!!S.emissiveMap,w=!!S.metalnessMap,y=!!S.roughnessMap,N=S.anisotropy>0,nt=S.clearcoat>0,Q=S.iridescence>0,J=S.sheen>0,St=S.transmission>0,ht=N&&!!S.anisotropyMap,xt=nt&&!!S.clearcoatMap,Ct=nt&&!!S.clearcoatNormalMap,Gt=nt&&!!S.clearcoatRoughnessMap,tt=Q&&!!S.iridescenceMap,Qt=Q&&!!S.iridescenceThicknessMap,Zt=J&&!!S.sheenColorMap,Nt=J&&!!S.sheenRoughnessMap,At=!!S.specularMap,Mt=!!S.specularColorMap,Vt=!!S.specularIntensityMap,ee=St&&!!S.transmissionMap,me=St&&!!S.thicknessMap,qt=!!S.gradientMap,lt=!!S.alphaMap,I=S.alphaTest>0,ut=!!S.alphaHash,dt=!!S.extensions,It=!!F.attributes.uv1,Rt=!!F.attributes.uv2,ae=!!F.attributes.uv3;let oe=Ii;return S.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(oe=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:K,defines:S.defines,customVertexShaderID:mt,customFragmentShaderID:bt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:zt,instancing:Lt,instancingColor:Lt&&rt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:yi,map:wt,matcap:Ut,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:$,aoMap:ot,lightMap:Y,bumpMap:at,normalMap:q,displacementMap:d&&Tt,emissiveMap:gt,normalMapObjectSpace:q&&S.normalMapType===Jh,normalMapTangentSpace:q&&S.normalMapType===nc,metalnessMap:w,roughnessMap:y,anisotropy:N,anisotropyMap:ht,clearcoat:nt,clearcoatMap:xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Gt,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:Qt,sheen:J,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:At,specularColorMap:Mt,specularIntensityMap:Vt,transmission:St,transmissionMap:ee,thicknessMap:me,gradientMap:qt,opaque:S.transparent===!1&&S.blending===_i,alphaMap:lt,alphaTest:I,alphaHash:ut,combine:S.combine,mapUv:wt&&_(S.map.channel),aoMapUv:ot&&_(S.aoMap.channel),lightMapUv:Y&&_(S.lightMap.channel),bumpMapUv:at&&_(S.bumpMap.channel),normalMapUv:q&&_(S.normalMap.channel),displacementMapUv:Tt&&_(S.displacementMap.channel),emissiveMapUv:gt&&_(S.emissiveMap.channel),metalnessMapUv:w&&_(S.metalnessMap.channel),roughnessMapUv:y&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:xt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(S.sheenRoughnessMap.channel),specularMapUv:At&&_(S.specularMap.channel),specularColorMapUv:Mt&&_(S.specularColorMap.channel),specularIntensityMapUv:Vt&&_(S.specularIntensityMap.channel),transmissionMapUv:ee&&_(S.transmissionMap.channel),thicknessMapUv:me&&_(S.thicknessMap.channel),alphaMapUv:lt&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(q||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Rt,vertexUv3s:ae,pointsUvs:rt.isPoints===!0&&!!F.attributes.uv&&(wt||lt),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ft,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:wt&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Be,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:dt&&S.extensions.derivatives===!0,extensionFragDepth:dt&&S.extensions.fragDepth===!0,extensionDrawBuffers:dt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)T.push(z),T.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(s.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){const T=g[S.type];let z;if(T){const W=oi[T];z=wu.clone(W.uniforms)}else z=S.uniforms;return z}function P(S,T){let z;for(let W=0,rt=c.length;W<rt;W++){const D=c[W];if(D.cacheKey===T){z=D,++z.usedTimes;break}}return z===void 0&&(z=new Om(s,T,S,r),c.push(z)),z}function A(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:k}}function Wm(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Xm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function gl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Xm),i.length>1&&i.sort(d||gl),n.length>1&&n.sort(d||gl)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function qm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new vl,s.set(i,[a])):n>=r.length?(a=new vl,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ym(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ot};break;case"SpotLight":e={position:new C,direction:new C,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function $m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Zm=0;function jm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Jm(s,t){const e=new Ym,i=$m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);const r=new C,a=new Kt,o=new Kt;function l(h,u){let d=0,p=0,g=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,M=0,P=0,A=0,R=0,k=0,S=0;h.sort(jm);const T=u===!0?Math.PI:1;for(let W=0,rt=h.length;W<rt;W++){const D=h[W],F=D.color,H=D.intensity,j=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*H*T,p+=F.g*H*T,g+=F.b*H*T;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],H);S++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const et=D.shadow,it=i.get(D);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.directionalShadow[_]=it,n.directionalShadowMap[_]=$,n.directionalShadowMatrix[_]=D.shadow.matrix,M++}n.directional[_]=X,_++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(H*T),X.distance=j,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[f]=X;const et=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,et.updateMatrices(D),D.castShadow&&k++),n.spotLightMatrix[f]=et.matrix,D.castShadow){const it=i.get(D);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.spotShadow[f]=it,n.spotShadowMap[f]=$,A++}f++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(F).multiplyScalar(H),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[x]=X,x++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*T),X.distance=D.distance,X.decay=D.decay,D.castShadow){const et=D.shadow,it=i.get(D);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,n.pointShadow[m]=it,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=D.shadow.matrix,P++}n.point[m]=X,m++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(H*T),X.groundColor.copy(D.groundColor).multiplyScalar(H*T),n.hemi[v]=X,v++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const z=n.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==f||z.rectAreaLength!==x||z.hemiLength!==v||z.numDirectionalShadows!==M||z.numPointShadows!==P||z.numSpotShadows!==A||z.numSpotMaps!==R||z.numLightProbes!==S)&&(n.directional.length=_,n.spot.length=f,n.rectArea.length=x,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=A+R-k,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=S,z.directionalLength=_,z.pointLength=m,z.spotLength=f,z.rectAreaLength=x,z.hemiLength=v,z.numDirectionalShadows=M,z.numPointShadows=P,z.numSpotShadows=A,z.numSpotMaps=R,z.numLightProbes=S,n.version=Zm++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const M=h[x];if(M.isDirectionalLight){const P=n.directional[d];P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(M.isSpotLight){const P=n.spot[g];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const P=n.rectArea[_];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const P=n.point[p];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const P=n.hemi[m];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:n}}function _l(s,t){const e=new Jm(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Km(s,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new _l(s,t),e.set(r,[l])):a>=o.length?(l=new _l(s,t),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class Qm extends Ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t0 extends Ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n0(s,t,e){let i=new Ra;const n=new st,r=new st,a=new de,o=new Qm({depthPacking:jh}),l=new t0,c={},h=e.maxTextureSize,u={[Oe]:Fe,[Fe]:Oe,[Be]:Be},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:e0,fragmentShader:i0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let f=this.type;this.render=function(A,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),T=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Li),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const rt=f!==mi&&this.type===mi,D=f===mi&&this.type!==mi;for(let F=0,H=A.length;F<H;F++){const j=A[F],$=j.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);const X=$.getFrameExtents();if(n.multiply(X),r.copy($.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/X.x),n.x=r.x*X.x,$.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/X.y),n.y=r.y*X.y,$.mapSize.y=r.y)),$.map===null||rt===!0||D===!0){const it=this.type!==mi?{minFilter:ze,magFilter:ze}:{};$.map!==null&&$.map.dispose(),$.map=new Zi(n.x,n.y,it),$.map.texture.name=j.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const et=$.getViewportCount();for(let it=0;it<et;it++){const ft=$.getViewport(it);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),W.viewport(a),$.updateMatrices(j,it),i=$.getFrustum(),M(R,k,$.camera,j,this.type)}$.isPointLightShadow!==!0&&this.type===mi&&x($,k),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,T,z)};function x(A,R){const k=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zi(n.x,n.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,k,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,k,p,_,null)}function v(A,R,k,S){let T=null;const z=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)T=z;else if(T=k.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=T.uuid,rt=R.uuid;let D=c[W];D===void 0&&(D={},c[W]=D);let F=D[rt];F===void 0&&(F=T.clone(),D[rt]=F,R.addEventListener("dispose",P)),T=F}if(T.visible=R.visible,T.wireframe=R.wireframe,S===mi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=s.properties.get(T);W.light=k}return T}function M(A,R,k,S,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const rt=t.update(A),D=A.material;if(Array.isArray(D)){const F=rt.groups;for(let H=0,j=F.length;H<j;H++){const $=F[H],X=D[$.materialIndex];if(X&&X.visible){const et=v(A,X,S,T);A.onBeforeShadow(s,A,R,k,rt,et,$),s.renderBufferDirect(k,null,rt,et,A,$),A.onAfterShadow(s,A,R,k,rt,et,$)}}}else if(D.visible){const F=v(A,D,S,T);A.onBeforeShadow(s,A,R,k,rt,F,null),s.renderBufferDirect(k,null,rt,F,A,null),A.onAfterShadow(s,A,R,k,rt,F,null)}}const W=A.children;for(let rt=0,D=W.length;rt<D;rt++)M(W[rt],R,k,S,T)}function P(A){A.target.removeEventListener("dispose",P);for(const k in c){const S=c[k],T=A.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function s0(s,t,e){const i=e.isWebGL2;function n(){let I=!1;const ut=new de;let dt=null;const It=new de(0,0,0,0);return{setMask:function(Rt){dt!==Rt&&!I&&(s.colorMask(Rt,Rt,Rt,Rt),dt=Rt)},setLocked:function(Rt){I=Rt},setClear:function(Rt,ae,oe,we,De){De===!0&&(Rt*=we,ae*=we,oe*=we),ut.set(Rt,ae,oe,we),It.equals(ut)===!1&&(s.clearColor(Rt,ae,oe,we),It.copy(ut))},reset:function(){I=!1,dt=null,It.set(-1,0,0,0)}}}function r(){let I=!1,ut=null,dt=null,It=null;return{setTest:function(Rt){Rt?zt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(Rt){ut!==Rt&&!I&&(s.depthMask(Rt),ut=Rt)},setFunc:function(Rt){if(dt!==Rt){switch(Rt){case Th:s.depthFunc(s.NEVER);break;case Ah:s.depthFunc(s.ALWAYS);break;case Ch:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Rh:s.depthFunc(s.EQUAL);break;case Ph:s.depthFunc(s.GEQUAL);break;case Lh:s.depthFunc(s.GREATER);break;case Ih:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=Rt}},setLocked:function(Rt){I=Rt},setClear:function(Rt){It!==Rt&&(s.clearDepth(Rt),It=Rt)},reset:function(){I=!1,ut=null,dt=null,It=null}}}function a(){let I=!1,ut=null,dt=null,It=null,Rt=null,ae=null,oe=null,we=null,De=null;return{setTest:function(le){I||(le?zt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(le){ut!==le&&!I&&(s.stencilMask(le),ut=le)},setFunc:function(le,Ue,ai){(dt!==le||It!==Ue||Rt!==ai)&&(s.stencilFunc(le,Ue,ai),dt=le,It=Ue,Rt=ai)},setOp:function(le,Ue,ai){(ae!==le||oe!==Ue||we!==ai)&&(s.stencilOp(le,Ue,ai),ae=le,oe=Ue,we=ai)},setLocked:function(le){I=le},setClear:function(le){De!==le&&(s.clearStencil(le),De=le)},reset:function(){I=!1,ut=null,dt=null,It=null,Rt=null,ae=null,oe=null,we=null,De=null}}}const o=new n,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,M=null,P=null,A=null,R=null,k=null,S=new Ot(0,0,0),T=0,z=!1,W=null,rt=null,D=null,F=null,H=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(et)[1]),$=X>=1):et.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),$=X>=2);let it=null,ft={};const V=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),mt=new de().fromArray(V),bt=new de().fromArray(K);function _t(I,ut,dt,It){const Rt=new Uint8Array(4),ae=s.createTexture();s.bindTexture(I,ae),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<dt;oe++)i&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ut,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(ut+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return ae}const Lt={};Lt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Lt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Lt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Lt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(s.DEPTH_TEST),l.setFunc($s),gt(!1),w(to),zt(s.CULL_FACE),q(Li);function zt(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function wt(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Ut(I,ut){return p[I]!==ut?(s.bindFramebuffer(I,ut),p[I]=ut,i&&(I===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ut),I===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ut)),!0):!1}function L(I,ut){let dt=_,It=!1;if(I)if(dt=g.get(ut),dt===void 0&&(dt=[],g.set(ut,dt)),I.isWebGLMultipleRenderTargets){const Rt=I.texture;if(dt.length!==Rt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,oe=Rt.length;ae<oe;ae++)dt[ae]=s.COLOR_ATTACHMENT0+ae;dt.length=Rt.length,It=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,It=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,It=!0);It&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ot(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const Y={[Hi]:s.FUNC_ADD,[uh]:s.FUNC_SUBTRACT,[dh]:s.FUNC_REVERSE_SUBTRACT};if(i)Y[no]=s.MIN,Y[so]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(Y[no]=I.MIN_EXT,Y[so]=I.MAX_EXT)}const at={[fh]:s.ZERO,[ph]:s.ONE,[mh]:s.SRC_COLOR,[la]:s.SRC_ALPHA,[Mh]:s.SRC_ALPHA_SATURATE,[xh]:s.DST_COLOR,[vh]:s.DST_ALPHA,[gh]:s.ONE_MINUS_SRC_COLOR,[ca]:s.ONE_MINUS_SRC_ALPHA,[yh]:s.ONE_MINUS_DST_COLOR,[_h]:s.ONE_MINUS_DST_ALPHA,[Sh]:s.CONSTANT_COLOR,[bh]:s.ONE_MINUS_CONSTANT_COLOR,[wh]:s.CONSTANT_ALPHA,[Eh]:s.ONE_MINUS_CONSTANT_ALPHA};function q(I,ut,dt,It,Rt,ae,oe,we,De,le){if(I===Li){f===!0&&(wt(s.BLEND),f=!1);return}if(f===!1&&(zt(s.BLEND),f=!0),I!==hh){if(I!==x||le!==z){if((v!==Hi||A!==Hi)&&(s.blendEquation(s.FUNC_ADD),v=Hi,A=Hi),le)switch(I){case _i:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $i:s.blendFunc(s.ONE,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case io:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _i:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $i:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case io:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,P=null,R=null,k=null,S.set(0,0,0),T=0,x=I,z=le}return}Rt=Rt||ut,ae=ae||dt,oe=oe||It,(ut!==v||Rt!==A)&&(s.blendEquationSeparate(Y[ut],Y[Rt]),v=ut,A=Rt),(dt!==M||It!==P||ae!==R||oe!==k)&&(s.blendFuncSeparate(at[dt],at[It],at[ae],at[oe]),M=dt,P=It,R=ae,k=oe),(we.equals(S)===!1||De!==T)&&(s.blendColor(we.r,we.g,we.b,De),S.copy(we),T=De),x=I,z=!1}function Tt(I,ut){I.side===Be?wt(s.CULL_FACE):zt(s.CULL_FACE);let dt=I.side===Fe;ut&&(dt=!dt),gt(dt),I.blending===_i&&I.transparent===!1?q(Li):q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const It=I.stencilWrite;c.setTest(It),It&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),N(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?zt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(I){W!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),W=I)}function w(I){I!==lh?(zt(s.CULL_FACE),I!==rt&&(I===to?s.cullFace(s.BACK):I===ch?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),rt=I}function y(I){I!==D&&($&&s.lineWidth(I),D=I)}function N(I,ut,dt){I?(zt(s.POLYGON_OFFSET_FILL),(F!==ut||H!==dt)&&(s.polygonOffset(ut,dt),F=ut,H=dt)):wt(s.POLYGON_OFFSET_FILL)}function nt(I){I?zt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Q(I){I===void 0&&(I=s.TEXTURE0+j-1),it!==I&&(s.activeTexture(I),it=I)}function J(I,ut,dt){dt===void 0&&(it===null?dt=s.TEXTURE0+j-1:dt=it);let It=ft[dt];It===void 0&&(It={type:void 0,texture:void 0},ft[dt]=It),(It.type!==I||It.texture!==ut)&&(it!==dt&&(s.activeTexture(dt),it=dt),s.bindTexture(I,ut||Lt[I]),It.type=I,It.texture=ut)}function St(){const I=ft[it];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(I){mt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function ee(I){bt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),bt.copy(I))}function me(I,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let It=dt.get(I);It===void 0&&(It=s.getUniformBlockIndex(ut,I.name),dt.set(I,It))}function qt(I,ut){const It=u.get(ut).get(I);h.get(ut)!==It&&(s.uniformBlockBinding(ut,It,I.__bindingPointIndex),h.set(ut,It))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},it=null,ft={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,M=null,P=null,A=null,R=null,k=null,S=new Ot(0,0,0),T=0,z=!1,W=null,rt=null,D=null,F=null,H=null,mt.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:zt,disable:wt,bindFramebuffer:Ut,drawBuffers:L,useProgram:ot,setBlending:q,setMaterial:Tt,setFlipSided:gt,setCullFace:w,setLineWidth:y,setPolygonOffset:N,setScissorTest:nt,activeTexture:Q,bindTexture:J,unbindTexture:St,compressedTexImage2D:ht,compressedTexImage3D:xt,texImage2D:At,texImage3D:Mt,updateUBOMapping:me,uniformBlockBinding:qt,texStorage2D:Zt,texStorage3D:Nt,texSubImage2D:Ct,texSubImage3D:Gt,compressedTexSubImage2D:tt,compressedTexSubImage3D:Qt,scissor:Vt,viewport:ee,reset:lt}}function r0(s,t,e,i,n,r,a){const o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return p?new OffscreenCanvas(w,y):Qs("canvas")}function _(w,y,N,nt){let Q=1;if((w.width>nt||w.height>nt)&&(Q=nt/Math.max(w.width,w.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const J=y?va:Math.floor,St=J(Q*w.width),ht=J(Q*w.height);u===void 0&&(u=g(St,ht));const xt=N?g(St,ht):u;return xt.width=St,xt.height=ht,xt.getContext("2d").drawImage(w,0,0,St,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+St+"x"+ht+")."),xt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Uo(w.width)&&Uo(w.height)}function f(w){return o?!1:w.wrapS!==si||w.wrapT!==si||w.minFilter!==ze&&w.minFilter!==je}function x(w,y){return w.generateMipmaps&&y&&w.minFilter!==ze&&w.minFilter!==je}function v(w){s.generateMipmap(w)}function M(w,y,N,nt,Q=!1){if(o===!1)return y;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=y;if(y===s.RED&&(N===s.FLOAT&&(J=s.R32F),N===s.HALF_FLOAT&&(J=s.R16F),N===s.UNSIGNED_BYTE&&(J=s.R8)),y===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(J=s.R8UI),N===s.UNSIGNED_SHORT&&(J=s.R16UI),N===s.UNSIGNED_INT&&(J=s.R32UI),N===s.BYTE&&(J=s.R8I),N===s.SHORT&&(J=s.R16I),N===s.INT&&(J=s.R32I)),y===s.RG&&(N===s.FLOAT&&(J=s.RG32F),N===s.HALF_FLOAT&&(J=s.RG16F),N===s.UNSIGNED_BYTE&&(J=s.RG8)),y===s.RGBA){const St=Q?Zs:ne.getTransfer(nt);N===s.FLOAT&&(J=s.RGBA32F),N===s.HALF_FLOAT&&(J=s.RGBA16F),N===s.UNSIGNED_BYTE&&(J=St===he?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function P(w,y,N){return x(w,N)===!0||w.isFramebufferTexture&&w.minFilter!==ze&&w.minFilter!==je?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){return w===ze||w===ro||w===_r?s.NEAREST:s.LINEAR}function R(w){const y=w.target;y.removeEventListener("dispose",R),S(y),y.isVideoTexture&&h.delete(y)}function k(w){const y=w.target;y.removeEventListener("dispose",k),z(y)}function S(w){const y=i.get(w);if(y.__webglInit===void 0)return;const N=w.source,nt=d.get(N);if(nt){const Q=nt[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(w),Object.keys(nt).length===0&&d.delete(N)}i.remove(w)}function T(w){const y=i.get(w);s.deleteTexture(y.__webglTexture);const N=w.source,nt=d.get(N);delete nt[y.__cacheKey],a.memory.textures--}function z(w){const y=w.texture,N=i.get(w),nt=i.get(y);if(nt.__webglTexture!==void 0&&(s.deleteTexture(nt.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(N.__webglFramebuffer[Q]))for(let J=0;J<N.__webglFramebuffer[Q].length;J++)s.deleteFramebuffer(N.__webglFramebuffer[Q][J]);else s.deleteFramebuffer(N.__webglFramebuffer[Q]);N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer[Q])}else{if(Array.isArray(N.__webglFramebuffer))for(let Q=0;Q<N.__webglFramebuffer.length;Q++)s.deleteFramebuffer(N.__webglFramebuffer[Q]);else s.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&s.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&s.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,J=y.length;Q<J;Q++){const St=i.get(y[Q]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),a.memory.textures--),i.remove(y[Q])}i.remove(y),i.remove(w)}let W=0;function rt(){W=0}function D(){const w=W;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),W+=1,w}function F(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function H(w,y){const N=i.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const nt=w.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(N,w,y);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+y)}function j(w,y){const N=i.get(w);if(w.version>0&&N.__version!==w.version){mt(N,w,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+y)}function $(w,y){const N=i.get(w);if(w.version>0&&N.__version!==w.version){mt(N,w,y);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+y)}function X(w,y){const N=i.get(w);if(w.version>0&&N.__version!==w.version){bt(N,w,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+y)}const et={[da]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},it={[ze]:s.NEAREST,[ro]:s.NEAREST_MIPMAP_NEAREST,[_r]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[Bh]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},ft={[Kh]:s.NEVER,[su]:s.ALWAYS,[Qh]:s.LESS,[sc]:s.LEQUAL,[tu]:s.EQUAL,[nu]:s.GEQUAL,[eu]:s.GREATER,[iu]:s.NOTEQUAL};function V(w,y,N){if(N?(s.texParameteri(w,s.TEXTURE_WRAP_S,et[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,et[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,et[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,it[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,it[y.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==si||y.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,A(y.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==ze&&y.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===ze||y.minFilter!==_r&&y.minFilter!==Qn||y.type===Pi&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===ts&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(s.texParameterf(w,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function K(w,y){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",R));const nt=y.source;let Q=d.get(nt);Q===void 0&&(Q={},d.set(nt,Q));const J=F(y);if(J!==w.__cacheKey){Q[J]===void 0&&(Q[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[J].usedTimes++;const St=Q[w.__cacheKey];St!==void 0&&(Q[w.__cacheKey].usedTimes--,St.usedTimes===0&&T(y)),w.__cacheKey=J,w.__webglTexture=Q[J].texture}return N}function mt(w,y,N){let nt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=s.TEXTURE_3D);const Q=K(w,y),J=y.source;e.bindTexture(nt,w.__webglTexture,s.TEXTURE0+N);const St=i.get(J);if(J.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+N);const ht=ne.getPrimaries(ne.workingColorSpace),xt=y.colorSpace===Ke?null:ne.getPrimaries(y.colorSpace),Ct=y.colorSpace===Ke||ht===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Gt=f(y)&&m(y.image)===!1;let tt=_(y.image,Gt,!1,n.maxTextureSize);tt=gt(y,tt);const Qt=m(tt)||o,Zt=r.convert(y.format,y.colorSpace);let Nt=r.convert(y.type),At=M(y.internalFormat,Zt,Nt,y.colorSpace,y.isVideoTexture);V(nt,y,Qt);let Mt;const Vt=y.mipmaps,ee=o&&y.isVideoTexture!==!0&&At!==ec,me=St.__version===void 0||Q===!0,qt=P(y,tt,Qt);if(y.isDepthTexture)At=s.DEPTH_COMPONENT,o?y.type===Pi?At=s.DEPTH_COMPONENT32F:y.type===Ri?At=s.DEPTH_COMPONENT24:y.type===Wi?At=s.DEPTH24_STENCIL8:At=s.DEPTH_COMPONENT16:y.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Xi&&At===s.DEPTH_COMPONENT&&y.type!==Aa&&y.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ri,Nt=r.convert(y.type)),y.format===Rn&&At===s.DEPTH_COMPONENT&&(At=s.DEPTH_STENCIL,y.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Wi,Nt=r.convert(y.type))),me&&(ee?e.texStorage2D(s.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,At,tt.width,tt.height,0,Zt,Nt,null));else if(y.isDataTexture)if(Vt.length>0&&Qt){ee&&me&&e.texStorage2D(s.TEXTURE_2D,qt,At,Vt[0].width,Vt[0].height);for(let lt=0,I=Vt.length;lt<I;lt++)Mt=Vt[lt],ee?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,Zt,Nt,Mt.data):e.texImage2D(s.TEXTURE_2D,lt,At,Mt.width,Mt.height,0,Zt,Nt,Mt.data);y.generateMipmaps=!1}else ee?(me&&e.texStorage2D(s.TEXTURE_2D,qt,At,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,Zt,Nt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,At,tt.width,tt.height,0,Zt,Nt,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ee&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,qt,At,Vt[0].width,Vt[0].height,tt.depth);for(let lt=0,I=Vt.length;lt<I;lt++)Mt=Vt[lt],y.format!==ri?Zt!==null?ee?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Mt.width,Mt.height,tt.depth,Zt,Mt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,At,Mt.width,Mt.height,tt.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Mt.width,Mt.height,tt.depth,Zt,Nt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,At,Mt.width,Mt.height,tt.depth,0,Zt,Nt,Mt.data)}else{ee&&me&&e.texStorage2D(s.TEXTURE_2D,qt,At,Vt[0].width,Vt[0].height);for(let lt=0,I=Vt.length;lt<I;lt++)Mt=Vt[lt],y.format!==ri?Zt!==null?ee?e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,Zt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,At,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,Zt,Nt,Mt.data):e.texImage2D(s.TEXTURE_2D,lt,At,Mt.width,Mt.height,0,Zt,Nt,Mt.data)}else if(y.isDataArrayTexture)ee?(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,qt,At,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Zt,Nt,tt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,Zt,Nt,tt.data);else if(y.isData3DTexture)ee?(me&&e.texStorage3D(s.TEXTURE_3D,qt,At,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Zt,Nt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,Zt,Nt,tt.data);else if(y.isFramebufferTexture){if(me)if(ee)e.texStorage2D(s.TEXTURE_2D,qt,At,tt.width,tt.height);else{let lt=tt.width,I=tt.height;for(let ut=0;ut<qt;ut++)e.texImage2D(s.TEXTURE_2D,ut,At,lt,I,0,Zt,Nt,null),lt>>=1,I>>=1}}else if(Vt.length>0&&Qt){ee&&me&&e.texStorage2D(s.TEXTURE_2D,qt,At,Vt[0].width,Vt[0].height);for(let lt=0,I=Vt.length;lt<I;lt++)Mt=Vt[lt],ee?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Zt,Nt,Mt):e.texImage2D(s.TEXTURE_2D,lt,At,Zt,Nt,Mt);y.generateMipmaps=!1}else ee?(me&&e.texStorage2D(s.TEXTURE_2D,qt,At,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Zt,Nt,tt)):e.texImage2D(s.TEXTURE_2D,0,At,Zt,Nt,tt);x(y,Qt)&&v(nt),St.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function bt(w,y,N){if(y.image.length!==6)return;const nt=K(w,y),Q=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+N);const J=i.get(Q);if(Q.version!==J.__version||nt===!0){e.activeTexture(s.TEXTURE0+N);const St=ne.getPrimaries(ne.workingColorSpace),ht=y.colorSpace===Ke?null:ne.getPrimaries(y.colorSpace),xt=y.colorSpace===Ke||St===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Ct=y.isCompressedTexture||y.image[0].isCompressedTexture,Gt=y.image[0]&&y.image[0].isDataTexture,tt=[];for(let lt=0;lt<6;lt++)!Ct&&!Gt?tt[lt]=_(y.image[lt],!1,!0,n.maxCubemapSize):tt[lt]=Gt?y.image[lt].image:y.image[lt],tt[lt]=gt(y,tt[lt]);const Qt=tt[0],Zt=m(Qt)||o,Nt=r.convert(y.format,y.colorSpace),At=r.convert(y.type),Mt=M(y.internalFormat,Nt,At,y.colorSpace),Vt=o&&y.isVideoTexture!==!0,ee=J.__version===void 0||nt===!0;let me=P(y,Qt,Zt);V(s.TEXTURE_CUBE_MAP,y,Zt);let qt;if(Ct){Vt&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,me,Mt,Qt.width,Qt.height);for(let lt=0;lt<6;lt++){qt=tt[lt].mipmaps;for(let I=0;I<qt.length;I++){const ut=qt[I];y.format!==ri?Nt!==null?Vt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I,0,0,ut.width,ut.height,Nt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I,Mt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I,0,0,ut.width,ut.height,Nt,At,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I,Mt,ut.width,ut.height,0,Nt,At,ut.data)}}}else{qt=y.mipmaps,Vt&&ee&&(qt.length>0&&me++,e.texStorage2D(s.TEXTURE_CUBE_MAP,me,Mt,tt[0].width,tt[0].height));for(let lt=0;lt<6;lt++)if(Gt){Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,tt[lt].width,tt[lt].height,Nt,At,tt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Mt,tt[lt].width,tt[lt].height,0,Nt,At,tt[lt].data);for(let I=0;I<qt.length;I++){const dt=qt[I].image[lt].image;Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I+1,0,0,dt.width,dt.height,Nt,At,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I+1,Mt,dt.width,dt.height,0,Nt,At,dt.data)}}else{Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,At,tt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Mt,Nt,At,tt[lt]);for(let I=0;I<qt.length;I++){const ut=qt[I];Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I+1,0,0,Nt,At,ut.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I+1,Mt,Nt,At,ut.image[lt])}}}x(y,Zt)&&v(s.TEXTURE_CUBE_MAP),J.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function _t(w,y,N,nt,Q,J){const St=r.convert(N.format,N.colorSpace),ht=r.convert(N.type),xt=M(N.internalFormat,St,ht,N.colorSpace);if(!i.get(y).__hasExternalTextures){const Gt=Math.max(1,y.width>>J),tt=Math.max(1,y.height>>J);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,xt,Gt,tt,y.depth,0,St,ht,null):e.texImage2D(Q,J,xt,Gt,tt,0,St,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),q(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,Q,i.get(N).__webglTexture,0,at(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,Q,i.get(N).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(w,y,N){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let nt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(N||q(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Pi?nt=s.DEPTH_COMPONENT32F:Q.type===Ri&&(nt=s.DEPTH_COMPONENT24));const J=at(y);q(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,nt,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,nt,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,nt,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const nt=at(y);N&&q(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,y.width,y.height):q(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const nt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<nt.length;Q++){const J=nt[Q],St=r.convert(J.format,J.colorSpace),ht=r.convert(J.type),xt=M(J.internalFormat,St,ht,J.colorSpace),Ct=at(y);N&&q(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,xt,y.width,y.height):q(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,xt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,xt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const nt=i.get(y.depthTexture).__webglTexture,Q=at(y);if(y.depthTexture.format===Xi)q(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Rn)q(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function wt(w){const y=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");zt(y.__webglFramebuffer,w)}else if(N){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]=s.createRenderbuffer(),Lt(y.__webglDepthbuffer[nt],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Lt(y.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(w,y,N){const nt=i.get(w);y!==void 0&&_t(nt.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&wt(w)}function L(w){const y=w.texture,N=i.get(w),nt=i.get(y);w.addEventListener("dispose",k),w.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=y.version,a.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,J=w.isWebGLMultipleRenderTargets===!0,St=m(w)||o;if(Q){N.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[ht]=[];for(let xt=0;xt<y.mipmaps.length;xt++)N.__webglFramebuffer[ht][xt]=s.createFramebuffer()}else N.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)N.__webglFramebuffer[ht]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(J)if(n.drawBuffers){const ht=w.texture;for(let xt=0,Ct=ht.length;xt<Ct;xt++){const Gt=i.get(ht[xt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&q(w)===!1){const ht=J?y:[y];N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let xt=0;xt<ht.length;xt++){const Ct=ht[xt];N.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[xt]);const Gt=r.convert(Ct.format,Ct.colorSpace),tt=r.convert(Ct.type),Qt=M(Ct.internalFormat,Gt,tt,Ct.colorSpace,w.isXRRenderTarget===!0),Zt=at(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Qt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,N.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),V(s.TEXTURE_CUBE_MAP,y,St);for(let ht=0;ht<6;ht++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)_t(N.__webglFramebuffer[ht][xt],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else _t(N.__webglFramebuffer[ht],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(y,St)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const ht=w.texture;for(let xt=0,Ct=ht.length;xt<Ct;xt++){const Gt=ht[xt],tt=i.get(Gt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),V(s.TEXTURE_2D,Gt,St),_t(N.__webglFramebuffer,w,Gt,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),x(Gt,St)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ht=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,nt.__webglTexture),V(ht,y,St),o&&y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)_t(N.__webglFramebuffer[xt],w,y,s.COLOR_ATTACHMENT0,ht,xt);else _t(N.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,ht,0);x(y,St)&&v(ht),e.unbindTexture()}w.depthBuffer&&wt(w)}function ot(w){const y=m(w)||o,N=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0,Q=N.length;nt<Q;nt++){const J=N[nt];if(x(J,y)){const St=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ht=i.get(J).__webglTexture;e.bindTexture(St,ht),v(St),e.unbindTexture()}}}function Y(w){if(o&&w.samples>0&&q(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],N=w.width,nt=w.height;let Q=s.COLOR_BUFFER_BIT;const J=[],St=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=i.get(w),xt=w.isWebGLMultipleRenderTargets===!0;if(xt)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){J.push(s.COLOR_ATTACHMENT0+Ct),w.depthBuffer&&J.push(St);const Gt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Gt===!1&&(w.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),xt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Ct]),Gt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[St]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[St])),xt){const tt=i.get(y[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,N,nt,0,0,N,nt,Q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Ct]);const Gt=i.get(y[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function at(w){return Math.min(n.maxSamples,w.samples)}function q(w){const y=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(w){const y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function gt(w,y){const N=w.colorSpace,nt=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ma||N!==yi&&N!==Ke&&(ne.getTransfer(N)===he?o===!1?t.has("EXT_sRGB")===!0&&nt===ri?(w.format=ma,w.minFilter=je,w.generateMipmaps=!1):y=ac.sRGBToLinear(y):(nt!==ri||Q!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}this.allocateTextureUnit=D,this.resetTextureUnits=rt,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Ut,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=q}function a0(s,t,e){const i=e.isWebGL2;function n(r,a=Ke){let o;const l=ne.getTransfer(a);if(r===Di)return s.UNSIGNED_BYTE;if(r===jl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gh)return s.BYTE;if(r===Hh)return s.SHORT;if(r===Aa)return s.UNSIGNED_SHORT;if(r===Zl)return s.INT;if(r===Ri)return s.UNSIGNED_INT;if(r===Pi)return s.FLOAT;if(r===ts)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Vh)return s.ALPHA;if(r===ri)return s.RGBA;if(r===Wh)return s.LUMINANCE;if(r===Xh)return s.LUMINANCE_ALPHA;if(r===Xi)return s.DEPTH_COMPONENT;if(r===Rn)return s.DEPTH_STENCIL;if(r===ma)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===qh)return s.RED;if(r===Kl)return s.RED_INTEGER;if(r===Yh)return s.RG;if(r===Ql)return s.RG_INTEGER;if(r===tc)return s.RGBA_INTEGER;if(r===xr||r===yr||r===Mr||r===Sr)if(l===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===xr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===xr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ao||r===oo||r===lo||r===co)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ao)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ec)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ho||r===uo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ho)return l===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===uo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fo||r===po||r===mo||r===go||r===vo||r===_o||r===xo||r===yo||r===Mo||r===So||r===bo||r===wo||r===Eo||r===To)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===fo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===po)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===go)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_o)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===So)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eo)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===To)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===br||r===Ao||r===Co)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===br)return l===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ao)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Co)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===Ro||r===Po||r===Lo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===br)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ro)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Po)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wi?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class o0 extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l0={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class c0 extends Un{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const x=[],v=[],M=new st;let P=null;const A=new Xe;A.layers.enable(1),A.viewport=new de;const R=new Xe;R.layers.enable(2),R.viewport=new de;const k=[A,R],S=new o0;S.layers.enable(1),S.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=x[V];return K===void 0&&(K=new $r,x[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=x[V];return K===void 0&&(K=new $r,x[V]=K),K.getGripSpace()},this.getHand=function(V){let K=x[V];return K===void 0&&(K=new $r,x[V]=K),K.getHandSpace()};function W(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const mt=x[K];mt!==void 0&&(mt.update(V.inputSource,V.frame,c||a),mt.dispatchEvent({type:V.type,data:V.inputSource}))}function rt(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",rt),n.removeEventListener("inputsourceschange",D);for(let V=0;V<x.length;V++){const K=v[V];K!==null&&(v[V]=null,x[V].disconnect(K))}T=null,z=null,t.setRenderTarget(m),p=null,d=null,u=null,n=null,f=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",rt),n.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(M),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,K),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Zi(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,mt=null,bt=null;_.depth&&(bt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?Rn:Xi,mt=_.stencil?Wi:Ri);const _t={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(_t),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Zi(d.textureWidth,d.textureHeight,{format:ri,type:Di,depthTexture:new xc(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Lt=t.properties.get(f);Lt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ft.setContext(n),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function D(V){for(let K=0;K<V.removed.length;K++){const mt=V.removed[K],bt=v.indexOf(mt);bt>=0&&(v[bt]=null,x[bt].disconnect(mt))}for(let K=0;K<V.added.length;K++){const mt=V.added[K];let bt=v.indexOf(mt);if(bt===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=v.length){v.push(mt),bt=Lt;break}else if(v[Lt]===null){v[Lt]=mt,bt=Lt;break}if(bt===-1)break}const _t=x[bt];_t&&_t.connect(mt)}}const F=new C,H=new C;function j(V,K,mt){F.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(mt.matrixWorld);const bt=F.distanceTo(H),_t=K.projectionMatrix.elements,Lt=mt.projectionMatrix.elements,zt=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),Ut=(_t[9]+1)/_t[5],L=(_t[9]-1)/_t[5],ot=(_t[8]-1)/_t[0],Y=(Lt[8]+1)/Lt[0],at=zt*ot,q=zt*Y,Tt=bt/(-ot+Y),gt=Tt*-ot;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(gt),V.translateZ(Tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=zt+Tt,y=wt+Tt,N=at-gt,nt=q+(bt-gt),Q=Ut*wt/y*w,J=L*wt/y*w;V.projectionMatrix.makePerspective(N,nt,Q,J,w,y),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function $(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;S.near=R.near=A.near=V.near,S.far=R.far=A.far=V.far,(T!==S.near||z!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,z=S.far);const K=V.parent,mt=S.cameras;$(S,K);for(let bt=0;bt<mt.length;bt++)$(mt[bt],K);mt.length===2?j(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),X(V,S,K)};function X(V,K,mt){mt===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ga*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let et=null;function it(V,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let bt=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,bt=!0);for(let _t=0;_t<mt.length;_t++){const Lt=mt[_t];let zt=null;if(p!==null)zt=p.getViewport(Lt);else{const Ut=u.getViewSubImage(d,Lt);zt=Ut.viewport,_t===0&&(t.setRenderTargetTextures(f,Ut.colorTexture,d.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(f))}let wt=k[_t];wt===void 0&&(wt=new Xe,wt.layers.enable(_t),wt.viewport=new de,k[_t]=wt),wt.matrix.fromArray(Lt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Lt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(zt.x,zt.y,zt.width,zt.height),_t===0&&(S.matrix.copy(wt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),bt===!0&&S.cameras.push(wt)}}for(let mt=0;mt<x.length;mt++){const bt=v[mt],_t=x[mt];bt!==null&&_t!==void 0&&_t.update(bt,K,c||a)}et&&et(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const ft=new vc;ft.setAnimationLoop(it),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}function h0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,pc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function u0(s,t,e,i){let n={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;i.uniformBlockBinding(x,M)}function c(x,v){let M=n[x.id];M===void 0&&(g(x),M=h(x),n[x.id]=M,x.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(x,P);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const M=s.createBuffer(),P=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=n[x.id],M=x.uniforms,P=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,R=M.length;A<R;A++){const k=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,T=k.length;S<T;S++){const z=k[S];if(p(z,A,S,P)===!0){const W=z.__offset,rt=Array.isArray(z.value)?z.value:[z.value];let D=0;for(let F=0;F<rt.length;F++){const H=rt[F],j=_(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,W+D,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,D),D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,v,M,P){const A=x.value,R=v+"_"+M;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{const k=P[R];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return P[R]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(x){const v=x.uniforms;let M=0;const P=16;for(let R=0,k=v.length;R<k;R++){const S=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,z=S.length;T<z;T++){const W=S[T],rt=Array.isArray(W.value)?W.value:[W.value];for(let D=0,F=rt.length;D<F;D++){const H=rt[D],j=_(H),$=M%P;$!==0&&P-$<j.boundary&&(M+=P-$),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=j.storage}}}const A=M%P;return A>0&&(M+=P-A),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function f(){for(const x in n)s.deleteBuffer(n[x]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}class Ec{constructor(t={}){const{canvas:e=au(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;const v=this;let M=!1,P=0,A=0,R=null,k=-1,S=null;const T=new de,z=new de;let W=null;const rt=new Ot(0);let D=0,F=e.width,H=e.height,j=1,$=null,X=null;const et=new de(0,0,F,H),it=new de(0,0,F,H);let ft=!1;const V=new Ra;let K=!1,mt=!1,bt=null;const _t=new Kt,Lt=new st,zt=new C,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return R===null?j:1}let L=i;function ot(E,U){for(let B=0;B<E.length;B++){const G=E[B],O=e.getContext(G,U);if(O!==null)return O}return null}try{const E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ta}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ut,!1),L===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),L=ot(U,E),L===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Y,at,q,Tt,gt,w,y,N,nt,Q,J,St,ht,xt,Ct,Gt,tt,Qt,Zt,Nt,At,Mt,Vt,ee;function me(){Y=new Mp(L),at=new mp(L,Y,t),Y.init(at),Mt=new a0(L,Y,at),q=new s0(L,Y,at),Tt=new wp(L),gt=new Wm,w=new r0(L,Y,q,gt,at,Mt,Tt),y=new vp(v),N=new yp(v),nt=new Lu(L,at),Vt=new fp(L,Y,nt,at),Q=new Sp(L,nt,Tt,Vt),J=new Cp(L,Q,nt,Tt),Zt=new Ap(L,at,w),Gt=new gp(gt),St=new Vm(v,y,N,Y,at,Vt,Gt),ht=new h0(v,gt),xt=new qm,Ct=new Km(Y,at),Qt=new dp(v,y,N,q,J,d,l),tt=new n0(v,J,at),ee=new u0(L,Tt,at,q),Nt=new pp(L,Y,Tt,at),At=new bp(L,Y,Tt,at),Tt.programs=St.programs,v.capabilities=at,v.extensions=Y,v.properties=gt,v.renderLists=xt,v.shadowMap=tt,v.state=q,v.info=Tt}me();const qt=new c0(v,L);this.xr=qt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(F,H,!1))},this.getSize=function(E){return E.set(F,H)},this.setSize=function(E,U,B=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,H=U,e.width=Math.floor(E*j),e.height=Math.floor(U*j),B===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(F*j,H*j).floor()},this.setDrawingBufferSize=function(E,U,B){F=E,H=U,j=B,e.width=Math.floor(E*B),e.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,U,B,G){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,U,B,G),q.viewport(T.copy(et).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,U,B,G){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,U,B,G),q.scissor(z.copy(it).multiplyScalar(j).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(E){q.setScissorTest(ft=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(E=!0,U=!0,B=!0){let G=0;if(E){let O=!1;if(R!==null){const vt=R.texture.format;O=vt===tc||vt===Ql||vt===Kl}if(O){const vt=R.texture.type,Et=vt===Di||vt===Ri||vt===Aa||vt===Wi||vt===jl||vt===Jl,Pt=Qt.getClearColor(),Dt=Qt.getClearAlpha(),Xt=Pt.r,Ft=Pt.g,Ht=Pt.b;Et?(p[0]=Xt,p[1]=Ft,p[2]=Ht,p[3]=Dt,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Xt,g[1]=Ft,g[2]=Ht,g[3]=Dt,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),B&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),xt.dispose(),Ct.dispose(),gt.dispose(),y.dispose(),N.dispose(),J.dispose(),Vt.dispose(),ee.dispose(),St.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",De),qt.removeEventListener("sessionend",le),bt&&(bt.dispose(),bt=null),Ue.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=Tt.autoReset,U=tt.enabled,B=tt.autoUpdate,G=tt.needsUpdate,O=tt.type;me(),Tt.autoReset=E,tt.enabled=U,tt.autoUpdate=B,tt.needsUpdate=G,tt.type=O}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){const U=E.target;U.removeEventListener("dispose",dt),It(U)}function It(E){Rt(E),gt.remove(E)}function Rt(E){const U=gt.get(E).programs;U!==void 0&&(U.forEach(function(B){St.releaseProgram(B)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,G,O,vt){U===null&&(U=wt);const Et=O.isMesh&&O.matrixWorld.determinant()<0,Pt=Wc(E,U,B,G,O);q.setMaterial(G,Et);let Dt=B.index,Xt=1;if(G.wireframe===!0){if(Dt=Q.getWireframeAttribute(B),Dt===void 0)return;Xt=2}const Ft=B.drawRange,Ht=B.attributes.position;let ve=Ft.start*Xt,He=(Ft.start+Ft.count)*Xt;vt!==null&&(ve=Math.max(ve,vt.start*Xt),He=Math.min(He,(vt.start+vt.count)*Xt)),Dt!==null?(ve=Math.max(ve,0),He=Math.min(He,Dt.count)):Ht!=null&&(ve=Math.max(ve,0),He=Math.min(He,Ht.count));const Ee=He-ve;if(Ee<0||Ee===1/0)return;Vt.setup(O,G,Pt,B,Dt);let ci,fe=Nt;if(Dt!==null&&(ci=nt.get(Dt),fe=At,fe.setIndex(ci)),O.isMesh)G.wireframe===!0?(q.setLineWidth(G.wireframeLinewidth*Ut()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(O.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),q.setLineWidth(Yt*Ut()),O.isLineSegments?fe.setMode(L.LINES):O.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else O.isPoints?fe.setMode(L.POINTS):O.isSprite&&fe.setMode(L.TRIANGLES);if(O.isBatchedMesh)fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)fe.renderInstances(ve,Ee,O.count);else if(B.isInstancedBufferGeometry){const Yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,fr=Math.min(B.instanceCount,Yt);fe.renderInstances(ve,Ee,fr)}else fe.render(ve,Ee)};function ae(E,U,B){E.transparent===!0&&E.side===Be&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,ls(E,U,B),E.side=Oe,E.needsUpdate=!0,ls(E,U,B),E.side=Be):ls(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),m=Ct.get(B),m.init(),x.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==B&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights);const G=new Set;return E.traverse(function(O){const vt=O.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){const Pt=vt[Et];ae(Pt,B,O),G.add(Pt)}else ae(vt,B,O),G.add(vt)}),x.pop(),m=null,G},this.compileAsync=function(E,U,B=null){const G=this.compile(E,U,B);return new Promise(O=>{function vt(){if(G.forEach(function(Et){gt.get(Et).currentProgram.isReady()&&G.delete(Et)}),G.size===0){O(E);return}setTimeout(vt,10)}Y.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let oe=null;function we(E){oe&&oe(E)}function De(){Ue.stop()}function le(){Ue.start()}const Ue=new vc;Ue.setAnimationLoop(we),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(E){oe=E,qt.setAnimationLoop(E),E===null?Ue.stop():Ue.start()},qt.addEventListener("sessionstart",De),qt.addEventListener("sessionend",le),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(U),U=qt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,R),m=Ct.get(E,x.length),m.init(),x.push(m),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(_t),mt=this.localClippingEnabled,K=Gt.init(this.clippingPlanes,mt),_=xt.get(E,f.length),_.init(),f.push(_),ai(E,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,X),this.info.render.frame++,K===!0&&Gt.beginShadows();const B=m.state.shadowsArray;if(tt.render(B,E,U),K===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qt.render(_,E),m.setupLights(v._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let O=0,vt=G.length;O<vt;O++){const Et=G[O];Ha(_,E,Et,Et.viewport)}}else Ha(_,E,U);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,U),Vt.resetDefaultState(),k=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ai(E,U,B,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){G&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const Et=J.update(E),Pt=E.material;Pt.visible&&_.push(E,Et,Pt,B,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const Et=J.update(E),Pt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Pt)){const Dt=Et.groups;for(let Xt=0,Ft=Dt.length;Xt<Ft;Xt++){const Ht=Dt[Xt],ve=Pt[Ht.materialIndex];ve&&ve.visible&&_.push(E,Et,ve,B,zt.z,Ht)}}else Pt.visible&&_.push(E,Et,Pt,B,zt.z,null)}}const vt=E.children;for(let Et=0,Pt=vt.length;Et<Pt;Et++)ai(vt[Et],U,B,G)}function Ha(E,U,B,G){const O=E.opaque,vt=E.transmissive,Et=E.transparent;m.setupLightsView(B),K===!0&&Gt.setGlobalState(v.clippingPlanes,B),vt.length>0&&Vc(O,vt,U,B),G&&q.viewport(T.copy(G)),O.length>0&&os(O,U,B),vt.length>0&&os(vt,U,B),Et.length>0&&os(Et,U,B),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Vc(E,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const vt=at.isWebGL2;bt===null&&(bt=new Zi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?ts:Di,minFilter:Qn,samples:vt?4:0})),v.getDrawingBufferSize(Lt),vt?bt.setSize(Lt.x,Lt.y):bt.setSize(va(Lt.x),va(Lt.y));const Et=v.getRenderTarget();v.setRenderTarget(bt),v.getClearColor(rt),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Pt=v.toneMapping;v.toneMapping=Ii,os(E,B,G),w.updateMultisampleRenderTarget(bt),w.updateRenderTargetMipmap(bt);let Dt=!1;for(let Xt=0,Ft=U.length;Xt<Ft;Xt++){const Ht=U[Xt],ve=Ht.object,He=Ht.geometry,Ee=Ht.material,ci=Ht.group;if(Ee.side===Be&&ve.layers.test(G.layers)){const fe=Ee.side;Ee.side=Fe,Ee.needsUpdate=!0,Va(ve,B,G,He,Ee,ci),Ee.side=fe,Ee.needsUpdate=!0,Dt=!0}}Dt===!0&&(w.updateMultisampleRenderTarget(bt),w.updateRenderTargetMipmap(bt)),v.setRenderTarget(Et),v.setClearColor(rt,D),v.toneMapping=Pt}function os(E,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,vt=E.length;O<vt;O++){const Et=E[O],Pt=Et.object,Dt=Et.geometry,Xt=G===null?Et.material:G,Ft=Et.group;Pt.layers.test(B.layers)&&Va(Pt,U,B,Dt,Xt,Ft)}}function Va(E,U,B,G,O,vt){E.onBeforeRender(v,U,B,G,O,vt),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,U,B,G,E,vt),O.transparent===!0&&O.side===Be&&O.forceSinglePass===!1?(O.side=Fe,O.needsUpdate=!0,v.renderBufferDirect(B,U,G,O,E,vt),O.side=Oe,O.needsUpdate=!0,v.renderBufferDirect(B,U,G,O,E,vt),O.side=Be):v.renderBufferDirect(B,U,G,O,E,vt),E.onAfterRender(v,U,B,G,O,vt)}function ls(E,U,B){U.isScene!==!0&&(U=wt);const G=gt.get(E),O=m.state.lights,vt=m.state.shadowsArray,Et=O.state.version,Pt=St.getParameters(E,O.state,vt,U,B),Dt=St.getProgramCacheKey(Pt);let Xt=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?N:y).get(E.envMap||G.environment),Xt===void 0&&(E.addEventListener("dispose",dt),Xt=new Map,G.programs=Xt);let Ft=Xt.get(Dt);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===Et)return Xa(E,Pt),Ft}else Pt.uniforms=St.getUniforms(E),E.onBuild(B,Pt,v),E.onBeforeCompile(Pt,v),Ft=St.acquireProgram(Pt,Dt),Xt.set(Dt,Ft),G.uniforms=Pt.uniforms;const Ht=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=Gt.uniform),Xa(E,Pt),G.needsLights=qc(E),G.lightsStateVersion=Et,G.needsLights&&(Ht.ambientLightColor.value=O.state.ambient,Ht.lightProbe.value=O.state.probe,Ht.directionalLights.value=O.state.directional,Ht.directionalLightShadows.value=O.state.directionalShadow,Ht.spotLights.value=O.state.spot,Ht.spotLightShadows.value=O.state.spotShadow,Ht.rectAreaLights.value=O.state.rectArea,Ht.ltc_1.value=O.state.rectAreaLTC1,Ht.ltc_2.value=O.state.rectAreaLTC2,Ht.pointLights.value=O.state.point,Ht.pointLightShadows.value=O.state.pointShadow,Ht.hemisphereLights.value=O.state.hemi,Ht.directionalShadowMap.value=O.state.directionalShadowMap,Ht.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ht.spotShadowMap.value=O.state.spotShadowMap,Ht.spotLightMatrix.value=O.state.spotLightMatrix,Ht.spotLightMap.value=O.state.spotLightMap,Ht.pointShadowMap.value=O.state.pointShadowMap,Ht.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function Wa(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Xa(E,U){const B=gt.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Wc(E,U,B,G,O){U.isScene!==!0&&(U=wt),w.resetTextureUnits();const vt=U.fog,Et=G.isMeshStandardMaterial?U.environment:null,Pt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yi,Dt=(G.isMeshStandardMaterial?N:y).get(G.envMap||Et),Xt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ft=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ht=!!B.morphAttributes.position,ve=!!B.morphAttributes.normal,He=!!B.morphAttributes.color;let Ee=Ii;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const ci=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=ci!==void 0?ci.length:0,Yt=gt.get(G),fr=m.state.lights;if(K===!0&&(mt===!0||E!==S)){const qe=E===S&&G.id===k;Gt.setState(G,E,qe)}let ge=!1;G.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==fr.state.version||Yt.outputColorSpace!==Pt||O.isBatchedMesh&&Yt.batching===!1||!O.isBatchedMesh&&Yt.batching===!0||O.isInstancedMesh&&Yt.instancing===!1||!O.isInstancedMesh&&Yt.instancing===!0||O.isSkinnedMesh&&Yt.skinning===!1||!O.isSkinnedMesh&&Yt.skinning===!0||O.isInstancedMesh&&Yt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Yt.instancingColor===!1&&O.instanceColor!==null||Yt.envMap!==Dt||G.fog===!0&&Yt.fog!==vt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Gt.numPlanes||Yt.numIntersection!==Gt.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==Ft||Yt.morphTargets!==Ht||Yt.morphNormals!==ve||Yt.morphColors!==He||Yt.toneMapping!==Ee||at.isWebGL2===!0&&Yt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Yt.__version=G.version);let Ui=Yt.currentProgram;ge===!0&&(Ui=ls(G,U,O));let qa=!1,zn=!1,pr=!1;const Ce=Ui.getUniforms(),Ni=Yt.uniforms;if(q.useProgram(Ui.program)&&(qa=!0,zn=!0,pr=!0),G.id!==k&&(k=G.id,zn=!0),qa||S!==E){Ce.setValue(L,"projectionMatrix",E.projectionMatrix),Ce.setValue(L,"viewMatrix",E.matrixWorldInverse);const qe=Ce.map.cameraPosition;qe!==void 0&&qe.setValue(L,zt.setFromMatrixPosition(E.matrixWorld)),at.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,zn=!0,pr=!0)}if(O.isSkinnedMesh){Ce.setOptional(L,O,"bindMatrix"),Ce.setOptional(L,O,"bindMatrixInverse");const qe=O.skeleton;qe&&(at.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),Ce.setValue(L,"boneTexture",qe.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Ce.setOptional(L,O,"batchingTexture"),Ce.setValue(L,"batchingTexture",O._matricesTexture,w));const mr=B.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0&&at.isWebGL2===!0)&&Zt.update(O,B,Ui),(zn||Yt.receiveShadow!==O.receiveShadow)&&(Yt.receiveShadow=O.receiveShadow,Ce.setValue(L,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ni.envMap.value=Dt,Ni.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),zn&&(Ce.setValue(L,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&Xc(Ni,pr),vt&&G.fog===!0&&ht.refreshFogUniforms(Ni,vt),ht.refreshMaterialUniforms(Ni,G,j,H,bt),Xs.upload(L,Wa(Yt),Ni,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Xs.upload(L,Wa(Yt),Ni,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ce.setValue(L,"center",O.center),Ce.setValue(L,"modelViewMatrix",O.modelViewMatrix),Ce.setValue(L,"normalMatrix",O.normalMatrix),Ce.setValue(L,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qe=G.uniformsGroups;for(let gr=0,Yc=qe.length;gr<Yc;gr++)if(at.isWebGL2){const Ya=qe[gr];ee.update(Ya,Ui),ee.bind(Ya,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Xc(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function qc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,B){gt.get(E.texture).__webglTexture=U,gt.get(E.depthTexture).__webglTexture=B;const G=gt.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const B=gt.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){R=E,P=U,A=B;let G=!0,O=null,vt=!1,Et=!1;if(E){const Dt=gt.get(E);Dt.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(L.FRAMEBUFFER,null),G=!1):Dt.__webglFramebuffer===void 0?w.setupRenderTarget(E):Dt.__hasExternalTextures&&w.rebindTextures(E,gt.get(E.texture).__webglTexture,gt.get(E.depthTexture).__webglTexture);const Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Et=!0);const Ft=gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?O=Ft[U][B]:O=Ft[U],vt=!0):at.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?O=gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[B]:O=Ft,T.copy(E.viewport),z.copy(E.scissor),W=E.scissorTest}else T.copy(et).multiplyScalar(j).floor(),z.copy(it).multiplyScalar(j).floor(),W=ft;if(q.bindFramebuffer(L.FRAMEBUFFER,O)&&at.drawBuffers&&G&&q.drawBuffers(E,O),q.viewport(T),q.scissor(z),q.setScissorTest(W),vt){const Dt=gt.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt.__webglTexture,B)}else if(Et){const Dt=gt.get(E.texture),Xt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,B||0,Xt)}k=-1},this.readRenderTargetPixels=function(E,U,B,G,O,vt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){q.bindFramebuffer(L.FRAMEBUFFER,Pt);try{const Dt=E.texture,Xt=Dt.format,Ft=Dt.type;if(Xt!==ri&&Mt.convert(Xt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Ft===ts&&(Y.has("EXT_color_buffer_half_float")||at.isWebGL2&&Y.has("EXT_color_buffer_float"));if(Ft!==Di&&Mt.convert(Ft)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Pi&&(at.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&B>=0&&B<=E.height-O&&L.readPixels(U,B,G,O,Mt.convert(Xt),Mt.convert(Ft),vt)}finally{const Dt=R!==null?gt.get(R).__webglFramebuffer:null;q.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(E,U,B=0){const G=Math.pow(2,-B),O=Math.floor(U.image.width*G),vt=Math.floor(U.image.height*G);w.setTexture2D(U,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,E.x,E.y,O,vt),q.unbindTexture()},this.copyTextureToTexture=function(E,U,B,G=0){const O=U.image.width,vt=U.image.height,Et=Mt.convert(B.format),Pt=Mt.convert(B.type);w.setTexture2D(B,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,E.x,E.y,O,vt,Et,Pt,U.image.data):U.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Et,U.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,G,E.x,E.y,Et,Pt,U.image),G===0&&B.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B,G,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=E.max.x-E.min.x+1,Et=E.max.y-E.min.y+1,Pt=E.max.z-E.min.z+1,Dt=Mt.convert(G.format),Xt=Mt.convert(G.type);let Ft;if(G.isData3DTexture)w.setTexture3D(G,0),Ft=L.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),Ft=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const Ht=L.getParameter(L.UNPACK_ROW_LENGTH),ve=L.getParameter(L.UNPACK_IMAGE_HEIGHT),He=L.getParameter(L.UNPACK_SKIP_PIXELS),Ee=L.getParameter(L.UNPACK_SKIP_ROWS),ci=L.getParameter(L.UNPACK_SKIP_IMAGES),fe=B.isCompressedTexture?B.mipmaps[O]:B.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,E.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,E.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?L.texSubImage3D(Ft,O,U.x,U.y,U.z,vt,Et,Pt,Dt,Xt,fe.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ft,O,U.x,U.y,U.z,vt,Et,Pt,Dt,fe.data)):L.texSubImage3D(Ft,O,U.x,U.y,U.z,vt,Et,Pt,Dt,Xt,fe),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ve),L.pixelStorei(L.UNPACK_SKIP_PIXELS,He),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ci),O===0&&G.generateMipmaps&&L.generateMipmap(Ft),q.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),q.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,q.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ca?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===or?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?qi:ic}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qi?ye:yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class d0 extends Ec{}d0.prototype.isWebGL1Renderer=!0;class La{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new La(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class f0 extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class p0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new C;class tr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new tr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hr extends Ki{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gn;const Hn=new C,vn=new C,_n=new C,xn=new st,Vn=new st,Tc=new Kt,Is=new C,Wn=new C,Ds=new C,xl=new st,Zr=new st,yl=new st;class Yi extends Me{constructor(t=new hr){if(super(),this.isSprite=!0,this.type="Sprite",gn===void 0){gn=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new p0(e,5);gn.setIndex([0,1,2,0,2,3]),gn.setAttribute("position",new tr(i,3,0,!1)),gn.setAttribute("uv",new tr(i,2,3,!1))}this.geometry=gn,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vn.setFromMatrixScale(this.matrixWorld),Tc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_n.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vn.multiplyScalar(-_n.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Us(Is.set(-.5,-.5,0),_n,a,vn,n,r),Us(Wn.set(.5,-.5,0),_n,a,vn,n,r),Us(Ds.set(.5,.5,0),_n,a,vn,n,r),xl.set(0,0),Zr.set(1,0),yl.set(1,1);let o=t.ray.intersectTriangle(Is,Wn,Ds,!1,Hn);if(o===null&&(Us(Wn.set(-.5,.5,0),_n,a,vn,n,r),Zr.set(0,1),o=t.ray.intersectTriangle(Is,Ds,Wn,!1,Hn),o===null))return;const l=t.ray.origin.distanceTo(Hn);l<t.near||l>t.far||e.push({distance:l,point:Hn.clone(),uv:Je.getInterpolation(Hn,Is,Wn,Ds,xl,Zr,yl,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Us(s,t,e,i,n,r){xn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Vn.x=r*xn.x-n*xn.y,Vn.y=n*xn.x+r*xn.y):Vn.copy(xn),s.copy(t),s.x+=Vn.x,s.y+=Vn.y,s.applyMatrix4(Tc)}class Ml extends Ie{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yn=new Kt,Sl=new Kt,Ns=[],bl=new Ji,m0=new Kt,Xn=new pt,qn=new Nn;class es extends pt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,m0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,yn),bl.copy(t.boundingBox).applyMatrix4(yn),this.boundingBox.union(bl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,yn),qn.copy(t.boundingSphere).applyMatrix4(yn),this.boundingSphere.union(qn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Xn.geometry=this.geometry,Xn.material=this.material,Xn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qn.copy(this.boundingSphere),qn.applyMatrix4(i),t.ray.intersectsSphere(qn)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,yn),Sl.multiplyMatrices(i,yn),Xn.matrixWorld=Sl,Xn.raycast(t,Ns);for(let a=0,o=Ns.length;a<o;a++){const l=Ns[a];l.instanceId=r,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends Ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wl=new Kt,xa=new cc,ks=new Nn,zs=new C;class ya extends Me{constructor(t=new _e,e=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(n),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;wl.copy(n).invert(),xa.copy(t.ray).applyMatrix4(wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);zs.fromBufferAttribute(u,m),El(zs,m,l,n,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)zs.fromBufferAttribute(u,g),El(zs,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function El(s,t,e,i,n,r,a){const o=xa.distanceSqToPoint(s);if(o<e){const l=new C;xa.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Ac extends Ge{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],d=i[n+1]-h,p=(a-h)/d;return(n+p)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,n=[],r=[],a=[],o=new C,l=new Kt;for(let p=0;p<=t;p++){const g=p/t;n[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ae(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],r[p])}if(e===!0){let p=Math.acos(Ae(r[0].dot(r[t]),-1,1));p/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ia extends li{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const i=e||new st,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class g0 extends Ia{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Da(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const Fs=new C,jr=new Da,Jr=new Da,Kr=new Da;class Cc extends li{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Fs.subVectors(n[0],n[1]).add(n[0]),c=Fs);const u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Fs.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),jr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Jr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Kr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(jr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Jr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(jr.calc(l),Jr.calc(l),Kr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tl(s,t,e,i,n){const r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function v0(s,t){const e=1-s;return e*e*t}function _0(s,t){return 2*(1-s)*s*t}function x0(s,t){return s*s*t}function jn(s,t,e,i){return v0(s,t)+_0(s,e)+x0(s,i)}function y0(s,t){const e=1-s;return e*e*e*t}function M0(s,t){const e=1-s;return 3*e*e*s*t}function S0(s,t){return 3*(1-s)*s*s*t}function b0(s,t){return s*s*s*t}function Jn(s,t,e,i,n){return y0(s,t)+M0(s,e)+S0(s,i)+b0(s,n)}class Rc extends li{constructor(t=new st,e=new st,i=new st,n=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new st){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Jn(t,n.x,r.x,a.x,o.x),Jn(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w0 extends li{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Jn(t,n.x,r.x,a.x,o.x),Jn(t,n.y,r.y,a.y,o.y),Jn(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pc extends li{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E0 extends li{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lc extends li{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(jn(t,n.x,r.x,a.x),jn(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ic extends li{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(jn(t,n.x,r.x,a.x),jn(t,n.y,r.y,a.y),jn(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dc extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Tl(o,l.x,c.x,h.x,u.x),Tl(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new st().fromArray(n))}return this}}var ir=Object.freeze({__proto__:null,ArcCurve:g0,CatmullRomCurve3:Cc,CubicBezierCurve:Rc,CubicBezierCurve3:w0,EllipseCurve:Ia,LineCurve:Pc,LineCurve3:E0,QuadraticBezierCurve:Lc,QuadraticBezierCurve3:Ic,SplineCurve:Dc});class T0 extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ir[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new ir[n.type]().fromJSON(n))}return this}}class Ma extends T0{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Pc(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Lc(this.currentPoint.clone(),new st(t,e),new st(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){const o=new Rc(this.currentPoint.clone(),new st(t,e),new st(i,n),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Dc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){const c=new Ia(t,e,i,n,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ua extends _e{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ae(n,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new st,p=new C,g=new C,_=new C;let m=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=e;x++){const v=i+x*h*n,M=Math.sin(v),P=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*P,a.push(u.x,u.y,u.z),d.x=x/e,d.y=A/(t.length-1),o.push(d.x,d.y);const R=l[3*A+0]*M,k=l[3*A+1],S=l[3*A+0]*P;c.push(R,k,S)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const M=v+x*t.length,P=M,A=M+t.length,R=M+t.length+1,k=M+1;r.push(P,A,k),r.push(R,k,A)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.points,t.segments,t.phiStart,t.phiLength)}}class bn extends Ua{constructor(t=1,e=1,i=4,n=8){const r=new Ma;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new bn(t.radius,t.length,t.capSegments,t.radialSegments)}}class is extends _e{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*n;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Dn extends _e{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(p,2));function x(){const M=new C,P=new C;let A=0;const R=(e-t)/i;for(let k=0;k<=r;k++){const S=[],T=k/r,z=T*(e-t)+t;for(let W=0;W<=n;W++){const rt=W/n,D=rt*l+o,F=Math.sin(D),H=Math.cos(D);P.x=z*F,P.y=-T*i+m,P.z=z*H,u.push(P.x,P.y,P.z),M.set(F,R,H).normalize(),d.push(M.x,M.y,M.z),p.push(rt,1-T),S.push(g++)}_.push(S)}for(let k=0;k<n;k++)for(let S=0;S<r;S++){const T=_[S][k],z=_[S+1][k],W=_[S+1][k+1],rt=_[S][k+1];h.push(T,z,rt),h.push(z,W,rt),A+=6}c.addGroup(f,A,0),f+=A}function v(M){const P=g,A=new st,R=new C;let k=0;const S=M===!0?t:e,T=M===!0?1:-1;for(let W=1;W<=n;W++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;const z=g;for(let W=0;W<=n;W++){const D=W/n*l+o,F=Math.cos(D),H=Math.sin(D);R.x=S*H,R.y=m*T,R.z=S*F,u.push(R.x,R.y,R.z),d.push(0,T,0),A.x=F*.5+.5,A.y=H*.5*T+.5,p.push(A.x,A.y),g++}for(let W=0;W<n;W++){const rt=P+W,D=z+W;M===!0?h.push(D,D+1,rt):h.push(D+1,D,rt),k+=3}c.addGroup(f,k,M===!0?1:2),f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nr extends Dn{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new nr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ur extends _e{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,M=new C,P=new C;for(let A=0;A<e.length;A+=3)p(e[A+0],v),p(e[A+1],M),p(e[A+2],P),l(v,M,P,x)}function l(x,v,M,P){const A=P+1,R=[];for(let k=0;k<=A;k++){R[k]=[];const S=x.clone().lerp(M,k/A),T=v.clone().lerp(M,k/A),z=A-k;for(let W=0;W<=z;W++)W===0&&k===A?R[k][W]=S:R[k][W]=S.clone().lerp(T,W/z)}for(let k=0;k<A;k++)for(let S=0;S<2*(A-k)-1;S++){const T=Math.floor(S/2);S%2===0?(d(R[k][T+1]),d(R[k+1][T]),d(R[k][T])):(d(R[k][T+1]),d(R[k+1][T+1]),d(R[k+1][T]))}}function c(x){const v=new C;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(x),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const x=new C;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const M=m(x)/2/Math.PI+.5,P=f(x)/Math.PI+.5;a.push(M,1-P)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const v=a[x+0],M=a[x+2],P=a[x+4],A=Math.max(v,M,P),R=Math.min(v,M,P);A>.9&&R<.1&&(v<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,v){const M=x*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const x=new C,v=new C,M=new C,P=new C,A=new st,R=new st,k=new st;for(let S=0,T=0;S<r.length;S+=9,T+=6){x.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),A.set(a[T+0],a[T+1]),R.set(a[T+2],a[T+3]),k.set(a[T+4],a[T+5]),P.copy(x).add(v).add(M).divideScalar(3);const z=m(P);_(A,T+0,x,z),_(R,T+2,v,z),_(k,T+4,M,z)}}function _(x,v,M,P){P<0&&x.x===1&&(a[v]=x.x-1),M.x===0&&M.z===0&&(a[v]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.vertices,t.indices,t.radius,t.details)}}class Na extends ur{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Na(t.radius,t.detail)}}class Uc extends Ma{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Ma().fromJSON(n))}return this}}const A0={triangulate:function(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=Nc(s,0,n,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(i&&(r=I0(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<n;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return ns(r,a,e,o,l,p,0),a}};function Nc(s,t,e,i,n){let r,a;if(n===V0(s,t,e,i)>0)for(r=t;r<e;r+=i)a=Al(r,s[r],s[r+1],a);else for(r=e-i;r>=t;r-=i)a=Al(r,s[r],s[r+1],a);return a&&dr(a,a.next)&&(rs(a),a=a.next),a}function ji(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(dr(e,e.next)||pe(e.prev,e,e.next)===0)){if(rs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ns(s,t,e,i,n,r,a){if(!s)return;!a&&r&&z0(s,i,n,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?R0(s,i,n,r):C0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),rs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=P0(ji(s),t,e),ns(s,t,e,i,n,r,2)):a===2&&L0(s,t,e,i,n,r):ns(ji(s),t,e,i,n,r,1);break}}}function C0(s){const t=s.prev,e=s,i=s.next;if(pe(t,e,i)>=0)return!1;const n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=n>r?n>a?n:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&wn(n,o,r,l,a,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function R0(s,t,e,i){const n=s.prev,r=s,a=s.next;if(pe(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Sa(p,g,t,e,i),x=Sa(_,m,t,e,i);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=f&&M&&M.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==n&&v!==a&&wn(o,h,l,u,c,d,v.x,v.y)&&pe(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&wn(o,h,l,u,c,d,M.x,M.y)&&pe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==n&&v!==a&&wn(o,h,l,u,c,d,v.x,v.y)&&pe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&wn(o,h,l,u,c,d,M.x,M.y)&&pe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function P0(s,t,e){let i=s;do{const n=i.prev,r=i.next.next;!dr(n,r)&&kc(n,i,i.next,r)&&ss(n,r)&&ss(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),rs(i),rs(i.next),i=s=r),i=i.next}while(i!==s);return ji(i)}function L0(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&B0(a,o)){let l=zc(a,o);a=ji(a,a.next),l=ji(l,l.next),ns(a,t,e,i,n,r,0),ns(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function I0(s,t,e,i){const n=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=Nc(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(O0(c));for(n.sort(D0),r=0;r<n.length;r++)e=U0(n[r],e);return e}function D0(s,t){return s.x-t.x}function U0(s,t){const e=N0(s,t);if(!e)return t;const i=zc(e,s);return ji(i,i.next),ji(e,e.next)}function N0(s,t){let e=t,i=-1/0,n;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===r))return n}e=e.next}while(e!==t);if(!n)return null;const o=n,l=n.x,c=n.y;let h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&wn(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ss(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&k0(n,e)))&&(n=e,h=u)),e=e.next;while(e!==o);return n}function k0(s,t){return pe(s.prev,s,t.prev)<0&&pe(t.next,s,s.next)<0}function z0(s,t,e,i){let n=s;do n.z===0&&(n.z=Sa(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,F0(n)}function F0(s){let t,e,i,n,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(a>1);return s}function Sa(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function O0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function wn(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function B0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!G0(s,t)&&(ss(s,t)&&ss(t,s)&&H0(s,t)&&(pe(s.prev,s,t.prev)||pe(s,t.prev,t))||dr(s,t)&&pe(s.prev,s,s.next)>0&&pe(t.prev,t,t.next)>0)}function pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function dr(s,t){return s.x===t.x&&s.y===t.y}function kc(s,t,e,i){const n=Bs(pe(s,t,e)),r=Bs(pe(s,t,i)),a=Bs(pe(e,i,s)),o=Bs(pe(e,i,t));return!!(n!==r&&a!==o||n===0&&Os(s,e,t)||r===0&&Os(s,i,t)||a===0&&Os(e,s,i)||o===0&&Os(e,t,i))}function Os(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Bs(s){return s>0?1:s<0?-1:0}function G0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&kc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ss(s,t){return pe(s.prev,s,s.next)<0?pe(s,t,s.next)>=0&&pe(s,s.prev,t)>=0:pe(s,t,s.prev)<0||pe(s,s.next,t)<0}function H0(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function zc(s,t){const e=new ba(s.i,s.x,s.y),i=new ba(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Al(s,t,e,i){const n=new ba(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function rs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ba(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V0(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class Kn{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return Kn.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];Cl(t),Rl(i,t);let a=t.length;e.forEach(Cl);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Rl(i,e[l]);const o=A0.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Cl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Rl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ka extends _e{constructor(t=new Uc([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new te(n,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:W0;let v,M=!1,P,A,R,k;f&&(v=f.getSpacedPoints(h),M=!0,d=!1,P=f.computeFrenetFrames(h,!1),A=new C,R=new C,k=new C),d||(m=0,p=0,g=0,_=0);const S=o.extractPoints(c);let T=S.shape;const z=S.holes;if(!Kn.isClockWise(T)){T=T.reverse();for(let L=0,ot=z.length;L<ot;L++){const Y=z[L];Kn.isClockWise(Y)&&(z[L]=Y.reverse())}}const rt=Kn.triangulateShape(T,z),D=T;for(let L=0,ot=z.length;L<ot;L++){const Y=z[L];T=T.concat(Y)}function F(L,ot,Y){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ot,Y)}const H=T.length,j=rt.length;function $(L,ot,Y){let at,q,Tt;const gt=L.x-ot.x,w=L.y-ot.y,y=Y.x-L.x,N=Y.y-L.y,nt=gt*gt+w*w,Q=gt*N-w*y;if(Math.abs(Q)>Number.EPSILON){const J=Math.sqrt(nt),St=Math.sqrt(y*y+N*N),ht=ot.x-w/J,xt=ot.y+gt/J,Ct=Y.x-N/St,Gt=Y.y+y/St,tt=((Ct-ht)*N-(Gt-xt)*y)/(gt*N-w*y);at=ht+gt*tt-L.x,q=xt+w*tt-L.y;const Qt=at*at+q*q;if(Qt<=2)return new st(at,q);Tt=Math.sqrt(Qt/2)}else{let J=!1;gt>Number.EPSILON?y>Number.EPSILON&&(J=!0):gt<-Number.EPSILON?y<-Number.EPSILON&&(J=!0):Math.sign(w)===Math.sign(N)&&(J=!0),J?(at=-w,q=gt,Tt=Math.sqrt(nt)):(at=gt,q=w,Tt=Math.sqrt(nt/2))}return new st(at/Tt,q/Tt)}const X=[];for(let L=0,ot=D.length,Y=ot-1,at=L+1;L<ot;L++,Y++,at++)Y===ot&&(Y=0),at===ot&&(at=0),X[L]=$(D[L],D[Y],D[at]);const et=[];let it,ft=X.concat();for(let L=0,ot=z.length;L<ot;L++){const Y=z[L];it=[];for(let at=0,q=Y.length,Tt=q-1,gt=at+1;at<q;at++,Tt++,gt++)Tt===q&&(Tt=0),gt===q&&(gt=0),it[at]=$(Y[at],Y[Tt],Y[gt]);et.push(it),ft=ft.concat(it)}for(let L=0;L<m;L++){const ot=L/m,Y=p*Math.cos(ot*Math.PI/2),at=g*Math.sin(ot*Math.PI/2)+_;for(let q=0,Tt=D.length;q<Tt;q++){const gt=F(D[q],X[q],at);_t(gt.x,gt.y,-Y)}for(let q=0,Tt=z.length;q<Tt;q++){const gt=z[q];it=et[q];for(let w=0,y=gt.length;w<y;w++){const N=F(gt[w],it[w],at);_t(N.x,N.y,-Y)}}}const V=g+_;for(let L=0;L<H;L++){const ot=d?F(T[L],ft[L],V):T[L];M?(R.copy(P.normals[0]).multiplyScalar(ot.x),A.copy(P.binormals[0]).multiplyScalar(ot.y),k.copy(v[0]).add(R).add(A),_t(k.x,k.y,k.z)):_t(ot.x,ot.y,0)}for(let L=1;L<=h;L++)for(let ot=0;ot<H;ot++){const Y=d?F(T[ot],ft[ot],V):T[ot];M?(R.copy(P.normals[L]).multiplyScalar(Y.x),A.copy(P.binormals[L]).multiplyScalar(Y.y),k.copy(v[L]).add(R).add(A),_t(k.x,k.y,k.z)):_t(Y.x,Y.y,u/h*L)}for(let L=m-1;L>=0;L--){const ot=L/m,Y=p*Math.cos(ot*Math.PI/2),at=g*Math.sin(ot*Math.PI/2)+_;for(let q=0,Tt=D.length;q<Tt;q++){const gt=F(D[q],X[q],at);_t(gt.x,gt.y,u+Y)}for(let q=0,Tt=z.length;q<Tt;q++){const gt=z[q];it=et[q];for(let w=0,y=gt.length;w<y;w++){const N=F(gt[w],it[w],at);M?_t(N.x,N.y+v[h-1].y,v[h-1].x+Y):_t(N.x,N.y,u+Y)}}}K(),mt();function K(){const L=n.length/3;if(d){let ot=0,Y=H*ot;for(let at=0;at<j;at++){const q=rt[at];Lt(q[2]+Y,q[1]+Y,q[0]+Y)}ot=h+m*2,Y=H*ot;for(let at=0;at<j;at++){const q=rt[at];Lt(q[0]+Y,q[1]+Y,q[2]+Y)}}else{for(let ot=0;ot<j;ot++){const Y=rt[ot];Lt(Y[2],Y[1],Y[0])}for(let ot=0;ot<j;ot++){const Y=rt[ot];Lt(Y[0]+H*h,Y[1]+H*h,Y[2]+H*h)}}i.addGroup(L,n.length/3-L,0)}function mt(){const L=n.length/3;let ot=0;bt(D,ot),ot+=D.length;for(let Y=0,at=z.length;Y<at;Y++){const q=z[Y];bt(q,ot),ot+=q.length}i.addGroup(L,n.length/3-L,1)}function bt(L,ot){let Y=L.length;for(;--Y>=0;){const at=Y;let q=Y-1;q<0&&(q=L.length-1);for(let Tt=0,gt=h+m*2;Tt<gt;Tt++){const w=H*Tt,y=H*(Tt+1),N=ot+at+w,nt=ot+q+w,Q=ot+q+y,J=ot+at+y;zt(N,nt,Q,J)}}}function _t(L,ot,Y){l.push(L),l.push(ot),l.push(Y)}function Lt(L,ot,Y){wt(L),wt(ot),wt(Y);const at=n.length/3,q=x.generateTopUV(i,n,at-3,at-2,at-1);Ut(q[0]),Ut(q[1]),Ut(q[2])}function zt(L,ot,Y,at){wt(L),wt(ot),wt(at),wt(ot),wt(Y),wt(at);const q=n.length/3,Tt=x.generateSideWallUV(i,n,q-6,q-3,q-2,q-1);Ut(Tt[0]),Ut(Tt[1]),Ut(Tt[3]),Ut(Tt[1]),Ut(Tt[2]),Ut(Tt[3])}function wt(L){n.push(l[L*3+0]),n.push(l[L*3+1]),n.push(l[L*3+2])}function Ut(L){r.push(L.x),r.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return X0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new ir[n.type]().fromJSON(n)),new ka(i,t.options)}}const W0={generateTopUV:function(s,t,e,i,n){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],p=t[n*3+1],g=t[n*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-u),new st(d,1-g),new st(_,1-f)]:[new st(o,1-l),new st(h,1-u),new st(p,1-g),new st(m,1-f)]}};function X0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class za extends ur{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new za(t.radius,t.detail)}}class ue extends _e{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const x=[],v=f/i;let M=0;f===0&&a===0?M=.5/e:f===i&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(n+A*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(n+A*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+M,1-v),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<e;x++){const v=h[f][x+1],M=h[f][x],P=h[f+1][x],A=h[f+1][x+1];(f!==0||a>0)&&p.push(v,M,A),(f!==i-1||l<Math.PI)&&p.push(M,P,A)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ci extends _e{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){const _=g/n*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){const _=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,f=(n+1)*(p-1)+g,x=(n+1)*p+g;a.push(_,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fa extends _e{constructor(t=new Ic(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new st;let h=new C;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(p,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),x(),f()}function m(v){h=t.getPointAt(v/e,h);const M=a.normals[v],P=a.binormals[v];for(let A=0;A<=n;A++){const R=A/n*Math.PI*2,k=Math.sin(R),S=-Math.cos(R);l.x=S*M.x+k*P.x,l.y=S*M.y+k*P.y,l.z=S*M.z+k*P.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let M=1;M<=n;M++){const P=(n+1)*(v-1)+(M-1),A=(n+1)*v+(M-1),R=(n+1)*v+M,k=(n+1)*(v-1)+M;g.push(P,A,k),g.push(A,R,k)}}function x(){for(let v=0;v<=e;v++)for(let M=0;M<=n;M++)c.x=v/e,c.y=M/n,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Fa(new ir[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Fg extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fc extends Ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oa extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class q0 extends Oa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qr=new Kt,Pl=new C,Ll=new C;class Oc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Pl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pl),Ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ll),e.updateMatrixWorld(),Qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Il=new Kt,Yn=new C,ta=new C;class Y0 extends Oc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Yn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Yn),ta.copy(i.position),ta.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ta),i.updateMatrixWorld(),n.makeTranslation(-Yn.x,-Yn.y,-Yn.z),Il.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il)}}class qs extends Oa{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Y0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $0 extends Oc{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ea extends Oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new $0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Og{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);class Z0{geometries=new Map;materials=new Map;basicMaterials=new Map;textures=new Map;spriteMaterials=new Map;textureMaterials=new Map;getGeometry(t,e){const i=this.geometries.get(t);if(i)return i;const n=e();return this.geometries.set(t,n),n}getMaterial(t,e={}){const i=[t,e.roughness??.75,e.metalness??.04,e.emissive??0,e.emissiveIntensity??1,e.transparent?1:0,e.opacity??1,e.side??Oe,e.flatShading?1:0,e.depthWrite===!1?0:1].join(":"),n=this.materials.get(i);if(n)return n;const r=new Fc({color:t,roughness:e.roughness??.75,metalness:e.metalness??.04,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Oe,flatShading:e.flatShading??!1,depthWrite:e.depthWrite??!0});return this.materials.set(i,r),r}getBasicMaterial(t,e={}){const i=[t,e.transparent?1:0,e.opacity??1,e.side??Oe,e.depthWrite===!1?0:1].join(":"),n=this.basicMaterials.get(i);if(n)return n;const r=new Pn({color:t,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Oe,depthWrite:e.depthWrite??!0});return this.basicMaterials.set(i,r),r}getSpriteMaterial(t,e={}){const i=[t,e.opacity??.8,e.blending??$i,e.depthWrite===!1?0:1].join(":"),n=this.spriteMaterials.get(i);if(n)return n;const r=new hr({color:t,transparent:!0,opacity:e.opacity??.8,blending:e.blending??$i,depthWrite:e.depthWrite??!1,fog:!1});return this.spriteMaterials.set(i,r),r}getBasicTextureMaterial(t,e={}){const i=[t.uuid,e.transparent?1:0,e.side??Oe,e.depthWrite===!1?0:1].join(":"),n=this.textureMaterials.get(i);if(n)return n;const r=new Pn({map:t,transparent:e.transparent??!1,side:e.side??Oe,depthWrite:e.depthWrite??!0});return this.textureMaterials.set(i,r),r}getCanvasTexture(t,e,i,n){const r=this.textures.get(t);if(r)return r;const a=document.createElement("canvas");a.width=e,a.height=i;const o=a.getContext("2d");if(!o)throw new Error("无法创建 CanvasTexture 上下文");n(o,e,i);const l=new Ac(a);return l.colorSpace=ye,l.anisotropy=4,l.needsUpdate=!0,this.textures.set(t,l),l}dispose(){for(const t of this.geometries.values())t.dispose();for(const t of this.materials.values())t.dispose();for(const t of this.basicMaterials.values())t.dispose();for(const t of this.spriteMaterials.values())t.dispose();for(const t of this.textureMaterials.values())t.dispose();for(const t of this.textures.values())t.dispose();this.geometries.clear(),this.materials.clear(),this.basicMaterials.clear(),this.spriteMaterials.clear(),this.textureMaterials.clear(),this.textures.clear()}}class j0{items=[];track(t){return this.items.push(t),t}dispose(){for(const t of this.items)t.dispose();this.items=[]}}const Bc="miaomiao.quality";function Ba(){if(typeof window>"u")return!1;const s=new URLSearchParams(window.location.search);return s.get("mobile")==="1"?!0:s.get("mobile")==="0"?!1:window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&window.innerWidth<1100}function J0(){if(Ba())return"low";const s=navigator.hardwareConcurrency||4,t=navigator.deviceMemory??4;return s<=4||t<=4?"medium":"high"}function K0(){try{const s=localStorage.getItem(Bc);if(s==="high"||s==="medium"||s==="low")return s}catch{}return J0()}function Q0(s){try{localStorage.setItem(Bc,s)}catch{}}function tg(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}class eg{isTouchDevice;enabled=!1;onLockChange=null;canvas;abort=new AbortController;keys=new Set;pressed=new Set;joystick={x:0,z:0,active:!1};mobileSprint=!1;lookX=0;lookY=0;locked=!1;cameraTouchId=null;cameraTouchX=0;cameraTouchY=0;skipMouseMoves=0;constructor(t){this.canvas=t,this.isTouchDevice=Ba(),this.bind()}setEnabled(t){this.enabled=t,t||this.reset()}reset(){this.keys.clear(),this.pressed.clear(),this.joystick.x=0,this.joystick.z=0,this.joystick.active=!1,this.mobileSprint=!1,this.lookX=0,this.lookY=0,this.cameraTouchId=null}get isLocked(){return this.locked}lock(){this.isTouchDevice||this.canvas.requestPointerLock?.()}unlock(){document.pointerLockElement&&document.exitPointerLock()}getMoveInput(){let t=0,e=0;this.joystick.active?(t=this.joystick.x,e=this.joystick.z):((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1));const i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,z:e}}get sprinting(){return this.mobileSprint||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}get crouching(){return this.keys.has("KeyC")}consumeLookDelta(){const t={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,t}consumePressed(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}setMobileMove(t,e,i){this.joystick.x=En(t,-1,1),this.joystick.z=En(e,-1,1),this.joystick.active=i}setMobileSprint(t){this.mobileSprint=t}triggerAction(t){this.pressed.add(t)}dispose(){this.abort.abort()}bind(){const t=this.abort.signal;window.addEventListener("keydown",i=>{if(i.code==="Escape"){this.pressed.add("pause");return}if(this.enabled){if(i.code==="Space"||i.code==="KeyJ"){i.preventDefault(),i.repeat||this.pressed.add("lunge");return}if(i.code==="KeyF"){i.repeat||this.pressed.add("call");return}if(i.code==="KeyE"){i.repeat||this.pressed.add("interact");return}(i.code==="ArrowUp"||i.code==="ArrowDown"||i.code==="ArrowLeft"||i.code==="ArrowRight")&&i.preventDefault(),this.keys.add(i.code)}},{signal:t}),window.addEventListener("keyup",i=>{this.keys.delete(i.code)},{signal:t}),window.addEventListener("blur",()=>{this.keys.clear(),this.mobileSprint=!1},{signal:t}),this.canvas.addEventListener("click",()=>{this.enabled&&!this.isTouchDevice&&this.lock()},{signal:t}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.lookX=0,this.lookY=0,this.skipMouseMoves=this.locked?2:0,this.onLockChange?.(this.locked)},{signal:t}),document.addEventListener("mousemove",i=>{if(!(!this.locked||!this.enabled)){if(this.skipMouseMoves>0){this.skipMouseMoves--;return}this.lookX+=i.movementX,this.lookY+=i.movementY}},{signal:t}),document.addEventListener("touchstart",i=>{if(!(!this.enabled||!this.isTouchDevice))for(const n of i.changedTouches){if(this.cameraTouchId!==null)break;n.clientX<window.innerWidth/2||ig(i.target)||(this.cameraTouchId=n.identifier,this.cameraTouchX=n.clientX,this.cameraTouchY=n.clientY)}},{signal:t,passive:!0}),document.addEventListener("touchmove",i=>{if(this.cameraTouchId!==null)for(const n of i.changedTouches)n.identifier===this.cameraTouchId&&(i.preventDefault(),this.lookX+=n.clientX-this.cameraTouchX,this.lookY+=n.clientY-this.cameraTouchY,this.cameraTouchX=n.clientX,this.cameraTouchY=n.clientY)},{signal:t,passive:!1});const e=i=>{if(this.cameraTouchId!==null){for(const n of i.changedTouches)if(n.identifier===this.cameraTouchId){this.cameraTouchId=null;break}}};document.addEventListener("touchend",e,{signal:t,passive:!0}),document.addEventListener("touchcancel",e,{signal:t,passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.keys.clear(),this.mobileSprint=!1)},{signal:t})}}function ig(s){return s instanceof Element?!!s.closest(".mobile-controls, .hud button, .overlay-screen, .menu-screen"):!1}const ng="modulepreload",sg=function(s){return"/miaomiao/"+s},Ul={},Gs=function(t,e,i){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");n=Promise.allSettled(e.map(l=>{if(l=sg(l),l in Ul)return;Ul[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":ng,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class rg{composer=null;renderPass=null;bloomPass=null;initialising=!1;enabled=!1;async init(t,e,i,n,r,a,o){if(!(n!=="high"||this.initialising||this.composer)){this.initialising=!0;try{const[{EffectComposer:l},{RenderPass:c},{UnrealBloomPass:h},{OutputPass:u}]=await Promise.all([Gs(()=>import("./EffectComposer-CiHvzZoV.js"),__vite__mapDeps([0,1,2])),Gs(()=>import("./RenderPass-BDO1NnpG.js"),__vite__mapDeps([3,2])),Gs(()=>import("./UnrealBloomPass-BrQ8-lHx.js"),__vite__mapDeps([4,2,1])),Gs(()=>import("./OutputPass-k8USjhY1.js"),__vite__mapDeps([5,2]))]),d=new l(t);d.setPixelRatio(o),d.setSize(r,a);const p=new c(e,i),g=new h(new st(r,a),.34,.55,.82);d.addPass(p),d.addPass(g),d.addPass(new u),this.composer=d,this.renderPass=p,this.bloomPass=g,this.enabled=!0}catch(l){console.warn("后处理初始化失败，回退到直接渲染",l),this.enabled=!1}finally{this.initialising=!1}}}setSceneCamera(t,e){this.renderPass&&(this.renderPass.scene=t,this.renderPass.camera=e)}setSize(t,e,i){this.composer?.setPixelRatio(i),this.composer?.setSize(t,e),this.bloomPass?.setSize(t,e)}render(t,e,i){if(this.enabled&&this.composer){this.setSceneCamera(e,i),this.composer.render();return}t.render(e,i)}get isActive(){return this.enabled}dispose(){this.composer?.dispose(),this.composer=null,this.renderPass=null,this.bloomPass=null,this.enabled=!1}}class ag{renderer;postFX=new rg;quality;width=1;height=1;postFXRequested=!1;constructor(t,e){this.quality=e,this.renderer=new Ec({canvas:t,antialias:e!=="low",powerPreference:"high-performance"}),this.renderer.toneMapping=Yl,this.renderer.toneMappingExposure=1.22,this.renderer.outputColorSpace=ye,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xl,this.applyPixelRatio()}setQuality(t){this.quality!==t&&(this.quality=t,this.applyPixelRatio(),this.postFXRequested=!1,t!=="high"&&this.postFX.dispose())}resize(t,e){this.width=Math.max(1,t),this.height=Math.max(1,e),this.applyPixelRatio()}render(t,e){if(this.quality==="high"&&(this.postFXRequested||(this.postFXRequested=!0,this.postFX.init(this.renderer,t,e,this.quality,this.width,this.height,this.renderer.getPixelRatio())),this.postFX.isActive)){this.postFX.render(this.renderer,t,e);return}this.renderer.render(t,e)}dispose(){this.postFX.dispose(),this.renderer.dispose()}applyPixelRatio(){const t=this.quality==="high"?2:this.quality==="medium"?1.5:1,e=Math.min(window.devicePixelRatio||1,t);this.renderer.setPixelRatio(e),this.renderer.setSize(this.width,this.height,!1),this.postFX.setSize(this.width,this.height,e)}}const Z={matchSeconds:300,countdownSeconds:3,maxContactsPerJail:3,maxJailsPerHider:3,contactDistance:1,lungeContactDistance:1.15,contactCooldown:2.4,ghostHitRecoverySpeed:.55,hiderHitBoostSeconds:2.2,hiderHitBoostSpeed:1.5,rescueDistance:1.5,rescueSeconds:5,rescueDecayRate:.5,invulnerableSeconds:2,playerHider:{walkSpeed:4.2,sprintSpeed:6.8,crouchSpeed:2.4,staminaSeconds:6,staminaRegenPerSecond:1.6,staminaRegenDelay:.6},playerGhost:{walkSpeed:4.4,sprintSpeed:6.8,lungeSpeed:11.5,lungeWindup:.25,lungeDuration:.3,lungeCooldown:5},aiHider:{walkSpeed:3.8,runSpeed:5.9,fleeDistance:9,rescueGhostDistance:12,rescueStopDistance:1.2},aiGhost:{patrolSpeed:3.8,investigateSpeed:4.8,chaseSpeed:6.4,lungeSpeed:11.5,lungeWindup:.35,lungeDuration:.3,lungeCooldown:6,lungeStun:.6,lungeRangeMin:2.5,lungeRangeMax:6,pathInterval:.35},perception:{ghostVisionRange:22,ghostFovRadians:100*Math.PI/180,hiderVisionRange:20,hiderFovRadians:120*Math.PI/180,hiderDangerRadius:9,memorySeconds:4,searchSeconds:7,terrorRadius:16,hearing:{sprint:16,walk:7,rescue:12,call:25,lungeMiss:18}},camera:{distance:4.8,height:1.5,lookHeight:1.2,pitchMin:-12*Math.PI/180,pitchMax:50*Math.PI/180,collisionPadding:.28,sprintFov:68,lungeFov:80,normalFov:62},nav:{cellSize:.5,agentRadius:.42,maxExpansions:3e4,stuckCheckInterval:.6,sidestepSeconds:.5}},og=["苗苗","队友 1","队友 2","队友 3","队友 4"];class lg{mode;hiders;stats={elapsed:0,contacts:0,jails:0,rescues:0,eliminated:0};elapsed=0;countdown=Z.countdownSeconds;contactCooldown=0;outcome=null;eventQueue=[];constructor(t){this.mode=t.mode;const e=t.names??og;this.hiders=t.hiderSpawns.map((i,n)=>({id:n,isPlayer:t.mode==="hider"&&n===0,name:e[n]??`逃离者${n+1}`,paletteIndex:n,state:"free",contactCount:0,jailCount:0,jailSlot:null,rescueProgress:0,invulnerableUntil:0,x:i.x,z:i.z}))}get playerHider(){return this.mode==="hider"?this.hiders[0]??null:null}get remaining(){return Math.max(0,Z.matchSeconds-this.elapsed)}get isCountdown(){return this.countdown>0}get isPlaying(){return this.outcome===null}get allHidersCaptured(){return this.hiders.every(t=>t.state!=="free")}tick(t){if(!this.outcome){if(this.countdown>0){this.countdown=Math.max(0,this.countdown-t);return}this.elapsed=Math.min(Z.matchSeconds,this.elapsed+t),this.stats.elapsed=this.elapsed,this.contactCooldown=Math.max(0,this.contactCooldown-t),this.evaluateOutcome()}}canContact(t){if(this.outcome||this.countdown>0||this.contactCooldown>0)return!1;const e=this.getHider(t);return!e||e.state!=="free"?!1:this.elapsed>=e.invulnerableUntil}tryContact(t,e){if(!this.canContact(t))return null;const i=this.getHider(t);if(!i)return null;this.contactCooldown=Z.contactCooldown,i.contactCount++,this.stats.contacts++;const n={type:"contact",hiderId:t,byPlayer:e,contacts:i.contactCount};return this.emit(n),i.contactCount>=Z.maxContactsPerJail&&this.jail(i),n}updateRescue(t){if(!(this.outcome||this.countdown>0))for(const e of this.hiders){if(e.state!=="jailed")continue;const i=this.findRescuer(e);i?(e.rescueProgress+=t,e.rescueProgress>=Z.rescueSeconds&&this.rescue(e,i)):e.rescueProgress>0&&(e.rescueProgress=Math.max(0,e.rescueProgress-t*Z.rescueDecayRate))}}forceRescue(t,e=!1){const i=this.getHider(t);!i||i.state!=="jailed"||this.rescue(i,{id:-1,isPlayer:e})}drainEvents(){const t=this.eventQueue;return this.eventQueue=[],t}jail(t){t.state="jailed",t.contactCount=Z.maxContactsPerJail,t.jailCount++,t.rescueProgress=0,t.jailSlot=t.id,this.stats.jails++,this.emit({type:"jailed",hiderId:t.id,jailCount:t.jailCount,slot:t.jailSlot}),t.jailCount>=Z.maxJailsPerHider&&(t.state="eliminated",t.jailSlot=null,this.stats.eliminated++,this.emit({type:"eliminated",hiderId:t.id})),this.evaluateOutcome()}rescue(t,e){t.state="free",t.contactCount=0,t.jailSlot=null,t.rescueProgress=0,t.invulnerableUntil=this.elapsed+Z.invulnerableSeconds,this.stats.rescues++,this.emit({type:"rescued",hiderId:t.id,byPlayer:e.isPlayer})}findRescuer(t){for(const e of this.hiders){if(e.id===t.id||e.state!=="free")continue;if(se(e.x,e.z,t.x,t.z)<=Z.rescueDistance)return e}return null}evaluateOutcome(){if(!this.outcome){if(this.mode==="hider"){const t=this.playerHider;if(!t)return;if(t.state==="eliminated"){this.end("hider-lose");return}this.elapsed>=Z.matchSeconds&&this.end(t.state==="free"?"hider-win":"hider-lose");return}if(this.allHidersCaptured){this.end("ghost-win");return}this.elapsed>=Z.matchSeconds&&this.end("ghost-lose")}}end(t){this.outcome||(this.outcome=t,this.emit({type:"match-end",outcome:t,mode:this.mode}))}getHider(t){return this.hiders.find(e=>e.id===t)}emit(t){this.eventQueue.push(t)}}function Ga(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Nl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][d]);const g=Nl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Nl(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const a=new t(r);let o=0;for(let c=0;c<s.length;++c)a.set(s[c].array,o),o+=s[c].array.length;const l=new Ie(a,e,i);return n!==void 0&&(l.gpuType=n),l}class cg{group=new ce;model=new ce;hips=new ce;headPivot=new ce;armLeft=new ce;armRight=new ce;legLeft=new ce;legRight=new ce;statusAnchor=new Me;assets;isGhost;shadowMaterial;shadow;crouching=!1;eliminatedProgress=0;baseHipsY=.78;mergedGeometries=[];constructor(t,e,i){this.assets=t,this.isGhost=i,this.group.add(this.model),this.model.add(this.hips),this.hips.position.y=this.baseHipsY,this.buildShadow();const n=i?cs.dress:e.shirt,r=i?cs.dressLight:e.accent,a=i?cs.skin:16770244,o=i?cs.hair:e.hair;this.buildLegs(a,i),this.buildTorso(n,r),this.buildHead(a,o,r),this.buildArms(a,n),this.buildAccessory(e.accessory,r,i),this.statusAnchor.position.set(0,2.38,0),this.group.add(this.statusAnchor),this.mergeAnimatedGroups()}setCrouch(t){this.crouching=t}setEliminated(t){this.eliminatedProgress=Math.min(1,Math.max(0,t));const e=Math.max(.001,1-this.eliminatedProgress);this.model.scale.setScalar(e),this.shadow.visible=this.eliminatedProgress<.6,this.eliminatedProgress>=1&&(this.group.visible=!1)}get isEliminated(){return this.eliminatedProgress>=1}animate(t,e,i){if(this.isEliminated)return;const n={hipsX:0,hipsY:this.baseHipsY,headX:0,headY:0,armLX:0,armRX:0,armLZ:this.isGhost?.25:.08,armRZ:this.isGhost?-.25:-.08,legLX:0,legRX:0,modelY:0};if(t==="idle"){const a=Math.sin(e*2.1);n.hipsY=this.baseHipsY+a*.012,n.headY=Math.sin(e*1.3)*.04,n.armLX=Math.sin(e*1.7)*.05,n.armRX=Math.cos(e*1.6)*.05}else if(t==="walk"||t==="run"){const a=t==="run"?12:8,o=t==="run"?.75:.48,l=Math.sin(e*a);n.hipsX=t==="run"?.1:.04,n.hipsY=this.baseHipsY+Math.abs(l)*(t==="run"?.045:.025),n.armLX=l*o,n.armRX=-l*o,n.legLX=-l*(t==="run"?.85:.55),n.legRX=l*(t==="run"?.85:.55),n.headY=Math.sin(e*a*.5)*.03}else t==="crouch"?(n.modelY=-.24,n.hipsX=.18,n.legLX=.55,n.legRX=-.35,n.armLX=-.4,n.armRX=-.4,n.headX=-.08):t==="jail"?(n.modelY=-.18,n.hipsX=-.12,n.legLX=-1.1,n.legRX=-1.1,n.armLX=-.2,n.armRX=-.2,n.headX=.14,n.headY=Math.sin(e*1.1)*.06):t==="rescue"?(n.modelY=-.14,n.hipsX=.26,n.armLX=-1.25,n.armRX=-1.25,n.legLX=.3,n.legRX=-.2,n.headX=-.1):t==="lunge"?(n.modelY=-.08,n.hipsX=.34,n.armLX=.9,n.armRX=.9,n.legLX=-.35,n.legRX=.35,n.headX=-.12):t==="hit"&&(n.hipsX=-.3,n.headX=.25,n.armLX=-.4,n.armRX=-.4,n.legLX=.2,n.legRX=-.2);this.crouching&&(t==="idle"||t==="walk")&&(n.modelY=Math.min(n.modelY,-.22),n.hipsX=.18,n.legLX=.55,n.legRX=-.35,n.headX=-.06);const r=12;this.hips.rotation.x=Ze(this.hips.rotation.x,n.hipsX,r,i),this.hips.position.y=Ze(this.hips.position.y,n.hipsY,r,i),this.headPivot.rotation.x=Ze(this.headPivot.rotation.x,n.headX,r,i),this.headPivot.rotation.y=Ze(this.headPivot.rotation.y,n.headY,r,i),this.armLeft.rotation.x=Ze(this.armLeft.rotation.x,n.armLX,r,i),this.armRight.rotation.x=Ze(this.armRight.rotation.x,n.armRX,r,i),this.armLeft.rotation.z=Ze(this.armLeft.rotation.z,n.armLZ,r,i),this.armRight.rotation.z=Ze(this.armRight.rotation.z,n.armRZ,r,i),this.legLeft.rotation.x=Ze(this.legLeft.rotation.x,n.legLX,r,i),this.legRight.rotation.x=Ze(this.legRight.rotation.x,n.legRX,r,i),this.model.position.y=Ze(this.model.position.y,n.modelY,r,i)}dispose(){this.group.removeFromParent(),this.shadowMaterial.dispose();for(const t of this.mergedGeometries)t.dispose();this.mergedGeometries.length=0}mergeAnimatedGroups(){for(const t of[this.hips,this.headPivot,this.armLeft,this.armRight,this.legLeft,this.legRight])this.mergeDirectMeshes(t)}mergeDirectMeshes(t){const e=new Map;for(const i of t.children){if(!(i instanceof pt)||i instanceof es||Array.isArray(i.material)||i.children.length>0)continue;i.updateMatrix();const n=`${i.geometry.index?"i":"n"}:${Object.keys(i.geometry.attributes).sort().join(",")}`,r=`${i.material.uuid}:${i.castShadow?1:0}:${i.receiveShadow?1:0}:${n}`,a=i.geometry.clone();a.applyMatrix4(i.matrix);const o=e.get(r);o?(o.geometries.push(a),o.meshes.push(i)):e.set(r,{material:i.material,cast:i.castShadow,receive:i.receiveShadow,geometries:[a],meshes:[i]})}for(const i of e.values()){if(i.geometries.length<2){i.geometries[0]?.dispose();continue}const n=Ga(i.geometries,!1);if(!n){for(const a of i.geometries)a.dispose();continue}n.computeBoundingSphere();const r=new pt(n,i.material);r.castShadow=i.cast,r.receiveShadow=i.receive,t.add(r),this.mergedGeometries.push(n);for(const a of i.meshes)a.removeFromParent();for(const a of i.geometries)a.dispose()}}buildShadow(){const t=this.assets.getGeometry("character-shadow",()=>new is(.42,20));this.shadowMaterial=new Pn({color:1708072,transparent:!0,opacity:.28,depthWrite:!1}),this.shadow=new pt(t,this.shadowMaterial),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,this.shadow.scale.set(1.25,.85,1),this.group.add(this.shadow)}buildLegs(t,e){const i=e?t:16774116,n=b.woodDark;for(const[r,a]of[[this.legLeft,-1],[this.legRight,1]]){r.position.set(a*.13,.66,0),this.model.add(r);const o=new pt(this.assets.getGeometry("char-leg",()=>new bn(.07,.32,4,8)),this.assets.getMaterial(i));o.position.y=-.27,o.castShadow=!0,r.add(o);const l=new pt(this.assets.getGeometry("char-shoe",()=>new Qe(.15,.09,.23)),this.assets.getMaterial(n,{roughness:.5}));l.position.set(0,-.51,.04),l.castShadow=!0,r.add(l)}}buildTorso(t,e){const i=new pt(this.assets.getGeometry("char-torso",()=>new bn(.21,.28,5,10)),this.assets.getMaterial(t,{roughness:.78}));i.position.y=.18,i.castShadow=!0,this.hips.add(i);const n=new pt(this.assets.getGeometry("char-skirt",()=>new Dn(.2,.34,.34,14)),this.assets.getMaterial(e,{roughness:.8}));n.position.y=-.18,n.castShadow=!0,this.hips.add(n);const r=new pt(this.assets.getGeometry("char-collar",()=>new Ci(.18,.035,6,16)),this.assets.getMaterial(b.cream,{roughness:.7}));r.position.y=.39,r.rotation.x=Math.PI/2,this.hips.add(r);for(let a=0;a<3;a++){const o=new pt(this.assets.getGeometry("char-button",()=>new ue(.025,6,5)),this.assets.getMaterial(b.gold));o.position.set(0,.22-a*.13,.21),this.hips.add(o)}}buildHead(t,e,i){this.headPivot.position.y=.66,this.hips.add(this.headPivot);const n=new pt(this.assets.getGeometry("char-head-v2",()=>new ue(.33,24,18)),this.assets.getMaterial(t,{roughness:.85}));n.scale.set(1,1.02,.95),n.castShadow=!0,this.headPivot.add(n);for(const m of[-1,1]){const f=new pt(this.assets.getGeometry("char-ear-v2",()=>new ue(.06,10,8)),this.assets.getMaterial(t,{roughness:.85}));f.position.set(m*.305,0,.01),f.scale.set(.65,1,.55),this.headPivot.add(f)}const r=this.assets.getMaterial(e,{roughness:.9}),a=this.assets.getMaterial(new Ot(e).lerp(new Ot(16777215),.16).getHex(),{roughness:.85}),o=this.assets.getGeometry("char-hair-lock-v5",()=>new ue(1,18,14)),l=(m,f,x,v,M,P,A=0,R=0,k=0,S=r)=>{const T=new pt(o,S);return T.position.set(m,f,x),T.scale.set(v,M,P),T.rotation.set(A,R,k),T.castShadow=!0,this.headPivot.add(T),T},c=new pt(this.assets.getGeometry("char-hair-shell-v5",()=>new ue(.352,32,22,Math.PI/2+.94,Math.PI*2-1.88,0,Math.PI*.78)),r);c.position.set(0,.012,-.012),c.scale.set(1.02,1.03,.98),c.castShadow=!0,this.headPivot.add(c),l(0,.27,-.03,.315,.16,.3),l(-.15,.25,0,.16,.12,.22),l(.15,.25,0,.16,.12,.22),l(0,.28,.13,.24,.1,.16,-.18,0,0,a);for(let m=-3;m<=3;m++){const f=Math.abs(m)/3;l(m*.075,.22-f*.02,.292-f*.012,.065,.09+f*.01,.028,-.12,0,-m*.05)}for(const m of[-1,1])l(m*.255,.16,.245,.05,.12,.035,-.1,0,m*.25);for(const m of[-1,1])l(m*.285,.09,.17,.045,.14,.055,-.05,0,m*.2),l(m*.305,-.06,.105,.055,.18,.075,0,0,m*.06);l(-.14,-.05,-.32,.06,.13,.035,0,.25,-.1),l(.14,-.05,-.32,.06,.13,.035,0,-.25,.1),l(0,-.27,-.15,.14,.08,.07),l(0,.24,-.3,.11,.08,.09),l(0,.1,-.36,.065,.13,.07),l(-.01,-.03,-.39,.06,.12,.065),l(-.02,-.15,-.4,.052,.11,.058),l(-.03,-.25,-.395,.04,.09,.045),l(-.035,-.33,-.38,.028,.06,.03);for(const m of[-1,1]){const f=new pt(this.assets.getGeometry("char-hair-tie-lobe-v5",()=>new ue(.05,10,8)),this.assets.getMaterial(i,{roughness:.65}));f.position.set(m*.06,.25,-.39),f.scale.set(1.1,.8,.4),f.rotation.z=m*.2,this.headPivot.add(f)}const h=new pt(this.assets.getGeometry("char-hair-tie-knot-v5",()=>new ue(.024,8,6)),this.assets.getMaterial(b.gold));h.position.set(0,.25,-.415),this.headPivot.add(h);const u=7226419;for(const m of[-1,1]){const f=new pt(this.assets.getGeometry("char-eye-white-v3",()=>new ue(.078,16,12)),this.assets.getMaterial(b.paper,{roughness:.35}));f.position.set(m*.115,.005,.293),f.scale.set(1,1.12,.2),this.headPivot.add(f);const x=new pt(this.assets.getGeometry("char-iris-v3",()=>new ue(.047,14,10)),this.assets.getMaterial(u,{roughness:.2}));x.position.set(m*.115,.002,.304),x.scale.set(1,1.1,.18),this.headPivot.add(x);const v=new pt(this.assets.getGeometry("char-pupil-v3",()=>new ue(.026,12,10)),this.assets.getMaterial(b.ink,{roughness:.15}));v.position.set(m*.115,.002,.31),v.scale.set(1,1.05,.15),this.headPivot.add(v);const M=new pt(this.assets.getGeometry("char-shine-v3",()=>new ue(.014,8,6)),this.assets.getMaterial(b.paper));M.position.set(m*.102,.038,.314),M.scale.set(1,1,.35),this.headPivot.add(M);const P=new pt(this.assets.getGeometry("char-shine-small-v3",()=>new ue(.007,6,5)),this.assets.getMaterial(b.paper));P.position.set(m*.13,-.02,.315),P.scale.set(1,1,.35),this.headPivot.add(P);const A=new pt(this.assets.getGeometry("char-blush-v3",()=>new is(.04,14)),this.assets.getMaterial(b.pink,{transparent:!0,opacity:.45,roughness:.9}));A.position.set(m*.175,-.06,.258),A.rotation.y=m*.55,this.headPivot.add(A)}const d=new Ot(t).multiplyScalar(.9).getHex(),p=new pt(this.assets.getGeometry("char-nose-v2",()=>new ue(.018,8,6)),this.assets.getMaterial(d,{roughness:.85}));p.position.set(0,-.04,.302),p.scale.set(1,.8,.6),this.headPivot.add(p);const g=new pt(this.assets.getGeometry("char-mouth-v2",()=>new Ci(.055,.011,6,14,Math.PI)),this.assets.getMaterial(b.pinkDeep));g.position.set(0,-.115,.298),g.rotation.z=Math.PI,this.headPivot.add(g);const _=new pt(this.assets.getGeometry("char-lip-v2",()=>new ue(.018,8,6)),this.assets.getMaterial(b.pink));_.position.set(0,-.138,.302),_.scale.set(1.2,.35,.5),this.headPivot.add(_)}buildArms(t,e){for(const[i,n]of[[this.armLeft,-1],[this.armRight,1]]){i.position.set(n*.31,.38,0),this.hips.add(i);const r=new pt(this.assets.getGeometry("char-sleeve",()=>new bn(.085,.12,4,8)),this.assets.getMaterial(e,{roughness:.8}));r.position.y=-.04,r.castShadow=!0,i.add(r);const a=new pt(this.assets.getGeometry("char-arm",()=>new bn(.065,.2,4,8)),this.assets.getMaterial(t,{roughness:.85}));a.position.y=-.2,a.castShadow=!0,i.add(a);const o=new pt(this.assets.getGeometry("char-hand",()=>new ue(.075,10,8)),this.assets.getMaterial(t,{roughness:.85}));o.position.y=-.35,i.add(o)}}buildAccessory(t,e,i){if(!i){if(t==="bow"){const n=new ce;n.position.set(-.21,.38,.1),n.rotation.set(.15,-.35,.25),this.headPivot.add(n);for(const a of[-1,1]){const o=new pt(this.assets.getGeometry("char-bow",()=>new ue(.055,8,6)),this.assets.getMaterial(e,{roughness:.6}));o.position.set(a*.085,0,0),o.scale.set(1,.8,.45),o.rotation.z=a*.22,n.add(o)}const r=new pt(this.assets.getGeometry("char-bow-knot",()=>new ue(.026,8,6)),this.assets.getMaterial(b.gold));n.add(r)}else if(t==="beret"){const n=new ce;n.position.set(.03,.37,-.02),n.rotation.set(0,0,-.12),this.headPivot.add(n);const r=new pt(this.assets.getGeometry("char-beret",()=>new ue(.28,18,12,0,Math.PI*2,0,Math.PI*.5)),this.assets.getMaterial(e,{roughness:.7}));r.scale.set(1,.68,1),n.add(r);const a=new pt(this.assets.getGeometry("char-beret-brim",()=>new Ci(.282,.02,8,24)),this.assets.getMaterial(new Ot(e).multiplyScalar(.85).getHex(),{roughness:.75}));a.rotation.x=Math.PI/2,n.add(a);const o=new pt(this.assets.getGeometry("char-beret-stem",()=>new Dn(.018,.018,.07,6)),this.assets.getMaterial(b.gold));o.position.y=.28*.68+.035,n.add(o)}else if(t==="scarf"){const n=new pt(this.assets.getGeometry("char-scarf",()=>new Ci(.2,.055,7,18)),this.assets.getMaterial(e,{roughness:.85}));n.position.y=.39,n.rotation.x=Math.PI/2,this.hips.add(n);const r=new pt(this.assets.getGeometry("char-scarf-tail",()=>new Qe(.12,.38,.05)),this.assets.getMaterial(e,{roughness:.85}));r.position.set(.16,.2,.2),r.rotation.z=-.2,this.hips.add(r)}else if(t==="backpack"){const n=new pt(this.assets.getGeometry("char-backpack",()=>new Qe(.36,.42,.18)),this.assets.getMaterial(e,{roughness:.8}));n.position.set(0,.16,-.27),this.hips.add(n);for(const r of[-1,1]){const a=new pt(this.assets.getGeometry("char-strap",()=>new Qe(.045,.4,.03)),this.assets.getMaterial(b.cream,{roughness:.8}));a.position.set(r*.14,.23,-.18),this.hips.add(a)}}else if(t==="headband"){const n=new pt(this.assets.getGeometry("char-headband",()=>new Ci(.335,.025,6,20)),this.assets.getMaterial(e,{roughness:.7}));n.position.y=.21,n.rotation.x=Math.PI/2,this.headPivot.add(n);const r=new pt(this.assets.getGeometry("char-star",()=>new za(.06,0)),this.assets.getMaterial(e,{emissive:e,emissiveIntensity:.35}));r.position.set(.16,.24,.33),this.headPivot.add(r)}}}}class hg{sprite;canvas;context;texture;material;lastContacts=-1;lastJails=-1;lastHidden=!1;constructor(t){this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=128;const e=this.canvas.getContext("2d");if(!e)throw new Error("无法创建状态牌画布");this.context=e,this.texture=new Ac(this.canvas),this.texture.colorSpace=ye,this.material=new hr({map:this.texture,transparent:!0,depthWrite:!1,fog:!1}),this.sprite=new Yi(this.material),this.sprite.scale.set(.95,.48,1),this.sprite.renderOrder=5,t.add(this.sprite)}update(t,e,i){t===this.lastContacts&&e===this.lastJails&&i===this.lastHidden||(this.lastContacts=t,this.lastJails=e,this.lastHidden=i,this.sprite.visible=!i,!i&&this.redraw(t,e))}dispose(){this.sprite.removeFromParent(),this.texture.dispose(),this.material.dispose()}redraw(t,e){const i=this.context,n=this.canvas.width,r=this.canvas.height;i.clearRect(0,0,n,r),i.fillStyle="rgba(255,250,240,0.94)",kl(i,10,14,n-20,r-32,32),i.fill(),i.strokeStyle="rgba(43,33,64,0.22)",i.lineWidth=5,kl(i,10,14,n-20,r-32,32),i.stroke();for(let a=0;a<3;a++){const o=54+a*48,l=a<t;ug(i,o,45,15,l?"#f6c85f":"rgba(43,33,64,0.16)",l)}for(let a=0;a<3;a++){const o=54+a*48,l=a<e;dg(i,o,87,l?"#ff9ebb":"rgba(43,33,64,0.14)")}this.texture.needsUpdate=!0}}function ug(s,t,e,i,n,r){s.save(),r&&(s.shadowColor="rgba(246,200,95,0.8)",s.shadowBlur=10),s.beginPath();for(let a=0;a<10;a++){const o=a/10*Math.PI*2-Math.PI/2,l=a%2===0?i:i*.45,c=t+Math.cos(o)*l,h=e+Math.sin(o)*l;a===0?s.moveTo(c,h):s.lineTo(c,h)}s.closePath(),s.fillStyle=n,s.fill(),s.strokeStyle="rgba(43,33,64,0.35)",s.lineWidth=2,s.stroke(),s.restore()}function dg(s,t,e,i){s.save(),s.fillStyle=i,s.beginPath(),s.moveTo(t-13,e-7),s.quadraticCurveTo(t-2,e-15,t,e-2),s.quadraticCurveTo(t+2,e-15,t+13,e-7),s.quadraticCurveTo(t+4,e+6,t,e+12),s.quadraticCurveTo(t-4,e+6,t-13,e-7),s.closePath(),s.fill(),s.strokeStyle="rgba(43,33,64,0.24)",s.lineWidth=1.8,s.stroke(),s.restore()}function kl(s,t,e,i,n,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+i,e,t+i,e+n,r),s.arcTo(t+i,e+n,t,e+n,r),s.arcTo(t,e+n,t,e,r),s.arcTo(t,e,t+i,e,r),s.closePath()}class sr{role;id;record;model;billboard;yaw=0;desiredYaw=0;speed=0;baseState="idle";overrideState=null;overrideTimer=0;eliminatedTimer=0;eliminatedStarted=!1;constructor(t,e,i,n,r){this.role=e,this.id=i,this.record=r;const a=Ys[n%Ys.length];this.model=new cg(t,a,e==="ghost"),this.billboard=e==="hider"?new hg(this.model.statusAnchor):null,r&&(this.model.group.position.set(r.x,0,r.z),this.billboard?.update(r.contactCount,r.jailCount,!1))}get x(){return this.model.group.position.x}get z(){return this.model.group.position.z}get isEliminated(){return this.record?.state==="eliminated"}get isJailed(){return this.record?.state==="jailed"}get isFree(){return this.record?.state==="free"||this.role==="ghost"}get facingYaw(){return this.yaw}setPosition(t,e){this.model.group.position.set(t,0,e),this.record&&(this.record.x=t,this.record.z=e)}setFacingYaw(t){this.yaw=t,this.desiredYaw=t,this.model.group.rotation.y=t}setMove(t,e,i,n){this.record&&this.record.state!=="free"||(this.speed=i,i>.05?(this.desiredYaw=Math.atan2(t,e),this.baseState=n?"run":"walk"):this.baseState="idle")}setCrouch(t){this.model.setCrouch(t)}setRescuePose(){this.setOverride("rescue",.22)}playLunge(t=.4){this.setOverride("lunge",t)}playHit(){this.setOverride("hit",.28)}update(t,e){this.record?(this.record.state==="free"&&this.speed>.05&&(this.yaw=Ja(this.yaw,this.desiredYaw,11*t)),this.model.group.rotation.y=this.yaw,this.billboard?.update(this.record.contactCount,this.record.jailCount,this.record.state==="eliminated")):this.speed>.05&&(this.yaw=Ja(this.yaw,this.desiredYaw,11*t),this.model.group.rotation.y=this.yaw),this.overrideTimer>0&&(this.overrideTimer=Math.max(0,this.overrideTimer-t),this.overrideTimer===0&&(this.overrideState=null));let i;if(this.record?.state==="jailed")i="jail";else if(this.record?.state==="eliminated"){this.eliminatedStarted||(this.eliminatedStarted=!0,this.eliminatedTimer=0),this.eliminatedTimer+=t,this.model.setEliminated(this.eliminatedTimer/.9),this.billboard?.update(0,0,!0);return}else this.overrideState?i=this.overrideState:i=this.baseState;this.model.animate(i,e,t)}dispose(){this.billboard?.dispose(),this.model.dispose()}setOverride(t,e){this.overrideState=t,this.overrideTimer=e}}class Gc{path=[];index=0;stuckTimer=0;sidestepTimer=0;sidestepSign=1;setPath(t){this.path=t,this.index=0,this.stuckTimer=0,this.sidestepTimer=0}clear(){this.path=[],this.index=0,this.sidestepTimer=0,this.stuckTimer=0}get hasPath(){return this.index<this.path.length}get currentTarget(){return this.path[this.index]??null}follow(t,e,i,n,r){if(this.path.length===0||this.index>=this.path.length)return{x:e,z:i,dx:0,dz:0,moved:!1,reached:!0,stuck:!1};let a=this.path[this.index],o=se(e,i,a.x,a.z);if(o<.38){if(this.index++,this.index>=this.path.length)return{x:e,z:i,dx:0,dz:0,moved:!1,reached:!0,stuck:!1};a=this.path[this.index],o=se(e,i,a.x,a.z)}let l=o>.001?(a.x-e)/o:0,c=o>.001?(a.z-i)/o:0;this.sidestepTimer>0&&(this.sidestepTimer=Math.max(0,this.sidestepTimer-t),l=-(a.z-i)/Math.max(.001,o)*this.sidestepSign,c=(a.x-e)/Math.max(.001,o)*this.sidestepSign);const h=n*t,u=e+l*h,d=i+c*h;let p=!1,g=!1;if(r.blocksCircle(u,i,Z.nav.agentRadius)||(p=!0),r.blocksCircle(e,d,Z.nav.agentRadius)||(g=!0),!p&&!g)return this.sidestepTimer<=0&&(this.sidestepTimer=Z.nav.sidestepSeconds,this.sidestepSign=Math.random()>.5?1:-1),{x:e,z:i,dx:l,dz:c,moved:!1,reached:!1,stuck:!1};const _=p?u:e,m=g?d:i,f=se(e,i,_,m);return f<.04?this.stuckTimer+=t:this.stuckTimer=0,{x:_,z:m,dx:l,dz:c,moved:f>.001,reached:!1,stuck:this.stuckTimer>=Z.nav.stuckCheckInterval}}}class Hc{noises=[];addNoise(t,e,i,n){this.noises.push({x:t,z:e,radius:i,source:n,age:0}),this.noises.length>32&&this.noises.shift()}update(t){for(let e=this.noises.length-1;e>=0;e--)this.noises[e].age+=t,this.noises[e].age>2.4&&this.noises.splice(e,1)}clear(){this.noises.length=0}canGhostSee(t,e,i,n,r,a,o){const l=a?Z.perception.ghostVisionRange*.5:Z.perception.ghostVisionRange,c=se(t,e,n,r);if(c>l)return!1;if(c>.6){const h=Math.atan2(n-t,r-e);if(Math.abs(oa(h,i))>Z.perception.ghostFovRadians/2)return!1}return!o.segmentBlocked(t,e,n,r)}canHiderSeeGhost(t,e,i,n,r,a){const o=se(t,e,n,r);if(o<Z.perception.hiderDangerRadius)return!0;if(o>Z.perception.hiderVisionRange)return!1;const l=Math.atan2(n-t,r-e);return Math.abs(oa(l,i))>Z.perception.hiderFovRadians/2?!1:!a.segmentBlocked(t,e,n,r)}consumeSound(t,e){let i=-1,n=-1/0;for(let r=0;r<this.noises.length;r++){const a=this.noises[r],o=se(t,e,a.x,a.z);if(o>a.radius)continue;const l=a.radius-o-a.age*2;l>n&&(n=l,i=r)}return i<0?null:this.noises.splice(i,1)[0]}}class fg{character;perception=new Hc;world;follower=new Gc;state="patrol";targetId=-1;lastKnownX=0;lastKnownZ=0;memory=0;searchTimer=0;patrolIndex=0;thinkTimer=0;repathTimer=0;lastPathGoalX=1/0;lastPathGoalZ=1/0;lungePhase="none";lungeTimer=0;lungeCooldown=0;lungeX=0;lungeZ=1;lungeRecoverTimer=0;hitRecoveryTimer=0;constructor(t,e){this.world=e,this.character=new sr(t,"ghost",-1,0,null),this.character.setPosition(e.map.spawns.ghost.x,e.map.spawns.ghost.z)}get isLunging(){return this.lungePhase==="dash"}get isAttacking(){return this.lungePhase!=="none"}get chasingId(){return this.state==="chase"?this.targetId:-1}get stateName(){return this.lungePhase!=="none"?this.lungePhase:this.state}setPosition(t,e){this.character.setPosition(t,e),this.follower.clear(),this.repathTimer=0}get x(){return this.character.x}get z(){return this.character.z}addNoise(t,e,i,n){this.perception.addNoise(t,e,i,n)}get canAttack(){return this.hitRecoveryTimer<=0}get isRecovering(){return this.hitRecoveryTimer>0}onHitLanded(){this.hitRecoveryTimer=Z.contactCooldown,this.character.playHit(),this.lungePhase==="dash"&&(this.lungePhase="recover",this.lungeRecoverTimer=Z.aiGhost.lungeStun,this.lungeTimer=0)}notifyJail(t,e){this.state="investigate",this.lastKnownX=t,this.lastKnownZ=e,this.memory=5.5,this.searchTimer=3.5,this.follower.clear(),this.repathTimer=0}update(t,e,i){if(this.perception.update(t),this.lungeCooldown=Math.max(0,this.lungeCooldown-t),this.hitRecoveryTimer=Math.max(0,this.hitRecoveryTimer-t),this.lungePhase!=="none"){this.updateLunge(t,e),this.character.update(t,e);return}this.thinkTimer-=t,this.thinkTimer<=0&&(this.thinkTimer=.12,this.think(i)),this.state==="chase"?this.updateChase(t,i):this.state==="investigate"?this.updateInvestigate(t):this.updatePatrol(t),this.character.update(t,e)}dispose(){this.character.dispose()}think(t){let e=null,i=1/0;for(const r of t){if(!r.character.isFree||!this.perception.canGhostSee(this.character.x,this.character.z,this.character.facingYaw,r.character.x,r.character.z,r.hidden,this.world.collision))continue;const a=se(this.character.x,this.character.z,r.character.x,r.character.z);a<i&&(e=r,i=a)}if(e){this.state="chase",this.targetId=e.character.id,this.lastKnownX=e.character.x,this.lastKnownZ=e.character.z,this.memory=Z.perception.memorySeconds,this.searchTimer=0;return}if(this.state==="chase"&&(this.state="investigate",this.searchTimer=Z.perception.searchSeconds),this.memory>0)return;const n=this.perception.consumeSound(this.character.x,this.character.z);if(n){this.state="investigate",this.lastKnownX=n.x,this.lastKnownZ=n.z,this.memory=Z.perception.memorySeconds,this.searchTimer=Z.perception.searchSeconds,this.follower.clear(),this.repathTimer=0;return}this.state==="investigate"&&this.searchTimer<=0&&(this.state="patrol",this.follower.clear())}updateChase(t,e){const i=e.find(r=>r.character.id===this.targetId);if(!i||!i.character.isFree){this.state="investigate",this.memory=Math.min(this.memory,Z.perception.memorySeconds);return}this.lastKnownX=i.character.x,this.lastKnownZ=i.character.z,this.memory=Z.perception.memorySeconds;const n=se(this.character.x,this.character.z,this.lastKnownX,this.lastKnownZ);if(this.canAttack&&this.lungeCooldown<=0&&n>=Z.aiGhost.lungeRangeMin&&n<=Z.aiGhost.lungeRangeMax&&this.perception.canGhostSee(this.character.x,this.character.z,this.character.facingYaw,this.lastKnownX,this.lastKnownZ,i.hidden,this.world.collision)){this.startLunge(this.lastKnownX,this.lastKnownZ);return}n>.9?this.moveTo(this.lastKnownX,this.lastKnownZ,Z.aiGhost.chaseSpeed,t):this.character.setMove(0,0,0,!1),this.memory=Z.perception.memorySeconds}updateInvestigate(t){if(se(this.character.x,this.character.z,this.lastKnownX,this.lastKnownZ)>1.1){this.moveTo(this.lastKnownX,this.lastKnownZ,Z.aiGhost.investigateSpeed,t),this.memory=Math.max(0,this.memory-t);return}if(this.character.setMove(0,0,0,!1),this.searchTimer-=t,this.memory=Math.max(0,this.memory-t),this.searchTimer%1.5<t){const i=Math.random()*Math.PI*2,n=3+Math.random()*5,r=this.world.nav.nearestWalkable(this.lastKnownX+Math.cos(i)*n,this.lastKnownZ+Math.sin(i)*n);r&&(this.lastKnownX=r.x,this.lastKnownZ=r.z,this.follower.clear(),this.repathTimer=0)}this.searchTimer<=0&&(this.state="patrol",this.follower.clear(),this.repathTimer=0)}updatePatrol(t){const e=this.world.map.patrol;if(e.length===0)return;const i=e[this.patrolIndex%e.length];if(se(this.character.x,this.character.z,i.x,i.z)<1.1){this.patrolIndex=(this.patrolIndex+1)%e.length,this.follower.clear(),this.repathTimer=0,this.character.setMove(0,0,0,!1);return}this.moveTo(i.x,i.z,Z.aiGhost.patrolSpeed,t)}moveTo(t,e,i,n){this.repathTimer-=n;const r=se(t,e,this.lastPathGoalX,this.lastPathGoalZ);if(this.repathTimer<=0||r>1.2||!this.follower.hasPath){const l=this.world.nav.findPath({x:this.character.x,z:this.character.z},{x:t,z:e});this.follower.setPath(l),this.lastPathGoalX=t,this.lastPathGoalZ=e,this.repathTimer=Z.aiGhost.pathInterval}const a=i*(this.hitRecoveryTimer>0?Z.ghostHitRecoverySpeed:1),o=this.follower.follow(n,this.character.x,this.character.z,a,this.world.collision);o.stuck&&(this.follower.clear(),this.repathTimer=0),o.moved?(this.character.setPosition(o.x,o.z),this.character.setMove(o.dx,o.dz,a,a>4.5)):this.character.setMove(0,0,0,!1),o.reached&&this.character.setMove(0,0,0,!1)}startLunge(t,e){if(!this.canAttack)return;const i=t-this.character.x,n=e-this.character.z,r=Math.hypot(i,n);r<.001||(this.lungeX=i/r,this.lungeZ=n/r,this.lungePhase="windup",this.lungeTimer=Z.aiGhost.lungeWindup,this.character.playLunge(Z.aiGhost.lungeWindup+Z.aiGhost.lungeDuration))}updateLunge(t,e){if(this.lungePhase==="windup"){this.lungeTimer-=t,this.character.setMove(0,0,0,!1),this.lungeTimer<=0&&(this.lungePhase="dash",this.lungeTimer=Z.aiGhost.lungeDuration),this.character.update(t,e);return}if(this.lungePhase==="dash"){this.lungeTimer-=t;const i=Z.aiGhost.lungeSpeed,n=this.character.x+this.lungeX*i*t,r=this.character.z+this.lungeZ*i*t;this.world.collision.blocksCircle(n,this.character.z,Z.nav.agentRadius)||this.character.setPosition(n,this.character.z),this.world.collision.blocksCircle(this.character.x,r,Z.nav.agentRadius)||this.character.setPosition(this.character.x,r),this.character.setMove(this.lungeX,this.lungeZ,i,!0),this.character.update(t,e),this.lungeTimer<=0&&(this.lungePhase="recover",this.lungeRecoverTimer=Z.aiGhost.lungeStun,this.lungeCooldown=Z.aiGhost.lungeCooldown,this.character.playHit(),this.perception.addNoise(this.character.x,this.character.z,Z.perception.hearing.lungeMiss,"lungeMiss"));return}this.lungeRecoverTimer-=t,this.character.setMove(0,0,0,!1),this.character.update(t,e),this.lungeRecoverTimer<=0&&(this.lungePhase="none",this.repathTimer=0)}}class zl{character;record;world;follower=new Gc;state="hide";crouching=!1;repathTimer=0;lastGoalX=1/0;lastGoalZ=1/0;roamTimer=0;speedBoostTimer=0;hideSpotX=0;hideSpotZ=0;hasHideSpot=!1;constructor(t,e,i){this.world=e,this.record=i,this.character=new sr(t,"hider",i.id,i.paletteIndex,i),this.character.setPosition(i.x,i.z)}get isCrouching(){return this.crouching}get isHidden(){return this.crouching&&this.nearHidingSpot(this.character.x,this.character.z)}get currentState(){return this.state}get hasPath(){return this.follower.hasPath}get isSpeedBoosted(){return this.speedBoostTimer>0}get pathTarget(){return this.follower.currentTarget}get x(){return this.character.x}get z(){return this.character.z}update(t,e,i){if(this.speedBoostTimer=Math.max(0,this.speedBoostTimer-t),this.record.state!=="free"){this.crouching=!1,this.character.setCrouch(!1),this.character.setMove(0,0,0,!1),this.character.update(t,e),this.state="held";return}const n=se(this.character.x,this.character.z,i.ghostX,i.ghostZ);i.ghostVisible||n<Z.aiHider.fleeDistance?(this.state="flee",this.crouching=!1,this.character.setCrouch(!1),this.flee(t,i,n)):i.rescueTarget&&(n>Z.aiHider.rescueGhostDistance||i.ghostBusy)?(this.state="rescue",this.crouching=!1,this.character.setCrouch(!1),this.rescue(t,i.rescueTarget)):this.hide(t,i),this.character.update(t,e)}dispose(){this.character.dispose()}flee(t,e,i){this.repathTimer-=t;const n=se(this.character.x,this.character.z,this.lastGoalX,this.lastGoalZ);if(this.repathTimer<=0||!this.follower.hasPath||n<.6){const a=this.pickFleeTarget(e);let o=this.world.nav.findPath({x:this.character.x,z:this.character.z},a);if(o.length===0){const l=this.world.nav.randomWalkable(Math.random);o=this.world.nav.findPath({x:this.character.x,z:this.character.z},l),this.lastGoalX=l.x,this.lastGoalZ=l.z}else this.lastGoalX=a.x,this.lastGoalZ=a.z;this.follower.setPath(o),this.repathTimer=.65}const r=Z.aiHider.runSpeed;this.follow(t,r,!0),(!this.follower.hasPath||i<5.5)&&(this.repathTimer=0)}rescue(t,e){if(se(this.character.x,this.character.z,e.x,e.z)<=Z.aiHider.rescueStopDistance){this.character.setMove(0,0,0,!1),this.character.setRescuePose();return}if(this.repathTimer-=t,this.repathTimer<=0||!this.follower.hasPath){const n=this.world.nav.findPath({x:this.character.x,z:this.character.z},{x:e.x,z:e.z});this.follower.setPath(n),this.repathTimer=.5}this.follow(t,Z.aiHider.runSpeed,!0)}hide(t,e){if(this.nearHidingSpot(this.character.x,this.character.z)){this.crouching=!0,this.character.setCrouch(!0),this.character.setMove(0,0,0,!1),this.state="hide";return}if(this.state="hide",!this.hasHideSpot||!this.follower.hasPath||se(this.character.x,this.character.z,this.hideSpotX,this.hideSpotZ)<.8){const i=this.pickHidingSpot(e.ghostX,e.ghostZ);if(i){this.hideSpotX=i.x,this.hideSpotZ=i.z,this.hasHideSpot=!0;let n=this.world.nav.findPath({x:this.character.x,z:this.character.z},i);if(n.length===0){this.hasHideSpot=!1;const r=this.world.nav.randomWalkable(Math.random);n=this.world.nav.findPath({x:this.character.x,z:this.character.z},r)}this.follower.setPath(n)}else if(this.state="roam",this.hasHideSpot=!1,this.roamTimer-=t,this.roamTimer<=0){const n=this.world.nav.randomWalkable(Math.random),r=this.world.nav.findPath({x:this.character.x,z:this.character.z},n);this.follower.setPath(r),this.roamTimer=3+Math.random()*3}}this.crouching=!1,this.character.setCrouch(!1),this.follow(t,Z.aiHider.walkSpeed,!1)}grantSpeedBoost(){this.speedBoostTimer=Z.hiderHitBoostSeconds}follow(t,e,i){const n=e*(this.speedBoostTimer>0?Z.hiderHitBoostSpeed:1),r=this.follower.follow(t,this.character.x,this.character.z,n,this.world.collision);r.stuck&&(this.follower.clear(),this.repathTimer=0),r.moved?(this.character.setPosition(r.x,r.z),this.character.setMove(r.dx,r.dz,n,i)):this.character.setMove(0,0,0,!1),r.reached&&(this.character.setMove(0,0,0,!1),this.repathTimer=0)}pickHidingSpot(t,e){let i=null,n=1/0;for(const r of this.world.hidingSpots){if(se(r.x,r.z,t,e)<6)continue;const o=se(this.character.x,this.character.z,r.x,r.z)+(r.cover==="high"?-1.5:0)+Math.random()*5;o<n&&(n=o,i={x:r.x,z:r.z})}return i}pickFleeTarget(t){let e={x:this.character.x,z:this.character.z},i=-1/0;for(let n=0;n<10;n++){const r=n/10*Math.PI*2+Math.random()*.3,a=9+Math.random()*8,o=this.world.nav.nearestWalkable(this.character.x+Math.cos(r)*a,this.character.z+Math.sin(r)*a);if(!o)continue;const l=se(o.x,o.z,t.ghostX,t.ghostZ),c=this.world.collision.segmentBlocked(o.x,o.z,t.ghostX,t.ghostZ)?4:0,h=l+c-se(this.character.x,this.character.z,o.x,o.z)*.25;h>i&&(i=h,e=o)}return e}nearHidingSpot(t,e){for(const i of this.world.hidingSpots)if(se(t,e,i.x,i.z)<1.4)return!0;return!1}}const Hs=Z.nav.agentRadius;class pg{onCall=null;world;character;cameraRig;input;isGhost;stamina=Z.playerHider.staminaSeconds;staminaDelay=0;lungeCooldown=0;lungeTimer=0;hitRecoveryTimer=0;speedBoostTimer=0;lungeX=0;lungeZ=1;idleTime=0;crouching=!1;moving=!1;sprinting=!1;constructor(t,e,i,n,r){this.world=t,this.character=e,this.cameraRig=i,this.input=n,this.isGhost=r}get isLunging(){return this.lungeTimer>0}get isCrouching(){return this.crouching}get isMoving(){return this.moving}get isSprinting(){return this.sprinting}get canAttack(){return this.hitRecoveryTimer<=0}get isSpeedBoosted(){return!this.isGhost&&this.speedBoostTimer>0}get staminaRatio(){return this.isGhost?1:Math.max(0,this.stamina/Z.playerHider.staminaSeconds)}get lungeCooldownRatio(){return Math.max(0,this.lungeCooldown/Z.playerGhost.lungeCooldown)}resetTransient(){this.stamina=Z.playerHider.staminaSeconds,this.staminaDelay=0,this.lungeCooldown=0,this.lungeTimer=0,this.hitRecoveryTimer=0,this.speedBoostTimer=0,this.idleTime=0,this.crouching=!1,this.moving=!1,this.sprinting=!1}update(t,e){const i=this.input.consumeLookDelta();if(this.cameraRig.applyLook(i.x,i.y),this.lungeCooldown=Math.max(0,this.lungeCooldown-t),this.hitRecoveryTimer=Math.max(0,this.hitRecoveryTimer-t),this.speedBoostTimer=Math.max(0,this.speedBoostTimer-t),this.character.isJailed||this.character.isEliminated){this.character.setMove(0,0,0,!1),this.character.setCrouch(!1),this.moving=!1,this.character.isJailed&&this.input.consumePressed("call")&&this.onCall?.(),this.character.update(t,e),this.cameraRig.update(t,this.character.x,this.character.z,!1,!1);return}if(this.isGhost&&this.canAttack&&this.lungeTimer<=0&&this.lungeCooldown<=0&&this.input.consumePressed("lunge")&&this.startLunge(),this.lungeTimer>0){this.updateLunge(t,e),this.cameraRig.update(t,this.character.x,this.character.z,!1,!0);return}const n=this.input.getMoveInput(),r=Math.hypot(n.x,n.z)>.01,a=Math.sin(this.cameraRig.yaw),o=Math.cos(this.cameraRig.yaw);let l=n.z*a-n.x*o,c=n.z*o+n.x*a;const h=Math.hypot(l,c);h>.001&&(l/=h,c/=h);let u=this.isGhost?Z.playerGhost.walkSpeed:Z.playerHider.walkSpeed;if(this.sprinting=!1,this.crouching=!1,r?(this.input.sprinting&&(this.isGhost||this.stamina>.02)&&(u=this.isGhost?Z.playerGhost.sprintSpeed:Z.playerHider.sprintSpeed,this.sprinting=!0,this.isGhost||(this.stamina=Math.max(0,this.stamina-t),this.staminaDelay=Z.playerHider.staminaRegenDelay)),!this.isGhost&&this.input.crouching&&(u=Z.playerHider.crouchSpeed,this.crouching=!0,this.sprinting=!1),this.idleTime=0):(this.idleTime+=t,this.isGhost||(this.input.crouching?this.crouching=!0:this.input.isTouchDevice&&this.idleTime>1.2&&this.nearHidingSpot(this.character.x,this.character.z)&&(this.crouching=!0))),this.isGhost&&this.hitRecoveryTimer>0?u*=Z.ghostHitRecoverySpeed:!this.isGhost&&this.speedBoostTimer>0&&(u*=Z.hiderHitBoostSpeed),!this.sprinting&&!this.isGhost&&(this.staminaDelay>0?this.staminaDelay=Math.max(0,this.staminaDelay-t):this.stamina<Z.playerHider.staminaSeconds&&(this.stamina=Math.min(Z.playerHider.staminaSeconds,this.stamina+Z.playerHider.staminaRegenPerSecond*t))),this.moving=r&&u>.01,this.moving){const p=u*t,g=this.character.x+l*p,_=this.character.z+c*p;let m=!1,f=!1;this.world.collision.blocksCircle(g,this.character.z,Hs)||(this.character.setPosition(g,this.character.z),m=!0),this.world.collision.blocksCircle(this.character.x,_,Hs)||(this.character.setPosition(this.character.x,_),f=!0),!m&&!f&&(this.moving=!1)}const d=this.moving?u:0;this.character.setMove(l,c,d,this.sprinting),this.character.setCrouch(this.crouching),this.character.update(t,e),this.cameraRig.update(t,this.character.x,this.character.z,this.sprinting&&this.moving,!1)}onHitLanded(){this.isGhost&&(this.hitRecoveryTimer=Z.contactCooldown,this.lungeTimer=0,this.lungeCooldown=Z.playerGhost.lungeCooldown,this.character.playHit())}grantSpeedBoost(){this.isGhost||(this.speedBoostTimer=Z.hiderHitBoostSeconds)}startLunge(){this.lungeTimer=Z.playerGhost.lungeWindup+Z.playerGhost.lungeDuration,this.lungeX=Math.sin(this.cameraRig.yaw),this.lungeZ=Math.cos(this.cameraRig.yaw),this.character.playLunge(this.lungeTimer),this.cameraRig.addShake(.12)}updateLunge(t,e){this.lungeTimer=Math.max(0,this.lungeTimer-t);const i=this.lungeTimer<=Z.playerGhost.lungeDuration,n=Z.playerGhost.lungeSpeed;if(i){const r=this.character.x+this.lungeX*n*t,a=this.character.z+this.lungeZ*n*t;this.world.collision.blocksCircle(r,this.character.z,Hs)||this.character.setPosition(r,this.character.z),this.world.collision.blocksCircle(this.character.x,a,Hs)||this.character.setPosition(this.character.x,a),this.character.setMove(this.lungeX,this.lungeZ,n,!0),this.moving=!0}else this.character.setMove(0,0,0,!1),this.moving=!1;this.sprinting=!1,this.crouching=!1,this.character.setCrouch(!1),this.character.update(t,e),this.lungeTimer===0&&(this.lungeCooldown=Z.playerGhost.lungeCooldown,this.character.playHit())}nearHidingSpot(t,e){for(const i of this.world.hidingSpots)if(se(t,e,i.x,i.z)<1.5)return!0;return!1}}class mg{yaw=0;pitch=.12;camera;collision;desired=new C;lookTarget=new C;smoothLook=new C;shake=0;reducedMotion=!1;initialised=!1;constructor(t,e){this.camera=t,this.collision=e,this.camera.fov=Z.camera.normalFov,this.camera.updateProjectionMatrix()}setReducedMotion(t){this.reducedMotion=t}setYaw(t){this.yaw=t}applyLook(t,e){this.yaw-=t*.0024,this.pitch=En(this.pitch+e*.002,Z.camera.pitchMin,Z.camera.pitchMax)}addShake(t){this.reducedMotion||(this.shake=Math.min(1.2,this.shake+t))}update(t,e,i,n,r){const a=Z.camera.distance,o=Math.cos(this.pitch)*a,l=Z.camera.height+Math.sin(this.pitch)*a,c=Math.sin(this.yaw),h=Math.cos(this.yaw);let u=e-c*o,d=i-h*o,p=l;const g=this.collision.segmentHit(e,i,u,d,!0);if(g!==null){const f=Math.max(.2,g-Z.camera.collisionPadding/Math.max(.01,o));u=e+(u-e)*f,d=i+(d-i)*f,p=Math.max(.8,l*Math.max(.45,f)+.4)}if(this.desired.set(u,Math.max(.65,p),d),!this.initialised)this.camera.position.copy(this.desired),this.smoothLook.set(e,Z.camera.lookHeight,i),this.initialised=!0;else{const f=1-Math.exp(-12*t);this.camera.position.lerp(this.desired,f),this.lookTarget.set(e,Z.camera.lookHeight,i),this.smoothLook.lerp(this.lookTarget,f)}this.shake>.001&&!this.reducedMotion&&(this.camera.position.x+=(Math.random()-.5)*this.shake*.22,this.camera.position.y+=(Math.random()-.5)*this.shake*.16,this.camera.position.z+=(Math.random()-.5)*this.shake*.22,this.shake=Math.max(0,this.shake-t*3.2)),this.camera.lookAt(this.smoothLook);const _=r?Z.camera.lungeFov:n?Z.camera.sprintFov:Z.camera.normalFov,m=Ze(this.camera.fov,_,8,t);Math.abs(m-this.camera.fov)>.01&&(this.camera.fov=m,this.camera.updateProjectionMatrix())}reset(){this.yaw=0,this.pitch=.12,this.shake=0,this.initialised=!1}}class gg{group=new ce;assets;materials=new Map;particles=[];cursor=0;constructor(t,e,i=140){this.assets=e,t.add(this.group);for(let n=0;n<i;n++){const r=new Yi(this.getMaterial("spark",16777215));r.visible=!1,this.group.add(r),this.particles.push({sprite:r,velocity:new C,life:0,maxLife:1,baseScale:1,gravity:0})}}burst(t,e,i,n,r,a=10,o={}){const l=o.speed??2.4,c=o.size??.22,h=o.life??.8,u=o.gravity??.8,d=o.spread??Math.PI*2;for(let p=0;p<a;p++){const g=this.particles[this.cursor%this.particles.length];this.cursor++;const _=Math.random()*d,m=Math.random()*Math.PI*.5,f=l*(.55+Math.random()*.7);g.velocity.set(Math.cos(_)*Math.cos(m)*f,Math.sin(m)*f,Math.sin(_)*Math.cos(m)*f);const x=h*(.7+Math.random()*.6);g.life=x,g.maxLife=x,g.baseScale=c*(.7+Math.random()*.6),g.gravity=u,g.sprite.position.set(t,e,i),g.sprite.material=this.getMaterial(r,n),g.sprite.visible=!0,g.sprite.scale.setScalar(g.baseScale)}}update(t){for(const e of this.particles){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1;continue}e.velocity.y-=e.gravity*t,e.sprite.position.addScaledVector(e.velocity,t);const i=e.life/e.maxLife;e.sprite.scale.setScalar(e.baseScale*Math.max(.05,i))}}dispose(){this.group.removeFromParent();for(const t of this.materials.values())t.dispose();this.materials.clear(),this.particles.length=0}getMaterial(t,e){const i=`${t}:${e}`,n=this.materials.get(i);if(n)return n;const r=this.assets.getCanvasTexture(`particle-${t}`,64,64,(o,l,c)=>{if(o.clearRect(0,0,l,c),o.fillStyle="#ffffff",t==="star"){o.beginPath();for(let h=0;h<10;h++){const u=h/10*Math.PI*2-Math.PI/2,d=h%2===0?l*.42:l*.18,p=l/2+Math.cos(u)*d,g=c/2+Math.sin(u)*d;h===0?o.moveTo(p,g):o.lineTo(p,g)}o.closePath(),o.fill()}else if(t==="heart")o.beginPath(),o.moveTo(l/2,c*.82),o.bezierCurveTo(l*.08,c*.52,l*.18,c*.16,l/2,c*.36),o.bezierCurveTo(l*.82,c*.16,l*.92,c*.52,l/2,c*.82),o.fill();else if(t==="bubble")o.beginPath(),o.arc(l/2,c/2,l*.34,0,Math.PI*2),o.fill(),o.globalCompositeOperation="destination-out",o.beginPath(),o.arc(l/2,c/2,l*.22,0,Math.PI*2),o.fill();else{const h=o.createRadialGradient(l/2,c/2,0,l/2,c/2,l/2);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.4,"rgba(255,255,255,0.6)"),h.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=h,o.fillRect(0,0,l,c)}}),a=new hr({map:r,color:e,transparent:!0,opacity:.9,depthWrite:!1,blending:t==="bubble"||t==="heart"?_i:$i});return this.materials.set(i,a),a}}const Ai=4;class vg{bounds;colliders=[];grid=new Map;queryStamp=new Uint32Array(0);queryCounter=0;constructor(t){this.bounds=t}addSpec(t){t.shape==="box"?this.addBox(t.x,t.z,t.halfX??.5,t.halfZ??.5,t.blocksSight??!0):this.addCircle(t.x,t.z,t.radius??.5,t.blocksSight??!0)}addBox(t,e,i,n,r=!0){this.pushCollider({shape:"box",x:t,z:e,halfX:i,halfZ:n,radius:Math.hypot(i,n),minX:t-i,maxX:t+i,minZ:e-n,maxZ:e+n,blocksSight:r})}addCircle(t,e,i,n=!0){this.pushCollider({shape:"circle",x:t,z:e,halfX:i,halfZ:i,radius:i,minX:t-i,maxX:t+i,minZ:e-i,maxZ:e+i,blocksSight:n})}get count(){return this.colliders.length}get allColliders(){return this.colliders.map(t=>({shape:t.shape,x:t.x,z:t.z,halfX:t.halfX,halfZ:t.halfZ,radius:t.radius,blocksSight:t.blocksSight}))}blocksCircle(t,e,i){if(t-i<this.bounds.minX||t+i>this.bounds.maxX||e-i<this.bounds.minZ||e+i>this.bounds.maxZ)return!0;const n=this.query(t,e,i);for(const r of n){const a=this.colliders[r];if(a.shape==="circle"){const o=a.radius+i;if((t-a.x)*(t-a.x)+(e-a.z)*(e-a.z)<o*o)return!0}else if(t>a.minX-i&&t<a.maxX+i&&e>a.minZ-i&&e<a.maxZ+i)return!0}return!1}segmentBlocked(t,e,i,n){for(const r of this.colliders)if(r.blocksSight&&this.segmentIntersectsCollider(t,e,i,n,r))return!0;return!1}segmentHit(t,e,i,n,r=!1){let a=null;for(const o of this.colliders){if(r&&!o.blocksSight)continue;const l=this.segmentColliderT(t,e,i,n,o);l!==null&&(a===null||l<a)&&(a=l)}return a}pushCollider(t){const e=this.colliders.length;this.colliders.push(t);const i=Math.floor(t.minX/Ai),n=Math.floor(t.maxX/Ai),r=Math.floor(t.minZ/Ai),a=Math.floor(t.maxZ/Ai);for(let o=i;o<=n;o++)for(let l=r;l<=a;l++){const c=`${o},${l}`;let h=this.grid.get(c);h||(h=[],this.grid.set(c,h)),h.push(e)}}query(t,e,i){this.queryStamp.length!==this.colliders.length&&(this.queryStamp=new Uint32Array(this.colliders.length)),this.queryCounter=this.queryCounter+1>>>0,this.queryCounter===0&&(this.queryStamp.fill(0),this.queryCounter=1);const n=Math.floor((t-i)/Ai),r=Math.floor((t+i)/Ai),a=Math.floor((e-i)/Ai),o=Math.floor((e+i)/Ai),l=[];for(let c=n;c<=r;c++)for(let h=a;h<=o;h++){const u=this.grid.get(`${c},${h}`);if(u)for(const d of u)this.queryStamp[d]!==this.queryCounter&&(this.queryStamp[d]=this.queryCounter,l.push(d))}return l}segmentIntersectsCollider(t,e,i,n,r){return this.segmentColliderT(t,e,i,n,r)!==null}segmentColliderT(t,e,i,n,r){return r.shape==="circle"?_g(t,e,i,n,r.x,r.z,r.radius):xg(t,e,i,n,r.minX,r.maxX,r.minZ,r.maxZ)}}function _g(s,t,e,i,n,r,a){const o=e-s,l=i-t,c=s-n,h=t-r,u=o*o+l*l,d=2*(c*o+h*l),p=c*c+h*h-a*a;if(u<1e-8)return p<=0?0:null;const g=d*d-4*u*p;if(g<0)return null;const _=Math.sqrt(g),m=(-d-_)/(2*u),f=(-d+_)/(2*u);return m>=0&&m<=1?m:f>=0&&f<=1?f:p<=0&&m<0?0:null}function xg(s,t,e,i,n,r,a,o){const l=e-s,c=i-t;let h=0,u=1;if(Math.abs(l)<1e-8){if(s<n||s>r)return null}else{const d=1/l;let p=(n-s)*d,g=(r-s)*d;if(p>g&&([p,g]=[g,p]),h=Math.max(h,p),u=Math.min(u,g),h>u)return null}if(Math.abs(c)<1e-8){if(t<a||t>o)return null}else{const d=1/c;let p=(a-t)*d,g=(o-t)*d;if(p>g&&([p,g]=[g,p]),h=Math.max(h,p),u=Math.min(u,g),h>u)return null}return h>=0&&h<=1?h:null}const Fl=Math.SQRT2;class yg{bounds;cellSize;cols;rows;agentRadius;collision;blocked;walkableCells=0;constructor(t,e,i=Z.nav.cellSize,n=Z.nav.agentRadius){this.bounds=t,this.collision=e,this.cellSize=i,this.agentRadius=n,this.cols=Math.max(1,Math.ceil((t.maxX-t.minX)/i)),this.rows=Math.max(1,Math.ceil((t.maxZ-t.minZ)/i)),this.blocked=new Uint8Array(this.cols*this.rows);for(let r=0;r<this.rows;r++)for(let a=0;a<this.cols;a++){const o=this.cellCenter(a,r),l=e.blocksCircle(o.x,o.z,n);this.blocked[r*this.cols+a]=l?1:0,l||this.walkableCells++}}get totalCells(){return this.blocked.length}get walkableCount(){return this.walkableCells}isWalkable(t,e){return t<0||e<0||t>=this.cols||e>=this.rows?!1:this.blocked[e*this.cols+t]===0}isWalkableWorld(t,e){const i=Math.floor((t-this.bounds.minX)/this.cellSize),n=Math.floor((e-this.bounds.minZ)/this.cellSize);return this.isWalkable(i,n)}cellCenter(t,e){return{x:this.bounds.minX+(t+.5)*this.cellSize,z:this.bounds.minZ+(e+.5)*this.cellSize}}findPath(t,e){const i=this.nearestCell(t),n=this.nearestCell(e);if(!i||!n)return[];if(i.col===n.col&&i.row===n.row)return[this.isWalkableWorld(e.x,e.z)?{x:e.x,z:e.z}:this.cellCenter(n.col,n.row)];const r=this.blocked.length,a=new Float32Array(r).fill(1/0),o=new Int32Array(r).fill(-1),l=new Uint8Array(r),c=new Mg,h=i.row*this.cols+i.col,u=n.row*this.cols+n.col;a[h]=0,c.push(h,this.heuristic(i.col,i.row,n.col,n.row));let d=0;for(;c.size>0&&d<Z.nav.maxExpansions;){const p=c.pop();if(p===null)break;if(l[p])continue;if(l[p]=1,d++,p===u){const m=this.reconstruct(o,p);return this.finishPath(m,e)}const g=p%this.cols,_=Math.floor(p/this.cols);for(let m=-1;m<=1;m++)for(let f=-1;f<=1;f++){if(f===0&&m===0)continue;const x=g+f,v=_+m;if(!this.isWalkable(x,v)||f!==0&&m!==0&&(!this.isWalkable(g+f,_)||!this.isWalkable(g,_+m)))continue;const M=v*this.cols+x;if(l[M])continue;const P=f!==0&&m!==0?Fl:1,A=a[p]+P;A>=a[M]||(o[M]=p,a[M]=A,c.push(M,A+this.heuristic(x,v,n.col,n.row)))}}return[]}lineWalkable(t,e){const i=Math.hypot(e.x-t.x,e.z-t.z),n=Math.max(1,Math.ceil(i/(this.cellSize*.5)));for(let r=0;r<=n;r++){const a=r/n,o=t.x+(e.x-t.x)*a,l=t.z+(e.z-t.z)*a;if(this.collision.blocksCircle(o,l,this.agentRadius))return!1}return!0}nearestWalkable(t,e){const i=this.nearestCell({x:t,z:e});return i?this.cellCenter(i.col,i.row):null}randomWalkable(t){for(let e=0;e<300;e++){const i=Math.floor(t()*this.cols),n=Math.floor(t()*this.rows);if(this.isWalkable(i,n))return this.cellCenter(i,n)}for(let e=0;e<this.rows;e++)for(let i=0;i<this.cols;i++)if(this.isWalkable(i,e))return this.cellCenter(i,e);return{x:(this.bounds.minX+this.bounds.maxX)/2,z:(this.bounds.minZ+this.bounds.maxZ)/2}}nearestCell(t){const e=Math.floor((t.x-this.bounds.minX)/this.cellSize),i=Math.floor((t.z-this.bounds.minZ)/this.cellSize);if(this.isWalkable(e,i))return{col:e,row:i};for(let n=1;n<=24;n++)for(let r=-n;r<=n;r++)for(let a=-n;a<=n;a++){if(Math.abs(a)!==n&&Math.abs(r)!==n)continue;const o=e+a,l=i+r;if(this.isWalkable(o,l))return{col:o,row:l}}return null}reconstruct(t,e){const i=[];let n=e;for(;n!==-1;)i.push(n),n=t[n];return i.reverse(),i.map(r=>{const a=r%this.cols,o=Math.floor(r/this.cols);return this.cellCenter(a,o)})}finishPath(t,e){if(t.length===0)return[];const i=[t[0]];let n=0;for(;n<t.length-1;){let a=n+1;for(let o=t.length-1;o>n;o--)if(this.lineWalkable(t[n],t[o])){a=o;break}i.push(t[a]),n=a}const r=i[i.length-1];return this.isWalkableWorld(e.x,e.z)&&this.lineWalkable(r,e)&&(i[i.length-1]={x:e.x,z:e.z}),i}heuristic(t,e,i,n){const r=Math.abs(i-t),a=Math.abs(n-e);return Math.max(r,a)+(Fl-1)*Math.min(r,a)}}class Mg{indices=[];scores=[];get size(){return this.indices.length}push(t,e){this.indices.push(t),this.scores.push(e);let i=this.indices.length-1;for(;i>0;){const n=i-1>>1;if(this.scores[n]<=this.scores[i])break;this.swap(n,i),i=n}}pop(){if(this.indices.length===0)return null;const t=this.indices[0],e=this.indices.pop(),i=this.scores.pop();if(this.indices.length>0&&e!==void 0&&i!==void 0){this.indices[0]=e,this.scores[0]=i;let n=0;for(;;){const r=n*2+1,a=r+1;let o=n;if(r<this.indices.length&&this.scores[r]<this.scores[o]&&(o=r),a<this.indices.length&&this.scores[a]<this.scores[o]&&(o=a),o===n)break;this.swap(n,o),n=o}}return t}swap(t,e){const i=this.indices[t];this.indices[t]=this.indices[e],this.indices[e]=i;const n=this.scores[t];this.scores[t]=this.scores[e],this.scores[e]=n}}function wa(s,t,e,i,n){return{shape:"box",x:s,z:t,halfX:e,halfZ:i,blocksSight:n}}function Le(s,t,e,i){return{shape:"circle",x:s,z:t,radius:e,blocksSight:i}}function Sg(s,t,e=0){const i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e));return[s*i+t*n,s*n+t*i]}function ni(s,t,e,i){const[n,r]=Sg(t,e,s.rotY??0);return wa(s.x,s.z,n,r,i)}function bg(s){const t=s.scale??1;switch(s.kind){case"trainCar":return[ni(s,7*t,1.7*t,!0)];case"clockTower":return[ni(s,2.2*t,2.2*t,!0)];case"ticketBooth":return[ni(s,2.2*t,2*t,!0)];case"luggage":return[ni(s,1.4*t,1*t,!0)];case"bench":return[ni(s,1.6*t,.45*t,!1)];case"planter":return[Le(s.x,s.z,.9*t,!1)];case"lamp":return[Le(s.x,s.z,.34*t,!1)];case"stall":return[ni(s,1.9*t,1.3*t,!0)];case"balloonCart":return[ni(s,1.3*t,1*t,!1)];case"picnicTable":return[ni(s,1.8*t,1.35*t,!1)];case"sign":return[Le(s.x,s.z,.3*t,!1)];case"tree":return[Le(s.x,s.z,.55*t,!1)];case"rock":return[Le(s.x,s.z,1.35*t,!0)];case"teacup":return[Le(s.x,s.z,1.7*t,!1)];case"carousel":return[Le(s.x,s.z,8.2*t,!0)];case"fountain":return[Le(s.x,s.z,4.2*t,!0)];case"ferrisWheel":{const e=[];for(const i of[-3,3])for(const n of[-2,2])e.push(Le(s.x+i*t,s.z+n*t,.5*t,!1));return e}case"gazebo":{const e=[];for(let n=0;n<8;n++){const r=n/8*Math.PI*2;e.push(Le(s.x+Math.cos(r)*3.6*t,s.z+Math.sin(r)*3.6*t,.24*t,!1))}return e}case"flowerArch":return[Le(s.x-1.8*t,s.z,.34*t,!1),Le(s.x+1.8*t,s.z,.34*t,!1)];case"canopy":{const e=(s.length??16)*t/2-.8,i=4*t-.8;return[Le(s.x-e,s.z-i,.3*t,!1),Le(s.x+e,s.z-i,.3*t,!1),Le(s.x-e,s.z+i,.3*t,!1),Le(s.x+e,s.z+i,.3*t,!1)]}case"hedge":{const e=(s.length??8)*t/2;return[ni(s,e,.6*t,!0)]}case"fence":{const e=(s.length??8)*t/2;return[ni(s,e,.16*t,!1)]}case"mansion":return[ni(s,15*t,1.2*t,!0)];case"greenhouse":return wg(s.x,s.z,t);default:return[]}}function wg(s,t,e){const i=7*e,n=5*e,r=.18*e,a=1.25*e,o=(i-a)/2,l=a+o,c=[];for(const h of[-1,1])for(const u of[-1,1])c.push(wa(s+u*l,t+h*n,o,r,!0));for(const h of[-1,1])for(const u of[-1,1])c.push(wa(s+h*i,t+u*l,r,o,!0));return c}function Eg(s){const{center:t,radius:e}=s.jail,i=.16,n=1.1,r=(e-n)/2,a=n+r;return[{shape:"box",x:t.x-e,z:t.z,halfX:i,halfZ:e,blocksSight:!0},{shape:"box",x:t.x,z:t.z-e,halfX:e,halfZ:i,blocksSight:!0},{shape:"box",x:t.x,z:t.z+e,halfX:e,halfZ:i,blocksSight:!0},{shape:"box",x:t.x+e,z:t.z-a,halfX:i,halfZ:r,blocksSight:!0},{shape:"box",x:t.x+e,z:t.z+a,halfX:i,halfZ:r,blocksSight:!0}]}function Tg(s){const t=[];for(const e of s.props)t.push(...bg(e));return t.push(...Eg(s)),t}const $n=new C;function $e(s,t,e,i,n,r){const a=2*Math.PI*n/4,o=Math.max(r-2*n,0),l=Math.PI/4;$n.copy(t),$n[i]=0,$n.normalize();const c=.5*a/(a+o),h=1-$n.angleTo(s)/l;return Math.sign($n[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Ag extends Qe{constructor(t=1,e=1,i=1,n=2,r=.1){if(n=n*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,n,n,n),n===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new C,l=new C,c=new C(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new C,_=.5/n;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=$e(g,l,"z","y",r,i),d[f+1]=1-$e(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-$e(g,l,"z","y",r,i),d[f+1]=1-$e(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-$e(g,l,"x","z",r,t),d[f+1]=$e(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[f+0]=1-$e(g,l,"x","z",r,t),d[f+1]=1-$e(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[f+0]=1-$e(g,l,"x","y",r,t),d[f+1]=1-$e(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=$e(g,l,"x","y",r,t),d[f+1]=1-$e(g,l,"y","x",r,e);break}}}const Vs=[b.pink,b.mint,b.gold,b.lavender,b.sky,b.coral];class Cg{constructor(t){this.assets=t}buildJail(t){const e=new ce;e.position.set(t.center.x,0,t.center.z);const i=t.radius,n=1.1,r=t.theme==="park"?{fence:b.pink,accent:b.mint,floor:b.pink}:t.theme==="manor"?{fence:b.lavender,accent:b.leaf,floor:b.lavender}:{fence:b.gold,accent:b.cream,floor:b.pink},a=new pt(this.assets.getGeometry("jail-floor",()=>new In(i*2,i*2)),this.mat(r.floor,{transparent:!0,opacity:.16,roughness:.9,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.02,e.add(a),this.fenceLine(e,-i,-i,-i,i,r.fence,r.accent),this.fenceLine(e,-i,-i,i,-i,r.fence,r.accent),this.fenceLine(e,-i,i,i,i,r.fence,r.accent),this.fenceLine(e,i,-i,i,-n,r.fence,r.accent),this.fenceLine(e,i,n,i,i,r.fence,r.accent);for(let l=0;l<t.slots.length;l++){const c=t.slots[l],h=this.cylinder(.52,.58,.06,20,r.accent,{material:{emissive:r.accent,emissiveIntensity:.35},cast:!1});h.position.set(c.x-t.center.x,.04,c.z-t.center.z),e.add(h);const u=this.torus(.58,.045,r.fence,{tubularSegments:24});u.rotation.x=Math.PI/2,u.position.set(c.x-t.center.x,.1,c.z-t.center.z),e.add(u),this.glow(e,r.accent,c.x-t.center.x,.35,c.z-t.center.z,1.2)}this.addBoard(e,"关押区",`jail-sign-${t.theme}`,i+.12,2.35,0,2.4,.9,"#fff6e7","#2b2140",Math.PI/2);for(const[l,c]of[[-i,-i],[-i,i],[i,-i],[i,i]])this.place(e,this.cylinder(.06,.08,2.6,8,b.inkSoft),l,1.3,c),this.place(e,this.sphere(.18,b.warmLight,{segments:8,material:{emissive:b.warmLight,emissiveIntensity:1.2}}),l,2.7,c),this.glow(e,b.warmLight,l,2.7,c,1.7);return{group:e}}build(t){const e=new ce;e.position.set(t.x,0,t.z),e.rotation.y=t.rotY??0,e.scale.setScalar(t.scale??1);let i,n=!0;switch(t.kind){case"lamp":this.buildLamp(e,t);break;case"bench":this.buildBench(e,t);break;case"planter":this.buildPlanter(e,t);break;case"luggage":this.buildLuggage(e,t);break;case"trainCar":this.buildTrainCar(e,t);break;case"clockTower":this.buildClockTower(e);break;case"canopy":this.buildCanopy(e,t);break;case"ticketBooth":this.buildTicketBooth(e);break;case"carousel":i=this.buildCarousel(e);break;case"ferrisWheel":i=this.buildFerrisWheel(e),n=!1;break;case"stall":this.buildStall(e,t);break;case"balloonCart":i=this.buildBalloonCart(e,t),n=!1;break;case"hedge":this.buildHedge(e,t);break;case"fence":this.buildFence(e,t);break;case"fountain":i=this.buildFountain(e),n=!1;break;case"greenhouse":this.buildGreenhouse(e);break;case"gazebo":this.buildGazebo(e);break;case"flowerArch":this.buildFlowerArch(e,t);break;case"mansion":this.buildMansion(e);break;case"tree":this.buildTree(e,t);break;case"rock":this.buildRock(e);break;case"picnicTable":this.buildPicnicTable(e,t);break;case"sign":this.buildSign(e,t);break;case"teacup":i=this.buildTeacup(e,t);break}return{group:e,update:i,mergeable:n}}mat(t,e={}){return this.assets.getMaterial(t,e)}roundBox(t,e,i,n,r={}){const a=r.radius??Math.min(.08,Math.min(t,e,i)*.16),o=`rbox:${t}:${e}:${i}:${a}`,l=this.assets.getGeometry(o,()=>new Ag(t,e,i,2,a)),c=new pt(l,this.mat(n,r.material));return c.castShadow=r.cast??!0,c.receiveShadow=r.receive??!1,c}flatBox(t,e,i,n,r={}){const a=`box:${t}:${e}:${i}`,o=this.assets.getGeometry(a,()=>new Qe(t,e,i)),l=new pt(o,this.mat(n,r.material));return l.castShadow=r.cast??!1,l.receiveShadow=r.receive??!1,l}cylinder(t,e,i,n,r,a={}){const o=`cyl:${t}:${e}:${i}:${n}`,l=this.assets.getGeometry(o,()=>new Dn(t,e,i,n)),c=new pt(l,this.mat(r,a.material));return c.castShadow=a.cast??!0,c.receiveShadow=a.receive??!1,c}sphere(t,e,i={}){const n=i.segments??16,r=`sph:${t}:${n}`,a=this.assets.getGeometry(r,()=>new ue(t,n,Math.max(8,Math.floor(n*.75)))),o=new pt(a,this.mat(e,i.material));return o.castShadow=i.cast??!1,i.scaleY&&(o.scale.y=i.scaleY),o}cone(t,e,i,n){const r=`cone:${t}:${e}:${i}`,a=this.assets.getGeometry(r,()=>new nr(t,e,i)),o=new pt(a,this.mat(n));return o.castShadow=!0,o}torus(t,e,i,n={}){const r=n.radialSegments??8,a=n.tubularSegments??32,o=n.arc??Math.PI*2,l=`torus:${t}:${e}:${r}:${a}:${o}`,c=this.assets.getGeometry(l,()=>new Ci(t,e,r,a,o)),h=new pt(c,this.mat(i));return h.castShadow=!0,h}place(t,e,i=0,n=0,r=0,a=0,o=0,l=0){return e.position.set(i,n,r),e.rotation.set(a,o,l),t.add(e),e}cylinderBetween(t,e,i,n,r,a=!1){const o=new C().subVectors(i,e),l=o.length(),c=this.cylinder(n,n,l,8,r,{cast:a});return c.position.copy(e).add(i).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new C(0,1,0),o.normalize()),t.add(c),c}glow(t,e,i,n,r,a){const o=this.assets.getCanvasTexture("glow-soft",128,128,(c,h,u)=>{const d=c.createRadialGradient(h/2,u/2,0,h/2,u/2,h/2);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.35,"rgba(255,255,255,0.55)"),d.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=d,c.fillRect(0,0,h,u)}),l=new Yi(this.assets.getSpriteMaterial(e,{opacity:.72}));return l.material.map=o,l.material.needsUpdate=!0,l.position.set(i,n,r),l.scale.setScalar(a),t.add(l),l}signTexture(t,e,i,n){return this.assets.getCanvasTexture(t,512,256,(r,a,o)=>{r.clearRect(0,0,a,o),r.fillStyle=i,this.roundRect(r,12,12,a-24,o-24,42),r.fill(),r.strokeStyle="rgba(43,33,64,0.28)",r.lineWidth=8,this.roundRect(r,22,22,a-44,o-44,34),r.stroke(),r.fillStyle=n,r.font='900 96px "PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(e,a/2,o/2+4)})}roundRect(t,e,i,n,r,a){t.beginPath(),t.moveTo(e+a,i),t.arcTo(e+n,i,e+n,i+r,a),t.arcTo(e+n,i+r,e,i+r,a),t.arcTo(e,i+r,e,i,a),t.arcTo(e,i,e+n,i,a),t.closePath()}addBoard(t,e,i,n,r,a,o=2.6,l=1.1,c="#fff6e7",h="#2b2140",u=0){const d=this.signTexture(i,e,c,h),p=new pt(this.assets.getGeometry(`plane:${o}:${l}`,()=>new In(o,l)),this.assets.getBasicTextureMaterial(d,{transparent:!0}));p.position.set(n,r,a),p.rotation.y=u,t.add(p);const g=this.roundBox(o+.16,l+.16,.1,b.woodDark,{radius:.05,cast:!1});g.position.set(n,r,a-.07),g.rotation.y=u,t.add(g)}fenceLine(t,e,i,n,r,a,o){const l=Math.hypot(n-e,r-i),c=Math.max(2,Math.round(l/1.3)+1);for(let h=0;h<c;h++){const u=h/(c-1),d=e+(n-e)*u,p=i+(r-i)*u;this.place(t,this.cylinder(.065,.09,1.35,8,a),d,.68,p),this.place(t,this.sphere(.11,o,{segments:8}),d,1.4,p)}this.cylinderBetween(t,new C(e,.55,i),new C(n,.55,r),.045,o),this.cylinderBetween(t,new C(e,1,i),new C(n,1,r),.045,o)}addStringLights(t,e,i,n,r,a=b.warmLight){const o=[];for(let g=0;g<=n;g++){const _=g/n,m=new C().lerpVectors(e,i,_);m.y-=Math.sin(_*Math.PI)*r,o.push(m)}const l=new Cc(o),c=new pt(this.assets.getGeometry(`tube:${n}:${r}`,()=>new Fa(l,20,.014,4,!1)),this.mat(b.inkSoft));c.castShadow=!1,t.add(c);const h=this.assets.getGeometry("bulb",()=>new ue(.065,6,5)),u=this.assets.getBasicMaterial(a),d=new es(h,u,n),p=new Kt;for(let g=0;g<n;g++){const _=(g+.5)/n,m=l.getPoint(_);m.y-=.06,p.makeTranslation(m.x,m.y,m.z),d.setMatrixAt(g,p)}d.instanceMatrix.needsUpdate=!0,t.add(d)}addBunting(t,e,i,n){const r=[b.pink,b.gold,b.mint,b.lavender];for(let a=0;a<n;a++){const o=(a+.5)/n,l=new C().lerpVectors(e,i,o);l.y-=Math.sin(o*Math.PI)*.35;const c=this.cone(.16,.34,3,r[a%r.length]);c.rotation.x=Math.PI,c.position.copy(l),c.castShadow=!1,t.add(c)}}addFlowers(t,e,i,n,r,a,o){for(let l=0;l<a;l++){const c=l/a*Math.PI*2+l*.37,h=r*(.35+l%3*.22),u=e+Math.cos(c)*h,d=n+Math.sin(c)*h,p=.22+l%4*.045,g=this.cylinder(.018,.018,p,4,b.leafDeep,{cast:!1});g.position.set(u,i+p/2,d),t.add(g);const _=this.sphere(.075+l%3*.012,o[l%o.length],{segments:8,cast:!1});_.position.set(u,i+p,d),t.add(_)}}buildLamp(t,e){const i=b.inkSoft,n=e.variant==="pink"?b.pink:b.warmLight;this.place(t,this.cylinder(.28,.34,.18,10,i),0,.09,0),this.place(t,this.cylinder(.07,.09,3.1,10,i),0,1.65,0),this.place(t,this.cylinder(.05,.05,.7,8,i),.35,3.1,0,0,0,Math.PI/2),this.place(t,this.roundBox(.42,.52,.42,n,{radius:.08,material:{emissive:n,emissiveIntensity:1.35,roughness:.4}}),.7,2.95,0),this.place(t,this.cone(.34,.28,4,b.ink),.7,3.34,0,0,Math.PI/4),this.place(t,this.cylinder(.2,.26,.08,8,i),.7,2.67,0),this.glow(t,n,.7,2.95,0,2.2)}buildBench(t,e){const i=e.variant==="pink"?b.pink:b.wood,n=b.inkSoft;this.place(t,this.roundBox(2.9,.16,.74,i,{radius:.06}),0,.64,0),this.place(t,this.roundBox(2.9,.68,.14,i,{radius:.06}),0,1.02,-.31,-.1);for(const r of[-1.18,1.18]){for(const a of[-.24,.24])this.place(t,this.cylinder(.055,.07,.62,8,n),r,.31,a);this.place(t,this.roundBox(.12,.1,.72,n,{radius:.03,cast:!1}),r,.93,.02)}this.place(t,this.roundBox(2.7,.06,.1,b.gold,{radius:.02,cast:!1}),0,.73,.34)}buildPlanter(t,e){const i=e.variant==="mint"?b.mint:e.variant==="gold"?b.gold:b.wood;this.place(t,this.cylinder(.86,.72,.66,12,i),0,.33,0),this.place(t,this.cylinder(.74,.74,.08,12,b.woodDark,{cast:!1}),0,.67,0),this.place(t,this.torus(.86,.05,b.cream,{tubularSegments:24}),0,.66,0,Math.PI/2);const n=e.variant==="gold"?[b.gold,b.coral,b.cream]:e.variant==="mint"?[b.mint,b.cream,b.pink]:[b.pink,b.lavender,b.cream];this.addFlowers(t,0,.67,0,.58,7,n)}buildLuggage(t,e){const i=e.variant==="mint"?b.mint:e.variant==="gold"?b.gold:e.variant==="blue"?b.sky:b.pink;this.place(t,this.roundBox(2.5,.18,1.35,b.woodDark,{radius:.05}),0,.5,0);for(const r of[-.95,.95])for(const a of[-.48,.48]){const o=this.cylinder(.18,.18,.12,12,b.ink);o.rotation.x=Math.PI/2,o.position.set(r,.2,a),t.add(o)}this.place(t,this.cylinder(.05,.05,1.2,8,b.inkSoft),1.1,1.25,.55,0,0,-.18),this.place(t,this.cylinder(.05,.05,1.2,8,b.inkSoft),1.1,1.25,-.55,0,0,-.18),this.place(t,this.cylinder(.05,.05,1.1,8,b.inkSoft),1.1,1.82,0,Math.PI/2);const n=[{x:-.55,y:.92,z:0,w:1.35,h:.72,d:.9,rot:.04,color:i},{x:.5,y:.88,z:.08,w:1.05,h:.62,d:.78,rot:-.08,color:b.lavender},{x:-.1,y:1.52,z:-.04,w:.86,h:.5,d:.62,rot:.12,color:b.cream}];for(const r of n)this.place(t,this.roundBox(r.w,r.h,r.d,r.color,{radius:.07}),r.x,r.y,r.z,0,r.rot),this.place(t,this.roundBox(r.w*.16,r.h+.02,r.d+.02,b.woodDark,{radius:.02,cast:!1}),r.x,r.y,r.z,0,r.rot)}buildTrainCar(t,e){const i=e.variant==="pink"?b.pink:e.variant==="cream"?b.cream:b.sky,n=b.warmLight;this.place(t,this.roundBox(13.6,2.6,2.8,i,{radius:.18}),0,1.9,0),this.place(t,this.roundBox(14,.5,3.2,b.cream,{radius:.16}),0,3.35,0),this.place(t,this.roundBox(13.8,.28,2.4,b.inkSoft,{radius:.05}),0,.55,0),this.place(t,this.roundBox(13.7,.1,2.86,b.gold,{radius:.02,cast:!1}),0,1.08,0),this.place(t,this.roundBox(13.7,.1,2.86,b.gold,{radius:.02,cast:!1}),0,2.72,0);for(const r of[-1.42,1.42]){for(let a=0;a<6;a++){const o=-5.3+a*2.12;this.place(t,this.roundBox(1.1,.82,.06,n,{radius:.04,material:{emissive:n,emissiveIntensity:.7,roughness:.3},cast:!1}),o,2.15,r),this.place(t,this.roundBox(1.24,.96,.04,b.woodDark,{radius:.03,cast:!1}),o,2.15,r-Math.sign(r)*.025)}for(const a of[-3.6,3.6])this.place(t,this.roundBox(1.3,1.9,.06,b.woodDark,{radius:.04,cast:!1}),a,1.75,r),this.place(t,this.roundBox(.16,.16,.08,b.gold,{radius:.04,cast:!1}),a+.35,1.9,r)}for(const r of[-4.8,-2.4,2.4,4.8])for(const a of[-1.15,1.15]){const o=this.cylinder(.44,.44,.22,12,b.ink);o.rotation.x=Math.PI/2,o.position.set(r,.45,a),t.add(o);const l=this.cylinder(.16,.16,.26,8,b.gold);l.rotation.x=Math.PI/2,l.position.set(r,.45,a),t.add(l)}for(const r of[-6.9,6.9])this.place(t,this.roundBox(.3,.5,2.5,b.inkSoft,{radius:.06}),r,.8,0),this.glow(t,b.warmLight,r,1.55,0,1.6);this.place(t,this.roundBox(2.2,.18,3.2,b.inkSoft,{radius:.05}),0,3.66,0),this.place(t,this.cylinder(.16,.2,.4,8,b.gold),0,3.94,0)}buildClockTower(t){this.place(t,this.roundBox(4.4,6,4.4,b.cream,{radius:.2}),0,3,0),this.place(t,this.roundBox(4.8,.3,4.8,b.stoneDark,{radius:.08}),0,6.1,0),this.place(t,this.roundBox(3.4,4.2,3.4,b.paper,{radius:.16}),0,8.2,0),this.place(t,this.cone(3.8,2.6,4,b.plum),0,11.6,0,0,Math.PI/4),this.place(t,this.cylinder(.08,.08,.9,6,b.gold),0,13.3,0),this.place(t,this.sphere(.2,b.gold,{segments:10}),0,13.8,0);const e=this.assets.getCanvasTexture("clock-face",256,256,(n,r,a)=>{n.clearRect(0,0,r,a),n.fillStyle="#fff6e7",n.beginPath(),n.arc(r/2,a/2,116,0,Math.PI*2),n.fill(),n.strokeStyle="#2b2140",n.lineWidth=8,n.stroke();for(let o=0;o<12;o++){const l=o/12*Math.PI*2,c=o%3===0?78:92;n.beginPath(),n.moveTo(r/2+Math.cos(l)*c,a/2+Math.sin(l)*c),n.lineTo(r/2+Math.cos(l)*104,a/2+Math.sin(l)*104),n.lineWidth=o%3===0?9:5,n.stroke()}n.strokeStyle="#ef7fa4",n.lineWidth=10,n.lineCap="round",n.beginPath(),n.moveTo(r/2,a/2),n.lineTo(r/2+42,a/2-34),n.stroke(),n.strokeStyle="#2b2140",n.lineWidth=7,n.beginPath(),n.moveTo(r/2,a/2),n.lineTo(r/2-14,a/2-72),n.stroke(),n.fillStyle="#f6c85f",n.beginPath(),n.arc(r/2,a/2,12,0,Math.PI*2),n.fill()}),i=new pt(this.assets.getGeometry("clock-face-geo",()=>new is(1.22,40)),this.assets.getBasicTextureMaterial(e,{transparent:!0}));i.position.set(0,9.1,1.72),t.add(i),this.place(t,this.torus(1.3,.09,b.gold,{tubularSegments:40}),0,9.1,1.73),this.glow(t,b.warmLight,0,9.1,1.9,3.4);for(const n of[-1.1,1.1])this.place(t,this.roundBox(.7,1.6,.12,b.warmLight,{radius:.05,material:{emissive:b.warmLight,emissiveIntensity:.65},cast:!1}),n,3.4,2.23);this.addBoard(t,"火车站","sign-clock",0,5.2,2.25,3.2,1,"#fff6e7","#2b2140")}buildCanopy(t,e){const i=e.length??16,n=i/2-.8;for(const a of[-n,n])for(const o of[-3.2,3.2])this.place(t,this.cylinder(.1,.13,3.7,10,b.inkSoft),a,1.85,o),this.place(t,this.sphere(.16,b.gold,{segments:8}),a,3.72,o);const r=8;for(let a=0;a<r;a++){const o=a%2===0?b.cream:b.pink;this.place(t,this.roundBox(i/r,.14,8,o,{radius:.04}),-i/2+(a+.5)*(i/r),3.78,0)}this.place(t,this.roundBox(i,.12,.28,b.gold,{radius:.04}),0,3.86,4),this.place(t,this.roundBox(i,.12,.28,b.gold,{radius:.04}),0,3.86,-4),this.addBunting(t,new C(-i/2,3.5,4.05),new C(i/2,3.5,4.05),12);for(const a of[-i/3,0,i/3])this.place(t,this.cylinder(.025,.025,.5,6,b.inkSoft,{cast:!1}),a,3.45,0),this.place(t,this.sphere(.15,b.warmLight,{segments:8,material:{emissive:b.warmLight,emissiveIntensity:1.1}}),a,3.15,0),this.glow(t,b.warmLight,a,3.15,0,1.5)}buildTicketBooth(t){this.place(t,this.roundBox(4.2,2.5,3.6,b.cream,{radius:.18}),0,1.25,0),this.place(t,this.roundBox(4.8,.32,4.2,b.pink,{radius:.08}),0,2.66,0),this.place(t,this.roundBox(4.9,.16,4.3,b.gold,{radius:.04,cast:!1}),0,2.84,0),this.place(t,this.roundBox(2.2,1.1,.08,b.glass,{radius:.03,material:{emissive:b.glass,emissiveIntensity:.35,roughness:.2},cast:!1}),0,1.8,1.82),this.place(t,this.roundBox(2.5,.16,.62,b.wood),0,1.18,2),this.place(t,this.roundBox(.9,1.8,.08,b.lavender),1.45,.9,1.82),this.place(t,this.sphere(.1,b.gold),1.6,1.1,1.9),this.addBoard(t,"售票处","sign-ticket",0,3.1,1.9,2.4,.85,"#ff9ebb","#3b1730"),this.addStringLights(t,new C(-2.1,2.55,1.9),new C(2.1,2.55,1.9),8,.18),this.glow(t,b.warmLight,0,1.8,2,2.2)}buildCarousel(t){this.place(t,this.cylinder(8,8.2,.5,40,b.cream),0,.25,0),this.place(t,this.cylinder(7.7,7.7,.08,40,b.pink,{cast:!1}),0,.53,0),this.place(t,this.torus(8.05,.14,b.gold,{tubularSegments:48}),0,.5,0,Math.PI/2),this.place(t,this.cylinder(.42,.52,5.8,16,b.gold),0,3.2,0);const e=this.assets.getCanvasTexture("carousel-stripes",512,128,(n,r,a)=>{for(let o=0;o<16;o++)n.fillStyle=o%2===0?"#ff9ebb":"#fff6e7",n.fillRect(o/16*r,0,r/16+1,a)}),i=new pt(this.assets.getGeometry("carousel-canopy",()=>new nr(8.7,2.3,40,1,!0)),this.assets.getBasicTextureMaterial(e,{side:Be}));i.position.y=6.35,i.castShadow=!0,t.add(i),this.place(t,this.torus(8.7,.16,b.gold,{tubularSegments:48}),0,5.2,0,Math.PI/2),this.place(t,this.sphere(.42,b.gold,{segments:12}),0,7.7,0),this.place(t,this.cone(.5,.9,8,b.pink),0,7.95,0);for(let n=0;n<8;n++){const r=n/8*Math.PI*2,a=Math.cos(r)*5.8,o=Math.sin(r)*5.8,l=new ce;l.position.set(a,0,o),l.rotation.y=-r+Math.PI/2;const c=Ys[n%Ys.length].shirt;this.place(l,this.cylinder(.055,.055,4.6,8,b.gold),0,2.3,0),this.place(l,this.roundBox(1.15,.48,.42,c,{radius:.12}),0,1.65,0),this.place(l,this.sphere(.26,c,{segments:12}),.6,1.9,0),this.place(l,this.roundBox(.42,.3,.32,c,{radius:.1}),.84,1.82,0),this.place(l,this.sphere(.08,b.ink,{segments:8}),.68,1.98,.2),this.place(l,this.roundBox(.42,.1,.5,b.cream,{radius:.04}),0,1.94,0);for(const h of[-.36,.36])for(const u of[-.16,.16])this.place(l,this.cylinder(.045,.06,.62,6,c),h,1.2,u,0,0,h>0?-.12:.12);this.place(l,this.cylinder(.05,.08,.45,6,b.pinkDeep),-.62,1.7,0,0,0,.6),t.add(l)}for(let n=0;n<20;n++){const r=n/20*Math.PI*2,a=this.sphere(.085,b.warmLight,{segments:8,material:{emissive:b.warmLight,emissiveIntensity:1.4}});a.position.set(Math.cos(r)*8.25,5.28,Math.sin(r)*8.25),t.add(a),n%2===0&&this.glow(t,b.warmLight,a.position.x,a.position.y,a.position.z,.8)}return n=>{t.rotation.y+=n*.11}}buildFerrisWheel(t){this.place(t,this.cylinder(2.4,3.2,.6,16,b.stoneDark),0,.3,0);for(const o of[-3.2,3.2])for(const l of[-2.2,2.2])this.cylinderBetween(t,new C(o*1.3,.5,l*1.3),new C(o*.35,12,l*.35),.18,b.inkSoft,!0);this.place(t,this.cylinder(.65,.65,.9,16,b.gold),0,12,0,Math.PI/2);const i=new ce;i.position.set(0,12,0),t.add(i),this.place(i,this.torus(8,.24,b.gold,{tubularSegments:64}),0,0,0),this.place(i,this.torus(6.2,.1,b.cream,{tubularSegments:48}),0,0,0);for(let o=0;o<12;o++){const l=o/12*Math.PI*2,c=Math.cos(l)*4,h=Math.sin(l)*4,u=this.cylinder(.07,.07,8,6,b.cream,{cast:!1});u.position.set(c,h,0),u.rotation.z=l-Math.PI/2,i.add(u)}const n=[];for(let o=0;o<8;o++){const l=o/8*Math.PI*2,c=new ce;c.position.set(Math.cos(l)*8,Math.sin(l)*8,0),i.add(c),this.place(c,this.cylinder(.05,.05,.6,6,b.inkSoft,{cast:!1}),0,-.3,0),this.place(c,this.roundBox(1.15,.95,.95,Vs[o%Vs.length],{radius:.14}),0,-1.05,0),this.place(c,this.cylinder(.62,.72,.18,12,b.cream),0,-.52,0),this.place(c,this.roundBox(.5,.34,.06,b.warmLight,{radius:.04,material:{emissive:b.warmLight,emissiveIntensity:.5},cast:!1}),0,-.98,.5),n.push(c)}for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=this.sphere(.075,b.warmLight,{segments:6,material:{emissive:b.warmLight,emissiveIntensity:1.5}});c.position.set(Math.cos(l)*8.3,Math.sin(l)*8.3,0),i.add(c)}const r=this.glow(t,b.pink,0,12,-.5,18);r.material.opacity=.22;let a=0;return o=>{a+=o*.075,i.rotation.z=a;for(const l of n)l.rotation.z=-a;r.material.opacity=.2+Math.sin(a*2)*.03}}buildStall(t,e){const i={candy:{main:b.pink,accent:b.cream,text:"糖果屋",key:"candy"},ticket:{main:b.sky,accent:b.cream,text:"售票亭",key:"ticket"},prize:{main:b.lavender,accent:b.pink,text:"奖品铺",key:"prize"},popcorn:{main:b.gold,accent:b.cream,text:"爆米花",key:"popcorn"},cotton:{main:b.mint,accent:b.pink,text:"棉花糖",key:"cotton"}},n=i[e.variant??"candy"]??i.candy;this.place(t,this.roundBox(3.8,1,2.2,b.cream,{radius:.1}),0,.5,0),this.place(t,this.roundBox(3.9,.18,2.3,n.main,{radius:.05}),0,1.06,0),this.place(t,this.roundBox(3.8,2.3,.16,n.accent,{radius:.06}),0,2,-1);for(const r of[-1.75,1.75])this.place(t,this.cylinder(.08,.1,2.8,8,b.inkSoft),r,1.4,.8);for(let r=0;r<6;r++)this.place(t,this.roundBox(3.95/6,.12,2.4,r%2===0?n.main:n.accent,{radius:.03}),-1.975+(r+.5)*(3.95/6),2.85,.2,-.12);this.addBoard(t,n.text,`stall-${n.key}`,0,3.45,.9,2.8,.9,"#fff6e7","#2b2140"),this.addStringLights(t,new C(-1.9,2.6,.9),new C(1.9,2.6,.9),8,.16),this.addGoods(t,n.main,n.accent),this.glow(t,n.main,0,1.6,.75,2.2)}addGoods(t,e,i){for(let n=0;n<7;n++){const r=-1.4+n*.46,a=n%2===0?e:i,o=n%3===0?this.roundBox(.3,.28,.3,a,{radius:.06,cast:!1}):this.sphere(.16+n%2*.03,a,{segments:8,cast:!1});o.position.set(r,1.24+n%2*.06,.35),t.add(o)}this.place(t,this.roundBox(.5,.34,.34,b.cream,{radius:.06,cast:!1}),1.25,1.24,.4)}buildBalloonCart(t,e){const i=e.variant==="pink"?b.pink:b.gold;this.place(t,this.roundBox(2.4,.85,1.6,i,{radius:.1}),0,.65,0),this.place(t,this.roundBox(2.5,.16,1.7,b.cream,{radius:.05}),0,1.12,0);for(const r of[-.85,.85])for(const a of[-.55,.55]){const o=this.cylinder(.2,.2,.12,10,b.ink);o.rotation.x=Math.PI/2,o.position.set(r,.24,a),t.add(o)}this.place(t,this.cylinder(.06,.08,1.5,8,b.woodDark),0,1.8,0);const n=new ce;n.position.set(0,2.7,0),t.add(n);for(let r=0;r<9;r++){const a=r/9*Math.PI*2,o=.5+r%3*.26,l=Math.cos(a)*o,c=Math.sin(a)*o,h=.4+r%4*.32,u=this.sphere(.28+r%3*.05,Vs[r%Vs.length],{segments:12,material:{roughness:.55}});u.scale.y=1.18,u.position.set(l,h,c),n.add(u),this.cylinderBetween(n,new C(0,-1.1,0),new C(l,h-.1,c),.012,b.cream)}return this.addBoard(t,"气球","sign-balloon",0,1.55,.82,1.2,.5,"#ff9ebb","#3b1730"),this.glow(t,b.pink,0,3.2,0,2.6),(r,a)=>{n.position.y=2.7+Math.sin(a*1.4)*.1}}buildHedge(t,e){const i=e.length??8,n=e.variant==="pink"?b.leaf:e.variant==="rose"?b.leafDeep:b.leaf;this.place(t,this.roundBox(i,1.35,1.2,n,{radius:.25}),0,.68,0),this.place(t,this.roundBox(i*.94,.5,1.05,b.leafDeep,{radius:.2}),0,1.5,0);const r=Math.max(4,Math.round(i/1.2));for(let a=0;a<r;a++){const o=-i/2+(a+.5)*(i/r),l=this.sphere(.42+a%3*.08,a%2===0?n:b.leafDeep,{segments:8,scaleY:.8});l.position.set(o,1.25+a%2*.18,(a%3-1)*.22),t.add(l)}(e.variant==="pink"||e.variant==="rose")&&this.addFlowers(t,0,1.75,0,i*.38,9,[b.pink,b.cream,b.lavender])}buildFence(t,e){const i=e.length??8,n=Math.max(2,Math.round(i/2.4)),r=e.variant==="manor"?b.cream:e.variant==="park"?b.pink:b.cream,a=e.variant==="manor"?b.inkSoft:b.woodDark;for(let o=0;o<n;o++){const l=-i/2+o/(n-1)*i;this.place(t,this.cylinder(.1,.13,1.25,8,a),l,.63,0),this.place(t,this.sphere(.14,r,{segments:8}),l,1.3,0)}this.place(t,this.roundBox(i,.1,.12,r,{radius:.03}),0,.95,0),this.place(t,this.roundBox(i,.08,.1,r,{radius:.03}),0,.55,0)}buildFountain(t){this.place(t,this.cylinder(4,4.2,.7,32,b.stone),0,.35,0),this.place(t,this.torus(4.05,.16,b.stoneDark,{tubularSegments:48}),0,.72,0,Math.PI/2),this.place(t,this.cylinder(3.62,3.62,.08,32,b.sky,{material:{emissive:b.sky,emissiveIntensity:.45,transparent:!0,opacity:.75,roughness:.15}}),0,.74,0),this.place(t,this.cylinder(.75,1,1.2,16,b.stone),0,1.3,0),this.place(t,this.cylinder(1.5,1.1,.3,16,b.stone),0,1.95,0);const e=new Uc,i=1,n=.45;for(let o=0;o<10;o++){const l=o/10*Math.PI*2-Math.PI/2,c=o%2===0?i:n,h=Math.cos(l)*c,u=Math.sin(l)*c;o===0?e.moveTo(h,u):e.lineTo(h,u)}e.closePath();const r=new pt(this.assets.getGeometry("fountain-star",()=>new ka(e,{depth:.22,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2})),this.mat(b.gold,{emissive:b.gold,emissiveIntensity:.35,metalness:.35,roughness:.4}));r.position.set(0,2.6,0),r.castShadow=!0,t.add(r);const a=new ce;t.add(a);for(let o=0;o<8;o++){const l=o/8*Math.PI*2,c=this.cylinder(.035,.06,1.4,6,b.sky,{material:{emissive:b.sky,emissiveIntensity:.7,transparent:!0,opacity:.55,roughness:.1},cast:!1});c.position.set(Math.cos(l)*1.35,2.2,Math.sin(l)*1.35),c.rotation.z=Math.cos(l)*.45,c.rotation.x=Math.sin(l)*.45,a.add(c)}for(let o=0;o<14;o++){const l=o/14*Math.PI*2,c=this.sphere(.07,b.cream,{segments:6,material:{emissive:b.sky,emissiveIntensity:.6,transparent:!0,opacity:.8},cast:!1});c.position.set(Math.cos(l)*(1.6+o%3*.5),2.7+o%4*.15,Math.sin(l)*(1.6+o%3*.5)),a.add(c)}return this.glow(t,b.sky,0,2,0,5.5),o=>{a.rotation.y+=o*.4,r.rotation.y+=o*.25}}buildGreenhouse(t){this.place(t,this.roundBox(14.4,.22,10.4,b.stone,{radius:.06}),0,.11,0);const n=this.mat(b.glass,{transparent:!0,opacity:.2,roughness:.12,metalness:.1,side:Be,depthWrite:!1}),r=b.cream,a=1.25,o=(7-a)/2,l=a+o;for(const h of[-5,5]){for(const u of[-l,l]){const d=this.flatBox(o*2,3.2,.06,b.glass,{material:{transparent:!0,opacity:.2,roughness:.12,side:Be,depthWrite:!1}});d.material=n,d.position.set(u,1.7,h),t.add(d);for(const p of[u-o,u+o])this.place(t,this.flatBox(.1,3.4,.1,r),p,1.7,h)}for(const u of[-a,a])this.place(t,this.flatBox(.12,3.5,.12,r),u,1.75,h);this.place(t,this.flatBox(a*2,.14,.12,r),0,3.5,h)}for(const h of[-7,7]){for(const u of[-l,l]){const d=this.flatBox(.06,3.2,o*2,b.glass,{material:{transparent:!0,opacity:.2,roughness:.12,side:Be,depthWrite:!1}});d.material=n,d.position.set(h,1.7,u),t.add(d);for(const p of[u-o,u+o])this.place(t,this.flatBox(.1,3.4,.1,r),h,1.7,p)}for(const u of[-a,a])this.place(t,this.flatBox(.12,3.5,.12,r),h,1.75,u);this.place(t,this.flatBox(.12,.14,a*2,r),h,3.5,0)}const c={transparent:!0,opacity:.24,roughness:.1,side:Be,depthWrite:!1};for(const h of[-2.6,2.6]){const u=this.flatBox(14.4,.08,5.6,b.glass,{material:c});u.position.set(0,4,h),u.rotation.x=h>0?-.25:.25,t.add(u)}this.place(t,this.flatBox(14.5,.12,.12,r),0,4.7,0);for(let h=-3;h<=3;h++)this.place(t,this.flatBox(.1,.1,10.4,r),h*2.3,4.05,0,.25);for(const[h,u]of[[-4.6,-2.6],[4.6,-2.6],[-4.6,2.6],[4.6,2.6],[0,-3.2]])this.place(t,this.cylinder(.5,.4,.6,10,b.wood),h,.3,u),this.place(t,this.sphere(.65,b.leaf,{segments:10,scaleY:.9}),h,.95,u),this.addFlowers(t,h,1,u,.4,4,[b.pink,b.cream,b.lavender]);this.place(t,this.roundBox(2.4,.12,1.2,b.wood),0,.9,1.6),this.place(t,this.cylinder(.12,.12,.8,8,b.woodDark),0,.45,1.6),this.addStringLights(t,new C(-6,3.2,0),new C(6,3.2,0),16,.7),this.glow(t,b.warmLight,0,2.6,0,5.5)}buildGazebo(t){this.place(t,this.cylinder(4.2,4.4,.26,8,b.stone),0,.13,0),this.place(t,this.cylinder(3.8,3.8,.08,8,b.cream,{cast:!1}),0,.3,0);for(let e=0;e<8;e++){const i=e/8*Math.PI*2,n=Math.cos(i)*3.6,r=Math.sin(i)*3.6;this.place(t,this.cylinder(.13,.16,3.2,8,b.cream),n,1.9,r),this.place(t,this.sphere(.16,b.gold,{segments:8}),n,3.55,r)}this.place(t,this.cone(5,1.8,8,b.lavender),0,4.5,0),this.place(t,this.torus(4.3,.1,b.pink,{tubularSegments:32}),0,3.6,0,Math.PI/2),this.place(t,this.sphere(.22,b.gold,{segments:10}),0,5.5,0),this.place(t,this.cylinder(.06,.06,.8,6,b.gold),0,6,0);for(let e=0;e<8;e++){const i=e/8*Math.PI*2,n=Math.cos(i)*3.3,r=Math.sin(i)*3.3;this.place(t,this.cylinder(.02,.02,.55,5,b.inkSoft,{cast:!1}),n,3.35,r),this.place(t,this.sphere(.12,b.warmLight,{segments:8,material:{emissive:b.warmLight,emissiveIntensity:1.2}}),n,3.05,r),this.glow(t,b.warmLight,n,3.05,r,1.1)}this.place(t,this.roundBox(2.6,.14,.6,b.wood,{radius:.05}),0,.75,-2.2),this.place(t,this.roundBox(2.6,.55,.14,b.wood,{radius:.05}),0,1.05,-2.5);for(const e of[-1,1])this.place(t,this.cylinder(.06,.08,.65,6,b.inkSoft),e,.38,-2.2)}buildFlowerArch(t,e){const i=e.variant==="lilac"?b.lavender:b.pink;for(const r of[-1.8,1.8])this.place(t,this.cylinder(.14,.18,3.2,8,b.cream),r,1.6,0),this.place(t,this.sphere(.22,b.gold,{segments:8}),r,3.2,0);const n=this.torus(1.8,.16,b.cream,{radialSegments:8,tubularSegments:24,arc:Math.PI});n.position.set(0,3.2,0),n.rotation.z=0,t.add(n);for(let r=0;r<=10;r++){const a=r/10*Math.PI,o=this.sphere(.12+r%3*.025,r%2===0?i:b.cream,{segments:8,cast:!1});o.position.set(Math.cos(a)*1.8,3.2+Math.sin(a)*1.8,.12),t.add(o)}this.addFlowers(t,-1.8,.5,0,.35,5,[i,b.cream,b.leaf]),this.addFlowers(t,1.8,.5,0,.35,5,[i,b.cream,b.leaf])}buildMansion(t){const e=b.paper,i=b.plum;this.place(t,this.roundBox(30,9,2.4,e,{radius:.18}),0,4.5,0),this.place(t,this.roundBox(10,12,2.8,e,{radius:.16}),0,6,.3),this.place(t,this.roundBox(8.5,7.2,2.2,b.cream,{radius:.14}),-11,3.6,.2),this.place(t,this.roundBox(8.5,7.2,2.2,b.cream,{radius:.14}),11,3.6,.2),this.place(t,this.cone(6.8,4,4,i),0,14,.3,0,Math.PI/4),this.place(t,this.cone(5,2.6,4,i),-11,8.5,.2,0,Math.PI/4),this.place(t,this.cone(5,2.6,4,i),11,8.5,.2,0,Math.PI/4),this.place(t,this.cylinder(.08,.08,1.6,6,b.gold),0,16.6,.3),this.place(t,this.sphere(.2,b.gold,{segments:10}),0,17.4,.3);const n=b.warmLight;for(let r=0;r<3;r++)for(let a=0;a<7;a++){if(r===0&&Math.abs(a-3)<1)continue;const o=-12+a*4,l=3.2+r*2.5;this.place(t,this.roundBox(1.15,1.7,.1,n,{radius:.04,material:{emissive:n,emissiveIntensity:.62,roughness:.35},cast:!1}),o,l,1.23),this.place(t,this.roundBox(1.35,1.9,.06,b.woodDark,{radius:.03,cast:!1}),o,l,1.17)}this.place(t,this.roundBox(2,3.2,.16,b.woodDark,{radius:.06}),0,1.8,1.25),this.place(t,this.roundBox(1.4,2.2,.08,b.gold,{radius:.04,cast:!1}),0,1.7,1.35),this.place(t,this.roundBox(3.1,.2,1.2,b.stone,{radius:.04}),0,.1,1.7);for(const r of[-2.4,2.4])this.place(t,this.cylinder(.24,.3,4.4,10,b.cream),r,2.2,1.6),this.place(t,this.sphere(.3,b.gold,{segments:8}),r,4.5,1.6);this.place(t,this.roundBox(8,.22,1.4,b.cream,{radius:.05}),0,6.4,1.7);for(const r of[-3.4,-1.2,1.2,3.4])this.place(t,this.cylinder(.07,.08,.8,6,b.gold),r,6.9,1.9);for(let r=0;r<18;r++){const a=-14+r%9*3.4,o=1.2+Math.floor(r/9)*4.2,l=this.sphere(.24,b.leafDeep,{segments:6,scaleY:1.4});l.position.set(a,o,1.28),t.add(l)}this.glow(t,b.warmLight,0,7.5,1.6,8)}buildTree(t,e){const i=e.variant==="pink"?b.pink:e.variant==="gold"?b.gold:b.leaf,n=e.variant==="pink"?b.pinkDeep:e.variant==="gold"?b.goldDeep:b.leafDeep;this.place(t,this.cylinder(.3,.46,2.4,8,b.woodDark),0,1.2,0),this.place(t,this.cylinder(.12,.18,1.4,6,b.woodDark),-.45,2.4,0,0,0,.5),this.place(t,this.cylinder(.1,.16,1.2,6,b.woodDark),.45,2.5,0,0,0,-.45);const r=new ce;r.position.y=.2,t.add(r);const a=[[0,3.1,0,1.15],[-.7,2.9,.3,.8],[.72,3,-.2,.85],[-.25,3.7,-.25,.8],[.35,3.55,.35,.75]];for(let l=0;l<a.length;l++){const[c,h,u,d]=a[l],p=this.sphere(d,l%2===0?i:n,{segments:10,scaleY:.86});p.position.set(c,h,u),r.add(p)}this.addFlowers(r,0,3.1,0,1.2,8,[b.cream,b.pink,b.gold]),this.glow(t,i,0,3.4,0,2.4);const o=e.x*.13+e.z*.17;return(l,c)=>{r.rotation.z=Math.sin(c*.7+o)*.025,r.rotation.x=Math.cos(c*.55+o)*.018}}buildRock(t){const e=this.assets.getGeometry("rock",()=>new Na(1.2,0)),i=new pt(e,this.mat(b.stoneDark,{flatShading:!0,roughness:.9}));i.scale.set(1.25,.72,1.05),i.position.y=.6,i.castShadow=!0,t.add(i);for(let n=0;n<4;n++){const r=this.sphere(.35,b.leaf,{segments:7,scaleY:.45,cast:!1});r.position.set(-.6+n*.4,.95+n%2*.1,-.2+n%3*.3),t.add(r)}this.addFlowers(t,.3,.7,.5,.5,4,[b.pink,b.cream])}buildPicnicTable(t,e){const i=e.variant==="lavender"?b.lavender:e.variant==="mint"?b.mint:b.wood;this.place(t,this.roundBox(3.2,.16,1.6,i,{radius:.05}),0,.92,0),this.place(t,this.roundBox(3.3,.06,1.7,b.cream,{radius:.03,cast:!1}),0,1.01,0);for(const n of[-1.05,1.05])this.place(t,this.roundBox(3.2,.14,.52,b.wood,{radius:.04}),0,.55,n);for(const n of[-1.2,1.2])this.place(t,this.roundBox(.14,.9,1.9,b.woodDark,{radius:.04}),n,.45,0,.2);this.place(t,this.cylinder(.16,.2,.28,10,b.pink),0,1.18,0);for(const[n,r]of[[-.55,.25],[.55,.25],[-.55,-.25]])this.place(t,this.cylinder(.1,.08,.12,8,b.cream),n,1.1,r)}buildSign(t,e){const i=e.variant==="park"?"游乐园":e.variant==="manor"?"庄园":e.variant==="station"?"火车站":"欢迎";this.place(t,this.cylinder(.1,.14,2.4,8,b.woodDark),0,1.2,0),this.place(t,this.roundBox(2.8,1.15,.14,b.wood),0,2.3,0),this.addBoard(t,i,`sign-${e.variant??"welcome"}`,0,2.3,.1,2.6,1,"#fff6e7","#2b2140"),this.place(t,this.sphere(.18,b.gold,{segments:8}),0,3,0),this.glow(t,b.gold,0,3,0,1.2)}buildTeacup(t,e){const i=e.variant==="mint"?b.mint:b.pink;return this.place(t,this.cylinder(1.62,1.72,.16,24,b.cream),0,.08,0),this.place(t,this.cylinder(.95,1.05,.85,24,i),0,.55,0),this.place(t,this.cylinder(.88,.88,.06,24,b.cream,{cast:!1}),0,.98,0),this.place(t,this.torus(.55,.12,i,{tubularSegments:24,arc:Math.PI*1.35}),1.1,.7,0,Math.PI/2,0,-.3),this.place(t,this.cylinder(.06,.08,.3,8,b.gold),0,1.14,0),this.place(t,this.sphere(.12,b.gold,{segments:8}),0,1.32,0),this.place(t,this.cylinder(.08,.06,.6,8,b.cream),1.12,1.2,.15,.6,0,-.5),this.glow(t,i,0,1,0,2.4),n=>{t.rotation.y+=n*.25}}}class Rg{group=new ce;clouds=[];cloudSpeeds=[];stars;starMaterial;moon;skyGeometry;skyMaterial;starGeometry;hillMaterial;constructor(t,e,i){const n=new ue(150,32,20);this.skyGeometry=n;const r=new Mi({uniforms:{topColor:{value:new Ot(e.top)},horizonColor:{value:new Ot(e.horizon)}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          float t = smoothstep(-0.08, 0.62, h);
          vec3 color = mix(horizonColor, topColor, t);
          gl_FragColor = vec4(color, 1.0);
        }
      `,side:Fe,depthWrite:!1,fog:!1});this.skyMaterial=r;const a=new pt(n,r);this.group.add(a);const o=i==="high"?420:i==="medium"?260:160,l=new Float32Array(o*3),c=rr(20903);for(let f=0;f<o;f++){const x=c()*Math.PI*2,v=.12+c()*.88,M=Math.sqrt(Math.max(0,1-v*v)),P=118+c()*8;l[f*3]=Math.cos(x)*M*P,l[f*3+1]=v*P,l[f*3+2]=Math.sin(x)*M*P}const h=new _e;this.starGeometry=h,h.setAttribute("position",new Ie(l,3)),this.starMaterial=new er({color:e.moon,size:i==="high"?1.35:1.15,sizeAttenuation:!1,transparent:!0,opacity:.85,depthWrite:!1,blending:$i,fog:!1}),this.stars=new ya(h,this.starMaterial),this.group.add(this.stars);const u=t.getCanvasTexture("moon-sprite",192,192,(f,x,v)=>{const M=f.createRadialGradient(x/2,v/2,x*.08,x/2,v/2,x*.5);M.addColorStop(0,"rgba(255,250,225,1)"),M.addColorStop(.55,"rgba(255,242,201,0.95)"),M.addColorStop(1,"rgba(255,242,201,0)"),f.fillStyle=M,f.fillRect(0,0,x,v),f.fillStyle="rgba(226,206,170,0.35)";for(const[P,A,R]of[[.42,.4,.045],[.58,.52,.035],[.47,.62,.03]])f.beginPath(),f.arc(x*P,v*A,x*R,0,Math.PI*2),f.fill()});this.moon=new Yi(t.getSpriteMaterial(16777215,{opacity:.95,blending:_i})),this.moon.material.map=u,this.moon.material.needsUpdate=!0,this.moon.position.set(54,48,-78),this.moon.scale.setScalar(i==="high"?18:15),this.group.add(this.moon);const d=new Yi(t.getSpriteMaterial(e.moon,{opacity:.2}));d.material.map=t.getCanvasTexture("glow-soft",128,128,(f,x,v)=>{const M=f.createRadialGradient(x/2,v/2,0,x/2,v/2,x/2);M.addColorStop(0,"rgba(255,255,255,1)"),M.addColorStop(.35,"rgba(255,255,255,0.55)"),M.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=M,f.fillRect(0,0,x,v)}),d.material.needsUpdate=!0,d.position.copy(this.moon.position),d.scale.setScalar(50),this.group.add(d);const p=t.getCanvasTexture("cloud-soft",256,128,(f,x,v)=>{const M=f.createRadialGradient(x/2,v/2,0,x/2,v/2,x/2);M.addColorStop(0,"rgba(255,255,255,0.62)"),M.addColorStop(.55,"rgba(255,255,255,0.24)"),M.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=M,f.fillRect(0,0,x,v)}),g=i==="high"?5:3;for(let f=0;f<g;f++){const x=new Yi(t.getSpriteMaterial(f%2===0?14273791:16767462,{opacity:.16,blending:_i}));x.material.map=p,x.material.needsUpdate=!0,x.position.set(-60+f*28,38+f%3*8,-55-f%2*12),x.scale.set(36+f%3*8,10+f%2*3,1),this.clouds.push(x),this.cloudSpeeds.push(.25+f*.06),this.group.add(x)}const _=new Pn({color:2761029,transparent:!0,opacity:.5,fog:!1,depthWrite:!1});this.hillMaterial=_;const m=t.getGeometry("hill",()=>new ue(1,12,8));for(let f=0;f<7;f++){const x=f/7*Math.PI*2,v=new pt(m,_);v.position.set(Math.cos(x)*82,-3,Math.sin(x)*82),v.scale.set(20+f%3*7,7+f%2*3,12),this.group.add(v)}}dispose(){this.group.removeFromParent(),this.skyGeometry.dispose(),this.skyMaterial.dispose(),this.starGeometry.dispose(),this.starMaterial.dispose(),this.hillMaterial.dispose()}update(t,e){this.starMaterial.opacity=.72+Math.sin(e*.55)*.12;for(let i=0;i<this.clouds.length;i++){const n=this.clouds[i];n.position.x+=this.cloudSpeeds[i]*t,n.position.x>80&&(n.position.x=-80)}this.moon.position.y=48+Math.sin(e*.16)*.6}}class Pg{group=new ce;pointLights=[];phases=[];constructor(t,e,i,n){const r=new q0(t.ambientSky,t.ambientGround,t.ambientIntensity);this.group.add(r);const a=new ea(t.moon,t.moonIntensity);a.position.set(34,52,26),a.target.position.set(0,0,0),a.castShadow=!0;const o=e==="high"?2048:1024;a.shadow.mapSize.set(o,o),a.shadow.camera.near=1,a.shadow.camera.far=120,a.shadow.camera.left=-55,a.shadow.camera.right=55,a.shadow.camera.top=55,a.shadow.camera.bottom=-55,a.shadow.bias=-4e-4,a.shadow.normalBias=.035,this.group.add(a),this.group.add(a.target);const l=new ea(16770776,.72);l.position.set(-18,22,30),l.target.position.set(0,0,0),l.castShadow=!1,this.group.add(l),this.group.add(l.target);const c=new ea(13623551,.52);c.position.set(-8,18,-30),c.target.position.set(0,0,0),c.castShadow=!1,this.group.add(c),this.group.add(c.target);const u=Lg(i,e==="high"?6:e==="medium"?3:2);for(let g=0;g<u.length;g++){const _=u[g],m=new qs(16765066,1.15,15,2);m.position.set(_.x,3.1,_.z),m.castShadow=!1,this.pointLights.push(m),this.phases.push(g*1.7+_.x*.11),this.group.add(m)}const d=new qs(16758992,.9,18,2);d.position.set(n.x,3.2,n.z),d.castShadow=!1,this.pointLights.push(d),this.phases.push(.4),this.group.add(d);const p=new qs(12101618,.55,34,2);p.position.set(0,7,0),p.castShadow=!1,this.group.add(p)}update(t){for(let e=0;e<this.pointLights.length;e++){const i=this.phases[e];this.pointLights[e].intensity=(e===this.pointLights.length-1?.9:1.15)+Math.sin(t*1.7+i)*.06}}}function Lg(s,t){if(s.length<=t)return s;const e=[],i=s.length/t;for(let n=0;n<t;n++)e.push(s[Math.floor(n*i)]);return e}class Ig{map;group=new ce;collision;nav;hidingSpots;sky;lighting;scene;animated=[];ambient=[];constructor(t,e,i,n,r){this.scene=t,this.map=e,this.hidingSpots=e.hidingSpots,this.collision=new vg(e.bounds);for(const h of Tg(e))this.collision.addSpec(h);this.nav=new yg(e.bounds,this.collision),t.background=new Ot(e.sky.top),t.fog=new La(e.sky.fog,38,108),this.group.name=`world-${e.id}`,t.add(this.group),this.buildGround(n,r);const a=new Cg(n),o=[];for(const h of e.props){const u=a.build(h);this.group.add(u.group),u.update?(u.mergeable!==!1&&Ng(u.group,r),this.animated.push(u)):o.push(u.group)}const l=a.buildJail(e.jail);this.group.add(l.group),o.push(l.group),l.update&&this.animated.push(l),Ug(this.group,o,r),this.sky=new Rg(n,e.sky,i),this.group.add(this.sky.group);const c=e.props.filter(h=>h.kind==="lamp").map(h=>({x:h.x,z:h.z}));this.lighting=new Pg(e.sky,i,c,e.jail.center),this.group.add(this.lighting.group),this.buildAmbient(n,r,i)}update(t,e){for(const i of this.animated)i.update?.(t,e);this.sky.update(t,e),this.lighting.update(e);for(const i of this.ambient){const n=i.points.geometry.getAttribute("position"),r=n.array;for(let a=0;a<i.phase.length;a++){const o=a*3;if(i.kind==="firefly"){const l=i.phase[a];r[o]=i.base[o]+Math.sin(e*.45+l)*.8,r[o+1]=i.base[o+1]+Math.sin(e*1.1+l)*.45,r[o+2]=i.base[o+2]+Math.cos(e*.38+l)*.7}else r[o+1]=i.base[o+1]-(e*.55+i.phase[a]*3)%18,r[o]=i.base[o]+Math.sin(e*.6+i.phase[a])*1.6}n.needsUpdate=!0}}dispose(){this.sky.dispose(),this.scene.remove(this.group),this.group.clear(),this.animated.length=0,this.ambient.length=0}buildGround(t,e){const i=this.map.bounds.maxX-this.map.bounds.minX,n=this.map.bounds.maxZ-this.map.bounds.minZ,r=Math.round(1024*n/i),a=t.getCanvasTexture(`ground-${this.map.id}`,1024,r,(d,p,g)=>Dg(d,p,g,this.map));a.anisotropy=8;const o=new Fc({map:a,roughness:.92,metalness:.02});e.track(o);const l=t.getGeometry(`ground-plane-${this.map.id}`,()=>new In(i,n)),c=new pt(l,o);c.rotation.x=-Math.PI/2,c.position.set((this.map.bounds.minX+this.map.bounds.maxX)/2,.015,(this.map.bounds.minZ+this.map.bounds.maxZ)/2),c.receiveShadow=!0,this.group.add(c);const h=t.getGeometry(`ground-slab-${this.map.id}`,()=>new Qe(i+3,.5,n+3)),u=new pt(h,t.getMaterial(b.nightDeep,{roughness:.95}));u.position.set(0,-.25,0),u.receiveShadow=!0,this.group.add(u)}buildAmbient(t,e,i){const n=i==="high"?this.map.fireflies:Math.round(i==="medium"?this.map.fireflies*.65:this.map.fireflies*.4);if(n>0){const a=t.getCanvasTexture("glow-soft",128,128,(d,p,g)=>{const _=d.createRadialGradient(p/2,g/2,0,p/2,g/2,p/2);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.35,"rgba(255,255,255,0.55)"),_.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=_,d.fillRect(0,0,p,g)}),o=new er({map:a,color:b.warmLight,size:.34,transparent:!0,opacity:.8,depthWrite:!1,blending:$i,sizeAttenuation:!0});e.track(o);const{positions:l,phase:c}=Ol(this.map,n,1,2.8,.3),h=new _e;h.setAttribute("position",new Ie(l.slice(),3)),e.track(h);const u=new ya(h,o);this.group.add(u),this.ambient.push({points:u,material:o,base:l,phase:c,kind:"firefly"})}const r=i==="high"?this.map.petals:Math.round(i==="medium"?this.map.petals*.6:this.map.petals*.35);if(r>0){const a=t.getCanvasTexture("petal-soft",64,64,(d,p,g)=>{d.clearRect(0,0,p,g),d.fillStyle="rgba(255,255,255,1)",d.beginPath(),d.ellipse(p/2,g/2,p*.28,p*.16,Math.PI/4,0,Math.PI*2),d.fill()}),o=new er({map:a,color:16762070,size:.28,transparent:!0,opacity:.65,depthWrite:!1,sizeAttenuation:!0});e.track(o);const{positions:l,phase:c}=Ol(this.map,r,8,12,1.5),h=new _e;h.setAttribute("position",new Ie(l.slice(),3)),e.track(h);const u=new ya(h,o);this.group.add(u),this.ambient.push({points:u,material:o,base:l,phase:c,kind:"petal"})}}}function Ol(s,t,e,i,n){const r=rr(Vl(s.id)),a=new Float32Array(t*3),o=new Float32Array(t);for(let l=0;l<t;l++)a[l*3]=s.bounds.minX+n+r()*(s.bounds.maxX-s.bounds.minX-n*2),a[l*3+1]=e+r()*(i-e),a[l*3+2]=s.bounds.minZ+n+r()*(s.bounds.maxZ-s.bounds.minZ-n*2),o[l]=r()*Math.PI*2;return{positions:a,phase:o}}function ie(s,t=1){const e=s>>16&255,i=s>>8&255,n=s&255;return`rgba(${e},${i},${n},${t})`}function Dg(s,t,e,i){const n=rr(Vl(i.id)),{base:r,accent:a,path:o,detail:l}=i.ground;s.fillStyle=ie(r),s.fillRect(0,0,t,e);for(let d=0;d<18;d++){const p=n()*t,g=n()*e,_=40+n()*130,m=s.createRadialGradient(p,g,0,p,g,_);m.addColorStop(0,ie(d%2===0?l:a,.1)),m.addColorStop(1,ie(d%2===0?l:a,0)),s.fillStyle=m,s.fillRect(p-_,g-_,_*2,_*2)}const c=d=>(d-i.bounds.minX)/(i.bounds.maxX-i.bounds.minX)*t,h=d=>(d-i.bounds.minZ)/(i.bounds.maxZ-i.bounds.minZ)*e;if(s.lineCap="round",s.lineJoin="round",i.id==="station"){s.fillStyle=ie(o,.72),Ws(s,t*.04,e*.08,t*.92,e*.84,26),s.fill(),s.strokeStyle=ie(b.cream,.35),s.lineWidth=4,Ws(s,t*.045,e*.085,t*.91,e*.83,24),s.stroke(),s.strokeStyle=ie(b.cream,.14),s.lineWidth=2;for(let f=.08;f<1;f+=.08)s.beginPath(),s.moveTo(t*f,e*.1),s.lineTo(t*f,e*.9),s.stroke();for(let f=.12;f<1;f+=.12)s.beginPath(),s.moveTo(t*.05,e*f),s.lineTo(t*.95,e*f),s.stroke();const d=56;for(let f=t*.06;f<t*.94;f+=d)for(let x=e*.1;x<e*.9;x+=d){const v=(Math.floor(f/d)+Math.floor(x/d))%2===0;s.fillStyle=ie(v?b.cream:b.wood,v?.07:.035),s.fillRect(f,x,d,d)}const p=c(0),g=h(0);s.strokeStyle=ie(b.gold,.5),s.lineWidth=6,s.beginPath(),s.arc(p,g,96,0,Math.PI*2),s.stroke(),s.strokeStyle=ie(b.cream,.42),s.lineWidth=4,s.beginPath(),s.arc(p,g,68,0,Math.PI*2),s.stroke(),s.fillStyle=ie(b.gold,.18),s.beginPath();for(let f=0;f<16;f++){const x=f/16*Math.PI*2-Math.PI/2,v=f%2===0?58:25,M=p+Math.cos(x)*v,P=g+Math.sin(x)*v;f===0?s.moveTo(M,P):s.lineTo(M,P)}s.closePath(),s.fill();const _=h(-18.4);s.fillStyle=ie(a,.9),s.fillRect(t*.06,_-5,t*.88,10),s.fillStyle=ie(b.cream,.35);for(let f=0;f<18;f++)s.fillRect(t*.06+f*(t*.88)/18,_-14,10,5);const m=h(-24);s.fillStyle=ie(b.inkSoft,.75),s.fillRect(0,m-16,t,32),s.fillStyle=ie(b.woodDark,.8);for(let f=0;f<t;f+=34)s.fillRect(f,m-18,18,36);s.strokeStyle=ie(b.cream,.4),s.lineWidth=5,s.beginPath(),s.moveTo(0,m-9),s.lineTo(t,m-9),s.moveTo(0,m+9),s.lineTo(t,m+9),s.stroke();for(const[f,x,v,M]of[[-24,8,5,4],[24,-4,5,4],[14,18,4,3],[-6,-18,4,3]]){s.fillStyle=ie(b.leafDeep,.7),Ws(s,c(f)-v*6,h(x)-M*6,v*12,M*12,18),s.fill();for(let P=0;P<8;P++)s.fillStyle=ie(P%2===0?b.pink:b.cream,.8),s.beginPath(),s.arc(c(f)+(n()-.5)*v*10,h(x)+(n()-.5)*M*10,2.5,0,Math.PI*2),s.fill()}}else if(i.id==="park"){const d=c(0),p=h(0),g=9.6/(i.bounds.maxX-i.bounds.minX)*t;s.fillStyle=ie(o,.72),s.beginPath(),s.arc(d,p,g,0,Math.PI*2),s.fill(),s.strokeStyle=ie(b.cream,.4),s.lineWidth=5,s.stroke(),s.strokeStyle=ie(o,.7),s.lineWidth=Math.max(18,t*.018);const _=[[0,0],[20,12],[-18,12],[22,-12],[-20,-12],[10,-18],[14,18],[-30,-22],[-30,18],[0,26]];for(const[m,f]of _)s.beginPath(),s.moveTo(d,p),s.quadraticCurveTo((d+c(m))/2+30,(p+h(f))/2-30,c(m),h(f)),s.stroke();for(const[m,f]of[[-14,10],[14,10],[-14,-10],[14,-10],[-30,-6],[30,-6]]){s.fillStyle=ie(b.pink,.16),s.beginPath(),s.arc(c(m),h(f),34,0,Math.PI*2),s.fill();for(let x=0;x<10;x++)s.fillStyle=ie(x%2===0?b.pink:b.cream,.85),s.beginPath(),s.arc(c(m)+(n()-.5)*56,h(f)+(n()-.5)*56,3,0,Math.PI*2),s.fill()}}else{s.fillStyle=ie(o,.7),s.fillRect(t*.44,0,t*.12,e),s.fillRect(0,e*.44,t,e*.12),s.strokeStyle=ie(b.cream,.28),s.lineWidth=4,s.strokeRect(t*.44,0,t*.12,e),s.strokeRect(0,e*.44,t,e*.12),s.strokeStyle=ie(o,.85),s.lineWidth=22,s.beginPath(),s.arc(c(0),h(0),5.4/(i.bounds.maxX-i.bounds.minX)*t,0,Math.PI*2),s.stroke(),s.strokeStyle=ie(o,.58),s.lineWidth=16;for(const[d,p]of[[18,8],[-24,16],[26,-22],[-32,-25],[0,-28]])s.beginPath(),s.moveTo(c(0),h(0)),s.quadraticCurveTo((c(0)+c(d))/2+20,(h(0)+h(p))/2,c(d),h(p)),s.stroke();for(const[d,p,g,_]of[[-30,8,6,4],[30,10,6,4],[-12,22,5,3],[12,-22,5,3],[-18,8,4,3]]){s.fillStyle=ie(b.leafDeep,.55),Ws(s,c(d)-g*5,h(p)-_*5,g*10,_*10,20),s.fill();for(let m=0;m<12;m++)s.fillStyle=ie(m%3===0?b.cream:b.pink,.85),s.beginPath(),s.arc(c(d)+(n()-.5)*g*9,h(p)+(n()-.5)*_*9,3,0,Math.PI*2),s.fill()}}for(let d=0;d<500;d++)s.fillStyle=ie(d%2===0?b.cream:b.ink,.04),s.fillRect(n()*t,n()*e,2+n()*4,2+n()*4);const u=s.createRadialGradient(t/2,e/2,t*.25,t/2,e/2,t*.72);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(20,12,40,0.32)"),s.fillStyle=u,s.fillRect(0,0,t,e)}function Ug(s,t,e){s.updateMatrixWorld(!0);const i=new Kt().copy(s.matrixWorld).invert(),n=new Map;for(const r of t){r.updateMatrixWorld(!0);const a=[];r.traverse(o=>{o!==r&&(o instanceof Yi||o instanceof es)&&a.push(o)});for(const o of a){const l=new Kt().copy(i).multiply(o.matrixWorld);o.removeFromParent(),l.decompose(o.position,o.quaternion,o.scale),s.add(o)}r.traverse(o=>{if(!(o instanceof pt)||o instanceof es||Array.isArray(o.material)||o.children.length>0)return;const l=o.geometry,c=`${l.index?"i":"n"}:${Object.keys(l.attributes).sort().join(",")}`,h=`${o.material.uuid}:${o.castShadow?1:0}:${o.receiveShadow?1:0}:${c}`,u=l.clone(),d=new Kt().copy(i).multiply(o.matrixWorld);u.applyMatrix4(d);const p=n.get(h);p?(p.geometries.push(u),p.meshes.push(o)):n.set(h,{material:o.material,cast:o.castShadow,receive:o.receiveShadow,geometries:[u],meshes:[o]})})}for(const r of n.values()){if(r.geometries.length===1){const l=r.geometries[0];e.track(l);const c=new pt(l,r.material);c.castShadow=r.cast,c.receiveShadow=r.receive,s.add(c);for(const h of r.meshes)h.removeFromParent();continue}const a=Ga(r.geometries,!1);if(!a){for(const l of r.geometries)l.dispose();continue}a.computeBoundingSphere(),a.computeBoundingBox(),e.track(a);const o=new pt(a,r.material);o.castShadow=r.cast,o.receiveShadow=r.receive,s.add(o);for(const l of r.meshes)l.removeFromParent();for(const l of r.geometries)l.dispose()}for(const r of t){let a=!1;r.traverse(o=>{o instanceof pt&&(a=!0)}),a||r.removeFromParent()}}function Ng(s,t){s.updateMatrixWorld(!0);const e=new Kt().copy(s.matrixWorld).invert(),i=new Map;s.traverse(n=>{if(!(n instanceof pt)||n instanceof es||Array.isArray(n.material)||n.children.length>0)return;const r=n.geometry,a=`${r.index?"i":"n"}:${Object.keys(r.attributes).sort().join(",")}`,o=`${n.material.uuid}:${n.castShadow?1:0}:${n.receiveShadow?1:0}:${a}`,l=r.clone(),c=new Kt().copy(e).multiply(n.matrixWorld);l.applyMatrix4(c);const h=i.get(o);h?(h.geometries.push(l),h.meshes.push(n)):i.set(o,{material:n.material,cast:n.castShadow,receive:n.receiveShadow,geometries:[l],meshes:[n]})});for(const n of i.values()){if(n.geometries.length<2){n.geometries[0]?.dispose();continue}const r=Ga(n.geometries,!1);if(!r){for(const o of n.geometries)o.dispose();continue}r.computeBoundingSphere(),r.computeBoundingBox(),t.track(r);const a=new pt(r,n.material);a.castShadow=n.cast,a.receiveShadow=n.receive,s.add(a);for(const o of n.meshes)o.removeFromParent();for(const o of n.geometries)o.dispose()}}function Ws(s,t,e,i,n,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+i,e,t+i,e+n,r),s.arcTo(t+i,e+n,t,e+n,r),s.arcTo(t,e+n,t,e,r),s.arcTo(t,e,t+i,e,r),s.closePath()}class kg{mode;map;scene=new f0;camera;rules;world;bag=new j0;input;callbacks;playerCharacter;playerController;cameraRig;particles;perception=new Hc;ghostAI=null;hiderAIs=[];hiderCharacters=new Map;visualTime=0;ended=!1;outcome=null;noiseTimer=0;rescueNoiseTimer=0;footstepTimer=0;constructor(t){this.mode=t.mode,this.map=t.map,this.input=t.input,this.callbacks=t.callbacks,this.world=new Ig(this.scene,this.map,t.quality,t.assets,this.bag),this.camera=new Xe(Z.camera.normalFov,window.innerWidth/Math.max(1,window.innerHeight),.1,190),this.scene.add(this.camera);const e=new qs(16771542,.58,12,2);if(e.position.set(0,.4,1.2),e.castShadow=!1,this.camera.add(e),this.rules=new lg({mode:this.mode,hiderSpawns:this.map.spawns.hiders,names:this.mode==="hider"?["苗苗","队友 1","队友 2","队友 3","队友 4"]:["逃离者 1","逃离者 2","逃离者 3","逃离者 4","逃离者 5"]}),this.mode==="hider"){const n=this.rules.hiders[0];this.playerCharacter=new sr(t.assets,"hider",0,0,n),this.playerCharacter.setPosition(this.map.spawns.hiders[0].x,this.map.spawns.hiders[0].z)}else this.playerCharacter=new sr(t.assets,"ghost",-1,0,null),this.playerCharacter.setPosition(this.map.spawns.ghost.x,this.map.spawns.ghost.z);this.scene.add(this.playerCharacter.model.group),this.cameraRig=new mg(this.camera,this.world.collision);const i=this.mode==="ghost"&&this.map.id==="park"?0:Math.PI;if(this.cameraRig.setYaw(i),this.playerCharacter.setFacingYaw(i),this.playerController=new pg(this.world,this.playerCharacter,this.cameraRig,this.input,this.mode==="ghost"),this.playerController.onCall=()=>{this.ghostAI?.addNoise(this.playerCharacter.x,this.playerCharacter.z,Z.perception.hearing.call,"call"),this.callbacks.onSound?.("call"),this.callbacks.onToast("你向队友呼救了！","pink")},this.mode==="hider"){this.ghostAI=new fg(t.assets,this.world),this.scene.add(this.ghostAI.character.model.group),this.hiderCharacters.set(0,this.playerCharacter);for(let n=1;n<this.rules.hiders.length;n++){const r=this.rules.hiders[n],a=new zl(t.assets,this.world,r);a.character.setPosition(this.map.spawns.hiders[n].x,this.map.spawns.hiders[n].z),this.hiderAIs.push(a),this.hiderCharacters.set(r.id,a.character),this.scene.add(a.character.model.group)}}else for(let n=0;n<this.rules.hiders.length;n++){const r=this.rules.hiders[n],a=new zl(t.assets,this.world,r);a.character.setPosition(this.map.spawns.hiders[n].x,this.map.spawns.hiders[n].z),this.hiderAIs.push(a),this.hiderCharacters.set(r.id,a.character),this.scene.add(a.character.model.group)}this.particles=new gg(this.scene,t.assets,t.quality==="low"?90:150),this.cameraRig.setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)}get isEnded(){return this.ended}get currentOutcome(){return this.outcome}getScene(){return this.scene}getCamera(){return this.camera}getRules(){return this.rules}getWorld(){return this.world}getPlayerController(){return this.playerController}getPlayerCharacter(){return this.playerCharacter}getGhostPosition(){return this.ghostAI?{x:this.ghostAI.x,z:this.ghostAI.z,yaw:this.ghostAI.character.facingYaw,recovering:this.ghostAI.isRecovering,canAttack:this.ghostAI.canAttack}:null}teleportGhost(t,e){this.ghostAI?.setPosition(t,e)}setCameraYaw(t){this.cameraRig.setYaw(t)}getCameraLook(){return{yaw:this.cameraRig.yaw,pitch:this.cameraRig.pitch}}applyLookDelta(t,e){this.cameraRig.applyLook(t,e)}getAIStates(){return this.hiderAIs.map(t=>({id:t.record.id,state:t.currentState,crouching:t.isCrouching,hasPath:t.hasPath,boosted:t.isSpeedBoosted,target:t.pathTarget,x:t.x,z:t.z}))}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}update(t){if(this.ended)return;const e=t;this.visualTime+=e,this.rules.tick(e),this.playerController.update(e,this.visualTime);const i=this.mode==="ghost"?this.playerCharacter.x:this.ghostAI?.x??0,n=this.mode==="ghost"?this.playerCharacter.z:this.ghostAI?.z??0,r=this.assignRescueTargets();for(const a of this.hiderAIs){const o=this.perception.canHiderSeeGhost(a.x,a.z,a.character.facingYaw,i,n,this.world.collision),l=this.ghostAI!==null&&this.ghostAI.chasingId!==-1&&this.ghostAI.chasingId!==a.record.id;a.update(e,this.visualTime,{ghostX:i,ghostZ:n,ghostVisible:o,ghostBusy:l,rescueTarget:r.get(a.record.id)??null})}this.ghostAI&&this.ghostAI.update(e,this.visualTime,this.buildGhostTargets()),this.rules.updateRescue(e),this.resolveContacts(),this.emitMovementNoise(e),this.emitFootsteps(e),this.processEvents(),this.particles.update(e),this.world.update(e,this.visualTime),this.callbacks.onHeartbeat?.(this.getGhostProximity())}getHudState(){const t=this.rules.playerHider,e=this.getRescueInfo();return{mode:this.mode,countdown:this.rules.countdown,remaining:this.rules.remaining,isGhost:this.mode==="ghost",playerIsJailed:t?.state==="jailed",playerIsEliminated:t?.state==="eliminated",playerContactCount:t?.contactCount??0,playerJailCount:t?.jailCount??0,playerName:t?.name??"鬼",hiders:this.rules.hiders.map(i=>({id:i.id,name:i.name,state:i.state,contactCount:i.contactCount,jailCount:i.jailCount,isPlayer:i.isPlayer})),stamina:this.playerController.staminaRatio,lungeCooldown:this.playerController.lungeCooldownRatio,playerBoost:this.playerController.isSpeedBoosted,playerCanAttack:this.playerController.canAttack,ghostProximity:this.getGhostProximity(),rescueProgress:e.progress,rescueName:e.name,hint:this.getHint(),stats:{...this.rules.stats}}}dispose(){this.ghostAI?.dispose();for(const t of this.hiderAIs)t.dispose();this.playerCharacter.dispose(),this.particles.dispose(),this.world.dispose(),this.bag.dispose(),this.scene.clear()}buildGhostTargets(){const t=[];for(const e of this.rules.hiders){const i=this.hiderCharacters.get(e.id);if(!i)continue;const r=e.id===0&&this.mode==="hider"?this.playerController.isCrouching:this.findHiderAI(e.id)?.isCrouching??!1,a=r&&this.nearHidingSpot(i.x,i.z);t.push({character:i,crouching:r,hidden:a})}return t}assignRescueTargets(){const t=new Map,e=this.rules.hiders.filter(o=>o.state==="jailed");if(e.length===0)return t;const i=new Map,n=this.hiderAIs.filter(o=>o.record.state==="free"),r=this.rules.playerHider;let a=!1;for(const o of n){let l=null;if(r?.state==="jailed"&&!a)l=r,a=!0;else{let c=1/0;for(const h of e){if((i.get(h.id)??0)>=2)continue;const u=se(o.x,o.z,h.x,h.z);u<c&&(c=u,l=h)}}l&&(t.set(o.record.id,{x:l.x,z:l.z,id:l.id}),i.set(l.id,(i.get(l.id)??0)+1))}return t}resolveContacts(){if(this.mode==="hider"&&this.ghostAI){if(!this.ghostAI.canAttack)return;const e=this.ghostAI.isLunging?Z.lungeContactDistance:Z.contactDistance;for(const i of this.rules.hiders){if(!this.rules.canContact(i.id))continue;const n=this.hiderCharacters.get(i.id);if(!n||se(this.ghostAI.x,this.ghostAI.z,n.x,n.z)>e)continue;const r=this.rules.tryContact(i.id,!1);if(r&&r.type==="contact"){this.ghostAI.onHitLanded(),i.state==="free"&&(i.isPlayer?this.playerController.grantSpeedBoost():this.findHiderAI(i.id)?.grantSpeedBoost()),this.onContactVisual(i.isPlayer);break}}return}if(!this.playerController.canAttack)return;const t=this.playerController.isLunging?Z.lungeContactDistance:Z.contactDistance;for(const e of this.hiderAIs){const i=e.record;if(!this.rules.canContact(i.id)||se(this.playerCharacter.x,this.playerCharacter.z,e.x,e.z)>t)continue;const n=this.rules.tryContact(i.id,!0);if(n&&n.type==="contact"){this.playerController.onHitLanded(),i.state==="free"&&e.grantSpeedBoost(),this.onContactVisual(!1);break}}}onContactVisual(t){this.cameraRig.addShake(t?.5:.18),t&&(this.callbacks.onFlash?.(),this.callbacks.onHeartbeat?.(1)),this.callbacks.onSound?.("contact")}processEvents(){const t=this.rules.drainEvents();for(const e of t)this.handleEvent(e)}handleEvent(t){if(t.type==="contact"){const e=this.hiderCharacters.get(t.hiderId);e&&this.particles.burst(e.x,1.5,e.z,16173151,"star",8,{speed:2.1,size:.2,life:.65});return}if(t.type==="jailed"){const e=this.rules.hiders.find(r=>r.id===t.hiderId),i=this.hiderCharacters.get(t.hiderId),n=this.map.jail.slots[t.slot%this.map.jail.slots.length];e&&i&&(i.setPosition(n.x,n.z),i.playHit(),this.particles.burst(n.x,1.1,n.z,16752315,"bubble",12,{speed:1.6,size:.26,life:1.1,gravity:-.1}),this.callbacks.onSound?.("jail"),e.isPlayer?(this.callbacks.onFlash?.(),this.cameraRig.addShake(.6),this.callbacks.onToast("被关进关押区了！等待队友来救你","pink"),this.playerController.resetTransient()):this.callbacks.onToast(`${e.name} 被关押了`,"pink")),this.ghostAI?.notifyJail(this.map.jail.center.x,this.map.jail.center.z);return}if(t.type==="rescued"){const e=this.rules.hiders.find(n=>n.id===t.hiderId),i=this.hiderCharacters.get(t.hiderId);if(e&&i){const n=this.map.jail.releasePoint;i.setPosition(n.x,n.z),this.particles.burst(n.x,1.2,n.z,9429710,"heart",14,{speed:1.9,size:.22,life:1,gravity:-.15}),this.callbacks.onSound?.("rescue"),e.isPlayer?(this.playerController.resetTransient(),this.callbacks.onToast("你被救出来了！","gold")):this.callbacks.onToast(`${e.name} 被救出来了`,"gold")}return}if(t.type==="eliminated"){const e=this.rules.hiders.find(n=>n.id===t.hiderId),i=this.hiderCharacters.get(t.hiderId);e&&i&&(this.particles.burst(i.x,1.4,i.z,12101618,"star",16,{speed:2.4,size:.24,life:1.1,gravity:.2}),this.callbacks.onSound?.("eliminate"),e.isPlayer?(this.callbacks.onFlash?.(),this.callbacks.onToast("你出局了……","pink")):this.callbacks.onToast(`${e.name} 出局了`,"pink"));return}t.type==="match-end"&&(this.ended=!0,this.outcome=t.outcome,this.callbacks.onSound?.(t.outcome==="hider-win"||t.outcome==="ghost-win"?"win":"lose"),this.callbacks.onEnd(t.outcome,{...this.rules.stats},t.mode))}emitMovementNoise(t){if(this.ghostAI){if(this.noiseTimer-=t,this.playerController.isMoving&&this.noiseTimer<=0){const e=this.playerController.isSprinting,i=e?Z.perception.hearing.sprint:Z.perception.hearing.walk;this.ghostAI.addNoise(this.playerCharacter.x,this.playerCharacter.z,i,e?"sprint":"walk"),this.noiseTimer=e?.45:.75}if(this.rescueNoiseTimer-=t,this.rescueNoiseTimer<=0){for(const e of this.rules.hiders)if(!(e.state!=="jailed"||e.rescueProgress<=0)){this.ghostAI.addNoise(e.x,e.z,Z.perception.hearing.rescue,"rescue"),this.rescueNoiseTimer=.8;break}}}}emitFootsteps(t){if(!this.playerController.isMoving||this.playerCharacter.isJailed){this.footstepTimer=0;return}if(this.footstepTimer-=t,this.footstepTimer>0)return;const e=this.playerController.isSprinting;this.footstepTimer=e?.22:.36,this.particles.burst(this.playerCharacter.x+(Math.random()-.5)*.25,.08,this.playerCharacter.z+(Math.random()-.5)*.25,15129032,"bubble",e?4:2,{speed:.45,size:.13,life:.4,gravity:.25}),this.callbacks.onSound?.("step")}getGhostProximity(){if(this.mode==="ghost"||!this.ghostAI)return 0;const t=se(this.playerCharacter.x,this.playerCharacter.z,this.ghostAI.x,this.ghostAI.z);return En(1-t/Z.perception.terrorRadius,0,1)}getHint(){return this.rules.countdown>0?"准备……":this.rules.playerHider?.state==="eliminated"?"":this.rules.playerHider?.state==="jailed"?this.rules.playerHider.rescueProgress>0?"队友正在救你，坚持住":this.input.isTouchDevice?"点击呼救按钮向队友求助":"按 F 向队友呼救":this.mode==="ghost"?this.playerController.lungeCooldownRatio<=0?this.input.isTouchDevice?"点击右下角扑击按钮":"空格 / 扑击按钮：扑击":"":this.playerController.isSpeedBoosted?"受击加速！快跑！":this.getRescueInfo().progress>0?"保持触碰 5 秒即可救援":this.nearHidingSpot(this.playerCharacter.x,this.playerCharacter.z)?this.input.isTouchDevice?"站定片刻可以蹲下藏好":"按住 C 蹲下藏好":this.getGhostProximity()>.55?"鬼就在附近，快跑！":""}getRescueInfo(){const t=this.rules.playerHider;if(t?.state==="jailed")return{progress:En(t.rescueProgress/Z.rescueSeconds,0,1),name:t.name};let e=null,i=1/0;for(const n of this.rules.hiders){if(n.state!=="jailed")continue;const r=se(this.playerCharacter.x,this.playerCharacter.z,n.x,n.z);r<i&&r<2.6&&(i=r,e=n)}return e?{progress:En(e.rescueProgress/Z.rescueSeconds,0,1),name:e.name}:{progress:0,name:""}}nearHidingSpot(t,e){for(const i of this.world.hidingSpots)if(se(t,e,i.x,i.z)<1.5)return!0;return!1}findHiderAI(t){return this.hiderAIs.find(e=>e.record.id===t)}}class zg{canvas;assets=new Z0;renderer;input;audio=new Jc;ui;settings;quality;session=null;state="menu";lastMode="hider";lastMapSelection="random";lastTime=performance.now();hudTimer=0;timeScale=1;debugEnabled;debugMap;debugMode;constructor(){this.canvas=document.getElementById("game-canvas");const t=document.getElementById("ui-root");if(!this.canvas||!t)throw new Error("缺少游戏画布或 UI 容器");const e=new URLSearchParams(window.location.search);this.debugEnabled=e.get("debug")==="1",this.timeScale=Math.max(.1,Number(e.get("timeScale")??"1")||1);const i=e.get("map");this.debugMap=i&&i in ra?i:null;const n=e.get("mode");this.debugMode=n==="ghost"||n==="hider"?n:null,this.quality=K0(),this.settings={quality:this.quality,muted:this.audio.isMuted,reducedMotion:tg()},this.renderer=new ag(this.canvas,this.quality),this.renderer.resize(window.innerWidth,window.innerHeight),this.input=new eg(this.canvas),this.ui=new nh(t,{onStart:(r,a)=>{this.startGame(r,a)},onRestart:()=>{this.startGame(this.lastMode,this.lastMapSelection)},onMenu:()=>this.returnToMenu(),onResume:()=>this.resume(),onSettingsChange:r=>this.changeSettings(r)},this.settings,Ba(),this.input),this.ui.onPauseRequested=()=>this.togglePause(),this.input.onLockChange=r=>this.ui.setPointerLocked(r),this.input.setEnabled(!1),this.ui.showMenu(),this.ui.maybeShowTutorial(),window.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.togglePause()}),window.addEventListener("beforeunload",()=>this.dispose()),this.debugEnabled&&this.exposeDebug(),this.debugEnabled&&e.get("autostart")==="1"&&this.startGame(this.debugMode??"hider",this.debugMap??"random"),this.lastTime=performance.now(),requestAnimationFrame(this.loop)}loop=t=>{requestAnimationFrame(this.loop);const e=Math.min(.05,Math.max(0,(t-this.lastTime)/1e3));this.lastTime=t,this.input.consumePressed("pause")&&(this.state==="playing"||this.state==="paused")&&this.togglePause(),this.state==="playing"&&this.session?(this.session.update(e*this.timeScale),this.renderer.render(this.session.getScene(),this.session.getCamera()),this.hudTimer-=e,this.hudTimer<=0&&(this.hudTimer=.1,this.ui.updateHud(this.session.getHudState())),this.audio.update(e)):(this.state==="paused"||this.state==="result")&&this.session&&this.renderer.render(this.session.getScene(),this.session.getCamera())};async startGame(t,e){if(this.state==="loading")return;this.disposeSession(),this.lastMode=t,this.lastMapSelection=e,this.state="loading",this.input.setEnabled(!1),this.input.reset(),this.input.isTouchDevice||this.input.lock();const i=this.debugEnabled&&this.debugMap?this.debugMap:e,r=new URLSearchParams(window.location.search).get("seed"),a=r?Number(r):(Date.now()^Math.random()*4294967295)>>>0,o=Zc(i,rr(a>>>0||1));if(this.ui.showLoading(o.name),this.audio.start(o.id),this.audio.setPaused(!1),await new Promise(c=>window.setTimeout(c,140)),this.state!=="loading")return;const l={onEnd:(c,h,u)=>this.handleEnd(c,h,u),onToast:(c,h)=>this.ui.toast(c,h),onFlash:()=>this.ui.flash(),onHeartbeat:c=>this.audio.setHeartbeat(c),onSound:c=>this.audio.play(c)};this.session=new kg({mode:t,map:o,quality:this.quality,assets:this.assets,input:this.input,callbacks:l}),this.session.resize(window.innerWidth,window.innerHeight),this.state="playing",this.hudTimer=0,this.input.setEnabled(!0),this.ui.showHud(t,this.settings),this.ui.setPointerLocked(this.input.isLocked),this.ui.toast(`本局地图：${o.name}`,"gold"),this.lastTime=performance.now()}handleEnd(t,e,i){this.state!=="result"&&(this.state="result",this.input.setEnabled(!1),this.input.unlock(),this.audio.stopMusic(),this.audio.setPaused(!1),this.audio.setHeartbeat(0),this.ui.showResult(t,e,i))}togglePause(){this.state==="playing"?(this.state="paused",this.input.setEnabled(!1),this.input.reset(),this.input.unlock(),this.audio.setPaused(!0),this.ui.showPause(this.lastMode)):this.state==="paused"&&this.resume()}resume(){this.state==="paused"&&(this.state="playing",this.ui.hidePause(),this.input.setEnabled(!0),this.input.reset(),this.audio.setPaused(!1),this.input.isTouchDevice||this.input.lock(),this.lastTime=performance.now())}returnToMenu(){this.disposeSession(),this.state="menu",this.input.setEnabled(!1),this.input.unlock(),this.input.reset(),this.audio.setPaused(!1),this.audio.stopMusic(),this.audio.start("menu"),this.ui.showMenu()}changeSettings(t){this.settings={...this.settings,...t},this.ui.setSettings(this.settings),t.muted!==void 0&&this.audio.setMuted(t.muted),t.quality&&t.quality!==this.quality&&(this.quality=t.quality,Q0(t.quality),this.renderer.setQuality(t.quality),(this.state==="playing"||this.state==="paused")&&this.ui.toast("画质设置已保存，下一局生效","gold"))}onResize(){this.renderer.resize(window.innerWidth,window.innerHeight),this.session?.resize(window.innerWidth,window.innerHeight)}disposeSession(){this.session?.dispose(),this.session=null}dispose(){this.disposeSession(),this.input.dispose(),this.audio.dispose(),this.renderer.dispose(),this.assets.dispose(),this.ui.dispose()}exposeDebug(){const t=window;t.__mm={getState:()=>this.state,getSession:()=>this.session,getHud:()=>this.session?.getHudState()??null,getPlayer:()=>{const e=this.session?.getPlayerCharacter();return e?{x:e.x,z:e.z}:null},getHiders:()=>this.session?.getRules().hiders.map(e=>({id:e.id,x:e.x,z:e.z,state:e.state,contactCount:e.contactCount,jailCount:e.jailCount}))??[],getGhost:()=>this.session?.getGhostPosition()??null,getAIStates:()=>this.session?.getAIStates()??[],getRendererInfo:()=>({calls:this.renderer.renderer.info.render.calls,triangles:this.renderer.renderer.info.render.triangles,geometries:this.renderer.renderer.info.memory.geometries,textures:this.renderer.renderer.info.memory.textures}),teleportGhost:(e,i)=>this.session?.teleportGhost(e,i),setCameraYaw:e=>this.session?.setCameraYaw(e),getCameraLook:()=>this.session?.getCameraLook()??null,look:(e,i)=>this.session?.applyLookDelta(e,i),forceRescue:e=>{this.session?.getRules().forceRescue(e)},start:(e,i)=>{this.startGame(e,i)},teleport:(e,i)=>{this.session?.getPlayerCharacter().setPosition(e,i)},forceContact:e=>{const i=this.session?.getRules();if(!i)return;const n=i.hiders[e];n&&(i.contactCooldown=0,n.invulnerableUntil=0,i.tryContact(e,this.lastMode==="ghost"))},setTimeScale:e=>{this.timeScale=Math.max(.1,e)},setTime:e=>{const i=this.session?.getRules();i&&(i.elapsed=e)},step:e=>{this.session?.update(e)},pause:()=>this.togglePause(),menu:()=>this.returnToMenu()}}}window.addEventListener("DOMContentLoaded",()=>{new zg});export{$i as A,_e as B,Og as C,te as F,ts as H,Nh as L,Pn as M,Li as N,_c as O,Fg as R,Mi as S,wu as U,st as V,Zi as W,Ot as a,C as b,ne as c,he as d,kh as e,zh as f,Yl as g,Oh as h,pt as i};
