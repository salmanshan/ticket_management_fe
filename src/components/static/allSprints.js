import React, { useEffect, useState } from "react";

function AllSprints() {

  const [sprints, setSprints] = useState(null); 

  useEffect(() => {
    fetch(process.env.API_ORIGIN + '/sprints.json')
        .then(response => response.json())
        .then(data => setSprints(data));
  },[])

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='auth-form-container'>
            <div className='auth-form login-form'>
              <div className='heading-container'>
                <h1 className='heading'>All Sprints</h1>
              </div>
              { sprints && sprints.length > 0 &&
                <table class="table">
                  <thead>
                    <tr className="text-left">
                      <th>Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      sprints.map((ticket) => {
                        return (
                          <tr className="text-left">
                            <td>{ticket.name}</td>
                            <td>{ticket.start_date}</td>
                            <td>{ticket.end_date}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default AllSprints;