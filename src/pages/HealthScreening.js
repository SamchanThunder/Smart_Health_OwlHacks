import React, { useState } from 'react';
import '../style_sheets/HealthScreening.css';
import { Symptoms } from '../scripts/symptoms';
import { Diseases } from '../scripts/diseases';

export function HealthScreening() {
    const questions = [
        { question: "1. What is your age?", options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 and over"] },
        { question: "2. What is your gender?", options: ["Male", "Female", "Non-binary", "Other", "Prefer not to say"] },
        { question: "3. What are your symptoms?", options: Symptoms},
    ];

    const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(''));
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [conditions, setConditions] = useState('');
    const [zeroConditions, setZeroConditions] = useState(false);

    const handleSelectChange = (index, value) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = value; 
        setSelectedOptions(newSelectedOptions);
        setDropdownOpen(false); 
    };

    const handSelectChangeQuestionThree = (index, value) => {
        const newSelectedOptions = [...selectedOptions];
        if(newSelectedOptions[2].includes(value)){
            newSelectedOptions[2] = newSelectedOptions[2].replace(","+value, "");
            newSelectedOptions[2] = newSelectedOptions[2].replace(value+",", "");
            newSelectedOptions[2] = newSelectedOptions[2].replace(value, "");
        }else{
            if(newSelectedOptions[2] == ''){
                newSelectedOptions[2] += value;
            }else{
                newSelectedOptions[2] += "," + value; 
            }
        }
        setSelectedOptions(newSelectedOptions);
        setDropdownOpen(false); 
    }

    const handleSubmit = () => {
        if (selectedOptions.includes('')) {
            alert("Please answer all the questions.");
            return;
        }else{
            let symptomsList = selectedOptions[2].split(",");
            let conditionsList = [];
            for(let i = 0; i < symptomsList.length; i++){
                for (const disease in Diseases){
                    if(Diseases[disease].includes(symptomsList[i])){
                        conditionsList.push(disease);
                    }
                }
            }
            conditionsList = removeAndUniquify(conditionsList);
            if(conditionsList.length == 0){
                setZeroConditions(true);
            }

            setConditions(conditionsList);
            setQuizCompleted(true);
            alert("Scroll Down");
        }   
    };

    const removeAndUniquify = (arr) => {
        const countMap = {};
        arr.forEach((item) => {
            countMap[item] = (countMap[item] || 0) + 1;
        });
    
        const filteredArray = arr.filter((item) => countMap[item] >= 3);
    
        const uniqueArray = [...new Set(filteredArray)];
    
        return uniqueArray;
    };

    const filteredOptions = questions[2].options.filter(option =>
        option.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className="ScreeningContainer">
            <div id="title"><u>Symptoms Quiz</u></div>
            <div className="SubScreeningContainer">
                {questions.map((item, index) => (
                    <div key={index} className="question">
                        <label htmlFor={`question-${index}`}>{item.question}</label>
                        {index === 2 ? ( 
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Search symptoms..." 
                                    value={searchInput} 
                                    onChange={(e) => {
                                        setSearchInput(e.target.value);
                                        setDropdownOpen(true);
                                    }} 
                                    className="searchInput" 
                                    onFocus={() => setDropdownOpen(true)}
                                />
                                {dropdownOpen && (
                                    <div className="customDropdown">
                                        {filteredOptions.length > 0 ? (
                                            filteredOptions.map((option, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className="dropdownOption"
                                                    onClick={() => handSelectChangeQuestionThree(index, option)}
                                                >
                                                    {option}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="dropdownOption">No options found</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <select
                                id={`question-${index}`}
                                className="dropdown"
                                value={selectedOptions[index]}
                                onChange={(e) => handleSelectChange(index, e.target.value)}
                            >
                                <option value="">Select an option</option>
                                {item.options.map((option, idx) => (
                                    <option key={idx} value={option}>{option}</option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
                <div className="symptoms">{selectedOptions[2]}</div>
            </div>
            <button onClick={handleSubmit} className="submitButton">Submit</button>

            {quizCompleted && 
                <div className="analysisContainer">
                    <div className="analysisTitle">Your possible conditions:</div>
                    <div className="analysisBody">
                    {zeroConditions && 
                        <div className="analysisKey">There is not enough symptoms to provide you with a potential condition.</div>
                    }
                    {conditions.map((condition, index) => (
                        <a 
                            href={`https://en.wikipedia.org/wiki/${encodeURIComponent(condition)}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="analysisKey" 
                            key={index}
                        >
                            {condition}
                        </a>
                    ))}
                    </div>
                </div>
            }
        </div>
    );
}
