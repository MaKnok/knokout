import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import CloseIcon from "@src/components/CloseIcon/CloseIcon";
import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";
import Logo from "@src/components/Logo/Logo";
import { useTheme } from "@src/theme/ThemeProvider";
import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";

interface MenuMobileProps {
  menuIsVisible?: boolean;
  setMenuIsVisible?: (value: boolean) => void;
  isContactForm?: boolean;
  setIsContactForm?: (value: boolean) => void;
}
export default function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
  isContactForm,
  setIsContactForm,
}: MenuMobileProps) {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <Box
      styleSheet={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: "5",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "36px",
        backgroundColor: theme.colors.knokout.navy,

        transform: menuIsVisible ? "translateY(0px)" : "translateY(50px)",
        transition: ".5s",

        opacity: menuIsVisible ? "1" : "0",
        pointerEvents: menuIsVisible ? "auto" : "none",
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Logo name="logo" src="@src/components/Logo/Logo" alt="logo" />
        </Box>
        <Box
          styleSheet={{
            transform: menuIsVisible ? "rotate(0deg)" : "rotate(45deg)",
            transition: ".5s",
          }}
        >
          <CloseIcon name="close" onClick={() => setMenuIsVisible(false)} />
        </Box>
      </Box>

      <Box
        styleSheet={{
          transform: menuIsVisible ? "scale(1)" : "scale(0.7)",
          transition: ".7s",
        }}
      >
        <Box
          styleSheet={{
            display: isContactForm ? "none" : "flex",
          }}
        >
          <Box
            styleSheet={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginTop: "26px",
              height: "107px",
            }}
          >
            <Link
              href="#aboutus"
              variant="bodyStrong"
              colorvarianthover="magenta"
              colorvariantfocus="magenta"
              onClick={() => setMenuIsVisible(false)}
            >
              A KnokOut!
            </Link>

            <Link
              href="#services"
              variant="bodyStrong"
              colorvarianthover="magenta"
              colorvariantfocus="magenta"
              onClick={() => setMenuIsVisible(false)}
            >
              Serviços
            </Link>

            <Link
              href="#portfolio"
              variant="bodyStrong"
              colorvarianthover="magenta"
              colorvariantfocus="magenta"
              onClick={() => setMenuIsVisible(false)}
            >
              Portfolio
            </Link>
          </Box>

          <Box
            styleSheet={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "row",
              width: { xs: "106px" },
              justifyContent: "space-between",
              marginTop: "58px",
            }}
          >
            <Icon name="facebook" />
            <Icon name="linkedin" />
            <Icon name="instagram" />
          </Box>

          <Box
            styleSheet={{
              marginTop: "80px",
            }}
          >
            <Button onClick={() => setIsContactForm(true)}>
              Entrar em contato
            </Button>
          </Box>
        </Box>

        <Box
          styleSheet={{
            display: isContactForm ? "flex" : "none",
          }}
        >
          <Box>
            <ContactForm
              menuIsVisible={menuIsVisible}
              setMenuIsVisible={setMenuIsVisible}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
