// MainContent.js
import React, { useState } from 'react'; // Import useState
import './MainContent.css';
import { FaAngleDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faFileWaveform,faCoins,faLock,faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
	const [selectedGraph, setSelectedGraph] = useState(null); // Create state for the selected graph

	let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let productData = [
		{name: "Abstract 3D", prodimage:"https://thetyee.ca/News/2023/05/21/SeaFloorSediment.jpg", data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", stock: "32 in stock", price: "$45.99", sales: 20},
		{name: "Sarphens Illustration", prodimage:"https://media.istockphoto.com/id/1152237432/photo/underwater-scene-tropical-seabed-with-reef-and-sunshine.jpg?s=612x612&w=0&k=20&c=qAe3eZ_bwmrq6CW5IoddV2icSDKsO7vkbQKwqy3ma0o=", data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", stock: "32 in stock", price: "$45.99", sales: 20}
	]

	const handleGraphClick = (index) => {
    setSelectedGraph(index);
  };
  return (
    <div className="main-content">
      <div className="row ms-2 mt-2">
				<div className='col-4'><b style={{fontSize: "20px",'@media (max-width: 768px)': {fontSize: "12px"},}}>Hello, Shahrukh </b>
				<span>👋<b>,</b></span>
				</div>
				<div className='col-5'></div>
				<div className='col-3'>
					<input type="text" placeholder= "🔍 Search" style={{border: "none"}} />
				</div>
			</div>
			<div className="row mt-2 ms-4">
				<div className="squarebox with-circle">
					<div className='row'>
							<div className="col-6 circle light-green mt-3">
								<FontAwesomeIcon icon={faDollarSign} className="dollar-icon" />
							</div>
						<div className='col-6 mt-3'>
            		<span><b style={{color: "gray", '@media (max-width: 768px)': {fontSize: "8px"},}}>Earning</b></span><br/>
            		<b style = {{fontSize: "20px",'@media (max-width: 768px)': {fontSize: "10px"},}}>$198K</b><br/>
            		<span><b style={{color: "lightgreen", '@media (max-width: 768px)': {fontSize: "8px"},}}><FontAwesomeIcon icon={faArrowUp} /> 37.8%</b> this month</span>
						</div>
					</div>
				</div>
				<div className="squarebox with-circle">
					<div className='row'>
						<div className="col-6 circle light-purple mt-3">
							<FontAwesomeIcon icon={faFileWaveform} className="form-icon" />
						</div>
						<div className='col-6 mt-3'>
            		<span><b style={{color: "gray", '@media (max-width: 768px)': {fontSize: "8px"},}}>Orders</b></span><br/>
            		<b style = {{fontSize: "20px",'@media (max-width: 768px)': {fontSize: "10px"},}}>$2.4K</b><br/>
            		<span><b style={{color: "red", '@media (max-width: 768px)': {fontSize: "8px"},}}><FontAwesomeIcon icon={faArrowDown} /> 2%</b> this month</span>
						</div>
					</div>
				</div>
				<div className="squarebox with-circle">
					<div className='row'>
						<div className="col-6 circle seagreen mt-3">
							<FontAwesomeIcon icon={faCoins} className="coins-icon" />
						</div>
						<div className='col-6 mt-3'>
            	<span><b style={{color: "gray", '@media (max-width: 768px)': {fontSize: "8px",color: "gray"},}}>Balance</b></span><br/>
            	<b style = {{fontSize: "20px",'@media (max-width: 768px)': {fontSize: "10px"},}}>$2.4K</b><br/>
            	<span><b style={{color: "red", '@media (max-width: 768px)': {fontSize: "8px",color: "red"},}}><FontAwesomeIcon icon={faArrowDown} /> 2%</b> this month</span>
						</div>
					</div>
				</div>
				<div className="squarebox with-circle">
					<div className='row'>
						<div className="col-6 circle pink mt-3">
							<FontAwesomeIcon icon={faLock} className="lock-icon" />
						</div>
						<div className='col-6 mt-3'>
            	<span><b style={{color: "gray", '@media (max-width: 768px)': {fontSize: "8px",color: "gray"},}}>Total Sales</b></span><br/>
            	<b style = {{fontSize: "20px",'@media (max-width: 768px)': {fontSize: "10px"},}}>$89K</b><br/>
            	<span><b style={{color: "lightgreen", '@media (max-width: 768px)': {fontSize: "8px",color: "lightgreen"},}}><FontAwesomeIcon icon={faArrowUp} /> 11%</b> this month</span>
						</div>
					</div>
			</div>
    </div>
		<div className='row mt-2'>
			<div className="col-8 ms-4">
				<div className='graphBox'>
					<div className="row mt-4">
						<div className="col-3 ms-3 mt-2"><b style={{fontSize: "20px",'@media (max-width: 768px)': {fontSize: "10px"}}}>Overview</b></div>
						<div className='col-5 mt-2'></div>
						<div className='col-3 mt-2'>
							<span style={{backgroundColor: "lightgray", borderRadius: "8px", padding: "4px", '@media (max-width: 768px)': {fontSize: "8px"}}}>Quarterly&nbsp;&nbsp; <FaAngleDown /></span>
						</div>
					</div>
					<div className="row">
						<span style={{color: "gray", fontSize: "12px", marginLeft: "17px",'@media (max-width: 768px)': {fontSize: "9px", marginLeft: "8px"}}}>Monthly Earning</span>
					</div>
					<div className="graph-container">
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index} className={`graph ${selectedGraph === index ? 'selected' : ''}`} onClick={() => handleGraphClick(index)}>
            </div>
          ))}
        </div>
				<div className='row mt-1'>
					{
						months.map((mon,index) => 
							(index <= 6) ?
							<div className='col-1 text-end'><b style={{fontSize: "12px", '@media (max-width: 768px)': {fontSize: "6px"}}}>{mon}</b></div>
							:
							<div className='col-1 text-start'><b style={{fontSize: "12px", '@media (max-width: 768px)': {fontSize: "6px"}}}>{mon}</b></div>
							)
					}
				</div>
				</div>
			</div>
			<div className="col-3 ms-2 mt-2">
				<div className='customerBox'>
					<div className='row mt-3'>
						<div className="col-3 ms-2"><b style={{fontSize: "20px", '@media (max-width: 768px)': {fontSize: "10px"}}}>Customers</b></div>
					</div>
					<div className="row">
						<div className="col-10 ms-2">
							<b style={{fontSize: "12px", color: "lightgray", '@media (max-width: 768px)': {fontSize: "6px"}}}>Customers that buy products</b>
						</div>
					</div>
					<div className="mt-2">
						<div className="centered-circle ms-4 mt-4">
							<div className="inner-circle mt-3 ms-3">
            		<div className="inner-border purple-border text-center">
									<b style={{fontSize: "20px", '@media (max-width: 768px)': {fontSize: "10px"}}}>65%</b><br/>
									<span style={{fontSize: "12px", '@media (max-width: 768px)': {fontSize: "6px"}}}>Total New Customers</span>
								</div>
          		</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="row mt-3 ms-4">
			<div className='dataBox'>
				<div className="row mt-1">
					<div className='col-3 ms-2'><b style={{fontSize: "20px", '@media (max-width: 768px)': {fontSize: "10px"}}}>Product Sell</b></div>
					<div className="col-4"></div>
					<div className="col-2 search-container mt-1">
						<input type="text" placeholder= "🔍 Search" style={{border: "none", backgroundColor: "lightgray", borderRadius: "8px"}} />
					</div>
					<div className="col-2 mt-1">
						<span style={{backgroundColor: "lightgray", borderRadius: "8px", padding: "4px", '@media (max-width: 768px)': {padding: "2px"}}}>Last 30 days&nbsp;&nbsp; <FaAngleDown /></span>
					</div>
				</div>
				<div className="row mt-2 border-bottom" style={{color: "lightgray"}}>
					<div className="col-3" style={{'@media (max-width: 768px)': {fontSize: "6px"}}}>Product name</div>
					<div className="col-3"></div>
					<div className="col-2" style={{'@media (max-width: 768px)': {fontSize: "6px"}}}>Stock</div>
					<div className="col-2" style={{'@media (max-width: 768px)': {fontSize: "6px"}}}>Price</div>
					<div className="col-2" style={{'@media (max-width: 768px)': {fontSize: "6px"}}}>Total Sales</div>
				</div>
					{
						productData.map(prod => 
							<div className='row'>
								<div className="col-6">
									<div className="row">
										<div className="col-2 mt-2">
											<img src = {prod.prodimage} style={{height: "40px", borderRadius: "8px", '@media (max-width: 768px)': {height: "20px"}}} />
										</div>
										<div className="col-10 mt-1">
											<div className='row'>
												<b className='ms-1' style={{'@media (max-width: 768px)': {fontSize: "6px"}}}>{prod.name}</b>
											</div>
											<div className='row'>
												<span style={{fontSize: "15px", '@media (max-width: 768px)': {fontSize: "7px"}}}>{prod.data}</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-2 mt-2" style={{'@media (max-width: 768px)': {fontSize: "6px"}}}>{prod.stock}</div>
								<div className="col-2 mt-2" style={{'@media (max-width: 768px)': {fontSize: "6px"}}}><b>{prod.price}</b></div>
								<div className="col-2 mt-2" style={{'@media (max-width: 768px)': {fontSize: "6px"}}}><span className='ms-4'>{prod.sales}</span></div>
							</div>
							)
					}
			</div>
		</div>
		</div>
  );
};

export default MainContent;
