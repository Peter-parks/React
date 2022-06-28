
import React,{ useState } from "react";
import './Card.css'


function Card ({title,img_url,text}){

    const [count, setCount] = useState(0)

    return(

        <div className="card_container">
            <div className="img_body">
                <img src={img_url} alt="cafe" />
            </div>
            <div className="Card_body">
                <div className="card_title">
                    <h2>
                    {title}
                    </h2>
                    
                </div>
                <div className="card_text">
                    <p>
                    {text}
                    </p>   
                </div>
            </div>
            
            <div className="card">
                <div className="btn_card">
                    <button onClick={()=> {
                   setCount(count - 1)
                }}>
                        <p>-</p>
                        
                    </button>
                </div>
                <span>{count}</span>
                <div className="btn_card">
                    <button onClick={()=> {
                   setCount(count + 1)
                }}>
                        <p>+</p>
                        
                    </button>
                </div>
            </div>
        </div>
        
    )

}


export default Card;




