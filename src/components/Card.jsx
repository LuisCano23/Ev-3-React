import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MyCard = ({ image, title, price }) => {
    return (
        <>
            <div>
                <Card>
                    <Card.Img src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <p>{price}</p>
                        <Button variant={"primary"}>Comprar!</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};
export default MyCard;