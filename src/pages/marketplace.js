import '../style_sheets/Marketplace.css';
import React, { useState } from 'react';
import { useDrugData } from '../scripts/drugData';

export const Marketplace = () => {
  const { drugs, error } = useDrugData();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); 
  };

  const filteredDrugs = drugs.filter((drug) => 
    drug.medication_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    console.log(error);
  }

  return (
    <div className="marketContainer">
      <div className="title"><u>Drug Prices</u></div>
      
      <input 
        type="text"
        placeholder="Search for a drug..."
        value={searchQuery}
        onChange={handleSearch} 
        className="searchBar"
      />

      <div className="keyContainer">
        {filteredDrugs.map((drug, index) => (
          <div className="subKeyContainer" key={index}>
            <a className="key" href={drug.url} target="_blank" rel="noopener noreferrer">
              <div className="medName">{drug.medication_name}</div>
              <div className="medStrength">({drug.strength})</div>
              <div className="price">{drug.unit_price} per unit</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};