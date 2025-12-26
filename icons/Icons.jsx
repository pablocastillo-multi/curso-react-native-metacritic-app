import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export const Home = (props) => (
    <MaterialCommunityIcons name="home" size={24} color="white" {...props} />
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

export const BackIcon = (props) => (
    <Ionicons name="arrow-back" size={24} color="black"  {...props} />
)

export const BundleIcon = (props) => (
    <MaterialCommunityIcons name="humble-bundle" size={24} color="black" {...props} />
)

export const CardsIcon = (props) => (
    <MaterialCommunityIcons name="cards" size={24} color="black" {...props} />
)

export const MapIcon = (props) => (
    <Feather name="map" size={24} color="black" {...props} />
)

export const WeaponIcon = (props) => (
    <MaterialCommunityIcons name="chemical-weapon" size={24} color="black" {...props} />
)