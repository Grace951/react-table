import React from "react";
import styled from "styled-components";
import DropdownGroup from "./DropdownGroup";

const Wrap = styled.div`
	&.defaultCSS {
		display: flex;
		.right {
			width: 50%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
		.left {
			width: 50%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 2px 0;
			.dropdown-toggle {
				border: 1px solid #ddd;
				padding-right: 20px;
				padding-left: 20px;
			}
			> * {
				margin: 3px;
			}
			button {
				padding: 10px 20px;
				background-color: #f0ad4e;
				color: white;
				border: none;
				border-radius: 3px;
			}
		}
	}
`;
const SortableTblPager = (props) => {
	const {
		setCurrentPage,
		setRowsPerPage,
		defaultCSS,
		curr,
		totalPage,
		rowPerPage,
	} = props;

	function addPagge() {
		if (curr >= props.totalPage - 1) return;

		setCurrentPage(curr + 1);
	}
	function subPage() {
		if (curr < 1) return;

		setCurrentPage(curr - 1);
	}
	function setCurrentRowsPerPage(i) {
		if (i === "All" || isNaN(i)) i = props.totalsCount;
		setRowsPerPage(i);
	}

	let nextDisableStyle = curr + 1 >= totalPage;
	let prevDisableStyle = curr + 1 <= 1;
	let rowPerPageText = totalPage === 1 ? "All" : rowPerPage;

	const pageOptions = Array.from(Array(totalPage).keys()).map((item) => ({
		value: item,
		text: item + 1,
	}));
	const perPageOptions = [5, 10, 20, 50, "All"].map((item) => ({
		value: item,
		text: item,
	}));
	return (
		<Wrap className={defaultCSS ? "defaultCSS" : ""}>
			<div className="left">
				<button
					type="button"
					name=""
					disabled={prevDisableStyle}
					onClick={subPage}
				>
					Prev
				</button>
				<DropdownGroup
					selected={curr + 1}
					options={pageOptions}
					callback={setCurrentPage}
				/>
				<button
					type="button"
					name=""
					disabled={nextDisableStyle}
					onClick={addPagge}
				>
					Next
				</button>
				<div>display</div>
				<DropdownGroup
					selected={rowPerPageText}
					options={perPageOptions}
					callback={setCurrentRowsPerPage}
				/>
				<div>rows per page</div>
			</div>
			<div className="right">
				Page {curr + 1} of total {props.totalPage}, total{" "}
				{props.totalsCount} rows
			</div>
		</Wrap>
	);
};

export default SortableTblPager;
