import Head from "next/head"
import { useMoralis } from "react-moralis"
import { ConnectButton, Loading } from "web3uikit"
import Header from "../components/header"
import networkMapping from "../constants/networkMapping.json"
import ConnectModal from "@/components/connectModal"
import { useEffect, useState } from "react"
import DoctorProfile from "@/components/doctorProfile"

// const doctors = [
//   {
//     "address":  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
//     "name":  "Dr. Muskan Arora",
//     "registrationId":  "yashika2023",
//     "dateOfRegistration":  "1684217805",
//     "specialization":  "Heart Specialist",
//     "hospitalAddress":  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
//     "patients":[
//       {
//         patientAddress: "dfhejrakoweWER",
//         patientname: "kilua",
//         visited: "24432423",
//       }
//     ]
//   },
//   {
//     "address":  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
//     "name":  "Dr. Deeptika",
//     "registrationId":  "deepverma2023",
//     "dateOfRegistration":  "1684217805",
//     "specialization":  "Eye Specialist",
//     "hospitalAddress":  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
//     "patients":[
//       {
//         "patientAddress": "dfhejrakoweWER",
//         "patientName": "kilua",
//         "visited": "24432423",
//       }
//     ]
//   }
// ]
export default function DoctorDashboard() {
  const { isWeb3Enabled, chainId: chainHexId, account } = useMoralis()
  const [doctorProfileFound, setDoctorProfileFound] = useState(false)
  const [data, setData] = useState([])
  const [doctors, setDoctors] = useState([])

  const chainId = chainHexId ? parseInt(chainHexId).toString() : "31337"
  // console.log(chainId)
  const patientMedicalRecordSystemAddress =
    networkMapping[chainId].PatientMedicalRecordSystem[0]

  useEffect(() => {
    if (data.length === 0) {
      const storageData = localStorage.getItem("data")
      if (storageData) {
        const parsed = JSON.parse(storageData)
        setData(parsed)
        const allDoctors = parsed.reduce((accumulator, hospital) => {
          return accumulator.concat(hospital.doctors);
        }, []);
        setDoctors(allDoctors);
      }
    }
    if (isWeb3Enabled) {
      console.log(doctors)
      const isValueFound = doctors.some(
        (doctor) => doctor.address.toLowerCase() == account.toLowerCase()
      )
      setDoctorProfileFound(isValueFound)
    }
  }, [isWeb3Enabled, data])

  return (
    <>
      <Head>
        <title>Doctor Dashboard</title>
        <meta name="description" content="MedBook" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {!isWeb3Enabled ? (
        <ConnectModal />
      ) : (
        <>
          <Header heading="Doctor Dashboard" />
          {!doctors ? (
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
          ) : doctorProfileFound ? (
            doctors.map((doctor) => {
              if (doctor.address.toLowerCase() === account.toLowerCase()) {
                const {
                  name,
                  address,
                  dateOfRegistration,
                  specialization,
                  hospitalAddress,
                  registrationId,
                  patients,
                } = doctor
                return (
                  <div key={address}>
                    <DoctorProfile
                      key={address}
                      name={name}
                      address={address}
                      dateOfRegistration={dateOfRegistration}
                      specialization={specialization}
                      hospitalAddress={hospitalAddress}
                      registrationId={registrationId}
                      patients={patients}
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

/* 1. registered doctors can view their details. 
                        
2. Registered doctors can add diagnostic tests and diagnosis details in a particular patient's record. For this Add a Button which opens a modal form.
*/
