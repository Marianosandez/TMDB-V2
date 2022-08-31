import { MoonIcon, SunIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  useColorMode,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../src/utils/customHooks";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const handleHome = () => navigate("/");
  const email = useInput("email");
  const password = useInput("password");
  const username = useInput("username");
  const modalLogin = useDisclosure();
  const modalRegister = useDisclosure();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <Flex py={4}>
      <Button size="lg" onClick={handleHome}>
        My TMDB
      </Button>
      <Spacer />
      <ButtonGroup pl="5rem" size={"lg"} gap={8}>
        <Link to={`/movie`}>
          <Button>Movies</Button>
        </Link>
        <Link to={`/tv`}>
          <Button>TV</Button>{" "}
        </Link>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup size={"lg"} gap={2}>
        <>
          <Button onClick={modalLogin.onOpen}>Login</Button>
          <Modal isOpen={modalLogin.isOpen} onClose={modalLogin.onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Log in</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  size={"lg"}
                  type="text"
                  placeholder="Email"
                  {...email}
                ></Input>
                <InputGroup>
                  <Input
                    size={"lg"}
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    {...password}
                  />
                  <InputRightElement
                    width="4.5rem"
                    h="100%"
                    onClick={handleShow}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </InputRightElement>
                </InputGroup>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={modalLogin.onClose}>
                  Close
                </Button>
                <Button colorScheme="blue">Submit</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
        <>
          <Button onClick={modalRegister.onOpen}>Register</Button>
          <Modal isOpen={modalRegister.isOpen} onClose={modalRegister.onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Welcome</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  size={"lg"}
                  type="text"
                  placeholder="Name"
                  {...username}
                ></Input>
                <Input
                  size={"lg"}
                  type="text"
                  placeholder="Email"
                  {...email}
                ></Input>
                <InputGroup>
                  <Input
                    size={"lg"}
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    {...password}
                  />
                  <InputRightElement
                    width="4.5rem"
                    h="100%"
                    onClick={handleShow}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </InputRightElement>
                </InputGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={modalRegister.onClose}
                >
                  Close
                </Button>
                <Button colorScheme="blue">Submit</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
