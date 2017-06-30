import React from 'react';
import ReactDOM from 'react-dom';
import App, {MovieListItemRatingDropdown} from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);
});

test('Test MovieListItemRatingDropdown component render', () => {
  const component = renderer.create(
    <MovieListItemRatingDropdown value={4} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

jest.mock('aphrodite/lib/inject');
