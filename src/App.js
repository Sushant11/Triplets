import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Start from './components/Start'
import Play from './components/Play'
import Finish from './components/Finish'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Start} />
      <Route path="/play" component={Play} />
      <Route path="/finish" component={Finish} />
    </Switch>
  )
}