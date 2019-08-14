const initState ={
    discuss1uid : [
        {id: 1, comment: "first message"},
        {id:2, comment:"second message"},
        {id:3, comment: "third message"}
    ]
}

const commentReducer =(state=initState, action) => {
    switch(action.type){
        case 'COMMENT':
            return{
                ...state
                // discuss1uid : {
                //     ...state,
                //     { id :,
                //     comment : action.payload
                //     }
                // }
            }
        default:
            return state
    }
}

export default commentReducer