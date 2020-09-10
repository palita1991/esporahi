import React from 'react';

export default class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'mariano',
      comment: '',
      longitud: this.props.longitud,
    };
  }

  onChangeComment(e) {
    this.setState({ comment: e.target.value });
  }

  agregar() {
    const newComment = {
      id: this.state.longitud + 1,
      user: this.state.user,
      comment: this.state.comment,
    };
    this.props.addComment(newComment);
  }

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
              onChange={this.onChangeComment.bind(this)}
            ></textarea>
          </div>
        </div>
        <div className="card-footer text-muted d-flex justify-content-end px-0 py-2 card_comment_footer">
          <button
            className="btn btn-info btn-sm font-weight-bold text-uppercase mr-2"
            onClick={this.agregar.bind(this)}
          >
            comment
          </button>
        </div>
      </div>
    );
  }
}
