const context = require("aws-lambda-mock-context");
var expect = require("chai").expect;
var index = require("../../index");
const config = require('../../config.defaults');

const ctx = context();
const launchRequest = {
  "version": "1.0",
  "context": {
    "System": {
      "application": {
        "applicationId": ""
      },
      "user": {
        "userId": "amzn1.ask.account.AFN54UZDCGEGGRBIN4EKRGHFIW6BGIHCXOFGPUHSDVV446X4DDX4X3QWKV62MKZRZI7ZCQM56X62I3DYX2MD4T4LJB2Y24EVDA24HUBPJYNPOTK4QLP3CKYX4TOETDPDMTCARLZBEJF5E3IS5WWSL5CIMYFIAZNXMD45PLG35RDJ7A3SLMB6GJJ2BFKM77TU54WJQ62V5UK4QRY"
      },
      "apiEndpoint": "https://api.amazonalexa.com"
    }
  },
  "request": {
    "type": "LaunchRequest",
    "requestId": "EdwRequestId.4e05be6d-c9bf-4936-8742-8e6f5c4d7e32",
    "timestamp": "2018-01-09T13:28:56Z"
  }
};

describe("Hello Intent Testing", function () {
  var speechResponse = null;
  var speechError = null;

  beforeEach(function (done) {
    // let applicationIDArray = [];
    // applicationIDArray = config.appIDConfig;
    // applicationIDArray = Object.keys(applicationIDArray).map(function (k) {
    //   return applicationIDArray[k]
    // });
    // applicationIDArray.forEach(function (applicationID) {
      launchRequest.context.System.application.applicationId = "amzn1.ask.skill.afb61f31-43b6-4ec6-b6fb-9536316fb679";
      index.handler(launchRequest, ctx);

      ctx.Promise.then(response => {
        speechResponse = response;
        console.log(speechResponse)
        done();
      })
      .catch(error => {
        speechError = error;
        console.log(speechError)
        done();
      // })
    })


  });

  describe("no error in the response", function () {
    it("should not have error", function () {
      expect(speechError).to.be.null;
    });
  })
});