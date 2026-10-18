import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/feed'

const App = () => {
  return (
    <Router>

      <Routes>

        <Route path='/' element={<CreatePost/>}/>
        <Route path='/post' element={<Feed/>} />



      </Routes>



    </Router>
  )
}

export default App
