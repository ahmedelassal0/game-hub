import { HStack, Icon } from '@chakra-ui/react';
import type { Platform } from '../hooks/usePlatforms';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import type { IconType } from 'react-icons';

interface Props {
    platforms: Platform[]
};


const PlatformsList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    };

    return (
        <HStack mt='10px'>
            {platforms.map(platform => <Icon color='gray.500' key={platform.id} as={iconMap[platform.slug]} />)}
        </HStack>
    );
};

export default PlatformsList