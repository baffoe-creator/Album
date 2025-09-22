import { Container, Flex,  Box, Image, VStack} from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"
 
const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyCOntent={"center"} alignItems={"center"} px={4}>
<Container maxW={"container.md"} padding={0} >
<Flex justifyContent={"center"} alignItems={"center"}>
  <Box display={{base:"none", md:"block"}}>
<Image src="/img16.png" h={600} w={550} padding={5} alt='Nature' /> 
</Box>
<VStack spacing={4} align={"stretch"}>
  <AuthForm/> 
  <Box textAlign={"center"}>Get the App.</Box>
  <Flex gap = {5} justifyContent={"center"}>
  <Image src="/playstore.png" h={"10"} alt="Google logo" /> 
    
    <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" /> 
  </Flex>
  </VStack> 
 </Flex>
  </Container>
    </Flex>
  )
}

export default AuthPage
