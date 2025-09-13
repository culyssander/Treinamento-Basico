import React from 'react'
import ReactDom from 'react-dom/client'
import  App from './App';

// what do I want to render, and where do I want do Render it
ReactDom
.createRoot(document.getElementById('root'))
.render(
    <App />
);
