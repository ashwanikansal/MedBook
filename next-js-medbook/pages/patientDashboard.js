// hospital name, address, phone no, govt. licence no. ,unique id
import Head from "next/head"
import { useMoralis } from "react-moralis"
import { Modal, Loading, Input } from "web3uikit"
import Header from "../components/header"
import networkMapping from "../constants/networkMapping.json"
import ConnectModal from "@/components/connectModal"
import { useEffect, useState } from "react"
import PatientProfile from "@/components/patientProfile"

const patients = [
  {
    name: "patient name",
    patientAddress: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    dob: "2345444444443232",
    bloodGroup: "ashw@gamil.com",
    phone: "ajkdfadgkadfak",
    medicals: [
      {
        id: 1,
        doctorAddress: "0x3343423234b2423b4234b234b234b",
        category: "Eyes",
      },
    ],
  },
  // Add more doctor details as needed
]

const patientDashboard = () => {
  const { isWeb3Enabled, chainId: chainHexId, account } = useMoralis()
  const [patientProfileFound, setpatientProfileFound] = useState(false)

  const [patientAddressToAddTo, setPatientAddressToAddTo] = useState("")
  const [patientName, setPatientName] = useState("")
  const [patientDob, setPatientDob] = useState("")
  const [patientPhoneNo, setPatientPhoneNo] = useState("")
  const [patientBloodGroup, setPatientBloodGroup] = useState("")

  const chainId = chainHexId ? parseInt(chainHexId).toString() : "31337"
  // console.log(chainId)
  const patientMedicalRecordSystemAddress =
    networkMapping[chainId].PatientMedicalRecordSystem[0]

  useEffect(() => {
    if (isWeb3Enabled) {
      const isValueFound = patients.some(
        (patient) =>
          patient.patientAddress.toLowerCase() == account.toLowerCase()
      )
      setpatientProfileFound(isValueFound)
    }
  }, [isWeb3Enabled])
  return (
    <>
      <Head>
        <title>Patient Dashboard</title>
        <meta name="description" content="MedBook" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {!isWeb3Enabled ? (
        <ConnectModal />
      ) : (
        <>
          <Header heading="Patient Dashboard" />
          {!patients ? (
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
          ) : patientProfileFound ? (
            patients.map((patient) => {
              if (
                patient.patientAddress.toLowerCase() === account.toLowerCase()
              ) {
                const {
                  name,
                  patientAddress,
                  dob,
                  phone,
                  bloodGroup,
                  medicals,
                } = patient
                return (
                  <div key={patientAddress}>
                    <PatientProfile
                      key={patientAddress}
                      name={name}
                      patientAddress={patientAddress}
                      dob={dob}
                      phone={phone}
                      bloodGroup={bloodGroup}
                      medicals={medicals}
                    />
                  </div>
                )
              }
            })
          ) : (
            <Modal width="63vw border-2 p-4">
              <h2> You are not registered! Kindly Register. </h2>
              <div className="mb-5">
                <Input
                  label="Enter Patient's account address"
                  name="Patient Account Address"
                  type="text"
                  onChange={(event) => {
                    setPatientAddressToAddTo(event.target.value)
                  }}
                  width="full"
                  validation={{
                    required: true,
                  }}
                />
              </div>
              <div className="mb-5">
                <Input
                  label="Enter Patient's name"
                  name="Patient Name"
                  type="text"
                  onChange={(event) => {
                    setPatientName(event.target.value)
                  }}
                  width="full"
                  validation={{
                    required: true,
                  }}
                />
              </div>
              <div className="mb-5">
                <Input
                  label="Enter date of birth"
                  name="Patient date of birth"
                  type="text"
                  onChange={(event) => {
                    setPatientDob(event.target.value)
                  }}
                  width="full"
                  validation={{
                    required: true,
                  }}
                />
              </div>
              <div className="mb-5">
                <Input
                  label="Enter phone number"
                  name="Patient Phone number"
                  type="text"
                  onChange={(event) => {
                    setPatientPhoneNo(event.target.value)
                  }}
                  width="full"
                  validation={{
                    required: true,
                  }}
                />
              </div>
              <div className="mb-5">
                <Input
                  label="Enter blood group"
                  name="Patient blood group"
                  type="text"
                  onChange={(event) => {
                    setPatientBloodGroup(event.target.value)
                  }}
                  width="full"
                  validation={{
                    required: true,
                  }}
                />
              </div>
            </Modal>
          )}
        </>
      )}
    </>
  )
}

export default patientDashboard
