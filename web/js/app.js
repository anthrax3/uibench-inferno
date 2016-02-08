(function() {
	"use strict";

	uibench.init('Inferno', '0.6.0');

	var animBox1 = {
		dom: Inferno.staticCompiler.createElement('div', { className : 'AnimBox' }),
		static: {
			keyed: [],
			nonKeyed: []
		},
		tag: 'div',
		key: null,
		attrs: { className : 'AnimBox' },
		children: null,
		nextNode: null,
		instance: null
	};	

	class AnimBox extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
		    var data = this.props.data;
		    var time = data.time;
		    var style = {
		      'borderRadius': (time % 10).toString() + 'px',
		      'background': 'rgba(0,0,0,' + (0.5 + ((time % 10) /10)).toString() + ')'
		    };

		    return {
				dom: null,
				static: animBox1,
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
	}	

	var anim1 = {
		dom: Inferno.staticCompiler.createElement('div', { className : 'Anim' }),
		static: {
			keyed: [],
			nonKeyed: []
		},
		tag: 'div',
		key: null,
		attrs: { className : 'Anim' },
		children: null,
		nextNode: null,
		instance: null
	};		

	var anim2 = {
		dom: null,
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
	};		

	class Anim extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
		    var data = this.props.data;
		    var items = data.items;

		    var children = [];
		    for (var i = 0; i < items.length; i++) {
				var item = items[i];
				children.push({
					dom: null,
					static: anim2,
					tag: AnimBox,
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
				static: anim1,
				tag: null,
				key: null,
				attrs: null,
				children: children,
				nextNode: null,
				instance: null	
		    };
		}
	}	

	var tableCell1 = {
		dom: Inferno.staticCompiler.createElement('td', { className : 'TableCell' }),
		static: {
			keyed: [],
			nonKeyed: []
		},
		tag: 'td',
		key: null,
		attrs: { className : 'TableCell' },
		children: null,
		nextNode: null,
		instance: null
	};	

	class TableCell extends Inferno.Component {
		constructor(props) {
			super(props);
			//this.onClick = this.onClick.bind(this);
		}

		shouldComponentUpdate(nextProps, nextState) {
			return this.props.text !== nextProps.text;
		}

		onClick(e) {
			console.log('Clicked' + this.props.text);
			e.stopPropagation();
		}

		render() {
			return {
				dom: null,
				static: tableCell1,
				tag: null,
				key: null,
				attrs: { null },
				children: this.props.text,
				nextNode: null,
				instance: null	
			};
		}
	}	

	var tableRow1 = {
		dom: Inferno.staticCompiler.createElement('tr'),
		static: {
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
	};		

	class TableRow extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
		    var data = this.props.data;
		    var classes = 'TableRow';
		    if (data.active) {
		      classes = 'TableRow active';
		    }
		    var cells = data.props;

		    var children = [({
				dom: null,
				static: tableRow2,
				tag: TableCell,
				key: -1,
				attrs: { text: '#' + data.id },
				children: null,
				nextNode: null,
				instance: null		    	
		    })];
		    for (var i = 0; i < cells.length; i++) {
		      children.push({
				dom: null,
				static: tableRow2,
				tag: TableCell,
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
				static: tableRow1,
				tag: null,
				key: null,
				attrs: { className: classes },
				children: children,
				nextNode: null,
				instance: null
		    };
	  	}
	}	

	var table1 = {
		dom: Inferno.staticCompiler.createElement('table', { className: 'Table' }),
		static: {
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
		static: {
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
	};	

	class Table extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
		    var items = this.props.data.items;

		    var children = [];
		    for (var i = 0; i < items.length; i++) {
		      var item = items[i];
		    	children.push({
					dom: null,
					static: table3,
					tag: TableRow,
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
				static: table1,
				tag: null,
				key: null,
				attrs: null,
				children: {
					dom: null,
					static: table2,
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
	}

	var treeLeaf1 = {
		dom: Inferno.staticCompiler.createElement('li', { className: 'TreeLeaf' }),
		static: {
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

	class TreeLeaf extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
			return {
				dom: null,
				static: treeLeaf1,
				tag: null,
				key: null,
				attrs: null,
				children: this.props.data.id,
				nextNode: null,
				instance: null
			};
		}
	}	

	var treeNode1 = {
		dom: Inferno.staticCompiler.createElement('ul', { className: 'TreeNode' }),
		static: {
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
	};	

	var treeNode3 = {
		dom: null,
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
	};				

	class TreeNode extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
		    var data = this.props.data;
		    var children = [];

		    for (var i = 0; i < data.children.length; i++) {
				var n = data.children[i];
				if (n.container) {
					children.push({
						dom: null,
						static: treeNode2,
						tag: TreeNode,
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
						static: treeNode3,
						tag: TreeLeaf,
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
				static: treeNode1,
				tag: null,
				key: null,
				attrs: null,
				children: children,
				nextNode: null,
				instance: null
		    };
		}
	}		

	var tree1 = {
		dom: Inferno.staticCompiler.createElement('div', { className: 'Tree' }),
		static: {
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
	};	

	class Tree extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
		    return {
		      	dom: null,
				static: tree1,
				tag: null,
				key: null,
				attrs: null,
				children: {
					dom: null,
					static: tree2,
					tag: TreeNode,
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
	}


	var main1 = {
		dom: Inferno.staticCompiler.createElement('div', { className: 'Main' }),
		static: {
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
	};	

	var main3 = {
		dom: null,
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
	};	

	var main4 = {
		dom: null,
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
	};			

	class Main extends Inferno.Component {
		shouldComponentUpdate(nextProps, nextState) {
			return this.props.data !== nextProps.data;
		}

		render() {
		    var data = this.props.data;
		    var location = data.location;

		    var section;
		    if (location === 'table') {
		      section = {
		      	dom: null,
				static: main2,
				tag: Table,
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
				static: main3,
				tag: Anim,
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
				static: main4,
				tag: Tree,
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
				static: main1,
				tag: null,
				key: null,
				attrs: null,
				children: section,
				nextNode: null,
				instance: null
		    };
		}
	}

	var app1 = {
		dom: null,
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
	};

	var app2 = {
		dom: Inferno.staticCompiler.createElement('pre'),
		static: {
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

	document.addEventListener('DOMContentLoaded', function(e) {
	  var container = document.querySelector('#App');

	  uibench.run(
		function(state) {
			Inferno.render({
				dom: null,
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
		},
		function(samples) {
			Inferno.render({
				dom: null,
				static: app2,
				tag: null,
				key: null,
				attrs: null,
				children: JSON.stringify(samples, null, ' '),
				nextNode: null,
				instance: null					
			}, container);
		}
	  );
	});

})();