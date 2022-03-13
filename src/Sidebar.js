export default function Sidebar(){
    const data = carregarData();
    const sugestoes = data.Sugestoes;
    console.log(Object.keys(data.Sugestoes));
    return(
        <div className="sidebar">
            <User img = {data.User.img} nick = {data.User.nick} username = {data.User.username}/>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                { Object.keys(sugestoes).map(element=>(
                    <Sugestoes img={sugestoes[element].img} nome={sugestoes[element].nome} razao={sugestoes[element].razao} status={sugestoes[element].status}/>
            ))}
            </div>
            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}
function User(props){
    return(
        <div class="usuario">
            <img src= {props.img} alt="imagem" />
            <div class="texto">
                <strong>{props.nick}</strong>
                {props.username}
            </div>
        </div>
    );
}

function Sugestoes(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt="imagem"/>
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

                <div class="seguir">{props.status}</div>
    </div>
    );
}

function carregarData(){
    return({
        User:{
            img:"./img/catanacomics.svg", 
            nick:"catanacomics",
            username:"Catana"
        },
        Sugestoes:{
            0:{
                img:"./img/bad.vibes.memes.svg",
                nome:"bad.vibes.memes",
                razao:"Segue você",
                status:"Seguir"
            },
            1:{
                img:"./img/chibirdart.svg",
                nome:"chibirdart",
                razao:"Segue você",
                status:"Seguir"
            },
            2:{
                img:"./img/razoesparaacreditar.svg",
                nome:"razoesparaacreditar",
                razao:"Segue você",
                status:"Seguir"
            },
            3:{
                img:"./img/adorable_animals.svg",
                nome:"adorable_animals",
                razao:"Segue você",
                status:"Seguir"
            },
            4:{
                img:"./img/smallcutecats.svg",
                nome:"smallcutecats",
                razao:"Segue você",
                status:"Seguir"
            }
        }
    })
}