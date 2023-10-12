import React from 'react';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row lg:flex-row p-2'>
            <div className='w-3/5'>
                <Content></Content>
            </div>
            <div className='w-2/5'>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Main;