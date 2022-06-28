import React, {useState} from 'react'

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

    }

]);
  


return (
    <div>
        {Coffy.map( Coffy =>{
            return(

                <Card 
                    title={Coffy.title}
                    img_url={Coffy.img_url}
                    text={Coffy.text}
                />
            )
        })}
    </div>
  )
}

export default Coffy;