// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
// 

const govukPrototypeKit = require("govuk-prototype-kit");
const { resetState } = require("govuk-prototype-kit/lib/routes/api");
const router = govukPrototypeKit.requests.setupRouter();

require("./routes/20/feedback.js")(router);
require("./routes/20/multiple-applications.js")(router);