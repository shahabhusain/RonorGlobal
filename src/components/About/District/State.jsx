import React from 'react'

const State = () => {
    const stateEmporiums = [
    { id: 1, state: "All", name: "Cottage Emporium" },
    { id: 2, state: "All", name: "Tribes Ghana" },
    { id: 3, state: "All", name: "KAIRAS" },
    { id: 4, state: "Andhra Pradesh", name: "Lepakshi Handicrafts and Andhra Pradesh State Handloom Weavers Cooperative Society (APCO)" },
    { id: 5, state: "Gujarat", name: "Garvi Gurjari" },
    { id: 6, state: "Karnataka", name: "Cauvery Handicrafts" },
    { id: 7, state: "Madhya Pradesh", name: "Mrignayanl Emporium" },
    { id: 8, state: "Meghalaya", name: "Meghalaya Collectives" },
    { id: 9, state: "Odisha", name: "Utkalika Odisha" },
    { id: 10, state: "Rajasthan", name: "E-bazaar Rajasthan" },
    { id: 11, state: "Tamil Nadu", name: "Co-optex" },
    { id: 12, state: "Telangana", name: "Kalanjali Handlooms" },
    { id: 13, state: "Uttar Pradesh", name: "UP OOCF Mart" },
    { id: 14, state: "West Bengal", name: "Biswa Bangla" }
  ];
  return (
    <div>
       <div className="bg-[#0C1644] text-white p-4 text-center mt-20 mb-10">
          <h2 className="text-[42px] font-bold">State Emporiums</h2>
        </div>
       <div className="mb-8 w-[95%] mx-auto">
        
        <div className="bg-white p-4">
          <div className="mb-4">
            <h3 className="font-semibold text-[24px] mb-2">Procurement from Government E-Commerce Platforms</h3>
            <p className=" font-[400] text-gray-700 text-[20px] leading-relaxed">
              Orders and procure a product under GOCF through official government e-commercial platforms, including those empowered and Ministry- supported 
              marketplaces. Showcasing the rich craftsmanship and unique heritage of each region, these platforms ensure quality and access to locally made products. It's 
              for this seamless path ensures for individuals, businesses, and institutions. To make its trusted into a product basis, offering a diverse shopping experience 
              sourced throughout the Ghana.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-[2px] border-black rounded-3xl">
              <thead>
                <tr className="bg-[#0C1644] text-white">
                  <th className="p-3 text-[24px] font-[600] text-left">S.No.</th>
                  <th className="p-3 text-[24px] font-[600] text-left">State</th>
                  <th className="p-3 text-[24px] font-[600] text-left">Emporium Name</th>
                  <th className="p-3 text-[24px] font-[600] text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                {stateEmporiums.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                    <td className="p-3 text-center">{item.id}</td>
                    <td className="p-3">{item.state}</td>
                    <td className="p-3">
                      {item.state === "Andhra Pradesh" ? (
                        <div>
                          <div>Lepakshi Handicrafts and Andhra Pradesh State</div>
                          <div>Handloom Weavers Cooperative Society (APCO)</div>
                        </div>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td className="p-3">
                      <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        {item.state === "Andhra Pradesh" ? "Lepakshi | APCO" : "Link"}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default State