import Vue from 'vue'
import Vuex from 'vuex'

import Api from '../api'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        bookings: [],
    },
    mutations: {
        addBooking(state, booking) {
            if (Array.isArray(booking)) {
                state.bookings.push(...booking);
            } else {
                state.bookings.push(booking);
            }
        }
    },
    actions: {
        async initAsync({ commit }) {
            let bookings = await Api.retrieveBookings();
            commit('addBooking', bookings);
        },
        async newBookingAsync({commit}, booking) {
            let result = await Api.addBooking(booking);
            commit('addBooking', result);
        }
    }
})