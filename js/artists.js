/**
 * artists.js
 *
 * Description:
 * Defines a list of artist objects used throughout the app.
 * Each artist includes a unique ID, name, and an array of external links.
 *
 * Author: Jhonatan Lopez
 * Date: July 29, 2024
 */
window.artists = [
  // Artist #1
  {
    artistId: "AID-100",
    name: "Bad Bunny",
    links: [
      { url: "https://www.instagram.com/badbunnypr/?hl=en", name: "Instagram" },
      { url: "https://en.wikipedia.org/wiki/Bad_Bunny", name: "Wikipedia" }
    ]
  },

  // Artist #2
  {
    artistId: "AID-200",
    name: "J Balvin",
    links: [
      { url: "https://www.instagram.com/jbalvin/?hl=en", name: "Instagram" },
      { url: "https://en.wikipedia.org/wiki/J_Balvin", name: "Wikipedia" }
    ]
  },

  // Artist #3
  {
    artistId: "AID-300",
    name: "Daddy Yankee",
    links: [
      { url: "https://www.instagram.com/daddyyankee/", name: "Instagram" },
      { url: "https://en.wikipedia.org/wiki/Daddy_Yankee", name: "Wikipedia" }
    ]
  }
];
