/**
 * Music Explorer Web App
 * 
 * Description:
 * A dynamic JavaScript application that allows users to browse artists and songs.
 * Features artist filtering, song card generation, and external media linking.
 * 
 * Developed by: Jhonatan Lopez
 * Date: July 29, 2024
 */


// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

window.onload = function () {
  console.log("Content Loaded");

  const navigation = document.querySelector("#menu");
  let defaultButton;

  artists.forEach((artist, i) => {
    const button = createArtistButton(artist);
    navigation.appendChild(button);

    if (i === 0) {
      defaultButton = button;
    }

    button.onclick = () => handleArtistClick(artist);
  });

  if (defaultButton) {
    defaultButton.click();
  }
};

function createArtistButton(artist) {
  let button = document.createElement("button");
  button.innerText = artist.name;
  return button;
}

function handleArtistClick(artist) {
  displayArtistInfo(artist);
  displayArtistSongs(artist);
}

function displayArtistInfo(artist) {
  let displayname = document.querySelector("#selected-artist");
  displayname.innerHTML = "";

  let para = document.createElement("p");
  para.innerHTML = `${artist.name} (`;

  artist.links.forEach((link, index) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.innerText = link.name;
    para.appendChild(anchor);

    if (index < artist.links.length - 1) {
      para.innerHTML += `, `;
    } else {
      para.innerHTML += ")";
    }
  });

  displayname.appendChild(para);
}

function displayArtistSongs(artist) {
  let outerDiv = document.querySelector("#outer");
  outerDiv.innerHTML = "";
  let navegation = document.querySelector("main");

  const filteredSongs = songs.filter((song) => song.artistId.includes(artist.artistId));

  //element create for main:
  //function for creating cards
  filteredSongs.forEach((song) => {
    let divCards = document.createElement("div");
    let divCardsDetails = document.createElement("div");
    let detailsH2 = document.createElement("h2");
    let detailsTime = document.createElement("time");
    let detailsSpan = document.createElement("span");
    let image = document.createElement("img");

    let ancherImages = document.createElement("a");
    ancherImages.href = song.mediaUrl;

    ancherImages.target = "_blank";
    console.log(ancherImages);

    divCards.className = "cards";
    divCardsDetails.className = "details";
    detailsH2.innerText = song.title;
    image.src = song.image;

    let minutes = Math.floor(song.duration / 60);
    let seconds = song.duration % 60;
    detailsSpan.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    detailsTime.innerText = song.released;

    divCardsDetails.appendChild(detailsH2);
    divCardsDetails.appendChild(detailsTime);
    divCardsDetails.appendChild(detailsSpan);

    ancherImages.appendChild(image);
    divCards.appendChild(ancherImages);
    divCards.appendChild(divCardsDetails);

    outerDiv.appendChild(divCards);
    divCards.onclick = () => handleSongClick(song);
  });
  console.log(outerDiv);
  navegation.appendChild(outerDiv);
}

function handleSongClick(song) {
  console.log("Clicked");
  console.log(song);
}
