import Axios from "axios";
import styles from "@/styles/Cryptocoins.module.css"

const CryptoArr = ({ coinData }) => {
    console.log(coinData)
    return (
        <div className={styles.parent}>
            {coinData.coins.map((crypto)=>{
                return (
                    <div className={styles.coinData} key={crypto.id}>
                        <h1>{crypto.name}</h1>
                        <div className={styles.coinDetail}>
                            <img className={styles.coinImg} src={crypto.icon}/>
                            <h5>{crypto.price}</h5>
                        </div>
                    </div>
                )
            })}
        </div>
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