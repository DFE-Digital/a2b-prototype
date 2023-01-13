// Sprint 20 - Multiple applications

module.exports = function (router) {

    router.post("/20/multiple-applications/continue", function (req, res) {
    
    var continueApplication = req.session.data["continue-an-application"];

    if (continueApplication == "join-an-academy") {
        res.redirect("/20/multiple-applications/application-overview");
    } else if (continueApplication == "") {
        res.redirect("/20/multiple-applications/continue");
    } else {
        res.redirect("/20/multiple-applications/continue")
    }

    });

}