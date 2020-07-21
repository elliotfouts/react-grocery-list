import React from 'react';


const ProfilePicture = ({size, imageUrl, border = 0}) => {
  const divStyle = {
    width: size, 
    height: size, 
    borderRadius: '50%', 
    boxShadow: '2px 3px 5px rgba(0, 0, 0, 0.2)',
    display: 'grid',
    placeItems: 'center',
    margin: '1rem',
  }
  const imageStyle = {maxWidth: `${size-border}px`, maxHeight: `${size-border}px`, borderRadius: '50%'};
  console.log(imageStyle);

  return (
    <div style={divStyle}>
      <img style={imageStyle} src={imageUrl}/>
    </div>
  )
}

export default ProfilePicture;