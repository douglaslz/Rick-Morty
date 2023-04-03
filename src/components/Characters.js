export default function Characters(props){
	const{characters , setCharacters} =props;
	console.log(props);

	const resetCharacter = () =>{
		setCharacters(null);
	}


	return (

	<div className="characters">
		<h1>Characters</h1>
		<span className="back-home" onClick={resetCharacter}>Back Home</span>
		<div className="container-characters">
			{characters.map((characters,index) => (
				<div className="character-container"  key={index}>
					<div>
						<img src={characters.image} alt={characters.name}/>
					</div>
					<div>
						<h3>{characters.name}</h3>
						<h6>{characters.status==="Alive" ? (
							<>
								<span className="alive">
									Alive
								</span>
							</>) :(
							<>
								<span className="dead">
									Dead
								</span>
							</>


							)


					}</h6>
					<p>
						<span className="text-grey">
							Episode: 
						</span>
						<span>{"  "+characters.episode.length}</span>
					</p>
					<p>
						<span className="text-grey">
							Specie: 
						</span>
						<span>{"  "+characters.species}</span>
					</p>
					</div>
				</div>

				))}
		</div>
		<span className="back-home" onClick={resetCharacter}>
			Back Home
		</span>
	</div>

);
}