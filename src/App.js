import { Container } from 'react-bootstrap';
import styles from './App.module.css'
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults"
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const currentUserContext = createContext()
export const setCurrentUserContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const { data } = await axios.get('/dj-rest-auth/user/')
      setCurrentUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleMount()
  }, [])

  return (
    <currentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home Page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route render={() => <h1>Page not found..</h1>} />
            </Switch>
          </Container>
        </div>
      </setCurrentUserContext.Provider>
    </currentUserContext.Provider>
  );
}

export default App;