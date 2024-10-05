import React, { useState } from 'react';
import '../style_sheets/HealthScreening.css';

export function HealthScreening() {
    const questions = [
        { question: "1. What is your age?", options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 and over"] },
        { question: "2. What is your gender?", options: ["Male", "Female", "Non-binary", "Prefer not to say"] },
        { question: "3. Do you have any allergies?", options: ["Yes", "No", "Not sure"] },
        { question: "4. Do you smoke?", options: ["Yes", "No"] },
        { question: "5. How often do you exercise?", options: ["Never", "1-2 times a week", "3-4 times a week", "5 or more times a week"] },
        { question: "6. Do you have a family history of any diseases?", options: ["Yes", "No", "Not sure"] },
        { question: "7. What medications are you currently taking?", options: ["None", "Prescription", "Over-the-counter", "Herbal supplements"] },
        { question: "8. How would you rate your overall health?", options: ["Poor", "Fair", "Good", "Very good", "Excellent"] },
        { question: "9. Do you have any other health concerns?", options: ["Yes", "No"] }
    ];

    const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(''));

    const handleSelectChange = (index, value) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = value; 
        setSelectedOptions(newSelectedOptions);
    };

    const handleSubmit = () => {
        if (selectedOptions.includes('')) {
            alert("Please answer all the questions.");
            return;
        }
        console.log('Selected Options:', selectedOptions);
    };

    return (
        <div className="ScreeningContainer">
            <div id="title"><u>Symptoms Quiz</u></div>
            <div className="SubScreeningContainer">
                {questions.map((item, index) => (
                    <div key={index} className="question">
                        <label htmlFor={`question-${index}`}>{item.question}</label>
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
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className="submitButton">Submit</button>
        </div>
    );
}
