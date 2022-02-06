import { Card } from "react-bootstrap";
import Quinto from "../assets/img/Quinto_escalonjp.jpg"

function Logo() {
    return(
        <Card.Img style={{height:'15rem', width:'15rem', marginLeft:'15rem',marginTop:'10rem', marginBottom:'10rem'}} variant="top" src={Quinto} />
    )
}

export default Logo;