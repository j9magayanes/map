import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
'https://raw.githubusercontent.com/j9magayanes/data/main/wildfire1day.csv';


const row = d => {
  d.coords = [ d['longitude'],d['latitude'],];
  d['brightness'] = + d['brightness'];
  d['acq_date'] = new Date(d['acq_date']);
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);
  return data;

};


