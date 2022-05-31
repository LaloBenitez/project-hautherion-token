import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import Link from 'next/link'

const Header = (props) => {
    return (
        <Menu style={{ marginTop: '15px' }}>
            <Link href='/'>
                <a className='item'>Hautherion</a>
            </Link>
            
            <Link href='https://github.com/LaloBenitez/project-hautherion-token'>
                <a className='item'><Icon name ='github' />Source code</a>
            </Link>
                
            

            <Menu.Menu position='right'>
                <Link href='/about'>
                    <a className='item'>About</a>
                </Link>
                    
                    <a className='item'><Icon name='add circle' /></a>
            </Menu.Menu>
        </Menu>
    );
};

export default Header;