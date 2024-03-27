import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tommorows Leaders</h2>
        <p>Udemy, Inc. is an education technology company that provides an online learning and teaching platform. It was founded in May 2010 by Eren Bali, Gagan Biyani, and Oktay Caglar.
As of June 2023, the platform has 64 million learners, over 210,000 courses, and more than 75,000 instructors teaching courses in nearly 75 languages, with over 870 million course enrollments.</p>
        <p>Students take courses primarily to improve job-related skills.[4] Some courses generate credit toward technical certification. Udemy attracts corporate trainers seeking to create coursework for employees of their company</p>
        <p>Udemy is headquartered in San Francisco, California with hubs in Denver, Colorado; Dublin, Ireland; Austin, Texas; Melbourne, Australia; İstanbul, Turkey and Gurgaon, India.</p>
      </div>
    </div>
  )
}

export default About
