import React from 'react'
import Layout from '../components/Layout'
import { Button, Grid } from 'semantic-ui-react'
import Link from 'next/link';
import Hautherion from '../ethereum/Hautherion';

class CampaignIndex extends React.Component {
  static async getInitialProps() {

    const tokenTicker = await Hautherion.symbol();

    return { tokenTicker }
  }

  render() {
    return (
      <Layout>
        <h1>Hautherion Token ({this.props.tokenTicker})</h1>
        <h3>The nicest, bestest, coolest, ERC20 Token ;)</h3>
        <Grid style={{ marginTop: '15px' }}>
          <Grid.Column width={5}>


          </Grid.Column>
          <Grid.Column width={9}>

            <h2>Get HAUTH:</h2>
            <Link href="https://app.uniswap.org/#/swap/0x9362b59726664D2Dd847140CADa14A8A92d45fdf?exactField=input&exactAmount=10&use=v1">
              <a><Button inverted color='pink'>Trade on Uniswap</Button></a>
            </Link>

            <Link href="faucet">
              <a><Button link inverted color='grey'>HAUTH Faucet</Button></a>
            </Link>
          </Grid.Column>
        </Grid>
      </Layout>
    )
  }
}

export default CampaignIndex;