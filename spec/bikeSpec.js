describe("Shop", function(){
    var hipsterBuilder, roadBuilder, tandemBuilder, shop, bike;
    beforeEach(function(){
       hipsterBuilder = new HipsterBikeBuilder();
       roadBuilder = new RoadBikeBuilder();
       tandemBuilder = new TandemBikeBuilder();
       shop = new BikeShop();
    });

    it("should build a hipster bike", function(){
        var bike = shop.BuildBike(hipsterBuilder);

        expect(bike.coolness).toBe("pre-dates cool");
    });

    it("should build a tandem bike", function(){
        var bike = shop.BuildBike(tandemBuilder);

        expect(bike.coolness).toBe("never ever cool");
        expect(bike.seats).toBe(2);
    });

    it("should build a road bike", function(){
        var bike = shop.BuildBike(roadBuilder);

        expect(bike.coolness).toBe("kinda cool");
    });
});