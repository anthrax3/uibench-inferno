// import Inferno from 'inferno';
// import { Component } from 'inferno-component';

class AnimBox extends InfernoComponent.Component {
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

    // TODO: missing data-id={data.id}
    return (<div className="AnimBox" style={style}></div>);
  }
}

export class Anim extends InfernoComponent.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    var data = this.props.data;
    var items = data.items;

    var children = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      children.push((<AnimBox key={item.id} data={item} />));
    }

    return (<div className="Anim">{children}</div>);
  }
}
