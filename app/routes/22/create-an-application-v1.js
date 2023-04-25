// Sprint 22 - Create application v1

module.exports = function (router) {

  var dir = "/22/create-an-application-v1/";
  
  router.post(dir + "what-are-you-applying-to-do", function (req, res) {
    var fname = req.session.data["what-are-you-applying-to-do"];
    if (fname == "join") {
      if (!req.session.data["jam"]) {
        req.session.data["jam"] = 1;
        res.redirect(dir + "jam/what-is-the-name-of-your-school");
      } else {
        req.session.data["jam"] = 2;
        res.redirect(dir + "jam-2/what-is-the-name-of-your-school");
      }
    } else {
      req.session.data["fam"] = true;
      res.redirect(dir + "fam/the-application-owner");
    }
  });

  router.post(dir + "fam/the-application-owner", function (req, res) {
    var fname = req.session.data["who-will-be-the-owner-of-the-application"];
    if (fname == "me") {
      res.redirect(dir + "fam/what-is-the-name-of-the-trust");
    } else {
      res.redirect(dir + "fam/the-application-owner");
    }
  });

  router.post(dir + "fam/are-you-creating-more-than-one-application", function (req, res) {
    var fname = req.session.data["are-you-creating-more-than-one-application"];
    if (fname == "no") {
      req.session.data["famx2"] = false;
      res.redirect(dir + "fam/fam-overview");
    } else {
      req.session.data["famx2"] = true;
      res.redirect(dir + "your-applications");
    }
  });

  router.post(dir + "jam/are-you-applying-to-convert-more-than-one-school", function (req, res) {
    var fname = req.session.data["are-you-applying-to-convert-more-than-one-school"];
    if (fname == "no") {
      res.redirect(dir + "jam/wise-owl-overview");
    } else {
      res.redirect(dir + "your-applications");
    }
  });

  router.post(dir + "your-applications", function (req, res) {
    var fname = req.session.data["continue-an-application"];
    if (fname == "start-a-new-application") {
      res.redirect(dir + "what-are-you-applying-to-do");
    } else if (fname == "fam") {
      res.redirect(dir + "fam/fam-overview");
    } else if (fname == "oak-park") {
      res.redirect(dir + "jam-2/oak-park-overview");
    } else if (fname == "wise-owl") {
      res.redirect(dir + "jam/wise-owl-overview");
    } else {
      res.redirect(dir + "your-applications");
    }
  });

  router.post(dir + "fam/what-is-the-name-of-the-trust", function (req, res) {
    
    if (!req.session.data["jam"]) {
      res.redirect(dir + "fam/are-you-creating-more-than-one-application");
    } else {
      res.redirect(dir + "your-applications");
    }
  });

  router.post(dir + "jam/is-this-the-correct-trust", function (req, res) {
    if (!req.session.data["fam"]) {
      res.redirect(dir + "jam/are-you-applying-to-convert-more-than-one-school");
    } else {
      res.redirect(dir + "your-applications");
    }
  });

  router.post(dir + "fam/add/sent", function (req, res) {
    var fname = req.session.data["would-you-like-to-invite-more-contributors"];
    if (fname == "no") {
      req.session.data["add-to-fam"] = true;
      res.redirect(dir + "fam/fam-overview");
    } else {
      res.redirect(dir + "fam/add/sent");
    }
  });

  router.post(dir + "fam/add/would-you-like-to-add-yourself-as-a-contributor", function (req, res) {
    var fname = req.session.data["would-you-like-to-add-yourself-as-a-contributor"];
    if (fname == "no") {
      res.redirect(dir + "fam/add/who-would-you-like-to-invite-to-contribute");
    } else {
      res.redirect(dir + "fam/add/would-you-like-to-add-yourself-as-a-contributor");
    }
  });

  router.post(dir + "fam/add/montgomery-overview", function (req, res) {
    var fname = req.session.data["would-you-like-to-added-to-montgomery"];
    if (fname == "no") {
      res.redirect(dir + "fam/add/montgomery-contributors");
    } else {
      res.redirect(dir + "fam/add/montgomery-overview");
    }
  });

};