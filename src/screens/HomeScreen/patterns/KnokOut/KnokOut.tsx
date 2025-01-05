import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";
import { useTheme } from "@src/theme/ThemeProvider";

export default function KnokOut(){

  const theme = useTheme();
  return(
    <Box 
      id="aboutus"
      styleSheet={{
        height: "auto",
        width: {xl:'1236px'},
        display: "flex",
        flexDirection: { xs:"column", md:"row"},
        justifyContent: {xs:"space-between", md:"space-around"},
        padding: "48px 0px"
      }}
      >
      <Box>
          <Image 
            src="/images/knokout.png" 
            alt="knokout"
            styleSheet={{
              width:{ xs:"228px", md:"260px", lg:"350px", xl:"410px" },
            }}
          />
      </Box>

      <Box styleSheet={{
        height: { xs:"540px", sm:"492px", md:"410px", lg:"387px" },
        width: { md:"420px", lg:"536px", xl: "641px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>

        <Box>
          <Box styleSheet={{ 
            display: "flex", 
            flexDirection: "row"}}>
            <Text variant="titlePage">
              A KnokOut
            </Text>
            <Text variant="titlePage" styleSheet={{ 
              color: theme.colors.knokout.magenta }}>
              !
            </Text>
          </Box>
          <Text styleSheet={{
            marginTop: { xs:"20px", md:"32px" },
          }}>
            Surgimos para mostrar como é possível 
            crescer com um investimento compatível 
            com o atual momento da sua empresa, 
            é uma grande realização estar fazendo 
            parte dessa história. 
          </Text>

        </Box>

        <Box styleSheet={{
          height: { xs:"300px", sm:"260px", md:"202px" },
          display: "flex",
          flexDirection: { xs:"column", md:"row"},
          justifyContent: {xs:"space-around", md:"space-between"},
        }}>
            <Box styleSheet={{
              width: { md:"200px", lg:"250px", xl: "300px" }
            }}>
            <Box styleSheet={{ 
              display: "flex", 
              flexDirection: "row"}}>
              <Text variant="heading">
                Criativa
              </Text>
              <Text variant="heading" styleSheet={{ 
                color: theme.colors.knokout.magenta }}>
                .
              </Text>
            </Box>
            <Text styleSheet={{ 
              marginTop: "16px"
             }}>
              Com base no diálogo e foco na essência 
              do negócio elaboramos soluções que vão 
              além da operação, com muita entrega 
              de valor. 
            </Text>
            </Box>

            <Box styleSheet={{
              width: { md:"200px", lg:"250px", xl: "316px" }
            }}>
            <Box styleSheet={{ 
            display: "flex", 
            flexDirection: "row"}}>
            <Text variant="heading">
              Comprometida
            </Text>
            <Text 
              variant="heading" 
              styleSheet={{ 
              color: theme.colors.knokout.magenta 
              }}>
              .
            </Text>
          </Box>
          <Text styleSheet={{ 
              marginTop: "16px"
             }}>
            O seu resultado é a nossa prioridade. 
            Acompanhamento, suporte e solução de 
            problemas formam o pós venda. 
          </Text>
            </Box>
        </Box>

      </Box>

    </Box>
  )
}
