import styled from 'styled-components/native';
import {colors} from '../../Styles/colors';


export const Container = styled.ScrollView`
  margin: 0;
  padding: 0;
  flex: 1;
  background-color: ${colors.background};
`;

export const DivClip = styled.View`
  flex: 1;
  z-index: 1;
  background-color: ${colors.background};

  
`;

export const DivInfo = styled.View`
  flex: 2;
  background-color: blue;
  background-color: ${colors.background};

`;

export const LogoNetflix = styled.Image`
  width: 2rem;
  height: 2rem;
  margin-top: 12.5rem;
  margin-left: .5rem; 
`;

export const TituloFilme = styled.Text`
  margin-left: .5rem;
  color: ${colors.textColor};
  font-size: 1.5rem;
  padding-right: .5rem;
`;

export const Releasedate = styled.Text`
  color: ${colors.textColor};
  margin-left: .5rem;
  width: 5rem;
`;

export const ParentalRating = styled.Text`

`;

export const ParentalRatingImg = styled.Image`
  width: 1.3rem;
  height: 1.3rem;
  position: absolute;
  margin-left: .5rem;
  border-radius: 12.5%;
  
`;

export const WatchButton = styled.TouchableOpacity`
  alignItems: center;
  background-color: white;
  height: 2rem;
  border-radius: 4px;
  width: 98vw;
  alignSelf: center;
  margin-top: .5rem;
  justifyContent: center;
`;

export const TextWatch = styled.Text`
  color: ${colors.background};
  

`;

export const IconPlay = styled.Image`

`;

export const DownloadButton = styled.TouchableOpacity`
  alignItems: center;
  background-color: #333333;
  height: 2rem;
  width: 98vw;
  alignSelf: center;
  margin-top: .5rem;
  justifyContent: center;
`;

export const DownloadText = styled.Text`
  color: ${colors.textColor}
`;

export const Description = styled.Text`
  color: ${colors.textColor};
  padding-right: .5rem;
  padding-left: .5rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
`;

export const ButtonsMenu = styled.View`
  flexDirection: row;
  justifyContent: space-evenly;
  margin-top: 1.5rem;
  padding-bottom: 1.5rem
`;

export const AddButton = styled.TouchableOpacity`

`;

export const LikeButton = styled.TouchableOpacity`
  
`;

export const ShareButton = styled.TouchableOpacity`

`;

export const DownButton = styled.TouchableOpacity`

`;