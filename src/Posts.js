/* eslint-disable no-unused-vars */
export default function Posts(){
    const data= carregarData();
    console.log(Object.keys(data));
    return(
        <div className="posts">
            {Object.keys(data).map(key => (
                <Post perfil= {data[key].perfil } imgPerfil= {data[key].imgPerfil } conteudo= {data[key].conteudo } imgCurtiu= {data[key].imgCurtiu } userCurtiu= {data[key].userCurtiu } curtidas= {data[key].curtidas} />
            ))}
        </div>
    );
}

function Post(props){
    
    const { perfil, imgPerfil, conteudo, imgCurtiu, userCurtiu, ...rest } = props;
    return(
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgPerfil} alt="imagem"/>
                    {props.perfil}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.conteudo} alt="imagem"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgCurtiu} alt="imagem"/>
                    <div className="texto">
                        Curtido por <strong>{props.userCurtiu}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
function carregarData(){
    return ({
        0: { 
            perfil: "meowed", 
            imgPerfil: "./img/meowed.svg", 
            conteudo: "./img/gato-telefone.svg", 
            imgCurtiu: "./img/respondeai.svg", 
            userCurtiu: "respondeai",
            curtidas: "101.523"
        }, 
        1: { 
            perfil: "barked", 
            imgPerfil: "./img/barked.svg", 
            conteudo: "./img/dog.svg", 
            imgCurtiu: "./img/adorable_animals.svg", 
            userCurtiu: "adorable_animals", 
            curtidas: "99.159"
        } 
    })
}