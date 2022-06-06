import React from "react";
import { useForm } from 'react-hook-form';
import { createSprint } from '../../api/auth';
function CreateSprint(props) {
	const { register, handleSubmit } = useForm();
	
	const onSubmit = (values) => {
		createSprint(values);
		props.changeView("allSprints")
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='auth-form-container'>
						<div className='auth-form login-form'>
							<div className='heading-container'>
								<h1 className='heading'>Create Sprint</h1>
							</div>
							<section>
								<form onSubmit={(e) => e.preventDefault()}>
									<div className='errors'>
									</div>
									<div className="field text-left">
										<label>Name</label>
										<input type="text" name="sprint[name]" className='form-control' ref={register()} />
									</div>
                  <br/>
									<div className="field text-left">
										<label>Start Date</label>
										<input type="date" name="sprint[start_date]" className='form-control' ref={register()} />
									</div>
                  <br/>
                  <div className="field text-left">
										<label>End Date</label>
										<input type="date" name="sprint[end_date]" className='form-control' ref={register()} />
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

export default CreateSprint;