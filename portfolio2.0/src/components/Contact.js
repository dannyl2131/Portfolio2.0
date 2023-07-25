import {Form, Button} from 'react-bootstrap';

export default function Contact() {
    return (
        <div className='container'>
        <Form className='w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name here" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Enter message here" required/>
        </Form.Group>
        <Button variant="light" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
}