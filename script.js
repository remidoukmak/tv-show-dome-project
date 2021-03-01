//You can edit ALL of the code here
const rootElem = document.getElementById("root");
const allEpisodes = getAllEpisodes();
const searchBox = document.getElementById("Livesearch");
const episodeType = document.createElement("kinds");
const xp = document.getElementById("joyfulTime");
xp.appendChild(episodeType);
const prime = document.getElementById("review");
const showItem = document.getElementById("show");

// create element in html
//declare a variable with that html element
// populate it drop menu with shows
// get value of selected show

function setup() {
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  episodeList.forEach((item) => {
    rootElem.insertAdjacentHTML(
      "afterbegin",
      `<div class="episode">
<h2>${item.name}</h2></div>
<img src="${item.image.medium}" alt="">
<br>
${item.summary}
${item.season.toString().padStart(2, 0)}E${item.number.toString()}
<br>
<a href=${item.url}>Check the source</a>
</div>`
    );
  });
}

//creates search box and functionality
function searchFunction(episodeList) {
  searchBox.addEventListener("input", (e) => {
    e.preventDefault();
    const searchString = e.target.value.toLowerCase();
    let filteredEpisodes = episodeList.filter((epis) => {
      return (
        epis.name.toLowerCase().includes(searchString) ||
        epis.summary.toLowerCase().includes(searchString)
      );
    });
    rootElem.innerHTML = "";
    pancakes.innerHTML = `${filteredEpisodes.length}/${episodeList.length} results found.`;
    //the number of search results.
    makePageForEpisodes(filteredEpisodes);
  });
}

// function searchForEpisodes(epList) {
//   searchBox.addEventListener("input", (e) => {
//     // document.getElementById("root").innerHTML = "";
//     const searchEp = e.target.value.toLowerCase();
//     const filterEpList = epList.filter((episode) => {
//       return (
//         episode.name.toLowerCase().includes(searchEp) ||
//         episode.summary.toLowerCase().includes(searchEp)
//       );
//     });
//     rootElem.innerHTML = "";
//     makePageForEpisodes(filterEpList);
//   });
// }
searchFunction(allEpisodes);

// rootElem.innerHTML = "";

//select drop down bar

function dropDown(arr) {
  let drops = `<option value='1' >See all episodes</option>`;
  arr.forEach((item) => {
    drops += `<option value="${item.id}"> 
      S${item.season.toString().padStart(2, 0)}
      E${item.number.toString().padStart(2, 0)}
      ${item.name}</option>`;
  });
  prime.innerHTML = "";
  prime.insertAdjacentHTML("afterbegin", drops);
}
dropDown(allEpisodes);

searchFunction(allEpisodes);
function selectMenu(epList) {
  prime.addEventListener("change", (e) => {
    e.preventDefault();
    const searchId = +e.target.value;
    let filteredList = [];
    console.log(searchId);
    if (searchId === 1) {
      filteredList = epList;
    } else {
      filteredList = epList.filter((episode) => {
        return episode.id === searchId;
      });
    }
    console.log(searchId);
    rootElem.innerHTML = "";
    makePageForEpisodes(filteredList);
  });
}
selectMenu(allEpisodes);
window.onload = setup;

// fetch("https://xkcd.now.sh/?comic=latest")
//   .then(function (response) {
//     let parsed = response.json();
//     console.log(parsed);
//     return parsed;
//   })
//   .then(function (response) {
//     console.log(response);
//     boxImg.src = response.img;
//   })
//   .catch((err) => {
//     console.log(err);
//     renderError(`Something wen wrong ${err.message}`);
//   });

getAllShows();

const allShows = getAllShows();
console.log(allShows);

// fetch("https://api.tvmaze.com/shows/SHOW_ID/episodes")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {});

function listShows(shows) {
  let tvShow = `<option value='1' >See all shows</option>`;
  shows.sort(items => items.forEach((items) => {
    tvShow += `<option value="${items.id}"> 
      // S${item.season.toString().padStart(2, 0)}
      // E${item.number.toString().padStart(2, 0)}
      ${item.name}</option>`;
  }));
    
  
  show.innerHTML = "";
  //replace prime with show

  show.insertAdjacentHTML("afterbegin", tvShow);
}


function dropDown(shows) {
  selection.addEventListener("change", (m))) => {
    const searchId = +m, target.value;
    let filteredlist = [];
    if (searchId === 0) {
      filteredList = shows;
    }
    else {
      filteredList = shows.filter(popcorn) => {
        return popcorn.id = searchId;
      };
    }
    
    show.innerHTML = "";
    makePageForEpisodes(filteredList);
    
}


function selectMenu(epList) {
  //taking epList
  prime.addEventListener("change", (e) => {
    e.preventDefault();
    const searchId = +e.target.value;
    let filteredList = [];
    console.log(searchId);
    if (searchId === 1) {
      filteredList = epList;
    } else {
      filteredList = epList.filter((episode) => {
        return episode.id === searchId;
      });
    }
    console.log(searchId);
    rootElem.innerHTML = "";
    makePageForEpisodes(filteredList);
  });
}
