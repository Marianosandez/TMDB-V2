import { StarIcon } from "@chakra-ui/icons";
import { Image, VStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import popcorn from "./Popcorn.png";

export const Card = ({ item, mediatype }) => {
  const voteAverage = Math.round(item.vote_average / 2);
  const id = item.id;

  // console.log(item, "ITEM");
  return (
    <Link to={`/${mediatype}/${id}`}>
      <VStack
        h={"100%"}
        borderColor={"#90cea1"}
        data-group
        position={"relative"}
        overflow={"hidden"}
        borderWidth={"0.3rem"}
        borderRadius={"2xl"}
        bg={"#8861c2"}
        alignContent={"center"}
      >
        <Box display="flex" mt="2" alignItems="center" position={"absolute"}>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                boxSize={"6"}
                key={i}
                color={i < voteAverage ? "gold" : "gray.300"}
                opacity="100%"
              />
            ))}
        </Box>
        <Image
          style={{ marginTop: "0px" }}
          w={"100%"}
          h={"80%"}
          borderTopRadius="base"
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          onError={(e) => (e.currentTarget.src = popcorn)}
        ></Image>
        <Text
          fontSize={["sm", "2xl"]}
          bg={"rgba(255, 255, 255, 0.832)"}
          color="black"
          transform={"auto"}
          translateY="100%"
          position={"absolute"}
          bottom="0"
          left="0"
          right="0"
          maxHeight={"100%"}
          overflow="scroll"
          _groupHover={{
            transform: "translateY(0%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {item.overview}
        </Text>
        <Text
          isTruncated
          pt={"0rem"}
          px={"1rem"}
          justifySelf="center"
          overflow="hidden"
          height={"3.5em"}
          fontSize="xl"
          fontWeight={"bold"}
          color="black"
        >
          {item.original_title || item.original_name}
        </Text>
      </VStack>
    </Link>
  );
};
