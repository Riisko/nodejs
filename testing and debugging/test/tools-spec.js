var expect = require("chai").expect;
var tools = require("../lib/tools")
var nock = require("nock");

describe("Tools", function() {
    describe("printName()", function() {
        it("should print the last name first", function() {
            
            var results = tools.printName({ first: "Boris", last: "Hubner"});
            
            expect(results).to.equal("Hubner, Boris");
        });
    });
    describe("loadWiki()", function() {
        
        before(function() {
            nock("https://en.wikipedia.org")
                .get("/wiki/Abraham_Lincoln")
                .reply(200, "Mock Abraham Lincoln Page");
        });
       
       it("Load Abraham Lincoln's wiki page", function (done) {
          tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html) {
              expect(html).to.equal("Mock Abraham Lincoln Page");
              done();
          });
       });
        
    });
});