<template>
  <div class="wrapper">
    <div class="layer">
      <img
        class="black-grid"
        src="@/assets/images/board-layer-black-large.svg"
      />

      <img
        class="white-grid"
        src="@/assets/images/board-layer-white-large.svg"
      />
      <div class="buttons-container">
        <template v-for="(row, rowIndex) in items" :key="rowIndex">
          <button
            v-for="(it, colIndex) in row"
            :key="colIndex"
            :class="[it]"
            :style="{
              '--text-height': `-${70 * (rowIndex + 1)}px`,
            }"
            :disabled="winner"
            @click="dropToken(colIndex)"
          >
            <img
              v-if="it === 'R'"
              src="@/assets/images/counter-red-large.svg"
              class="token"
            />
            <img
              v-if="it === 'Y'"
              src="@/assets/images/counter-yellow-large.svg"
              class="token"
            />
          </button>
        </template>
      </div>
      <WinPannel @restart="restart()" :turn="turn" :winner="winner" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { findSmallestIndex, verifyWin } from '../helpers/verify';
import WinPannel from './WinPannel.vue';
const items = ref([
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
]);

const turn = ref(0);
const winner = ref(false);

const dropToken = (colIndex) => {
  turn.value = (turn.value + 1) % 2;
  const rowIndex = findSmallestIndex(colIndex, items.value);
  items.value[rowIndex][colIndex] = turn.value === 0 ? 'R' : 'Y';
  winner.value = verifyWin(items.value, rowIndex, colIndex);
};

const restart = () => {
  items.value = [
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ];
  winner.value = false;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.token {
  width: 75px;
  height: 76px;
}
.layer {
  position: relative;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.white-grid,
.black-grid {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
}

.E {
  opacity: 0;
}

.buttons-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 13px;
  row-gap: 12px;
  padding: 16px;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  width: 75px;
  height: 76px;
  border-radius: 50%;
  z-index: 3;
}

.R,
.Y {
  z-index: 1;
  animation-name: drop;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes drop {
  0% {
    transform: translateY(var(--text-height));
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
