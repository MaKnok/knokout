import Box from "@src/components/Box/Box"
import HistoryResultsIcon from "@src/components/HistoryResultsIcon/HistoryResultsIcon"
import Text from "@src/components/Text/Text"

export default function HistoryResult(){

  const historyResultsItems = [
    { icon: 'retail',
      content: 'Experiência no segmento do varejo, gerando valor e inovação em contextos complexos e desafiadores.'},
    { icon: 'brand',
      content: 'Projetos de Marca que mudaram o rumo e abriram os horizontes de empresas em crescimento.'}
  ]

  return(
    <Box styleSheet={{
      padding: {xs:"48px 0", lg: "72px 0"},
      textAlign: "center",
      alignItems: "center"
    }}>

      <Text variant="titlePage">
        História e Resultados
      </Text>

      <Box styleSheet={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { xs:"340px", md:"auto" },
        width: { md:"580px", lg:"640px" },
        justifyContent: "space-between",
        marginTop: { xs: "30px", lg: "50px", xl: "60px" },
      }}>

        {historyResultsItems.map((item,i) => (
            <Box 
            key = {i}
            styleSheet={{
              width: { md: "260px", lg: "300px" },
              alignItems: "center",
            }}>
                <HistoryResultsIcon name={item.icon}></HistoryResultsIcon>
                <Text styleSheet={{
                      marginTop: { xs: "12px", xl: "16px"},
                }}>
                  {item.content}
                </Text>
            </Box>
        ))}
        
      </Box>
  
    </Box>
  )
}
