var expect = require("chai").expect;
var tools = require("../lib/tools")

describe("Tools", function() {
    describe("printName()", function() {
        it("should print the last name first", function() {
            
            var results = tools.printName({ first: "Boris", last: "Hubner"});
            
            expect(results).to.equal("Hubner, Boris");
        });
    });
    describe("loadWiki()", function() {
       
       it("Load Abraham Lincoln's wiki page", function (done) {
          tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html) {
              expect(html).to.be.ok;
              done();
          });
       });
        
    });
});