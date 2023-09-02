import React from 'react'
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'
function RepoItem({repo}) {
    console.log(repo)
    const {
        open_issues,
        watchers_count,
        stargazers_count,
        name,
        description,
        html_url,
        forks,
    }=repo
  return (
    <div className='card mb-2 rounded-md bg-gray-800 hover:bg-gray-500'>
        <div className='card-body'>
            <h3 className='mb-2 text-xl font-bold text-white'>
                <a href={html_url}>
                        <FaLink className='inline mr-3' />{name}
                </a>
            </h3>
            <p className='mb-2 text-white'>{description}</p>
            <div className='flex gap-6 flex-wrap w-fit'>
                <div className='badge badge-info badge-lg'>
                    <FaEye className='mr-2' />{watchers_count}             
                </div>
                <div className='badge badge-success badge-lg'>
                    <FaStar className='mr-2' />{stargazers_count}             
                </div>
                <div className='badge badge-error badge-lg'>
                    <FaInfo className='mr-2' />{open_issues}             
                </div>
                <div className='badge badge-info badge-lg'>
                    <FaUtensils className='mr-2' />{forks}             
                </div>
            </div>
        </div>
         
    </div>
  ) 
}

export default RepoItem