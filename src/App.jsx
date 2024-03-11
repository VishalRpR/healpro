import Sidebar from './components/Sidebar'
import Form from './components/Form'
import { Button, Stack } from '@mui/material'
import './App.css'

function App() {

  return (
    <>
     <div style={{backgroundColor:"#f4f8fe"}}>
     <Stack direction="row" spacing={2}>
     <Sidebar></Sidebar>
     <Form></Form>
      </Stack>
      
     </div>
   
    </>
  )
}

export default App
