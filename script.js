//You can edit ALL of the code here
const rootElem = document.getElementById("root");
const allEpisodes = getAllEpisodes();
const searchBox = document.getElementById("liveSearch");
const episodeType = document.createElement("kinds");
const xp = document.getElementById("joyfulTime");
xp.appendChild(episodeType);
const prime = document.getElementById("review");
const showsDropdown = document.getElementById("show");
// const allShows = document.getElementById("showsListing");
const allShows = getAllShows();

// create element in html
//declare a variable with that html element
// populate drop menu with shows
// get value of selected show

function setup() {
  makePageForShows(allShows);
}

function makePageForEpisodes(episodeList) {
  episodeList.forEach((item) => {
    let image;
    if (item.image) {
      image = item.image.medium;
    } else {
      image =
        "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png";
    }
    rootElem.insertAdjacentHTML(
      "afterbegin",
      `<div class="episode">
<h2>${item.name}</h2></div>
<img src="${image}" alt="">
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
    let input = e.target.value;
    e.preventDefault();
    const searchString = e.target.value.toLowerCase();
    console.log(episodeList);
    let filteredEpisodes = episodeList.filter((epis) => {
      return (
        epis.name.toLowerCase().includes(searchString) ||
        epis.summary.toLowerCase().includes(searchString)
      );
    });
    rootElem.innerHTML = "";
    episodeType.innerHTML = `${filteredEpisodes.length}/${episodeList.length} results found.`;
    //the number of search results.
    makePageForEpisodes(filteredEpisodes);
  });
}

function dropDownEpisodes(arr) {
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
dropDownEpisodes(allEpisodes);

function selectMenu(epList) {
  prime.addEventListener("change", (e) => {
    e.preventDefault();
    const searchId = Number(e.target.value);
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

// getAllShows();

// fetch("https://api.tvmaze.com/shows/SHOW_ID/episodes")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {});

function listShows(shows) {
  let tvShow = `<option value='1' >See all shows</option>`;
  // shows.sort((items) =>
  shows.sort(sortShows).forEach((item) => {
    tvShow += `<option value="${item.id}"> 
    ${item.name}</option>`;
  });

  showsDropdown.innerHTML = "";
  //replace prime with show

  showsDropdown.insertAdjacentHTML("afterbegin", tvShow);
}

function sortShows(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}

function dropDownShows(shows) {
  showsDropdown.addEventListener("change", (m) => {
    const searchId = +m.target.value;
    if (searchId === 1) {
      rootElem.innerHTML = "";
      makePageForShows(allShows);
      return "";
    }
    fetch(`https://api.tvmaze.com/shows/${searchId}/episodes`)
      .then(function (response) {
        let parsed = response.json();
        return parsed;
      })
      .then(function (episodes) {
        makePageForEpisodes(episodes);
        dropDownEpisodes(episodes);
        selectMenuEpisodes(episodes);
        searchFunction(episodes);
      });
  });
  listShows(shows);
}
dropDownShows(allShows);

function selectMenuEpisodes(epList) {
  //taking epList
  prime.addEventListener("change", (e) => {
    e.preventDefault();
    const searchId = Number(e.target.value);
    let filteredList = [];
    console.log(searchId);
    if (searchId === 1) {
      // rootElem.innerHTML = "";
      // makePageForShows(allShows);
      filteredList = epList;
      // return "";
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

function makePageForShows(allShows) {
  // allShows.addEventListener("change", (e) => {
  allShows.forEach((item) => {
    let image;
    if (item.image) {
      image = item.image.medium;
    } else {
      image =
        "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png";
    }
    rootElem.insertAdjacentHTML(
      "afterbegin",
      `<div class="episode">
<h2>${item.name}</h2></div>
<img src="${image}" alt="">
<br>
${item.summary}

<br>
<a href=${item.url}>Check the source</a>
</div>`
    );
  });
}
