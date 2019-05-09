// 1. Get some data from an API

var data = [];

fetch('https://5cd4377db231210014e3d67b.mockapi.io/api/video')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        //console.log(myJson);
        data = myJson;
        updateUI('video-', data);
        console.log(data.length);
        data.forEach(function (item){
            console.log(item.url, item.avatar, item.name);
        })
    });

// 2. Use that data on a web page

function updateUI(className, data){
    //debugger;
    // grab all img
    var imgs = Array.from(document.getElementsByClassName(className + 'img'));
    // change the img
    imgs.forEach(function(item, index){
        item.src = data[index].avatar;
    });
    // grab all name
    var names = Array.from(document.getElementsByClassName(className + 'name'));
    // change the name
    // imgs.forEach(function(item, index){
    //     item.src = data[index].name;
    // });
}
