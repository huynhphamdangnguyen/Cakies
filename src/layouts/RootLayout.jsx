import {Outlet} from 'react-router-dom'
import Sidenav from '../Components/Sidenav/Sidenav'

const RootLayout = () => {
  return (
      <div className="app">
        <Sidenav />
        <main>
            <Outlet/>
        </main>
      </div>
    
  )
}

export default RootLayout