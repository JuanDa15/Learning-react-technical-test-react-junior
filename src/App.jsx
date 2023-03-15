import './App.css';
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from "./hooks/useCatImage";

export function App() {
	const { fact, refreshFact } = useCatFact();
	const { imgUrl} = useCatImage({ fact })

	const handleClick = () => {
		refreshFact()
	}

	return (
		<main className="center-content">
			<h1>App de gatos</h1>
			<button data-testid="btn" onClick={ handleClick }>Get new fact</button>
			<section>
			{/* Conditional render */}
				{ fact && <p data-testid="fact">{fact}</p>}
				{ imgUrl && <img data-testid="img" src={imgUrl} alt={'Image extracted using the first word of a fact'} width="300" height="300"/>}
			</section>
		</main>	
	)
}

	// const [factError, setFactError] = useState();
	// Lo ideal es que un effect tenga solo una responsabilidad
	// Por ejemplo este solo va a recuerar el fact, ya no va tener 
	// Toda la logica

	
	// FETCHING WITH ASYNC / AWAIT
	// useEffect(() => {
	// 	async function getRandomFact() {
	// 		const response =  await fetch(CAT_ENDPOINT_RANDOM_FACT)
	// 		const json = await response.json();
	// 		setFact(data.fact)
	// 	}

	// 	getRandomFact();
	// }, [])