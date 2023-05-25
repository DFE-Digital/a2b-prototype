// Sprint 00 - Feedback

module.exports = function (router) {

  router.post("/sprint-00/jam/are-you-applying-to-convert-more-than-one-school", function (req, res) {
    var areYouApplyingToConvertMoreThanOneSchool = req.session.data["are-you-applying-to-convert-more-than-one-school"];

    if (areYouApplyingToConvertMoreThanOneSchool == "yes") {
      res.redirect("/sprint-00/fam/the-application-owner");
    } else {
      res.redirect("/sprint-00/jam/what-is-your-role");
    }
  });


}