
// DATA

var friendList = [
  {
    name:"Smeagol",
    profileImage:"https://vignette.wikia.nocookie.net/lotr/images/7/79/Smeagol.jpeg/revision/latest?cb=20130201224335",
    scores: [
    "5",
    "4",
    "1",
    "1",
    "1",
    "5",
    "2",
    "1",
    "3",
    "1"
    ]
  },

  {
    name:"Gollum",
    profileImage:"https://vignette.wikia.nocookie.net/antagonists/images/6/6a/Gollum.png/revision/latest?cb=20160802222327",
    scores: [
    "5",
    "2",
    "2",
    "4",
    "1",
    "5",
    "5",
    "4",
    "2",
    "1"
    ]
  }

]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendList;
