define(
    [],
    function(){
        var Content = {},
            pages = {
                "home": 'Welcome! <a href="#start">Click here to start!</a>',
                "start": '<a href="#/">Go Home</a><br />This is the first page!'
            }

        Content.getContentForPage = function( key ){
             return pages[ key ];
        };

        return Content;
    }
);
