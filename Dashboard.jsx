import React, { useState } from 'react';
import { BsHexagon } from 'react-icons/bs';
import { FaRegCircle, FaAngleRight,FaAngleDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey,faCube,faUser,faCoins,faStar,faMessage } from '@fortawesome/free-solid-svg-icons'; // Import the faGauge icon
import './Dashboard.css';

const Dashboard = () => {
  const [activeElement, setActiveElement] = useState(null);

  const handleElementClick = (element) => {
    setActiveElement(element === activeElement ? null : element);
  };

  const isElementActive = (element) => element === activeElement ? 'clicked' : '';
	const elements = [
    { symbol: faKey, text: 'Dashboard' },
    { symbol: faCube, text: 'Product' },
		{ symbol: faUser, text: 'Customers' },
		{ symbol: faCoins, text: 'Income' },
		{ symbol: faStar, text: 'Promote' },
		{ symbol: faMessage, text: 'Help' },
    // Add more elements here
  ];


  return (
    <div className="dashboard">
      <div className="dashboard-header mt-4">
        <div className="hexagon">
          <BsHexagon className="hexagon-icon" />
        </div>
        <h2 className="dashboard-title">Dashboard</h2>
      </div>
      <div className="dashboard-elements">
			{elements.map((element, index) => (
          <div
            key={index}
            className={`dashboard-element ${isElementActive(element.text)}`}
            onClick={() => handleElementClick(element.text)}
          >
						{
							element.text === "Promote" || element.text === "Help" ?
								<div className="element-icon">
              		<FontAwesomeIcon icon={element.symbol} className="symbol mt-1" />
            		</div>
								:
							<div className="element-icon">
              	<FontAwesomeIcon icon={element.symbol} className="symbol square mt-1" />
            	</div>
						}
            <div className="element-text">{element.text}</div>
						{
							isElementActive(element.text) ?
								"" :
							<div className="element-arrow">
              	<FaAngleRight className="arrow" />
            	</div>
						}
          </div>
        ))}
 			</div>
			 <div className="user-info">
        <div className="user-icon">
          <div className="circle">
            <FontAwesomeIcon icon={faUser} className="user-symbol" />
          </div>
        </div>
        <div className="user-details">
          <div className="user-name">Ethan</div>
          <div className="user-role">Project Manager</div>
        </div>
        <div className="user-arrow">
          <FaAngleDown className="arrow" />
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
