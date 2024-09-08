import { Image } from 'react-native'
import React from 'react'
import batFoto from "../../../assets/bat-logo.png";


const BatLogo = () => {
  return (
      <Image
        source={batFoto}
        style={{ resizeMode: "contain", height: 180, marginBottom: 10 }}
      />
  );
};

export default BatLogo;
