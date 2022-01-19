import react, {useState} from "react";

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
            <h1>Cantidad</h1>
            <button onClick={Restar}>-</button>
            <span id="contador">{count}</span>
            <button onClick={Sumar}>+</button>
        </div>
    );
};

export default Cont;