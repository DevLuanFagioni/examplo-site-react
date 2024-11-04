
function Usuario({nome, idade, peso, altura, profissao, habilidades}) {
    
    const imc = (peso / (altura**2)).toFixed(2)

    return(
        <>
            <h3>Nome: {nome}</h3>
            <p>Idade: {idade}</p>
            <p>Peso: {peso} - altura: {altura}</p>
            <p>IMC: {imc}</p>
            <p>profissao: {profissao}</p>
            <p>Habilidades: {habilidades}</p>
        </>
    )
}

export default Usuario