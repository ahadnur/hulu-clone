import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Resutls from '../components/Resutls'
import requests from '../utils/requests'


export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="author" content="Md. Ahadujjaman Nur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />

      {/* Result */}
      <Resutls results={results} />
      
    </div>
  )
}


export async function getServerSideProps(context){
  const genre =context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||
  requests.fetchTrending.url
  }`).then(res => res.json())
  return {
    props:{
      results: request.results
    }
  }
}