import React from "react";
import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

function SideNav() {
  const navlinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/Transactions",
    },
  ];
  return (
    <Stack bg="white" justify="space-between" boxShadow={
        {
            base:"none",
            lg:"lg"
        }

    } 
    w={
        {
            base:"full",
            lg:"16rem"
            

        }
    } height="100vh"
    
   
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">
          @DOSOMECODING
        </Heading>
        <Box mt="24px" mx="12px">
          {navlinks.map((nav) => (
            <HStack
              borderRadius="10px"
              key={nav.text}
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mt="24px" mx="12px" mb="6">
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
}

export default SideNav;
