import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button, Box, Spinner } from '@chakra-ui/react';
import NavBar from '../components/navbar';
import '../styles/result.css'; // Import the CSS file for styling
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FcIdea } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
  Heading,
} from '@chakra-ui/react';

const App = () => {
  const [loading, setLoading] = useState(true);
  var score = 7;
  const navigate = useNavigate();
  const data = [
    { name: 'Eye-Contact', percentage: 40 },
    { name: 'Confidence', percentage: 70 },
    { name: 'Clarity', percentage: 20 },
    { name: 'Boldness', percentage: 100 }
  ];
  const scorechart = [
    { name: 'Success', percentage: score },
    { name: 'Failure', percentage: 100 - score }
  ];
  const totalPercentage = scorechart.reduce((sum, item) => sum + item.percentage, 0);
  const isSuccess = score >= 50;

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating a 2-second loading delay

    return () => clearTimeout(delay); // Clear the timeout if the component unmounts
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
     

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Spinner size="md" color="teal" />
          <p> &nbsp;Loading...</p>
        </div>
      ) : (
        <>
            <NavBar />
            <Box>
              <Button variant={'outline'} borderColor={'teal'} marginLeft={5} marginTop={5} onClick={() => navigate('/camera')}>
                <ArrowBackIcon /> Back
              </Button>
              <Button variant={'outline'} borderColor={'teal'} marginLeft={"80%"} marginTop={5} onClick={() => navigate('/feedback')}>
                <ArrowBackIcon /> Feedback
              </Button>
            </Box>
        <div className="main-container">
          <div className="chart-container" style={{ marginLeft: '10%', marginRight: 'auto' }}>
            <ResponsiveContainer width="80%" height={500}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill=" #2C3863 " />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="svg-heading-container">
            <div className="svg-container">
              <svg width="400" height="400">
                {scorechart.map((item, index) => {
                  const startAngle = index === 0 ? 0 : scorechart.slice(0, index).reduce((sum, prevItem) => sum + (prevItem.percentage / totalPercentage) * 360, 0);
                  const endAngle = (item.percentage / totalPercentage) * 360 + startAngle;
                  const color = isSuccess ? (index === 0 ? '#33b864' : 'gray') : (index === 0 ? ' #33b864' : 'gray');
                  const startAngleRadians = (startAngle - 90) * (Math.PI / 180);
                  const endAngleRadians = (endAngle - 90) * (Math.PI / 180);
                  const startX = Math.cos(startAngleRadians) * 100 + 200;
                  const startY = Math.sin(startAngleRadians) * 100 + 200;
                  const endX = Math.cos(endAngleRadians) * 100 + 200;
                  const endY = Math.sin(endAngleRadians) * 100 + 200;

                  return (
                    <path
                      key={item.name}
                      d={`M${startX} ${startY} A 100 100 0 ${endAngle - startAngle > 180 ? 1 : 0} 1 ${endX} ${endY}`}
                      fill="none"
                      stroke={color}
                      strokeWidth="20"
                      strokeLinecap="round"
                      style={{
                        animation: `fillAnimation${index} 2s forwards, rotateAnimation 2s linear infinite`,
                        animationDelay: `${index * 0.9}s`,
                      }}
                    />
                  );
                })}
                <text x="200" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="29" fill="#3C4869">
                  {score}%
                </text>
              </svg>
            </div>
            <div className="assessment-heading">
              <Heading
                padding={5}
                textAlign={'center'}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
                lineHeight={'110%'}>
                Your{' '}
                <Text as={'span'} color={'teal.600'}>
                  Personality
                </Text>
                <br />
                Assessment Score :{' '}
                <Text as={'span'} color={isSuccess ? 'teal.600' : 'red.600'}>
                  {` ${score}%`}
                </Text>
              </Heading>
            </div>
            <Button
              variant={'outline'}
              borderColor={'teal'}
              marginTop={2}
              size="md"
              onClick={onOpen}
              width="150px"
              marginLeft={220}
            >
              <FcIdea />
              Suggestions
            </Button>
            <SuggestionsModal isOpen={isOpen} onClose={onClose} />
          </div>
        </div>
        </>
      )}
      <style>
        {scorechart.map((item, index) => (
          `@keyframes fillAnimation${index} {
            0% {
              stroke-dasharray: 0 1000;
            }
            100% {
<<<<<<< HEAD
              stroke-dasharray: ${(item.percentage / totalPercentage) * 1440} 10;
=======
              stroke-dasharray: ${(item.percentage / totalPercentage) * 720} 100;
>>>>>>> 7c654965d97c0101755e0886318ec84936511577
            }
          }`
        ))}
      </style>
      <style>
  {`
    .typing-animation {
      position: relative;
    }
    
    .blinking-cursor {
      animation: blink-animation 0.7s step-end infinite;
    }
    
    @keyframes blink-animation {
      0%, 100% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
    }
    
    
    
  `}
</style>
    </>
  );
};

const TypingAnimation = ({ children }) => {
  const textToType = React.Children.toArray(children).join('');
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.substring(0, currentIndex + 1)+'|');
        setCurrentIndex(currentIndex + 1);
      }, 100); // Adjust the typing speed as needed

      return () => clearTimeout(timeout);
    } else {
      setShowCursor(true);
    }
  }, [currentIndex, textToType]);

  return (
    <span className="typing-animation">
      {typedText}
      
    </span>
  );
};



const SuggestionsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Suggestions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading size={'sm'} color={'blackAlpha.800'}>
            Eye Contact
          </Heading>
          <TypingAnimation>When engaging in a conversation, make an effort to maintain steady eye contact with the person you are speaking to. This shows that you are actively engaged and interested in the conversation. Avoid looking around too much or letting your gaze wander.</TypingAnimation>
          <br />
          <br/>
          <Heading size={'sm'} color={'blackAlpha.800'}>
            Clarity
          </Heading>
          <TypingAnimation> Incorporate well-timed pauses into your speech. Pauses give your audience time to process what you're saying and emphasize key points. They also provide you with a moment to gather your thoughts, enhancing overall clarity.</TypingAnimation>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default App;
