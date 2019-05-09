var data = [];

fetch('https://5cd4377db231210014e3d67b.mockapi.io/api/video')
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    data = myJson;
    data.targetId = "#gridMain";
    updateUI([createVideoCard], [data]);
});
        