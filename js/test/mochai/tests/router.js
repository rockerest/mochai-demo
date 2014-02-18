define(
    ["router"],
    function( Router ){
        describe( "Router", function(){
            describe( "#start", function(){
                var stubbedStart;
                before(function(){
                    stubbedStart = sinon.stub( Router, "start", function(){
                        Router.setUpRoutes();
                    });

                    sinon.spy( Router, "setUpRoutes" );
                });

                after(function(){
                    Router.start.restore();
                    Router.setUpRoutes.restore();
                })

                it( "calls #setUpRoutes only once", function(){
                    Router.start();
                    Router.setUpRoutes.should.have.been.calledOnce;
                });
            });
        });
    }
)
