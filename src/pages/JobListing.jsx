import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'


const JobListing = () => {

  const { data, loading, error } = useFetch('https://intern-house-server.vercel.app/jobs')
  const [filterVal, setFilterVal] = useState('')
  const [msg, setMsg] = useState('')

  const filteredJobs = data?.filter((job) => job.jobTitle.toLowerCase().includes(filterVal.toLowerCase()))

  const handleJobDelete = async (jobId) => {
    const confirm = window.confirm("Are you sure, you want to delete this job post ?")
    if(!confirm) return 

    try{
        const response = await fetch(`https://intern-house-server.vercel.app/jobs/${jobId}`, {
            method: "DELETE"
        })

        if(response.ok){
            window.location.reload();
            setMsg("Job Post deleted Successfully!")
            setTimeout(() => setMsg(''), 3000)
        }
        else{
            setMsg("Failed to delete. please try again after some time.")
            setTimeout(() => setMsg(''), 3000)
        }
    }
    catch(error){
        console.log(error);
    }

  }
 
 
  return (
    <div>
        <Header/>
        <main className='container'>
            <div className='my-3 container'>
                <input 
                    type="text" 
                    className='form-control' 
                    placeholder='Search by job title...'
                    value={filterVal}
                    onChange={(e) => setFilterVal(e.target.value)}
                />
            </div>
            <div className='container'>
                <h2>All Jobs</h2>
                <div className="row">
                  
                    {
                        loading && <div className='alert alert-warning'>Loading</div>
                    }
                    {  error && <div alert alert-danger>Error occured </div> }
                    {
                        msg && <div className='alert alert-info'>{msg}</div>
                    }
                    {
                         filteredJobs?.map((job) => (
                            <div className='col-md-4 mb-3' key={job._id}>
                                <div className="card">
                                    <div className="card-body">
                    
                                        <div className="card-body">
                                            <h5 className="card-title mb-3 fw-semibold">{job.jobTitle}</h5>
                                            <p><b>Company name: </b>{job.companyName}</p>
                                            <p><b>Location: </b>{job.location}</p>
                                            <p><b>Job Type: </b>
                                                {
                                                    job.jobType.split(' ').slice(0, -1).join(' ')
                                                }
                                                {` `}
                                                ( 
                                                    { job.jobType.split(' ').slice(-1)}
                                                )
                                            </p>
                                           <div className='d-flex gap-2'>
                                                <Link type='button' to={`/jobs/${job._id}`} className='btn btn-primary col'>See Details</Link>
                                                <Link type='button' className='btn btn-danger col' onClick={() => handleJobDelete(job._id)}>Delete</Link>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    </div>
  )
}

export default JobListing