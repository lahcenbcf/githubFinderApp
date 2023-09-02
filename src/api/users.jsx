
const REQUESTEDURL=import.meta.env.VITE_API_URL
export const getUsers=async()=>{
    const res=await fetch(REQUESTEDURL+"users?page=1",{
        headers:{
            Authorization:`token ${import.meta.env.VITE_API_KEY}`
        }
    });
    if(res.status != "200"){
        return controller.abort()
    }
    const users=await res.json()
    return users
}

export const searchUsers=async(query)=>{
    const params=new URLSearchParams({
        q:query
    })
    const res=await fetch(REQUESTEDURL+`search/users?${params}`,{
        headers:{
            Authorization:`token ${import.meta.env.VITE_API_KEY}`
        }
    })
    const users=(await res.json()).items
    return users
}

export const getUser=async(login)=>{
    const res=await fetch(REQUESTEDURL+`users/${login}`,{
        headers:{
            Authorization:`token ${import.meta.env.VITE_API_KEY}`
        }
    })
    const user=await res.json()
    return user
}

export const getRepos=async (login,pageNum)=>{
    /*const params=new URLSearchParams(
        {
            sort:"created",
            per_page:articleNum
        }
    )*/
    const res=await fetch(`https://api.github.com/users/${login}/repos?per_page=${3}&page=${pageNum}&sort=updated`,{
        headers:{
            Authorization:`token ${import.meta.env.VITE_API_KEY}`
        }
    })
    const repos=await res.json()
    console.log(repos.length)
    return repos
}