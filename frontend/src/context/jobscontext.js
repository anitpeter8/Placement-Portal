import { createContext, useReducer } from "react";

export const Jobscontext=createContext();
export const jobreducer=(state,action)=>{
 
        switch(action.type){
            case 'SETJOBS':
                console.log('set jobs bro')
                return{
                    jobs:action.payload
                }
            case 'DELETEJOB':
                return{
                    jobs:state.jobs.filter((w)=>w._id!=action.payload._id)
                }
            case 'CREATEJOB':
                return{
                    jobs:[action.payload,...state.jobs]
                }
            case 'UPDATEJOB':
                  
                return {
                    jobs:state.jobs.map((w)=>{
                        if(w._id=action.payload._id){
                            return action.payload;
                        }
                        return w;
                    })
                }
            default:
                return state
        }
    
}
export const JobscontextProvider=({children})=>{
    const [state,dispatch]=useReducer(jobreducer,{
        jobs:null
    })
    return(
    <Jobscontext.Provider value={{dispatch,...state}}>
        {children}
      </Jobscontext.Provider>
    )
  
}