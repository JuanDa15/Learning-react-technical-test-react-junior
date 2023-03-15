import { useEffect, useState } from "react";
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
const CAT_ENDPOINT_IMAGE_URL = (word) => `https://cataas.com/cat/says/${word}?size=50&color=red&json=true`;

// siempre deben empezar por use
// No puede estar dentro de un if
// No puede estar dentro de un while,
// No puede cambiar su posicion
export function useCatImage ({fact}) {
	const [imageUrl, setImageUrl] = useState();

	// Para recuperar la imagen cada que haya una cita nueva
	useEffect(() => {
		if (!fact) return;
		// const firstWord = fact.split(' ').slice(0, 3).join(' ');
		const firstWord = fact.split(' ', 1).join(' ');
		fetch(CAT_ENDPOINT_IMAGE_URL(firstWord))
			.then(res => res.json())
			.then(res => {
				const { url } = res;
				setImageUrl(url)
			})
	},[fact])

	return { imgUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}