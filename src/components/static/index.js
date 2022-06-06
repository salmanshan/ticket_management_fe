import { useState } from 'react';
import CreateTicket from './createTicket';
import CreateSprint from './createSprint';
import AllTickets from "./allTickets";
import AllSprints from "./allSprints";

const HomePage = () => {

  const [createTicket, setCreateTicket] = useState(false);
  const [createSprint, setCreateSprint] = useState(false);
  const [allSprints, setAllSprints] = useState(false);
  const [allTicket, setAllTickets] = useState(false);


  const changeView = (type) => {
    if (type === "createTicket") {
      setCreateTicket(true);
      setCreateSprint(false);
      setAllTickets(false);
      setAllSprints(false);
    } else if (type === "createSprint") {
      setCreateTicket(false);
      setCreateSprint(true);
      setAllTickets(false);
      setAllSprints(false);
    } else if (type === "allTickets") {
      setCreateTicket(false);
      setCreateSprint(false);
      setAllTickets(true);
      setAllSprints(false);
    } else if (type === "allSprints") {
      setCreateTicket(false);
      setCreateSprint(false);
      setAllTickets(false);
      setAllSprints(true);
    }
  }

	return (
		<div className="student-rs">
			<div className="container">
				<h1 className="text-center headingF headingF-sm">Ticket Management System</h1>
				<div className="row text-center">
					<div className="col-100">
            <button className='btn btn-primary' onClick={() => changeView("createTicket") }>Create Ticket</button>
            <button className='btn btn-primary' onClick={() => changeView("createSprint") }>Create Sprint</button>
            <button className='btn btn-primary' onClick={() => changeView("allTickets") }>View All Tickets</button>
            <button className='btn btn-primary' onClick={() => changeView("allSprints") }>View All Sprint</button>
					</div>
          <div className='col-100'>
            { createTicket && <CreateTicket changeView={changeView} /> }
            { createSprint && <CreateSprint changeView={changeView} /> }
            { allTicket && <AllTickets /> }
            { allSprints && <AllSprints /> }
          </div>
				</div>
			</div>
		</div>
	)
}

export default HomePage;
