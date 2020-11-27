import ReactDOM from 'react-dom';
import { Card } from './';
import bg from '../../public/bg.jpg'

it('Matches snapshot', () => {
  const div = document.createElement('div');
  ReactDOM.render(
   <Card src={bg} title='Jest Testing' />,
    div
  );
  expect(div).toMatchSnapshot();

  ReactDOM.unmountComponentAtNode(div);
});