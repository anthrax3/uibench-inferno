// import Inferno from 'inferno';
// import InfernoDOM from 'inferno-dom';
import {Main} from './ui/main';

uibench.init('Inferno', '0.5.23');

function willUpdate(domNode, lastProps, nextProps) {
	return lastProps.data !== nextProps.data;
}

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');

  uibench.run(
      function(state) {
        InfernoDOM.render(<Main data={state} />, container);
      },
      function(samples) {
        InfernoDOM.render(<pre>{JSON.stringify(samples, null, ' ')}</pre>, container);
      }
  );
});
