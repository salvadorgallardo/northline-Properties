(function(){
  const $ = (sel) => document.querySelector(sel);

  function toast(msg){
    const t = $('#toast');
    if(!t) return alert(msg);
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 3200);
  }

  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
  });

  const form = $('#leadForm');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const endpoint = form.getAttribute('data-endpoint'); // paste webhook here

      try{
        if(endpoint){
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({source:"northline-property-solutions-site", ...data})
          });
          if(!res.ok) throw new Error('Request failed');
          toast("Thanks — we got your info. We'll reach out shortly.");
          form.reset();
        } else {
          toast("Form is set up. Add your CRM webhook to start receiving leads.");
        }
      } catch(err){
        toast("Couldn’t submit right now. Please call or text us instead.");
      }
    });
  }

  const copyBtn = $('#copyPhone');
  if(copyBtn){
    copyBtn.addEventListener('click', async ()=>{
      const phone = copyBtn.getAttribute('data-phone') || '';
      try{
        await navigator.clipboard.writeText(phone);
        toast("Phone number copied.");
      } catch(e){
        toast("Copy not supported on this browser.");
      }
    });
  }
})();
