async function include(id, file){
  const el = document.getElementById(id);
  if(!el) return;
  async function tryFetch(url){
    try{
      const r = await fetch(url, {cache:'no-store'});
      if(!r.ok) throw new Error();
      return await r.text();
    }catch(e){ return null; }
  }
  const candidates = [
    `components/${file}`,
    `${file}`,
    `../${file}`,
    `/components/${file}`,
    `./${file}`
  ];
  for (const url of candidates){
    const html = await tryFetch(url);
    if (html){ el.innerHTML = html; return; }
  }
  console.error('No se pudo incluir', file, 'desde', window.location.href);
}
include('site-header','header.html');
include('site-footer','footer.html');
