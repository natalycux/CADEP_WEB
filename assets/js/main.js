async function include(id, file){
    const el = document.getElementById(id);
    if(!el) return;
    // CAMBIO CLAVE AQUÍ: Añadimos una "/" al inicio de la ruta
    const html = await fetch(`/components/${file}`).then(r => r.text());
    el.innerHTML = html;
}
include('site-header','header.html');
include('site-footer','footer.html');
