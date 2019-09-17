<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <game-board :board-settings="gameboard"></game-board>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GameBoard from './components/GameBoard.vue'
import gameboards from './gameboards.js'

export default {
  name: 'app',
  components: {
    // HelloWorld
    GameBoard
  },
  data: function() {
    return {
      gameboard: gameboards.squareFour
    }
  }
}
</script>

<style>
#app {

}
</style>
