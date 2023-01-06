import Link from "next/link"
import { ReactNode } from "react";
import styles from '../../../styles/App.module.css'

interface DashboardProps  {
    isAuthorized: ReactNode;
    username: ReactNode;
  };

const Dashboard = ({ isAuthorized, username, ...pageProps }: DashboardProps) => {

    const authorizedBody =
        <>
            You successfully signed in with Passage.
            <br /><br />
            Your username is: <b>{username}</b>
        </>

    const unauthorizedBody =
        <>
            You have not logged in and cannot view the dashboard.
            <br /> <br></br>
            
            <Link href="/login" className={styles.link}>Login to continue.</Link> 
        </>


    return (
        <div className={styles.mainContainer}>
            <div className={styles.dashboard}>
                <div className={styles.title}>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
                <div className={styles.message}>
                    {isAuthorized ? authorizedBody : unauthorizedBody}
                </div>
            </div>
        </div>


    )
}

export default Dashboard