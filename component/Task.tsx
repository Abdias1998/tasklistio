import React from 'react'
import { Card, Flex, Text, Button } from '@chakra-ui/react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import { TaskProps } from '@/types'
export const Task = ({taskIndividual,handleCompletedTask,handleDeletedTask}:TaskProps)  => {
  return (
    <Card key={taskIndividual._id} p="2rem" mb="0.5rem" variant='outline' >
    <Flex alignItems="center">
        {taskIndividual.completed ? (
        <Text flexGrow="1" as='del'>{taskIndividual.task}</Text>
        ) : (
        <Text flexGrow="1">{taskIndividual.task}</Text>
        )}
        <Flex>
        {taskIndividual.completed ? (
            <Button
            ml="1rem"
            colorScheme='whatsapp'
            onClick={() => handleCompletedTask(taskIndividual._id)}
            isDisabled
            >
            <CheckIcon />
            </Button>
        ) : (
            <Button
            ml="1rem"
            colorScheme='whatsapp'
            onClick={() => handleCompletedTask(taskIndividual._id)}
            >
            <CheckIcon />
            </Button>
        )}
        <Button
            ml="1rem"
            colorScheme='red'
            onClick={() => handleDeletedTask(taskIndividual._id)}
        >
            <DeleteIcon />
        </Button>
        </Flex>
    </Flex>
</Card>
  )
}
