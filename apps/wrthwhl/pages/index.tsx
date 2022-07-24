import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Anchor,
  Timeline,
  Sx,
  Divider,
  ActionIcon,
} from '@mantine/core';
import {
  IconSchool,
  IconBriefcase,
  IconBulb,
  IconId,
  IconStar,
  IconPhone,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import TableImage from '../public/table.jpg';
import { resume } from '@wrthwhl/content';
import Obfuscate from 'react-obfuscate';

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
            maxWidth: '80ch',
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

const mdxComponents = {
  Section: ({ children, mx, my }) => (
    <Box
      sx={(t) => ({
        margin: `${t.other.fib(my || 3, 'em')} ${t.other.fib(mx || 0, 'em')}`,
      })}
    >
      {children}
    </Box>
  ),
  Title,
  Text,
  TimelineItem: ({ children, title, org, startYear, endYear }) => (
    <Box
      sx={(t) => ({
        display: 'flex',
        flexDirection: 'row',
        margin: `${t.other.fib(2, 'em')} ${t.other.fib(1, 'em')}`,
      })}
    >
      <Box
        sx={(t) => ({
          marginRight: t.other.fib(1, 'em'),
          fontFamily: t.fontFamilyMonospace,
        })}
      >
        <Box
          sx={(t) => ({
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            textAlign: 'center',
          })}
        >
          <Text color="dimmed" inherit>
            {endYear || 'Now'}
          </Text>
          <Box
            sx={(t) => ({
              width: '50%',
              height: '100%',
              borderRight: `solid 1px ${t.colors.gray[8]}`,
            })}
          ></Box>
          <Text color="dimmed" inherit>
            {startYear}
          </Text>
        </Box>
      </Box>
      <Box>
        <Text
          size="sm"
          color="teal"
          weight="bold"
          sx={(t) => ({
            cursor: 'default',
            '&:hover': { color: t.colors.teal[3] },
          })}
        >
          {title}{' '}
          <Text size="sm" color="dimmed" component="span">
            @ {org}
          </Text>
        </Text>
        <Text size="sm" sx={(t) => ({ color: t.colors.gray[4] })}>
          {children}
        </Text>
      </Box>
    </Box>
  ),
  Divider,
  Timeline,
  IconBriefcase,
  IconBulb,
  IconSchool,
  IconId,
  IconStar,
  IconPhone,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  Obfuscate,
  ActionIcon,
  Box,
};

export function Index({ doc }) {
  const MdxContent = useMDXComponent(doc.body.code);
  return (
    <>
      {/* <Box
        sx={{
          zIndex: -1,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src={TableImage}
          alt="table"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          placeholder="blur"
          style={{
            width: '100vw',
            height: '100vh',
            filter: 'brightness(0.4)',
          }}
        />
      </Box> */}
      <Golden
        sx={(theme) => ({
          color: 'white',
          paddingTop: theme.other.fib(2, 'rem'),
        })}
      >
        <Box sx={(t) => ({ paddingBottom: t.other.fib(2, 'rem') })}>
          <MdxContent components={mdxComponents} />
        </Box>
        {/* <Title
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
            typescript, reactjs, nextjs, GraphQL, cypress, mdx, PWAs, micro
            frontends, WebXR,&nbsp;...
          </Text>
          <Text size="md" weight="bold">
            Efficient Software Delivery
          </Text>
          <Text size="sm" mb="md" sx={{ width: '30rem' }}>
            Agile Methodologies, Continuous Delivery, Monorepos, Serverless,
            Testing Automation
          </Text>
          <Text size="md" mt="md" weight="bold">
            Leadership & Collaboration
          </Text>
          <Text size="md" mt="md" weight="bold">
            Sailing
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
        </Box> */}
      </Golden>
    </>
  );
}

export const getStaticProps = () => {
  return { props: { doc: resume } };
};

export default Index;
