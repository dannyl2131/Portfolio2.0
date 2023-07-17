import danny from '../images/danny.jpg';
import Fade from 'react-bootstrap/Fade';
import { useState } from 'react';

const styles = {
    borderRadius : "50%",
    height: "22rem",
    divStyles: {
        height: "100vh",
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default function About() {
    const [open, setOpen] = useState('true')
    let photo = <img className='col col-md-6 col-lg-4 mx-auto d-block m-3' id='avatar'style={styles} alt="Danny Lindquist" src={`${danny}`}></img>
    let text = "Highly motivated and skilled software engineer with a strong background in desktop support, web development, and customer service. Seeking a challenging software engineering position that leverages my technical ability, critical thinking skills, and passion for creating robust and innovative software solutions."
    return (
        <div style={styles.divStyles} className='container'>
            <Fade timeout={0} in={open} appear={open} >
            <div className='row'>
                {photo}
            </div>
            </Fade>
            <div className='row'>
                <h3 className='aboutMe'>{text}</h3>
            </div>
        </div>
    )
}