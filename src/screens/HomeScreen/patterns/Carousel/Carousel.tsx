import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useTheme } from "@src/theme/ThemeProvider";
import { useEffect, useState } from "react";


export default function Carousel({ children: projects }){

  const theme = useTheme();

  const [curr, setCurr] = useState(0);

  const prev = () => {
    console.log("Prev clicked");
    setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1));
  };

  const next = () => {
  console.log("Next clicked");
  setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1));
};

  useEffect(() => {
    console.log("Current index:", curr);
  }, [curr]);

  return(

    <Box styleSheet={{
      overflow:"hidden",
      position: "relative"
    }}>
      <Box styleSheet={{
        display:"flex",
        flexDirection: "row",
        width: {xs: "375px", sm: "480px", md:"768px", lg:"992px", xl: "1200px"},
        transition: "transform 0.5s ease-out",
        transform: `translateX(-${ curr * 100 }%)`,
      }}>
        { projects }
      </Box>
      <Box styleSheet={{
        display:"flex",
        flexDirection: "row",
        width: "280px",
        justifyContent:"space-between",
        alignSelf: {xs: "center", md: "start"},
        marginTop: "30px",
        padding: {xs:"0 36px", xl:"0 102"}
      }}>
        <Button variant="outlined" colorVariant="magenta" onClick={prev}>
          <ChevronLeft size={32}/>
        </Button>
        <Button variant="outlined" colorVariant="magenta" onClick={next}>
          <ChevronRight size={32}/>
        </Button>
      </Box>
      <Box styleSheet={{
        marginTop: "30px",
      }}>
        <Box styleSheet={{
          display: "flex",
          flexDirection:"row",
          alignItems: "center",
          width: "280px",
          height: "6px",
          alignSelf: {xs: "center", md: "start" },
          justifyContent: "space-between",
          marginLeft: {md:"36px", xl:"102"}
        }}>
          {projects.map((_,i)=>(
            <Box styleSheet={{
              width: "40px",
              height: "100%",
              borderRadius: "8px",
              ...( curr === i 
                ? { backgroundColor: theme.colors.knokout.magenta }
                : { backgroundColor: theme.colors.knokout.mediumGray })
            }}
            key = {i}
            />
          ))}
        </Box>
      </Box>
    </Box>
  
  )
}

