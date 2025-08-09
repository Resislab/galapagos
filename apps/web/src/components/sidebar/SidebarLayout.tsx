import {Box, Flex, IconButton,} from "@chakra-ui/react";
import {useMemo, useState} from "react";
import {useColorModeValue} from "@/components/ui/color-mode.tsx";
import {NAV_ITEMS, NavItem, SidebarContent} from "@/components/sidebar/SidebarContent.tsx";
import {LuPanelLeftClose, LuPanelLeftOpen} from "react-icons/lu";
import {AppLogo} from "@/components/sidebar/AppLogo.tsx";
import {useTranslation} from "react-i18next";
import {Outlet, useNavigate} from "react-router-dom";


export const SidebarLayout = () => {
    const {t} = useTranslation("sidebar", {keyPrefix: "aria"})
    const navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false)

    const collapsedWidth = 75 //px
    const openedWidth = 240 //px

    const sidebarWidth = useMemo(() => (collapsed ? collapsedWidth : openedWidth), [collapsed])
    const headerBg = useColorModeValue("white", "gray.800")
    const borderColor = useColorModeValue("gray.200", "gray.700")

    const handleItemClick = (item: NavItem) => {
        navigate(item.routeUrl)
    };

    return (
        <Flex h="100vh" overflow="hidden">
            <Box
                as="nav"
                width={`${sidebarWidth}px`}
                minWidth={`${sidebarWidth}px`}
                height="100%"
                transition="width 0.2s ease"
            >
                <Flex direction="column" height="100%">
                    <Flex
                        align="center"
                        justify={collapsed ? "center" : "space-between"}
                        px={2}
                        py={2}
                        borderBottom="1px solid"
                        borderColor={borderColor}
                        bg={headerBg}
                    >
                        <AppLogo collapsed={collapsed}/>
                        <IconButton
                            aria-label={t(collapsed ? "open" : "close")}
                            size="sm"
                            variant="ghost"
                            onClick={() => setCollapsed((isCollapsed) => !isCollapsed)}
                        >
                            {collapsed ? <LuPanelLeftOpen/> : <LuPanelLeftClose/>}
                        </IconButton>
                    </Flex>

                    <SidebarContent
                        collapsed={collapsed}
                        items={NAV_ITEMS}
                        onItemClick={handleItemClick}
                    />
                </Flex>
            </Box>

            <Flex direction="column" flex="1" minW={0}>
                <Outlet/>
            </Flex>
        </Flex>
    );
};

