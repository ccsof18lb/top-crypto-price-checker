import Link from "next/link";
import styles from "@/styles/Navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.childBar}>
                <Link href="/">Dashboard</Link>
                <Link href="/cryptocoins">Coins</Link>
                <Link href="/about">About</Link>
                <Link href="/profile">Profile</Link>
            </div>
        </div>
    )
}

export default  NavBar;