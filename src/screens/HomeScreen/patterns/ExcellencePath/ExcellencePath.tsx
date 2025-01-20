import Box from "@src/components/Box/Box";
import ExcellencePathIcon from "@src/components/ExcellencePathIcon/ExcellencePathIcon";
import Text from "@src/components/Text/Text";


export default function ExcellencePath(){

  const excellencePathItems = [
    { icon: 'empathy',
      title: 'Empatia', 
      content: 'Nos colocamos no seu lugar, a prioridade é dominar o entendimento das reais necessidades do seu negócio!'},
    { icon: 'problem',
      title: 'O que vamos resolver', 
      content: 'Estudamos a sua empresa para entender de forma objetiva os problemas que vamos solucionar.'},
    { icon: 'ideas',
      title: 'Ideias!', 
      content: 'Todas as informações dos passos anteriores são a base da geração de ideias com potenciais soluções para os problemas levantados.'},
    { icon: 'prototype',
      title: 'Protótipo', 
      content: 'O que era apenas uma ideia passa a ter forma, se concretizar para se tornar realidade.' },
    { icon: 'validation',
      title: 'Validação', 
      content: 'Depois de desenvolver o que projetamos, acompanhamos a experiência do cliente ao longo do tempo, com espaço para ajustes e possíveis melhorias.' },
  ]

  function chunkArray(array, size){
    const chunks = [];
    for(let i = 0; i < array.length; i+=size){
      chunks.push(array.slice(i, i+size))
    }
    return chunks;
  }

  const chunkRow = chunkArray(excellencePathItems, 3);

  return(
    <Box styleSheet={{
      padding: {xs:"48px 0", lg: "72px 0"},
      textAlign: "center",
    }}>
      <Box styleSheet={{ 
        alignItems: "center"
      }}>
        <Text variant="titlePage">
          O caminho para agilidade e excelência
        </Text>
        <Text styleSheet={{
          marginTop: { xs:"30px", md:"50px" },
          width: { md:"400px" },
        }}>
          Como entregamos valor com agilidade 
          de forma assertiva e eficiente? 
          Praticamos a filosofia do Design Thinking!
        </Text>
      </Box>

      <Box>
        {
          chunkRow.map((chunk, i)=>(
            <Box 
                key={i}
                styleSheet={{
                display: "flex",
                flexDirection: { xs:"column", md:"row" },
                justifyContent: "center",
                marginTop: { md:"50px" },
                }}
            >
              { chunk.map((item, j) => (
                <Box
                  key={j}
                  styleSheet={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: { xs:"40px", md: "0px"},
                    marginLeft: j === 0 ? "0px" : { md:"46px" },
                    width: { md:"200px", xl: "300px" }
                  }}
                >
                  <ExcellencePathIcon name={item.icon}></ExcellencePathIcon>
                  <Text 
                    variant="heading"
                    styleSheet={{
                      marginTop:{xs:"12px", md: "20px"}
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    styleSheet={{
                      marginTop:{xs:"12px", md: "20px"}
                    }}
                  >{item.content}</Text>
                </Box>
              ))}
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}
