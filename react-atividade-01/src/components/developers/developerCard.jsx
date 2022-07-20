const PersonCard = ({nome, idade, pais}) => {
    console.log(nome, idade, pais);
    return (

            <div className="UserCard">
                <h1 className="devName">
                    Dev: {nome}
                </h1>
                <p className="devDescription">
                    Idade: {idade}
                </p>
                <p className="devDescription">
                    País: {pais}
                </p>
            </div>
    
    )
  } 
  export default PersonCard;