import React, { Component } from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import { incId } from '../actions/nextId';


class StickyForm extends Component {

  state = { name: '' }

  handleSubmit = (e) => {
  e.preventDefault();
  const { name } = this.state;
  const { id, dispatch } = this.props;
  const note = { id, name };
  dispatch(addNote(note))
  dispatch(incId())
  this.setState({ name: ''})
}


handleChange = (e) =>
this.setState({ name: e.target.value })

  render() {
    return (
      <Segment>
            <h2>StickyForm</h2>
            <Form onSubmit={this.handleSubmit}>

              <Form.Field>
                <label>New Note</label>
                <input placeholder='New Note'
                  onChange={this.handleChange}
                  value={this.state.name}
                  />

              </Form.Field>
              <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}


export default connect()(StickyForm);
