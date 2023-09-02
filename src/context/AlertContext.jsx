import { createContext,useReducer } from "react";
export const AlertContext=createContext();
const reducer=(state,action)=>{
    switch (action.type) {
        case "SHOWALERT":
            return {...state,alertMessage:action.payload.alertMessage,error:true}
            break;
        case "CLEARALERT":
            return {...state,alertMessage:""}
        default:
            break;
    }
}
export const AlertProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,null)
    const showMessage=(message)=>{
        dispatch({type:"SHOWALERT",payload:{
            alertMessage:message
        }})
    }

    const clearMessage=()=>{
    dispatch({type:"CLEARALERT"})
    }

    return (
        <AlertContext.Provider value={{
            showMessage,
            clearMessage,
            state
        }}>
        {children}
        </AlertContext.Provider>
    )
}