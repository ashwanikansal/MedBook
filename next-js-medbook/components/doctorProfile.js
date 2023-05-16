import React from 'react'

const DoctorProfile = ({name, doctorAddress, dateOfRegistration, specialization, hospitalAddress, doctorRegistrationId}) => {
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Doctor Details</h2>

            <div className="mb-4">
              <p><b>Doctor Name:</b> {name}</p>
              <p><b>Doctor Address:</b> {doctorAddress}</p>
              <p><b>Date of Registration:</b> {dateOfRegistration}</p>
              <p><b>Doctor Specialization:</b> {specialization}</p>
              <p><b>Hospital Address:</b> {hospitalAddress}</p>
              <p><b>Doctor Registration Id:</b> {doctorRegistrationId}</p>
            </div>

          </div>
        </div>
    </>
    // <>
    //     <div>{name}</div>
    //     <div>{doctorAddress}</div>
    //     <div>{dateOfRegistration}</div>
    //     <div>{specialization}</div>
    //     <div>{hospitalAddress}</div>
    //     <div>{doctorRegistrationId}</div>
    // </>
  )
}

export default DoctorProfile