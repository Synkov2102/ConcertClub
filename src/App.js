import { Main, Profile, ProfilePosts, PostDetails } from "./pages/pages";
import React from "react";
import { Route } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { addProfiles } from "./store/profilesSlice";

import api from "./utils/Api";


function App() {
  const dispatch = useDispatch();

  const setProfiles = (profiles) => dispatch(addProfiles({ profiles }))

  React.useEffect(() => {
    api
      .getProfilesInfo()
      .then((data) => {
        setProfiles(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/profile/:id">
        <Profile />
      </Route>
      <Route path="/profile/:id/posts">
        <ProfilePosts />
      </Route>

      <Route path="/post/:id">
        <PostDetails />
      </Route>
    </>
  );
}

export default App;
