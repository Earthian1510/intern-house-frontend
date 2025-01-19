import React from 'react'
import Header from '../components/Header'
import useFetch from '../useFetch'
import { useParams } from 'react-router-dom'


const JobDetails = () => {
  const {jobId} = useParams()
  const { data, loading, error } = useFetch(`https://intern-house-server.vercel.app/jobs/${jobId}`)
  console.log(data) 

  return (
    <div>
        <Header/>
        <main className='container my-3'>
           {  loading && <div className='alert alert-warning'>Loading...</div>  }
           {  error && <div alert alert-danger>Error occured </div> }
           {
              data 
              && 
              <div>
                <h2>{data.jobTitle}</h2>
                <div className="card p-3">
                    <p>
                        <b>Company Name: </b>{data.companyName}
                    </p>
                    <p>
                        <b>Location: </b>{data.location}
                    </p>
                    <p>
                        <b>Salary: </b>{data.salary}
                    </p>
                    <p>
                        <b>Job Type: </b>{data.jobType}
                    </p>
                    <p>
                        <b>Description: </b>{data.jobDescription}
                    </p>
                    <p>
                        <b>Qualifications: </b> <br />
                        <ol>
                        {data.qualification.split(';').map((q) => (<li>{q}</li>))}
                        </ol>
                    </p>
                </div>
              </div>
           }

        </main>
    </div>
  )
}

export default JobDetails