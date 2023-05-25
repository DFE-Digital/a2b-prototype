// Sprint 00 - Feedback

module.exports = function (router) {

  router.post("/sprint-00/what-are-you-applying-to-do", function (req, res) {
    var whatAreYouApplyingToDo = req.session.data["what-are-you-applying-to-do"];

    if (whatAreYouApplyingToDo == "form") {
      res.redirect("/sprint-00/fam/the-application-owner");
    } else {
      res.redirect("/sprint-00/jam/are-you-applying-to-convert-more-than-one-school");
    }
  });


}