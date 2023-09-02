import { createContext, useCallback, useReducer, useState } from "react";
import { getUser, searchUsers,getRepos } from "../api/users";
const reducer=(state,action)=>{
    switch (action.type) {
        case "loadUsers":
            return {users:action.payload.users,isLoading:action.payload.isLoading}
        case "SET_LOADING":
            return {...state,isLoading:!state.isLoading}
        case "SEARCHUSERS":
            return {...state,isLoading:action.payload.isLoading,users:action.payload.users}
        case "CLEARUSERS":
            return {...state,users:[]}
        case "GETUSER":
            return {...state,...action.payload}
        case "GETREPOS":
            return {
                ...state,...action.payload
            }
            default:
            break;
    }
}
export const Context=createContext()
export const GithubProvider=({children})=>{
    const [repos,setRepos]=useState([]);
    const initialState={
        users:[],
        isLoading:false,
        singleUser:{}
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    //const [users,setUsers]=useState([])
    //const [isLoading,setIsLoading]=useState(false)

    const fetchUsers=useCallback(async ()=>{
        setLoading()
        const users=await getUsers()
        dispatch({type:"loadUsers",payload:{
            users,
            isLoading:false
        }})
    },[])

    //getUserRepos
    const getUserRepos=async(login,articleNum)=>{
        //call the api
        const result=await getRepos(login,articleNum);
        //call setLoading to back isLoading to its initialState
        const filtredResult=result.filter(r=>!repos.includes(r))
        setRepos(prev=>[...prev,...filtredResult])
    }

    //search users
    const submitBtn=async(input)=>{
        if(!input) return ;
        setLoading()
        const results=await searchUsers(input);
        dispatch({
            type:"SEARCHUSERS",
            payload:{
                users:results,
                isLoading:false
            }
        })
    }

    //get single user 
    const getSingleUser=async(login)=>{
        //setLoading to true
        setLoading()
        //get apifunction from api folder 
        const result=await getUser(login)
        //dispatch action to store the user data in the state 
        dispatch({type:"GETUSER",payload:{
            isLoading:false,
            singleUser:result
        }})
    }
    //clear users
    const clearUsers=()=>{
        dispatch({
            type:"CLEARUSERS"
        })
    }

    //setLoading
    const setLoading=()=>{
        dispatch({type:"SET_LOADING"})
    }

    return <Context.Provider value={{
        state,
        repos,
        setRepos,
        fetchUsers,
        submitBtn,
        clearUsers,
        getSingleUser,
        getUserRepos
    }}>{children}</Context.Provider>
}

