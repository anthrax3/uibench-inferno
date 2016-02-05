'use strict';

var _temporalUndefined = {};

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + ' is not defined - temporal dead zone'); } return true; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
	"use strict";

	var AnimBox = _temporalUndefined;
	var Anim = _temporalUndefined;
	var TableCell = _temporalUndefined;
	var TableRow = _temporalUndefined;
	var Table = _temporalUndefined;
	var TreeLeaf = _temporalUndefined;
	var TreeNode = _temporalUndefined;
	var Tree = _temporalUndefined;
	var Main = _temporalUndefined;
	uibench.init('Inferno', '0.6.0');

	var animBox1 = {
		dom: Inferno.staticCompiler.createElement('div', { className: 'AnimBox' }),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'div',
		key: null,
		attrs: { className: 'AnimBox' },
		children: null,
		nextNode: null,
		instance: null
	};

	AnimBox = (function (_Inferno$Component) {
		_inherits(_temporalAssertDefined(AnimBox, 'AnimBox', _temporalUndefined) && AnimBox, _Inferno$Component);

		function AnimBox() {
			_classCallCheck(this, _temporalAssertDefined(AnimBox, 'AnimBox', _temporalUndefined) && AnimBox);

			_get(Object.getPrototypeOf((_temporalAssertDefined(AnimBox, 'AnimBox', _temporalUndefined) && AnimBox).prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(_temporalAssertDefined(AnimBox, 'AnimBox', _temporalUndefined) && AnimBox, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.data !== nextProps.data;
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.data;
				var time = data.time;
				var style = {
					'borderRadius': (time % 10).toString() + 'px',
					'background': 'rgba(0,0,0,' + (0.5 + time % 10 / 10).toString() + ')'
				};

				return {
					dom: null,
					'static': animBox1,
					tag: null,
					key: null,
					attrs: {
						style: style
					},
					children: null,
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(AnimBox, 'AnimBox', _temporalUndefined) && AnimBox;
	})(Inferno.Component);

	var anim1 = {
		dom: Inferno.staticCompiler.createElement('div', { className: 'Anim' }),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'div',
		key: null,
		attrs: { className: 'Anim' },
		children: null,
		nextNode: null,
		instance: null
	};

	var anim2 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	Anim = (function (_Inferno$Component2) {
		_inherits(_temporalAssertDefined(Anim, 'Anim', _temporalUndefined) && Anim, _Inferno$Component2);

		function Anim() {
			_classCallCheck(this, _temporalAssertDefined(Anim, 'Anim', _temporalUndefined) && Anim);

			_get(Object.getPrototypeOf((_temporalAssertDefined(Anim, 'Anim', _temporalUndefined) && Anim).prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(_temporalAssertDefined(Anim, 'Anim', _temporalUndefined) && Anim, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.data !== nextProps.data;
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.data;
				var items = data.items;

				var children = [];
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					children.push({
						dom: null,
						'static': anim2,
						tag: _temporalAssertDefined(AnimBox, 'AnimBox', _temporalUndefined) && AnimBox,
						key: item.id,
						attrs: {
							data: item
						},
						children: children,
						nextNode: null,
						instance: null
					});
				}

				return {
					dom: null,
					'static': anim1,
					tag: null,
					key: null,
					attrs: null,
					children: children,
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(Anim, 'Anim', _temporalUndefined) && Anim;
	})(Inferno.Component);

	var tableCell1 = {
		dom: Inferno.staticCompiler.createElement('td', { className: 'TableCell' }),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'td',
		key: null,
		attrs: { className: 'TableCell' },
		children: null,
		nextNode: null,
		instance: null
	};

	TableCell = (function (_Inferno$Component3) {
		_inherits(_temporalAssertDefined(TableCell, 'TableCell', _temporalUndefined) && TableCell, _Inferno$Component3);

		function TableCell(props) {
			_classCallCheck(this, _temporalAssertDefined(TableCell, 'TableCell', _temporalUndefined) && TableCell);

			_get(Object.getPrototypeOf((_temporalAssertDefined(TableCell, 'TableCell', _temporalUndefined) && TableCell).prototype), 'constructor', this).call(this, props);
			//this.onClick = this.onClick.bind(this);
		}

		_createClass(_temporalAssertDefined(TableCell, 'TableCell', _temporalUndefined) && TableCell, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.text !== nextProps.text;
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				console.log('Clicked' + this.props.text);
				e.stopPropagation();
			}
		}, {
			key: 'render',
			value: function render() {
				return {
					dom: null,
					'static': tableCell1,
					tag: null,
					key: null,
					attrs: { 'null': null },
					children: this.props.text,
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(TableCell, 'TableCell', _temporalUndefined) && TableCell;
	})(Inferno.Component);

	var tableRow1 = {
		dom: Inferno.staticCompiler.createElement('tr'),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'tr',
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	var tableRow2 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	TableRow = (function (_Inferno$Component4) {
		_inherits(_temporalAssertDefined(TableRow, 'TableRow', _temporalUndefined) && TableRow, _Inferno$Component4);

		function TableRow() {
			_classCallCheck(this, _temporalAssertDefined(TableRow, 'TableRow', _temporalUndefined) && TableRow);

			_get(Object.getPrototypeOf((_temporalAssertDefined(TableRow, 'TableRow', _temporalUndefined) && TableRow).prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(_temporalAssertDefined(TableRow, 'TableRow', _temporalUndefined) && TableRow, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.data !== nextProps.data;
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.data;
				var classes = 'TableRow';
				if (data.active) {
					classes = 'TableRow active';
				}
				var cells = data.props;

				var children = [{
					dom: null,
					'static': tableRow2,
					tag: _temporalAssertDefined(TableCell, 'TableCell', _temporalUndefined) && TableCell,
					key: -1,
					attrs: { text: '#' + data.id },
					children: null,
					nextNode: null,
					instance: null
				}];
				for (var i = 0; i < cells.length; i++) {
					children.push({
						dom: null,
						'static': tableRow2,
						tag: _temporalAssertDefined(TableCell, 'TableCell', _temporalUndefined) && TableCell,
						key: i,
						attrs: { text: cells[i] },
						children: null,
						nextNode: null,
						instance: null
					});
				}

				// // missing data-d={data.id}
				return {
					dom: null,
					'static': tableRow1,
					tag: null,
					key: null,
					attrs: { className: classes },
					children: children,
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(TableRow, 'TableRow', _temporalUndefined) && TableRow;
	})(Inferno.Component);

	var table1 = {
		dom: Inferno.staticCompiler.createElement('table', { className: 'Table' }),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'table',
		key: null,
		attrs: { className: 'Table' },
		children: null,
		nextNode: null,
		instance: null
	};

	var table2 = {
		dom: Inferno.staticCompiler.createElement('tbody'),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'tbody',
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	var table3 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	Table = (function (_Inferno$Component5) {
		_inherits(_temporalAssertDefined(Table, 'Table', _temporalUndefined) && Table, _Inferno$Component5);

		function Table() {
			_classCallCheck(this, _temporalAssertDefined(Table, 'Table', _temporalUndefined) && Table);

			_get(Object.getPrototypeOf((_temporalAssertDefined(Table, 'Table', _temporalUndefined) && Table).prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(_temporalAssertDefined(Table, 'Table', _temporalUndefined) && Table, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.data !== nextProps.data;
			}
		}, {
			key: 'render',
			value: function render() {
				var items = this.props.data.items;

				var children = [];
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					children.push({
						dom: null,
						'static': table3,
						tag: _temporalAssertDefined(TableRow, 'TableRow', _temporalUndefined) && TableRow,
						key: null,
						attrs: {
							key: item.id,
							data: item
						},
						children: null,
						nextNode: null,
						instance: null
					});
				}

				return {
					dom: null,
					'static': table1,
					tag: null,
					key: null,
					attrs: null,
					children: {
						dom: null,
						'static': table2,
						tag: null,
						key: null,
						attrs: null,
						children: children,
						nextNode: null,
						instance: null
					},
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(Table, 'Table', _temporalUndefined) && Table;
	})(Inferno.Component);

	var treeLeaf1 = {
		dom: Inferno.staticCompiler.createElement('li', { className: 'TreeLeaf' }),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'li',
		key: null,
		attrs: { className: 'TreeLeaf' },
		children: null,
		nextNode: null,
		instance: null
	};

	TreeLeaf = (function (_Inferno$Component6) {
		_inherits(_temporalAssertDefined(TreeLeaf, 'TreeLeaf', _temporalUndefined) && TreeLeaf, _Inferno$Component6);

		function TreeLeaf() {
			_classCallCheck(this, _temporalAssertDefined(TreeLeaf, 'TreeLeaf', _temporalUndefined) && TreeLeaf);

			_get(Object.getPrototypeOf((_temporalAssertDefined(TreeLeaf, 'TreeLeaf', _temporalUndefined) && TreeLeaf).prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(_temporalAssertDefined(TreeLeaf, 'TreeLeaf', _temporalUndefined) && TreeLeaf, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.data !== nextProps.data;
			}
		}, {
			key: 'render',
			value: function render() {
				return {
					dom: null,
					'static': treeLeaf1,
					tag: null,
					key: null,
					attrs: null,
					children: this.props.data.id,
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(TreeLeaf, 'TreeLeaf', _temporalUndefined) && TreeLeaf;
	})(Inferno.Component);

	var treeNode1 = {
		dom: Inferno.staticCompiler.createElement('ul', { className: 'TreeNode' }),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'ul',
		key: null,
		attrs: { className: 'TreeNode' },
		children: null,
		nextNode: null,
		instance: null
	};

	var treeNode2 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	var treeNode3 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	TreeNode = (function (_Inferno$Component7) {
		_inherits(_temporalAssertDefined(TreeNode, 'TreeNode', _temporalUndefined) && TreeNode, _Inferno$Component7);

		function TreeNode() {
			_classCallCheck(this, _temporalAssertDefined(TreeNode, 'TreeNode', _temporalUndefined) && TreeNode);

			_get(Object.getPrototypeOf((_temporalAssertDefined(TreeNode, 'TreeNode', _temporalUndefined) && TreeNode).prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(_temporalAssertDefined(TreeNode, 'TreeNode', _temporalUndefined) && TreeNode, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.data !== nextProps.data;
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.data;
				var children = [];

				for (var i = 0; i < data.children.length; i++) {
					var n = data.children[i];
					if (n.container) {
						children.push({
							dom: null,
							'static': treeNode2,
							tag: _temporalAssertDefined(TreeNode, 'TreeNode', _temporalUndefined) && TreeNode,
							key: n.id,
							attrs: {
								data: n
							},
							children: null,
							nextNode: null,
							instance: null
						});
					} else {
						children.push({
							dom: null,
							'static': treeNode3,
							tag: _temporalAssertDefined(TreeLeaf, 'TreeLeaf', _temporalUndefined) && TreeLeaf,
							key: n.id,
							attrs: {
								data: n
							},
							children: null,
							nextNode: null,
							instance: null
						});
					}
				}

				return {
					dom: null,
					'static': treeNode1,
					tag: null,
					key: null,
					attrs: null,
					children: children,
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(TreeNode, 'TreeNode', _temporalUndefined) && TreeNode;
	})(Inferno.Component);

	var tree1 = {
		dom: Inferno.staticCompiler.createElement('div', { className: 'Tree' }),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'div',
		key: null,
		attrs: { className: 'Tree' },
		children: null,
		nextNode: null,
		instance: null
	};

	var tree2 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	Tree = (function (_Inferno$Component8) {
		_inherits(_temporalAssertDefined(Tree, 'Tree', _temporalUndefined) && Tree, _Inferno$Component8);

		function Tree() {
			_classCallCheck(this, _temporalAssertDefined(Tree, 'Tree', _temporalUndefined) && Tree);

			_get(Object.getPrototypeOf((_temporalAssertDefined(Tree, 'Tree', _temporalUndefined) && Tree).prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(_temporalAssertDefined(Tree, 'Tree', _temporalUndefined) && Tree, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.data !== nextProps.data;
			}
		}, {
			key: 'render',
			value: function render() {
				return {
					dom: null,
					'static': tree1,
					tag: null,
					key: null,
					attrs: null,
					children: {
						dom: null,
						'static': tree2,
						tag: _temporalAssertDefined(TreeNode, 'TreeNode', _temporalUndefined) && TreeNode,
						key: null,
						attrs: {
							data: this.props.data.root
						},
						children: null,
						nextNode: null,
						instance: null
					},
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(Tree, 'Tree', _temporalUndefined) && Tree;
	})(Inferno.Component);

	var main1 = {
		dom: Inferno.staticCompiler.createElement('div', { className: 'Main' }),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'div',
		key: null,
		attrs: { className: 'Main' },
		children: null,
		nextNode: null,
		instance: null
	};

	var main2 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	var main3 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	var main4 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	Main = (function (_Inferno$Component9) {
		_inherits(_temporalAssertDefined(Main, 'Main', _temporalUndefined) && Main, _Inferno$Component9);

		function Main() {
			_classCallCheck(this, _temporalAssertDefined(Main, 'Main', _temporalUndefined) && Main);

			_get(Object.getPrototypeOf((_temporalAssertDefined(Main, 'Main', _temporalUndefined) && Main).prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(_temporalAssertDefined(Main, 'Main', _temporalUndefined) && Main, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.data !== nextProps.data;
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.data;
				var location = data.location;

				var section;
				if (location === 'table') {
					section = {
						dom: null,
						'static': main2,
						tag: _temporalAssertDefined(Table, 'Table', _temporalUndefined) && Table,
						key: null,
						attrs: {
							data: data.table
						},
						children: null,
						nextNode: null,
						instance: null
					};
				} else if (location === 'anim') {
					section = {
						dom: null,
						'static': main3,
						tag: _temporalAssertDefined(Anim, 'Anim', _temporalUndefined) && Anim,
						key: null,
						attrs: {
							data: data.anim
						},
						children: null,
						nextNode: null,
						instance: null
					};
				} else if (location === 'tree') {
					section = {
						dom: null,
						'static': main4,
						tag: _temporalAssertDefined(Tree, 'Tree', _temporalUndefined) && Tree,
						key: null,
						attrs: {
							data: data.tree
						},
						children: null,
						nextNode: null,
						instance: null
					};
				}

				return {
					dom: null,
					'static': main1,
					tag: null,
					key: null,
					attrs: null,
					children: section,
					nextNode: null,
					instance: null
				};
			}
		}]);

		return _temporalAssertDefined(Main, 'Main', _temporalUndefined) && Main;
	})(Inferno.Component);

	var app1 = {
		dom: null,
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: null,
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	var app2 = {
		dom: Inferno.staticCompiler.createElement('pre'),
		'static': {
			keyed: [],
			nonKeyed: []
		},
		tag: 'pre',
		key: null,
		attrs: null,
		children: null,
		nextNode: null,
		instance: null
	};

	document.addEventListener('DOMContentLoaded', function (e) {
		var container = document.querySelector('#App');

		uibench.run(function (state) {
			Inferno.render({
				dom: null,
				'static': app1,
				tag: _temporalAssertDefined(Main, 'Main', _temporalUndefined) && Main,
				key: null,
				attrs: {
					data: state
				},
				children: null,
				nextNode: null,
				instance: null
			}, container);
		}, function (samples) {
			Inferno.render({
				dom: null,
				'static': app2,
				tag: null,
				key: null,
				attrs: null,
				children: JSON.stringify(samples, null, ' '),
				nextNode: null,
				instance: null
			}, container);
		});
	});
})();