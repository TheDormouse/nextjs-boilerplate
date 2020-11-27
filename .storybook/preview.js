import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';
import '../components/global.css'
 
import results from '../.jest-test-results.json';
 
addDecorator(
  withTests({
    results,
  })
);

// .storybook/preview.js

export const globalTypes = {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        // array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
      },
    },
  };

// .storybook/preview.js

const withThemeProvider=(Story,context)=>{
    document.documentElement.setAttribute('data-theme', context.globals.theme)
  return (
      <Story {...context} />
  )
}
export const decorators = [withThemeProvider];