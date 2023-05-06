import { createContext,useReducer } from "react";

export const UserAuth=createContext();
export const authReducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                user:action.payload
            }
        case 'LOGOUT':
            return{
                user:null
            }
        default:
        return state
    }
}

export const UserAuthContextProvider=({children})=>{
   const [state,dispatch]=useReducer(authReducer,{
    user:null
   })
   console.log("authcontext",state);
    return(
        <UserAuth.Provider value={{...state,dispatch}} >
            {children}
        </UserAuth.Provider>
    )
}