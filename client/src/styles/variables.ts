import { css } from 'styled-components/macro'; // The css helper function creates a snippet of CSS that can be imported into any existing Styled Component

// styled-components (CSS variables are declared in the :root selector)
const variables = css`
  :root {
    --black: #121212;
    --near-black: #181818;
    --dark-grey: #282828;
    --grey: #535353;
    --light-grey: #b3b3b3;
    --white: #ffffff;
    --green: #0ee603;
    --green-success: #198754;
    --blue: #0513d6;
    --light-green: #03db73;
    --light-blue: #03e3af;
    --yellow: #cceb00;

    --font: Roboto, 'Circular Std', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 24px;

    --spacing-xxs: 4px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 64px;

    --border-radius-subtle: 4px;
    --border-radius-pill: 30px;

    --site-max-width: 1300px;
  }
`;
export default variables;