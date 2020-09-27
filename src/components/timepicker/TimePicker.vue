<template>
  <div>
    <div class="grid-container">
      <span class="grid-span-row">{{
        Object.keys(value).length > 0 ? formatRange(value) : "Select booking time"
      }}</span>
      <h4 class="grid-span-row">AM</h4>
      <hour
        v-for="hour in hours.am"
        :key="hour"
        :text="hour"
        :selected="isHourInRange(hour)"
        @click.native="onHourSelect(hour)"
      />
      <h4 class="grid-span-row">PM</h4>
      <hour
        v-for="hour in hours.pm"
        :key="hour"
        :text="hour"
        :selected="isHourInRange(hour)"
        @click.native="onHourSelect(hour)"
        :bars="['red']"
      />
      <span class="grid-span-row grid-gap" />
      <hour
        :key="24"
        text="24"
        :selected="isHourInRange(24)"
        @click.native="onHourSelect(24)"
      />
      <hour
        :key="25"
        text="overnight"
        :selected="isHourInRange(25)"
        @click.native="onHourSelect(25)"
      />
    </div>
  </div>
</template>

<script>
import Hour from "./Hour";
import * as TimeUtil from "../../util/time";

export default {
  components: { Hour },
  props: ["value"],
  data() {
    return {
      hours: {
        am: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pm: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      },
    };
  },
  methods: {
    onHourSelect(hour) {
      if (this.value && this.value.to == null) {
        if (hour >= this.value.from) {
          this.$emit("input", { from: this.value.from, to: hour });
        } else {
          this.$emit("input", { from: hour, to: this.value.from });
        }
      } else {
        this.$emit("input", { from: hour, to: null });
      }
    },
    isHourInRange(hour) {
      return (
        !isNaN(hour) &&
        this.value &&
        (hour == this.value.from ||
          (this.value.to && this.value.from <= hour && hour <= this.value.to))
      );
    },
    formatRange(range) {
      return TimeUtil.formatRange({ start: range.from, end: range.to });
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
}
.grid-gap {
  height: 12px;
}
.grid-span-row {
  grid-column: 1/-1;
}
h4 {
  margin-top: 20px;
  margin-bottom: 0;
}
</style>