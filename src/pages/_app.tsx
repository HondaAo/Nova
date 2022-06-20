import type { AppProps } from 'next/app'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000'

function MyApp({ Component, pageProps }: AppProps) {
    //ログイン後のリダイレクト先を指定
  const redirectUri = `${process.env["NEXT_PUBLIC_BASE_URL"]}`
  return(
          <Auth0Provider
              domain={process.env["NEXT_PUBLIC_AUTH0_DOMAIN"] as string}
              clientId={process.env["NEXT_PUBLIC_AUTH0_CLIENT_ID"] as string}
              redirectUri={redirectUri}
          >
              <Component {...pageProps} />
          </Auth0Provider>
      )

}
export default MyApp