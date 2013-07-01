/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/1/13
 * Time: 2:18 PM
 * To change this template use File | Settings | File Templates.
 */
function BikeShop(builder){
    this.builder = builder;

    this.createBike = function(){
        builder.makeFrame();
        builder.makeSeats();
        builder.makeWheels();
        builder.addCoolness();
        return builder.bike;
    };
}