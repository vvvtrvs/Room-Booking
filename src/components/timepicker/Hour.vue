<template>
  <div class="ratio-container">
    <div id="hour" :class="['ratio-inside', {selected: selected}]">
      <div class="number">
        <span>{{ text }}</span>
      </div>
    </div>
    <div id="bar-container">
      <span :class="['bar', bar]" v-for="bar in barsReversed" :key="bar" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: [String, Number],
    bars: { type: Array, default: () => [] },
    selected: { type: Boolean, default: false },
  },
  computed: {
    barsReversed() {
      let temp = this.bars;
      return temp.reverse();
    },
  },
};
</script>

<style scoped>
.ratio-container {
  height: 0;
  overflow: hidden;
  padding-top: 80%;
  position: relative;
}
.ratio-inside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.selected {
  background-color: gainsboro;
}
#hour {
  display: flex;
}
#bar-container {
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.number {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bar {
  height: 3px;
  display: block;
  margin: 1px 0;
}
.red {
  background-color: #e53e3e;
}
.blue {
  background-color: #3182ce;
}
</style>