import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";
import Button from "@src/components/Button/Button";

export default function Contact(){
  return(
    <Box 
      hasBgImage 
      variant="contactImage"
      styleSheet={{
        padding:{ xs: "48px 36px", xl: "70px 44px" },
        width:{ md:"300px", lg:"433px", xl:"600px" },
        borderRadius:{md: "0 30px 30px 0"}
      }}>
      <Text variant="titlePage">Tem algum projeto?</Text>
      <Button 
          variant="outlined" 
          colorVariant="lightGray"
          styleSheet={{
            marginTop:{xs:"60px", lg:"79px", xl:"55px"},
          }}
          >
        Sim, quero colocar em prática
      </Button>
    </Box>
  )
}
