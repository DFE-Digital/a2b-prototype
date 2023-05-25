// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
// 

const govukPrototypeKit = require("govuk-prototype-kit");
const { resetState } = require("govuk-prototype-kit/lib/routes/api");
const router = govukPrototypeKit.requests.setupRouter();


require("./routes/sprint-00/application-owner.js")(router);
require("./routes/sprint-00/are-you-applying-to-convert-more-than-one-school.js")(router);
require("./routes/sprint-00/create-an-application.js")(router);

require("./routes/sprint-00/feedback.js")(router);
require("./routes/sprint-00/multiple-applications.js")(router);

