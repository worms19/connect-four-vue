<template>
  <body>
    <div class="layout">
      <PlayerCard :player-number="1" :player-score="3" svg-url="player-one" />
      <div class="middle-screen">
        <MenuBar />
        <GameBoard />
      </div>
      <PlayerCard :player-number="2" :player-score="4" svg-url="player-two" />
    </div>
    <div class="bottom" />
  </body>
</template>

<script>
import GameBoard from './components/GameBoard.vue';
import PlayerCard from './components/PlayerCard.vue';
import MenuBar from './components/MenuBar.vue';

export default {
  name: 'App',
  components: {
    GameBoard,
    PlayerCard,
    MenuBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
body {
  height: 100vh;
  overflow: hidden;
  background: #7945ff;
}
.layout {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}
.bottom {
  position: absolute;
  width: 100%;
  height: 200px;
  left: 0px;
  top: calc(100% - 200px);
  background: #5c2dd5;
  border-radius: 60px 60px 0px 0px;
}
.middle-screen {
  height: 100%;
}
</style>
