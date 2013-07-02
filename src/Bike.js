/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/1/13
 * Time: 2:26 PM
 * To change this template use File | Settings | File Templates.
 */
function Bike(){
    this.type;
    this.coolness;
    this.frame;
    this.seats;

    this.view = function(){
        console.log("Type: " + this.type);
        console.log("Frame: " + this.frame);
        console.log("Seats: " + this.seats);
        console.log("Coolness: " + this.coolness);
    }
}