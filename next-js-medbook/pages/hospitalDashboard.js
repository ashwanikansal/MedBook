// hospital name, address, phone no, govt. licence no. ,unique id
import Head from "next/head"
import { useMoralis } from "react-moralis"
import { Loading } from "web3uikit"
import Header from "../components/header"
import networkMapping from "../constants/networkMapping.json"
import ConnectModal from "@/components/connectModal"
import { useEffect, useState } from "react"
import HospitalProfile from "@/components/hospitalProfile"

const hospitalDashboard = () => {
  const { isWeb3Enabled, chainId: chainHexId, account } = useMoralis()
  const [hospitalProfileFound, sethospitalProfileFound] = useState(false)
  const [hospitals, setHospitals] = useState([])

  const chainId = chainHexId ? parseInt(chainHexId).toString() : "31337"
  const patientMedicalRecordSystemAddress =
    networkMapping[chainId].PatientMedicalRecordSystem[0]

  useEffect(() => {
    if (isWeb3Enabled) {
      const isValueFound = hospitals.some(
        (hospital) =>
          hospital.address.toLowerCase() == account.toLowerCase()
      )
      sethospitalProfileFound(isValueFound)
    }
    if (hospitals.length === 0) {
      const storageData = localStorage.getItem("data")
      if (storageData) {
        setHospitals(JSON.parse(storageData))
      }
    }
  }, [isWeb3Enabled, hospitals])

  return (
    <>
      <Head>
        <title>Hospital Dashboard</title>
        <meta name="description" content="MedBook" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {!isWeb3Enabled ? (
        <ConnectModal />
      ) : (
        <>
          <Header heading="Hospital Dashboard" />
          {!hospitals ? (
            <div
              style={{
                backgroundColor: "#ECECFE",
                borderRadius: "6px",
                padding: "15px",
              }}
              className="ml-10 mt-5"
            >
              <Loading
                direction="right"
                fontSize={14}
                size={16}
                spinnerColor="rgba(91, 96, 222, 0.8)"
                spinnerType="wave"
                text="Loading Profile..."
              />
            </div>
          ) : hospitalProfileFound ? (
            hospitals.map((hospital) => {
              if (
                hospital.address.toLowerCase() === account.toLowerCase()
              ) {
                const {
                  name,
                  address,
                  registrationId,
                  email,
                  phone,
                  doctors,
                } = hospital
                return (
                  <div key={address}>
                    <HospitalProfile
                      key={address}
                      name={name}
                      address={address}
                      registrationId={registrationId}
                      email={email}
                      phone={phone}
                      doctors={doctors}
                    />
                  </div>
                )
              }
            })
          ) : (
            <h1>You are not registered</h1>
          )}
        </>
      )}
    </>
  )
}

export default hospitalDashboard
