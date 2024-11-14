import { globalStyle } from '@vanilla-extract/css';

/**
 * This global css reset is inspired by Josh Comeau's css reset
 * https://www.joshwcomeau.com/css/custom-css-reset/
 */

/**
 * Apply box-sizing model to all elements.
 */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

/**
 * Remove default margins.
 */
globalStyle('*', {
  margin: 0,
});

/**
 * Improve text rendering.
 */
globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
});

/**
 * Improve media defaults.
 */
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

/**
 * Inherit font for form control elements.
 */
globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

/**
 * Avoid text overflows.
 */
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

/**
 * Improve line wrapping.
 */
globalStyle('p', { textWrap: 'pretty' });
globalStyle('h1, h2, h3, h4, h5, h6', {
  textWrap: 'balance',
});
