/* Datatlan — propuesta.js | Widget del configurador de propuesta.
   Auto-monta en <div id="dt-propuesta"></div>. Servido por jsDelivr.
   Generado desde datatlan-business/propuesta-showcase.html (build-widget.js). No editar a mano. */
(function(){
  var MARKUP = "<div class=\"dt-wrap\">\n  <div class=\"dt-app\">\n    <div class=\"dt-top\">\n      <div class=\"dt-brand\">\n        <svg class=\"dt-logo\" viewBox=\"0 0 120 120\" fill=\"none\" aria-hidden=\"true\">\n          <!-- central spine -->\n          <rect x=\"54\" y=\"30\" width=\"12\" height=\"82\" rx=\"4\" fill=\"#1f86cf\"/>\n          <!-- row 5 (base, deep blue) -->\n          <rect x=\"12\" y=\"93\" width=\"40\" height=\"19\" rx=\"4\" fill=\"#1450ad\"/>\n          <rect x=\"68\" y=\"93\" width=\"40\" height=\"19\" rx=\"4\" fill=\"#1450ad\"/>\n          <!-- row 4 -->\n          <rect x=\"18\" y=\"72\" width=\"34\" height=\"17\" rx=\"4\" fill=\"#1663bd\"/>\n          <rect x=\"68\" y=\"72\" width=\"34\" height=\"17\" rx=\"4\" fill=\"#1663bd\"/>\n          <!-- row 3 -->\n          <rect x=\"24\" y=\"51\" width=\"28\" height=\"17\" rx=\"4\" fill=\"#1c7dc6\"/>\n          <rect x=\"68\" y=\"51\" width=\"28\" height=\"17\" rx=\"4\" fill=\"#1c7dc6\"/>\n          <!-- row 2 -->\n          <rect x=\"30\" y=\"30\" width=\"22\" height=\"17\" rx=\"4\" fill=\"#1f93cf\"/>\n          <rect x=\"68\" y=\"30\" width=\"22\" height=\"17\" rx=\"4\" fill=\"#1f93cf\"/>\n          <!-- row 1 (browser header, cyan) -->\n          <rect x=\"34\" y=\"8\" width=\"52\" height=\"18\" rx=\"5\" fill=\"#12b0d6\"/>\n          <circle cx=\"43\" cy=\"17\" r=\"1.9\" fill=\"#fff\"/>\n          <circle cx=\"49.5\" cy=\"17\" r=\"1.9\" fill=\"#fff\"/>\n          <circle cx=\"56\" cy=\"17\" r=\"1.9\" fill=\"#fff\"/>\n          <rect x=\"64\" y=\"14.4\" width=\"16\" height=\"5.2\" rx=\"2.6\" fill=\"#fff\"/>\n        </svg>\n        <span>Datatlan</span>\n      </div>\n      <div class=\"dt-steps\" aria-hidden=\"true\">\n        <span id=\"s0\" class=\"on\"></span><span id=\"s1\"></span><span id=\"s2\"></span>\n      </div>\n    </div>\n\n    <!-- SCREEN 0 — intro -->\n    <section class=\"dt-screen active\" id=\"scr-0\">\n      <div class=\"dt-card\">\n        <p class=\"dt-eyebrow\">Propuesta personalizada</p>\n        <h1 class=\"dt-h\">Armemos la digitalización de tu negocio</h1>\n        <p class=\"dt-sub\">Marca los frentes que quieres poner en marcha. En un par de minutos armas tu paquete, y Datatlan te devuelve un diagnóstico con una cotización a la medida.</p>\n\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"bizname\">¿Cómo se llama tu negocio? <span class=\"req\">*</span></label>\n          <input class=\"dt-input\" id=\"bizname\" type=\"text\" placeholder=\"Ej. Estudio Luna, Nutrióloga Ana, Guardería Girasol\" autocomplete=\"off\">\n        </div>\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"biz-search\">¿A qué se dedica? <span class=\"req\">*</span></label>\n          <div class=\"dt-combo\" id=\"combo\">\n            <input class=\"dt-input\" id=\"biz-search\" type=\"text\" autocomplete=\"off\" placeholder=\"Escribe tu giro… ej. yoga, nutrición, cafetería\" role=\"combobox\" aria-expanded=\"false\" aria-controls=\"biz-list\" aria-autocomplete=\"list\">\n            <div class=\"dt-clist\" id=\"biz-list\" role=\"listbox\" aria-label=\"Giros sugeridos\"></div>\n          </div>\n          <p class=\"dt-hint\" id=\"biz-hint\"></p>\n        </div>\n\n        <p class=\"dt-err\" id=\"intro-err\">Completa el nombre de tu negocio y tu giro para continuar.</p>\n\n        <div class=\"dt-foot\" style=\"justify-content:flex-end\">\n          <button class=\"dt-btn\" id=\"go-1\" type=\"button\">Comenzar\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg>\n          </button>\n        </div>\n      </div>\n    </section>\n\n    <!-- SCREEN 1 — selección -->\n    <section class=\"dt-screen\" id=\"scr-1\">\n      <div class=\"dt-card\">\n        <p class=\"dt-eyebrow\">Paso 1 de 3 · Elige tus frentes</p>\n        <h1 class=\"dt-h\">¿Qué quieres digitalizar?</h1>\n        <p class=\"dt-sub\">Toca los frentes que te interesan. En cada uno dinos si lo <b style=\"color:var(--azul-ink)\">creamos desde cero</b> o <b style=\"color:var(--teal-ink)\">mejoramos</b> lo que ya tienes.</p>\n\n        <div class=\"dt-grid\" id=\"grid\"></div>\n\n        <div class=\"dt-legend\" aria-hidden=\"true\">\n          <span><i class=\"crear\"></i> Crear desde cero</span>\n          <span><i class=\"mejorar\"></i> Mejorar lo existente</span>\n        </div>\n\n        <div class=\"dt-foot\">\n          <div class=\"dt-count\" id=\"count\">Aún no eliges frentes</div>\n          <div class=\"dt-actions\">\n            <button class=\"dt-btn ghost\" id=\"back-0\" type=\"button\">Atrás</button>\n            <button class=\"dt-btn\" id=\"go-2\" type=\"button\" disabled>Ver mi paquete\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg>\n            </button>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- SCREEN 2 — paquete -->\n    <section class=\"dt-screen\" id=\"scr-2\">\n      <div class=\"dt-card\">\n        <p class=\"dt-eyebrow\">Paso 2 de 3 · Tu paquete</p>\n        <h1 class=\"dt-h\" id=\"pkg-title\">Tu paquete de arranque</h1>\n        <p class=\"dt-sub\">Esto es lo que Datatlan pondría en marcha. Nosotros hacemos el diagnóstico y te enviamos la cotización personalizada — sin precios ocultos.</p>\n\n        <div class=\"dt-pkg\">\n          <div id=\"pkg-list\"></div>\n\n          <aside class=\"dt-aside\">\n            <div class=\"dt-stackbox\">\n              <svg class=\"dt-stack\" id=\"stack\" viewBox=\"0 0 240 180\" aria-hidden=\"true\"></svg>\n              <div class=\"dt-metrics\">\n                <div class=\"dt-metric\"><b id=\"m-total\">0</b><span>frentes</span></div>\n                <div class=\"dt-metric\"><b id=\"m-crear\" style=\"color:var(--azul-ink)\">0</b><span>crear</span></div>\n                <div class=\"dt-metric\"><b id=\"m-mejorar\" style=\"color:var(--teal-ink)\">0</b><span>mejorar</span></div>\n              </div>\n            </div>\n            <div class=\"dt-note\">\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 8v4l3 2\"/><circle cx=\"12\" cy=\"12\" r=\"9\"/></svg>\n              <div><b>Respuesta en menos de 24 h hábiles.</b> Revisamos tu selección, hacemos el diagnóstico y te mandamos una cotización clara y a la medida.</div>\n            </div>\n          </aside>\n        </div>\n\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"cname\">Tu nombre <span class=\"req\">*</span></label>\n          <input class=\"dt-input\" id=\"cname\" type=\"text\" placeholder=\"¿Con quién tenemos el gusto?\" autocomplete=\"name\">\n        </div>\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"email\">Correo <span class=\"req\">*</span></label>\n          <input class=\"dt-input\" id=\"email\" type=\"email\" placeholder=\"tu@correo.com\" autocomplete=\"email\">\n        </div>\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"phone\">Teléfono <span class=\"opt\">— opcional</span></label>\n          <div class=\"dt-phone\">\n            <input class=\"dt-input dt-lada\" id=\"lada\" type=\"tel\" inputmode=\"tel\" value=\"+52\" placeholder=\"+52\" aria-label=\"Lada / código de país\">\n            <input class=\"dt-input dt-tel\" id=\"phone\" type=\"tel\" inputmode=\"tel\" placeholder=\"55 1234 5678\" autocomplete=\"tel\">\n          </div>\n        </div>\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"site\">Sitio web o redes <span class=\"opt\">— opcional</span></label>\n          <input class=\"dt-input\" id=\"site\" type=\"text\" inputmode=\"url\" placeholder=\"tusitio.com o @tu_negocio\" autocomplete=\"url\">\n        </div>\n        <p class=\"dt-err\" id=\"pkg-err\">Completa los campos obligatorios.</p>\n\n        <div class=\"dt-foot\">\n          <button class=\"dt-btn ghost\" id=\"back-1\" type=\"button\">Editar selección</button>\n          <button class=\"dt-btn\" id=\"go-3\" type=\"button\">Solicitar mi cotización\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg>\n          </button>\n        </div>\n      </div>\n    </section>\n\n    <!-- SCREEN 3 — confirmación -->\n    <section class=\"dt-screen\" id=\"scr-3\">\n      <div class=\"dt-card dt-confirm\">\n        <div class=\"dt-seal\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg></div>\n        <p class=\"dt-eyebrow\" style=\"color:var(--teal-ink)\">Solicitud recibida</p>\n        <h1 class=\"dt-h\" id=\"done-title\">¡Listo! Estamos preparando tu diagnóstico</h1>\n        <p class=\"dt-sub\" style=\"margin-left:auto;margin-right:auto\" id=\"done-sub\">Datatlan revisará tus frentes y te enviará una cotización personalizada muy pronto.</p>\n        <div class=\"dt-recap\" id=\"recap\"></div>\n        <div class=\"dt-foot\" style=\"justify-content:center; margin-top:26px\">\n          <button class=\"dt-btn ghost\" id=\"restart\" type=\"button\">Empezar de nuevo</button>\n        </div>\n      </div>\n    </section>\n\n    <p class=\"dt-footer\"><b>Datatlan</b> — Ecosistema Digital para tu Empresa · <span style=\"font-family:var(--mono);font-size:11px\">demo de dirección creativa</span></p>\n  </div>\n</div>";
  function app(){
  var I = {
    sitio:'<path d="M3 5h18v14H3z"/><path d="M3 9h18"/><circle cx="6" cy="7" r=".6" fill="currentColor"/>',
    marca:'<path d="M12 3l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 20l-5 3 1.2-5.6L4 13.6l5.6-.6z"/>',
    reservas:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="M8 14l2.5 2.5L16 12"/>',
    pagos:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/>',
    catalogo:'<path d="M4 7l1-3h14l1 3"/><path d="M4 7h16v13H4z"/><path d="M9 11a3 3 0 0 0 6 0"/>',
    clientes:'<path d="M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="8" r="3.2"/><path d="M17 11l2 2 3-3.5"/>',
    operacion:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M9 5V3.5h6V5"/><path d="M8 11l1.4 1.4L12 10"/><path d="M15 11.5h1.6"/><path d="M8 16l1.4 1.4L12 15"/><path d="M15 16.5h1.6"/>',
    medicion:'<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>'
  };
  function svg(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}

  var ASPECTS = [
    {id:'sitio', name:'Sitio web', desc:'Tu casa digital, editable por ti.', group:'nucleo', icon:I.sitio},
    {id:'marca', name:'Identidad de marca', desc:'Logo, colores, cómo te ven.', group:'nucleo', icon:I.marca},
    {id:'reservas', name:'Reservas y citas', desc:'Que te agenden sin ir y venir por WhatsApp.', group:'modulo', icon:I.reservas},
    {id:'pagos', name:'Cobros y pagos', desc:'Cobra en línea, sin complicarte.', group:'modulo', icon:I.pagos},
    {id:'catalogo', name:'Catálogo / tienda', desc:'Muestra tus servicios o vende en línea.', group:'modulo', icon:I.catalogo},
    {id:'clientes', name:'Clientes y correo', desc:'Guarda contactos y da seguimiento.', group:'modulo', icon:I.clientes},
    {id:'operacion', name:'Operación interna', desc:'Ordena tareas, inventario y procesos en un solo lugar.', group:'modulo', icon:I.operacion},
    {id:'medicion', name:'Medición', desc:'Sabe qué está funcionando y qué no.', group:'modulo', icon:I.medicion}
  ];
  var CATS = [
    {label:'Bienestar y movimiento', kw:['yoga','pilates','gym','gimnasio','crossfit','danza','baile','fitness','entrenador','spinning','zumba','meditacion']},
    {label:'Salud y terapia', kw:['nutricion','nutriologo','psicologia','psicologo','terapia','terapeuta','fisioterapia','masaje','consultorio','dental','dentista','medico','doctor','veterinaria']},
    {label:'Belleza y cuidado personal', kw:['estetica','spa','barberia','salon','peluqueria','uñas','unas','cejas','pestañas','maquillaje','depilacion','tatuajes']},
    {label:'Educación y cuidado infantil', kw:['guarderia','kinder','preescolar','clases','tutoria','escuela','taller','cursos','idiomas','musica','regularizacion','estancia infantil']},
    {label:'Alimentos y bebidas', kw:['cafe','cafeteria','restaurante','reposteria','pasteleria','panaderia','catering','comida','bar','postres','taqueria','food truck']},
    {label:'Comercio y productos', kw:['tienda','boutique','artesanias','ecommerce','venta','productos','ropa','accesorios','joyeria','floreria','abarrotes']},
    {label:'Servicios profesionales', kw:['consultoria','coaching','despacho','contabilidad','contador','legal','abogado','marketing','diseño','diseno','arquitectura','agencia']},
    {label:'Eventos y creativos', kw:['fotografia','fotografo','video','eventos','decoracion','dj','bodas','wedding','organizacion','audiovisual']}
  ];

  var state = { name:'', type:'', email:'', cname:'', phone:'', lada:'+52', site:'', sel:{} }; // sel[id] = 'crear' | 'mejorar'

  // Scope queries to the widget's own container so IDs (p.ej. #email) no choquen con el form oculto de Webflow.
  var ROOT=document.querySelector('.dt-wrap')||document;
  var $=function(s,c){return (c||ROOT).querySelector(s)}, $$=function(s,c){return Array.prototype.slice.call((c||ROOT).querySelectorAll(s))};

  // intro combobox — búsqueda de giro con texto libre
  (function initCombo(){
    var inp=$('#biz-search'), list=$('#biz-list'), hint=$('#biz-hint'), combo=$('#combo');
    var active=-1, visible=[];
    function norm(s){s=(s||'').toLowerCase().normalize('NFD');var r='';for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);if(c<768||c>879)r+=s[i];}return r;}
    function open(v){ list.classList.toggle('open', v); inp.setAttribute('aria-expanded', v?'true':'false'); if(!v) active=-1; }
    function close(){ open(false); }
    function choose(val){ inp.value=val; state.type=val; hint.textContent='Giro: '+val; close(); }
    function render(){
      var raw=inp.value.trim(), q=norm(raw);
      visible = CATS.filter(function(c){
        if(!q) return true;
        return norm(c.label).indexOf(q)>-1 || c.kw.some(function(k){return norm(k).indexOf(q)>-1;});
      });
      list.innerHTML='';
      visible.forEach(function(c){
        var o=document.createElement('div'); o.className='dt-opt'; o.setAttribute('role','option');
        o.innerHTML='<b>'+c.label+'</b><span>'+c.kw.slice(0,4).join(' · ')+'…</span>';
        o.addEventListener('mousedown', function(e){ e.preventDefault(); choose(c.label); });
        list.appendChild(o);
      });
      var exact = CATS.some(function(c){return norm(c.label)===q;});
      if(raw && !exact){
        var n=document.createElement('div'); n.className='dt-optnew'; n.setAttribute('role','option');
        n.innerHTML='Usar mi giro: <b>“'+raw+'”</b>';
        n.addEventListener('mousedown', function(e){ e.preventDefault(); choose(raw); });
        list.appendChild(n);
      }
      active=-1;
      open(list.children.length>0);
    }
    function paint(){ var opts=list.children; for(var i=0;i<opts.length;i++){ opts[i].classList.toggle('active', i===active); if(i===active) opts[i].scrollIntoView({block:'nearest'}); } }
    inp.addEventListener('focus', render);
    inp.addEventListener('input', function(){ state.type=inp.value.trim(); hint.textContent=''; render(); });
    inp.addEventListener('keydown', function(e){
      var n=list.children.length;
      if(e.key==='ArrowDown'){ e.preventDefault(); if(!list.classList.contains('open')){render();} active=Math.min(active+1,n-1); paint(); }
      else if(e.key==='ArrowUp'){ e.preventDefault(); active=Math.max(active-1,0); paint(); }
      else if(e.key==='Enter'){ if(list.classList.contains('open') && active>-1){ e.preventDefault(); active<visible.length ? choose(visible[active].label) : choose(inp.value.trim()); } }
      else if(e.key==='Escape'){ close(); }
    });
    document.addEventListener('click', function(e){ if(!combo.contains(e.target)) close(); });
    window.__comboReset=function(){ inp.value=''; hint.textContent=''; close(); };
  })();

  // aspect grid
  var grid=$('#grid');
  ASPECTS.forEach(function(a){
    var el=document.createElement('div'); el.className='dt-aspect'; el.id='asp-'+a.id; el.tabIndex=0; el.setAttribute('role','button'); el.setAttribute('aria-pressed','false');
    el.innerHTML =
      '<span class="dt-tag">'+(a.group==='nucleo'?'Núcleo':'Módulo')+'</span>'+
      '<span class="dt-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>'+
      '<div class="dt-ahead"><div class="dt-ico">'+svg(a.icon)+'</div>'+
      '<div><div class="dt-aname">'+a.name+'</div><div class="dt-adesc">'+a.desc+'</div></div></div>'+
      '<div class="dt-seg" role="group" aria-label="Crear o mejorar '+a.name+'">'+
        '<button type="button" class="dt-segbtn c" data-m="crear" aria-pressed="true"><span class="dot"></span>Crear</button>'+
        '<button type="button" class="dt-segbtn m" data-m="mejorar" aria-pressed="false"><span class="dot"></span>Mejorar</button>'+
      '</div>';
    function toggle(){
      if(state.sel[a.id]){ delete state.sel[a.id]; el.classList.remove('sel','mejorar'); el.setAttribute('aria-pressed','false'); }
      else { state.sel[a.id]='crear'; el.classList.add('sel'); el.setAttribute('aria-pressed','true'); }
      refresh();
    }
    el.addEventListener('click', function(e){ if(e.target.closest('.dt-seg')) return; toggle(); });
    el.addEventListener('keydown', function(e){ if(e.key===' '||e.key==='Enter'){ e.preventDefault(); toggle(); } });
    $$('.dt-segbtn', el).forEach(function(sb){
      sb.addEventListener('click', function(e){ e.stopPropagation();
        var m=sb.getAttribute('data-m'); state.sel[a.id]=m;
        $$('.dt-segbtn', el).forEach(function(x){x.setAttribute('aria-pressed', x===sb?'true':'false')});
        el.classList.toggle('mejorar', m==='mejorar'); refresh();
      });
    });
    grid.appendChild(el);
  });

  // contacto: lada manual (default +52) + helpers de validación
  var ladaSel=$('#lada');
  var EMAIL_RE=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  function mark(el, ok){ el.classList.toggle('err', !ok); }
  function clr(id, errId){ $('#'+id).addEventListener('input', function(){ this.classList.remove('err'); var e=$('#'+errId); if(e) e.style.display='none'; }); }
  ['bizname','biz-search'].forEach(function(id){ clr(id,'intro-err'); });
  ['cname','email'].forEach(function(id){ clr(id,'pkg-err'); });

  function counts(){
    var ids=Object.keys(state.sel), c=0,m=0;
    ids.forEach(function(id){ state.sel[id]==='mejorar'?m++:c++; });
    return {total:ids.length, crear:c, mejorar:m, ids:ids};
  }
  function refresh(){
    var k=counts();
    var cnt=$('#count');
    cnt.innerHTML = k.total? ('<b>'+k.total+'</b> '+(k.total===1?'frente elegido':'frentes elegidos')+' · '+k.crear+' por crear · '+k.mejorar+' por mejorar') : 'Aún no eliges frentes';
    $('#go-2').disabled = k.total===0;
  }

  // stack drawing (isometric tiers grow with count)
  function drawStack(){
    var k=counts(), n=Math.min(k.total,6), s=$('#stack');
    var cx=120, baseY=122, tierH=17, gap=3, topW=150;  // baseY keeps the widest base inside the 180-tall viewBox (base bottom ≈ baseY+48.5)
    var html=''; var order=k.ids.slice(0,6);
    for(var i=0;i<n;i++){
      var t=i, scale=1-(t*0.13), w=topW*scale, h=w*0.42;
      var y=baseY - i*(tierH+gap);
      var mode = state.sel[order[order.length-1-i]] || 'crear';
      var top = mode==='mejorar' ? 'var(--teal)' : 'var(--azul)';
      var left = mode==='mejorar' ? 'var(--teal-ink)' : 'var(--azul-ink)';
      var right= 'var(--cian)';
      var x=cx;
      html += '<g opacity="0"><animate attributeName="opacity" to="1" dur="0.4s" begin="'+(i*0.06)+'s" fill="freeze"/>'+
        '<polygon points="'+x+','+(y-h/2)+' '+(x+w/2)+','+y+' '+x+','+(y+h/2)+' '+(x-w/2)+','+y+'" fill="'+top+'"/>'+
        '<polygon points="'+(x-w/2)+','+y+' '+x+','+(y+h/2)+' '+x+','+(y+h/2+tierH)+' '+(x-w/2)+','+(y+tierH)+'" fill="'+left+'"/>'+
        '<polygon points="'+(x+w/2)+','+y+' '+x+','+(y+h/2)+' '+x+','+(y+h/2+tierH)+' '+(x+w/2)+','+(y+tierH)+'" fill="'+right+'"/></g>';
    }
    if(n===0){ html='<text x="120" y="95" text-anchor="middle" fill="var(--slate)" font-family="var(--mono)" font-size="11">tu ecosistema aparecerá aquí</text>'; }
    s.innerHTML=html;
    $('#m-total').textContent=k.total; $('#m-crear').textContent=k.crear; $('#m-mejorar').textContent=k.mejorar;
  }

  function buildPackage(){
    var list=$('#pkg-list'); list.innerHTML='';
    var title=$('#pkg-title'); title.textContent = state.name? ('Tu paquete de arranque, '+state.name) : 'Tu paquete de arranque';
    ['nucleo','modulo'].forEach(function(g){
      var items=ASPECTS.filter(function(a){return state.sel[a.id] && a.group===g;});
      if(!items.length) return;
      var grp=document.createElement('div'); grp.className='dt-group';
      grp.innerHTML='<p class="dt-gtitle">'+(g==='nucleo'?'Núcleo':'Módulos')+'</p>';
      items.forEach(function(a,idx){
        var mode=state.sel[a.id];
        var row=document.createElement('div'); row.className='dt-tier'; row.style.animationDelay=(idx*0.05)+'s';
        row.innerHTML='<div class="dt-ico" '+(mode==='mejorar'?'style="background:linear-gradient(140deg,var(--teal-wash),color-mix(in srgb,var(--teal) 26%, var(--teal-wash)));color:var(--teal-ink)"':'')+'>'+svg(a.icon)+'</div>'+
          '<div class="dt-tname">'+a.name+'</div>'+
          '<span class="dt-mode '+mode+'">'+(mode==='mejorar'?'Mejorar':'Crear')+'</span>';
        grp.appendChild(row);
      });
      list.appendChild(grp);
    });
    drawStack();
  }

  function buildRecap(){
    var r=$('#recap'); r.innerHTML='';
    ASPECTS.filter(function(a){return state.sel[a.id]}).forEach(function(a){
      var mode=state.sel[a.id];
      var c=document.createElement('span'); c.className='dt-rchip';
      c.innerHTML='<span class="dot '+mode+'"></span>'+a.name;
      r.appendChild(c);
    });
    var k=counts();
    var gn=(state.cname||'').split(' ')[0];
    $('#done-title').textContent = gn? ('¡Listo, '+gn+'!') : '¡Listo! Estamos preparando tu diagnóstico';
    var dest = state.email? (' a '+state.email) : '';
    $('#done-sub').textContent = 'Datatlan revisará tus '+k.total+' '+(k.total===1?'frente':'frentes')+' y te enviará una cotización personalizada'+dest+' en menos de 24 h hábiles.';
  }

  // resumen de frentes elegidos, p.ej. "Sitio web (crear), Reservas y citas (mejorar)"
  function frentesResumen(){
    return ASPECTS.filter(function(a){return state.sel[a.id];})
      .map(function(a){ return a.name+' ('+(state.sel[a.id]==='mejorar'?'mejorar':'crear')+')'; }).join(', ');
  }
  // envía al formulario nativo de Webflow SI existe en la página; si no (showcase/standalone), continúa sin más
  function submitLead(btn, cb){
    var form = document.querySelector('.w-form form') || document.querySelector('#dt-propuesta form') || document.querySelector('form');
    if(!form){ cb(true); return; }            // sin backend (showcase) -> avanza directo
    if(btn){ btn.style.pointerEvents='none'; btn.style.opacity='.65'; }
    var msg = 'Giro: '+state.type+' | Frentes: '+frentesResumen()+(state.phone?(' | Tel: '+state.lada+' '+state.phone):'')+(state.site?(' | Web/Redes: '+state.site):'');
    function hid(name,val){ var h=form.querySelector('input[type=hidden][name="'+name+'"]'); if(!h){ h=document.createElement('input'); h.type='hidden'; h.name=name; form.appendChild(h); } h.value=val; }
    var texts=[];
    form.querySelectorAll('input:not([type=hidden]):not([type=submit]),select,textarea').forEach(function(el){
      if(el.type==='email'){ el.value=state.email; } else { texts.push(el); }
    });
    if(texts[0]) texts[0].value=state.cname;                 // 1er texto -> nombre
    if(texts[1]) texts[1].value=state.name;                  // 2do texto -> negocio (empresa)
    if(texts.length>2) texts[texts.length-1].value=msg;      // último -> mensaje
    hid('Nombre',state.cname); hid('Correo',state.email); hid('Negocio',state.name);
    hid('Giro',state.type); hid('Frentes',frentesResumen()); hid('Telefono', state.phone?(state.lada+' '+state.phone):''); hid('SitioRedes', state.site||'');
    form.setAttribute('novalidate','novalidate');
    var wrap=form.closest('.w-form'), done=wrap?wrap.querySelector('.w-form-done'):null;
    if(done) done.style.display='none';
    var sb=form.querySelector('[type=submit]'); if(sb) sb.click();
    var tries=0, iv=setInterval(function(){ tries++;
      var okNow = done ? getComputedStyle(done).display!=='none' : true;   // sin .w-form-done, asume éxito
      if(okNow){ clearInterval(iv); if(btn){btn.style.pointerEvents='';btn.style.opacity='';} cb(true); }
      else if(tries>20){ clearInterval(iv); if(btn){btn.style.pointerEvents='';btn.style.opacity='';} cb(false); }
    },300);
  }

  // navigation
  function show(n){
    $$('.dt-screen').forEach(function(s,i){ s.classList.toggle('active', i===n); });
    ['s0','s1','s2'].forEach(function(id,i){
      var el=$('#'+id); el.classList.remove('on','done');
      if(i<n) el.classList.add('done'); else if(i===n) el.classList.add('on');
    });
    if(n===2) el0(); // noop guard
    window.scrollTo({top:0, behavior:'smooth'});
  }
  function el0(){}

  $('#go-1').onclick=function(){
    var nm=$('#bizname').value.trim(), giro=($('#biz-search').value.trim()||state.type||'').trim();
    var ok=true;
    mark($('#bizname'), !!nm); if(!nm) ok=false;
    mark($('#biz-search'), !!giro); if(!giro) ok=false;
    $('#intro-err').style.display = ok?'none':'block';
    if(!ok){ ($('#bizname').value.trim()?$('#biz-search'):$('#bizname')).focus(); return; }
    state.name=nm; state.type=giro; show(1);
  };
  $('#back-0').onclick=function(){ show(0); };
  $('#go-2').onclick=function(){ buildPackage(); show(2); };
  $('#back-1').onclick=function(){ show(1); };
  $('#go-3').onclick=function(){
    var nm=$('#cname').value.trim(), em=$('#email').value.trim(), emOk=EMAIL_RE.test(em);
    var ok=true;
    mark($('#cname'), !!nm); if(!nm) ok=false;
    mark($('#email'), emOk); if(!emOk) ok=false;
    var pe=$('#pkg-err');
    pe.textContent = (!nm && !emOk) ? 'Escribe tu nombre y un correo válido.' : (!nm ? 'Escribe tu nombre.' : 'Escribe un correo válido.');
    pe.style.display = ok?'none':'block';
    if(!ok){ (!nm?$('#cname'):$('#email')).focus(); return; }
    state.cname=nm; state.email=em; state.phone=$('#phone').value.trim(); state.lada=ladaSel.value; state.site=$('#site').value.trim();
    var btn=this;
    submitLead(btn, function(sent){
      if(sent===false){ pe.textContent='No pudimos enviar tu solicitud. Reintenta en un momento.'; pe.style.display='block'; return; }
      buildRecap(); show(3);
    });
  };
  $('#restart').onclick=function(){ state={name:'',type:'',email:'',cname:'',phone:'',lada:'+52',site:'',sel:{}};
    ['bizname','email','cname','phone','site'].forEach(function(id){$('#'+id).value='';});
    ladaSel.value='+52';
    ['bizname','biz-search','cname','email'].forEach(function(id){$('#'+id).classList.remove('err');});
    $('#intro-err').style.display='none'; $('#pkg-err').style.display='none';
    $$('.dt-aspect').forEach(function(e){e.classList.remove('sel','mejorar'); e.setAttribute('aria-pressed','false');
      $$('.dt-segbtn',e).forEach(function(x){x.setAttribute('aria-pressed', x.classList.contains('c')?'true':'false')});});
    if(window.__comboReset) window.__comboReset();
    refresh(); show(0);
  };

  refresh();

  }
  function boot(){
    var root=document.getElementById("dt-propuesta");
    if(!root||root.getAttribute("data-dt-mounted"))return;
    root.setAttribute("data-dt-mounted","1");
    root.innerHTML=MARKUP;
    var wf=document.querySelector(".w-form");
    if(wf){wf.style.cssText="position:fixed;left:-9999px;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none";}
    app();
  }
  if(document.readyState!=="loading")boot();else document.addEventListener("DOMContentLoaded",boot);
})();
