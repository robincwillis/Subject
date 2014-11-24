var Subject = function(){
    //Just for the example, not important
    this.now = new Date();
    //List of references to observer objects
    this.subscribers = [];
};

Subject.prototype.addSubscriber = function subscribeObject(obj, callback){
    //Add a subscriber to this list
    //In this example for each subscriber we store a reference to the object itself
    //and a callback function
    this.subscribers.push( {"obj":obj,"callback":callback} );
};

Subject.prototype.removeSubscriber = function subscribeObject(obj){
    //Loop through the array of subscribers
    for( var i = 0, len = this.subscribers.length; i < len; i++ ) {
        if( this.subscribers[i].obj === obj ) {
            //remove the object passed in the arguments
            this.subscribers.splice( i, 1 );
            return true;
        }
    }
    //erk, we didn't find anything...
    return false;
};

Subject.prototype.notify = function notifySubscribers() {
    //Allow any arguments to be passed into this function
    var args = Array.prototype.slice.call( arguments, 0 );
    for( var i = 0, len = this.subscribers.length; i < len; i++ ) {
        //for each subscriber execute its specified callback function and
        //pass along arguments from this function
        this.subscribers[i].callback.apply(this.subscribers[i].obj, args);
    }
};

var Observer = function(name){
    //Some properties
    this.name = name;
    return this;
};

//Some functions, can be whatever you like
Observer.prototype.doMe = function doMe(message){
    console.log(this.name + ' is doing Me: ' + message);
};

Observer.prototype.doYou = function doYou(message){
    console.log(this.name + ' is doing You: ' + message);
};