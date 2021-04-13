import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
    isCurrent?: boolean;
    pageNumber: number;
}

export const PaginationItem: React.FC<PaginationItemProps> = ({ isCurrent = false, pageNumber }) => {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{ bg: 'pink.500', cursor: 'default' }}>
                {pageNumber}
            </Button>
        );
    }
    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            _hover={{ bg: 'gray.500' }}
            bg="gray.700">
            {pageNumber}
        </Button>
    )
}