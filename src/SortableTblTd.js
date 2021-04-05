import React from "react";
import styled from "styled-components";

const Wrap = styled.tr`
	&.defaultCSS {
		&:hover td {
			background-color: #f7d6b9;
			color: #000;
		}

		td {
			padding: 10px;
			max-height: 100px;
			color: #222;
			border-bottom: 1px solid #ddd;
			img {
				width: 100%;
				max-height: 100px;
				height: auto;
			}
		}
	}
`;

const SortableTblTd = (props) => {
	const { customTd, tdData, defaultCSS } = props;
	return (
		<Wrap className={defaultCSS ? "defaultCSS" : ""}>
			{props.dKey.map((item, id) => {
				let CustomTdComponent = null;
				CustomTdComponent =
					customTd &&
					customTd
						.filter((i) => {
							return i.keyItem === item;
						})
						.reduce((result, item) => {
							return item;
						}, {}).custd;

				if (!customTd) return <td key={id}>{tdData[item]}</td>;

				if (CustomTdComponent) {
					return (
						<CustomTdComponent
							key={id}
							{...props}
							tdData={tdData[item]}
							field={item}
							rowData={tdData}
						/>
					);
				}

				return <td key={id}>{tdData[item]}</td>;
			})}
		</Wrap>
	);
};

export default SortableTblTd;
