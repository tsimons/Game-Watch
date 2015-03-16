var React = require('react')
  , JoinParty = require('./joinParty')
  , CreateParty = require('./createParty')

  , Router = require('react-router')
  , RouteHandler = Router.RouteHandler

  , Bootstrap = require('react-bootstrap')
  , ButtonGroup = Bootstrap.ButtonGroup
  , Button = Bootstrap.Button
  , Input = Bootstrap.Input
  , Glyphicon = Bootstrap.Glyphicon
;

var Home = React.createClass({
	getInitialState: function () {
		return {
			value: ''
		}
	},

	render: function () {
		return (
			<div className="home">
				<section className="blade clearfix">
					<h3>Join or Create a Party</h3>
					<Input
						type="text"
						value={this.state.value}
						label="Party Name" />
					<ButtonGroup className="pull-right">
						<Button bsStyle="primary"><i className="fa fa-users"></i> Join Party</Button>
						<Button bsStyle="success"><i className="fa fa-plus"></i> Create Party</Button>
					</ButtonGroup>
				</section>

				<RouteHandler />
			</div>
		);
	}
});

exports = module.exports = Home;