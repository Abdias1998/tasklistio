import React from 'react'
import { Flex,Heading,Text} from '@chakra-ui/react'
const Header = () => {
  return (
    <div>
<Flex p={"2rem"} direction={'column' } alignItems={'center'}>
<Heading className='tasklist-title' as="h1" size={"4xl"} noOfLines={1}>
TaskList.io

</Heading>
<Text mt={"1rem"} className='tasklist-slogan'>
TaskList est un outil openSource qui vous simplifie votre quotidien en toute éfficacité

</Text>
</Flex>
    </div>
  )
}

export default Header
