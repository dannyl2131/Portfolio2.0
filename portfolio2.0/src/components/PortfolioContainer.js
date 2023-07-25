import React, {useState} from 'react';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Project from './Projects';
import Footer from './Footer';
import Resume from './Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('about');

    const renderPage = () => {
        if(currentPage === 'about'){
            return <About />
          } else if(currentPage === 'contact'){
            return <Contact />
          } else if(currentPage === 'projects'){
            return <Project />
          } else if(currentPage === 'resume'){
            return <Resume />
          }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
        <div>
          <Footer />
        </div>
        </>
    )
}