import React from 'react'
import { Link } from 'react-router-dom'

const resources = require('./list-of-resources.json')

class Landing extends React.Component {
	render() {
		return (
			<div className='landing'>
				<h1>Welcome to HAH</h1>
				<Link to='/verification'>Verification Portal</Link>
				<input type='text' placeholder='Search' />

				{ resources.map((resource => {
					return (
						<Link to='/search' key={resource.id}>{resource.name}</Link>
					)
				}))}

				<Link to='/search'>Just in case I forget</Link>
				<pre><code>{ 'This is a good way to debug' }</code></pre>
			</div>
		)
	}
}

export default Landing