<template>
  <div class="wrapper">
    <div class="buttons">
      <button>MENU</button>
    </div>
    <img src="../assets/images/logo.svg" />
    <div class="buttons">
      <button>RESET</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin-block: 40px;
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

.buttons {
  margin-block: auto;
}
</style>
