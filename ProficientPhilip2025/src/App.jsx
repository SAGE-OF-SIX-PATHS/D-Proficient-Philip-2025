import './App.css'
import Navbar from './Components/HeadNavigation.jsx'
// import Navbar from './Components/HeadNavigationBar.jsx'
import FirtsDiv from './Components/Welcome.jsx'
import SkillsSection from './Components/About.jsx'
import SkillsCards from './Components/ToolSkill.jsx'
import MyWorks from './Components/MyWorks.jsx'
import ContactList from './Components/Contact.jsx'
// import MagneticCursor from './Components/Cursor.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <FirtsDiv />
      <SkillsSection />
      <SkillsCards />
      <MyWorks />
      <ContactList />
      {/* <MagneticCursor /> */}
      <Footer />
    </div>
  )
}

export default App