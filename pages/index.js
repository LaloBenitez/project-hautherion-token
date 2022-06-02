import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import { Button } from 'semantic-ui-react'
import Link from 'next/link';
import Hautherion from '../ethereum/Hautherion';
import provider from '../ethereum/provider';
import hautherion from "../ethereum/hautherion.json";
import { ethers } from 'ethers';

const HAUTHERION_ADDRESS = '0x9362b59726664D2Dd847140CADa14A8A92d45fdf'

class CampaignIndex extends React.Component {
  static async getInitialProps() {

    const tokenTicker = await Hautherion.symbol();
    
    return { tokenTicker }
  }

  onClick = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const HAUTHERION_ADDRESS = '0x9362b59726664D2Dd847140CADa14A8A92d45fdf';
    const signer = provider.getSigner();
    const instance = new ethers.Contract(
        HAUTHERION_ADDRESS,
        hautherion.abi,
        signer
    );
    await instance.receiveTenTokens();
  }

  render() {
    return (
      <Layout>
        <h1>{ this.props.tokenTicker }</h1>
        <h1> 0x9362b59726664D2Dd847140CADa14A8A92d45fdf</h1>
        <Link href="https://app.uniswap.org/#/swap/0x9362b59726664D2Dd847140CADa14A8A92d45fdf?exactField=input&exactAmount=10&use=v1">
          <Button primary>Trade on Uniswap</Button>
        </Link>
        
        <Link href="https://rinkeby.etherscan.io/token/0x9362b59726664D2Dd847140CADa14A8A92d45fdf">
          <Button secondary>View on etherscan</Button>
        </Link>

        <Button onClick={this.onClick} primary>Receive 10 tokens (gas fees apply)</Button>
        

        
      </Layout>
    )
  }
}

export default CampaignIndex;