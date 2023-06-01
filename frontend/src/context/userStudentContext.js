import { createContext, useReducer } from "react";

export const userStudent=createContext();
export const userStudentReducer=(state,action)=>{
    switch(action.type){
        case 'SETSTUDENTUSER':
            return {
                student:action.payload
            }
        case 'REMOVEUSER':
            console.log('removed')
            return {
                student:null
            }
        default:
            return{
                state
            }
    }
}

export const UserStudentProvider=({children})=>{
    const [state,dispatchstudent]=useReducer(userStudentReducer,{
        student:null
    })
    console.log("userStudentContext",state);
    return(
        <userStudent.Provider value={{dispatchstudent,...state}}>
            {children}
        </userStudent.Provider>
    )
}