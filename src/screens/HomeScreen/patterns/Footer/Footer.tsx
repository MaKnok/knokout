import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";
import Logo from "@src/components/Logo/Logo";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer(){

  const theme = useTheme();

  return(
    <Box
      styleSheet={{
        color: "#FFF",
        padding:{ xs: "48px 36px", md:"0 36px 0 0", xl:"0 200px 0 36px" },
      }}
    >
      <Box>
        <Logo name="logo" src="@src/components/Logo/Logo" alt="logo"/>
      </Box>

      <Box 
        styleSheet={{ 
            marginTop: {xs:"32px", md:"20px", lg:"40px"},
            display: "flex",
            flexDirection: {xs:"column", md:"row"},
            justifyContent: "space-between",
            width: {md:"390px", lg:"418px", xl:"456px"},
        }}>
          <Box 
              styleSheet={{ 
                height:"183px"
                }}>
            <Text variant="subheadingSmall">
              Links
            </Text>
            <Box 
                styleSheet={{ 
                  height:"138px",
                  marginTop:"20px",
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"space-between"
                }}>
              <Link href="#aboutus" variant="bodyLink" colorvarianthover="magenta" colorvariantfocus="magenta">
                Sobre nós
              </Link>
              <Link href="#portfolio" variant="bodyLink" colorvarianthover="magenta" colorvariantfocus="magenta">
                Portfolio
              </Link>
              <Link href="#privacypolicy" variant="bodyLink" colorvarianthover="magenta" colorvariantfocus="magenta">
                Política de Privacidade
              </Link>
              <Link href="#contact" variant="bodyLink" colorvarianthover="magenta" colorvariantfocus="magenta">
                Contato
              </Link>

            </Box>
          </Box>

          <Box 
            styleSheet={{ 
              marginTop:{xs:"20px", md:"0px", lg:"0px"},
              height: "205px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between"
            }}
            >
            <Text variant="subheadingSmall"> Diga um Olá =) </Text>
            <Text>51.984.170/0001-99</Text>
            <Text>contato@knokout.com.br</Text>

            <Box styleSheet={{ 
              width: "120px",
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between"
            }}> 
              <Icon name="facebook"/>
              <Icon name="linkedin"/>
              <Icon name="instagram"/>
            </Box>

            <Text>© 2024 KnokOut!®</Text>

          </Box>
      </Box>
      
    </Box>
  )
}
