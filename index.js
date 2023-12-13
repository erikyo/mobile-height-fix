/**
 * Class representing a MobileHeightFix.
 * Fixes the height issue for mobile browsers where the address bar is visible and the content does not fill the full height of the screen.
 */
class MobileHeightFix {
  /**
   * Initializes the constructor.
   */
  constructor() {
    this.setFullHeight = this.setFullHeight.bind(this);
    this.init();
  }

  isCssPropertyValueSupported(prop, val) {
    var el = document.createElement('div');
    el.style[prop] = val;
    return el.style[prop] === val;
  }

  /**
   * Sets the full height of the window.
   *
   * @return {void}
   */
  setFullHeight() {
    if (this.isCssPropertyValueSupported('height', '100dvh')) {
      document.documentElement.style.height = `100dvh`;
      return;
    }
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.height = `calc(var(--vh, 1vh) * 100)`;
  }

  /**
   * Initializes the function by setting the full height and adding a resize event listener.
   *
   * @return {void}
   */
  init() {
    this.setFullHeight();
    window.addEventListener('resize', this.setFullHeight);
  }
}

/**
 * Initializes the MobileHeightFix class
 * sets the full height variable on the HTML root element
 * and adds a resize event listener
 */
export default MobileHeightFix;
