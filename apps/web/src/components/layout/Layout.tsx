import {Box, Flex} from "@chakra-ui/react";
import {SidebarLayout} from "@/components/sidebar/SidebarLayout.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "@/components/footer/Footer.tsx";

export const Layout = () => {

    return (
        <Flex h="100vh" overflow="hidden">
            <SidebarLayout/>

            <Flex direction="column" flex="1" minW={0}>
                <Box flex="1" overflowY="auto" p={4}>
                    <Outlet/>
                </Box>
                <Footer/>
            </Flex>
        </Flex>

    );
};