import { useState } from 'react'
import Navbar from '../../components/MainPageComponents/Navbar'
import SDEPreparationPage from '../../components/tutorial/TutorialMainPageCards/SdePreparationComponent'
import ComputerSciencePage from '../../components/tutorial/TutorialMainPageCards/ComputerScienceCoreSubjects'
import Footer from '../../components/MainPageComponents/Footer'

interface SdePreparationPageProps {
  darkMode?: boolean;
}

const SdePreparationPage = ({ darkMode: propDarkMode }: SdePreparationPageProps) => {
  const [darkMode, setDarkMode] = useState(propDarkMode ?? false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <SDEPreparationPage darkMode={darkMode} />
      <ComputerSciencePage darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default SdePreparationPage
