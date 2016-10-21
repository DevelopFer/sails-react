requirejs.config({
	paths:{
		'react':'bower_components/react/react-with-addons',
		'reactdom':'bower_components/react/react-dom',
		'jquery': 'bower_components/jquery/dist/jquery',
		'components':'/js'

	}
});

require(['jquery','react','reactdom','components/ListItem'],
function($,React,ReactDOM,ListItem){

	$(function whenDomIsReady(){

		alert("Done");
		ReactDOM.render(<ListItem text="Fernando"/>, document.getElementById('container'));
	});

	
});