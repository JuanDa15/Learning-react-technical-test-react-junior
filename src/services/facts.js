const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
	return fetch(CAT_ENDPOINT_RANDOM_FACT)
	.then(res => {
		// El fetch devuelve los errores en dos casos, si el 
		// status code no es correcto
		if (!res.ok) {
			// setFactError('Error while getting the fact');
		}
		return res.json()
	})
	.then(data => {
		const {fact } = data;
		return fact;
	}).catch(() => {
		// Si hay un error al hacer la petición, no la respuesta
		// Cuando se va el internet
	})
}

export const getRandomFactAsync = async() => {
	const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
	const responseBody = await response.json();
	const { fact } = responseBody;
	console.log(fact);
	return fact;
}