import Box from "@src/components/Box/Box";
import PresentationIcon from "@src/components/PresentationIcon/PresentationIcon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Presentation(){

  const theme = useTheme();

  const items = [
    {
      icon: "customSystem",
      title: "Sistemas sob medida",
      description: "Pensamos em como que você automatiza as suas tarefas do dia a dia, exatamente da forma que seu negócio funciona!",
    },
    {
      icon: "experience",
      title: "Experiência",
      description: "Além de funcional, um sistema precisa ser simples de usar, reduzindo a curva de aprendizado dos envolvidos na operação, entregando tempo.",
    },
    {
      icon: "techInnovation",
      title: "Tecnologia e Inovação",
      description: "Sempre entregamos tecnologia de ponta. Nossa prioridade é o entendimento do negócio para oferecer uma solução personalizada.",
    },
  ];

  return(
    <Box styleSheet={{ 
      height: {xs:"750px", sm:"716px", md:"310px", xl:"316px"},
      width: {xl:'1236px'},
      marginBottom: {xs:'48px', xl:'56px'},
      display:"flex",
      flexDirection:{xs: "column", md: "row"},
      justifyContent:"space-between",
    }}>

      {items.map((item, index) => (

          <Box
            key={index} 
            styleSheet={{ 
            width: {xs: "280px", sm: "358px", md:"210px",lg:"285px", xl:"380px"},
            display:"flex",
            flexDirection:"column"
          }}>
              <Box styleSheet={{
                display:"flex",
                flexDirection:"column",
              }}>
              <PresentationIcon name={item.icon}/>
              <Text variant="subheading" 
                  styleSheet={{ 
                  color: theme.colors.knokout.mintGreen, 
                  marginTop: {xs:"12px", xl:"16px"}}}
              >{item.title}</Text>
              </Box>
              <Text styleSheet={{ marginTop: "18px"}}>
              {item.description}
              </Text>
          </Box>
      ))}
  
    </Box>
  )
}
