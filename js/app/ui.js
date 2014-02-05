define(
    ["jquery"],
    function( $ ){
        var Ui = {};

        Ui.updateText = function( newText ){
            Ui.getTextNode().html( newText );
        };

        Ui.getTextNode = function(){
            return $( "p" ).first();
        };

        return Ui;
    }
);
