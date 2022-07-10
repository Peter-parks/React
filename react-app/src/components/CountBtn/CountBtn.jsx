import React, {useState} from 'react'

function CountBtn() {
    const [count, setCount] = useState(0)
  return (
    <div className="btnContainer">
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
  )
}

export default CountBtn;

