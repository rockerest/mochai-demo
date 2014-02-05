define(
    ["sammy", "ui"],
    function( Sammy, Ui ){
        var Router = {},
            app = new Sammy();

        Router.start = function(){
            app.get( "/", function( context ){
                Ui.updateText( "Welcome!" )
            });

            app.run( "#/" );
        };

        return Router;
    }
);
