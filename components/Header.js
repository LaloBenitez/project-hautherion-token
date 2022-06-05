import React from 'react';
import { Icon, Menu, Button } from 'semantic-ui-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Header() {
   
    const [walletAddress, setWalletAddress] = useState([]);

    useEffect(() => {
        setWalletAddress(window.localStorage.getItem('walletAddress'));
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('walletAddress', walletAddress);
    }, [walletAddress]);
    
    async function requestAccount() {
        if(window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                let displayAccount = breakAddress(accounts[0]);
                return setWalletAddress('Connected wallet:   ' + displayAccount);
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
                    <h5>{walletAddress}</h5>
                </Menu.Item>
                
                <Menu.Item
                    name='signup'
                >
                    <Button onClick={requestAccount} color='orange'>Connect Wallet</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;