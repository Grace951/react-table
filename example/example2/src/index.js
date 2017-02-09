import React from 'react';
import SortableTbl from 'react-sort-search-table';
// import SortableTbl from '../../../src/SortableTbl';
import ReactDOM from 'react-dom';
import ImageLoader from 'react-imageloader';
require.context('./img', true, /\.?/);
require.context('reactSortSearchTblFonts', true, /\.?/);

import './index.sass';

let MyData = 
[
    {
        "cat": 1,
        "_id": "d-rhe-428-j",
        "imageUrl": "img/products/rhe-428-j.png",
        "name": "RHE-428-J (4ch Compact)",
        "brand": "iCATCH",
        "type":"HD-SDI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "srd-482",
        "imageUrl": "img/products/srd-482-2.jpg",
        "name": "SRD-482 (4ch)",
        "brand": "Samsung",
        "type":"HD-SDI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "sh3-04u",
        "imageUrl": "img/products/sh3-04u-1.png",
        "name": "SH3-04U (4ch)",
        "brand": "SNM",
        "type":"HD-SDI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "d-rhe-828-j",
        "imageUrl": "img/products/rhe-828-j.png",
        "name": "RHE-828-J (8ch Compact)",
        "brand": "iCATCH",
        "type":"HD-SDI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"Network, USB 2.0 or SATA",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "rhd-813-b",
        "imageUrl": "img/products/rhd-813-b-1.png",
        "name": "RHD-813-B (8ch 2RU size)",
        "brand": "iCATCH",
        "type":"HD-SDI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD (optional)",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "rhe-825u-b",
        "imageUrl": "img/products/rhe-825u-b.png",
        "name": "RHE-825U-B (8ch Universal)",
        "brand": "iCATCH",
        "type":"HD-SDI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "srd-880d",
        "imageUrl": "img/products/srd-880d-1.png",
        "name": "SRD-880D (8ch)",
        "brand": "Samsung",
        "type":"HD-SDI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "sh3-08u",
        "imageUrl": "img/products/sh3-08u-1.png",
        "name": "SH3-08U (8ch )",
        "brand": "SNM",
        "type":"HD-SDI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "mh3-08u",
        "imageUrl": "img/products/mh3-08u-1.png",
        "name": "MH3-08U (8ch Premium Universal)",
        "brand": "SNM",
        "type":"HD-SDI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD (optional)",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "rhe-1625u-b",
        "imageUrl": "img/products/rhe-1625u-b-1.png",
        "name": "RHE-1625-U (16ch Universal)",
        "brand": "iCATCH",
        "type":"HD-SDI",
        "channel":16,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "srd-1680d",
        "imageUrl": "img/products/srd-1656d-1.png",
        "name": "SRD-1680D (8CH Full HD + 16CH SD)",
        "brand": "Samsung",
        "type":"HD-SDI",
        "channel":16,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "HDD":"SATA",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "hd3-16u",
        "imageUrl": "img/products/hd3-16u-1.png",
        "name": "HD3-16U (16ch Premium Hybrid)",
        "brand": "SNM",
        "type":"HD-SDI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD (optional)",
        "HDD":"SATA",
        "videoout":"USB, Network, DVD (optional)"
    },
    {
        "cat": 1,
        "_id": "hik-tvi7204",
        "imageUrl": "img/products/hik-tvi7204-1.png",
        "name": "HIK-TVI7204 (4ch)",
        "brand": "DigiGuard",
        "type":"HD-TVI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "HDD":"SATA",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "hik-tvi7208",
        "imageUrl": "img/products/hik-tvi7208-1.png",
        "name": "HIK-TVI7208 (8ch)",
        "brand": "DigiGuard",
        "type":"HD-TVI",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "HDD":"SATA",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "hik-tvi7216",
        "imageUrl": "img/products/hik-tvi7216-1.png",
        "name": "HIK-TVI7216 (16ch)",
        "brand": "DigiGuard",
        "type":"HD-TVI",
        "channel":16,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "HDD":"SATA",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "ras-413-j",
        "imageUrl": "img/products/ras-413-j-1.png",
        "name": "RAS-413-J (4ch)",
        "brand": "iCATCH",
        "type":"AHD",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "HDD":"SATA",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "ras-813-j",
        "imageUrl": "img/products/ras-813-j-1.png",
        "name": "RAS-813-J (8ch)",
        "brand": "iCATCH",
        "type":"AHD",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "HDD":"SATA",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "ras-1613-j",
        "imageUrl": "img/products/ras-1613-j-1.png",
        "name": "RAS-1613-J (16ch)",
        "brand": "iCATCH",
        "type":"AHD",
        "channel":16,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "HDD":"SATA",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "413dh-j",
        "imageUrl": "img/products/413dh-j-1.png",
        "name": "413DH-J (4ch 960H)",
        "brand": "iCATCH",
        "type":"Analog",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "HDD":"SATA",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "srd-470d",
        "imageUrl": "img/products/srd-470d-1.png",
        "name": "SRD-470D  (4ch)",
        "brand": "Samsung",
        "type":"Analog",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "HDD":"SATA",
        "videoout":"VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "srd-476d",
        "imageUrl": "img/products/srd-476d-1.png",
        "name": "SRD-476D  (4ch)",
        "brand": "Samsung",
        "type":"Analog",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "HDD":"SATA",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "srd-876d",
        "imageUrl": "img/products/SRD-876D-1.jpg",
        "name": "SRD-876D  (8ch)",
        "brand": "Samsung",
        "type":"Analog",
        "channel":8,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "HDD":"SATA",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "srd-1656d",
        "imageUrl": "img/products/srd-1656d-1.png",
        "name": "SRD-1656D  (16ch)",
        "brand": "Samsung",
        "type":"Analog",
        "channel":16,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "HDD":"SATA",
        "videoout":"HDMI, VGA, BNC"
    },
    {
        "cat": 1,
        "_id": "srd-1676d",
        "imageUrl": "img/products/srd-1676d-1.png",
        "name": "SRD-1676D  (16ch)",
        "brand": "Samsung",
        "type":"Analog",
        "channel":16,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network, DVD",
        "HDD":"SATA",
        "videoout":"HDMI, VGA, BNC"
    }
];


