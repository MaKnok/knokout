import Box from "@src/components/Box/Box";
import Image from "@src/components/Image/Image";
import TopBar from "../TopBar/TopBar";
import Hero from "../Hero/Hero";
import Presentation from "../Presentation/Presentation";

export default function Background(){
  return(
    <Box hasBgImage>
      <TopBar />
      <Box styleSheet={{
        display:"flex",
        flexDirection: "column",
        alignItems: {xl: "center"},
        padding: {xs:'0 36px', xl:'0 102px'},
        backgroundColor: 'rgba(0, 0, 100, 0.3)'
      }}>
         <Hero />
         <Presentation/>
      </Box>
    </Box>
  )
}
