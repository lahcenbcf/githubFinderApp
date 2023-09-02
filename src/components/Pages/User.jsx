import React ,{useContext,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Context as githubContex} from '../../context/githubContext'
import './user.css'
import Box from '../layouts/Box'
import {FaCodepen,FaStore,FaUserFriends,FaUsers} from 'react-icons/fa'
import RepoList from '../repo/RepoList'
function User() {
    const {login} =useParams()
    /*const state=useLocation()
    console.log(state)
    */
    

    const {getSingleUser,state:{singleUser,isLoading}}=useContext(githubContex)
    const {
        name,
        type,
        following,
        avatar_url,
        location,
        bio,
        id,
        blog,
        twitter_username,
        login:login_name,
        html_url,
        followers,
        public_repos,
        public_gists,
        hireable
    }=singleUser
    useEffect(()=>{
        getSingleUser(login)
        console.log("render agian")
    },[])
    
//if(isLoading) return <img className='w-[40px] h-[40px] rounded-full' src={spinner} alt='loading' />
    return (
    <div className='w-full min-h-full lg:w-10/12 mx-auto mt-36'>
        {/* our Link to back to search Page */}
        <Link to="/" className='btn btn-ghost text-xl text-[#fafbfc] mb-8'>Back to home</Link>
        <div className='flex flex-col items-center gap-8 md:flex-row md:items-center'>
            {/*Left side */}
            <div className='imageWrapper h-48 w-48 rounded-full shadow-xl relative overflow-hidden'>
                <img src={avatar_url} alt={name} className='image brightness-90 rounded-full' />
                <div className='contentImage p-4 rounded-full absolute top-[120%] text-center w-full mx-auto'>
                    <h3 className='text-[#fafbfc] text-lg shadow-sm capitalize font-semibold'>{login_name}</h3>
                    <p className='text-[#fafbfc] text-sm shadow-sm'>{type}</p>
                </div>
            </div>
            <div>
                {/*Right side */}
                <div className='flex items-center gap-4'>
                    <h1 className='text-2xl font-bold shadow-2xl text-[#fafbfc]'>{name}</h1>
                    <Box text={type} />
                    <Box text={id} />
                </div>
                <h2 className='text-[#fafbfc] my-2 text-lg'>{bio}</h2>
                <a target='_blank' href={html_url} className='btn btn-primary bg-[#2dba4e] border-[#2dba4e] rounded-md text-md my-10  text-[#fafbfc]'>Go to Github Profile</a>
                <div className='w-full shadow-lg bg-inherit rounded-md flex'>
                    {
                        location && <div className='stat text-[#fafbfc]'>
                                        <div className='stat-title text-sm text-[#fafbfc]'>location</div>
                                        <div className='stat-value text-lg'>{location}</div>
                                        </div>
                    }
                    {
                        blog && <div className='stat text-[#fafbfc]'>
                                        <div className='stat-title text-md text-[#fafbfc]'>blog</div>
                                        <a href={`https://${blog}`} className='stat-value text-lg'></a>
                                        </div>
                    }
                    {
                        twitter_username && <div className='stat text-[#fafbfc]'>
                                        <div className='stat-title text-md text-[#fafbfc]'>twitter</div>
                                        <a href={`https://twitter.com/${twitter_username}`} className='stat-value text-lg'>{twitter_username}</a>
                                        </div>
                    }
                </div>
                
            </div>
            
        </div>
        <div className='w-full md:w-10/12 mx-auto my-10 py-5 flex flex-wrap shadow-lg'>
                <div className='stat w-fit'>
                    {/* figure */}
                    <div className='stat-figure text-secondary'>
                        <FaUsers className='text-3xl md:text-5xl' />
                    </div>
                    <div className='stat-title text-lg text-[#fafbfc]'>Followers</div>
                    <div className='stat-value text-2xl text-[#fafbfc]'>{followers}</div>
                </div>

                <div className='stat w-fit' >
                    {/* figure */}
                    <div className='stat-figure text-secondary'>
                        <FaUserFriends className='text-3xl md:text-5xl' />
                    </div>
                    <div className='stat-title text-lg text-[#fafbfc]'>Followings</div>
                    <div className='stat-value text-2xl text-[#fafbfc]'>{following}</div>
                </div>
                <div className='stat w-fit'>
                    {/* figure */}
                    <div className='stat-figure text-secondary'>
                        <FaCodepen className='text-3xl md:text-5xl' />
                    </div>
                    <div className='stat-title text-lg text-[#fafbfc]'>Public Repos</div>
                    <div className='stat-value text-2xl text-[#fafbfc]'>{public_repos}</div>
                </div>

                <div className='stat w-fit'>
                    {/* figure */}
                    <div className='stat-figure text-secondary'>
                        <FaStore className='text-3xl md:text-5xl' />
                    </div>
                    <div className='stat-title text-lg text-[#fafbfc]'>Public Gists</div>
                    <div className='stat-value text-2xl text-[#fafbfc]'>{public_gists}</div>
                </div>
                </div>
               <RepoList />
    </div>
  )
}

export default User