import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
export default class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  onChangeComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  agregar = () => {
    this.props.addComment(this.state.comment);
  };

  render() {
    return (
      <div className="card text-left my-1 shadow">
        <div className="card-body py-0 px-2 card_comment">
          <div className="form-group">
            <label
              className="d-flex justify-content-start"
              htmlFor="exampleFormControlTextarea1"
            >
              Escribir comentarios
            </label>
            <textarea
              className="form-control"
              id="comment_meme"
              rows="2"
              value={this.state.comment}
              onChange={this.onChangeComment}
            ></textarea>
          </div>
        </div>
        <div className="card-footer text-muted d-flex justify-content-end px-0 py-2 card_comment_footer">
          <button
            className="btn btn-info btn-md font-weight-bold text-uppercase mr-2 rounded-pill"
            onClick={this.agregar}
          >
            <FontAwesomeIcon icon={faComment} size="lg" color="#ffffff" />
          </button>
        </div>
      </div>
    );
  }
}
