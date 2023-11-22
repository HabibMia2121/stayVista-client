import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Room from "../../components/Room/Room"

const Home = () => {
  return (
    <div>
      {/* meta tags  */}
      <Helmet>
        <title>StayVista</title>
      </Helmet>

      {/* category section here */}
      <Categories/>
      {/* Rooms section here */}
      <Room/>
    </div>
  )
}

export default Home
