import { Image } from 'react-native'
import React from 'react'
import batFoto from "../../../assets/bat-logo2.png";


export default function BatLogo (){
  return (
      <Image
        source={batFoto}
        style={{ resizeMode: "contain", height: 250, marginBottom: 10 }}
      />
  );
};