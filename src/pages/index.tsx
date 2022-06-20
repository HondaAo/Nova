import { useAuth0 } from '@auth0/auth0-react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TopHeader from '../components/TopHeader'

const Home: NextPage = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  console.log(isAuthenticated)
  return (
    <div>
      <Head>
        <title>Nova</title>
        <meta name="description" content="Nova" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      <div className='top-container'>
        <div className='top-left-container'>
          <div className='eyecatch-title'>
            <h2>10 minutes is all you
               need to make learning
               English a habit!
            </h2>
            <p>

            </p>
          </div>
          {isAuthenticated ? (
            <div className=''>
              Get started
            </div>
          ) : (
            <div className=''>
              <button className='' onClick={() => loginWithRedirect()}>Create Account</button>
            </div>
          )}
        </div>
        <div className='top-right-container'>
          {user && user.name}
        </div>
      </div>
    </div>
  )
}

export default Home
