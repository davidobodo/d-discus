const initState ={
    1111 : [
        {number: 1, comment: "first message"},
        {number:2, comment:"second message"},
        {number:3, comment: "third message"}
    ],

    2222 : [
        {number: 1, comment: "first message part 2"},
        {number:2, comment:"second message part 2"},
        {number:3, comment: "third message part 2"}
    ],

    3333 : [
        {number: 1, comment: "first message part 3"},
        {number:2, comment:"second message part 3"},
        {number:3, comment: "third message part 3"}
    ]
}

const commentReducer =(state=initState, action) => {
    switch(action.type){
        case 'COMMENT':
            // const comment = action.payload.mes
            return{
                ...state
                // initstate.discuss1uid : {
                //     ...state,
                //     id : 4,
                //     comment : comment
                // }
            }
        default:
            return state
    }
}

export default commentReducer