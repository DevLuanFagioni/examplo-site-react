import Projeto from '../components/Projeto'

function Projetos() {
    
    return(
        <>
            <h1>Meus projetos</h1>

            <Projeto
                nome='Site React'
                descricao='lorem ipsum dolor sit amet, consectetur adipiscing'
                src='https://placehold.co/200'
                deploy='https://netlify.com'
                github='https://github.com/'
            />

            <Projeto
                nome='Site React2'
                descricao='lorem ipsum dolor sit amet, consectetur adipiscing'
                src='https://placehold.co/200'
                deploy='https://netlify.com'
                github='https://github.com/'
            />
        </>
    )
}

export default Projetos