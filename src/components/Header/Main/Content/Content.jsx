import React, { useEffect, useState } from 'react';
import SingleData from './Singledata/SingleData';

const Content = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
        const loadData = async() => {
            const res = await fetch('../../../../../public/data.json');
            const data = await res.json();
            setData(data);
        };
        loadData();
    } , []);
    return (
        <div className=''>
            {
                data?.map(singleData => <SingleData singleData={singleData} key={singleData.id}></SingleData>)
            }
        </div>
    );
};

export default Content;