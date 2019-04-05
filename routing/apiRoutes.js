
var path = require('path');
var friends = require('../data/friends.js');

// this is the api get request. Gets data from friends.js file. Where we made our friends.
module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

// api post request 
    app.post("/api/friends", function(req, res) {
        // variables that will keep track of the data 
        var newfriend = req.body;
        var friendDifference = 99;
        var bestMatch = 0;
        // algorithm 
        for (let i = 0; i < friends.length; i++) {
            var scoreDiff = 0;

            for (let j = 0; j < friends[i].scores.length; j++) {
                scoreDiff += Math.abs(newfriend.scores[j] - friends[i].scores[j]);
                }
                // figures out the score diff 
                if (scoreDiff < friendDifference) {
                    match = friends[i];
                    friendDifference = scoreDiff;
                }
        }
        // push method that will add the newfriend to the friends file. 
        friends.push(newfriend);
        res.json(bestMatch);

      });
    };

