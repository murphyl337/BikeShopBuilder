/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/1/13
 * Time: 2:18 PM
 * To change this template use File | Settings | File Templates.
 */
function BikeShop(){
    this.BuildBike = function(builder){
        builder.buildFrame();
        builder.buildSeats();
        builder.buildWheels();
        builder.addCoolness();
        return builder.bike;
    };
}