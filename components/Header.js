import React from 'react';
import { Icon, Menu, Button } from 'semantic-ui-react';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
    const [walletAddress, setWalletAddress] = useState(['No Wallet found']);

    async function requestAccount() {
        if(window.ethereum) {
            console.log('detected');

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                console.log(accounts);
                let displayAccount = breakAddress(accounts[0]);
                setWalletAddress('Connected wallet:' + displayAccount);
            } catch (err) {
                console.log('Error connecting...')
            }
        } else {
            console.log('Meta mask not detected');
        }
    }

    function breakAddress(addr) {
        return addr.substr(0,5) + '...' + addr.substr(addr.length - 4, addr.length);
    }

    async function connectWallet() {
        if(typeof window.ethereum !== 'undefined') {
            await requestAccount();
        }
    }

    return (       
        <Menu secondary style={{ marginTop: '15px' }}>
            <Link href='/'>
                <a className='item'>Hautherion</a>
            </Link>

            <Link href='/faucet'>
                <a className='item'>Faucet</a>
            </Link>

            <Link href='/about'>
                <a className='item'>About</a>
            </Link>

            <Menu.Menu position='right'>  
                <Menu.Item>
                    <h6>{walletAddress}</h6>
                </Menu.Item>
                
                <Menu.Item
                    name='signup'
                >
                    <Button size='mini' onClick={requestAccount} basic color='orange'>Connect Wallet</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;