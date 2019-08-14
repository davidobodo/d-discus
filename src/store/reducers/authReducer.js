const initState = {}

const authReducer = ( state= initState, action) => {

	switch(action.type){
		case 'LOGIN_ERROR':
			return {
				...state,
				//the purpose of this auth error property is solely for displaying of an error message
				authError: action.err.message
			};
		case 'LOGIN_SUCCESS':
			return {
				...state,
			};
		case 'SIGNOUT_SUCCESS':
			return state;
		case 'SIGNUP_SUCCESS':
			return{
				...state,
			}
		case 'SIGNUP_ERROR':
			return{
				...state,
				authError:action.err.message
			}
			
		default :
			return state;
	}
};

export default authReducer;