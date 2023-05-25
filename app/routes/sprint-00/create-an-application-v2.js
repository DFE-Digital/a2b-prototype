// Sprint 22 - Create application v1

module.exports = function (router) {
  var dir = "/22/create-an-application-v2/";

  router.post(dir + "what-are-you-applying-to-do", function (req, res) {
    var fname = req.session.data["what-are-you-applying-to-do"];
    if (fname == "join") {
      res.redirect(dir + "jam/are-you-applying-to-convert-more-than-one-school");
    } else {
      res.redirect(dir + "what-are-you-applying-to-do");
    }
  });

  router.post(
    dir + "jam/are-you-applying-to-convert-more-than-one-school",
    function (req, res) {
      var fname =
        req.session.data["are-you-applying-to-convert-more-than-one-school"];
      if (fname == "no") {
        res.redirect(dir + "jam/are-you-applying-to-convert-more-than-one-school");
      } else {
        res.redirect(dir + 'jam/the-application-owner');
      }
    }
  );

  router.post(dir + "jam/the-application-owner", function (req, res) {
    var fname = req.session.data["who-will-be-the-owner-of-the-application"];
    if (fname == "me") {
      res.redirect(dir + "jam/what-is-the-name-of-the-trust");
    } else {
      res.redirect(dir + "jam/the-application-owner");
    }
  });


    router.post(dir + "jam/add/sent", function (req, res) {
      var fname =
        req.session.data["would-you-like-to-invite-more-contributors"];
      if (fname == "no") {
        req.session.data["add-to-jam"] = true;
        res.redirect(dir + "jam/jam-overview");
      } else {
        res.redirect(dir + "jam/add/sent");
      }
    });


};
