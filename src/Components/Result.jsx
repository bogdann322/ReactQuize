import React from 'react'

const Result = ({ correct, questions }) => {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' alt='cong' />
			<h2>
				You answered {correct} out of {questions.length} correctly!
			</h2>
			<a href='/'>
				<button>Try again</button>
			</a>
		</div>
	)
}

export default Result
