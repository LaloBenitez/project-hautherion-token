import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import { Button } from 'semantic-ui-react'
import Link from 'next/link';

import { ethers } from 'ethers';
import Hautherion from '../ethereum/Hautherion';

class CampaignIndex extends React.Component {

  static async getInitialProps() {

    const tokenTicker = await Hautherion.symbol();
    
    return { tokenTicker }
  }

  render() {
    return (
      <Layout>
        <h1>This is home page</h1>
        <Link href="https://app.uniswap.org/#/swap/0xeED8F926787a5018e5F997FAa780a0c4A155dc88?exactField=input&exactAmount=10&use=v1">
          <Button primary>Trade on Uniswap</Button>
        </Link>
        
        <Link href="https://rinkeby.etherscan.io/token/0xeED8F926787a5018e5F997FAa780a0c4A155dc88">
          <Button secondary>View on etherscan</Button>
        </Link>

        <h1>{ this.props.tokenTicker }</h1>

        
      </Layout>
    )
  }
}

export default CampaignIndex;