const initState ={

}

const commentReducer =(state=initState, action) => {
    switch(action.type){
        case 'COMMENT':
            return{
                ...state,
                comment : action.payload
            }
        default:
            return state
    }
}

export default commentReducer