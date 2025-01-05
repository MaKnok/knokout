import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";
import React from 'react';

interface FeedProps {
  children: React.ReactNode;
}

export default function Portfolio({ children }) {
  return(
    <Box id="portfolio">
      <Text>
        Portfolio
      </Text>
      {children}
    </Box>
  )
}

Portfolio.Intro = () => {
  return(
    <Box>
      <Text>
        Portfolio Intro
      </Text>
    </Box>
  )
}

Portfolio.Projects = () => {
  return(
    <Box>
      <Image 
        src="/images/project01.png" 
        alt="project01"
        styleSheet={{
          width:"450px",
          height:"520px"
        }}
      />
      <Text>
        Portfolio Projects
      </Text>
    </Box>
  )
}
