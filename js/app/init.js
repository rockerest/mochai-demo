define(
    ["jquery"],
    function( $ ){
        var Init = {};

        Init.startApp = function(){
            $(function(){
                $( "p" ).text( "App Loaded" );
            });
        }

        return Init;
    }
);
