import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void,
}

const SearchInput = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form
        style={{width: '100%'}}
            onSubmit={event => {
                event.preventDefault();
                onSearch(inputRef.current?.value ?? '');
            }}
        >
            <InputGroup startElement={<BsSearch />}>
                <Input
                    borderRadius={20}
                    placeholder='search games...'
                    variant='outline'
                    ref={inputRef}
                />
            </InputGroup>
        </form>
    )
}

export default SearchInput