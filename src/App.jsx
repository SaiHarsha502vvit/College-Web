import Title from './components/Title/Title'
import Hero from './components/Hero/Hero'
import NavBar from './components/navbar/NavBar'
import Programs from './components/programs/Programs'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title  subTitle='Our Programs' title='Courses Offerd' />
        <Programs/>
        <About/>
        <Title  subTitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact/>
        <Footer/> 
      </div>
    </div>
  )
}

export default App
