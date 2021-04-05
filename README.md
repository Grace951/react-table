# react-sort-search-table

[![npm version](https://badge.fury.io/js/react-sort-search-table.svg)](https://www.npmjs.com/package/react-sort-search-table)
[![Download Count](http://img.shields.io/npm/dm/react-sort-search-table.svg?style=flat)](https://www.npmjs.com/package/react-sort-search-table)

![demo png](https://github.com/Grace951/react-table/raw/master/example/example2/screenshot.png)

-   with fontawesome
-   Searchable
-   Sortable
-   Pager Include
-   Use your Custom Component to Render Specific TD
-   react >= 16.8.2
-   react-dom >= 16.8.2

## Live Demo

Live demo: [`https://grace951.github.io/react-table/`](https://grace951.github.io/react-table/)

### Example

Need more example? See [`examples`](https://github.com/Grace951/react-table/tree/master/example)

1. Include fontawesome

```html
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
```

2. Use the component

```js
let MyData = [
	{
		cat: 1,
		_id: "d-rhe-428-j",
		imageUrl: "img/products/rhe-428-j.png",
		name: "RHE-428-J (4ch Compact)",
		brand: "iCATCH",
		type: "HD-SDI",
		channel: 4,
		remote: "LAN, ie, iPhone, iPad, Android, 3G mobile",
		backup: "USB, Network",
		videoout: "HDMI, VGA",
	},
	{
		cat: 1,
		_id: "srd-482",
		imageUrl: "img/products/srd-482-2.jpg",
		name: "SRD-482 (4ch)",
		brand: "Samsung",
		type: "HD-SDI",
		channel: 4,
		remote: "LAN, ie, iPhone, iPad, Android, 3G mobile",
		backup: "USB, Network",
		videoout: "HDMI, VGA",
	},
	{
		cat: 1,
		_id: "sh3-04u",
		imageUrl: "img/products/sh3-04u-1.png",
		name: "SH3-04U (4ch)",
		brand: "SNM",
		type: "HD-SDI",
		channel: 4,
		remote: "LAN, ie, iPhone, iPad, Android, 3G mobile",
		backup: "USB, Network",
		videoout: "HDMI, VGA, BNC",
	},
	{
		cat: 1,
		_id: "d-rhe-828-j",
		imageUrl: "img/products/rhe-828-j.png",
		name: "RHE-828-J (8ch Compact)",
		brand: "iCATCH",
		type: "HD-SDI",
		channel: 8,
		remote: "LAN, ie, iPhone, iPad, Android, 3G mobile",
		backup: "Network, USB 2.0 or SATA",
		videoout: "HDMI, VGA, BNC",
	},
];
class BaseProductDeleteComponent extends React.Component {
	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	}
	deleteItem() {
		alert("delete " + this.props.rowData.name);
		console.log(this.props.rowData, this.props.tdData);
	}
	render() {
		return (
			<td>
				<input
					type="button"
					className="btn btn-danger"
					value="Delete"
					onClick={this.deleteItem}
				/>
			</td>
		);
	}
}

function ProductTblImgpreloader() {
	return <div className="loading-div" style={{ minHeight: "100px" }} />;
}

const TblImageLoader = (props) => (
	<ImageLoader
		src={props.data}
		wrapper={React.DOM.div}
		preloader={ProductTblImgpreloader}
	>
		NOT FOUND
	</ImageLoader>
);

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
				<TblImageLoader data={props.rowData.imageUrl} />
			</a>
		</td>
	);
};

class BaseProductEditComponent extends React.Component {
	constructor(props) {
		super(props);
		this.editItem = this.editItem.bind(this);
	}
	editItem() {
		alert("edit " + this.props.rowData.name);
		console.log(this.props.rowData, this.props.tdData);
	}
	render() {
		return (
			<td>
				<input
					type="button"
					className="btn btn-warning"
					value="Edit"
					onClick={this.editItem}
				/>
			</td>
		);
	}
}

const ProductsTblPage = (props) => {
	let col = [
		"imageUrl",
		"name",
		"brand",
		"type",
		"channel",
		"remote",
		"backup",
		"HDD",
		"videoout",
		"delete",
		"edit",
	];
	let tHead = [
		"Image",
		"Model",
		"Brand",
		"Type",
		"Channel",
		"Remote",
		"Backup",
		"HDD",
		"Video output",
		"Delete",
		"Edit",
	];

	return (
		<SortableTbl
			tblData={MyData}
			tHead={tHead}
			customTd={[
				{ custd: BaseProductTblImageComponent, keyItem: "imageUrl" },
				{ custd: BaseProductEditComponent, keyItem: "edit" },
				{ custd: BaseProductDeleteComponent, keyItem: "delete" },
			]}
			dKey={col}
		/>
	);
};

ProductsTblPage.propTypes = {};

ReactDOM.render(<ProductsTblPage />, document.getElementById("app"));
```

# Props

-   `tblData`: Array
    -   Source data of Table
-   `tHead`: Array
    -   Table header to be displayed
-   `paging`: boolean, default `true`
    -   show pagine or not
-   `search`: boolean, default `true`
    -   show search bar or not
-   `defaultCSS`: boolean, default `true`
    -   Use Default CSS or not
-   `customTd`: Array
    -   Use your Custom Component to Render Specific TD
    -   The Custom Component will received 3 props
        -   `tdData`
            -   the data corresponds to this column
        -   `rowData`
            -   the data array corresponds to this row
        -   `field`
            -   the key of data array
-   `dKey`: Array
    -   Table column to be displayed

# Notes

-   Feel free to contribute and/or provide feedback!

# Build the example locally

```
git clone https://github.com/Grace951/react-table.git
cd example/example2
npm install
npm run dev
```

Then open [`localhost:3100`](http://localhost:3100) in a browser.

# License

MIT
