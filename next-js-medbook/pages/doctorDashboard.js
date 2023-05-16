import Head from "next/head";
import { useMoralis } from "react-moralis";
import { ConnectButton, Loading } from "web3uikit";
import Header from "../components/header";
// import { useQuery } from "@apollo/client";
import networkMapping from "../constants/networkMapping.json";
// import { GET_ADDED_DOCTORS } from "../constants/subgraphQueries";
// import DoctorProfile from "../components/DoctorProfile";
// import NotRegistered from "../components/NotRegistered";
import ConnectModal from "@/components/connectModal";

export default function DoctorDashboard() {
  const { isWeb3Enabled, chainId: chainHexId, account } = useMoralis();

  const chainId = chainHexId ? parseInt(chainHexId).toString() : "31337";
  // console.log(chainId)
  const patientMedicalRecordSystemAddress =
    networkMapping[chainId].PatientMedicalRecordSystem[0];
  // const {
  //   loading: fetchingAddedDoctors,
  //   error,
  //   data: addedDoctors,
  // } = useQuery(GET_ADDED_DOCTORS);

  let doctorProfileFound = false;
  let doctorAddresses;
  if (!fetchingAddedDoctors && addedDoctors) {
    doctorAddresses = addedDoctors.addedDoctors.map(
      (doctor) => doctor.doctorAddress
    );
    if (doctorAddresses.includes(account)) {
      doctorProfileFound = true;
    }
  }

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
          {fetchingAddedDoctors || !addedDoctors ? (
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
            addedDoctors.addedDoctors.map((doctor) => {
              doctorAddresses.push(doctor.doctorAddress);
              if (doctor.doctorAddress === account) {
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
            <NotRegistered name="Doctor" />
          )}
        </>
      )}
    </>
  );
}

/* 1. registered doctors can view their details. 
                        
2. Registered doctors can add diagnostic tests and diagnosis details in a particular patient's record. For this Add a Button which opens a modal form.
*/
