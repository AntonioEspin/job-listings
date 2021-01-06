import React, {useState, useEffect} from 'react'
import Header from '../components/Header.jsx'
import MainSection from '../components/MainSection.jsx';
import SectionItem from '../components/SectionItem.jsx';
import '../assets/styles/App.scss'

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(()=> {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => setInfo(data))
  }, [])

  return (
    <div>
      <Header/>
      <MainSection>
        {
          info.map(item => 
            <SectionItem key={item.id} {...item} />           
            )
        }
      </MainSection>
    </div>
  )
}

export default App;