import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";

const TopHeader = () => {
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
                   <Link href='/videos'>
                    <a className="">Video List</a>
                   </Link>
                   <Link href='/topic'>
                    <a className="">Topic Video</a>
                   </Link>
                  </>
                  )}  
                </div>
            </div>
        </div>
    )
}

export default TopHeader