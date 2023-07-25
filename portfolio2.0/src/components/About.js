import danny from '../images/danny.jpg';

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
    let photo = <img className='col col-md-6 col-lg-4 mx-auto d-block m-3' id='avatar'style={styles} alt="Photo of Danny Lindquist" src={`${danny}`}></img>
    let text = "Highly motivated and skilled software engineer with a strong background in desktop support, web development, and customer service. Seeking a challenging software engineering position that leverages my technical ability, critical thinking skills, and passion for creating robust and innovative software solutions."
    return (
        <div style={styles.divStyles} className='container'>
            <div className='row'>
                {photo}
            </div>
            <div className='row'>
                <h3 className='aboutMe'>{text}</h3>
            </div>
        </div>
    )
}