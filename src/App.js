import { Container } from 'react-bootstrap';
import styles from './App.module.css'
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults"
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import CreateCategoryForm from './pages/categories/CreateCategoryForm';

function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create/" render={() => <PostCreateForm /> } />
          <Route exact path="/posts/:id/" render={() => <PostPage /> } />
          <Route exact path="/categories/create/" render={() => <CreateCategoryForm />}/>
          <Route render={() => <h1>Page not found..</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;