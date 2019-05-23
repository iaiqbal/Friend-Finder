const friendData = require("../app/data/friends.js");

function apiRoutes(app) {


app.get("/api/friends" , function(req, res) {
    res.json(friendData);
});

// app.post("/api/friends", function(req, res) {
//    if (friendData.length > 1){
//     friendData.push(req.body);
//     res.json(true);
//    }

//    else {
//     res.json(false);
//    }
// });

// apiRoutes();

}

module.exports = apiRoutes