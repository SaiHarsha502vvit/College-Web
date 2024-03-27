import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Provides World Class Education in Your Finger Tips</h1>
        <p>Our Cutting Edge Curriculum is designed to empower Students with the Knowledge,Skills and Expericence needed to excel in the Dynamic fiels of education</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
