import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'

class CampaignIndex extends React.Component {
  render() {
    return (
      <Layout>
        <h1>This is home page</h1>
      </Layout>
    )
  }
}

export default CampaignIndex;