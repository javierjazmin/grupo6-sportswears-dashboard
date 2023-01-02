import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
function MainContent(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="main-content" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Header />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default MainContent;