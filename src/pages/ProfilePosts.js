import React from "react";
import { Header, PostsList } from "../components/components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPosts } from "../store/postsSlice";

import api from "../utils/Api";
const ProfilePosts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const setPosts = (posts) => dispatch(addPosts({ posts }))

  React.useEffect(() => {
    api
      .getPostsByUserId(id)
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <PostsList />
    </>
  );
};

export default ProfilePosts;