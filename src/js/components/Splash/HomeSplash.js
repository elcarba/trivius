import React from 'react';
import island from '../../../assets/images/screen.png';
import cloud from '../../../assets/images/cloud.png';
import clouds from '../../../assets/images/clouds.png';
import sun from '../../../assets/images/sun.png';
import note from '../../../assets/images/note.png';
import wave from '../../../assets/images/wave.png';

const homeSplash = () => {
  return(
   <div className="cover-home">
     <img className="sun" src={sun}/>
     <img className="clouds-left" src={clouds}/>
     <img className="clouds-right" src={cloud}/>

     <div className="cover-island">
       <img className="island" src={island} alt="trivius-home"/>
       <div className="notes vh-center">
         <img src={note}/>
         <img src={note}/>
         <img src={note}/>
       </div>
     </div>

     <div className="ocean">
       <img style={{background: `url(${wave}) repeat-x`}} className="wave" src={wave}/>
     </div>
   </div>
 )
};

export default homeSplash;