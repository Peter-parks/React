
import React from "react";
import Detail from "../Details/Detail";

import './Card.css'



function Card ({title,img_url,text}){

    

    return(

            <div className="card">
                
                <div className="img_body">
                    <img src={img_url} className="card-img-top" alt="cafe" />
                </div>
                <div className="Card_body">
                    <div className="card_title">
                        <h2 className="card-title">
                        {title}
                        </h2>
                        
                    </div>
                    <div className="card_text">
                        <p className="card-text">
                        {text}
                        </p>   
                    </div>
                </div>
                
               <Detail/>
            </div>
       
        
    )

}


export default Card;




