// Sprint 20 - Multiple applications

module.exports = function (router) {

    router.post("/20/multiple-applications/continue", function (req, res) {
    
    var continueApplication = req.session.data["continue-an-application"];

    if (continueApplication == "join-an-academy-trust") {
        res.redirect("/20/multiple-applications/single-school-overview");
    } else if (continueApplication == "form-an-academy-trust") {
        res.redirect("/20/multiple-applications/multi-school-overview");
    } else {
        res.redirect("/20/multiple-applications/what-are-you-applying-to-do")
    }

    });

}