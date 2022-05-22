import React from "react";
import { CommentPopup, CommentsList, Header, PostDescription } from "../components/components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPost, addComments } from "../store/postsSlice";

import api from "../utils/Api";
const PostDetails = () => {
  const [isCommentsPopupOpen, setIsCommentsPopupOpen] = React.useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  const currentPost = useSelector(state => state.posts.currentPost);
  const comments = useSelector(state => state.posts.currentComments);

  const setPost = (currentPost) => dispatch(addPost({ currentPost }))
  const setComments = (currentComments) => dispatch(addComments({ currentComments }))

  function handleCommentSubmit(email, name, text) {
    api
      .makeComment(email, name, text)
      .then((newComment) => {
        setComments([...comments, newComment]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    api
      .getPostById(id)
      .then((data) => {
        setPost(data)
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getCommentsByPostId(id)
      .then((data) => {
        setComments(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <PostDescription title={currentPost.title} text={currentPost.body} />
      <CommentsList openPopup = {()=>setIsCommentsPopupOpen(true)}/>
      <CommentPopup isOpen={isCommentsPopupOpen} onClose={()=>setIsCommentsPopupOpen(false)} onAddComment={handleCommentSubmit}/>
    </>
  );
};

export default PostDetails;