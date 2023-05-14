import { useContext } from "react";
import { Jobscontext } from "../context/Jobscontext";

export const useJobContext=()=>{
    const context=useContext(Jobscontext);
    if(!context){
        console.log('Outside provider');
    }

        
        return context;
    
}