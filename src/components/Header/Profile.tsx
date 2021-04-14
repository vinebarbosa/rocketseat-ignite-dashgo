import { Flex, Box, Avatar, Text } from "@chakra-ui/react"
import React from "react"

interface ProfileProps {
    showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="center">
                    <Text>Mateus Deitos</Text>
                    <Text color="gray.300" fontSize="small">
                        mate.deitos@hotmail.com
                  </Text>
                </Box>
            )}
            <Avatar size="md" name="Mateus Deitos" src="https://github.com/mateusdeitos.png" />
        </Flex>
    )
}