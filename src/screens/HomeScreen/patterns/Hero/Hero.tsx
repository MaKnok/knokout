import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { useState } from "react";
import MenuMobile from "../MenuMobile/MenuMobile";

export default function Hero(){

  const theme = useTheme();

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const [isContactForm, setIsContactForm] = useState(false)

  return(
    <>
    <MenuMobile 
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
            isContactForm={isContactForm}
            setIsContactForm={setIsContactForm}
          />
    <Box styleSheet={{ 
      height: {xs: "308px", md: "326px", xl: "360px" },
      width: {xl:'1236px'},
      padding: {xs:'48px 0', xl:'48px 0'},
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
    }}>
      <Text 
        variant="titleHero" 
        tag="h1" 
        styleSheet={{ 
          background: theme.colors.gradients.linear01,
          WebkitBackgroundClip: "text",
          color: "transparent", 
          }}>
        Acesso ao <br/> próximo nível
      </Text>
      <Button
        onClick={
          () => {
              setMenuIsVisible(true);
              setIsContactForm(true);
          }
        }
      >
        Solicitar orçamento
    </Button>
    </Box>
    </>
  )
}
