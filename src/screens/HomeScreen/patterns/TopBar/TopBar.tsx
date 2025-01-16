import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Logo from "@src/components/Logo/Logo";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import MenuIcon from "@src/components/MenuIcon/MenuIcon";

export default function TopBar() {
  const theme = useTheme();

  function hexToRgba(hex, alpha) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return (
    <Box
      styleSheet={{
        backgroundColor: hexToRgba(theme.colors.knokout.navy, 0.3),
        height: "112px",
        padding: {xs:'28px', xl:'36px'},
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: { xs: "140px", sm:"200px", md:"300px", lg: "514px"},
        }}
      >
        <Box styleSheet={{
          hover:{
            cursor: 'pointer',
          }
        }}>
          <Link href="/">
            <Logo name="logo" src="@src/components/Logo/Logo" alt="logo" />
          </Link>
        </Box>

        <Box
          styleSheet={{
            display: { lg: "flex", xs: "none"},
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "298px",
          }}
        >
          <Link href="#aboutus" variant="bodyStrong" colorvarianthover="magenta" colorvariantfocus="magenta">
            A KnokOut!
          </Link>
          <Link href="#services" variant="bodyStrong" colorvarianthover="magenta" colorvariantfocus="magenta">
            Serviços
          </Link>
          <Link href="#portfolio" variant="bodyStrong" colorvarianthover="magenta" colorvariantfocus="magenta">
            Portfolio
          </Link>
        </Box>
      </Box>

      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: { xs:"flex-end", sm:"space-between" },
          width: { xs: "140px", sm: "160px", md:"180px", lg: "400px"} 
        }}
      >
        <Box
          styleSheet={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            width: { xs: "90px", md:"110px", lg: "122px"},
            justifyContent: "space-between",
          }}
        >
          <Icon name="facebook" />
          <Icon name="linkedin" />
          <Icon name="instagram"/>
        </Box>

        <Box
          styleSheet={{
            display: { xs: "none", lg: "flex" }
          }}
        >
          <Button variant="outlined" colorVariant="lightGray" textVariant="bodyStrong">
            Entrar em Contato
          </Button>
        </Box>

        <Box
          styleSheet={{
            display: { xs: "flex", lg: "none" },
            justifyContent: { xs: "flex-end" }
          }}
        >
          <MenuIcon name="menu"/>
        </Box>

        
      </Box>
    </Box>
  );
}

