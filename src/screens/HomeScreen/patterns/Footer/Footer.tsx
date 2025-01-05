import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";
import Logo from "@src/components/Logo/Logo";
import Text from "@src/components/Text/Text";

export default function Footer(){
  return(
    <Box
      styleSheet={{
        color: "#FFF"
      }}
    >
      <Logo name="logo" src="@src/components/Logo/Logo" alt="logo"/>
      <Icon name="facebook"/>
      <Icon name="linkedin"/>
      <Icon name="instagram"/>
      <Link href="#aboutus" colorvarianthover="magenta" colorvariantfocus="magenta">
          Sobre nós
      </Link>
      <Link href="#portfolio" colorvarianthover="magenta" colorvariantfocus="magenta">
          Portfolio
      </Link>
      <Link href="#privacypolicy" colorvarianthover="magenta" colorvariantfocus="magenta">
          Política de Privacidade
      </Link>
      <Link href="#contact" colorvarianthover="magenta" colorvariantfocus="magenta">
          Contato
      </Link>
      <Text>
        Footer
      </Text>
    </Box>
  )
}
