import React from 'react';
import { Icon, Menu, Button } from 'semantic-ui-react';
import Link from 'next/link';

function Header() {

    return (
        <Menu secondary style={{ marginTop: '35%', marginLeft: '30%' }}>
            <Link href='https://rinkeby.etherscan.io/token/0x9362b59726664D2Dd847140CADa14A8A92d45fdf'>
                <a className='item'><Icon name ='ethereum' />View on Etherscan</a>
            </Link>
            
            <Link href='https://github.com/LaloBenitez/project-hautherion-token'>
                <a className='item'><Icon name ='github' />Source code</a>
            </Link>

            <Link href='https://twitter.com/lalombenitez'>
                <a className='item'><Icon name ='twitter' />@lalombenitez</a>
            </Link>

        
        </Menu>
    );
}

export default Header;