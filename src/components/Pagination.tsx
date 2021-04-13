import { Button } from "@chakra-ui/button"
import { Box, Stack } from "@chakra-ui/layout"

export const Pagination = () => {
    return (
        <Stack
            direction="row"
            mt="8"
            align="center"
            justify="space-between"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">

                <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled _disabled={{ bg: 'pink.500', cursor: 'default' }}>
                    1
                </Button>   
                <Button size="sm" fontSize="xs" width="4" _hover={{ bg: 'gray.500', }} bg="gray.700">
                    2
                </Button>
                <Button size="sm" fontSize="xs" width="4" _hover={{ bg: 'gray.500', }} bg="gray.700">
                    3
                </Button>
                <Button size="sm" fontSize="xs" width="4" _hover={{ bg: 'gray.500', }} bg="gray.700">
                    4
                </Button>

            </Stack>
        </Stack>
    )
}