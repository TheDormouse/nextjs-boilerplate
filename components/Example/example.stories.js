import {Example} from './'
import PropTypes from 'prop-types'

export default {
    title: 'Example',
    component: Example
}

export const ExampleStory = Example.bind({});

ExampleStory.args = {
   err: false,
};

ExampleStory.propTypes = {
    err: PropTypes.bool
}

ExampleStory.parameters = {
    a11y: {
        // the target DOM element
        element: '#root',
        // sets the execution mode for the addon
        manual: false,
      },
      jest: ['example.test.js']
}