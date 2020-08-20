/*
* Calculate view height using JS
* then set a global CSS variable on document
*
* @author Matt Haynes
*
* Modified from:
* https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
*
* Usage:
* height: 100vh; /**  Fallback for browsers that do not support Custom Properties **
* height: calc(var(--vh, 1vh) * 100);
*/

const CalculateTrueHeight = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export default CalculateTrueHeight;
