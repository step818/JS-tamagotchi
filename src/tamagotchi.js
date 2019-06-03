// export class Health {

//     constructor(name) {
//       this.name = name;
//       this.foodLevel = 10;
//     }
  
//     setHunger() {
//       setInterval(() => {
//         this.foodLevel--;
//       }, 1000);
//     }

//     didYouGetEaten() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//     feed() {
//         this.foodLevel = 10;
//     }
//   }



export let bear = {
    foodLevel: 10,
    setHunger: function() {
      const hungerInterval = setInterval(() => {
        this.foodLevel--;
        if (this.didYouGetEaten() == true) {
          clearInterval(hungerInterval);
          return "You got eaten!";
        }
      }, 10000);
    },
    didYouGetEaten: function() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        return true;
      }
    },
    feed: function(amount) {
        
    //   feed: function() {
      let that = this;
      
      return function(food) {
        // return function() {
         
        that.foodLevel += amount;
        // that.foodLevel = 10;
        return `The bear ate the ${food}! Food level goes up ${amount}!`;
        // return `The tamagotchi ate the food! Food level goes up to 10!`;
      }
    }
  };
  