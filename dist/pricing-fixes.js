(()=>{setTimeout(()=>{
  const path=location.pathname.replace(/\/$/,'')||'/';
  const panel=typeof panels!=='undefined'&&panels.find(x=>path===`/panels/${x[0]}`);
  if(panel){
    const creditSection=[...document.querySelectorAll('section')].find(s=>s.textContent.includes('credit-to-duration table'));
    creditSection?.querySelector('table')?.querySelectorAll('tr').forEach(row=>row.lastElementChild?.remove());
  }
  if(path==='/'){
    const customers=document.getElementById('customers'),marginField=document.getElementById('marginRange')?.closest('.field'),label=customers?.closest('.field')?.querySelector('label'),output=document.getElementById('cust'),result=document.getElementById('profit'),note=document.getElementById('profitNote'),heading=document.querySelector('.calculator h2');
    if(customers&&label&&output&&result&&note){
      heading.textContent='Estimate potential profit range.';
      customers.min='10';customers.max='100';customers.step='10';customers.value='10';label.firstChild.nodeValue='Customer accounts ';marginField?.remove();
      const update=()=>{const count=+customers.value;output.textContent=count;result.textContent=`€${count*35}–€${count*50}`;note.textContent=`Estimated possible profit range for ${count} accounts — not a published price.`};
      customers.oninput=update;update();
    }
  }
},200)})();
