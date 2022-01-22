import React from 'react';

function Home(props){
	return (<div>
	
		<h1>I'm the BEST home component!</h1>
		<button onClick={()=>console.log("clicked")}>Click me</button>
	
	</div>);
	
}

export default { component: Home};