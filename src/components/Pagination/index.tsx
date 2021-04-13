import { Box, Stack } from "@chakra-ui/layout"
import { PaginationItem } from "./PaginationItem"

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
                <PaginationItem isCurrent pageNumber={1} />
                <PaginationItem pageNumber={2} />
                <PaginationItem pageNumber={3} />
                <PaginationItem pageNumber={4} />
            </Stack>
        </Stack>
    )
}