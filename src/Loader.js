import React from 'react';
import { GooeyCircleLoader } from "react-loaders-kit";

function Loader() {
    const loaderProps = {
        loading: true,
        size: 150,
        duration: 3,
        colors: ["#aa99ff", "#ffffff", "#4c0867"]
    }
  return (
    <div style={{height: "100vh", width: "100vw",display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "rgb(33, 33, 33)"
        }}>
        <GooeyCircleLoader {...loaderProps}/>
    </div>
  )
}

export default Loader;