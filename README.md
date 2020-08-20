# Calculate True Height

A small, basic function, to calculate the true height of your window, and create a CSS variable which represents a true 100vh.

Useful for those annoying mobile bars.

## Import:
`import CalculateTrueHeight from "./Utils/CalculateTrueHeight";`

## Usage:
`CalculateTrueHeight();`

## On Resize:
### May want to debounce this
`window.addEventListener('click', () => CalculateTrueHeight());`

## Usage in CSS:
`height: 100vh; /**  Fallback for browsers that do not support Custom Properties **/
height: calc(var(--vh, 1vh) * 100);`
