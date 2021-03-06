import ReactDOM from 'react-dom';
import { Example } from './';

it('Renders "Hello World"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
   <Example />,
    div
  );

  expect(div.textContent).toEqual('Hello World');
  expect(div).toMatchSnapshot();

  ReactDOM.unmountComponentAtNode(div);
});
