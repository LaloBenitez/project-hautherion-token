import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'

class CampaignIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ marginLeft: '200px', marginRight: '200px'}}>
          <h1>About hautherion</h1>
          <p>
            Hautherion Token (HAUTH) 
            was released on June 2nd 2022, in Monterrey, Nuevo León, México. The name is ispired by a 
            character name that I used on my first toon on a game called World of Warcraft.
          </p>
          <br />
          <p>
            HAUTH was implemented following the ERC-20 token standard and currently runs on the Ethereum Rinkeby Test network.
            It has a capped supply of 100 million tokens and every time a transaction is mined, it rewards 25 HAUTH. This is a toy project
            that I used to learn how to work with the ERC-20 standard as well as how to hook up a front end application, using ethers.js, with a deployed
            smart contract. 
            
            Other tools that were used: Solidity (smart contract programming), Remix (online IDE), Hardhat (testing/deployment tools), Metamask (Ethereum wallet).
          </p>
        </div>
        

      </Layout>
    )
  }
}

export default CampaignIndex;
