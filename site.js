/*! Datatlan — site.js
 *  Consolidated front-end behavior for the Datatlan marketing site.
 *  Source of truth: github.com/Datatlan/datatlan-site  (served via jsDelivr).
 *  Replaces three inline <script> blocks previously pasted into Webflow custom code.
 *  Load in Webflow with a single tag before </body>:
 *      <script src="https://cdn.jsdelivr.net/gh/Datatlan/datatlan-site@main/site.js" defer></script>
 *
 *  Sections:
 *    1. Fade-in on scroll + contact button feedback
 *    2. Mobile accordions (pain cards + toolkit) + hero isometric background
 *    3. Multi-step contact modal (v4)
 */


/* ====================================================================
   1. Fade-in on scroll + contact button feedback
   ==================================================================== */
const ltObs=new IntersectionObserver((e)=>{e.forEach((e,t)=>{e.isIntersecting&&(setTimeout(()=>e.target.classList.add('visible'),t*80),ltObs.unobserve(e.target))})},{threshold:.08,rootMargin:'0px 0px -30px 0px'});document.querySelectorAll('.lt-fade').forEach(e=>ltObs.observe(e));function ltSubmit(e){e.preventDefault();const b=document.getElementById('lt-submit-btn');b.textContent='✓ Mensaje enviado — te contactamos pronto';b.style.background='linear-gradient(135deg,#059669,#00a89e)';b.disabled=true;setTimeout(()=>{b.textContent='Enviar mensaje →';b.style.background='';b.disabled=false;e.target.reset()},4000)}


/* ====================================================================
   2. Mobile accordions + hero isometric background
   ==================================================================== */
(function(){var mq=window.matchMedia('(max-width:767px)');document.querySelectorAll('.lt-pain-item').forEach(function(card){card.addEventListener('click',function(){if(!mq.matches)return;var w=card.classList.contains('acc-open');document.querySelectorAll('.lt-pain-item.acc-open').forEach(function(c){c.classList.remove('acc-open')});if(!w)card.classList.add('acc-open');});});document.querySelectorAll('.lt-tk-cat-label').forEach(function(l){var p=l.parentNode;p.classList.add('tk-acc');l.addEventListener('click',function(){if(!mq.matches)return;var o=p.classList.contains('tk-open');document.querySelectorAll('.tk-open').forEach(function(x){x.classList.remove('tk-open')});if(!o)p.classList.add('tk-open');});});var bg=document.querySelector('.lt-hero-bg');if(!bg)return;function q(c,s,x){return '<svg class="hx-cube '+(x||'')+'" width="'+s+'" height="'+s+'" viewBox="0 0 40 40"><polygon points="20,6 34,13 20,20 6,13" fill="'+c+'" fill-opacity=".07" stroke="'+c+'" stroke-opacity=".14"/><polygon points="6,13 20,20 20,32 6,25" fill="'+c+'" fill-opacity=".05" stroke="'+c+'" stroke-opacity=".12"/><polygon points="20,20 34,13 34,25 20,32" fill="'+c+'" fill-opacity=".03" stroke="'+c+'" stroke-opacity=".12"/></svg>'}function t(n,w,h,f,st){return '<div class="hx-tier hx-t'+n+'"><svg width="'+w+'" height="'+h+'" viewBox="0 0 240 140"><polygon points="120,10 220,60 120,110 20,60" fill="'+f+'" fill-opacity=".05" stroke="'+st+'" stroke-opacity=".16"/><polygon points="20,60 120,110 120,134 20,84" fill="'+f+'" fill-opacity=".07" stroke="'+st+'" stroke-opacity=".14"/><polygon points="120,110 220,60 220,84 120,134" fill="'+f+'" fill-opacity=".03" stroke="'+st+'" stroke-opacity=".14"/></svg></div>'}var h=q('#2563eb',380,'hx-b1')+q('#06b6d4',320,'hx-b2');h+='<div class="hx-fx"><div class="hx-stack"><svg class="hx-flow" width="520" height="700"><line x1="248" y1="40" x2="248" y2="690"/><line class="c" x1="272" y1="20" x2="272" y2="690"/></svg><div class="hx-hub"><div class="hx-iso"><svg class="hx-ring" width="720" height="720" viewBox="0 0 720 720" fill="none"><circle cx="360" cy="360" r="330" stroke="#3a5ff0" stroke-opacity=".12" stroke-dasharray="4 13"/><circle cx="360" cy="360" r="235" stroke="#06b6d4" stroke-opacity=".1" stroke-dasharray="3 15"/></svg><div class="hx-op hx-op1"><div class="hx-sat">'+q('#3a5ff0',22)+'</div></div><div class="hx-op hx-op2"><div class="hx-sat">'+q('#06b6d4',18)+'</div></div></div></div>'+t(1,156,91,'#3a5ff0','#3a5ff0')+t(2,270,158,'#06b6d4','#06b6d4')+t(3,395,230,'#3a5ff0','#3a5ff0')+t(4,520,303,'#06b6d4','#00a89e')+'</div>'+q('#3a5ff0',90,'hx-c1')+q('#06b6d4',64,'hx-c2')+q('#00a89e',52,'hx-c3')+'</div>';bg.innerHTML=h;var s=bg.querySelector('.hx-stack');var e=s.cloneNode(true);e.classList.add('hx-echo');s.parentNode.appendChild(e);})();


