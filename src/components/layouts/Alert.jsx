import React ,{useContext} from 'react'
import {GoAlertFill} from 'react-icons/go'
import { AlertContext } from '../../context/AlertContext'
function Alert() {
    const {state}=useContext(AlertContext)
    if(state){
        return (
           
             <div className='flex items-center gap-2 w-1/2 mx-auto my-4'>
                <GoAlertFill size={20} color={state.error && 'red'} />
                      <h3 className={`font-bold ${state.error && 'text-red-600'}`}>{state.alertMessage}</h3>
                      </div>  
            
            
          )
    }
 
}

export default Alert