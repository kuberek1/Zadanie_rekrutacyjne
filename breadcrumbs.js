let breadcrumbsEl = document.querySelector("#breadcrumbs");

function breadcrumbs(){
    const here = location.href.split('/').slice(3);
    //console.log(here);
   
    const parts = [{"text": 'Home', "link": '/'}];
   // console.log(parts)

   
    for (let i = 0; i < here.length; i++) {
        const part = here[i];
       // console.log(part);

        const text = decodeURIComponent(part).split('.')[0];
       // console.log(text);

        const link = '/' + here.slice(0, i + 1).join('/');
      //  console.log(link);

        parts.push({"text": text, "link": link});
      //  console.log(parts);
    }
    return parts.map((part) => {
        return "<a href=\"" + part.link + "\">" + part.text + "</a>"
    }).join('<span style="padding: 5px"> > </span>');
}

breadcrumbsEl.innerHTML = breadcrumbs();



