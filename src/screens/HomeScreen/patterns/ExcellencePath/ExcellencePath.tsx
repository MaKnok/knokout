import Box from "@src/components/Box/Box";
import ExcellencePathIcon from "@src/components/ExcellencePathIcon/ExcellencePathIcon";
import Text from "@src/components/Text/Text";


export default function ExcellencePath(){
  return(
    <Box>
      <Text>
        Excellence Path
        <ExcellencePathIcon name="empathy"></ExcellencePathIcon>
        <ExcellencePathIcon name="problem"></ExcellencePathIcon>
        <ExcellencePathIcon name="ideas"></ExcellencePathIcon>
        <ExcellencePathIcon name="prototype"></ExcellencePathIcon>
        <ExcellencePathIcon name="validation"></ExcellencePathIcon>
      </Text>
    </Box>
  )
}
