import axios from 'axios';
import { useState, useEffect } from 'react';

export const useDrugData = () => {
  const [drugs, setDrugs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchDrugs = async () => {
      setLoading(true); 
      try {
        const response = await axios.get('https://us-central1-costplusdrugs-publicapi.cloudfunctions.net/main');
        setDrugs(response.data.results); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDrugs();
  }, []);

  return { drugs, error, loading };
};
