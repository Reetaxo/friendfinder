var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/answers/", function(req, res){
        console.log("hello");
        res.json(friends);
        
    });

    app.post("/api/survey", function(req, res){
    res.send(req.body);

});

}
// comparing all users using absolute value
// store users and compare other users