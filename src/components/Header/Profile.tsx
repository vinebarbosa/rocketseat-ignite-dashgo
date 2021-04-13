import { Flex, Box, Avatar, Text } from "@chakra-ui/react"
import React from "react"


export const Profile = () => {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="center">
                <Text>Mateus Deitos</Text>
                <Text color="gray.300" fontSize="small">
                    mate.deitos@hotmail.com
                  </Text>
            </Box>
            <Avatar size="md" name="Mateus Deitos" src="https://github.com/mateusdeitos.png" />
        </Flex>
    )
}