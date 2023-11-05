import Card from 'react-bootstrap/Card';
import Tags from './Tags';
const MyCard = ({cardTitle,cardDescription,imageUrl,buttonColor, buttonText}) => {
 return(
 <>
 <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
        {cardDescription}
        </Card.Text>
        <Tags text={buttonText} color={buttonColor}></Tags>
      </Card.Body>
      
    </Card>
 </div>
  
 </>
 )
};
export default MyCard;