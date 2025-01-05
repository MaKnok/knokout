import Box from "@src/components/Box/Box"
import HistoryResultsIcon from "@src/components/HistoryResultsIcon/HistoryResultsIcon"
import Text from "@src/components/Text/Text"

export default function HistoryResult(){
  return(
    <Box>
      <Text>
        History Result
        <HistoryResultsIcon name='retail'></HistoryResultsIcon>
        <HistoryResultsIcon name='brand'></HistoryResultsIcon>
      </Text>
    </Box>
  )
}
