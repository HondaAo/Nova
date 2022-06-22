import Head from 'next/head'
import React, { ReactElement, ReactNode } from 'react'
import NormalHeader from '../components/NormalHeader'

interface LayoutProps {
    title: string
    children: ReactNode
    description: string
}

const NormalLayouts: React.FC<LayoutProps> = ({title,children, description}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/vercel.svg" />
            <meta name="description" content={description} />
        </Head>
        <NormalHeader />
        <div className='main-container'>
          {children}
        </div>
    </div>
  )
}

export default NormalLayouts