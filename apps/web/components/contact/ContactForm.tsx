import { Controller, useForm } from "react-hook-form";

import {
  Box,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiContactsLine } from "react-icons/ri";

interface ContactFormInput {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  dateOfBirth: number;
}

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      dateOfBirth: 1,
    },
  });

  function onSubmit(values: any): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box mb="4" pos="relative" id="contact">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading
          as="h2"
          size="lg"
          top="0"
          p="4"
          mx="-4"
          pos="sticky"
          bgColor="gray.50"
          zIndex="sticky"
          boxShadow="sm"
          display="flex"
          alignItems="center"
        >
          <RiContactsLine />
          <Text as="span" ml="3">
            Contact
          </Text>
        </Heading>
        <Controller
          name="fullName"
          control={control}
          rules={{
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="fullName" mt="4">
                Nom Prénom
              </FormLabel>
              <Input
                id="fullName"
                placeholder="Votre Nom et Prénom"
                {...{ onChange, onBlur, value, ref }}
              />
              <FormErrorMessage>
                {fieldState.error && fieldState.error.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
            pattern: {
              value: /(06|07)[0-9]{8}/,
              message: "entrez un numéro de téléphone",
            },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="phoneNumber">Numéro téléphone</FormLabel>
              <Input
                id="phoneNumber"
                placeholder="Votre numéro de téléphone"
                {...{ onChange, onBlur, value, ref }}
              />
              <FormErrorMessage>
                {errors.phoneNumber && errors.phoneNumber.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          name="emailAddress"
          control={control}
          rules={{
            minLength: { value: 4, message: "Minimum length should be 4" },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="emailAddress">Adresse Email</FormLabel>
              <Input
                id="emailAddress"
                placeholder="Votre adresse Email"
                type="email"
                {...{ onChange, onBlur, value, ref }}
              />
              <FormErrorMessage>
                {fieldState.error && fieldState.error.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          name="dateOfBirth"
          control={control}
          rules={{
            minLength: { value: 4, message: "Minimum length should be 4" },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="dateOfBirth">Date de naissance</FormLabel>
              <Input
                id="dateOfBirth"
                placeholder="Votre date de naissance"
                type="date"
                {...{ onChange, onBlur, value, ref }}
              />
              <FormErrorMessage>
                {fieldState.error && fieldState.error.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />
        <Text mb="4">Photo</Text>
      </form>
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
}
