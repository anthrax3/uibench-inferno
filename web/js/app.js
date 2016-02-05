(function() {
	uibench.init('Inferno', '0.6.0');

	class Main extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
			return null;
		    // var data = this.props.data;
		    // var location = data.location;

		    // var section;
		    // if (location === 'table') {
		    //   section = (<Table data={data.table}></Table>);
		    // } else if (location === 'anim') {
		    //   section = (<Anim data={data.anim}></Anim>);
		    // } else if (location === 'tree') {
		    //   section = (<Tree data={data.tree}></Tree>);
		    // }

		    // return (<div className="Main">{section}</div>);
		}
	}

	var app1 = {
		static: {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	}

	document.addEventListener('DOMContentLoaded', function(e) {
	  var container = document.querySelector('#App');

	  uibench.run(
		function(state) {
			Inferno.render({
				static: app1,
				tag: Main,
				key: null,
				attrs: {
					data: state
				},
				children: null,
				nextNode: null,
				instance: null
			}, container)
	        //Inferno.render(<Main data={state}/>, container);
		},
		function(samples) {
	        //Inferno.render(<pre>{JSON.stringify(samples, null, ' ')}</pre>, container);
		}
	  );
	});

})();