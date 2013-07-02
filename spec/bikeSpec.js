describe("Shop", function(){
    var builder;
    beforeEach(function(){
       builder = new Builder();
    });

    it("should build a hipster bike", function(){
        builder.setType("hipster");
        builder.setFrame("tribal frame");
        builder.setSeats(1);
        builder.setCoolness("before coolness");

        expect(builder.getResult().type).toBe("hipster");
    });

    it("should build a tandem bike", function(){
        builder.setType("tandem");
        builder.setFrame("extra long");
        builder.setSeats(1);
        builder.setCoolness("not even cool");

        expect(builder.getResult().type).toBe("tandem");
    });

    it("should build a road bike", function(){
        builder.setType("road");
        builder.setFrame("light weight");
        builder.setSeats(1);
        builder.setCoolness("lance armstrong cool");

        expect(builder.getResult().type).toBe("road");
    });
});