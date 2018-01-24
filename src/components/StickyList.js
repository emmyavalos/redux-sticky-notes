import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SingleNote from './SingleNote';

//connect & mapStateToProps, bring out stickies (first), and id(second)
//map over stickies, and render a single note with each

const StickyList = ({ notes }) => (
  <Grid>
  { notes.map( singlenote => <SingleNote key={singlenote.id} {...singlenote} /> )}
  </Grid>
)


const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(StickyList);
