import { createContext, useReducer } from "react";

export const Jobscontext=createContext();
export const jobreducer=(state,action)=>{
 
        switch(action.type){
            case 'SETJOBS':
                console.log(action.payload);
                console.log('set jobs bro')
                return{
                    jobs:action.payload,
                    //announcements:[...state.jobs]
                    announcements:[...state.announcements]
                }
            case 'SETANNOUNCEMENTS':
                console.log(action.payload);
                console.log('set announcements')
                return{
                    announcements:action.payload,
                    jobs:[...state.jobs]
                    
                }
            case 'DELETEJOB':
                return{
                    jobs:state.jobs.filter((w)=>w._id!==action.payload._id),
                    announcements:[...state.announcements]

                }
            case 'DELETEANNOUNCEMENT':
        
                return{
                    jobs:[...state.jobs],
                    announcements:state.announcements.filter((w)=>{
                        console.log('hey');
                        console.log(w._id);
                       return  w._id!==action.payload._id }
                        ) 
                }
            case 'CREATEJOB':
                return{
                    jobs:[action.payload,...state.jobs],
                    announcements:[...state.announcements]
                }
            case 'CREATEANNOUNCEMENT':
                return{
                    announcements:[action.payload,...state.announcements],
                    jobs:[...state.jobs]
                }
            case 'UPDATEJOB':
                  
                return {
                    jobs:state.jobs.map((w)=>{
                        if(w._id===action.payload._id){
                            return action.payload;
                        }
                        return w;
                    }),
                    announcements:[...state.announcements]
                }
            case 'UPDATEANNOUNCEMENT':
                return {
                    announcements:state.announcements.map((w)=>{
                        if(w._id===action.payload._id){
                            return action.payload;
                        }
                        return w;
                    }),
                    jobs:[...state.jobs]
                }
            default:
                return state
        }
    
}
export const JobscontextProvider=({children})=>{
    const [state,dispatch]=useReducer(jobreducer,{
     jobs:[],
     announcements:[]
    })
    console.log('context',state);
    return(
    <Jobscontext.Provider value={{dispatch,...state}}>
        {children}
      </Jobscontext.Provider>
    )
  
}