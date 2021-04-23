import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import ListPhoto from './features/ListPhoto/ListPhoto'
import Photo from './features/Photo/Photo'
import './assets/styles/styles.scss'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path='/photos' component={ListPhoto}></Route>
            <Route path="/photos/add" component={Photo}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
