import Layout from '@/src/containers/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Soil and Environment Monitoring Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Dashboard</h1>
      </Layout>
    </>
  )
}
