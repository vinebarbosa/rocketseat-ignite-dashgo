import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import React from "react"

interface NavLinkProps extends ChakraLinkProps {
    icon: React.ElementType;
}

export const NavLink: React.FC<NavLinkProps> = ({ icon, children, ...rest }) => {
    return (
        <Link d="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}