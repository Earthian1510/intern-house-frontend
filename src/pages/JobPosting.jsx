import React, { useState } from 'react'
import Header from '../components/Header'

const JobPosting = () => {

  const [jobData, setJobData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    salary: '',
    jobType: '',
    jobDescription: '',
    qualification: ''
  })
  const [msg, setMsg] = useState('')

  const handleJobData = (e) => {
    setMsg('')
    const { name, value } = e.target;
    setJobData((prev) => ({
        ...prev,
        [name] : name == 'salary' ? parseFloat(value) : value
    }))
  }

  const handleFormDataSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch('https://intern-house-server.vercel.app/jobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobData)
        })
        console.log(response)
        
        if (response.ok) {
            setJobData({
              jobTitle: '',
              companyName: '',
              location: '',
              salary: '',
              jobType: '',
              jobDescription: '',
              qualification: '',
            });
            setMsg('Job added successfully!');
            setTimeout(() => {
                setMsg('');
            }, 3000)
            
          } else {
            setMsg('Failed to add the job. Please try again.');
            setTimeout(() => {
                setMsg('');
            }, 3000)
          }

          
          

    }
    catch(error) {
        setMsg("error occured while creating a job. please try again after some time.")
        console.error("Error occured", error)
        setTimeout(() => {
            setMsg('');
          }, 300)
    }
  }

  return (
    <div>
        <Header/>
        <div className="container my-3">
            <h2>Post a Job</h2>
            {msg && <div className="alert alert-info">{msg}</div>}
            <form onSubmit={handleFormDataSubmit}>
                <div className='mb-3'>
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name='jobTitle'
                        value={jobData.jobTitle}
                        onChange={handleJobData}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="companyName">Company Name:</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name='companyName'
                        value={jobData.companyName}
                        onChange={handleJobData}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="location">Location:</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name='location'
                        value={jobData.location}
                        onChange={handleJobData}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="salary">Salary:</label>
                    <input 
                        type="number" 
                        className='form-control'
                        name='salary'
                        value={jobData.salary}
                        onChange={handleJobData}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="jobType">Job Type:</label>
                    <select 
                        name="jobType" 
                        className='form-control'
                        value={jobData.jobType}
                        onChange={handleJobData}
                    >
                        <option value="" selected disabled >Select a Job Type</option>
                        <option value="Full-time On-site">Full-time (On-site)</option>
                        <option value="Full-time Remote">Full-time (Remote)</option>
                        <option value="Part-time On-site">Part-time (On-site)</option>
                        <option value="Part-time Remote">Part-time (Remote)</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="jobDescription">Job Description:</label>
                    <textarea 
                        name="jobDescription"
                        className='form-control'
                        value={jobData.jobDescription}
                        onChange={handleJobData}
                    ></textarea>
                </div>
                <div className='mb-3'>
                    <label htmlFor="jobQualification">Job Qualifications:</label>
                    <textarea 
                        name="qualification"
                        className='form-control'
                        value={jobData.qualification}
                        onChange={handleJobData}
                    ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Post Job</button>
            </form>
        </div>
    </div>
  )
}

export default JobPosting