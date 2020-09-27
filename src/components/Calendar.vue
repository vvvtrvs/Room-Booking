<template>
  <div>
    <v-calendar :columns="$screens({ lg: 2 }, 1)" :attributes="attrs" />
  </div>
</template>

<script>
export default {
  name: "Calendar",
  props: ["events"],
  computed: {
    attrs() {
      return [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
        ...this.$store.state.bookings.flatMap((booking) =>
          booking.usage.map((usage) => ({
            dates: booking.date,
            bar: usage == "outside" ? "red" : "blue",
            popover: {
              label: `${booking.person} ${booking.time.from} - ${booking.time.to}`,
            },
          }))
        ),
      ];
    },
  },
};
</script>

<style>
</style>