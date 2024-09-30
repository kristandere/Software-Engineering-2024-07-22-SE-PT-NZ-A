const basketballGame = {
    score: 0,
    fouls: 0, 
  
    freeThrow() {
      this.score++;
      return this; 
    },
    basket() {
      this.score += 2;
      return this; 
    },
    threePointer() {
      this.score += 3;
      return this; 
    },
    halfTime() {
      console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
      return this; 
    },
    fullTime() {
      console.log(`Full time score is ${this.score}. Fouls: ${this.fouls}`);
      return this; 
    },
    addFoul() {
      this.fouls++;
      return this; 
    }
  };

//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
