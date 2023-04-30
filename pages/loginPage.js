import LoginCard from "@/components/loginCard"
import Head from "next/head"

const loginPage = () => {
  return (
    <>
    <Head>
        <title>Login</title>
        <meta name="description" content="MedBook" />
        <link rel="icon" href="/logo.svg" />
      </Head>
    <LoginCard/>
    </>
  )
}

export default loginPage