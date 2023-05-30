import React, { useState } from 'react';

const App = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const stateList = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
        "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
        "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    const yearList = Array.from({ length: 133 }, (v, i) => i + 2019);

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
    <>
            <h2>Dropdowns 1</h2>
            <div>
                <label htmlFor="state-dropdown-1">Select a state: </label>
                <select id="state-dropdown-1" value={selectedState} onChange={handleStateChange}>
                    <option value="">--Select a state--</option>
                    {stateList.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
                <label htmlFor="year-dropdown-1">Select a year: </label>
                <select id="year-dropdown-1" value={selectedYear} onChange={handleYearChange}>
                    <option value="">--Select a year--</option>
                    {yearList.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            <h2>Dropdowns 2</h2>
            <div>
                <label htmlFor="state-dropdown-2">Select a state: </label>
                <select id="state-dropdown-2" value={selectedState} onChange={handleStateChange}>
                    <option value="">--Select a state--</option>
                    {stateList.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
                <label htmlFor="year-dropdown-2">Select a year: </label>
                <select id="year-dropdown-2" value={selectedYear} onChange={handleYearChange}>
                    <option value="">--Select a year--</option>

