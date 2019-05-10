var data = [];
var grid = document.querySelector('#gridMain');

fetch("https://5cd4377db231210014e3d67b.mockapi.io/api/video")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    rivets.bind(grid, {videos: data});

    

    var searchBar = document.querySelector("#searchVideos");
    var videos = document.querySelectorAll(".video-card");
    var videoData = document.querySelectorAll(".video-name");
    var searchValue;

    searchBar.addEventListener("input", function(event) {
      console.log(searchValue);
      searchValue = event.target.value.toLowerCase();
      for (let i = 0; i < videos.length; i++) {
        if (
          !searchValue ||
          videoData[i].textContent.toLowerCase().indexOf(searchValue) > -1
        ) {
          videos[i].style["display"] = "block";
        } else {
          videos[i].style["display"] = "none";
        }
      }
    });
  });

  //var searchBtn = document.querySelector("#searchVideos");