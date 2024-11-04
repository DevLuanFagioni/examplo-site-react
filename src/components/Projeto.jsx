
function Projeto({nome, descricao, deploy, github, src}) {

    return(
        <>
            <div>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <img src={src} alt={nome} />
                <br />
                <a href={deploy}>Deploy</a>
                <a href={github}>Github</a>
                <hr/>
            </div>
        </>
    )
}

export default Projeto