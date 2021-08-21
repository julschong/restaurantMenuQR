import { Link, Text } from '@chakra-ui/react';

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
                    <Link
                        href="https://github.com/julschong"
                        align="center"
                        target="_blank"
                    >
                        <AiOutlineGithub color="white" size={45} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/julschong7/"
                        align="center"
                        ml={3}
                        target="_blank"
                    >
                        <AiOutlineLinkedin color="white" size={45} />
                    </Link>
                </Flex>
            </Flex>
        </footer>
    );
};

export default Footer;
