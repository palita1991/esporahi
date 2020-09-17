import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageMeme from './Meme/ImageMeme';
import FooterMeme from './Meme/FooterMeme';
import AddComment from './Meme/AddComment';
import ListComment from './Meme/ListComment';

export default function Meme(props) {
  let { id } = useParams();
  const [meme, setMeme] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    fetch(`http://localhost:8080/memes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeme(data);
        setComments(data[0].comments);
      });
  }, [id]);

  function addComment(newComment) {
    let arrayComment = comments;
    arrayComment.push({
      comment: {
        description: newComment,
        user_id: user,
      },
    });

    let objectComment = JSON.stringify({ comments: arrayComment });
    fetch(`http://localhost:8080/memes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: objectComment,
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setComments({ comments: [...comments, arrayComment] });
      });
  }

  return (
    <div className="container my-2 h-auto">
      {/*Card que contiene el meme*/}
      {meme.map((meme) => (
        <div
          className="card shadow rounded-lg my-3"
          id="cardMeme"
          key={meme._id}
        >
          <h3 className="card-title text-dark text-center mb-0 py-1 title_meme">
            {meme.title}
          </h3>
          <ImageMeme src={meme.image} />

          <FooterMeme
            upvotes={meme.upvotes.user_id}
            downvotes={meme.downvotes.user_id}
            userLoggin={props.user}
            addVotos={props.addVotos}
            memeId={meme._id}
            comments={meme.comments}
          />
          <AddComment addComment={addComment} comments={meme.comments} />
          <ListComment comments={meme.comments} />
        </div>
      ))}
    </div>
  );
}
