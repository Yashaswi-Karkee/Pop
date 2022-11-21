import Searching from "../components/searching";
import Meta from "../components/Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta/>
      <Searching/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
