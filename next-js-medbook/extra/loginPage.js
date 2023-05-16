import ConnectModal from "@/components/connectModal"
import Header from "@/components/header"
import LoginCard from "@/components/loginCard"
import Head from "next/head"
import { useMoralis } from "react-moralis"

const supportedChains = ["31337", "11155111"]

const loginPage = () => {
  const { isWeb3Enabled, chainId } = useMoralis();
  return (
    <>
    <Head>
        <title>Login</title>
        <meta name="description" content="MedBook" />
        <link rel="icon" href="/logo.svg" />
    </Head>
    {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <>
            <Header/>
            <LoginCard />
            </>
          ) : (
            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <ConnectModal/>
      )}
    </>
  )
}

export default loginPage