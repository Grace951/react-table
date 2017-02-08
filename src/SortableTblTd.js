import React from 'react';
const SortableTblTd = (props) => {
	let CustomTd = props.customTd;
	return(
		<tr>
		{
			props.dKey.map((item, id) => {
				let CustomTdComponent = null;
				CustomTdComponent = CustomTd && CustomTd.filter((i)=>{return (i.keyItem === item);})
						.reduce( (result,item) => { return item; }, {})
						.custd;

				if (!CustomTd)
					return (<td key={id} >{props.tdData[item]}</td>);

				if (CustomTdComponent)	{
					return (<CustomTdComponent key={id} {...props} tdData={props.tdData[item]} field={item} rowData={props.tdData}/>);
				}

				return (<td key={id} >{props.tdData[item]}</td>);
			})
		}
		</tr>
	);
};
SortableTblTd.propTypes = {
	tdData: React.PropTypes.object,
	dKey: React.PropTypes.array,
	customTd: React.PropTypes.array
};

export {SortableTblTd};
