import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchText: string) => void,
}

export default function ({ onSearch }: Props) {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px'></Image>
            <SearchInput onSearch={onSearch} />
            <ColorModeButton />
        </HStack>
    )
}
