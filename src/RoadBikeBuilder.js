/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/1/13
 * Time: 2:23 PM
 * To change this template use File | Settings | File Templates.
 */
RoadBikeBuilder.prototype = new Builder();
RoadBikeBuilder.prototype.constructor = Builder;

function RoadBikeBuilder(){
    Builder.call(this);
    this.bike = new Bike();

    this.buildWheels = function(){
        this.bike.wheels = "fat";
    };

    this.buildFrame = function(){
        this.bike.frame =  "sturdy";
    };

    this.buildSeats = function(){
        this.bike.seats = 1;
    };

    this.addCoolness = function(){
        this.bike.coolness = "kinda cool";
    };
}