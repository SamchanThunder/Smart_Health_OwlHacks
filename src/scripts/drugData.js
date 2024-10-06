import axios from 'axios';
import { useState, useEffect } from 'react';

export const useDrugData = () => {
  const [drugs, setDrugs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await axios.get('https://us-central1-costplusdrugs-publicapi.cloudfunctions.net/main');
        setDrugs(response.data.results); 
      } catch (err) {
        setError(err);
      }
    };

    fetchDrugs();
  }, []);

  return { drugs, error };
};