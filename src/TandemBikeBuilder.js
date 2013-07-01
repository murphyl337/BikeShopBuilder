/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/1/13
 * Time: 2:23 PM
 * To change this template use File | Settings | File Templates.
 */
TandemBikeBuilder.prototype = new Builder();
TandemBikeBuilder.prototype.constructor = Builder;

function TandemBikeBuilder(){
    Builder.call(this);
    this.bike = new Bike();

    this.makeWheels = function(){
        this.bike.wheels = "normal";
    };

    this.makeFrame = function(){
        this.bike.frame =  "long";
    };

    this.makeSeats = function(){
        this.bike.seats = 2;
    };

    this.addCoolness = function(){
        this.bike.coolness = "never ever cool";
    };
}