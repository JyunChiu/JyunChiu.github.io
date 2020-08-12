import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Scss from './MoviesCss.scss';


class AddMovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };

    this.toggle = this.toggle.bind(this);
    // this.handleChangeName = this.handleChangeName.bind(this);
    // this.handleChangeTeam = this.handleChangeTeam.bind(this);
    // this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(event) {                                  /* 1 */
    console.log('handleSubmit執行了');
    event.preventDefault();
    const data = {
      title: this.getTitle.value,
      tag: this.getTag.value,
      content: this.getContent.value,
      id: this.props.newId,
      image: 'http://fakeimg.pl/440x650/282828/EAE0D0/?text=POSTER'
    };
    this.props.addmovies(data);                         /* 2 */
  }


  render() {
    console.log(' AddModal的this.props',  this.props);
    return (
      <div>
        <button className={Scss.AddMovie} onClick={this.toggle}>Add Movie</button>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Add Movie</ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="form-group col-md-6">
                  <label>Title</label>
                  <input
                    type="text"
                    ref={input => { this.getTitle = input; }}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4">
                  <label>Tag</label>
                  <input
                    type="text"
                    ref={input => { this.getTag = input; }}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label>Content</label>
                  <input
                    type="text"
                    ref={input => { this.getContent = input; }}
                    className="form-control"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <input type="submit" onClick={this.toggle} value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>

    );
  }
}

export default AddMovieModal;
