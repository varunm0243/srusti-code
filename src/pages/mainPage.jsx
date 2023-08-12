import React from 'react';
import Sidebar from '../components/sidebar/sidebar';

const MainPage = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar/>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        {/* <Header/> */}
                    </div>
                    <div className='row'>
                        {/* <Body/> */}
                    </div>
                </div>
                <div className="col-lg-4">
                    {/* <Trending/> */}
                </div>
            </div>
            
            
        </div>
    )
}
export default MainPage;