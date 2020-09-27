<template>
  <section class="form">
    <v-date-picker is-inline is-required v-model="date" />
    <time-picker v-model="time"/>
    <div>
      <b-form @submit.prevent="submit" :validated='validated'>
        <b-form-group id="input-name-group" label="Name:" label-for="input-name">
          <b-form-input
            id="input-name"
            v-model="name"
            type="text"
            required
            placholder="Who's booking?"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Using:">
          <b-form-checkbox-group invalid id="checkbox-group-usage" v-model="usage" name="usage">
            <b-form-checkbox value="outside">Outside</b-form-checkbox>
            <b-form-checkbox value="inside">Inside</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button variant="primary" type="submit">Submit</b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
import TimePicker from "./timepicker/TimePicker";
export default {
  components: {
    TimePicker,
  },
  data() {
    return {
      validated: false,
      name: "",
      usage: [],
      date: new Date(),
      time: {},
    };
  },
  computed: {
    usageCheckboxState() {
      return this.usage.length >= 1;
    }
  },
  methods: {
    submit() {
      this.validated = true;
      this.$store.dispatch('newBookingAsync', {
        person: this.name,
        usage: this.usage,
        date: this.date,
        time: this.time
      });
      this.$emit("submitted")
    },
  },
};
</script>

<style>
</style>