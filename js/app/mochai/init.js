define(
    ["jquery", "router"],
    function( $, Router ){
        var Init = {};

        Init.startApp = function(){
            $(function(){
                Router.start();
            });
        }

        return Init;
    }
);
