import { Flex } from 'src/style/components';
import { Button, Typography } from 'src/components';

function Author() {
  return (
    <Flex
      backgroundColor="surface-background"
      position="absolute"
      borderRadius="4"
      bottom="16"
      left="16"
      px="8"
      py="2"
    >
      <Typography.Text>
        Made with ❤️ by
        <Button type="link" target="_blank" href="https://www.linkedin.com/in/fernandogalende">
          Fernando Galende
        </Button>
      </Typography.Text>
    </Flex>
  );
}

export default Author;
