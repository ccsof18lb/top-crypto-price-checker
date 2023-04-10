import Link from "next/link"
import Head from 'next/head'

const FOF = () => {
    return (
        <>
            <Head>
                <title>404 - Boomarket</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{"text-align":"center","paddingTop":"25%"}}>
                {" "}
                <h1>404 Error | Page Not Found</h1>
                <br/>
                <span>
                    Back to the Dashboard: <Link href="/">Here</Link>
                </span>
            </div>
        </>
    )
}

export default FOF;