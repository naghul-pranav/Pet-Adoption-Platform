import React from 'react';
import HomeDarkCardLeftPic from "./images/HomeDarkCardLeftPic.png";
import HomeDarkCardRightPic from "./images/HomeDarkCardRightPic.png";
import bg1 from "./images/bg1.png";
import bg2 from "./images/bg2.png";
//import Cathome1 from"./images/Cathome1.png";

const formatNumber = (number) => {
    const suffixes = ['', 'k', 'M', 'B', 'T'];
    const suffixNum = Math.floor(('' + number).length / 3);
    const shortNumber = parseFloat((number / Math.pow(1000, suffixNum)).toFixed(1));
    return shortNumber >= 1 ? `${shortNumber}${suffixes[suffixNum]}${"+"}` : number.toString();
  };

const CardBelowHome = () => {
    const adoptedPets = formatNumber(1212);
  return (
    <div>
 <div className='dark-grey-container'>
      <div className='left-pic'><img src={HomeDarkCardLeftPic} alt="Dog with toy"/></div>
      {/* <div className='left-para'><p><p className='adopted-pets-num'>{adoptedPets}</p> Furry Friends<br/>Living Their Best Lives</p></div> */}
      <div className='right-para'><p className='we-do'>WHAT WE DO?</p>With a focus on matching the right pet with the right family, PetFinder makes it easy to adopt love and foster happiness.</div>
      <div className='right-pic'><img src={HomeDarkCardRightPic} alt="Dog pic" /></div>
    </div>
    <div className='dark-grey-container'>
      <div className='left-pic1'><img src={bg1} alt="Dog with toy"/></div>
      {/* <div className='left-para'><p><p className='adopted-pets-num'>{adoptedPets}</p> Furry Friends<br/>Living Their Best Lives</p></div> */}
      <div className='right-para1'><p className='we-do'>WHERE LOVE MEETS A SECOND CHANCE</p>PawFinds connects rescue animals with loving homes through a simple, safe adoption process. Explore a variety of pets, from playful puppies to cuddly kittens, and make a difference by giving them a second chance. Find your new best friend today!</div>
      <div className='right-pic1'><img src={bg2} alt="Dog pic" /></div>
    </div>
    </div>
    
    
  )
}

export default CardBelowHome;