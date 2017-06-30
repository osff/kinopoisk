import React from 'react';
import ReactDOM from 'react-dom';
// import {App, MovieListItemRatingDropdown} from './App';
import App from './App';
// import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const doc = document.createElement('document');
  const body = document.createElement('body');
  const div = document.createElement('div');
  doc.appendChild(body);
  body.appendChild(div);
  ReactDOM.render(<App />, div);
});

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <MovieListItemRatingDropdown value="4" />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
//
//   // manually change value
//   tree.props.value = 5;
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
//
//   // manually change value
//   tree.props.value = 1;
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
