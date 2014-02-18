define(
    ["content"],
    function( Content ){
        describe( "Content", function(){
            describe( "#getContentForPage", function(){
                it( "returns the correct content for a page", function(){
                    Content.getContentForPage( "home" ).should.equal( 'Welcome! <a href="#start">Click here to start!</a>' );
                });

                it( "returns undefined for a non-existent page", function(){
                    var content = Content.getContentForPage( "nothing" );

                    // Chai can't test for undefined
                    true.should.equal( (content === undefined) );
                });
            });
        });
    }
)
