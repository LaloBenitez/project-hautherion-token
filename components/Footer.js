import React from 'react';
import { Icon, Menu, Button, Container } from 'semantic-ui-react';
import Link from 'next/link';

function Header() {

    return (
        <Menu text>
            <Menu.Item position='right'>
                <Link href='https://rinkeby.etherscan.io/token/0x9362b59726664D2Dd847140CADa14A8A92d45fdf'>
                    <a className='item'><Icon name ='ethereum' />View on Etherscan</a>
                </Link>
            </Menu.Item>
            
            <Menu.Item>
                <Link href='https://github.com/LaloBenitez/project-hautherion-token'>
                    <a className='item'><Icon name ='github' />Source code</a>
                </Link>
            </Menu.Item>
        </Menu>
    );
}

export default Header;