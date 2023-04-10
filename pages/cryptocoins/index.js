import Axios from "axios";
import Head from 'next/head'
import styles from "@/styles/Cryptocoins.module.css"

function coinCardColor (index) {
    if (index % 2 == 0) {
        return 'rgba(220,30,9,0.85)'
    } else {
        return 'rgba(51,31,196,0.85)'
    }
}

function strongColor(index) {
    if (index % 2 != 0) {
        return "rgb(231,250,62)"
    } else {
        return "rgb(40,225,235)"
    }
}

const CryptoArr = ({ coinData }) => {
    console.log(coinData)
    return (
        <>
            <Head>
                <title>Current Price - Boomarket</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.parent}>
                {coinData.coins.map((crypto,index)=>{
                    return (
                        <div className={styles.coinData} key={crypto.id} style={{
                            backgroundColor:coinCardColor(index),marginBottom:"15px",
                            padding:"10px"
                            }}>
                            <h1>{crypto.name}/{crypto.symbol}</h1>
                            <div className={styles.coinDetail}>
                                <img className={styles.coinImg} src={crypto.icon}/>
                                <p className={styles.coinPrice}><strong style={{color:strongColor(index)}}>Current Price:</strong> {crypto.price}</p>
                            </div>
                            <hr/>
                            <br/>
                            <div>
                                <p><strong style={{color:strongColor(index)}}>Available Supply:</strong> {crypto.availableSupply}</p>
                                <p><strong style={{color:strongColor(index)}}>Total Supply:</strong> {crypto.totalSupply}</p>
                                <p><strong style={{color:strongColor(index)}}>Volume:</strong> {crypto.volume}</p>
                                <p><strong style={{color:strongColor(index)}}>Price Per BTC:</strong> {crypto.priceBtc}</p>
                                <p><strong style={{color:strongColor(index)}}>Market Cap:</strong> {crypto.marketCap}</p>
                                <a 
                                    style={{color:"rgb(68,197,106)"}}
                                    href={crypto.websiteUrl} target="_blank"
                                >Click here {crypto.symbol} website to know more</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const data = await Axios.get(
      "https://api.coinstats.app/public/v1/coins?skip=0"
    );
  
    return {
      props: {
        coinData: data.data,
      },
      revalidate: 10,
    };
  };

export default CryptoArr;