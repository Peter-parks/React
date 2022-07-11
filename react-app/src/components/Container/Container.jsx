import React, {useState} from 'react';

import Card from '../Cardwidget/Card';


const Coffy = () => {
const [Coffy, setCoffy] = useState([

    {
        id: 1,
        title: "Café Arábigo",
        img_url: "https://cafeselcriollo.com/wp-content/uploads/2022/03/cafe-arabica-en-grano-taza-granos-cafes-el-criollo_Mesa-de-trabajo-1-768x513.jpg.webp",
        text:"Es el tipo de grano que conquista hasta casi un 80% de la producción mundial, sin duda el rey de las tazas de café. Procedente del sur de Etiopía, en los primeros años de su cultivo únicamente se aprovechaban sus hojas para preparar té."
    },
    {
        id: 2,
        title: "CAFÉ ROBUSTA",
        img_url: "https://www.cafescumbal.com/wp-content/uploads/2017/03/variedades-cafe-robusta-768x513.jpg",
        text:"Se trata de un grano de café procedente de un arbusto mucho más resistente en comparación con el anterior, por lo que es posible cultivarlo en una mayor variedad de terrenos."
        
    },
    {
        id: 3,
        title: "CAFÉ LIBÉRICA",
        img_url: "https://www.cafescumbal.com/wp-content/uploads/2017/03/variedades-cafe-liberia-768x512.jpg",
        text:"Procedente de los alrededores de Monrovia, en Liberia, se trata de un grano de café que proporciona un sabor particularmente diferente, por lo que su consumo no está muy extendido. No obstante, es un tipo de grano que es muy apreciado en países escandinavos."

    },
    {
        "id": 4,
        "title": "CAFÉ EUGENIOIDES",
        "img_url": "https://images.delightedcooking.com/white-cup-of-steaming-coffee.jpg",
        "text":"El café Eugenioides es naturalmente dulce (quizás debido al menor amargor de la cafeína) y a menudo se etiqueta con sabores alegres e inusuales como aguardiente de sésamo, malvaviscos tostados, gotas de limón y leche en grano."

    },
    {
    "id": 5,
    "title": "CAFÉ CATURRO",
    "img_url": "http://4.bp.blogspot.com/--ZWeZa6GsuQ/T4RfoycA3lI/AAAAAAAAADA/LyO_x8ya7IA/s1600/taza-de-cafe.jpg",
    "text":"En su origen, el caturro -o caturra- es proveniente de Etiopía y está vinculado a la especie arábica, que se caracteriza por un café fino, suave y de muy buen aroma. Este debe ser cultivado en terrenos de mayor altitud, por lo que su recolección suele ser más costosa y sus niveles de cafeína menores."
    },
    {
        "id": 6,
        "title": "KOPI LUWAK",
        "img_url": "https://static2.diariovasco.com/www/multimedia/202010/11/media/cortadas/kopi-luwak-cafe-mas-caro-del-mundo-kTwD-RVm8Et4Re5e6UI8d5QRwy7K-1248x770@Diario%20Vasco.jpg",
        "text":"Para obtener una experiencia gourmet poco común, pruebe los premiados granos extraídos del estiércol de civeta indonesia. Esta criatura similar a una mangosta, se da festines con los frutos del café antes de defecar la semilla. El sistema digestivo procesa los frutos otorgándole así el sabor característico a los granos."
        }
    

]);
  


return (
    <div className='container'>
        <div className='row row-cols-auto justify-content-center'>
            
             {Coffy.map( Coffy =>{
                return(
                                        
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Card 
                            title={Coffy.title}
                            img_url={Coffy.img_url}
                            text={Coffy.text}
                            id={Coffy.id}
                            
                        />
                        
                    </div>
                )
            })}
            
        </div>
    </div>
)
}

export default Coffy;
