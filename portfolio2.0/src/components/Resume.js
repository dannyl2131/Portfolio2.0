import resume from '../images/Daniel_Lindquist_resume.docx'

export default function Resume() {
    return (
    <div className='container'>
    <h3>Download Resume <a href={resume}>Here</a></h3>
    <h2>Front end proficiencies</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Jquery</li>
        <li>Bootstrap</li>
        <li>Responsive design</li>
    </ul>
    <h2>Back end proficiencies</h2>
    <ul>
        <li>Express</li>
        <li>Node.js</li>
        <li>SQL/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>GraphQL</li>
    </ul>
    </div>
    )
}