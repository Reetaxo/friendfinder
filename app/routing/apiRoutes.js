var friends = require("../data/friends");

module.exports - function(app) {
app.get("/api/survey", function(req, res){
    res.JSON(friends);
});

app.post("/api/survey", function(req, res){
res.send(req.body);

})

}