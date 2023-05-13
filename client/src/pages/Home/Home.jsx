import { useEffect } from "react"
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts"
import Hero from "../../components/Hero/Hero"
import "./Home.css"


const Home = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <div className="home">
     <Hero />
     <FeatureProducts />
    </div>
  )
}

export default Home