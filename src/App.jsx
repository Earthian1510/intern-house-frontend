import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <section className='container my-5 text-center'>
          <h2>Explore Jobs Opportunities Here</h2>
          <Link to='/jobs' className='btn btn-primary'>Jobs</Link>
        </section>
      </main>
    </div>
  )
}

export default App