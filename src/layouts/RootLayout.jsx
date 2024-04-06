import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import {Outlet} from 'react-router-dom'

const RootLayout = () => {
  return (
      <div className="app">
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer />
      </div>
    
  )
}

export default RootLayout