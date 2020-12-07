class Traveler{
    constructor(name){

        this.name =name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt(){
        this.food += 2;
    }
    eat(){

        if(this.food ==0){
            this.isHealthy = false;
        } else{
            this.food -=1;
        }
    }
}


class Wagon {
constructor(capacity){
this.capacity = capacity;
this.passengers = [];
}

    
     getAvailableSeatCount() {
        this.vacan = this.capacity-this.passengers.length;
        return this.vacan;
    }
    join (passengers) {
        
        if(this.getAvailableSeatCount()>0){
            this.passengers.push(passengers)
        }
        
    }
    shouldQuarantine () {
         for (let i = 0; i < this.passengers.length; i++){
            if (this.passengers[i].isHealthy===false){
                return true;
            }

        }
        return false;
    }
       totalFood (){
        let totalFood = 0;
        for (let j = 0; j< this.passengers.length; j++){
            const passengers = this.passengers[j];
            totalFood += passengers.food
        }
        return totalFood;
    }
}

 
