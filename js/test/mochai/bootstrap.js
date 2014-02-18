requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "baseUrl": "../../app/mochai",
    "paths":{
        "lib":          "../../lib",
        "test":         "../../test/mochai/tests",

        "jquery":       ["//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min", "../../lib/jquery/jquery.min"],

        "sammy":        "../../lib/sammy/lib/sammy",

        // Testing Libraries
        "chai":         "../../lib/chai/chai",
        "mocha":        "../../lib/mocha/mocha",
        "sinon-chai":   "../../lib/sinon-chai/lib/sinon-chai",
    },
    "shim": {
        "sammy": {
            "deps": ["jquery"]
        }
    },
    "config": {
            "testRunner": {
                "tests": [
                    "test/router",
                    "test/content",
                    "test/ui"
                ]
            }
        }
});

define(
    "testRunner",
    ["require", "module", "chai", "sinon-chai"],
    function( require, module, chai, sinonChai ){
        // Chai setup
        var assert = chai.assert,
            should = chai.should(),
            expect = chai.expect;

        // Mocha setup
        mocha.setup( 'bdd' );
        chai.use( sinonChai );

        // tests
        require(
            module.config().tests,
            function(){
                if( window.mochaPhantomJS ){
                    mochaPhantomJS.run();
                }
                else{
                    mocha.run();
                }
            }
        );
    }
);

require(["testRunner"]);