/* ====================================================================
   3. Multi-step contact modal (v4)
   ==================================================================== */
document.addEventListener('DOMContentLoaded',function(){
var A=String.fromCharCode(38);
var SRV=['Imagen de Marca','Operaci\u00f3n Digital','Marketing '+A+' BI'];
var TLS=['Google Workspace','Microsoft 365','Webflow','ClickUp','Airtable','Zapier','FileMaker','Google Ads','Meta Ads','GA4','Mailchimp','Otra'];
var IS='width:100%;padding:12px 14px;border:1.5px solid #e2e8f0;border-radius:10px;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box';
function chips(a){var s='';a.forEach(function(x){s+='<div class="dtm-chip">'+x+'</div>'});return s}
function nav(back,fwd,cls){return '<div class="dtm-nav">'+(back?'<div class="dtm-btn dtm-back">Atr\u00e1s</div>':'<span></span>')+'<div class="dtm-btn '+cls+'">'+fwd+'</div></div>'}
function fld(n,t){return '<div class="dtm-f" data-n="'+n+'" data-t="'+t+'"></div>'}
// Inner card markup. withClose=true -> overlay (adds X, "Cerrar" on success). false -> inline (no X, "Enviar otro").
function cardHTML(withClose){return '<div class="dtm-card">'
+(withClose?'<div class="dtm-close">\u2715</div>':'')
+'<div class="dtm-progress"><div class="dtm-dot"></div><div class="dtm-dot"></div><div class="dtm-dot"></div><div class="dtm-dot"></div></div>'
+'<div class="dtm-step"><div class="dtm-h">\u00bfQu\u00e9 servicios te interesan?</div><div class="dtm-sub">Selecciona uno o varios</div><div class="dtm-chips dtm-servicios">'+chips(SRV)+'</div>'+nav(false,'Siguiente','dtm-next')+'</div>'
+'<div class="dtm-step"><div class="dtm-h">\u00bfQu\u00e9 tools ya manejan?</div><div class="dtm-sub">Nos ayuda a conocer su punto de partida</div><div class="dtm-chips dtm-tools">'+chips(TLS)+'</div>'+nav(true,'Siguiente','dtm-next')+'</div>'
+'<div class="dtm-step"><div class="dtm-h">\u00bfC\u00f3mo te contactamos?</div><div class="dtm-sub">Datos b\u00e1sicos, sin spam</div>'+fld('Nombre','text')+fld('Email','email')+fld('Empresa','text')+nav(true,'Siguiente','dtm-next')+'</div>'
+'<div class="dtm-step"><div class="dtm-h">\u00bfAlgo m\u00e1s que debamos saber?</div><div class="dtm-sub">Opcional \u2014 contexto, tiempos, presupuesto</div>'+fld('Mensaje','textarea')+nav(true,'Enviar','dtm-send')+'</div>'
+'<div class="dtm-step"><div class="dtm-check">\u2713</div><div class="dtm-h">\u00a1Mensaje enviado!</div><div class="dtm-sub">Te contactamos en menos de 24 horas h\u00e1biles.</div>'+nav(false,withClose?'Cerrar':'Enviar otro',withClose?'dtm-closebtn':'dtm-again')+'</div>'
+'</div>';}
// Wire one flow instance rooted at a .dtm-card. onClose (overlay only) hides the instance. Returns {show}.
function wireFlow(card,onClose){
card.querySelectorAll('.dtm-f').forEach(function(f){var t=f.getAttribute('data-t'),n=f.getAttribute('data-n');var el=document.createElement(t==='textarea'?'textarea':'input');if(t==='textarea'){el.rows=4;el.style.resize='vertical'}else{el.type=t}el.placeholder=n;el.style.cssText=IS;f.appendChild(el)});
var steps=card.querySelectorAll('.dtm-step'),dots=card.querySelectorAll('.dtm-dot'),cur=0;
function show(i){cur=i;steps.forEach(function(s,j){s.classList.toggle('on',j===i)});dots.forEach(function(d,j){d.classList.toggle('on',j<=i?i<4:false)})}
show(0);
function vals(sel){var r=[];card.querySelectorAll(sel+' .dtm-chip.sel').forEach(function(c){r.push(c.textContent.trim())});return r.join(', ')}
function inp(n){var f=card.querySelector('.dtm-f[data-n="'+n+'"]');return f?f.querySelector('input,textarea'):null}
card.querySelectorAll('.dtm-chip').forEach(function(c){c.addEventListener('click',function(){c.classList.toggle('sel')})});
card.querySelectorAll('.dtm-next').forEach(function(b){b.addEventListener('click',function(){
if(cur===0){if(!vals('.dtm-servicios'))return}
if(cur===2){var ok=true;['Nombre','Email'].forEach(function(n){var i=inp(n);var bad=!i.value.trim();if(n==='Email'){if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value))bad=true}i.style.borderColor=bad?'#ef4444':'#e2e8f0';if(bad)ok=false});if(!ok)return}
show(cur+1)})});
card.querySelectorAll('.dtm-back').forEach(function(b){b.addEventListener('click',function(){show(cur-1)})});
var again=card.querySelector('.dtm-again');if(again){again.addEventListener('click',function(){card.querySelectorAll('.dtm-chip.sel').forEach(function(c){c.classList.remove('sel')});['Nombre','Email','Empresa','Mensaje'].forEach(function(n){var i=inp(n);if(i){i.value='';i.style.borderColor='#e2e8f0'}});show(0)})}
if(onClose){var cb=card.querySelector('.dtm-closebtn');if(cb)cb.addEventListener('click',onClose);var cx=card.querySelector('.dtm-close');if(cx)cx.addEventListener('click',onClose)}
card.querySelector('.dtm-send').addEventListener('click',function(){
var btn=this;btn.style.opacity='.6';btn.style.pointerEvents='none';
function fail(){btn.style.opacity='';btn.style.pointerEvents='';btn.textContent='Reintentar'}
var form=document.querySelector('#lt-contacto form');
if(!form){fail();return}
var srv=vals('.dtm-servicios'),tls=vals('.dtm-tools'),mi=inp('Mensaje'),msg=mi?mi.value.trim():'';
var F=form.querySelectorAll('input:not([type=hidden]):not([type=submit]),select,textarea');
var texts=[];F.forEach(function(el){
if(el.tagName==='SELECT'){var hit=1;for(var k=0;k<el.options.length;k++){var ot=el.options[k].text;if(srv.indexOf(ot)>-1){hit=k;break}if(ot.indexOf('Marketing')>-1?srv.indexOf('Marketing')>-1:false){hit=k;break}}if(el.options.length>1){el.selectedIndex=hit}}
else if(el.type==='email'){el.value=inp('Email').value}
else{texts.push(el)}});
if(texts.length>0)texts[0].value=inp('Nombre').value;
if(texts.length>1)texts[1].value=inp('Empresa').value;
if(texts.length>2)texts[texts.length-1].value=msg?msg:('Servicios: '+srv+(tls?' | Tools actuales: '+tls:''));
function hid(name,val){var h=form.querySelector('input[type=hidden][name="'+name+'"]');if(!h){h=document.createElement('input');h.type='hidden';h.name=name;form.appendChild(h)}h.value=val}
hid('Nombre',(inp('Nombre')||{}).value||'');hid('Correo',(inp('Email')||{}).value||'');hid('Empresa',(inp('Empresa')||{}).value||'');hid('Mensaje',msg);hid('Servicios',srv);hid('Tools',tls);
form.setAttribute('novalidate','novalidate');
var wrap=form.closest('.w-form'),done=wrap?wrap.querySelector('.w-form-done'):null,tries=0;
if(done)done.style.display='none';
var sb=form.querySelector('[type="submit"]');if(sb)sb.click();
var iv=setInterval(function(){tries++;
if(done?getComputedStyle(done).display!=='none':false){clearInterval(iv);show(4);btn.style.opacity='';btn.style.pointerEvents=''}
else if(tries>20){clearInterval(iv);fail()}
},300);
});
return {show:show};
}
// Instance 1 \u2014 overlay popover / bottom-sheet, opened by every contact CTA.
var ov=document.createElement('div');ov.className='dtm-overlay';ov.id='dtm';ov.innerHTML=cardHTML(true);document.body.appendChild(ov);
function closeOv(){ov.style.display='none';document.body.style.overflow=''}
var ovFlow=wireFlow(ov.querySelector('.dtm-card'),closeOv);
function openOv(){ov.style.display='flex';document.body.style.overflow='hidden';ovFlow.show(0)}
document.querySelectorAll('a[href="#lt-contacto"]:not([data-cal-link])').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();openOv()})});
ov.addEventListener('click',function(e){if(e.target===ov)closeOv()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(ov.style.display==='flex')closeOv()}});
// Instance 2 \u2014 inline staged form in the contact section; the real Webflow form stays as the hidden data pipe.
// Webflow's Turnstile-enabled form init can leave the form absent at DOMContentLoaded, so poll until it's present, then mount once.
function mountInline(){
var pipe=document.querySelector('#lt-contacto form');
var lwrap=pipe?pipe.closest('.lt-form'):null;
if(!lwrap)return false;
if(lwrap.querySelector('.dtm-inline'))return true;
var host=document.createElement('div');host.className='dtm-inline';host.innerHTML=cardHTML(false);
pipe.style.cssText='position:absolute;left:-9999px;top:0;width:1px;height:1px;overflow:hidden';
lwrap.insertBefore(host,pipe);
wireFlow(host.querySelector('.dtm-card'),null);
return true;
}
if(!mountInline()){var mt=0,mi=setInterval(function(){mt++;if(mountInline()||mt>40)clearInterval(mi)},150);}
});
