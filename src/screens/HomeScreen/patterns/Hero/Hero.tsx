import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Hero(){

  const theme = useTheme();

  return(
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
     <Button>
        Solicitar orçamento
     </Button>
    </Box>
  )
}
