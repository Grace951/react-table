import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "./hooks";

const Wrap = styled.div`
	&.defaultCSS {
		.group {
			position: relative;
			button {
				padding-right: 40px;
			}
		}
		.dropdownToggle {
			border: 1px solid #ddd;
			padding-right: 20px;
			padding-left: 20px;
		}
		.dropdownMenu {
			width: 100%;
			position: absolute;
			top: 40px;
			display: block;
			font-size: 14px;
			border-radius: 3px;
			border: 1px solid #ddd;
		}
		.dropdownItem {
			padding: 6px 16px;
			cursor: pointer;
			text-align: center;
			&:hover {
				background-color: #eeeded;
			}
		}
	}
`;
const DropdownGroup = (props) => {
	const { options, selected, callback, defaultCSS } = props;
	const ref = useRef();
	const [show, setShow] = useState(false);
	useOnClickOutside(ref, () => setShow(false));
	function toggleDropdown(e) {
		setShow(!show);
	}
	function select(e) {
		let i = e.target.getAttribute("data-i");
		setShow(false);
		callback && callback(i);
	}
	return (
		<Wrap className={defaultCSS ? "defaultCSS" : ""}>
			<div className="group">
				<button
					type="button"
					className="dropdownToggle"
					onClick={toggleDropdown}
				>
					{selected}
				</button>
				{show && (
					<ul className="dropdownMenu" ref={ref}>
						{options.map((item, i) => {
							return (
								<li
									className="dropdownItem"
									key={i}
									data-i={item.value}
									onClick={select}
								>
									{item.text}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</Wrap>
	);
};
export default DropdownGroup;
