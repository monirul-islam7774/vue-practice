new Vue({
  el:'#app',
  data:{
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods:{
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      this.monsterHealth -= this.calculateDamage(3,10);

     if (this.checkWin()){
       return;
     }
      
      this.playerHealth -= this.calculateDamage(5,12);

     this.checkWin();
    },
    specialAttack: function () {
     
      this.monsterHealth -= this.calculateDamage(9,20);

      if (this.checkWin()){
        return;
      }

      this.playerHealth -= this.calculateDamage(8,18);

      this.checkWin();

    },
    heal: function () {
     
      this.playerHealth += this.calculateDamage(3,10);

      if (this.monsterHealth >= 100){
        this.playerHealth = 100;
      }
      
      this.monsterHealth += this.calculateDamage(2,4);

      if (this.monsterHealth >= 100) {
        this.monsterHealth = 100;
      }
    },
    giveUp: function () {
      this.gameIsRunning = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    
    calculateDamage: function (min,max) {
      return Math.max(Math.floor(Math.random()* max) + 1, min);
    },
    
    checkWin: function () {
      if (this.monsterHealth <= 0){
        if (confirm("You have won! New Game?")){
          this.startGame();
        }
        else{
          this.monsterHealth = 0;
          this.gameIsRunning = false;
        }
        return true;
      }
      else if (this.playerHealth <= 0) {
        if (confirm("You have lost!! New Game?")){
          this.startGame();
        }
        else {
          this.playerHealth = 0;
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});