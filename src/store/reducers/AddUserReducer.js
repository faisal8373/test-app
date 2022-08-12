let initialState = {
    userName: '',
    password: '',
    city: '',
    password: '',
    email: '',
    mobile: ''
}

function AddUser(state=initialState, action){
    switch (action.type) {

        case 'ADD_USER':{
       // if user login than what?
            return {
                ...state,
               
               user: action.payload
            };
        }

      
               
            
    
        default:
        return state;
    }
}

export default AddUser;