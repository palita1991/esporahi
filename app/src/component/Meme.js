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
  const [user, setUser] = useState(props.userName);
  const [hayCambio, setCambio] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/memes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeme(data);
        setComments(data[0].comments);
      });
  }, [id]);

  function addComment(newComment) {
    console.log("Antes de hacer el array push",comments);
    comments.push({
      comment: {
        description: newComment,
        user_name: user,
      },
    });
    console.log('Despues de hacer el array push', comments);

    let objectComment = JSON.stringify({ comments: comments });
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
        setCambio(true);
        setComments(comments);
        setCambio(false);
        console.log("Ya seteando el comments",comments);
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
            userNameLoggin={props.userName}
            userIdLoggin={props.userId}
            addVotos={props.addVotos}
            memeId={meme._id}
            comments={meme.comments}
          />
          {user === '' ? (
              <ListComment comments={meme.comments} />
          ) : (
            <>
            <AddComment addComment={addComment} comments={meme.comments} />
            <ListComment comments={meme.comments} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
