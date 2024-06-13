import React, { useState, useEffect }  from 'react';

const Dashboard = (props) => {
    // Your code for fetching and storing the images goes here
const [images, setImages] = useState(props.files);
    

    return (
        <div>
            <h1>Image Gallery</h1>
            {/* Your code for rendering the images goes here */}
        </div>
    );
};

export default Dashboard;