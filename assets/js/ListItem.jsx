define(['react','jquery'],
function(React,$){
	
	var ListItem = React.createClass({
		render:function(){
			return(
				<h1>{this.props.text}</h1>
			);
		}
	});//ListItem

	return ListItem;

});//close define