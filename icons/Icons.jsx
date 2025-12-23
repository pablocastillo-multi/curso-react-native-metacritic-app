import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export const Home = (props) => (
    <MaterialCommunityIcons name="home" size={40} color="white" {...props} />
)

export const AboutIcon = (props) => (
    <MaterialCommunityIcons name="information" size={24} color="white" {...props} />
)

export const InformationIcon = (props) => (
    <MaterialCommunityIcons name="information-variant-circle-outline" size={24} color="black" {...props} />
)

export const HomeIcon = (props) => (
    <Entypo name="home" size={24} color="black" {...props} />
)