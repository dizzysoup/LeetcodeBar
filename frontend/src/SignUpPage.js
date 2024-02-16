import React from "react";
import { Box ,Stack , Text } from "@chakra-ui/react";
import { Formik , Field ,Form } from "formik";
import { FormControl , FormLabel ,Input , Button, FormErrorMessage,useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";


const FormLabelStyle = css `
    font-size: 18px;
    color: #333;
    margin: 5px;
`

function SignUpPage(){
    const toast = useToast()
    
    return (
        <Box  backgroundColor={"yellow.300"}  align={"center"} width = "100vw" h="100vh"  pt = "5%">
            <Stack width="100%" h="100%" align="center" spacing={4}>
                <Text fontSize={50}> SIGNUP  </Text> 
                <Formik
                initialValues={{ username: '' ,email: '', password : '' , SID : '' , confirmPassword : '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if(!values.password)
                        errors.password = "Required" ; 
                    else if (values.password.length < 6) 
                        errors.password = 'Password must be at least 6 characters';
                        
                    if (values.password !== values.confirmPassword) 
                        errors.confirmPassword = 'Passwords do not match';
                        
                    if(!values.username)
                        errors.username = "Required" ; 
                    if(!values.SID)
                        errors.SID = "Required" ; 
                    else if (/[\u4E00-\u9FA5]/.test(values.SID))
                        errors.SID = 'Cannot contain Chinese characters';;
                    
                    return errors;
                }}
                onSubmit={(values, actions) => {
                setTimeout(() => {
                    const data = {
                        username : values.username,
                        email : values.email,
                        SID : values.SID,
                        password : values.password
                    }
                    console.log(JSON.stringify(data,null,2))
                    const url = "http://leetcodebar.duckdns.org:8000/api/user/"
                    fetch(url , {method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(data,null,2),})
                    .then(data => data.json())
                    .then(response => {
                        console.log(response)
                        toast({
                            title: 'Account created.',
                            description: "創建帳號成功",
                            position: 'bottom-right',
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        })
                        
                    })
                    .catch(error=>{console.log(error)})
                    actions.setSubmitting(false)
                }, 1000)
                }}
            >
                {(props) => (
                <Form >
                    <Box backgroundColor={"white"} align={"center"} width={"500px"} p = "5%" borderRadius={"8px"}>
                        <Field name='username' >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.username && form.touched.username} >
                                <FormLabel css={FormLabelStyle}>姓名</FormLabel>
                                <Input {...field} placeholder='name'  type="text"/>
                                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        <Field name='SID' >
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.SUD && form.touched.SID} >
                                <FormLabel css={FormLabelStyle}>學號</FormLabel>
                                <Input {...field} placeholder='ID'  type="text"/>
                                <FormErrorMessage>{form.errors.SUD}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>

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

                        <Field name='confirmPassword' >
                                {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword} >
                                            <FormLabel css={FormLabelStyle}>確認密碼</FormLabel>
                                            <Input {...field} placeholder='confirm password' type="password" />
                                            <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                                        </FormControl>
                                )}
                        </Field>

                        <Button mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            創建帳號
                        </Button>
                    </Box>
                </Form>
                )}
            </Formik>
            
            </Stack>
           
        </Box>
    );
}


export default SignUpPage