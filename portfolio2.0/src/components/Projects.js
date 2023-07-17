import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from './projectData';

export default function Project() {
    let cards = []
    let delay = 0
    for(let d of data) {
        let card = <Card style={{animationDelay: `${delay}ms`}}className='m-4 w-75 grow'>
        <Card.Img style={{height: "18rem"}}variant="top" src={`${d.img}`} />
        <Card.Body>
          <Card.Title>{`${d.title}`}</Card.Title>
          <Card.Text>
            {`${d.text}`}
          </Card.Text>
          <Button href={`${d.link}`} variant="dark">Github</Button>
          <Button href={`${d.link}`} variant="dark">Visit</Button>
        </Card.Body>
      </Card>
      cards.push(card)
      delay += 100
    }
    return (
        <div className="container">
            <div className="row">
            {cards}
            </div>
        </div>
        );
}
