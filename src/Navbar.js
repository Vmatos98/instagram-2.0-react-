
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Icon name="logo-instagram" />
                    <div className="separador"></div>
                    <img src="./img/logo.png" alt="logo instagram" />
                </div>

                <div className="logo-mobile">
                    <Icon name="logo-instagram" />
                </div>

                <div className="instagram-mobile">
                    <img src="./img/logo.png" alt="logo instagram"/>
                </div>
        
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div className="icones">
                    <Icon name="paper-plane-outline" />
                    <Icon name="compass-outline" />
                    <Icon name="heart-outline" />
                    <Icon name="person-outline" />
                </div>

                <div className="icones-mobile">
                <Icon name="paper-plane-outline" />
                </div>
            </div>
        </div>
    );
}

function Icon(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    );

}