import React from 'react';
import StickyNote from './components/StickyNote';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import SingleNote from './components/SingleNote';
import { Divider } from 'semantic-ui-react';


class App extends React.Component {
  render() {
    return (
      <div>
        <StickyNote />
        <StickyForm />
        <StickyList />
        <Divider/>
        <SingleNote />
      </div>
    );
  }
}

export default App;
