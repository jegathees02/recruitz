'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,   
  SimpleGrid,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';
import NavBar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
const BOLD =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
const CONFIDENCE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
const EYECONTACT =
'https://images.pexels.com/photos/12899193/pexels-photo-12899193.jpeg?auto=compress&cs=tinysrgb&w=600'
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
const CLARITY =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
 
export default function Feedback() {
    const navigate = useNavigate();
  return (
    <>
        <NavBar />
        <Box>
        <Button variant={'outline'} borderColor={'teal'} marginLeft={5} marginTop={5} onClick={() => navigate('/result')}>
        <ArrowBackIcon /> Back
        </Button>
        
      </Box>
      <Center>
      <Heading color={'teal.600'}  fontFamily={'initial'}  fontSize={'2xl'} textTransform={'uppercase'}  fontWeight={500}>
      <h1>Personalized Feedback</h1>
      </Heading>
      </Center>
            <Center>
               
        <SimpleGrid columns={[1, 2]} gap={14} py={12} px={6}>
        
         {/* ... First Box ... */}
      <Box
        role={'group'}
        p={6}
        maxW={'530px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${EYECONTACT})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={532}
            objectFit={'cover'}
            src={EYECONTACT}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading color={'gray.500'} fontSize={'2xl'} textTransform={'uppercase'} fontFamily={'body'} fontWeight={500}>
            Eye Contact
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>
           Speak Slowly and Clearly: Avoid rushing through your words. Speak at a moderate pace, enunciating each word clearly. Slow down when discussing complex or important points, giving your listener time to absorb the information.

Articulate Your Words: Pay attention to how you pronounce each syllable and word. Articulate consonants and vowels distinctly, and avoid mumbling or slurring. Practice speaking aloud to improve your pronunciation and diction.
Use Pauses Effectively: Incorporate well-timed pauses into your speech. Pauses give your audience time to process what you're saying and emphasize key points. They also provide you with a moment to gather your thoughts, enhancing overall clarity.
</Text>
          </Stack>
        </Stack>
      </Box>
      {/* ... Second Box ... */}
      <Box
        role={'group'}
        p={6}
        maxW={'530px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${CONFIDENCE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={532}
            objectFit={'cover'}
            src={CONFIDENCE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading color={'gray.500'} fontSize={'2xl'} textTransform={'uppercase'} fontFamily={'body'} fontWeight={500}>
            Confidence
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>
           Speak Slowly and Clearly: Avoid rushing through your words. Speak at a moderate pace, enunciating each word clearly. Slow down when discussing complex or important points, giving your listener time to absorb the information.

Articulate Your Words: Pay attention to how you pronounce each syllable and word. Articulate consonants and vowels distinctly, and avoid mumbling or slurring. Practice speaking aloud to improve your pronunciation and diction.

Use Pauses Effectively: Incorporate well-timed pauses into your speech. Pauses give your audience time to process what you're saying and emphasize key points. They also provide you with a moment to gather your thoughts, enhancing overall clarity.
</Text>
          </Stack>
        </Stack>
      </Box>
      
      {/* ... Third Box ... */}
      <Box
        role={'group'}
        p={6}
        maxW={'530px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${CLARITY})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={532}
            objectFit={'cover'}
            src={CLARITY}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading color={'gray.500'} fontSize={'2xl'} fontFamily={'body'} textTransform={'uppercase'} fontWeight={500}>
            Clarity
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>
           Speak Slowly and Clearly: Avoid rushing through your words. Speak at a moderate pace, enunciating each word clearly. Slow down when discussing complex or important points, giving your listener time to absorb the information.

Articulate Your Words: Pay attention to how you pronounce each syllable and word. Articulate consonants and vowels distinctly, and avoid mumbling or slurring. Practice speaking aloud to improve your pronunciation and diction.

Use Pauses Effectively: Incorporate well-timed pauses into your speech. Pauses give your audience time to process what you're saying and emphasize key points. They also provide you with a moment to gather your thoughts, enhancing overall clarity.
</Text>
          </Stack>
        </Stack>
      </Box>
      {/* ... Four Box ... */}
      <Box
        role={'group'}
        p={6}
        maxW={'530px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${BOLD})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={532}
            objectFit={'cover'}
            src={BOLD}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading color={'gray.500'} fontSize={'2xl'} fontFamily={'body'} textTransform={'uppercase'} fontWeight={500}>
            Boldness
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>
           Speak Slowly and Clearly: Avoid rushing through your words. Speak at a moderate pace, enunciating each word clearly. Slow down when discussing complex or important points, giving your listener time to absorb the information.

Articulate Your Words: Pay attention to how you pronounce each syllable and word. Articulate consonants and vowels distinctly, and avoid mumbling or slurring. Practice speaking aloud to improve your pronunciation and diction.

Use Pauses Effectively: Incorporate well-timed pauses into your speech. Pauses give your audience time to process what you're saying and emphasize key points. They also provide you with a moment to gather your thoughts, enhancing overall clarity.
</Text>
          </Stack>
        </Stack>
      </Box>
    </SimpleGrid>
      </Center>

    </>
  )
}