import Box from "@src/components/Box/Box";
import TopBar from "../HomeScreen/patterns/TopBar/TopBar";
import MenuMobile from "../HomeScreen/patterns/MenuMobile/MenuMobile";
import ContactForm from "../HomeScreen/patterns/ContactForm/ContactForm";
import Contact from "../HomeScreen/patterns/Contact/Contact";
import Footer from "../HomeScreen/patterns/Footer/Footer";
import HeroProduct from "./patterns/HeroProduct/HeroProduct";
import PresentationProduct from "./patterns/PresentationProduct/PresentationProduct";
import ProductDetail from "./patterns/ProductDetail/ProductDetail";
import ProductDiferential01 from "./patterns/ProductDiferential01/ProductDiferential01";
import ProductDiferential02 from "./patterns/ProductDiferential02/ProductDiferential02";
import Testimonials from "./patterns/Testimonials/Testimonials";

export default function ProductScreen(){
  return(
    <Box>
        <TopBar />
        <MenuMobile />
        <ContactForm />
        <HeroProduct />
        <PresentationProduct />
        <ProductDetail />
        <ProductDiferential01 />
        <ProductDiferential02 />
        <Testimonials />
        <Contact/>
        <Footer/>
    </Box>
  )
}
