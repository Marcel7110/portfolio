import data from './data/data.json'

import Header from './sections/Header'
import MainSites from './sections/MainSite'
import Technology from './sections/Technology'
import SubSites from './sections/SubSites'

function App() {
  return (
    <>
      <Header themes={data.themes}/>
      <main>
        <MainSites sites={data.mainSites}/>
        <Technology tech={data.tech}/>
        <SubSites sites={data.subSites} sitesMain={data.sites} tech={data.tech}/>
      </main>
    </>
  )
}

export default App
