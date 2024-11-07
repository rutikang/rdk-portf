import { Top } from './components/Top';
import { Left } from './components/Left';
import { Right } from './components/Right';
import { Stack } from '@mui/material';
// import {BrowserRouter} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <>
    <HashRouter>
    {/* <Top/> */}


    <Stack direction={'row'} spacing={2}>
   <Left/>
   <Right/>
    </Stack>
    </HashRouter>

    </>
  )
}

export default App;
