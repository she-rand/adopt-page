import Button from 'react-bootstrap/Button';
const Tags = ({text,color}) => {
    return (
    <> 
        <Button variant={color}>{text}</Button>   
    </>
    )
    };
    export default Tags;