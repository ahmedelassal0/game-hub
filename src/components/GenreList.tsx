import { Button, Heading, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre?: (genre: Genre) => void,
  selectedGenre?: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />

  if (error) return null;

  return (
    <>
    <Heading fontSize='2xl' marginBottom='10px'>Genres</Heading>
      <List.Root spaceY='5px' listStyle='none '>
        {data.map(genre => (
          <List.Item key={genre.id}>
            <HStack gap='10px'>
              <Image
                objectFit='cover'
                boxSize='32px'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                textAlign='start'
                fontSize='lg'
                variant="plain"
                whiteSpace='normal'
                maxW='100%'
                _hover={{ textDecoration: 'underline' }}
                onClick={() => onSelectGenre?.(genre)}
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
      </>
  )
}

export default GenreList