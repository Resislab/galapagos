import {Box, Button, Flex, VStack} from "@chakra-ui/react";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";
import {FiHome} from "react-icons/fi";
import {Tooltip} from "@/components/ui/tooltip"
import {RouteUrls} from "@/router/route-urls.ts";
import {Profile} from "@/components/sidebar/Profile.tsx";

export type NavItem = {
    label: string;
    icon: React.ElementType;
    routeUrl: string
};


type SidebarContentType = {
    collapsed: boolean;
    items: NavItem[];
    onItemClick?: (item: NavItem) => void;
};

export const NAV_ITEMS: NavItem[] = [
    {label: "Accueil", icon: FiHome, routeUrl: RouteUrls.HOME()},
];

export const SidebarContent = ({collapsed, items, onItemClick}: SidebarContentType) => {
    const bg = useColorModeValue("white", "gray.800")
    const hoverBg = useColorModeValue("gray.50", "gray.700")
    const borderColor = useColorModeValue("gray.200", "gray.700")

    const buttonPaddingX = collapsed ? 0 : 3
    const navAlignItems = collapsed ? "center" : "flex-start"

    return (
        <Flex
            direction="column"
            h="100%"
            bg={bg}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderRight="1px solid"
            borderColor={borderColor}
            transition="width 0.2s ease"
        >
            <VStack align="stretch" px={1} py={2} width="100%" alignItems={navAlignItems}>
                {items.map((item) => {
                    const Icon = item.icon;
                    const button = (
                        <Button
                            onClick={() => onItemClick?.(item)}
                            variant="ghost"
                            justifyContent={collapsed ? "center" : "flex-start"}
                            aria-label={item.label}
                            height="10"
                            px={buttonPaddingX}
                            _hover={{bg: hoverBg}}
                        >
                            {collapsed ? <Icon size={18}/> : item.label}
                        </Button>
                    );

                    return collapsed ? (
                        <Tooltip key={item.label} content={item.label}>
                            <Box>{button}</Box>
                        </Tooltip>
                    ) : (
                        <Box key={item.label}>{button}</Box>
                    );
                })}

            </VStack>
            <Profile collapsed={collapsed}/>

        </Flex>
    );
};
