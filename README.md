Certainly! If you want to provide both options (a script that automatically works without import/export and a module that can be imported in more complex setups), you can create two separate scripts. Here's an updated README:

# Index

A simple module for fixing the height issue in mobile browsers where the address bar is visible, and the content does not fill the full height of the screen.

## Installation

```bash
npm install mobile-height-fix
```

## Usage

### Script (No Import/Export)

Add the following script tag in the `<head>` section of your HTML file to ensure that the script is executed as soon as possible:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website Title</title>
    <script src="node_modules/mobile-height-fix/MobileHeightFix.js"></script>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### Module (Import/Export)

If you are using a bundler or a more complex JavaScript setup, you can import the module in your JavaScript file:

```javascript
// Import the Index module
import Index from 'mobile-height-fix/';

// Create an instance and initialize the fix
const heightFix = new Index();
```

### Explanation

#### Script (No Import/Export)

The `Index` script provides a solution to the issue on mobile browsers where the address bar is visible, and the content does not fill the full height of the screen. It automatically sets a custom property (`--vh`) on the HTML root element to reflect the actual height of the viewport. The script is designed to work without explicit import/export and automatically sets the full height when it is loaded. It also adds a resize event listener to handle changes in viewport size.

#### Module (Import/Export)

The `Index` module can be imported in more complex JavaScript setups. It provides the same functionality as the script but allows you to use modern JavaScript features like import/export. To use this option, import the module and create an instance to initialize the fix.

## Example

### Script (No Import/Export)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website Title</title>
    <script src="node_modules/mobile-height-fix/mobile-height-fix.js"></script>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### Module (Import/Export)

```javascript
// Import the Index module
import Index from 'mobile-height-fix/module';

// Create an instance and initialize the fix
const heightFix = new Index();
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.