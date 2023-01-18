import SortableTbl from "../src/SortableTbl";
// import SortableTbl from "../lib/react-sort-search-table";
import { createRoot } from "react-dom/client";
import ImageLoader from "./Imageloader";
import { data, columnKeys, tHeads } from "./data";
import styled from "@emotion/styled";

const Wrap = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const BtnWrap = styled.button`
	padding: 10px 20px;
	cursor: pointer;
	border-radius: 3px;
	background-color: #f0ad4e;
	color: #fff;
`;
const DeleteBtnWrap = styled.button`
	padding: 10px 20px;
	cursor: pointer;
	border-radius: 3px;
	background-color: #d43f3a;
	color: #fff;
`;

const BaseProductDeleteComponent = (props) => {
	const { rowData, tdData } = props;
	const deleteItem = () => {
		alert("delete " + rowData.name);
		console.log(rowData, tdData);
	};
	return (
		<td>
			<DeleteBtnWrap onClick={deleteItem}>Delete</DeleteBtnWrap>
		</td>
	);
};

const ProductTblImgpreloaderWrap = styled.div`
	display: inline-block;
	width: 100%;
	min-height: 100px;
	display: flex;
	justify-content: center;
	&:after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #ebc26a;
		border-color: #ebc26a transparent #ebc26a transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const ProductTblImgpreloader = () => {
	return (
		<ProductTblImgpreloaderWrap
			className="loading-div"
			style={{ minHeight: "100px" }}
		/>
	);
};

const BaseProductTblImageComponent = (props) => {
	return (
		<td
			style={{
				width: "170px",
				minWidth: "170px",
				backgroundColor: "#fff",
			}}
		>
			<a href={props.rowData.imageUrl} target="_blank">
				<ImageLoader
					src={props.rowData.imageUrl}
					preloader={ProductTblImgpreloader}
				>
					NOT FOUND
				</ImageLoader>
			</a>
		</td>
	);
};

const BaseProductEditComponent = (props) => {
	const { rowData, tdData } = props;
	const editItem = () => {
		alert("edit " + rowData.name);
		console.log(rowData, tdData);
	};
	return (
		<td>
			<BtnWrap onClick={editItem}>Edit</BtnWrap>
		</td>
	);
};

const Page = () => {
	return (
		<Wrap>
			<SortableTbl
				tblData={data}
				tHead={tHeads}
				defaultCSS={true}
				customTd={[
					{
						custd: BaseProductTblImageComponent,
						keyItem: "imageUrl",
					},
					{ custd: BaseProductEditComponent, keyItem: "edit" },
					{ custd: BaseProductDeleteComponent, keyItem: "delete" },
				]}
				dKey={columnKeys}
				search={true}
			/>
		</Wrap>
	);
};

const root = createRoot(document.getElementById("app"));
root.render(<Page />);
