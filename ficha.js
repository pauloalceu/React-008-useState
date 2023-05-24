function Ficha(props){

    return (
        <div className="estilo" >
            <img src={props.foto} alt={props.nome}></img>
            <h1>Nome: {props.nome}</h1>
            <p>Idade: {props.idade}</p>
            <p> Profissão: {props.profissao}</p>
            <br/>
        </div> 
    )

}


export default Ficha