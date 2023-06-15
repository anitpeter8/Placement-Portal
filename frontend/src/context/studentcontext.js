import { createContext,useReducer } from "react";

export const StudentContext=createContext();
export const studentreducer=(state,action)=>{
    switch(action.type){
        case 'SETSTUDENTS':
            return{
                students:action.payload
            }
        case 'EDITASTUDENT':
            return{
                user:null
            }
        default:
        return state
    }
}

export const StudentContextProvider=({children})=>{
   const [state,dispatchstudents]=useReducer(studentreducer,null)
   console.log("studentcontext",state);
    return(
        <StudentContext.Provider value={{...state,dispatchstudents}} >
            {children}
        </StudentContext.Provider>
    )
}