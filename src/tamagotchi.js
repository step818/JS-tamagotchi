

export default class Tamagotchi {

    constructor(name) {
      this.name = name;
      this.foodLevel = 10;
      this.restLevel = 10;
    }
  
    setHunger() {
      let interval = setInterval(() => {
        this.foodLevel--;
        if(this.foodLevel <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }

    setRest() {
      let interval = setInterval(() => {
        this.restLevel--;
        if(this.restLevel <= 0) {
          clearInterval(interval);
        }
      }, 3000);
    }

    feed() {
      this.foodLevel = 10;
    }

    rest() {
      this.restLevel = 10;
    }

    didYouDie() {
        if(this.foodLevel <= 0 || this.restLevel <= 0) {
          return `${this.name} has died!!!`;
        } else {
          return false;
        }
    }
    
  }



// export let bear = {
//     foodLevel: 10,
//     amount: 1,


//     setHunger: function() {

//       const hungerInterval = setInterval(() => {
//         this.foodLevel--;
//         if (this.didYouGetEaten() == true) {
//           clearInterval(hungerInterval);
//           return "You got eaten!";
//         }
//       }, 10000);
//     },


//     didYouGetEaten: function() {
//       if (this.foodLevel > 0) {
//         return false;
//       } else {
//         return true;
//       }
//     },


//     feed: function(amount) {   
//       let that = this;

//       return function(food) {   
//         that.foodLevel += amount; 
//         return `The bear ate the ${food}! Food level goes up ${amount}!`;
        
//       }
//     }
//   };
  