import { Card,Button } from "react-bootstrap";

const item = ({Product}) => {
    return(
        <Card style={{ width: '18rem', marginLeft: '2rem',marginBottom:'2rem', marginTop:'2rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
            <Card.Title>{Product.name}</Card.Title>
            <Card.Text>{Product.descripcion}</Card.Text>
            <Card.Text>{Product.price}</Card.Text>
            <Button variant="primary">Comprar</Button>
         </Card.Body>
        </Card>
    );
};

export default item;