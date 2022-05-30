import React, { useEffect, useState } from "react";

function AllTickets() {

  const [tickets, setTickets] = useState(null); 

  useEffect(() => {
    fetch(process.env.API_ORIGIN + '/tickets.json')
        .then(response => response.json())
        .then(data => setTickets(data));
  },[])

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='auth-form-container'>
            <div className='auth-form login-form'>
              <div className='heading-container'>
                <h1 className='heading'>All Tickets</h1>
              </div>
              { tickets && tickets.length > 0 &&
                <table class="table">
                  <thead>
                    <tr className="text-left">
                      <th>Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tickets.map((ticket) => {
                        return (
                          <tr className="text-left">
                            <td>{ticket.name}</td>
                            <td>{ticket.description}</td>
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

export default AllTickets;