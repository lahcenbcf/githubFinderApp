import React, { useCallback, useContext, useEffect,useState } from 'react'
import { Context as GithubContext } from '../../context/githubContext'
import { useParams } from 'react-router-dom';
import RepoItem from './RepoItem';
const LIMIT=4;
function RepoList() {
    const {login}=useParams()
    const {repos,setRepos,getUserRepos}=useContext(GithubContext);
    const [isLoading,setIsLoading]=useState(false)
    let pageNum=4 
    const repoRef=useCallback(repository=>{
        if(repository==null) return ;
        const observer=new IntersectionObserver(entries=>{
            const entry=entries[0];
            const isIntersecting=entry.isIntersecting;
            if(isIntersecting){
                setIsLoading(true)
                observer.unobserve(repository)
                pageNum++;
                getUserRepos(login,pageNum);
                setIsLoading(false)
            }
           
        },{threshold:1,rootMargin:'-50px'})
        observer.observe(repository)
        
    },[])   
    useEffect(()=>{
       setIsLoading(true)
        getUserRepos(login,pageNum)
        setIsLoading(false)

        return ()=>setRepos([])
    },[])
    //if(isLoading) {
        //return <img className='w-[40px] h-[40px] rounded-full' src={spinner} alt='loading' />
     return (
    <div className='w-full py-32 md:w-10/12 mx-auto shadow-lg'>
        {
            repos.map((repo,index)=>(
                <div className='' ref={index===repos.length-1 ? repoRef : null}>
                <RepoItem repo={repo} />
                </div>
            ))
        }
        {
            isLoading ? Array.from({length:LIMIT},(_,index)=>index).map(n=>(
                <div class="testimonial-container">
        <div class="testimonial-arrow"></div>
        <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at justo nec ante vestibulum tristique. Vestibulum eu lorem eu justo viverra tincidunt.</p>
        <p class="testimonial-author">- John Doe</p>
    </div>
            )):null
        }
    </div>
  )
}

export default RepoList