import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import MenuMobile from "./patterns/MenuMobile/MenuMobile";
import TopBar from "./patterns/TopBar/TopBar";
import Hero from "./patterns/Hero/Hero";
import Presentation from "./patterns/Presentation/Presentation";
import KnokOut from "./patterns/KnokOut/KnokOut";
import Services from "./patterns/Services/Services";
import Portfolio from "./patterns/Portfolio/Portfolio";
import HistoryResult from "./patterns/HistoryResult/HistoryResult";
import ExcellencePath from "./patterns/ExcellencePath/ExcellencePath";
import Contact from "./patterns/Contact/Contact";
import Footer from "./patterns/Footer/Footer";
import ContactForm from "./patterns/ContactForm/ContactForm";
import { useTheme } from "@src/theme/ThemeProvider";

export default function HomeScreen() {
  const theme = useTheme();

  return(
      <Box
        tag="main"
        styleSheet={{
          backgroundColor: theme.colors.knokout.navy,
          flex: 1,
        }}
      >
        <Background />
        <Box styleSheet={{
          padding: {xs:'0 36px', xl:'0 102px'},
          alignItems: {xl: "center"},
        }}>
            <KnokOut></KnokOut>
            <Services></Services>
        </Box>
        <Box styleSheet={{
          alignItems: {xl: "center"},
          backgroundColor: theme.colors.knokout.lightGray,
        }}>
            <Portfolio>
              <Portfolio.Intro />
              <Portfolio.Projects />
            </Portfolio>
        </Box>
        <Box styleSheet={{
          padding: {xs:'0 36px', xl:'0 102px'},
          alignItems: {xl: "center"},
        }}>
            <HistoryResult></HistoryResult>
            <ExcellencePath></ExcellencePath>
        </Box>
        <Box>
            <Contact></Contact>
            <Footer></Footer>
        </Box>
      </Box>
  )
}
