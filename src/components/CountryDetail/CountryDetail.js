import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams()
    return (
        <div>
            <h2>welcome to my country in: {countryName}</h2>
        </div>
    );
};

export default CountryDetail;