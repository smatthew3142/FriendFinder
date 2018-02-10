// ===============================================================================
// LOAD DATA


var friendList = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });


  // API POST Requests
  
  app.post("/api/friends", function(req, res) {
    
    var newFriendScore = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var friendMatch = 0;

    console.log(friendList);
    console.log(newFriendScore);
    console.log(scoresArray);

    for (var i = 0; i < friendList.length; i++){

      var difference = 0;

      for (var j = 0; j < newFriendScore.length; j++){

        difference += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScore[j])));
      }
      scoresArray.push(difference);
    }

    for (var i = 0; i < scoresArray.length; i++){

      if(scoresArray[i] <= scoresArray [friendMatch]){

        friendMatch = i;
      }
    }

    var recommendFriend = friendList[friendMatch];
    res.json(recommendFriend);

    friendList.push(req.body);

  });
};
