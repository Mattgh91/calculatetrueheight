# Calculate True Height

A small, basic function, to calculate the true height of your window, and create a CSS variable which represents a true 100vh.

Useful for those annoying mobile bars. Looking at you, Apple.

## Install:
`npm install @mattgh9152/calculatetrueheight`

## Import:
`import CalculateTrueHeight from "@mattgh9152/calculatetrueheight";`

## Usage:
`CalculateTrueHeight();`

## On Resize:
You may want to debounce this

`window.addEventListener('resize', () => CalculateTrueHeight());`

## Usage in CSS:
```bash
height: 100vh; /**  Fallback for browsers that do not support Custom Properties **/
height: calc(var(--vh, 1vh) * 100);
```

[Npm Repo](https://www.npmjs.com/package/@mattgh9152/calculatetrueheight) & [Github Page](https://github.com/Mattgh91/calculatetrueheight)
