import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";

const NormalHeader = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    return (
        <div className="header-container">
            <div className="header-left">
                ⚡️NOVA
            </div>
            <div className="header-right">
                <div className="button-section">
                  {isAuthenticated ? (
                  <>
                    <div className="signin">SignIn</div>
                  </>
                  ) : (
                  <>
                   <Link href='/accounts'>
                    <a className="account-button">Acount</a>
                   </Link>
                   <Link href='/topic'>
                    <a className="videos-button">Topic Video</a>
                   </Link>
                  </>
                  )}  
                </div>
            </div>
        </div>
    )
}

export default NormalHeader