class BaseProductDeleteComponent extends React.Component{
	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	}
	deleteItem(){
		alert("delete " + this.props.rowData.name);
		console.log(this.props.rowData, this.props.tdData);
	}
	render () {
		return (	
			<td >	
				<input type="button" className="btn btn-danger" value="Delete" onClick={this.deleteItem}/>
			</td>
		);
	}
}

BaseProductDeleteComponent.propTypes = {
	rowData: React.PropTypes.object,
	tdData: React.PropTypes.string,
};




function ProductTblImgpreloader() {
	return <div className="loading-div" style={{minHeight: "100px"}}/>;
}

const TblImageLoader = (props) => (
	<ImageLoader
		src={props.data}
		wrapper={React.DOM.div}
		preloader={ProductTblImgpreloader}>NOT FOUND
	</ImageLoader>);
TblImageLoader.propTypes = {
  data: React.PropTypes.string.isRequired,
};




const BaseProductTblImageComponent = (props) =>
{
	return (
		<td style={{width: '170px', minWidth: '170px', backgroundColor: '#fff'}} >
			<a href={props.rowData.imageUrl} target="_blank">
				<TblImageLoader data={props.rowData.imageUrl}/>
			</a>
		</td>
	);
};

BaseProductTblImageComponent.propTypes = {
	rowData: React.PropTypes.object,
	tdData: React.PropTypes.string,
};




class BaseProductEditComponent extends React.Component{
	constructor(props) {
		super(props);
		this.editItem = this.editItem.bind(this);
	}
	editItem(){
		alert("edit " + this.props.rowData.name);
		console.log(this.props.rowData, this.props.tdData);
	}
	render () {
		return (	
			<td >	
				<input type="button" className="btn btn-warning" value="Edit" onClick={this.editItem}/>
			</td>
		);
	}
}
BaseProductEditComponent.propTypes = {
	rowData: React.PropTypes.object,
	tdData: React.PropTypes.string,
};



const ProductsTblPage = (props) =>{
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
		"edit"
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
		"Edit"		
	];

	return (
		<SortableTbl tblData={MyData}
			tHead={tHead}
			customTd={[
						{custd: BaseProductTblImageComponent, keyItem: "imageUrl"},
						{custd: BaseProductEditComponent, keyItem: "edit"},
						{custd: BaseProductDeleteComponent, keyItem: "delete"}
						]}
			dKey={col}
			search={true}
			defaultCSS={true}			
		/>
	);
};

ProductsTblPage.propTypes = {
};


ReactDOM.render(<ProductsTblPage/>, document.getElementById("app"));
