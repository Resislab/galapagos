import {Flex, Text} from "@chakra-ui/react"
import {useColorModeValue} from "@/components/ui/color-mode"

export const Footer = () => {
    const bg = useColorModeValue("white", "gray.800")
    const borderColor = useColorModeValue("gray.200", "gray.700")

    return (
        <Flex
            as="footer"
            width="100%"
            py={4}
            px={20}
            borderTop="1px solid"
            borderColor={borderColor}
            bg={bg}
            justify="space-between"
            align="center"
        >
            <Text fontSize="sm">© 2025 Galapagos</Text>
            <Text fontSize="sm">v0.0.1</Text>
        </Flex>
    )
}
