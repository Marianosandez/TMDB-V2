import {
  Center,
  Image,
  Flex,
  Text,
  VStack,
  Spacer,
  Heading,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import Carousel from "framer-motion-carousel";
import popcorn from "./Popcorn.png";
import { CardGrid } from "./CardGrid";
import { Link } from "react-router-dom";
import Pagination from "@choc-ui/paginator";
// import backgroundImage from "./background.jpg";

const Home2 = ({ data, getPageValue, totalPages, pageValue, mediatype }) => {
  const handlePageChange = (value) => {
    getPageValue(value);
    window.scrollTo(0, 0);
  };

  console.log(mediatype, "SOY MEDIATYPE");

  return (
    <Flex direction={"column"} bgGradient="linear(to-r, #01b4e4, pink.500)">
      <Heading as="h2" size={"md"} alignContent="flex-start">
        Welcome to my movie database!
      </Heading>
      <Text>Here you can browse your favorite movies and Tv series!</Text>

      <Flex
        direction={"row"}
        h={"55vh"}
        w={"100%"}
        my={"4vh"}
        bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('background.jpg')"
        overflow={"hidden"}
        // backgroundImage={backgroundImage}
      >
        {data ? (
          <Carousel autoPlay={false}>
            {data?.slice(0, 5).map((item, i) => (
              <Link to={`/${mediatype}/${item?.id}`}>
                <Flex h={"20vh"} w="100vw" mx={"2vw"}>
                  <Image
                    w="45vw"
                    h={"55vh"}
                    objectFit="contain"
                    borderTopRadius="base"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    onError={(e) => (e.currentTarget.src = popcorn)}
                  />
                  <VStack w={"40vw"} h="45vh">
                    <Text fontSize={"5xl"} fontWeight="bold" pb={"2vw"}>
                      {item.original_title || item.original_name}
                    </Text>
                    <Spacer />
                    <Text
                      fontSize={"xl"}
                      fontWeight="semibold"
                      textOverflow={"ellipsis"}
                    >
                      {item.overview}
                    </Text>
                    <Spacer />
                  </VStack>
                </Flex>
              </Link>
            ))}
          </Carousel>
        ) : (
          <Text>HOLS</Text>
        )}
      </Flex>
      {data && <CardGrid data={data.slice(5)} mediatype={mediatype}></CardGrid>}
      <Flex direction={"row"} justifyContent="center" pb={"3vh"}>
        <Pagination
          current={pageValue}
          onChange={handlePageChange}
          total={totalPages * 10}
          paginationProps={{
            display: "flex",
          }}
        ></Pagination>
      </Flex>
    </Flex>
  );
};

export default Home2;
