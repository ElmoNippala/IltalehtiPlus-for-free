# IltalehtiPlus-for-free

for reading iltalehti plus articles for free on iltalehti.fi

can also be used by a bookmarklet 

        javascript:(()=>{var base=document.querySelector(".article-body");for(var art of(document.querySelector(".article-body").innerHTML="",window.App.state.articles[Object.keys(window.App.state.articles)[0]].items.body))if("paragraph"==art.type){var pdata=art.items.map(e=>null!=e.text?e.text:e.items.map(e=>e.text).join(""));base.insertAdjacentHTML("beforeend",`<p class='paragraph'>${pdata}</p>`)}else if("image"==art.type)base.insertAdjacentHTML("beforeend",createImg(art));else if("subheadline"==art.type)base.insertAdjacentHTML("beforeend",`<h3>${art.text}</h3>`);else if("blockquote"==art.type){var quote=art.items.map(e=>e.text).join("");base.insertAdjacentHTML("beforeend",`<p style="font-size: 1.2em"><i>&quot;${quote}&quot;</i></p>`)}function createImg(e){return `<div class="article-image gallery center"><div class="article-image-container" style="padding-bottom: 66.6071%;"><img class="image image-show" src="${e.urls.default}" alt="${e.properties.caption}"></div><div class="media-caption"><span class="caption-text">${e.properties.caption}</span><span class="media-source">${e.properties.source}</span></div></div>`}})()
