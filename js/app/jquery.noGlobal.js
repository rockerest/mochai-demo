define(
    ["jquery"],
    function( $ ){
        var local$ = $.noConflict( true );

        window.$ = undefined;
        window.jQuery = undefined;

        // IE7/8 have a bug with delete
        try{
            delete window.$;
            delete window.jQuery;
        }
        catch( exception ){
            // IE7/8 throw an exception (not in the spec) when delete-ing from window.
        }

        return local$;
    }
);
