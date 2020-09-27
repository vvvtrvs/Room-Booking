<template>
  <div id="app">
    <h1>Booking</h1>
    <calendar id="calendar"/>
    <b-button id="show-modal" @click="showModal = true">Show Modal</b-button>
    <modal v-if="showModal">
      <template #header>
        <h3>New Booking</h3>
        <b-button-close @click="showModal = false"/>
      </template>
      <template #body>
        <booking-form @submitted="showModal = false" />
      </template>
    </modal>
  </div>
</template>

<script>
import Calendar from "./components/Calendar.vue";
import BookingForm from "./components/BookingForm";
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Calendar,
    BookingForm,
    Modal,
  },
  data() {
    return { showModal: false };
  },
  created() {
    this.$store.dispatch('initAsync')
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 16px;
}

#calendar {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
