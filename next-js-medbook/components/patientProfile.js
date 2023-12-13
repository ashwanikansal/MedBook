import React from 'react'

const PatientProfile = ({name, patientAddress, dob, bloodGroup, phone, medicals}) => {
  return (
    <section className="md:grid md:grid-cols-5 min-h-[calc(100vh-72px)]">
        <div className="flex flex-col items-center col-span-2 h-full p-8 border-r-2 border-gray-light">
          <div className="h-48 w-5/6 lg:w-4/6 flex justify-center items-center">
            <img src="/hospital.jpg" alt="hospital" />
          </div>
          <article className="w-full text-left">
            <h1 className="font-bold uppercase my-1">Address</h1>
            <p className="font-medium mb-5 text-gray">{patientAddress}</p>
            <h1 className="font-bold uppercase mb-1">Registration ID</h1>
            <p className="font-medium mb-5 text-gray">{dob}</p>
            <h1 className="font-bold uppercase mb-1">Email ID</h1>
            <p className="font-medium mb-5 text-gray">{bloodGroup}</p>
            <h1 className="font-bold uppercase mb-1">Phone No.</h1>
            <p className="font-medium mb-5 text-gray">{phone}</p>
          </article>
        </div>
        <div className="flex col-span-3 p-8 ">
          <section className="mx-auto w-9/12">
            <h1 className="text-4xl font-bold text-center">{name}</h1>
            <header class="px-5 py-4">
              <h2 class="font-semibold text-gray">List of medicals</h2>
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
                    <div class="font-semibold text-left">Specialization</div>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray">
                {medicals.map((doctor) => (
                  <tr key={doctor.id}>
                    <td class="py-2 px-4 whitespace-nowrap">
                      <div class="font-medium text-gray">{doctor.id}</div>
                    </td>
                    <td class="py-2 px-4 whitespace-nowrap">
                      <div class="font-medium text-gray">{doctor.name}</div>
                    </td>
                    <td class="py-2 px-4 whitespace-nowrap">
                      <div class="font-medium text-gray">
                        {doctor.specialization}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </section>
  )
}

export default PatientProfile