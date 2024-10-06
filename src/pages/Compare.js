import '../style_sheets/Compare.css';
import React, { useState } from 'react';
import { useDrugData } from '../scripts/drugData';

export function Compare() {
    const { drugs, loading, error } = useDrugData();
    const [searchQueryLeft, setSearchQueryLeft] = useState('');
    const [searchQueryRight, setSearchQueryRight] = useState('');
    const [selectedDrugLeft, setSelectedDrugLeft] = useState(null);
    const [selectedDrugRight, setSelectedDrugRight] = useState(null);
    const [answer, setAnswer] = useState('');
    const [isAnswer, setIsAnswer] = useState(false);

    if (error) {
        console.log(error);
    }

    const handleSearchLeft = (event) => {
        setSearchQueryLeft(event.target.value);
    };

    const handleSearchRight = (event) => {
        setSearchQueryRight(event.target.value);
    };

    const handleSelectDrugLeft = (drug) => {
        setSelectedDrugLeft(drug);
    };

    const handleSelectDrugRight = (drug) => {
        setSelectedDrugRight(drug);
    };

    const filteredDrugsLeft = drugs.filter(drug =>
        drug.medication_name.toLowerCase().includes(searchQueryLeft.toLowerCase())
    );

    const filteredDrugsRight = drugs.filter(drug =>
        drug.medication_name.toLowerCase().includes(searchQueryRight.toLowerCase())
    );

    const handleCompare = () => {
        if (!selectedDrugLeft || !selectedDrugRight) {
            alert('Please select a drug from both sides to compare.');
            return;
        }
    
        const priceLeft = parseFloat(selectedDrugLeft.unit_price.replace(/[^0-9.-]+/g,"")); 
        const priceRight = parseFloat(selectedDrugRight.unit_price.replace(/[^0-9.-]+/g,""));
    
        const cheaperDrug = priceLeft < priceRight ? selectedDrugLeft : selectedDrugRight;
        const priceDiff = Math.abs(priceLeft - priceRight);
        setAnswer(`${cheaperDrug.strength} of ${cheaperDrug.medication_name} ($${parseFloat(cheaperDrug.unit_price.replace(/[^0-9.-]+/g,""))}) is CHEAPER by $${priceDiff.toFixed(2)}`);
        setIsAnswer(true);
    };

    return (
        <div className="compareContainer">
            {isAnswer && <div className="compareAnswer">{answer}</div>}
            <button onClick={handleCompare} className="compareButton">Compare</button>
            {loading ? ( 
                <div className="loading">Loading...</div>
            ) : (
                <div className="searchContainer">
                    <div className="leftSearch">
                        <div className="selectedDrug">{selectedDrugLeft ? `${selectedDrugLeft.medication_name} (${selectedDrugLeft.strength})` : 'Selected Drug'}</div>
                        <input 
                            type="text" 
                            placeholder="Select a drug..." 
                            value={searchQueryLeft} 
                            onChange={handleSearchLeft} 
                            className="searchInputCompare"
                        />
                        <div className="drugListContainer"> 
                            <div className="drugList">
                                {filteredDrugsLeft.map((drug) => (
                                    <div 
                                        key={drug.id} 
                                        className="drugItem" 
                                        onClick={() => handleSelectDrugLeft(drug)}
                                    >
                                        {drug.medication_name} ({drug.strength})
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="rightSearch">
                        <div className="selectedDrug">{selectedDrugRight ? `${selectedDrugRight.medication_name} (${selectedDrugRight.strength})` : 'Selected drug'}</div>
                        <input 
                            type="text" 
                            placeholder="Select a drug..." 
                            value={searchQueryRight} 
                            onChange={handleSearchRight} 
                            className="searchInputCompare"
                        />
                        <div className="drugListContainer">
                            <div className="drugList">
                                {filteredDrugsRight.map((drug) => (
                                    <div 
                                        key={drug.id} 
                                        className="drugItem" 
                                        onClick={() => handleSelectDrugRight(drug)}
                                    >
                                        {drug.medication_name} ({drug.strength})
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
