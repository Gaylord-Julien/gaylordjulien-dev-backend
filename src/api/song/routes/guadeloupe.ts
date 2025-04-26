export default {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/song/guadeloupe',
            handler: 'song.guadeloupeDate',
        },
    ]
}