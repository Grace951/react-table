import React, { useState, useEffect } from "react";
import SortableTblPager from "./SortableTblPager";
import SortableTblTh from "./SortableTblTh";
import SortableTblTd from "./SortableTblTd";
import styled from "styled-components";

const SortableTblStyled = styled.div`
	&.defaultCSS {
		table,
		thead,
		thead tr {
			width: 100%;
		}
		.search-box {
			padding: 10px 0px;
			input.search {
				width: 200px;
				margin-left: 10px;
				height: 30px;
				border: none;
				padding-left: 10px;
				border-radius: 205px;
				border: 2px solid #c30;
			}
		}
		.empty {
			td .wrap {
				min-height: 200px;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #eaeaea;
			}
		}
	}
	input {
		outline: none;
	}
	.desc {
		margin: 5px 0;
		text-align: right;
	}
	input:-internal-autofill-selected {
		background-color: transparent !important;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		background-color: transparent !important;
	}

	* {
		box-sizing: border-box;
		list-style: none;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	select,
	button {
		appearance: none;
		outline: 0;
		cursor: pointer;
		border: none;
	}
	button:disabled {
		background-color: #ccc;
		cursor: auto;
	}
	a {
		text-decoration: none;
	}

	table {
		display: table;
		border-collapse: none;
		border-spacing: 0px;
		border-color: none;
	}
`;

const SortableTbl = (props) => {
	const {
		tblData,
		paging,
		tHead,
		customTd,
		dKey,
		defaultCSS,
		defaultRowsPerPage,
		search,
	} = props;
	const [filterString, setFilterString] = useState("");
	const [data, setData] = useState(tblData || []);
	const [pagers, setPager] = useState({
		paging: paging,
		curr: 0,
		rowsPerPage: defaultRowsPerPage,
	});
	const defaultAsc = (dKey || []).reduce((acc, cur) => {
		return Object.assign({}, acc, { [cur]: null });
	}, {});
	const [asc, setAsc] = useState(defaultAsc);

	useEffect(() => {
		setData(tblData);
	}, [tblData]);

	function appplyfilter(e) {
		let newData = tblData.filter((item) => {
			for (let key in item) {
				let v = item[key] && item[key].toString().toLowerCase();
				if (v && v.indexOf(e.target.value.toLowerCase()) !== -1) {
					return true;
				}
			}
			return false;
		});

		setFilterString(e.target.value);
		setData(newData);
	}
	function sortData(dKey, nAsc) {
		let newAsc = asc;
		let newData = data;
		newData.sort((a, b) => {
			if (a[dKey] === b[dKey]) return 0;
			if (nAsc ? a[dKey] > b[dKey] : a[dKey] < b[dKey]) return 1;
			if (nAsc ? a[dKey] < b[dKey] : a[dKey] > b[dKey]) return -1;
			return 0;
		});
		for (let prop in newAsc) {
			newAsc[prop] = null;
		}

		setAsc(Object.assign({}, newAsc, { [dKey]: nAsc }));
		setData(newData);
	}
	function setCurrentPage(i) {
		let index = parseInt(i);
		setPager(Object.assign({}, pagers, { curr: index }));
	}
	function setRowsPerPage(i) {
		let index = parseInt(i);
		let nCurr = pagers.curr;
		let pagesCount = Math.ceil(data.length / index);
		if (pagers.curr >= pagesCount) nCurr = pagesCount - 1;
		setPager(
			Object.assign({}, pagers, {
				rowsPerPage: index,
				curr: nCurr,
			})
		);
	}

	let pagesCount = Math.ceil(data.length / pagers.rowsPerPage);
	let pageData = data.slice();
	if (pagers.paging) {
		pageData = pageData.slice(
			pagers.curr * pagers.rowsPerPage,
			(pagers.curr + 1) * pagers.rowsPerPage
		);
	}
	const empty = !pageData || !pageData.length;
	return (
		<SortableTblStyled className={defaultCSS ? "defaultCSS" : ""}>
			<div className="sortable-table">
				{search && (
					<div className="search-box">
						Search:{" "}
						<input
							className="search"
							type="text"
							name=""
							value={filterString}
							placeholder="Filter Result"
							onChange={appplyfilter}
						/>
					</div>
				)}

				<table className="table table-hover table-striped">
					<thead>
						<tr>
							{dKey.map((item, id) => {
								return (
									<SortableTblTh
										key={id}
										sortData={sortData}
										defaultCSS={defaultCSS}
										asc={asc[item]}
										dataKey={item}
									>
										{tHead[parseInt(id)]}
									</SortableTblTh>
								);
							})}
						</tr>
					</thead>
					<tbody className={empty ? "empty" : ""}>
						{pageData.map((item, id) => {
							return (
								<SortableTblTd
									key={id}
									{...props}
									defaultCSS={defaultCSS}
									tdData={item}
									dKey={dKey}
									customTd={customTd}
								/>
							);
						})}
						{empty && (
							<tr>
								<td colSpan={dKey.length}>
									<div className="wrap">No Data</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>

				{!empty &&
					(pagers.paging ? (
						<SortableTblPager
							defaultCSS={defaultCSS}
							curr={pagers.curr}
							totalPage={pagesCount}
							setCurrentPage={setCurrentPage}
							setRowsPerPage={setRowsPerPage}
							totalsCount={data.length}
							rowPerPage={pagers.rowsPerPage}
						/>
					) : (
						""
					))}
			</div>
		</SortableTblStyled>
	);
};

SortableTbl.defaultProps = {
	tblData: [],
	tHead: [],
	dKey: [],
	customTd: [],
	paging: true,
	search: true,
	defaultCSS: true,
	defaultRowsPerPage: 5,
};

export default SortableTbl;
