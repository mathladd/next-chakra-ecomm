import { Box, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Ecommerce</title>
        <meta name="description" content="A simple ecommerce website" />
      </Head>
      
      <Box>These are our products!</Box>

    </div>
  )
}

export default Home
