import usePlatforms, { type Platform } from '../hooks/usePlatforms';
import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatform: Platform
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return;

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    <BsChevronDown />
                    {selectedPlatform ? selectedPlatform.name : 'Select Platform'}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map(
                            platform =>
                                <Menu.Item
                                    key={platform.id}
                                    value={platform.slug}
                                    onClick={() => {
                                        onSelectPlatform?.(platform);
                                    }}
                                >
                                    {platform.name}
                                </Menu.Item>
                        )}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default PlatformSelector