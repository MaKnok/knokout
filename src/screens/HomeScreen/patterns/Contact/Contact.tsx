import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";

export default function Contact(){
  return(
    <Box>
      <Text>
        Contact
      </Text>
      <Image 
        src="/images/contact.png" 
        alt="contact"
        styleSheet={{
          width:"677px",
          height:"323px"
        }}
      />
    </Box>
  )
}
