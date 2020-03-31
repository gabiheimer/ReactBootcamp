// ----------------------- class component ------------------------

/* // class Hello is a component
class Hello extends React.Component {
	// function render returns the html we want to show on the page
	render(){
		return (
			// we can only return one element, so if we have more than one, we 
			// return a div
			<div>
				<h1>Hello there!</h1>
				<h2>Hi :)</h2>
			</div>
		);
	}
} */

// ----------------------- function component ------------------------

function Hello(){
	return(
		<div>
			<h1>Hello there!</h1>
			<h2>Hi :)</h2>
		</div>
	);
}

// this function returns any type of component, class or function
// we are adding to the div with id = 'root' the element <Hello/>
ReactDOM.render(<Hello/>, document.getElementById('root'));