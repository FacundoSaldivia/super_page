"use strict";(self.webpackChunksuperheroes_page=self.webpackChunksuperheroes_page||[]).push([[483],{483:(D,f,s)=>{s.r(f),s.d(f,{LogedModule:()=>W});var p=s(6019),m=s(2950);function C(n,r,e,o,i,a,g){try{var l=n[a](g),d=l.value}catch(B){return void e(B)}l.done?r(d):Promise.resolve(d).then(o,i)}function O(n){return function(){var r=this,e=arguments;return new Promise(function(o,i){var a=n.apply(r,e);function g(d){C(a,o,i,g,l,"next",d)}function l(d){C(a,o,i,g,l,"throw",d)}g(void 0)})}}var t=s(3556),Z=s(4522);let u=(()=>{class n{constructor(e){this.http=e,this.url="https://www.superheroapi.com/api.php/4814442855265599/"}getResult(e){return this.http.get(`${this.url}search/${e}`)}getHero(e){return this.http.get(`${this.url}${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(Z.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _=s(273);let b=(()=>{class n{constructor(){this.subject=new _.x,this.listHeros=JSON.parse(localStorage.getItem("heroArray"))||[]}updateListEvent(){this.subject.next(null)}pushHero(e){this.listHeros.push(e),localStorage.setItem("heroArray",JSON.stringify(this.listHeros))}removeHero(e){let o;this.listHeros.forEach((i,a)=>{i.id==e.id&&(o=a)}),o>-1&&(this.listHeros.splice(o,1),localStorage.setItem("heroArray",JSON.stringify(this.listHeros)))}checkHero(e){let o;return this.listHeros.forEach((i,a)=>{i.id==e.id&&(o=a)}),o>-1}check(e){let o=0,i=e.biography.alignment;return this.listHeros.forEach(a=>{a.biography.alignment==i&&(o+=1)}),o<=2}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=s(2421);const P=function(){return["/dashboard/home"]},S=function(){return["/dashboard/search"]};let y=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-navbar"]],decls:6,vars:4,consts:[[1,"navbar","navbar-dark"],[1,"navbar-brand",3,"routerLink"],["src","../../../../assets/img/search-navbar.png","alt","",2,"width","60px"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0),t.TgZ(1,"a",1),t._uU(2,"Home"),t.qZA(),t.TgZ(3,"a",1),t._uU(4,"Search"),t._UZ(5,"img",2),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(2,P)),t.xp6(2),t.Q6J("routerLink",t.DdM(3,S)))},directives:[h.M2,m.yS],styles:[".navbar[_ngcontent-%COMP%]{background-color:#141414de;height:60px}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Comics;font-size:2.5em;padding-top:0;margin:0}"]}),n})();var w=s(9463),v=s(7970);let x=(()=>{class n{constructor(){this.statsNumber=[],this.radarChartOptions={responsive:!0,borderColor:"#edf2f4",backgroundColor:"#edf2f43a",color:"green",plugins:{legend:{display:!1}},scales:{r:{ticks:{maxTicksLimit:10},grid:{lineWidth:6},angleLines:{display:!1},max:100,min:0}}},this.radarChartLabels=["Combat","Durability","intelligence","Power","Speed","Strength"],this.radarChartData={labels:this.radarChartLabels,datasets:[{data:this.statsNumber,label:"Stats",tension:.05,pointBackgroundColor:"black"}]},this.radarChartType="radar"}ngOnInit(){this.getStats()}chartClicked({event:e,active:o}){console.log(e,o)}chartHovered({event:e,active:o}){console.log(e,o)}getStats(){this.statsNumber.push(this.stats.combat),this.statsNumber.push(this.stats.durability),this.statsNumber.push(this.stats.intelligence),this.statsNumber.push(this.stats.power),this.statsNumber.push(this.stats.speed),this.statsNumber.push(this.stats.strength)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chart"]],inputs:{stats:"stats"},decls:4,vars:3,consts:[[2,"display","block"],["baseChart","",3,"data","options","type"]],template:function(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div"),t.TgZ(2,"div",0),t._UZ(3,"canvas",1),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("data",o.radarChartData)("options",o.radarChartOptions)("type",o.radarChartType))},directives:[v.jh],styles:[""]}),n})();const T=["selfClosingAlert"];function A(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.addHero(i.hero)}),t._uU(1,"Add"),t.qZA()}}function N(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.removeHero(i.hero)}),t._uU(1,"Remove"),t.qZA()}}function k(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ngb-alert",11,12),t.NdJ("closed",function(){return t.CHM(e),t.oxw().successMessage=""}),t._uU(2),t.qZA()}if(2&n){const e=t.oxw();t.xp6(2),t.hij("",e.successMessage,"\n")}}let M=(()=>{class n{constructor(e,o){this.modalService=e,this.updateListService=o,this._success=new _.x,this.successMessage=""}changeSuccessMessage(e){this._success.next(e)}addHero(e){console.log(this.updateListService.listHeros),this.updateListService.listHeros.length>=6?this.changeSuccessMessage("You already have 6 characters on your team..."):this.updateListService.check(e)?this.updateListService.pushHero(e):this.changeSuccessMessage(`You already have 3 ${e.biography.alignment} characters `)}removeHero(e){this.updateListService.removeHero(e),this.updateListService.updateListEvent()}open(){this.modalService.open(H,{windowClass:"custom"}).componentInstance.hero=this.hero}checkIfAdded(e){return this.updateListService.checkHero(e)}ngOnInit(){this._success.subscribe(e=>this.successMessage=e),this._success.pipe((0,w.b)(2e3)).subscribe(()=>{this.selfClosingAlert&&this.selfClosingAlert.close()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.FF),t.Y36(b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],viewQuery:function(e,o){if(1&e&&t.Gf(T,5),2&e){let i;t.iGM(i=t.CRH())&&(o.selfClosingAlert=i.first)}},inputs:{hero:"hero"},decls:12,vars:6,consts:[[1,"card"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"alignment"],[1,"card-title"],[1,"btn","btn-info",3,"click"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","btn btn-danger",3,"click",4,"ngIf"],["class","notificacion","type","danger",3,"closed",4,"ngIf"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"],["type","danger",1,"notificacion",3,"closed"],["selfClosingAlert",""]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2),t.TgZ(3,"h2",3),t._uU(4),t.qZA(),t.TgZ(5,"h2",4),t._uU(6),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.open()}),t._uU(8,"Stats"),t.qZA(),t.YNc(9,A,2,0,"button",6),t.YNc(10,N,2,0,"button",7),t.qZA(),t.qZA(),t.YNc(11,k,3,1,"ngb-alert",8)),2&e&&(t.xp6(1),t.s9C("src",o.hero.image.url,t.LSH),t.xp6(3),t.Oqu(o.hero.biography.alignment),t.xp6(2),t.Oqu(o.hero.name),t.xp6(3),t.Q6J("ngIf",!o.checkIfAdded(o.hero)),t.xp6(1),t.Q6J("ngIf",o.checkIfAdded(o.hero)),t.xp6(1),t.Q6J("ngIf",o.successMessage))},directives:[p.O5,h.xm],styles:[".card[_ngcontent-%COMP%]{width:300px;margin-bottom:20px;background-color:#8d99ae}.card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{height:390px;object-fit:cover}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;gap:20px}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{position:absolute;top:78%;left:50%;transform:translate(-50%,-50%);color:#000;font-size:2em;font-family:Comics;max-width:100%;padding:0 5px;text-align:center;background:#ddd;border:1px solid #222;box-shadow:3px 3px #222}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .alignment[_ngcontent-%COMP%]{font-family:Comics;position:absolute;top:1%;right:3%;padding:0 5px;background:#ddd;border:1px solid #222;box-shadow:3px 3px #222;color:#000}.modal-dialog[_ngcontent-%COMP%]{width:1200px!important;max-width:1200px!important}.notificacion[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:50%;transform:translate(50%,50%);z-index:1000000}"]}),n})(),H=(()=>{class n{constructor(e){this.activeModal=e}checkEmpty(e){return""==e||"0"==e||"-"==e?"Unknown":e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Kz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ngbd-modal-content"]],inputs:{hero:"hero"},decls:23,vars:8,consts:[[1,"wrapper"],[1,"modal-header"],[1,"title-name"],[1,"modal-body"],[1,"stats"],[3,"stats"],[1,"info"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-light",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1",2),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t._UZ(6,"app-chart",5),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"h2"),t._uU(9),t.qZA(),t.TgZ(10,"h2"),t._uU(11),t.qZA(),t.TgZ(12,"h2"),t._uU(13),t.qZA(),t.TgZ(14,"h2"),t._uU(15),t.qZA(),t.TgZ(16,"h2"),t._uU(17),t.qZA(),t.TgZ(18,"h2"),t._uU(19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",7),t.TgZ(21,"button",8),t.NdJ("click",function(){return o.activeModal.close("Close click")}),t._uU(22," Close "),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(o.hero.name),t.xp6(3),t.Q6J("stats",o.hero.powerstats),t.xp6(3),t.hij("Name:",o.checkEmpty(o.hero.biography["full-name"]),""),t.xp6(2),t.hij("Alias:",o.checkEmpty(o.hero.name),""),t.xp6(2),t.hij("Weight:",o.checkEmpty(o.hero.appearance.weight[1]),""),t.xp6(2),t.hij("Height:",o.checkEmpty(o.hero.appearance.height[1]),""),t.xp6(2),t.hij("Eye color:",o.checkEmpty(o.hero.appearance["eye-color"]),""),t.xp6(2),t.hij("Place of work:",o.checkEmpty(o.hero.work.base),""))},directives:[x],styles:[".modal-header[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%]{text-align:center;width:100%;font-family:Comics;font-size:3em;letter-spacing:5px;margin:0!important;color:#fff;padding-left:45px}.modal-body[_ngcontent-%COMP%]{color:#f0f8ff;display:grid;grid-template-columns:1fr 1fr;align-content:center;align-items:center}.modal-body[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{text-align:center}.wrapper[_ngcontent-%COMP%]{background-color:#2b2d42}.modal-dialog[_ngcontent-%COMP%]{width:1200px!important}@media screen and (max-width: 1000px){.modal-body[_ngcontent-%COMP%]{grid-template-columns:1fr}.modal-body[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{width:60vw;margin:0 auto}.modal-body[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%]{padding:0}}@media screen and (max-width: 650px){.modal-body[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{width:100%;margin:0}}"]}),n})();function q(n,r){if(1&n&&(t.TgZ(0,"div",2),t._UZ(1,"app-card",3),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("hero",e)}}let U=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-grid-card-home"]],inputs:{listaSuper:"listaSuper"},decls:2,vars:1,consts:[[1,"grid"],["style","justify-content: center;display: flex;",4,"ngFor","ngForOf"],[2,"justify-content","center","display","flex"],[3,"hero"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,q,2,1,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.listaSuper))},directives:[p.sg,M],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px;gap:20px;justify-content:center;align-items:center;margin:20px}@media screen and (max-width: 1400px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}}@media screen and (max-width: 1200px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media screen and (max-width: 700px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]}),n})();const I=function(){return["/dashboard/search"]};function L(n,r){1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"h1"),t._uU(2,"It looks like you dont have any heros on your team..."),t.qZA(),t.TgZ(3,"button",3),t._uU(4,"Search for heros"),t.qZA(),t._UZ(5,"img",4),t.qZA()),2&n&&(t.xp6(3),t.Q6J("routerLink",t.DdM(1,I)))}function J(n,r){if(1&n&&(t.TgZ(0,"div",12),t.TgZ(1,"h3"),t._uU(2,"Power stats"),t.qZA(),t._UZ(3,"app-chart",13),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.Q6J("stats",e.heroStats)}}function F(n,r){if(1&n&&(t.TgZ(0,"div",12),t._UZ(1,"app-chart",13),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("stats",e.loadingStats)}}function j(n,r){if(1&n&&(t.TgZ(0,"div",5),t.TgZ(1,"h1",6),t._uU(2,"Your Team"),t.qZA(),t._UZ(3,"app-grid-card-home",7),t.TgZ(4,"div",8),t.TgZ(5,"div",9),t.TgZ(6,"h2"),t._uU(7,"Team's statistics "),t.qZA(),t._UZ(8,"hr"),t.qZA(),t.YNc(9,J,4,1,"div",10),t.TgZ(10,"div",11),t.TgZ(11,"h3"),t._uU(12),t.qZA(),t.TgZ(13,"h4"),t._uU(14),t.qZA(),t.TgZ(15,"h4"),t._uU(16),t.qZA(),t.qZA(),t.YNc(17,F,2,1,"div",10),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("listaSuper",e.heroArray),t.xp6(6),t.Q6J("ngIf",!e.chartLoading),t.xp6(3),t.hij("Strenght of the team: ",e.greatestStat," "),t.xp6(2),t.hij("Average height: ",e.averageHeight,"cm"),t.xp6(2),t.hij("Average weight: ",e.averageWeight,"kg"),t.xp6(1),t.Q6J("ngIf",e.chartLoading)}}let Q=(()=>{class n{constructor(e,o){var i=this;this.superService=e,this.updateListService=o,this.chartLoading=!0,this.heroArray=this.updateListService.listHeros||[],this.updateListSubscription=this.updateListService.subject.subscribe(a=>{this.updateList()}),this.heroStats={power:0,intelligence:0,speed:0,strength:0,durability:0,combat:0},this.loadingStats={power:0,intelligence:0,speed:0,strength:0,durability:0,combat:0},this.greatestStat="",this.averageHeight=0,this.averageWeight=0,this.yourFunction=O(function*(){yield i.delay(100),i.chartLoading=!1}),this.delay=a=>new Promise(g=>setTimeout(g,a))}ngOnInit(){this.getHeros(this.heroArray)}getHeros(e){this.averageWeight=0,this.averageHeight=0,e.forEach(o=>{this.heroStats.combat+=this.checkIfNaN(o.powerstats.combat),this.heroStats.power+=this.checkIfNaN(o.powerstats.power),this.heroStats.intelligence+=this.checkIfNaN(o.powerstats.intelligence),this.heroStats.speed+=this.checkIfNaN(o.powerstats.speed),this.heroStats.strength+=this.checkIfNaN(o.powerstats.strength),this.heroStats.durability+=this.checkIfNaN(o.powerstats.durability),this.averageHeight+=parseInt(o.appearance.height[1]),this.averageWeight+=parseInt(o.appearance.weight[1])}),this.updateChart(e.length),this.setGreatestStrength(this.heroStats),this.averageHeight=Math.floor(this.averageHeight/e.length),this.averageWeight=Math.floor(this.averageWeight/e.length)}updateChart(e){this.heroStats.combat=this.heroStats.combat/e,this.heroStats.power=this.heroStats.power/e,this.heroStats.intelligence=this.heroStats.intelligence/e,this.heroStats.speed=this.heroStats.speed/e,this.heroStats.strength=this.heroStats.strength/e,this.heroStats.durability=this.heroStats.durability/e,this.yourFunction()}setChart(){this.heroStats={power:0,intelligence:0,speed:0,strength:0,durability:0,combat:0}}updateList(){this.chartLoading=!0,this.setChart(),this.heroArray=this.updateListService.listHeros,this.getHeros(this.heroArray),0==this.heroArray.length&&(this.heroArray=[])}checkIfNaN(e){return e=parseInt(e),isNaN(e)?0:e}setGreatestStrength(e){console.log(e);let o=0,i="";e.combat>o&&(o=e.combat,i="Combat"),e.durability>o&&(o=e.durability,i="Durability"),e.intelligence>o&&(o=e.intelligence,i="Intelligence"),e.power>o&&(o=e.power,i="Power"),e.speed>o&&(o=e.speed,i="Speed"),e.strength>o&&(o=e.strength,i="Strength"),this.greatestStat=i}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u),t.Y36(b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:3,vars:2,consts:[["class","empty-container",4,"ngIf"],["class","main-container",4,"ngIf"],[1,"empty-container"],["type","button",1,"btn","btn-danger",3,"routerLink"],["src","../../../../assets/img/deadpool-home-2.png","alt","",1,"deadpool"],[1,"main-container"],[1,"title"],[3,"listaSuper"],[1,"stats"],[1,"stats-title"],["class","chart-container",4,"ngIf"],[1,"average-stats"],[1,"chart-container"],[1,"chart",3,"stats"]],template:function(e,o){1&e&&(t._UZ(0,"app-navbar"),t.YNc(1,L,6,2,"div",0),t.YNc(2,j,18,6,"div",1)),2&e&&(t.xp6(1),t.Q6J("ngIf",0==o.heroArray.length),t.xp6(1),t.Q6J("ngIf",o.heroArray.length>0))},directives:[y,p.O5,m.rH,U,x],styles:[".empty-container[_ngcontent-%COMP%]{font-family:Comics;margin-top:50px;color:#edf2f4;display:grid;justify-content:center}.empty-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Comics;font-size:3em;margin:50px 0 75px}.empty-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px;margin:0 auto}.main-container[_ngcontent-%COMP%]{justify-content:center;text-align:center;border:5px solid #edf2f43a;border-radius:5px;color:#edf2f4;margin:5% 8%}.main-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:relative;top:-20px;width:300px;margin:0 auto;background:#2b2d42;font-size:5em;font-family:Comics}.chart-container[_ngcontent-%COMP%]{width:60%;margin:0 auto;padding-bottom:100px}.deadpool[_ngcontent-%COMP%]{position:absolute;width:700px;right:0px;bottom:0px}.stats[_ngcontent-%COMP%]{margin-top:100px;display:grid;grid-template-columns:1fr 1fr 1fr}.stats[_ngcontent-%COMP%]   .stats-title[_ngcontent-%COMP%]{grid-column:span 3;margin-top:75px;margin-bottom:100px}.stats[_ngcontent-%COMP%]   .stats-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Comics;font-size:3em}.stats[_ngcontent-%COMP%]   .stats-title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:3px solid #edf2f4;width:30%;border-radius:5px}.stats[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{grid-column:span 2}.stats[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Comics;text-align:left;font-size:2em}.stats[_ngcontent-%COMP%]   .average-stats[_ngcontent-%COMP%]{margin-right:0%;margin-top:100px;margin-bottom:200px;border-radius:15px}.stats[_ngcontent-%COMP%]   .average-stats[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .stats[_ngcontent-%COMP%]   .average-stats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Comics;font-size:2.5em;text-align:left;margin-bottom:100px}@media screen and (max-width: 1000px){.main-container[_ngcontent-%COMP%]{margin:10% 1% 1%}.chart-container[_ngcontent-%COMP%]{width:95vw;margin:0 auto;padding-bottom:100px}.stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}.stats[_ngcontent-%COMP%]   .stats-title[_ngcontent-%COMP%]{grid-column:span 1}.stats[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{grid-column:span 1}.stats[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.stats[_ngcontent-%COMP%]   .average-stats[_ngcontent-%COMP%]{margin:10px}.stats[_ngcontent-%COMP%]   .average-stats[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .stats[_ngcontent-%COMP%]   .average-stats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;margin-bottom:90px}}@media screen and (max-width: 800px){.empty-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-family:Comics;font-size:3em;margin:50px 20px 75px}.empty-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100vw;max-width:400px}}"]}),n})();var c=s(7537);function Y(n,r){if(1&n&&(t.TgZ(0,"div",2),t._UZ(1,"app-card",3),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("hero",e)}}let G=(()=>{class n{constructor(e){this.superService=e,this.lista=[0,0,0]}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-grid-card"]],inputs:{listaSuper:"listaSuper"},decls:2,vars:1,consts:[[1,"grid"],["style","justify-content: center;display: flex;",4,"ngFor","ngForOf"],[2,"justify-content","center","display","flex"],[3,"hero"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Y,2,1,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.listaSuper))},directives:[p.sg,M],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-gap:20px;gap:20px;justify-content:center;align-items:center;margin:20px}@media screen and (max-width: 1600px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr 1fr}}@media screen and (max-width: 1400px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}}@media screen and (max-width: 920px){.grid[_ngcontent-%COMP%]{margin-top:70px;grid-template-columns:1fr 1fr}}@media screen and (max-width: 700px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]}),n})();function E(n,r){1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",9),t.qZA())}function z(n,r){1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",10),t.qZA())}const X=[{path:"home",component:Q},{path:"search",component:(()=>{class n{constructor(e){this.superService=e,this.listaSuper=[],this.searching=!0,this.searchForm=new c.cw({name:new c.NI("")})}ngOnInit(){}searchByName(e){this.superService.getResult(e).subscribe(o=>{this.listaSuper=o.results,this.searching=!1},o=>{console.log(o)})}submit(){console.log(this.searchForm.value),this.searchByName(this.searchForm.value.name)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search"]],decls:12,vars:4,consts:[[1,"wrapper"],[1,"form-container"],[1,"form-inline",3,"formGroup","ngSubmit"],[1,"form-group"],["type","search","formControlName","name","placeholder","Search for a Hero",1,"form-control",2,"width","40vw"],["type","submit",1,""],["src","../../../../assets/img/search.png","alt","","width","32px"],[3,"listaSuper"],[4,"ngIf"],["src","../../../../assets/img/deadpool-search.png","alt","",1,"holder-image"],["src","../../../../assets/img/deadpool-search-stop2.png","alt","",1,"holder-image"]],template:function(e,o){1&e&&(t._UZ(0,"app-navbar"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(4,"div",3),t._UZ(5,"input",4),t.TgZ(6,"button",5),t._UZ(7,"img",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div"),t._UZ(9,"app-grid-card",7),t.qZA(),t.YNc(10,E,2,0,"div",8),t.YNc(11,z,2,0,"div",8),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.searchForm),t.xp6(6),t.Q6J("listaSuper",o.listaSuper),t.xp6(1),t.Q6J("ngIf",o.searching),t.xp6(1),t.Q6J("ngIf",!o.searching&&!o.listaSuper))},directives:[y,c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u,G,p.O5],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;min-height:700px;height:90%}.form-container[_ngcontent-%COMP%]{display:grid;margin:40px;justify-items:center}.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex!important}.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex!important}.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-right:50px;font-family:Comics;letter-spacing:2px}.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:-50px;background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.holder-image[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0}@media screen and (max-width: 1000px){.holder-image[_ngcontent-%COMP%]{width:100vw;max-width:400px}.form-control[_ngcontent-%COMP%]{min-width:300px!important}}"]}),n})()}];let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(X)],m.Bz]}),n})(),W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,R,c.u5,c.UX,v.vQ,h.IJ]]}),n})()}}]);