import {
  Center,
  Image,
  Flex,
  Text,
  VStack,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import getTrending from "./utils/getTrending";
import Carousel from "framer-motion-carousel";
import popcorn from "./Popcorn.png";
import { Pagination } from "@mui/material";

// import backgroundImage from "./background.jpg";

const Home = () => {
  const [movieData, setMovieData] = useState("");
  const [tvData, setTvData] = useState("");

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await getTrending("movie", "week");
      setMovieData(trendingMovies?.slice(0, 9));
    };
    const getTrendingTV = async () => {
      const trendingTV = await getTrending("tv", "week");
      setTvData(trendingTV?.slice(0, 9));
    };
    getTrendingMovies();
    getTrendingTV();
  }, []);

  return (
    <Flex direction={"column"}>
      <Heading as="h2" size={"md"} alignContent="flex-start">
        Welcome to my movie database!
      </Heading>
      <Text>Here you can browse your favorite movies and Tv series!</Text>
      <Flex
        direction={"row"}
        h={"100vh"}
        w={"100%"}
        pt="4vh"
        // backgroundImage={backgroundImage}
      >
        {movieData ? (
          <Carousel autoPlay={false}>
            {movieData?.map((item, i) => (
              <Flex h={"50vh"} w="46vw" mx={"2vw"}>
                <Image
                  position={"absolute"}
                  w="50vw"
                  h={"50vw"}
                  objectFit="contain"
                  borderTopRadius="base"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  onError={(e) => (e.currentTarget.src = popcorn)}
                />
                <VStack
                  w={"50vw"}
                  h="50vw"
                  bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('background.jpg')"
                  position={"relative"}
                >
                  <Text fontSize={"5xl"} fontWeight="bold" pt={"3vw"}>
                    {item.original_title}
                  </Text>
                  <Spacer />
                  <Center fontSize={"xl"} fontWeight="semibold">
                    {item.overview}
                  </Center>
                  <Spacer />
                </VStack>

                {/* <Center
                position={"relative"}
                fontSize={"xl"}
                fontWeight="semibold"
                w={"50vw"}
                h="50vw"
                bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('background.jpg')"
              >
                {item.overview}
              </Center> */}
              </Flex>
            ))}
          </Carousel>
        ) : (
          <div></div>
        )}

        {tvData ? (
          <Carousel autoPlay={false}>
            {tvData?.map((item, i) => (
              <Flex h={"50vh"} w="46vw">
                <Image
                  position={"absolute"}
                  w="50vw"
                  h={"50vw"}
                  objectFit="contain"
                  borderTopRadius="base"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  onError={(e) => (e.currentTarget.src = popcorn)}
                />
                <VStack
                  w={"50vw"}
                  h="50vw"
                  bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))"
                  position={"relative"}
                >
                  <Text fontSize={"5xl"} fontWeight="bold" pt={"3vw"}>
                    {item.original_name}
                  </Text>
                  <Spacer />
                  <Center fontSize={"xl"} fontWeight="semibold">
                    {item.overview}
                  </Center>
                  <Spacer />
                </VStack>
              </Flex>
            ))}
          </Carousel>
        ) : (
          <div></div>
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
