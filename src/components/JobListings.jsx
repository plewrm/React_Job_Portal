import React, { useEffect, useState } from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing';
import Spinner from './Spinners';
const JobListings = ({ isHome }) => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(apiUrl);
        const data = await res.json()
        setJobData(data)
      } catch (error) {
        console.log("Error if api failed", error);

      } finally {
        setIsLoading(false)
      }
    }
    fetchJobs();
  }, [])
  return (
    <section className="bg-blue-50 p-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center"> {isHome ? 'Recent Jobs' : 'Brows Jobs'}</h2>

        {isLoading ? <Spinner isloading={isLoading} />
          : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobData.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        }


      </div>
    </section>

  )
}

export default JobListings
