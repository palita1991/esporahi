import React from 'react';
import { Link } from 'react-router-dom';
import ImageMeme from './Meme/ImageMeme';
import FooterMeme from './Meme/FooterMeme';

export default function MemeList(props) {
  const { memes, categorySelected } = props;
  return (
    <div className="container my-2 h-auto">
      <h1 className="text-center" id="title_category">
        {categorySelected}
      </h1>
      {memes.map((meme, index) => (
        <div className="card shadow rounded-lg my-3" id="cardMeme" key={index}>
          <h5 className="card-title text-dark text-center mb-0 py-1 title_meme">
            {meme.title}
          </h5>
          <Link
            to={`/meme/${meme._id}`}
            className="link"
            onClick={() => {
              props.changeView(`${meme._id}`, 'meme');
            }}
          >
            <ImageMeme src={meme.image} />
          </Link>
          <FooterMeme
            upvotes={meme.upvotes.user_id}
            downvotes={meme.downvotes.user_id}
            userLoggin={props.user}
            addVotos={props.addVotos}
            memeId={meme._id}
            comments={meme.comments}
          />
        </div>
      ))}
    </div>
  );
}
