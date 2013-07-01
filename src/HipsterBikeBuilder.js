/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/1/13
 * Time: 2:22 PM
 * To change this template use File | Settings | File Templates.
 */
HipsterBikeBuilder.prototype = new Builder();
HipsterBikeBuilder.prototype.constructor = Builder;

function HipsterBikeBuilder(){
    Builder.call(this);
    this.bike = new Bike();

    this.makeWheels = function(){
        this.bike.wheels = "skinny";
    };

    this.makeFrame = function(){
        this.bike.frame =  "superFly";
    };

    this.makeSeats = function(){
        this.bike.seats = 1;
    };

    this.addCoolness = function(){
        this.bike.coolness = "pre-dates cool"
    };
}