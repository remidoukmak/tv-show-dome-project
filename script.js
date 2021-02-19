//You can edit ALL of the code here
const rootElem = document.getElementById("root");
const allEpisodes = getAllEpisodes();
const searchBox = document.getElementById("Livesearch");
const episodeType = document.createElement("kinds");
const xp = document.getElementById("joyfulTime");
xp.appendChild(episodeType);
const prime = document.getElementById("review");

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

function searchForEpisodes(epList) {
  searchBox.addEventListener("input", (e) => {
    // document.getElementById("root").innerHTML = "";
    const searchEp = e.target.value.toLowerCase();
    const filterEpList = epList.filter((episode) => {
      return (
        episode.name.toLowerCase().includes(searchEp) ||
        episode.summary.toLowerCase().includes(searchEp)
      );
    });
    rootElem.innerHTML = "";
    makePageForEpisodes(filterEpList);
  });
}
searchForEpisodes(allEpisodes);

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

// // eslint-disable-next-line no-undef
// const allEpisodes = getAllEpisodes();
// const searchBox = document.getElementById("livesearch");
// const pancakes = document.createElement("span");
// const rootElem = document.getElementById("root");
// const clive = document.getElementById("pie");
// const xp = document.getElementById("chocolatePancakes");
// xp.appendChild(pancakes);
// function setup() {
//   makePageForEpisodes(allEpisodes);
// }
// function makePageForEpisodes(episodeList) {
//   episodeList.forEach((item) => {
//     rootElem.insertAdjacentHTML(
//       "afterbegin",
//       `<div class="episode">
//       <h2>${item.name}</h2><div>
//       <img src="${item.image.medium}" alt="">
//       <br>
//       ${item.summary}
//       S${item.season.toString().padStart(2, 0)}
//       E${item.number.toString().padStart(2, 0)}
//       <br>
//       <a href=${item.url}>Check the source</a>
//     </div>`
//     );
//   });
// }
// //creates search box and functionality
// function searchFunction(episodeList) {
//   searchBox.addEventListener("input", (e) => {
//     e.preventDefault();
//     const searchString = e.target.value.toLowerCase();
//     let filteredEpisodes = episodeList.filter((epis) => {
//       return (
//         epis.name.toLowerCase().includes(searchString) ||
//         epis.summary.toLowerCase().includes(searchString)
//       );
//     });
//     rootElem.innerHTML = "";
//     pancakes.innerHTML = `${filteredEpisodes.length}/${episodeList.length} results found.`; //the number of search results.
//     makePageForEpisodes(filteredEpisodes);
//   });
// }
// //select drop down bar
// function dropDown(arr) {
//   let drops = "";
//   arr.forEach((item) => {
//     drops += `<option value="${item.id}">${item.name}</option>`;
//   });
//   clive.innerHTML = "";
//   clive.insertAdjacentHTML("afterbegin", drops);
// }
// dropDown(allEpisodes);
// searchFunction(allEpisodes);
// function selectMenu(episodeList) {
//   clive.addEventListener("change", (e) => {
//     e.preventDefault();
//     const searchId = +e.target.value;
//     let filteredList = episodeList.filter((epis) => {
//       return epis.id === searchId;
//     });
//     rootElem.innerHTML = "";
//     makePageForEpisodes(filteredList);
//   });
// }
// selectMenu(allEpisodes);
// window.onload = setup;
