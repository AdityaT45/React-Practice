/* eslint-disable react/prop-types */
// import React from 'react'

const University = ({data}) => {
  return (
    <div className='container mt-5'>
       <h1 className="text-center mb-4">Universities in the United States</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
        <tr>
          <th>A.N</th>
          <th>Name</th>
          <th>Country</th>
          <th>Web Site</th>
        </tr>
        </thead>
        <tbody>
        {data.map((university,index)=><tr key={index} >
          <td>{index}</td>
          <td>{university.name}</td>
          <td>{university.country}</td>
       
          <td><a href={university.web_pages[0]}>{university.web_pages[0]}</a></td>
        </tr>)}
        </tbody>
        
      </table>

   


    </div>
  )
}

export default University