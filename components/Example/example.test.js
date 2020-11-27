import ReactDOM from 'react-dom';
import { Example } from './';

// A straightforward link wrapper that renders an <a> with the passed props. What we are testing
// here is that the Link component passes the right props to the wrapper and itself.
const LinkWrapper = props => <a {...props} />; // eslint-disable-line jsx-a11y/anchor-has-content

it('Renders "Hello World"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
   <Example />,
    div
  );

  expect(div.textContent).toEqual('Hello World');

  ReactDOM.unmountComponentAtNode(div);
});
