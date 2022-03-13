
export default function Stories(){
    const data= {0:{imagem:"./img/9gag.svg", user:"9gag"}, 1:{imagem:"./img/meowed.svg", user:"meowed"}, 2:{imagem:"./img/barked.svg",user:"barked"}, 3:{imagem:"./img/nathanwpylestrangeplanet.svg", user:"nathanwpylestrangeplanet"}, 4:{imagem:"./img/wawawicomics.svg", user:"wawawicomics"}, 5:{imagem:"./img/respondeai.svg", user:"respondeai"},6:{imagem:"./img/filomoderna.svg", user:"filomoderna"}, 7:{imagem:"./img/memeriagourmet.svg", user:"memeriagourmet"}};
    return(   
        <div className="stories">{Object.keys(data).map((key, index) =>(
            <div className="story">
                <div className="imagem">
                    <img src={data[key].imagem} alt="imagem" />
                </div>
                <div className="usuario">
                    {data[key].user}
                </div>
            </div>
        ) )}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
                
    );
}
