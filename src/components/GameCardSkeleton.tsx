import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
    return (
        <Card.Root>
            <Skeleton height='200px' />
            <Card.Body gap="2">
                <SkeletonText noOfLines={2} />
            </Card.Body>
        </Card.Root>
    )
}

export default GameCardSkeleton