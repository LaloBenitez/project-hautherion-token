/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Layout from '../components/Layout'
import { Button, Grid, List } from 'semantic-ui-react'
import hautherion from "../ethereum/hautherion.json";
import { ethers } from 'ethers';

class CampaignIndex extends React.Component {
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
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <h1>HAUTH Faucet</h1>
              <Button onClick={this.onClick} primary>Receive 10 tokens (gas fees apply)</Button>
            </Grid.Column>
            <Grid.Column width={8}>
              <h2> Instructions</h2>
              <List ordered verticalAligns>
                <List.Item as='h3'>Install <a href='https://metamask.io/download/'>Metamask</a> and click on Connect Wallet. </List.Item>
                <List.Item as='h3'>Click on the 'Receive 10 tokens' button.</List.Item>
                <List.Item as='h3'>You will be prompted to accept the transaction (You will need to cover Ethereum gas fees).</List.Item>
                <List.Item as='h3'>Once accepted, 10 HAUTH tokens will be transferred to your MetaMask wallet.</List.Item>
                <List.Item as='h3'>You can only receive HAUTH tokens once every 7 days.</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>


      
    )
  }
}

export default CampaignIndex;