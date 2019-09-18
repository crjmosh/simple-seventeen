<template>
  <div id="app">
    <game-board :board-settings="gameboard"></game-board>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard.vue'
import gameboards from './gameboards.js'

export default {
  name: 'app',
  components: {
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
