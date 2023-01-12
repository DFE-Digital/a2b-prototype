// Sprint 20 - Feedback

module.exports = function (router) {

  router.post("/20/feedback/start", function (req, res) {
    var howCanWeHelp = req.session.data["how-can-we-help"];

    if (howCanWeHelp == "I want to report a problem with this form") {
      res.redirect("/20/feedback/problem");
    } else if (howCanWeHelp == "I need help with an application") {
      res.redirect("/20/feedback/help");
    } else {
      res.redirect("/20/feedback/feedback");
    }
  });


}