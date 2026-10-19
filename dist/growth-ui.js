(()=>{
  document.head.insertAdjacentHTML('beforeend',`<style>:root{--bg:#090a18;--surface:#111226;--line:#2b2d55;--text:#f7f7ff;--muted:#a5a7c3;--cyan:#67e8f9;--green:#34d399;--amber:#fbbf24}body{background:radial-gradient(circle at 12% 4%,#1b1c47 0,transparent 28%),#090a18}.nav{position:sticky;top:0;z-index:30;background:#090a18e8;backdrop-filter:blur(16px)}.navlinks a{padding:8px 3px}.navlinks a.active{color:#67e8f9;border-bottom:2px solid #67e8f9}.smart-quick{display:flex;gap:8px;flex-wrap:wrap;padding:9px 0 0}.smart-quick a{font-size:11px;border:1px solid #3a3c68;border-radius:999px;padding:5px 9px;color:#bfc3e4}.smart-quick a:hover{border-color:#67e8f9;color:#67e8f9}.margin-60{display:inline-flex;align-items:center;gap:7px;background:#193a38;color:#8cf8d0;border:1px solid #34d39955;border-radius:999px;padding:6px 10px;font-size:12px;font-weight:800;margin-top:12px}.logo-image{height:32px;width:32px;object-fit:contain}</style>`);
  const current=location.pathname.replace(/\/$/,'')||'/';
  document.querySelectorAll('.navlinks a').forEach(a=>{if(a.getAttribute('href').replace(/\/$/,'')===current)a.classList.add('active')});
  const brand=document.querySelector('.site-logo');
  if(brand)brand.innerHTML='<img class="logo-image" src="/assets/brand/logo.svg" alt="iptvsreseller.net logo"><span><i>iptv</i>sreseller<span>.net</span></span>';
  if(current==='/'){
    const range=document.getElementById('marginRange'),label=range?.closest('.field')?.querySelector('label'),out=document.getElementById('margin'),profit=document.getElementById('profit'),note=document.getElementById('profitNote'),customers=document.getElementById('customers');
    if(range&&label&&out&&profit&&note&&customers){
      range.min='10';range.max='100';range.value='60';label.firstChild.nodeValue='Target profit margin ';
      const update=()=>{const percent=+range.value,cust=+customers.value,profitValue=Math.round(cust*10*(percent/100));out.textContent=percent+'%';profit.textContent='$'+profitValue;note.textContent=`${cust} customers × $10 average plan × ${percent}% margin`};
      range.oninput=customers.oninput=update;update();range.closest('.field').insertAdjacentHTML('afterend','<div class="margin-60">✦ 60% target margin enabled</div>');
    }
  }
})();
