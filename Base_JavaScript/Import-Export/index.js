import './index.css';
import JS_IMAGE from './assets/js.jpg';
// import { App } from './src/modules/app';
import App from './src/modules/app';

// console.log('Hello World');

// const jsImageHTML = document.createElement('img');
// jsImageHTML.className = 'js-image';
// jsImageHTML.src = JS_IMAGE;

// document.body.append(jsImageHTML);

const app = new App();
app.run();