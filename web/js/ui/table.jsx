// import Inferno from 'inferno';
// import { Component } from 'inferno-component';
const tableCellTempalte = Inferno.createTemplate((onClick, text) => ({
  tag: 'td',
  attrs: { className: 'TableCell', onClick },
  text
}));
    
class TableCell extends InfernoComponent.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.text !== nextProps.text;
  }

  onClick(e) {
    console.log('Clicked' + this.props.text);
    e.stopPropagation();
  }

  render() {
    return tableCellTempalte(this.onClick, this.props.text);
  }
}

class TableRow extends InfernoComponent.Component {
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

    var children = [(<TableCell key="-1" text={'#' + data.id}></TableCell>)];
    for (var i = 0; i < cells.length; i++) {
      children.push((<TableCell key={i} text={cells[i]}></TableCell>));
    }

    // TODO: missing data-id={data.id}
    return (<tr className={classes}>{children}</tr>);
  }
}

export class Table extends InfernoComponent.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    var items = this.props.data.items;

    var children = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      children.push((<TableRow key={item.id} data={item} />));
    }

    return (<table className="Table"><tbody>{children}</tbody></table>);
  }
}
