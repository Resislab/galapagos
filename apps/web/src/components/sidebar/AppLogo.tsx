import {Flex, Text} from "@chakra-ui/react";
import {LuBird} from "react-icons/lu";

type AppLogoType = {
    collapsed: boolean;
};

export const AppLogo = ({collapsed}: AppLogoType) => {
    return (
        <Flex align="center" gap={3}>
            <LuBird size={24}/>
            {!collapsed && (
                <Text textStyle="md">Galapagos</Text>
            )}
        </Flex>
    )
}