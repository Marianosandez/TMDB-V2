import React from "react";
import { Card } from "./Card";
import { SimpleGrid, Box } from "@chakra-ui/react";

export const CardGrid = ({ data, mediatype }) => {
  return (
    <Box py={["1rem", "50px"]} mx={["0.5rem", "50px"]}>
      <SimpleGrid columns={[3, 3, 5]} spacing="1rem" objectFit={"fill"}>
        {data.map((item) => (
          <Card item={item} mediatype={mediatype} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
