import React from 'react'
import { Link } from 'react-scroll';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import {Map, Marker} from 'pigeon-maps';
import patron from "../assets/img/patron1.png";
const images = [
  {
   original: "https://scontent.fmex10-5.fna.fbcdn.net/v/t39.30808-6/438172192_772195861720593_2152065744826198573_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=os4vdz2k0YkQ7kNvgGye1Yb&_nc_oc=Adj_CyilH3MpnNH_Nsnj6RD0J0v0dwtyFp9vq90OXLwlq2k7RpE9w_nIbfCVxUE6BkJzVbHAmtkZQk2mb2mwHKi1&_nc_ht=scontent.fmex10-5.fna&oh=00_AfBsCA08ER_GPi8fhfaXbkw-UxYwXW6q5vifcyqmTK6GFw&oe=663AC24A",
    thumbnail: "https://scontent.fmex10-5.fna.fbcdn.net/v/t39.30808-6/438172192_772195861720593_2152065744826198573_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=os4vdz2k0YkQ7kNvgGye1Yb&_nc_oc=Adj_CyilH3MpnNH_Nsnj6RD0J0v0dwtyFp9vq90OXLwlq2k7RpE9w_nIbfCVxUE6BkJzVbHAmtkZQk2mb2mwHKi1&_nc_ht=scontent.fmex10-5.fna&oh=00_AfBsCA08ER_GPi8fhfaXbkw-UxYwXW6q5vifcyqmTK6GFw&oe=663AC24A",
  },
  {
    original: "https://scontent.fmex10-5.fna.fbcdn.net/v/t39.30808-6/438172192_772195861720593_2152065744826198573_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=os4vdz2k0YkQ7kNvgGye1Yb&_nc_oc=Adj_CyilH3MpnNH_Nsnj6RD0J0v0dwtyFp9vq90OXLwlq2k7RpE9w_nIbfCVxUE6BkJzVbHAmtkZQk2mb2mwHKi1&_nc_ht=scontent.fmex10-5.fna&oh=00_AfBsCA08ER_GPi8fhfaXbkw-UxYwXW6q5vifcyqmTK6GFw&oe=663AC24A",
    thumbnail: "https://scontent.fmex10-5.fna.fbcdn.net/v/t39.30808-6/438172192_772195861720593_2152065744826198573_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=os4vdz2k0YkQ7kNvgGye1Yb&_nc_oc=Adj_CyilH3MpnNH_Nsnj6RD0J0v0dwtyFp9vq90OXLwlq2k7RpE9w_nIbfCVxUE6BkJzVbHAmtkZQk2mb2mwHKi1&_nc_ht=scontent.fmex10-5.fna&oh=00_AfBsCA08ER_GPi8fhfaXbkw-UxYwXW6q5vifcyqmTK6GFw&oe=663AC24A",
  },
  {
    original: "https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/438098199_772195805053932_8586171297618206080_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hE8JvGQ6-yIQ7kNvgFKNK_u&_nc_ht=scontent.fmex10-1.fna&oh=00_AfD_4rAC39VrPtavoebPVk0kFBnHzNC59hpotvYB_7mwaw&oe=663ACEE8",
    thumbnail: "https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/438098199_772195805053932_8586171297618206080_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hE8JvGQ6-yIQ7kNvgFKNK_u&_nc_ht=scontent.fmex10-1.fna&oh=00_AfD_4rAC39VrPtavoebPVk0kFBnHzNC59hpotvYB_7mwaw&oe=663ACEE8",
  },
];


const Visit = () => {
  return (
    <div className="min-h-screen flex flex-col items-center lg:px-32 px-5 bg-[#1F1F1F] " style={{ backgroundImage: `url(${patron})`, backgroundRepeat: 'repeat'  }} >
    <h2 id='subtitulos' className="text-[#FFB800] mt-24 mb-8 font-semibold text-6xl text-center max-sm:text-center drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">Ubicación</h2>
    <div className='flex justify-center items-center flex-row max-sm:flex-col sm:flex-col xl:flex-row  ' >
      <div className='flex justify-center items-center xl:mr-5 max-sm:mb-5 sm:mb-5 xl:mb-0'>
<iframe className='xl:w-[400px] xl:h-[520px] max-sm:w-[380px] max-sm:h-[520px]' src="https://www.google.com/maps/d/u/0/embed?mid=1pygUjM2gX-zjBaCdYeJq0raQujt2Bso&ehbc=2E312F"></iframe>

      </div>
      <div className='flex justify-center items-center max-sm:w-80  xl:w-[700px] bg-red-500' >
      <ImageGallery items={images} 
      showThumbnails={false}
      showBullets={true}
      autoPlay={true}
      />

      </div>
    </div>
     {/* <Map height={500} width={500} defaultCenter={[19.625919, -99.128522]} defaultZoom={18}>
      <Marker width={50} anchor={[19.625919, -99.128522]} color={`#FF0000`}  />
    </Map> */}
    <p className='text-white text-center mt-2'>Calle Juan de La Barrera 268, Sta Maria Cuautepec, 54949 Fuentes del Valle, Méx.</p>
    </div>
  )
}

export default Visit