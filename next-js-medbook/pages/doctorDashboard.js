import Head from "next/head";
import { useMoralis } from "react-moralis";
import { ConnectButton, Loading } from "web3uikit";
import Header from "../components/header";
import networkMapping from "../constants/networkMapping.json";
import ConnectModal from "@/components/connectModal";
import { useEffect, useState } from "react";
import DoctorProfile from "@/components/doctorProfile";

const addedDoctors = [
  {
    "doctorAddress":  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    "name":  "Dr. Muskan Arora",
    "doctorRegistrationId":  "yashika2023",
    "dateOfRegistration":  "1684217805",
    "specialization":  "Heart Specialist",
    "hospitalAddress":  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  },
  {
    "doctorAddress":  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
    "name":  "Dr. Deeptika",
    "doctorRegistrationId":  "deepverma2023",
    "dateOfRegistration":  "1684217805",
    "specialization":  "Eye Specialist",
    "hospitalAddress":  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  }
]
export default function DoctorDashboard() {
  const { isWeb3Enabled, chainId: chainHexId, account } = useMoralis();
  const [doctorProfileFound, setDoctorProfileFound] = useState(false);
  const [doctorAddresses, setDoctorAddresses] = useState([]);

  const chainId = chainHexId ? parseInt(chainHexId).toString() : "31337";
  // console.log(chainId)
  const patientMedicalRecordSystemAddress =
    networkMapping[chainId].PatientMedicalRecordSystem[0];

    useEffect(() => {
      if(isWeb3Enabled){
        const isValueFound = addedDoctors.some(doctor => doctor.doctorAddress.toLowerCase() == account.toLowerCase());
        setDoctorProfileFound(isValueFound);
      }
    }, [isWeb3Enabled])

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
          {!addedDoctors ? (
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
            addedDoctors.map((doctor) => {
              if (doctor.doctorAddress.toLowerCase() === account.toLowerCase()) {
                const {
                  name,
                  doctorAddress,
                  dateOfRegistration,
                  specialization,
                  hospitalAddress,
                  doctorRegistrationId,
                } = doctor;
                return (
                  <div key={doctorAddress}>
                    <DoctorProfile
                      key={doctorAddress}
                      name={name}
                      doctorAddress={doctorAddress}
                      dateOfRegistration={dateOfRegistration}
                      specialization={specialization}
                      hospitalAddress={hospitalAddress}
                      doctorRegistrationId={doctorRegistrationId}
                    />
                  </div>
                );
              }
            })
          ) : (
            <h1>You are not registered</h1>
          )}
        </>
      )}
    </>
  );
}

/* 1. registered doctors can view their details. 
                        
2. Registered doctors can add diagnostic tests and diagnosis details in a particular patient's record. For this Add a Button which opens a modal form.
*/
