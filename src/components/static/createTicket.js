import React from "react";
import { useForm } from 'react-hook-form';
import { createTicket } from '../../api/auth';
function CreateTicket(props) {
	const { register, handleSubmit } = useForm();
	
	const onSubmit = (values) => {
		createTicket(values);
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='auth-form-container'>
						<div className='auth-form login-form'>
							<div className='heading-container'>
								<h1 className='heading'>Create Ticket</h1>
							</div>
							<section>
								<form onSubmit={(e) => e.preventDefault()}>
									<div className='errors'>
									</div>
									<div className="field text-left">
										<label>Name</label>
										<input type="text" name="ticket[name]" className='form-control' ref={register()} />
									</div>
                  <br/>
									<div className="field text-left">
										<label>Description</label>
										<textarea name="ticket[description]" className='form-control' ref={register()} />
									</div>
                  <br/>
									<div className="actions">
										<input className="btn btn-primary" type="submit" onClick={handleSubmit(onSubmit)} />
									</div>
								</form>
							</section>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}

export default CreateTicket;