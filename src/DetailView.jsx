import {
  Box,
  Image,
  Center,
  Text,
  HStack,
  VStack,
  Heading,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItem from "./utils/getItem";
import YouTube from "react-youtube";
import { minHeight } from "@mui/system";

const DetailView = ({ mediatype }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const trailer = details.videos?.results.find(
    (video) => video.name === "Official Trailer"
  );

  useEffect(() => {
    const viewItem = async () => {
      const itemInfo = await getItem(mediatype, id);
      setDetails(itemInfo);
    };
    viewItem(mediatype, id);
    window.scrollTo(0, 0);
  }, []);

  console.log(details);

  return (
    <Box
      bgImage={`https://image.tmdb.org/t/p/w780/${details.images?.backdrops[0].file_path}`}
      bgSize="cover"
      h="100vh"
    >
      <Heading
        textAlign={"center"}
        bgGradient="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))"
        pt={"1vh"}
      >
        {details.original_title || details.original_name}
      </Heading>
      <Grid
        px={"10vw"}
        py="3vh"
        w="100vw"
        h="100vh"
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(10, 1fr)"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('background.jpg')"
      >
        <GridItem rowStart={1} rowEnd={5} colStart={2} colSpan={8}>
          {trailer && (
            <YouTube
              videoId={`${trailer.key}`}
              opts={{
                width: "100%",
                minHeight: "100vh",
                playerVars: { controls: 0 },
              }}
            ></YouTube>
          )}
        </GridItem>
        <GridItem colStart={2} colEnd={10} rowStart={5} pt="0vh">
          <Text fontSize={"2xl"}>{details.overview}</Text>
        </GridItem>
        <GridItem colStart={2} colEnd={4} rowStart={7} pt="0vh">
          <Text fontSize={"xl"}>
            Release date: {details.release_date || details.first_air_date}
          </Text>
        </GridItem>
        <GridItem colStart={7} colEnd={9} rowStart={7} rowEnd={7} pt="0vh">
          <Text fontSize={"xl"}>
            Vote: {details.vote_average} ({details.vote_count} votes)
          </Text>{" "}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DetailView;
