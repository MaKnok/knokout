import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";
import { useTheme } from "@src/theme/ThemeProvider";
import React from 'react';
import Carousel from "../Carousel/Carousel";
import Button from "@src/components/Button/Button";

interface FeedProps {
  children: React.ReactNode;
}

export default function Portfolio({ children }) {

  const theme = useTheme();

  return(
    <Box id="portfolio"
      styleSheet={{
        padding: { xs:"48px 0" ,lg:"72px 0"}
      }}
    >
      <Text variant="titlePage"
        styleSheet={{ 
        color: theme.colors.knokout.darkGray, 
        marginBottom: "20px",
        padding: {xs:'0 36px', xl:'0 0'},
      }}
      >
        Portfolio
      </Text>
      {children}
    </Box>
  )
}

Portfolio.Intro = () => {

  const theme = useTheme();

  return(
    <Box styleSheet={{
      marginBottom: { xs: "32px", md: "30px" },
      padding: {xs:'0 36px', xl:'0 0'},
    }}>
      <Text styleSheet={{
        color: theme.colors.knokout.darkGray,
      }}>
          Projetos que mostram o nosso propósito e orgulho de estar 
          fazendo parte da história dos nossos clientes e parceiros. 
      </Text>
    </Box>
  )
}

Portfolio.Projects = () => {

  const projects = [
    {
      imagePath: "/images/project01.png",
      projectTitle: "Organic Shop",
      description: "Organic Shop é um projeto de Sistema ERP voltado para o segmento do varejo. Organizar o estoque e agilizar os processos do dia a dia do seu negócio é otimizar o seu tempo e levar a sua empresa para o caminho do crescimento."
    },
    {
      imagePath: "/images/project02.png",
      projectTitle: "Project 2",
      description: "Descrição 2"
    },
    {
      imagePath: "/images/project03.png",
      projectTitle: "project 3",
      description: "Descrição 3"
    },
    {
      imagePath: "/images/project04.png",
      projectTitle: "Project 4",
      description: "Descrição 4"
    },
    {
      imagePath: "/images/project05.png",
      projectTitle: "Project 5",
      description: "Descrição 5"
    },
    {
      imagePath: "/images/project06.png",
      projectTitle: "Project 6",
      description: "Descrição 6"
    }
  ]

  const theme = useTheme();

  return(
    <Carousel>
      {projects.map((project, index)=>(
        <Box 
          key={index}
          styleSheet={{
          width: {xs: "375px", sm:"480px", md:"768px", lg:"992px", xl: "1200px"},
          display:"flex",
          flexDirection: {xs: "column", md: "row"},
          alignItems: {xs: "center", md: "start"},
          }}>

          <Box styleSheet={{
            order:{xs:1, md:0}, 
            textAlign: {xs: "center", md: "left"},
            width: {md:"350px", lg:"464px", xl: "600px"},
            marginTop: {xs: "16px", sm: "18px"},
            padding: {xs:"0 36px",}
          }}>
              <Box>
                <Text variant="subheading" 
                  styleSheet={{
                    color: theme.colors.knokout.darkGray,
                    width: "100%",
                    marginBottom: {xs: "18px", md: "16px"},
                  }}>
                  { project.projectTitle}
                </Text>
                <Text styleSheet={{
                  color: theme.colors.knokout.darkGray,
                  width: "100%",
                  marginBottom: {xs: "26px", lg: "50px"},
                  }}>
                  { project.description }
                </Text>
              </Box>
              <Box styleSheet={{
                    color: theme.colors.knokout.darkGray,
                    width: "100%",
                    marginBottom: {xs: "18px", md: "16px"},
                  }}>
                <Button variant="outlined" colorVariant="magenta" 
                styleSheet={{
                  alignSelf: {xs: "center", md: "start" },
                }}>
                  Saiba mais
                </Button>
              </Box>
          </Box>

          <Box styleSheet={{
            order:{xs:0, md:1}
            }}>
            <Image 
                src={ project.imagePath }
                alt={ project.projectTitle }
                styleSheet={{
                width: {xs:"300px", md:"378px", xl: "450px"},
                }}
            />
          </Box>

        </Box>
      ))}
      
    </Carousel>
  )
}

