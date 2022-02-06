import react, {useState} from "react";
import {Button} from "react-bootstrap";

function Cont() {
    const[count,setCount] = useState(0);
    let  stock = 5;

    function Restar() {
        if (count > 0) {
            setCount(count - 1);
        };
    };
    function Sumar() {
        if (count < stock){
            setCount(count + 1);
        };
    };
    return (
        <div>
            <h4 style={{color:'whitesmoke'}}>Selecione cantidad:</h4>
            <Button variant="danger" onClick={Restar}>-</Button>
            <span style={{color:'whitesmoke', margin:'1rem'}} id="contador">{count}</span>
            <Button variant="success" onClick={Sumar}>+</Button>
        </div>
    );
};

export default Cont;