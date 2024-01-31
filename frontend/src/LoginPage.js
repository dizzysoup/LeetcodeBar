import React from "react"
import { Text,Box,Stack  } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FormControl , FormLabel ,Input , Button, FormErrorMessage } from "@chakra-ui/react";
import { Divider , AbsoluteCenter  } from "@chakra-ui/react";
import { Formik , Field ,Form } from "formik";
import { Link } from "react-router-dom";

const FormLabelStyle = css `
    font-size: 18px;
    color: #333;
    margin: 5px;
`


function LoginPage() {
    return (
        <Box  backgroundColor={"yellow.300"}  align={"center"} width = "100vw" h="100vh"  pt = "5%">  
            <Stack width="100%" h="100%" align="center" spacing={4}>
            <Text fontSize={50}> LOGIN  </Text>  
            
            <Formik
                initialValues={{ email: '', password : '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if(!values.password){
                        errors.password = "Required" ; 
                    }
                    return errors;
                }}
                onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
                }}
            >
                {(props) => (
                <Form >
                    <Box backgroundColor={"white"} align={"center"} width={"500px"} p = "5%" borderRadius={"8px"}>
                        <Field name='email' >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.email && form.touched.email} >
                                <FormLabel css={FormLabelStyle}>信箱</FormLabel>
                                <Input {...field} placeholder='email'  type="email"/>
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        <Field name='password' >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.password && form.touched.password} >
                                <FormLabel css={FormLabelStyle}>密碼</FormLabel>
                                <Input {...field} placeholder='password'  type="password"/>
                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>

                        <Button mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            登入
                        </Button>
                        <Box position='relative' padding='5'>
                            <Divider/>
                            <AbsoluteCenter bg='white' px='1'>
                                <Link to="/SignUp" ><Text color="blue">創建帳號</Text></Link>
                            </AbsoluteCenter>
                        </Box>
                    </Box>
                </Form>
                )}
            </Formik>
            
        </Stack>
      </Box>
    )
  }

export default LoginPage