import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';

const Layout = (props) => {
    return (
        <Container>
            <header>
                <Header />
            </header>
            <div style={{ marginTop: '50px'}}>{props.children}</div>
            <footer style={{ marginBot: '10%'}}>
                <Footer />
            </footer>
        </Container>
    )
}

export default Layout;
