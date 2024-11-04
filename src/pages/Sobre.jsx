
function Sobre({texto, endereco}) {
    
    return(
        <section>
            <div>
                <h1>Sobre</h1>
                <p>{texto}</p>
            </div>
            <img src={endereco} alt="Foto" />
        </section>
    )
}

export default Sobre