requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths":{
        "lib":          "../lib",

        "jquery":       ["//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min", "../lib/jquery/jquery.min"],
    },
    "map":{
        "*": {
            "jquery": "jquery.noGlobal",
        },
        "jquery.noGlobal": {
            "jquery": "jquery"
        }
    }
});

require(
    ["init"],
    function( Init ){
        Init.startApp();
    }
);
