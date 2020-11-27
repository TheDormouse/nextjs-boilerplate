import {Card} from './'
import PropTypes from 'prop-types'
import bg from '../../public/bg.jpg'

export default {
    title: 'Card',
    component: Card
}

export const ExampleStory = Card.bind({});

ExampleStory.args = {
    src: bg,
    title: 'Simple Card'
 };
 
 ExampleStory.propTypes = {
     src: PropTypes.string,
     title: PropTypes.string
 }

ExampleStory.parameters = {
    a11y: {
        // the target DOM element
        element: '#root',
        // sets the execution mode for the addon
        manual: false,
      },
      jest: ['card.test.js']
}