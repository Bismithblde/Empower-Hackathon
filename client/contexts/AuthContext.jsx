import { createContext , useReducer} from "react";

export const AuthContext = createContext();
export const AuthReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state;
    }
}
export const AuthContextProvidor = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: JSON.parse(localStorage.getItem('user')) || null
    })

    console.log("Authcontext: ", state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}