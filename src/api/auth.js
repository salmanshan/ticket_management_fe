import ServiceCalls from '../services/serviceCalls';
import { toastr } from 'react-redux-toastr';

export const createTicket = async (data) => {
	try {
		let result = await ServiceCalls.post('/tickets.json', data, false);
		if (result?.status == 422 || result?.status == "error" || result?.data?.status == "error") {
			const errorMsg = (result?.data?.errors && Object.keys(result?.data?.errors).length) ? Object.values(result?.data?.errors)[0][0] : "User Registration Fail";
			toastr.error("Error", errorMsg);
			throw new Error(result?.data?.errors);
		} else if (result?.status == 500) {
			toastr.error("Sorry", result?.statusText);
		} else if (result?.status == 201) {
			return result;
		} else {
			return {}
		}
	} catch(err) {
		return {};
	}
}

export const createSprint = async (data) => {
	try {
		let result = await ServiceCalls.post('/sprints.json', data, false);
		if (result?.status == 422 || result?.status == "error" || result?.data?.status == "error") {
			const errorMsg = (result?.data?.errors && Object.keys(result?.data?.errors).length) ? Object.values(result?.data?.errors)[0][0] : "User Registration Fail";
			toastr.error("Error", errorMsg);
			throw new Error(result?.data?.errors);
		} else if (result?.status == 500) {
			toastr.error("Sorry", result?.statusText);
		} else if (result?.status == 201) {
			return result;
		} else {
			return {}
		}
	} catch(err) {
		return {};
	}
}