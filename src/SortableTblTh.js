import React from "react";
import styled from "styled-components";

const Wrap = styled.th`
	&.defaultCSS {
		height: 80px;
		min-width: ${({ count }) => 100 / count}%;
		cursor: pointer;
		position: relative;
		text-align: center;
		min-height: 80px;
		background-color: #db3615;
		color: #fff;
		padding: 5px;
		line-height: 25px;
		border-bottom: 5px solid #ccc;
		&.sort-desc,
		&.sort-asc {
			background-color: #e0914c;
			border-bottom: 5px solid #c70000;
		}
	}
`;
const SortableTblTh = (props) => {
	const { sortData, dataKey, asc, children, defaultCSS } = props;
	function sort() {
		sortData(dataKey, !asc);
	}
	let sortCssClass = "fas fa-sort";
	switch (asc) {
		case null:
			sortCssClass = "fas fa-sort";
			break;
		case true:
			sortCssClass = "fas fa-sort-amount-up";
			break;
		case false:
			sortCssClass = "fas fa-sort-amount-down";
			break;
	}
	return (
		<Wrap
			onClick={sort}
			count={dataKey.length}
			className={defaultCSS ? "defaultCSS" : ""}
		>
			{children}
			<br />
			<i className={sortCssClass} aria-hidden="true" />
		</Wrap>
	);
};

export default SortableTblTh;
