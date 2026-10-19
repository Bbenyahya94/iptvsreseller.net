(()=>{
  const slug=(location.pathname.match(/\/panels\/([^/]+)/)||[])[1];
  const p=(typeof panels!=='undefined'?panels:[]).find(x=>x[0]===slug);
  const wrap=document.querySelector('.panelhero .wrap');
  if(!p||!wrap||wrap.querySelector('.panelhero-logo-3d'))return;
  const ext={'8k-strong':'webp','trex-iptv':'png','lion-ott':'png','promax-4k-ott':'png','crystal-ott':'png','dream-4k-iptv':'png','mega-ott':'png','dino-iptv':'png','nexon-iptv':'png','magnum-golden-ott':'png','tivione':'png','ultra-8k-ott':'png','infinity-iptv':'png','eagle-iptv':'png','max-ott':'png'};
  const frame=document.createElement('div');
  frame.className=`panelhero-logo-3d panel-logo-${p[0]}`;
  frame.innerHTML=`<img class="panelhero-brand" src="/assets/logos/${p[0]}.${ext[p[0]]}?v=10" alt="${p[1]} logo">`;
  wrap.insertBefore(frame,wrap.firstChild);
})();
