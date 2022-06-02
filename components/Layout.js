import React from 'react'
import Header from './Header'
import Footer from './Footer';
import Head from 'next/head'
import { Container } from 'semantic-ui-react'

const Layout = (props) => {
    return (
        <Container>
            <Header/>
            {props.children}
            <Footer/>
        </Container>
    );
}

export default Layout;
