import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateUserData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("E-mail é obrigatório").email("O formato do e-mail é inválido"),
    password: yup.string().required("A senha é obrigatória").min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

const CreateUser = () => {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserSchema),
    });
    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert(JSON.stringify({ values }, null, 2));
    }
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome completo" error={errors.name} {...register("name")}/>
                            <Input name="email" label="E-mail" type="email" error={errors.email} {...register("email")}/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
                            <Input name="password" label="Senha" type="password" error={errors.password} {...register("password")}/>
                            <Input name="password_confirmation" label="Confirmação da senha" type="password" error={errors.password_confirmation} {...register("password_confirmation")}/>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default CreateUser;