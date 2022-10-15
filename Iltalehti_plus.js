var base = document.querySelector(".article-body");
document.querySelector(".article-body").innerHTML = "";
for(var art of window.App.state.articles[Object.keys(window.App.state.articles)[0]].items.body){
	if(art.type == "paragraph") {
		var pdata = art.items.map(a => a.text != null ? a.text : a.items.map(b => b.text).join(''));
		base.insertAdjacentHTML('beforeend', `<p class='paragraph'>${pdata}</p>`);
	} else if (art.type == "image"){
		base.insertAdjacentHTML('beforeend', createImg(art));
	} else if (art.type == "subheadline") {
		base.insertAdjacentHTML('beforeend', `<h3>${art.text}</h3>`);
	} else if (art.type == "embed") {
        base.insertAdjacentHTML('beforeend', art.embed_html);
    } else if (art.type == "blockquote") {
		var quote = art.items.map(a => a.text).join('')
		base.insertAdjacentHTML('beforeend', `<p style="font-size: 1.2em"><i>&quot;${quote}&quot;</i></p>`);
	}
}

function createImg(elem) {
	return `<div class="article-image gallery center">
			<div class="article-image-container" style="padding-bottom: 66.6071%;">
				<img class="image image-show" src="${elem.urls.default}" alt="${elem.properties.caption}">
			</div>
			<div class="media-caption">
				<span class="caption-text">${elem.properties.caption}</span><span class="media-source">${elem.properties.source}</span>
			</div>
		</div>`;
}