<template>
  <div class="wrapper">
    <img
      class="player-image"
      :src="require(`@//assets/images/${svgUrl}.svg`)"
    />
    <h1 class="name">Player {{ playerNumber }}</h1>
    <h2 class="score">{{ playerScore }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  playerNumber: Number,
  playerScore: Number,
  svgUrl: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 141px;
  height: 160px;
  padding: 20px;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
}

.name {
  font-family: Space Grotesk;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
}
.score {
  margin: auto;
  font-family: Space Grotesk;
  font-size: 56px;
  font-weight: 700;
  line-height: 71px;
  letter-spacing: 0px;
  text-align: center;
}

.player-image {
  position: absolute;
  top: -40px;
  left: 39px;
}
</style>
