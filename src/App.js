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
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <PostsPage message="We couldn't find what you were looking for.." />} />
          <Route
            exact
            path="/feed"
            render={() =>
              <PostsPage
                message="We couldn't find what you were looking for.. Alter your search or follow a user"
                filter={`owner__followed__owner__profile=${profile_id}&`} />} />
          <Route
            exact
            path="/liked"
            render={() =>
              <PostsPage
                message="We couldn't find what you were looking for.. alter your search or like a post"
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />} />
          <Route
            exact
            path="/favourites"
            render={() =>
              <PostsPage
                message="No results, please favourite a post.."
                filter={`favourites__owner__profile=${profile_id}&`} />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create/" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id/" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit/" render={() => <PostEditForm />} />
          <Route exact path="/categories/create/" render={() => <CreateCategoryForm />} />
          <Route exact path="/profiles/:id/" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <h1>Page not found..</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;