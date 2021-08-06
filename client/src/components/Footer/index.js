import { Link, Text, Box, Spacer } from '@chakra-ui/react';

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { Flex } from '@chakra-ui/layout';

const Footer = () => {
    return (
        <footer>
            <Flex
                bg="blue.900"
                height={150}
                justify="center"
                align="center"
                direction="column"
                mt={20}
            >
                <Text
                    textColor="whiteAlpha.800"
                    align="center"
                    lineHeight="2em"
                    fontSize="3xl"
                >
                    Develeped By Julschong
                </Text>
                <Flex width="10vw" justify="space-around" mt={5}>
                    <Link href="https://github.com/julschong" align="center">
                        <AiOutlineGithub color="white" size={45} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/julius-lee-15934a133/"
                        align="center"
                    >
                        <AiOutlineLinkedin color="white" size={45} />
                    </Link>
                </Flex>
            </Flex>
        </footer>
    );
};

export default Footer;
