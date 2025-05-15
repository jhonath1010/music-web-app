/**
 * songs.js
 *
 * Description:
 * Contains the list of song objects used by the app.
 * Each song includes an ID, title, artist ID (foreign key), release year, duration,
 * media URL, explicit content flag, and image URL.
 * 
 * Songs are grouped and associated with artists defined in artists.js.
 *
 * Author: Jhonatan Lopez
 * Date: July 29, 2024
 */
window.songs = [
  {
    songId: "SID-13423100",
    artistId: "AID-100",
    title: "MONACO",
    released: 2022,
    duration: 196,
    mediaUrl:
      "https://www.youtube.com/watch?v=Pt0gH4H_NQwube.com/watch?v=dQw4w9WgXcQ",
    isExplicit: true,
    image:
      "https://images.unsplash.com/photo-1657305651332-12fea33813ca?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-24732100",
    artistId: "AID-100",
    title: "VETE",
    released: 2018,
    duration: 192,
    mediaUrl: "https://www.youtube.com/watch?v=f5aDUB1NCnk",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-33472100",
    artistId: "AID-100",
    title: "CALLAÍTA",
    released: 2021,
    duration: 250,
    mediaUrl: "https://www.youtube.com/watch?v=acEOASYioGY",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1701486485363-9d328ff5758a?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-49375100",
    artistId: "AID-100",
    title: "SAFAERA",
    released: 2017,
    duration: 297,
    mediaUrl: "https://www.youtube.com/watch?v=jCQ_6XbATPc",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1697577504575-5bee362e57a2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    songId: "SID-57736100",
    artistId: "AID-100",
    title: "DÁKITI",
    released: 2020,
    duration: 205,
    mediaUrl: "https://www.youtube.com/watch?v=TmKh7lAwnBI",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1711780606168-acc97bf97cb0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-67583100",
    artistId: "AID-100",
    title: "YONAGUNI",
    released: 2018,
    duration: 206,
    mediaUrl: "https://www.youtube.com/watch?v=doLMt10ytHY",
    isExplicit: true,
    image:
      "https://images.unsplash.com/photo-1720720011714-20dd3626369c?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  /*    ARTIST #2 songs  J Balvin   */
  {
    songId: "SID-13423300",
    artistId: "AID-200",
    title: "Mi Gente",
    released: 2021,
    duration: 185,
    mediaUrl: "https://www.youtube.com/watch?v=wnJ6LuUFpMo",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-24732300",
    artistId: "AID-200",
    title: "Ay Vamos",
    released: 2014,
    duration: 265,
    mediaUrl: "https://www.youtube.com/watch?v=R1369wPOJ78",
    isExplicit: true,
    image:
      "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-33472300",
    artistId: "AID-200",
    title: "Ginza",
    released: 2012,
    duration: 171,
    mediaUrl: "https://www.youtube.com/watch?v=zZjSX01P5dE",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-49375300",
    artistId: "AID-200",
    title: "Safari",
    released: 2011,
    duration: 252,
    mediaUrl: "https://www.youtube.com/watch?v=JWESLtAKKlU",
    isExplicit: true,
    image:
      "https://images.unsplash.com/photo-1640379878948-72b9db349e17?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    songId: "SID-57736300",
    artistId: "AID-200",
    title: "6 AM",
    released: 2015,
    duration: 256,
    mediaUrl: "https://www.youtube.com/watch?v=yUV9JwiQLog",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-67583300",
    artistId: "AID-200",
    title: "Bobo",
    released: 2020,
    duration: 166,
    mediaUrl: "https://www.youtube.com/watch?v=0GvLP2C2w9U",
    isExplicit: true,
    image:
      "https://images.unsplash.com/photo-1639503611585-1054af5dbfab?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  /*    ARTIST #3 songs     */
  {
    songId: "SID-13423300",
    artistId: "AID-300",
    title: "El Perdón",
    released: 2020,
    duration: 196,
    mediaUrl: "https://www.youtube.com/watch?v=uU_FFtbCcLc",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1633636611822-30b3aece0748?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-24732300",
    artistId: "AID-300",
    title: "Hasta el Amanecer",
    released: 2020,
    duration: 196,
    mediaUrl: "https://www.youtube.com/watch?v=kkx-7fsiWgg",
    isExplicit: true,
    image:
      "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-33472300",
    artistId: "AID-300",
    title: "Travesuras",
    released: 2020,
    duration: 196,
    mediaUrl: "https://www.youtube.com/watch?v=OxxggwHFj7M",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-49375300",
    artistId: "AID-300",
    title: "El Amante",
    released: 2020,
    duration: 196,
    mediaUrl: "https://www.youtube.com/watch?v=YG2p6XBuSKA",
    isExplicit: true,
    image:
      "https://images.unsplash.com/photo-1643255083197-18721220670e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    songId: "SID-57736300",
    artistId: "AID-300",
    title: "Te Robaré",
    released: 2020,
    duration: 196,
    mediaUrl: "https://www.youtube.com/watch?v=aA_kuFTV-P8",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1558624232-75ee22af7e67?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    songId: "SID-73926300",
    artistId: "AID-300",
    title: "Polvo",
    released: 2020,
    duration: 196,
    mediaUrl: "https://www.youtube.com/watch?v=XMt0cubAY6s",
    isExplicit: false,
    image:
      "https://images.unsplash.com/photo-1635586409095-b5d87cebe12b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];
