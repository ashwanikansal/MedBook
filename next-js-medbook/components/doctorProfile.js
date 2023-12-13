import React from "react"
import { Modal, Input } from "web3uikit"
import { useState, useEffect } from "react"
import Button from "./button"

const DoctorProfile = ({
  name,
  address,
  specialization,
  hospitalAddress,
  registrationId,
  patients,
}) => {
  const patientInitialState = {
    address: "",
    name: "",
    visited: new Date().toLocaleDateString,
  }
  const [showAddPatientModal, setshowAddPatientModal] = useState(false)
  const [cancelDisabled, setCancelDisabled] = useState(false)
  const [okDisabled, setOkDisabled] = useState(false)
  const [data, setData] = useState([])
  const [patient, setPatient] = useState(patientInitialState)
  const [shouldRender, setShouldRender] = useState(false)

  const onClosePatientModal = () => {
    setshowAddPatientModal(false)
  }

  const handleAddPatientClick = async () => {
    setshowAddPatientModal(true)
  }

  const initiateAddPatientTransaction = () => {
    if (!patient.address || !patient.name) {
      alert("Fill all the required fields")
      return
    }
    setPatient({ ...patient, visited : new Date().toLocaleDateString })
    console.log(data)
    setCancelDisabled(true)
    setOkDisabled(true)
    const updatedHospitalsData = data.map((hospital) => {
      if (hospital.doctors.some((doctor) => doctor.address === address)) {
        return {
          ...hospital,
          doctors: hospital.doctors.map((doctor) => {
            if (doctor.address === address) {
              return {
                ...doctor,
                patients: [...doctor.patients, patient],
              }
            }
            return doctor
          }),
        }
      }
      return hospital
    })
    localStorage.setItem("data", JSON.stringify(updatedHospitalsData))
    setData(updatedHospitalsData)
    setPatient(patientInitialState)
    alert("Patient is added successfully!")
    setCancelDisabled(false)
    setOkDisabled(false)
    onClosePatientModal()
    setShouldRender(true)
  }

  useEffect(() => {
    const storageData = localStorage.getItem("data")
    if (storageData) {
      setData(JSON.parse(storageData))
    }
    setShouldRender(false)
  }, [])

  return (
    <section className="md:grid md:grid-cols-5 min-h-[calc(100vh-72px)]">
      <div className="flex flex-col items-center col-span-2 h-full p-8 border-r-2 border-gray-light">
        <div className="h-48 w-5/6 lg:w-4/6 flex justify-center items-center overflow-hidden">
          <img src="/doctor.jpg" alt="doctor" />
        </div>
        <article className="w-full text-left">
          <h1 className="font-bold uppercase my-1">Name</h1>
          <p className="font-medium mb-5 text-gray">{name}</p>
          <h1 className="font-bold uppercase mb-1">My Address</h1>
          <p className="font-medium mb-5 text-gray">{address}</p>
          <h1 className="font-bold uppercase mb-1">Specialization</h1>
          <p className="font-medium mb-5 text-gray">{specialization}</p>
          <h1 className="font-bold uppercase mb-1">Hospital Address</h1>
          <p className="font-medium mb-5 text-gray">{hospitalAddress}</p>
          <h1 className="font-bold uppercase mb-1">Registration ID</h1>
          <p className="font-medium mb-5 text-gray">{registrationId}</p>
        </article>
      </div>
      <div className="flex flex-col items-center col-span-3 p-8 ">
        <Modal
          isVisible={showAddPatientModal}
          onCancel={onClosePatientModal}
          onCloseButtonPressed={onClosePatientModal}
          onOk={initiateAddPatientTransaction}
          isCancelDisabled={cancelDisabled}
          isOkDisabled={okDisabled}
          width="63vw"
        >
          <div className="mb-5">
            <Input
              label="Enter Patient's account address"
              name="Patient Account Address"
              type="text"
              value={patient.address}
              onChange={(event) => {
                setPatient({ ...patient, address: event.target.value })
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
              value={patient.name}
              onChange={(event) => {
                setPatient({ ...patient, name: event.target.value })
              }}
              width="full"
              validation={{
                required: true,
              }}
            />
          </div>
        </Modal>

        <section className="mx-auto w-9/12 h-[calc(100vh-200px)]">
          <h1 className="text-4xl font-bold text-center">{name}</h1>
          <header class="px-5 py-4">
            <h2 class="font-semibold text-gray">List of Patients</h2>
          </header>
          <table className="w-full table-auto px-4">
            <thead class="items-center font-semibold text-pink bg-pink-light">
              <tr>
                <th class="py-2 px-4 whitespace-nowrap">
                  <div class="font-semibold text-left">Address</div>
                </th>
                <th class="py-2 px-4 whitespace-nowrap">
                  <div class="font-semibold text-left">Name</div>
                </th>
                <th class="py-2 px-4 whitespace-nowrap">
                  <div class="font-semibold text-left">Last Visit</div>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray overflow-y-scroll">
              {console.log(patients)}
              {patients.map((patient) => (
                <tr key={patient.address}>
                  <td class="py-2 px-4 whitespace-nowrap">
                    <div class="font-medium text-gray">
                      {patient.address}
                    </div>
                  </td>
                  <td class="py-2 px-4 whitespace-nowrap">
                    <div class="font-medium text-gray">
                      {patient.name}
                    </div>
                  </td>
                  <td class="py-2 px-4 whitespace-nowrap">
                    <div class="font-medium text-gray">{patient.visited}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <button
          className="btn btn-secondary mr-5"
          onClick={handleAddPatientClick}
        >
          <Button name="Add New Patient" link="/doctorDashboard" />
        </button>
      </div>
    </section>
  )
}

export default DoctorProfile
