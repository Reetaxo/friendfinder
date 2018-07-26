var friends = require("../data/friends");

module.exports - function(app) {
app.get("/api/answers", function(req, res){
    res.JSON(friends);
});

app.post("/api/answers", function(req, res){


})

}