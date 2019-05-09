function updateUI(components, data){
    components.forEach(function(component, index){
        component(data[index]);
    });
}
// function creationVideoRow(cards){

// }

function createVideoCard(data){
    //debugger;
    var parentEl = document.querySelector(data.targetId);
    var row = document.createElement("div");
    row.classList.add("row");

    data.forEach(function(item){
        var col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("text-center");
        col.classList.add("video-card");

        var img = document.createElement("img");
        img.classList.add("video-img");
        img.src = item.avatar;

        var p = document.createElement("p");
        p.classList.add("video-name");
        var pText = document.createTextNode(item.name);
        p.appendChild(pText);

        var link = document.createElement("a");
        var linkText = document.createTextNode("Watch");
        link.href = item.url;
        link.target = "_blank";
        link.appendChild(linkText);

        col.appendChild(img);
        col.appendChild(p);
        col.appendChild(link);

        row.appendChild(col);
    });

    parentEl.appendChild(row);
}