import Head from "next/head"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ConnectButton, useNotification, Modal, Input } from "web3uikit"
import Header from "../components/header"
import { useState, useEffect } from "react"
import PatientMedicalRecordSystemAbi from "../constants/PatientMedicalRecordSystem.json"
import networkMapping from "../constants/networkMapping.json"
import ConnectModal from "@/components/connectModal"
import Button from "@/components/button"
import dateInUnix from "../utils/dateInUnix"

const OwnerDashboard = () => {
  const dispatch = useNotification()
  const { runContractFunction } = useWeb3Contract()
  const { isWeb3Enabled, chainId: chainHexId, account } = useMoralis()
  const [isOwner, setIsOwner] = useState(false)
  const [showAddHospitalModal, setShowAddHospitalModal] = useState(false)
  const [showAddDoctorModal, setShowAddDoctorModal] = useState(false)
  const [cancelDisabled, setCancelDisabled] = useState(false)
  const [okDisabled, setOkDisabled] = useState(false)

  const [data, setData] = useState([])

  const doctorInitialState = {
    address: "",
    name: "",
    registrationId: "",
    specialization: "",
    hospitalAddress: "",
    patients: [],
  }

  const hospitalInitialState = {
    address: "",
    name: "",
    registrationId: "",
    email: "",
    phone: "",
    doctors: [],
  }

  const [hospital, setHospital] = useState(hospitalInitialState)
  const [doctor, setDoctor] = useState(doctorInitialState)

  const chainId = chainHexId ? parseInt(chainHexId).toString() : "31337"
  const medicalRecordSystemAddress =
    networkMapping[chainId].PatientMedicalRecordSystem[0]

  const { runContractFunction: getOwner } = useWeb3Contract({
    abi: PatientMedicalRecordSystemAbi,
    contractAddress: medicalRecordSystemAddress,
    functionName: "getOwner",
    params: {},
  })

  const handleVerificationClick = async () => {
    const contractOwner = await getOwner()
    if (
      contractOwner.toString().toLowerCase() ===
      account.toString().toLowerCase()
    ) {
      dispatch({
        type: "success",
        title: "Successfully Verified",
        message:
          "Ownership Successfully Verified. You can now perform following functions",
        position: "bottomL",
      })
      setIsOwner(true)
    } else {
      dispatch({
        type: "error",
        title: "Verification Failed",
        message: `As per our records ${contractOwner} is the owner of this smart contract.`,
        position: "bottomL",
        isClosing: false,
      })
    }
  }
  const onCloseDoctorModal = () => {
    setShowAddDoctorModal(false)
  }
  const onCloseHospitalModal = () => {
    setShowAddHospitalModal(false)
  }

  const handleAddDoctorClick = async () => {
    setShowAddDoctorModal(true)
  }

  const handleAddHospitalClick = async () => {
    setShowAddHospitalModal(true)
  }

  //Add Doctor

  // const handleAddDoctorSuccess = async (tx) => {
  //   await tx.wait(1)
  //   dispatch({
  //     type: "success",
  //     title: "Transaction Successful",
  //     message:
  //       "Doctor Details Successfully Added. You can now add more doctors",
  //     position: "bottomL",
  //   })
  //   console.log("doctor address: ", doctorAddressToAddTo)
  //   console.log("doctor name: ", doctorName)
  //   console.log("doctor registration id: ", doctorRegistrationId)
  //   console.log("date of registration: ", dateInUnix(new Date()))
  //   console.log("doctor specialization: ", doctorSpecialization)
  //   console.log("doctor hospital address: ", doctorHospitalAddress)
  //   setShowAddDoctorModal(false)
  //   onCloseDoctorModal && onCloseDoctorModal() //closing the modal on success
  // }

  // const initiateAddDoctorTransaction = async () => {
  //   console.log("Initiate Add Doctor Transaction")
  //   setCancelDisabled(true)
  //   setOkDisabled(true)

  //   const addDoctorDetailsOptions = {
  //     abi: PatientMedicalRecordSystemAbi,
  //     contractAddress: medicalRecordSystemAddress,
  //     functionName: "addDoctorDetails",
  //     params: {
  //       //parameters of this function
  //       _doctorAddress: doctorAddressToAddTo,
  //       _name: doctorName,
  //       _doctorRegistrationId: doctorRegistrationId,
  //       _dateOfRegistration: dateInUnix(new Date()),
  //       _specialization: doctorSpecialization,
  //       _hospitalAddress: doctorHospitalAddress,
  //     },
  //   }

  //   await runContractFunction({
  //     params: addDoctorDetailsOptions,
  //     onError: (error) => {
  //       console.log("Error while calling registerPatient function", error)
  //     },
  //     onSuccess: handleAddDoctorSuccess,
  //   })
  //   setCancelDisabled(false)
  //   setOkDisabled(false)
  // }

  const initiateAddDoctorTransaction = () => {
    if (
      !doctor.address ||
      !doctor.name ||
      !doctor.registrationId ||
      !doctor.specialization ||
      !doctor.hospitalAddress
    ) {
      alert("Fill all the required fields")
      return
    }
    setCancelDisabled(true)
    setOkDisabled(true)
    const temp = data
    if (!temp.find((h) => h.address === doctor.hospitalAddress)) {
      alert("Hospital ID doesn't Exist!")
    } else {
      temp
        .find((h) => h.address === doctor.hospitalAddress)
        .doctors.push(doctor)
      localStorage.setItem("data", JSON.stringify(temp))
      setData(temp)
      alert("Doctor is added successfully!")
      setDoctor(doctorInitialState)
    }
    setCancelDisabled(false)
    setOkDisabled(false)
    onCloseDoctorModal()
  }

  //Add Hospital
  const initiateAddHospitalTransaction = () => {
    if (
      !hospital.address ||
      !hospital.name ||
      !hospital.registrationId ||
      !hospital.email ||
      !hospital.phone
    ) {
      alert("Fill all the required fields")
      return
    }
    setCancelDisabled(true)
    setOkDisabled(true)
    localStorage.setItem("data", JSON.stringify(data.concat(hospital)))
    setData((prev) => [...prev, hospital])
    setHospital(hospitalInitialState)
    alert("Hospital is added successfully!")
    setCancelDisabled(false)
    setOkDisabled(false)
    onCloseHospitalModal()
  }

  useEffect(() => {
    const storageData = localStorage.getItem("data")
    if (storageData) {
      setData(JSON.parse(storageData))
    }
  }, [])

  return (
    <>
      <Head>
        <title>MedBook Owner</title>
        <meta name="description" content="MedBook" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Modal
        isVisible={showAddDoctorModal}
        onCancel={onCloseDoctorModal}
        onCloseButtonPressed={onCloseDoctorModal}
        onOk={initiateAddDoctorTransaction}
        isCancelDisabled={cancelDisabled}
        isOkDisabled={okDisabled}
        width="63vw"
      >
        <div className="mb-5">
          <Input
            label="Enter Doctor's account address"
            name="Doctor Account Address"
            type="text"
            value={doctor.address}
            onChange={(event) => {
              setDoctor({ ...doctor, address: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
        <div className="mb-5">
          <Input
            label="Enter Doctor's name"
            name="Doctor Name"
            type="text"
            value={doctor.name}
            onChange={(event) => {
              setDoctor({ ...doctor, name: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
        <div className="mb-5">
          <Input
            label="Enter Doctor's Registration Id"
            name="Doctor Registration Id"
            type="text"
            value={doctor.registrationId}
            onChange={(event) => {
              setDoctor({ ...doctor, registrationId: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
        <div className="mb-5">
          <Input
            label="Enter Doctor's Specialization"
            name="Doctor Specialization"
            type="text"
            value={doctor.specialization}
            onChange={(event) => {
              setDoctor({ ...doctor, specialization: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
        <div className="mb-5">
          <Input
            label="Enter Doctor's Hospital Account Address"
            name="Doctor Hospital Address"
            type="text"
            value={doctor.hospitalAddress}
            onChange={(event) => {
              setDoctor({ ...doctor, hospitalAddress: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
      </Modal>
      <Modal
        isVisible={showAddHospitalModal}
        onCancel={onCloseHospitalModal}
        onCloseButtonPressed={onCloseHospitalModal}
        onOk={initiateAddHospitalTransaction}
        isCancelDisabled={cancelDisabled}
        isOkDisabled={okDisabled}
        width="63vw"
      >
        <div className="mb-5">
          <Input
            label="Enter Hospital's account address"
            name="Hospital Account Address"
            type="text"
            value={hospital.address}
            onChange={(event) => {
              setHospital({ ...hospital, address: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
        <div className="mb-5">
          <Input
            label="Enter Hospital's name"
            name="Hospital Name"
            type="text"
            value={hospital.name}
            onChange={(event) => {
              setHospital({ ...hospital, name: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
        <div className="mb-5">
          <Input
            label="Enter Hospital's Registration Id"
            name="Hospital Registration Id"
            type="text"
            value={hospital.registrationId}
            onChange={(event) => {
              setHospital({ ...hospital, registrationId: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
        <div className="mb-5">
          <Input
            label="Enter Hospital's Email"
            name="Hospital Email"
            type="text"
            value={hospital.email}
            onChange={(event) => {
              setHospital({ ...hospital, email: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
        <div className="mb-5">
          <Input
            label="Enter Hospital's Phone Number"
            name="Hospital Phone Number"
            type="text"
            value={hospital.phone}
            onChange={(event) => {
              setHospital({ ...hospital, phone: event.target.value })
            }}
            width="full"
            validation={{
              required: true,
            }}
          />
        </div>
      </Modal>
      {!isWeb3Enabled ? (
        <ConnectModal />
      ) : (
        <>
          <Header heading="Owner Dashboard" />
          {isOwner ? (
            <div className="mt-16 text-center">
              <button
                className="btn btn-primary mr-5"
                onClick={handleAddDoctorClick}
              >
                <Button name="Add a Doctor" link="/ownerDashboard" />
              </button>
              <button
                className="btn btn-secondary mr-5"
                onClick={handleAddHospitalClick}
              >
                <Button name="Add a Hospital" link="/ownerDashboard" />
              </button>
            </div>
          ) : (
            <div className="text-center mt-16">
              <button className="btn mr-5" onClick={handleVerificationClick}>
                <Button name="Verify Ownership" link="/ownerDashboard" />
              </button>
            </div>
          )}
        </>
      )}
      ;
    </>
  )
}

export default OwnerDashboard

/* 
                        1. Possibly show the list of all the doctors registered in the system. (show the list of details of all the doctors)
                        2. Possibly show the list of all the hospitals registered in the system. (show the list of details of all the hospitals)
                          */
