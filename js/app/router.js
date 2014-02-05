define(
    ["sammy", "ui", "content"],
    function( Sammy, Ui, Content ){
        var Router = {},
            app = new Sammy();

        Router.start = function(){
            app.get( "/", function( context ){
                Ui.updateText( Content.getContentForPage( "home" ) )
            });

            app.get( "#start", function( context ){
                Ui.updateText( Content.getContentForPage( "start" ) );
            });

            app.run( "/" );
        };

        return Router;
    }
);
