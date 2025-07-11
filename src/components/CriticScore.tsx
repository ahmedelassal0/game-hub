import { Badge } from '@chakra-ui/react'

interface Props {
    score: number
};

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
    
    return (
        <Badge color={color} fontSize='14px' padding={1}>{score}</Badge>
    )
}

export default CriticScore