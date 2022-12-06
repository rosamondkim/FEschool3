import { createContext, useReducer } from 'react';

// context 객체를 생성합니다.
const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {...state, user: action.payload}
        default:
            return state
    }
}


const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { user: null })

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }