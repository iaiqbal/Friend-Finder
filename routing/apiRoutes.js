const friendData = require("../app/data/friends.js");

function apiRoutes(app) {


app.get("/api/friends" , function(req, res) {
    res.json(friendData);
});

app.post("/api/friends", function(req, res) {
    const friendMatch = {
        name: "",
        photo: "",
        scoreDifference: 500
    };


    const userJSON = req.body;
    const userScore = userJSON.scores;
    const userName = userJSON.name;
    const userPhoto = userJSON.photo;



    const difference = 0;

    // Loop thru friendData array to get the scores
    for (let i = 0; i < friendData.length - 1; i++) {
        difference = 0;


        // Second loop to go through the score and calc the difference + push this value into the difference variable
     

        for (let o = 0; j < 10; j++) {
            difference = Math.abs(parseInt(userScore[o]) - parseInt(friendData[i].scores[o]));


            if (difference <= friendMatch.scoreDifference) {
                friendMatch.name = friendData[i].name;
                friendMatch.photo = friendData[i].photo;
                friendMatch.scoreDifference = difference
            }
        }
    }

    friendData.push(userJSON);
    res.json(friendMatch);
});

}

module.exports = apiRoutes