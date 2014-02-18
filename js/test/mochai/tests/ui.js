define(
    ["ui", "jquery"],
    function( Ui, $ ){
        describe( "Ui", function(){
            afterEach(function(){
                $("#testArea").html( "<p></p><p></p>" );
            });

            describe( "#updateText", function(){
                it( "calls #getTextNode once", function(){
                    sinon.spy( Ui, "getTextNode" );
                    Ui.updateText( "sample" );
                    Ui.getTextNode.should.have.been.calledOnce;
                    Ui.getTextNode.restore();
                });

                it( "updates the DOM node with the correct text", function(){
                    var text = "sample";
                    Ui.updateText( text );
                    $( "#testArea p" ).first().text().should.equal( text );
                });
            });

            describe( "#getTextNode", function(){
                it( "should select the correct paragraph", function(){
                    var selected = Ui.getTextNode();

                    selected.should.be.an( "object" );
                    selected[0].should.equal( $( "#testArea p" )[0] );
                });
            });
        });
    }
)
