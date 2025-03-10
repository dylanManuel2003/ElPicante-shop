import React from "react";

const Moon = ({ height, width, color }: { height: string, width: string, color: string }) => {
    return (
        <svg
            height={height}
            width={width}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M343.1,315c-1.8,0.1-3.5,0.1-5.3,0.1c-29.1,0-56.5-11.3-77.1-31.9c-20.6-20.6-31.9-48-31.9-77.1    c0-16.6,3.7-32.6,10.6-47.1c3.1-6.4,6.8-12.5,11.1-18.2c-7.6,0.8-14.9,2.4-22,4.6c-46.8,14.8-80.7,58.5-80.7,110.2    c0,63.8,51.7,115.5,115.5,115.5c35.3,0,66.8-15.8,88-40.7c4.8-5.7,9.2-11.9,12.8-18.5C357.3,313.6,350.3,314.7,343.1,315z" fill={color} />
        </svg>
    );
};

export default Moon;