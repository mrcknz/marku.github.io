import { Box, Container, Title, Text, Group, Anchor, Sx } from '@mantine/core';
import Image from 'next/image';
import TableImage from '../public/table.jpg';

const Golden = ({
  children,
  sx,
  ...rest
}: {
  children: JSX.Element | JSX.Element[];
  sx: Sx;
}) => {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyItems: 'center',
          overflow: 'scroll',
          flexGrow: 1,
          width: '100%',
          height: '100%',
        },
        sx,
      ]}
      {...rest}
    >
      <Box sx={{ flex: '1 1 38.2%' }} />
      <Box
        sx={{
          flex: '0 0 auto',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
        }}
      >
        <Box sx={{ flex: '1 1 38.2%' }} />
        <Container
          sx={{
            flex: '0 0 auto',
            maxWidth: '100%',
          }}
        >
          {children}
        </Container>
        <Box sx={{ flex: '1 1 61.8%' }} />
      </Box>
      <Box sx={{ flex: '1 1 61.8%' }} />
    </Box>
  );
};

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <Box
        sx={{ zIndex: -1, position: 'absolute', width: '100%', height: '100%' }}
      >
        <Image
          src={TableImage}
          alt="table"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          quality={100}
          placeholder="blur"
          style={{
            width: '100vw',
            height: '100vh',
            filter: 'brightness(0.3)',
          }}
        />
      </Box>
      <Golden
        sx={(theme) => ({
          color: 'white',
          paddingTop: theme.other.fib(5, 'rem'),
          paddingBottom: theme.other.fib(5, 'rem'),
        })}
      >
        <Title
          sx={(theme) => ({
            fontSize: theme.other.fib(3, 'rem'),
            lineHeight: '1',
            fontWeight: 100,
          })}
          ml="-4px"
        >
          Marco Kunz
        </Title>
        <Group mb="xl">
          <Anchor
            size="sm"
            target="_blank"
            href="https://linkedin.com/in/marcokunz/"
            sx={{ '&:hover': { textDecoration: 'none' } }}
          >
            LinkedIn ›
          </Anchor>
          <Anchor
            size="sm"
            target="_blank"
            href="https://github.com/wrthwhl"
            sx={{ '&:hover': { textDecoration: 'none' } }}
          >
            Github ›
          </Anchor>
        </Group>
        <Box my="xl">
          <Title order={2} mb="xs" mt="xl" sx={{ opacity: 0.8 }}>
            Current
          </Title>
          <Anchor
            size="sm"
            target="_blank"
            sx={{ '&:hover': { textDecoration: 'none' } }}
            href="https://www.qapter.com/qapter/technology/"
          >
            Solera ›
          </Anchor>
          <Text size="md" weight="bold">
            Director Visual Intelligence
          </Text>
          <Text size="sm" sx={{ width: '30rem' }}>
            {
              "Leading a distributed, crossfunctional team of ~15 people to deliver ML/DL powered technology components for Solera's product portfolio."
            }
          </Text>
        </Box>
        <Box my="xl">
          <Title order={2} mb="xs" mt="xl" sx={{ opacity: 0.8 }}>
            Passion
          </Title>
          <Text size="md" weight="bold">
            Web Engineering
          </Text>
          <Text size="sm" sx={{ width: '30rem' }} mb="md">
            nextjs, reactjs, typescript, GraphQL, PWAs, WebXR
          </Text>
          <Text size="md" weight="bold">
            Efficient Software Delivery
          </Text>
          <Text size="sm" mb="md" sx={{ width: '30rem' }}>
            Leadership & Collaboration, Agile Methodologies, Continuous
            Delivery, Monorepos, Serverless, Testing Automation
          </Text>
        </Box>
        <Box
          my="xl"
          sx={(theme) => ({
            paddingBottom: theme.other.fib(3, 'rem'),
          })}
        >
          <Title order={2} mb="xs" mt="xl" sx={{ opacity: 0.8 }}>
            Past
          </Title>
          <Text size="sm">Siroop</Text>
          <Text size="md" weight="bold" mb="md">
            Product Owner Data Pipeline
          </Text>
          <Text size="sm" mt="md">
            Google Streetview
          </Text>
          <Text size="md" weight="bold">
            Fleet and Field Support Manager
          </Text>
          <Text size="sm" mt="md">
            Swiss Post International
          </Text>
          <Text size="md" weight="bold">
            Project Manager Hub Automation
          </Text>
        </Box>
      </Golden>
    </>
  );
}

export default Index;
