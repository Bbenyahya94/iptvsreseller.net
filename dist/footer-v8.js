(()=>{
  const footer=document.querySelector('.footer .wrap');
  if(!footer)return;
  footer.innerHTML=`
    <div class="footer-legal-grid">
      <div class="footer-brand">
        <a class="brand" href="/"><i>iptv</i>sreseller<span>.net</span></a>
        <p>Panel comparisons, credit-duration guidance and reseller onboarding information for authorized operators.</p>
      </div>
      <div>
        <b>Explore</b>
        <a href="/">All panels</a>
        <a href="/compare/">Panel comparison</a>
        <a href="/blog/">Knowledge hub</a>
      </div>
      <div>
        <b>Support</b>
        <a href="/contact/">Order credits</a>
        <a href="/about/">About</a>
        <a href="/faq/">FAQ</a>
      </div>
      <div>
        <b>Legal & contact</b>
        <a href="/terms/">Terms of use</a>
        <a href="/privacy/">Privacy policy</a>
        <a href="/contact/">Contact sales</a>
      </div>
    </div>
    <div class="footer-legal-note"><span>© 2026 iptvsreseller.net · Verify availability, compatibility, pricing and content rights before ordering.</span><a href="/terms/">Legal information</a></div>`;
})();
