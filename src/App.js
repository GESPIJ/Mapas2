import React from "react";
import SVG from 'react-inlinesvg';
import './App.css';
import Mapa from "./Mapa.svg"
import {ReactComponent as MapaSVG} from "./Mapa.svg"

function App() {

  const [normalMap, setNormalMap] = React.useState(false);
  const [renderedMap, setRenderedMap] = React.useState(false);

  if(!normalMap && !renderedMap) return(
    <div style={{ display: "flex", marginLeft:"auto", marginRight:"auto", maxWidth: "640px", justifyContent: "space-between", marginTop:"80px" }}
    onClick={()=> {
      // setNormalMap( false );
      // setRenderedMap( false );
    }}
    >
    <button variant="contained" loading={false} 
    onClick={(e) => { 
      e.preventDefault();
      setNormalMap( true );
    }
    } sx={{ width: "231px", marginTop: "42px" }}>
  Load normally
  </button>

  <button variant="contained" loading={false} 
    onClick={(e) => {
      e.preventDefault();
      setRenderedMap( true );
    }
    }
  sx={{ width: "231px", marginTop: "42px" }}>
  Load fetching image
  </button>
  </div>
  )

  else if(renderedMap) return (
    <img src={Mapa} alt="Mapa" />
  )

  else if (normalMap) return (
  // <MapaSVG />
  <SVG
        src="https://drive.google.com/file/d/1L6D-wkPkmG0XuAyUYdipX3ydGpDt2PEU/view?usp=sharing"
        width={128}
        cacheRequests={true}
        height="auto"
        title="React"
        loader={<span>Loading...</span>}
      />
  )

  return <div>Nothing here...</div>
}

export default App;
