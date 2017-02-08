import React from 'react';
class SortableTblTh extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			sortCssClass: "fa fa-sort"
		};
		this.sort = this.sort.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		//constructor is only invoked when the component is first created. if data change, need to update on componentWillReceiveProps
		let a = "fa fa-sort";
		switch (nextProps.asc){
			case null:
				a = "fa fa-sort";
			break;
			case true:
				a = "fa fa-sort-amount-asc";
			break;
			case false:
				a = "fa fa-sort-amount-desc";
			break;
		}
		//console.log(a);
		if (nextProps.asc !== this.props.asc) {
			this.setState({ sortCssClass: a });
		}
	}
	sort(){
		this.props.sortData(this.props.dataKey, !this.props.asc);
	}
	render() {
		return (
			<th onClick={this.sort}> {this.props.children} <br/><i className={this.state.sortCssClass} aria-hidden="true"/></th>
		);
	}
}
SortableTblTh.propTypes = {
	asc: React.PropTypes.bool,
	sortData: React.PropTypes.func.isRequired,
	dataKey:  React.PropTypes.string,
	children: React.PropTypes.node
};

export {SortableTblTh};
