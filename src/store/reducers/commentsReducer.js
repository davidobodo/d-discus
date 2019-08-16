import _ from 'lodash'

const initState ={
    // 1111 : {
    //     0 :{number: 0, comment: "first message"},
    //     1 :{number:1, comment:"second message"},
    //     2 :{number:2, comment: "third message"}
    // }
        
    // ,

    // 2222 : {
    //     0 :{number: 0, comment: "first message part 2"},
    //     1 :{number:1, comment:"second message part 2"},
    //     2 :{number:2, comment: "third message part 2"}
    // }
        
    // ,

    // 3333 : {
    //     0 :{number: 0, comment: "first message part 3"},
    //     1 :{number:1, comment:"second message part 3"},
    //     2 :{number:2, comment: "third message part 3"}
    // }
        
    
}

const commentReducer =(state=initState, action) => {
    switch(action.type){
        case 'COMMENT':
            console.log("heheheheh")
            const disc=state[action.id]
            const number= +_.keys(disc).pop()+1
            return{
                ...state,
                [action.id] : {
                   ...disc,
                    [number]:{
                        number : number,
                        comment : action.comment
                    }
                } 
            }
        default:
            return state
    }
}

export default commentReducer