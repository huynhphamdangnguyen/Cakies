import {RouterProvider} from 'react-router-dom'
import router from "./routes";
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';


function App() {

  
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position='top-center' />
    </>
  );
}


export default App;
