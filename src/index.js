const extraHtml = `
<div class="container externalHtml">
<h3>Html injection experiment</h3>
</div>`;

const importHtmlPage = () => {
    const importCheck = () => {
        if ("import" in document.createElement("link")) {
            // This browser supports HTML5 Imports.
            return true
          }
          return false;
        }
    console.log(importCheck());
    //clean the html using DOMPurify and setto the value of a new elem.
    let elem = document.createElement("div");
    elem.innerHTML = extraHtml;

    console.log(elem);

    document.body.appendChild(elem);
};
importHtmlPage();