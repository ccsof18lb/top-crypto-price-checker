import NavBar from "./navbar";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar/>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;