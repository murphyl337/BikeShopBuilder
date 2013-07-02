/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/1/13
 * Time: 2:20 PM
 * To change this template use File | Settings | File Templates.
 */
function Builder(){
    this.bike = new Bike();

    this.setType = function(type){
        this.bike.type = type;
    };
    this.setFrame = function(frame){
        this.bike.frame = frame;
    };
    this.setSeats = function(seats){
        this.bike.seats = seats;
    };
    this.setCoolness = function(coolness){
        this.bike.coolness = coolness;
    };

    this.getResult = function(){ return this.bike };
}