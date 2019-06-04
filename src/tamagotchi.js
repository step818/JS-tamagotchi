

export default class Tamagotchi {

    constructor(name) {
      this.name = name;
      this.foodLevel = 10;
      
    }
  
    setHunger() {
      setInterval(() => {
        this.foodLevel--;
      }, 1000);
    }

    didYouDie() {
      let interval = setInterval(() => {
        if(this.foodLevel <= 0) {
          clearInterval(interval);
          return `${this.name} has died!!!`;
        } else {
          return false;
        }
      }, 1000);
    }

    feed() {
      this.foodLevel = 10;
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
  