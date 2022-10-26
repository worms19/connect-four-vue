<template>
  <div v-if="winner" class="winner">
    <span class="player"> PLAYER {{ turn === 0 ? 1 : 2 }} </span>
    <span class="win"> win </span>
    <button @click="emit('restart')">restart</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  turn: Number,
  winner: Number,
});
const emit = defineEmits(['restart']);
</script>

<style scoped>
.winner {
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 285px;
  height: 160px;
  background: #ffffff;
  /* Black */

  border: 3px solid #000000;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
  z-index: 4;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.win {
  font-family: Space Grotesk;
  font-size: 56px;
  font-weight: 700;
  line-height: 71px;
  letter-spacing: 0px;
  text-align: center;
}
.player {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}

button {
  cursor: pointer;
  background: #5c2dd5;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  border: 1px;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
}
</style>
