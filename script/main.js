// var UserGist = React.createClass({
//   getInitialState: function() {
//     return {
//       username: '',
//       lastGistUrl: ''
//     };
//   },

//   componentDidMount: function() {
//     $.get(this.props.source, function(result) {
//       var lastGist = result[0];
//       if (this.isMounted()) {
//         this.setState({
//           username: lastGist.owner.login,
//           lastGistUrl: lastGist.html_url
//         });
//       }
//     }.bind(this));
//   },

//   render: function() {
//     return ("
//     	<div>
// 	        {this.state.username}'s last gist is
// 	        <a href={this.state.lastGistUrl}>here</a>.
//       	</div>"
//     );
//   }
// });


// jQuery(document).ready(function(){
// 	React.render(
// 	  <div className="content">Hello React JS</div>
// 	);	
// });
