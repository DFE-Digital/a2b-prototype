// Sprint 00 - Feedback

module.exports = function (router) {

  router.post("/sprint-00/fam/the-application-owner", function (req, res) {
    var applicationOwner = req.session.data["who-will-be-the-owner-of-the-application"];

    if (applicationOwner == "someone-else") {
      res.redirect("/sprint-00/fam/what-is-this-persons-email-address");
    } else {
      res.redirect("/sprint-00/jam/what-is-your-role");
    }
  });


}