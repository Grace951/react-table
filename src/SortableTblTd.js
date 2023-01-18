import styled from "@emotion/styled";

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

const SortableTblTd = ({ customTd, tdData, dKey = [], defaultCSS }) => {
	return (
		<Wrap className={defaultCSS ? "defaultCSS" : ""}>
			{dKey.map((item, id) => {
				const CustomTdComponent =
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
