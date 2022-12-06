const breadcrumbsEl = document.querySelector("#breadcrumbs");

function breadcrumbs(){
    const here = location.href.split('/').slice(3);
    const parts = [{"text": 'Home', "link": '/'}];
    for (let i = 0; i < here.length; i++) {
        const part = here[i];
        const text = decodeURIComponent(part).split('.')[0];
        const link = '/' + here.slice(0, i + 1).join('/');
        parts.push({"text": text, "link": link});}
    return parts.map((part) => {
        return "<a href=\"" + part.link + "\">" + part.text + "</a>"
    }).join('<span style="padding: 5px"> / </span>');
}

breadcrumbsEl.innerHTML = breadcrumbs();



