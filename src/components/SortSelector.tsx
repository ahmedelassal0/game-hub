import { Menu, Portal, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void,
    selectedOrderMethod: string,
};

const SortSelector = ({ onSelectSortOrder, selectedOrderMethod }: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release data' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Rating' },
    ]

    const selectedOrderLabel = sortOrders.find(sortOrder => sortOrder.value === selectedOrderMethod)?.label;
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    <BsChevronDown />
                    Order by: {selectedOrderLabel || 'Relevance'}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {
                            sortOrders.map(
                                sortOrder =>
                                    <Menu.Item
                                        key={sortOrder.value}
                                        value={sortOrder.value}
                                        onClick={() => onSelectSortOrder(sortOrder.value)}
                                    >
                                        {sortOrder.label}
                                    </Menu.Item>
                            )
                        }
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector