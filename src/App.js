import Sidebar from "./Components/Sidebar/Sidebar"
import MainArea from "./Components/MainArea/MainArea"
import ListNotes from "./Components/ListNotes/ListNotes"
import DisplayNote from './Components/DisplayNote/DisplayNote'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Sidebar />

      <Switch>
        <Route path="/" exact component={ListNotes} />
        <Route path="/edit" exact component={MainArea} />
        <Route path="/displayNote/:id" exact component={DisplayNote} />
      </Switch>
    </Router>
  )
}

export default App;
