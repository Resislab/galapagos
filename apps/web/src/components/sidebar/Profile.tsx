import {Avatar, Box, IconButton} from "@chakra-ui/react";
import {useAuth} from "@/context/AuthContext.tsx";
import {FiLogOut} from "react-icons/fi";

type ProfileType = {
    collapsed: boolean;
};

export const Profile = ({collapsed}: ProfileType) => {
    const {session} = useAuth()

    const handleLogOut = () => {
        console.log("logout")
    };
    const flexDirection = collapsed ? "column" : "row"
    const gap = collapsed ? "2" : "10"
    console.log("profile is", flexDirection)

    return (
        <Box
            display="flex"
            flexDirection={flexDirection}
            justifyContent={"space-between"}
            alignItems={"center"}
            width="100%"
            gap={gap}
            px={1}
            py={2}
        >
            <Avatar.Root>
                <Avatar.Fallback name={session?.user?.email}/>
            </Avatar.Root>
            <IconButton
                onClick={() => handleLogOut()}
                variant="ghost"
                justifyContent={collapsed ? "center" : "flex-start"}
                aria-label={""}
                height="10"
            >
                <FiLogOut/>
            </IconButton>
        </Box>
    );
};

