const init = {
    todos : [
        {
            title: 'Learning Javascript',
            completed: false
        },
        {
            title: 'Learning HTML, CSS',
            completed: true
        }
        

    ]
}

export default function reducer(state = init, action, args) {
    switch(action) {
        default:
            return state;
    }
}