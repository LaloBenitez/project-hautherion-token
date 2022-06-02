import React from 'react';
import { Icon, Menu, Button } from 'semantic-ui-react';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
    const [walletAddress, setWalletAddress] = useState([]);

    async function requestAccount() {
        if(window.ethereum) {
            console.log('detected');
    
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                console.log(accounts);
                setWalletAddress(accounts[0]);
            } catch (err) {
                console.log('Error connecting...')
            }
        } else {
            console.log('Meta mask not detected');
        }
    }

    async function connectWallet() {
        if(typeof window.ethereum !== 'undefined') {
            await requestAccount();
        }
    }

    return (
        <Menu style={{ marginTop: '15px' }}>
            <Link href='/'>
                <a className='item'>Hautherion</a>
            </Link>
            
            <Link href='https://github.com/LaloBenitez/project-hautherion-token'>
                <a className='item'><Icon name ='github' />Source code</a>
            </Link>

            <h6>Wallet Address: {walletAddress}</h6>
                
            

            <Menu.Menu position='right'>
                <Button onClick={requestAccount} basic color='orange'>Connect Wallet</Button>
                
            </Menu.Menu>
        </Menu>
    );
}

export default Header;