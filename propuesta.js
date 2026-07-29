/* Datatlan — propuesta.js | Widget del configurador de propuesta.
   Auto-monta en <div id="dt-propuesta"></div>. Servido por jsDelivr.
   Generado desde datatlan-business/propuesta-showcase.html (build-widget.js). No editar a mano. */
(function(){
  var MARKUP = "<div class=\"dt-wrap\">\n  <div class=\"dt-app\">\n    <div class=\"dt-top\">\n      <a class=\"dt-brand\" href=\"/\" aria-label=\"Volver a datatlan.tech\" data-i18n-aria=\"brandAria\">\n        <svg class=\"dt-logo\" viewBox=\"0 0 120 120\" fill=\"none\" aria-hidden=\"true\">\n          <!-- central spine -->\n          <rect x=\"54\" y=\"30\" width=\"12\" height=\"82\" rx=\"4\" fill=\"#1f86cf\"/>\n          <!-- row 5 (base, deep blue) -->\n          <rect x=\"12\" y=\"93\" width=\"40\" height=\"19\" rx=\"4\" fill=\"#1450ad\"/>\n          <rect x=\"68\" y=\"93\" width=\"40\" height=\"19\" rx=\"4\" fill=\"#1450ad\"/>\n          <!-- row 4 -->\n          <rect x=\"18\" y=\"72\" width=\"34\" height=\"17\" rx=\"4\" fill=\"#1663bd\"/>\n          <rect x=\"68\" y=\"72\" width=\"34\" height=\"17\" rx=\"4\" fill=\"#1663bd\"/>\n          <!-- row 3 -->\n          <rect x=\"24\" y=\"51\" width=\"28\" height=\"17\" rx=\"4\" fill=\"#1c7dc6\"/>\n          <rect x=\"68\" y=\"51\" width=\"28\" height=\"17\" rx=\"4\" fill=\"#1c7dc6\"/>\n          <!-- row 2 -->\n          <rect x=\"30\" y=\"30\" width=\"22\" height=\"17\" rx=\"4\" fill=\"#1f93cf\"/>\n          <rect x=\"68\" y=\"30\" width=\"22\" height=\"17\" rx=\"4\" fill=\"#1f93cf\"/>\n          <!-- row 1 (browser header, cyan) -->\n          <rect x=\"34\" y=\"8\" width=\"52\" height=\"18\" rx=\"5\" fill=\"#12b0d6\"/>\n          <circle cx=\"43\" cy=\"17\" r=\"1.9\" fill=\"#fff\"/>\n          <circle cx=\"49.5\" cy=\"17\" r=\"1.9\" fill=\"#fff\"/>\n          <circle cx=\"56\" cy=\"17\" r=\"1.9\" fill=\"#fff\"/>\n          <rect x=\"64\" y=\"14.4\" width=\"16\" height=\"5.2\" rx=\"2.6\" fill=\"#fff\"/>\n        </svg>\n        <span>Datatlan</span>\n      </a>\n      <div class=\"dt-steps\" aria-hidden=\"true\">\n        <span id=\"s0\" class=\"on\"></span><span id=\"s1\"></span><span id=\"s2\"></span>\n      </div>\n    </div>\n\n    <!-- SCREEN 0 — intro -->\n    <section class=\"dt-screen active\" id=\"scr-0\">\n      <div class=\"dt-card\">\n        <p class=\"dt-eyebrow\" data-i18n=\"s0_eyebrow\">Propuesta personalizada</p>\n        <h1 class=\"dt-h\" data-i18n=\"s0_h\">Armemos la digitalización de tu negocio</h1>\n        <p class=\"dt-sub\" data-i18n=\"s0_sub\">Marca los frentes que quieres poner en marcha. En un par de minutos armas tu paquete, y Datatlan te devuelve un diagnóstico con una cotización a la medida.</p>\n\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"bizname\" data-i18n-html=\"lbl_bizname\">¿Cómo se llama tu negocio? <span class=\"req\">*</span></label>\n          <input class=\"dt-input\" id=\"bizname\" type=\"text\" placeholder=\"Ej. Estudio Luna, Nutrióloga Ana, Guardería Girasol\" data-i18n-ph=\"ph_bizname\" autocomplete=\"off\">\n        </div>\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"biz-search\" data-i18n-html=\"lbl_bizsearch\">¿A qué se dedica? <span class=\"req\">*</span></label>\n          <div class=\"dt-combo\" id=\"combo\">\n            <input class=\"dt-input\" id=\"biz-search\" type=\"text\" autocomplete=\"off\" placeholder=\"Escribe tu giro… ej. yoga, nutrición, cafetería\" data-i18n-ph=\"ph_bizsearch\" role=\"combobox\" aria-expanded=\"false\" aria-controls=\"biz-list\" aria-autocomplete=\"list\">\n            <div class=\"dt-clist\" id=\"biz-list\" role=\"listbox\" aria-label=\"Giros sugeridos\" data-i18n-aria=\"listAria\"></div>\n          </div>\n          <p class=\"dt-hint\" id=\"biz-hint\"></p>\n        </div>\n\n        <p class=\"dt-err\" id=\"intro-err\" data-i18n=\"err_intro\">Completa el nombre de tu negocio y tu giro para continuar.</p>\n\n        <div class=\"dt-foot\" style=\"justify-content:flex-end\">\n          <button class=\"dt-btn\" id=\"go-1\" type=\"button\"><span data-i18n=\"btn_start\">Comenzar</span>\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg>\n          </button>\n        </div>\n      </div>\n    </section>\n\n    <!-- SCREEN 1 — selección -->\n    <section class=\"dt-screen\" id=\"scr-1\">\n      <div class=\"dt-card\">\n        <p class=\"dt-eyebrow\" data-i18n=\"s1_eyebrow\">Paso 1 de 3 · Elige tus frentes</p>\n        <h1 class=\"dt-h\" data-i18n=\"s1_h\">¿Qué quieres digitalizar?</h1>\n        <p class=\"dt-sub\" data-i18n-html=\"s1_sub\">Toca los frentes que te interesan. En cada uno dinos si lo <b style=\"color:var(--azul-ink)\">creamos desde cero</b> o <b style=\"color:var(--teal-ink)\">mejoramos</b> lo que ya tienes.</p>\n\n        <div class=\"dt-grid\" id=\"grid\"></div>\n\n        <div class=\"dt-legend\" aria-hidden=\"true\">\n          <span><i class=\"crear\"></i> <span data-i18n=\"leg_create\">Crear desde cero</span></span>\n          <span><i class=\"mejorar\"></i> <span data-i18n=\"leg_improve\">Mejorar lo existente</span></span>\n        </div>\n\n        <div class=\"dt-foot\">\n          <div class=\"dt-count\" id=\"count\">Aún no eliges frentes</div>\n          <div class=\"dt-actions\">\n            <button class=\"dt-btn ghost\" id=\"back-0\" type=\"button\" data-i18n=\"btn_back\">Atrás</button>\n            <button class=\"dt-btn\" id=\"go-2\" type=\"button\" disabled><span data-i18n=\"btn_seepkg\">Ver mi paquete</span>\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg>\n            </button>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- SCREEN 2 — paquete -->\n    <section class=\"dt-screen\" id=\"scr-2\">\n      <div class=\"dt-card\">\n        <p class=\"dt-eyebrow\" data-i18n=\"s2_eyebrow\">Paso 2 de 3 · Tu paquete</p>\n        <h1 class=\"dt-h\" id=\"pkg-title\">Tu paquete de arranque</h1>\n        <p class=\"dt-sub\" data-i18n=\"s2_sub\">Esto es lo que Datatlan pondría en marcha. Nosotros hacemos el diagnóstico y te enviamos la cotización personalizada — sin precios ocultos.</p>\n\n        <div class=\"dt-pkg\">\n          <div id=\"pkg-list\"></div>\n\n          <aside class=\"dt-aside\">\n            <div class=\"dt-stackbox\">\n              <svg class=\"dt-stack\" id=\"stack\" viewBox=\"0 0 240 180\" aria-hidden=\"true\"></svg>\n              <div class=\"dt-metrics\">\n                <div class=\"dt-metric\"><b id=\"m-total\">0</b><span data-i18n=\"m_areas\">frentes</span></div>\n                <div class=\"dt-metric\"><b id=\"m-crear\" style=\"color:var(--azul-ink)\">0</b><span data-i18n=\"m_create\">crear</span></div>\n                <div class=\"dt-metric\"><b id=\"m-mejorar\" style=\"color:var(--teal-ink)\">0</b><span data-i18n=\"m_improve\">mejorar</span></div>\n              </div>\n            </div>\n            <div class=\"dt-note\">\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 8v4l3 2\"/><circle cx=\"12\" cy=\"12\" r=\"9\"/></svg>\n              <div data-i18n-html=\"s2_note\"><b>Respuesta en menos de 24 h hábiles.</b> Revisamos tu selección, hacemos el diagnóstico y te mandamos una cotización clara y a la medida.</div>\n            </div>\n          </aside>\n        </div>\n\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"cname\" data-i18n-html=\"lbl_cname\">Tu nombre <span class=\"req\">*</span></label>\n          <input class=\"dt-input\" id=\"cname\" type=\"text\" placeholder=\"¿Con quién tenemos el gusto?\" data-i18n-ph=\"ph_cname\" autocomplete=\"name\">\n        </div>\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"email\" data-i18n-html=\"lbl_email\">Correo <span class=\"req\">*</span></label>\n          <input class=\"dt-input\" id=\"email\" type=\"email\" placeholder=\"tu@correo.com\" data-i18n-ph=\"ph_email\" autocomplete=\"email\">\n        </div>\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"phone\" data-i18n-html=\"lbl_phone\">Teléfono <span class=\"opt\">— opcional</span></label>\n          <div class=\"dt-phone\">\n            <input class=\"dt-input dt-lada\" id=\"lada\" type=\"tel\" inputmode=\"tel\" value=\"+52\" placeholder=\"+52\" aria-label=\"Lada / código de país\" data-i18n-aria=\"ladaAria\">\n            <input class=\"dt-input dt-tel\" id=\"phone\" type=\"tel\" inputmode=\"tel\" placeholder=\"55 1234 5678\" autocomplete=\"tel\">\n          </div>\n        </div>\n        <div class=\"dt-field\">\n          <label class=\"dt-label\" for=\"site\" data-i18n-html=\"lbl_site\">Sitio web o redes <span class=\"opt\">— opcional</span></label>\n          <input class=\"dt-input\" id=\"site\" type=\"text\" inputmode=\"url\" placeholder=\"tusitio.com o @tu_negocio\" data-i18n-ph=\"ph_site\" autocomplete=\"url\">\n        </div>\n        <p class=\"dt-err\" id=\"pkg-err\">Completa los campos obligatorios.</p>\n\n        <div class=\"dt-foot\">\n          <button class=\"dt-btn ghost\" id=\"back-1\" type=\"button\" data-i18n=\"btn_edit\">Editar selección</button>\n          <button class=\"dt-btn\" id=\"go-3\" type=\"button\"><span data-i18n=\"btn_request\">Solicitar mi cotización</span>\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></svg>\n          </button>\n        </div>\n      </div>\n    </section>\n\n    <!-- SCREEN 3 — confirmación -->\n    <section class=\"dt-screen\" id=\"scr-3\">\n      <div class=\"dt-card dt-confirm\">\n        <div class=\"dt-seal\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg></div>\n        <p class=\"dt-eyebrow\" style=\"color:var(--teal-ink)\" data-i18n=\"s3_eyebrow\">Solicitud recibida</p>\n        <h1 class=\"dt-h\" id=\"done-title\">¡Listo! Estamos preparando tu diagnóstico</h1>\n        <p class=\"dt-sub\" style=\"margin-left:auto;margin-right:auto\" id=\"done-sub\">Datatlan revisará tus frentes y te enviará una cotización personalizada muy pronto.</p>\n        <div class=\"dt-recap\" id=\"recap\"></div>\n        <div class=\"dt-foot\" style=\"justify-content:center; margin-top:26px\">\n          <button class=\"dt-btn ghost\" id=\"restart\" type=\"button\" data-i18n=\"btn_restart\">Empezar de nuevo</button>\n        </div>\n      </div>\n    </section>\n\n    <div class=\"dt-footer\">\n      <div class=\"dt-footer-links\">\n        <a href=\"/\" data-i18n=\"foot_back\">← Volver a datatlan.tech</a>\n        <span class=\"dt-dot\">·</span>\n        <a href=\"mailto:datatlan@datatlan.tech\">datatlan@datatlan.tech</a>\n      </div>\n      <p data-i18n-html=\"foot_tag\"><b>Datatlan</b> — Ecosistema Digital para tu Empresa</p>\n    </div>\n  </div>\n</div>";
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
    {id:'sitio', name:'Sitio web', name_en:'Website', desc:'Tu casa digital, editable por ti.', desc_en:'Your digital home, editable by you.', group:'nucleo', icon:I.sitio},
    {id:'marca', name:'Identidad de marca', name_en:'Brand identity', desc:'Logo, colores, cómo te ven.', desc_en:'Logo, colors, how people see you.', group:'nucleo', icon:I.marca},
    {id:'reservas', name:'Reservas y citas', name_en:'Bookings & appointments', desc:'Que te agenden sin ir y venir por WhatsApp.', desc_en:'Let people book you without the WhatsApp back-and-forth.', group:'modulo', icon:I.reservas},
    {id:'pagos', name:'Cobros y pagos', name_en:'Payments & billing', desc:'Cobra en línea, sin complicarte.', desc_en:'Get paid online, hassle-free.', group:'modulo', icon:I.pagos},
    {id:'catalogo', name:'Catálogo / tienda', name_en:'Catalog / store', desc:'Muestra tus servicios o vende en línea.', desc_en:'Show your services or sell online.', group:'modulo', icon:I.catalogo},
    {id:'clientes', name:'Clientes y correo', name_en:'Clients & email', desc:'Guarda contactos y da seguimiento.', desc_en:'Store contacts and follow up.', group:'modulo', icon:I.clientes},
    {id:'operacion', name:'Operación interna', name_en:'Internal operations', desc:'Ordena tareas, inventario y procesos en un solo lugar.', desc_en:'Organize tasks, inventory, and processes in one place.', group:'modulo', icon:I.operacion},
    {id:'medicion', name:'Medición', name_en:'Analytics', desc:'Sabe qué está funcionando y qué no.', desc_en:"Know what's working and what's not.", group:'modulo', icon:I.medicion}
  ];
  var CATS = [
    {label:'Bienestar y movimiento', label_en:'Wellness & movement', kw:['yoga','pilates','gym','gimnasio','crossfit','danza','baile','fitness','entrenador','spinning','zumba','meditacion'], kw_en:['yoga','pilates','gym','fitness','crossfit','dance','trainer','spinning','zumba','meditation']},
    {label:'Salud y terapia', label_en:'Health & therapy', kw:['nutricion','nutriologo','psicologia','psicologo','terapia','terapeuta','fisioterapia','masaje','consultorio','dental','dentista','medico','doctor','veterinaria'], kw_en:['nutrition','nutritionist','psychology','psychologist','therapy','therapist','physiotherapy','massage','clinic','dental','dentist','doctor','vet','veterinary']},
    {label:'Belleza y cuidado personal', label_en:'Beauty & personal care', kw:['estetica','spa','barberia','salon','peluqueria','uñas','unas','cejas','pestañas','maquillaje','depilacion','tatuajes'], kw_en:['beauty','spa','barber','salon','hair','nails','brows','lashes','makeup','waxing','tattoo']},
    {label:'Educación y cuidado infantil', label_en:'Education & childcare', kw:['guarderia','kinder','preescolar','clases','tutoria','escuela','taller','cursos','idiomas','musica','regularizacion','estancia infantil'], kw_en:['daycare','kindergarten','preschool','classes','tutoring','school','workshop','courses','languages','music']},
    {label:'Alimentos y bebidas', label_en:'Food & drink', kw:['cafe','cafeteria','restaurante','reposteria','pasteleria','panaderia','catering','comida','bar','postres','taqueria','food truck'], kw_en:['cafe','coffee','restaurant','bakery','pastry','catering','food','bar','desserts','tacos','food truck']},
    {label:'Comercio y productos', label_en:'Retail & products', kw:['tienda','boutique','artesanias','ecommerce','venta','productos','ropa','accesorios','joyeria','floreria','abarrotes'], kw_en:['store','shop','boutique','crafts','ecommerce','sales','products','clothing','accessories','jewelry','flowers','grocery']},
    {label:'Servicios profesionales', label_en:'Professional services', kw:['consultoria','coaching','despacho','contabilidad','contador','legal','abogado','marketing','diseño','diseno','arquitectura','agencia'], kw_en:['consulting','coaching','firm','accounting','accountant','legal','lawyer','marketing','design','architecture','agency']},
    {label:'Eventos y creativos', label_en:'Events & creative', kw:['fotografia','fotografo','video','eventos','decoracion','dj','bodas','wedding','organizacion','audiovisual'], kw_en:['photography','photographer','video','events','decor','dj','weddings','planning','audiovisual']}
  ];

  var state = { name:'', type:'', email:'', cname:'', phone:'', lada:'+52', site:'', sel:{} }; // sel[id] = 'crear' | 'mejorar'

  // Scope queries to the widget's own container so IDs (p.ej. #email) no choquen con el form oculto de Webflow.
  var ROOT=document.querySelector('.dt-wrap')||document;
  var $=function(s,c){return (c||ROOT).querySelector(s)}, $$=function(s,c){return Array.prototype.slice.call((c||ROOT).querySelectorAll(s))};

  // ---- i18n: Spanish is the default (baked into the markup + JS). English turns on
  //      automatically under /en (Webflow secondary locale), when <html lang="en">, or with ?lang=en. ----
  var LANG = ( /^\/en(\/|$)/i.test(location.pathname)
            || /^en\b/i.test(document.documentElement.getAttribute('lang')||'')
            || /[?&]lang=en\b/i.test(location.search) ) ? 'en' : 'es';
  var EN = {
    brandAria:'Back to datatlan.tech',
    s0_eyebrow:'Custom proposal',
    s0_h:"Let's build your business's digital setup",
    s0_sub:'Check the areas you want to get going. In a couple of minutes you build your package, and Datatlan sends back an assessment with a tailored quote.',
    lbl_bizname:"What's your business called? <span class=\"req\">*</span>",
    ph_bizname:'e.g. Luna Studio, Ana Nutrition, Sunflower Daycare',
    lbl_bizsearch:'What does it do? <span class="req">*</span>',
    ph_bizsearch:'Type your industry… e.g. yoga, nutrition, café',
    listAria:'Suggested industries',
    err_intro:'Fill in your business name and industry to continue.',
    btn_start:'Get started',
    s1_eyebrow:'Step 1 of 3 · Choose your areas',
    s1_h:'What do you want to digitize?',
    s1_sub:'Tap the areas you\'re interested in. For each, tell us whether we <b style="color:var(--azul-ink)">create it from scratch</b> or <b style="color:var(--teal-ink)">improve</b> what you already have.',
    leg_create:'Create from scratch',
    leg_improve:'Improve what exists',
    btn_back:'Back',
    btn_seepkg:'See my package',
    s2_eyebrow:'Step 2 of 3 · Your package',
    s2_sub:'This is what Datatlan would set up. We do the assessment and send you the personalized quote — no hidden prices.',
    m_areas:'areas',
    m_create:'create',
    m_improve:'improve',
    s2_note:'<b>Response within 24 business hours.</b> We review your selection, do the assessment, and send you a clear, tailored quote.',
    lbl_cname:'Your name <span class="req">*</span>',
    ph_cname:'Who do we have the pleasure of meeting?',
    lbl_email:'Email <span class="req">*</span>',
    ph_email:'you@email.com',
    lbl_phone:'Phone <span class="opt">— optional</span>',
    ladaAria:'Country code',
    lbl_site:'Website or socials <span class="opt">— optional</span>',
    ph_site:'yoursite.com or @your_business',
    btn_edit:'Edit selection',
    btn_request:'Request my quote',
    s3_eyebrow:'Request received',
    btn_restart:'Start over',
    foot_back:'← Back to datatlan.tech',
    foot_tag:'<b>Datatlan</b> — Digital Ecosystem for Your Company'
  };
  function L(o,f){ return LANG==='en' && o[f+'_en']!=null ? o[f+'_en'] : o[f]; }
  function applyI18n(){
    if(LANG!=='en') return;
    $$('[data-i18n]').forEach(function(el){ var v=EN[el.getAttribute('data-i18n')]; if(v!=null) el.textContent=v; });
    $$('[data-i18n-html]').forEach(function(el){ var v=EN[el.getAttribute('data-i18n-html')]; if(v!=null) el.innerHTML=v; });
    $$('[data-i18n-ph]').forEach(function(el){ var v=EN[el.getAttribute('data-i18n-ph')]; if(v!=null) el.setAttribute('placeholder',v); });
    $$('[data-i18n-aria]').forEach(function(el){ var v=EN[el.getAttribute('data-i18n-aria')]; if(v!=null) el.setAttribute('aria-label',v); });
    $$('a[href="/"]').forEach(function(a){ a.setAttribute('href','/en'); });  // keep home links inside the locale
    document.documentElement.setAttribute('lang','en');
  }
  applyI18n();

  // intro combobox — búsqueda de giro con texto libre
  (function initCombo(){
    var inp=$('#biz-search'), list=$('#biz-list'), hint=$('#biz-hint'), combo=$('#combo');
    var active=-1, visible=[];
    function norm(s){s=(s||'').toLowerCase().normalize('NFD');var r='';for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);if(c<768||c>879)r+=s[i];}return r;}
    function open(v){ list.classList.toggle('open', v); inp.setAttribute('aria-expanded', v?'true':'false'); if(!v) active=-1; }
    function close(){ open(false); }
    function choose(val){ inp.value=val; state.type=val; hint.textContent=(LANG==='en'?'Industry: ':'Giro: ')+val; close(); }
    function render(){
      var raw=inp.value.trim(), q=norm(raw);
      visible = CATS.filter(function(c){
        if(!q) return true;
        return norm(L(c,'label')).indexOf(q)>-1 || norm(c.label).indexOf(q)>-1
            || c.kw.some(function(k){return norm(k).indexOf(q)>-1;})
            || (c.kw_en||[]).some(function(k){return norm(k).indexOf(q)>-1;});
      });
      list.innerHTML='';
      visible.forEach(function(c){
        var kws=(LANG==='en'?(c.kw_en||c.kw):c.kw);
        var o=document.createElement('div'); o.className='dt-opt'; o.setAttribute('role','option');
        o.innerHTML='<b>'+L(c,'label')+'</b><span>'+kws.slice(0,4).join(' · ')+'…</span>';
        o.addEventListener('mousedown', function(e){ e.preventDefault(); choose(L(c,'label')); });
        list.appendChild(o);
      });
      var exact = CATS.some(function(c){return norm(L(c,'label'))===q || norm(c.label)===q;});
      if(raw && !exact){
        var n=document.createElement('div'); n.className='dt-optnew'; n.setAttribute('role','option');
        n.innerHTML=(LANG==='en'?'Use my industry: ':'Usar mi giro: ')+'<b>“'+raw+'”</b>';
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
    var tagTxt = a.group==='nucleo' ? (LANG==='en'?'Core':'Núcleo') : (LANG==='en'?'Module':'Módulo');
    var createTxt = LANG==='en'?'Create':'Crear', improveTxt = LANG==='en'?'Improve':'Mejorar';
    el.innerHTML =
      '<span class="dt-tag">'+tagTxt+'</span>'+
      '<span class="dt-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>'+
      '<div class="dt-ahead"><div class="dt-ico">'+svg(a.icon)+'</div>'+
      '<div><div class="dt-aname">'+L(a,'name')+'</div><div class="dt-adesc">'+L(a,'desc')+'</div></div></div>'+
      '<div class="dt-seg" role="group" aria-label="'+(LANG==='en'?'Create or improve ':'Crear o mejorar ')+L(a,'name')+'">'+
        '<button type="button" class="dt-segbtn c" data-m="crear" aria-pressed="true"><span class="dot"></span>'+createTxt+'</button>'+
        '<button type="button" class="dt-segbtn m" data-m="mejorar" aria-pressed="false"><span class="dot"></span>'+improveTxt+'</button>'+
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
    cnt.innerHTML = k.total
      ? ( LANG==='en'
          ? ('<b>'+k.total+'</b> '+(k.total===1?'area chosen':'areas chosen')+' · '+k.crear+' to create · '+k.mejorar+' to improve')
          : ('<b>'+k.total+'</b> '+(k.total===1?'frente elegido':'frentes elegidos')+' · '+k.crear+' por crear · '+k.mejorar+' por mejorar') )
      : (LANG==='en'?'No areas chosen yet':'Aún no eliges frentes');
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
    if(n===0){ html='<text x="120" y="95" text-anchor="middle" fill="var(--slate)" font-family="var(--mono)" font-size="11">'+(LANG==='en'?'your ecosystem will appear here':'tu ecosistema aparecerá aquí')+'</text>'; }
    s.innerHTML=html;
    $('#m-total').textContent=k.total; $('#m-crear').textContent=k.crear; $('#m-mejorar').textContent=k.mejorar;
  }

  function buildPackage(){
    var list=$('#pkg-list'); list.innerHTML='';
    var title=$('#pkg-title'); title.textContent = state.name? ((LANG==='en'?'Your starter package, ':'Tu paquete de arranque, ')+state.name) : (LANG==='en'?'Your starter package':'Tu paquete de arranque');
    ['nucleo','modulo'].forEach(function(g){
      var items=ASPECTS.filter(function(a){return state.sel[a.id] && a.group===g;});
      if(!items.length) return;
      var grp=document.createElement('div'); grp.className='dt-group';
      var gtitle = g==='nucleo' ? (LANG==='en'?'Core':'Núcleo') : (LANG==='en'?'Modules':'Módulos');
      grp.innerHTML='<p class="dt-gtitle">'+gtitle+'</p>';
      items.forEach(function(a,idx){
        var mode=state.sel[a.id];
        var row=document.createElement('div'); row.className='dt-tier'; row.style.animationDelay=(idx*0.05)+'s';
        row.innerHTML='<div class="dt-ico" '+(mode==='mejorar'?'style="background:linear-gradient(140deg,var(--teal-wash),color-mix(in srgb,var(--teal) 26%, var(--teal-wash)));color:var(--teal-ink)"':'')+'>'+svg(a.icon)+'</div>'+
          '<div class="dt-tname">'+L(a,'name')+'</div>'+
          '<span class="dt-mode '+mode+'">'+(mode==='mejorar'?(LANG==='en'?'Improve':'Mejorar'):(LANG==='en'?'Create':'Crear'))+'</span>';
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
      c.innerHTML='<span class="dot '+mode+'"></span>'+L(a,'name');
      r.appendChild(c);
    });
    var k=counts();
    var gn=(state.cname||'').split(' ')[0];
    $('#done-title').textContent = gn
      ? ((LANG==='en'?'All set, ':'¡Listo, ')+gn+'!')
      : (LANG==='en'?"All set! We're preparing your assessment":'¡Listo! Estamos preparando tu diagnóstico');
    var dest = state.email? ((LANG==='en'?' to ':' a ')+state.email) : '';
    $('#done-sub').textContent = LANG==='en'
      ? ('Datatlan will review your '+k.total+' '+(k.total===1?'area':'areas')+' and send you a custom quote'+dest+' within 24 business hours.')
      : ('Datatlan revisará tus '+k.total+' '+(k.total===1?'frente':'frentes')+' y te enviará una cotización personalizada'+dest+' en menos de 24 h hábiles.');
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
    pe.textContent = (!nm && !emOk)
      ? (LANG==='en'?'Enter your name and a valid email.':'Escribe tu nombre y un correo válido.')
      : (!nm ? (LANG==='en'?'Enter your name.':'Escribe tu nombre.') : (LANG==='en'?'Enter a valid email.':'Escribe un correo válido.'));
    pe.style.display = ok?'none':'block';
    if(!ok){ (!nm?$('#cname'):$('#email')).focus(); return; }
    state.cname=nm; state.email=em; state.phone=$('#phone').value.trim(); state.lada=ladaSel.value; state.site=$('#site').value.trim();
    var btn=this;
    submitLead(btn, function(sent){
      if(sent===false){ pe.textContent=(LANG==='en'?"We couldn't send your request. Please try again in a moment.":'No pudimos enviar tu solicitud. Reintenta en un momento.'); pe.style.display='block'; return; }
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
