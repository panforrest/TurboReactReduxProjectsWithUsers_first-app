import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Intro from './components/presentation/Intro'

const app = (
	<Provider store={store.configure(null)}>
		<div>This is my project.</div>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))