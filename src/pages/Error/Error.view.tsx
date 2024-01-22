import { Button, Typography } from 'src/components';
import { Flex } from 'src/style/components';

const GenericErrorView = ({ onClose }: { onClose: () => void }) => {
  return (
    <Flex flexDirection="column">
      <Typography>Sorry we have had some error</Typography>
      <Button onClick={onClose}>close</Button>
    </Flex>
  );
};

export default GenericErrorView;
