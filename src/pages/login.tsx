import { Box, Button, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession, signIn } from "next-auth/react"
import Link from "next/link";
import styles from "../styles/Login.module.css";

const Login: NextPage = () => {
    const {data: session} = useSession()
    const test = () => {
    }
  return (
    <>
        {session ? (
            <Heading>You are signed in</Heading>
        ) : (

            <Button  onClick={()=>signIn()}>Login here</Button>
        )}      
    </>
  );
};

export default Login;
