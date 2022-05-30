import axios from "axios"; 

class ServiceCalls {
	static headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

	static get(path) {
		const url = process.env.API_ORIGIN + path;

		return axios({
			method: 'get',
			url: url,
			headers: {
				...ServiceCalls.headers
			},
		}).then((res) => {
			return res.data;
		}).catch((err) => {
			return err.response;
		});
	}

	static post(path, data) {
		let url = process.env.API_ORIGIN + path;
		return axios({
			method: 'post',
			url: url,
			headers:
			{
				...ServiceCalls.headers
			},
			data: data,
		})
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err.response;
			})
	}

}

export default ServiceCalls;
