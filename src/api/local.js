export async function retrieveBookings() {
    return new Promise(resolve => {
        const bookings = [
            {
                person: "Travis",
                date: new Date(2020, 8, 8),
                time: {
                    from: 1,
                    to: 6,
                },
                usage: ["outside", "inside"],
            },
            {
                person: "Kelvin",
                date: new Date(2020, 7, 8),
                time: {
                    from: 7,
                    to: 12,
                },
                usage: ["outside"],
            },
            {
                person: "Laura",
                date: new Date(2020, 7, 7),
                time: {
                    from: 7,
                    to: 3,
                },
                usage: ["inside"],
            },
            {
                person: "Jeff",
                date: new Date(2020, 7, 7),
                time: {
                    from: 1,
                    to: 5,
                },
                usage: ["outside"],
            },
        ];
        setTimeout(() => resolve(bookings), 1000)
    })
}

export async function addBooking(booking) {
    await new Promise(res => setTimeout(res, 500));
    return booking;
}