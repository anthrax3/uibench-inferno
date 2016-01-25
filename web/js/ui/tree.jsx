// import Inferno from 'inferno';
// import { Component } from 'inferno-component';

const treeLeafTemplate = Inferno.createTemplate((text) => ({
  tag: 'li',
  attrs: { className: 'TreeLeaf' },
  text: text
}));

class TreeLeaf extends InfernoComponent.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    return treeLeafTemplate(this.props.data.id);
  }
}

class TreeNode extends InfernoComponent.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    var data = this.props.data;
    var children = [];

    for (var i = 0; i < data.children.length; i++) {
      var n = data.children[i];
      if (n.container) {
        children.push((<TreeNode key={n.id} data={n} />));
      } else {
        children.push((<TreeLeaf key={n.id} data={n} />));
      }
    }

    return (<ul className="TreeNode">{children}</ul>);
  }
}

export class Tree extends InfernoComponent.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    return (<div className="Tree"><TreeNode data={this.props.data.root} /></div>);
  }
}
