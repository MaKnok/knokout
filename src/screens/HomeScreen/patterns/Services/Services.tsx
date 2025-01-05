import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import ServicesIcon from "@src/components/ServicesIcon/ServicesIcon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Services(){

  const theme = useTheme();

  const serviceContent = [
    {
      iconName: "systems",
      title: "Sistemas",
      content: "Oferecemos a solução que vai trazer novas possibilidades para o seu negócio. Levamos técnica, inteligência e análise para a empresa que precisa crescer de forma sustentável."
    },
    {
      iconName: "websites",
      title: "Websites",
      content: "Quer ter a sua marca na web, mostrando o seu diferencial, potencializando a sua presença online de forma única? As soluções prontas não te atendem? Conte conosco!"
    }
  ]

  return(
    <Box id="services"
        styleSheet={{
          display: "flex",
          flexDirection: { xs:"column", md:"row" },
          height: { xs:"1100px", md:"550px" },
          width: { xl:'1100px' },
          justifyContent: { xs:"space-between", md:"space-around"},
          padding: { xs:"48px 0" ,lg:"72px 0"}
        }}
    >

      <Box styleSheet={{
        width: { sm:"250px", md:"230px", lg:"350px", xl:"410px" },
      }}>
          <Text variant="titlePage">Serviços</Text>
          <Text styleSheet={{
            marginTop: "20px"
          }}>
            Oferecemos a solução que vai trazer 
            novas possibilidades para o seu negócio. 
            Levamos técnica, inteligência 
            e análise para a empresa que precisa 
            crescer de forma sustentável.
          </Text>
          <Button variant="outlined" 
            styleSheet={{
              marginTop: "30px"
            }}>
            Quero saber mais!
          </Button>
      </Box>

      <Box styleSheet={{
        display: "flex",
        flexDirection: { xs:"column", md:"row" },
        justifyContent: "space-between",
        width: { md:"430px", lg:"530px", xl:"640px" },
        height: { xs: "660px" }
      }}>

        {serviceContent.map((item, index)=> (
          <Box 
            key={index}
            styleSheet={{
            height: { xs: "316px", md:"450px", lg: "366px" }, 
            width: { md:"200px", lg: "250px", xl: "302px" },
            background: theme.colors.gradients['linear05'],
            borderRadius: '12px',
            padding: { xs: "16px 24px", md:"24px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}>
              <ServicesIcon name={item.iconName}/>
              <Text variant="subheading">{item.title}</Text>
              <Text>{item.content}</Text>
          </Box>
        ))}

      </Box>
      
    </Box>
  )
}
