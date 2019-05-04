import movies from '../data/dummyData.js'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './componets/app.jsx'

ReactDOM.render(<App movies={movies} />, document.getElementById('app'))