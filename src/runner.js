/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/1/13
 * Time: 2:39 PM
 * To change this template use File | Settings | File Templates.
 */
function run(){
    var hipsterBuilder = new HipsterBikeBuilder();
    var roadBuilder = new RoadBikeBuilder();
    var tandemBuilder = new TandemBikeBuilder();
    var shop = new BikeShop(hipsterBuilder);

    var bike = shop.BuildBike(hipsterBuilder);
    bike.view();
}