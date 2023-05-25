// Sprint 00 - Feedback

module.exports = function (router) {

  router.post("/sprint-00/feedback/how-can-we-help", function (req, res) {
    var howCanWeHelp = req.session.data["how-can-we-help"];

    if (howCanWeHelp == "I want to report a problem with this form") {
      res.redirect("/sprint-00/feedback/problem");
    } else if (howCanWeHelp == "I need help with an application") {
      res.redirect("/sprint-00/feedback/help");
    } else {
      res.redirect("/sprint-00/feedback/feedback");
    }
  });


}