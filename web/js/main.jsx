// import Inferno from 'inferno';
// import InfernoDOM from 'inferno-dom';
import {Main} from './ui/main';

uibench.init('Inferno', '0.6.0');

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
