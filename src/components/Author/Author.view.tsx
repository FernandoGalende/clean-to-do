import { Flex } from 'src/style/components';
import { Button, Typography } from 'src/components';

function Author() {
  return (
    <Flex
      w="80vw"
      maxWidth="330"
      backgroundColor="surface-background"
      position="absolute"
      borderRadius="4"
      bottom="16"
      px="8"
      py="2"
    >
      <Typography.Text style={{ textAlign: 'center' }}>
        Made with ❤️ by
        <Button type="link" target="_blank" href="https://www.linkedin.com/in/fernandogalende">
          Fernando Galende
        </Button>
      </Typography.Text>
    </Flex>
  );
}

export default Author;
