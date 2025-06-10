import React, { useState } from 'react'

const Types = () => {
    const [open, setOpen] = useState(1)
  return (
    <div className=' w-[95%] mx-auto mt-20'>
        <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[800] text-red-500 text-center'>Types of Beneficiaries</h1>
        <p className=' md:text-[20px] text-[16px] font-[500] text-[#00105C] text-center mt-12'>Through bonded manufacturing, all types of businesscan <span className=' text-[700]'>avail exemption on customs duty on imported</span> used in the production of finished goods to be exported.
In the case of domestic consumption, the <span className=' text-[700]'>duty on imported inputs is deferred until</span> the finished goods are cleared to the domestic market.

<span className=' text-[700]'>For better understanding, illustration below</span> show how a manufacturer benefits from bonded manufacturing.</p>
<div className=' mt-12 flex flex-col gap-5'>
    <button onClick={()=>setOpen(1)} className={` xl:text-[25px] lg:text-[35px] md:text-[30px] text-[25px] font-[800] ${open === 1 ? "text-white bg-[#00105C]" : "bg-[#bbabab38] text-black"} w-full px-12 py-6 flex items-center justify-between`}>Manufacture <span>{open === 1 ? <>+</> : <>-</>}</span></button>
    <div>
        {
            open === 1 ? <><p className=' md:text-[18px] text-[15px]'>Manufacture Forest Ghana is a pioneering initiative dedicated to transforming Ghana’s industrial landscape through sustainable forestry-based manufacturing. Rooted in the heart of West Africa, this venture blends ecological responsibility with economic advancement by fostering an integrated value chain—from managed forest plantations to high-value industrial outputs.

At its core, Manufacture Forest Ghana promotes responsible timber sourcing and value-added manufacturing, helping reduce deforestation while empowering local communities through employment and skill development. By leveraging Ghana’s rich biodiversity and strategic location, the initiative attracts global investors and partners in sectors like furniture, packaging, paper production, eco-construction materials, and bioenergy.

This forward-looking model supports Ghana’s Green Ghana Agenda and aligns with the UN Sustainable Development Goals (SDGs) by:

Rehabilitating degraded lands through afforestation

Establishing wood-processing hubs powered by clean energy

Encouraging climate-smart manufacturing technologies

Creating inclusive jobs, particularly for youth and women

Stimulating exports and reducing reliance on raw timber trade

Manufacture Forest Ghana is not just an industrial project — it’s a symbol of how innovation, nature, and economic development can thrive together to shape a greener, more resilient future for Ghana and the region.

</p></> : null
        }
    </div>
    <button onClick={()=>setOpen(2)} className={` xl:text-[25px] lg:text-[35px] md:text-[30px] text-[25px] font-[800] ${open === 2 ? "text-white bg-[#00105C]" : "bg-[#bbabab38] text-black"} w-full px-12 py-6 flex items-center justify-between`}>Export goods <span>{open === 2 ? <>+</> : <>-</>}</span></button> 
    <div>
        {
            open === 2 ? <p className=' md:text-[18px] text-[15px]'>Export Goods represents the core of international commerce — the movement of high-quality, locally manufactured or sourced products to markets across the globe. From raw materials and agricultural produce to sophisticated industrial goods, the export sector fuels economic growth, fosters cross-border partnerships, and elevates a nation's standing in the global economy.

At the heart of every successful export operation lies a strong commitment to quality, compliance, efficiency, and sustainability. Export Goods is more than just moving products — it’s about delivering value, trust, and consistency to international buyers and stakeholders.

 What We Export
We support a diverse range of export categories including:

Agricultural Products – cocoa, cashew, shea butter, mangoes, pineapples, and other premium-grade produce

Forest-Based Products – processed timber, wood pellets, furniture, paper, and packaging materials

Minerals & Natural Resources – gold, bauxite, manganese, and responsibly sourced minerals

Textiles & Apparel – handcrafted garments, fabrics, and locally dyed prints for fashion markets abroad

Industrial & Manufactured Goods – tools, machinery components, plastics, construction materials, and consumer goods

 Why Export Matters
Exporting strengthens the economy by:

Creating jobs across farming, logistics, processing, manufacturing, and shipping

Increasing foreign exchange earnings and national GDP

Diversifying market exposure and reducing dependency on local demand

Encouraging innovation and raising product standards to meet global benchmarks

Attracting foreign investment and trade partnerships

 Trusted Export Operations
Our export processes are backed by:

Regulatory Compliance: Adherence to WTO, EU, US, and Asian market import/export regulations

Logistics Excellence: Efficient handling through bonded warehouses, free zones, and major seaports

Sustainability Focus: Environmentally conscious sourcing and packaging aligned with global ESG standards

Technology-Driven Tracking: Real-time monitoring of shipment and inventory via digital supply chain solutions

Global Reach: Established trade routes to North America, Europe, the Middle East, and Asia-Pacific

Whether it’s Ghanaian agricultural exports or Africa's emerging industrial output, Export Goods is the engine that connects local economies to global opportunities.</p> : null
        }
    </div>
    <button onClick={()=>setOpen(3)} className={` xl:text-[25px] lg:text-[35px] md:text-[30px] text-[25px] font-[800] ${open === 3 ? "text-white bg-[#00105C]" : "bg-[#bbabab38] text-black"} w-full px-12 py-6 flex items-center justify-between`}>Goods for home consumption <span>{open === 3 ? <>+</> : <>-</>}</span></button>
    <div>
        {
            open === 3 ? <p className=' md:text-[18px] text-[15px]'>Goods for Home Consumption refer to products that are imported and cleared through customs for direct use within the domestic market, rather than for resale, re-export, or industrial processing. These goods play a critical role in supporting the needs of individuals, households, and communities — helping to maintain quality of life, promote health, and meet daily living standards.

Whether it’s nutritious food items, household electronics, clothing, personal care products, or essential medicines, home consumption goods are central to economic stability and social well-being.

 Key Categories of Home Consumption Goods:
Food & Beverages: Grains, dairy, fruits, snacks, packaged items, and specialty imports that diversify diets and ensure food security

Household Appliances: Refrigerators, microwaves, TVs, and other electronics that improve home convenience and lifestyle

Healthcare & Pharmaceuticals: Over-the-counter medicines, supplements, and personal hygiene products vital for public health

Clothing & Footwear: Imported textiles and garments that offer style, comfort, and affordability

Cleaning & Sanitation Products: Soaps, detergents, disinfectants, and paper products for maintaining clean and safe environments

 Economic and Social Importance:
Ensures the availability of diverse products not produced locally

Supports consumer access to global quality standards

Stabilizes market demand during local production shortfalls

Drives retail, logistics, and supply chain employment

Encourages competitive pricing and innovation in local markets

 Customs & Clearance:
Goods for home consumption are subject to customs duties, taxes, and regulatory inspections, ensuring they meet domestic safety and quality standards before reaching consumers. These goods are typically cleared under the “import for home use” category and must comply with relevant import documentation and valuation procedures.</p> : null
        }
    </div>
    <button onClick={()=>setOpen(4)} className={` xl:text-[25px] lg:text-[35px] md:text-[30px] text-[25px] font-[800] ${open === 4 ? "text-white bg-[#00105C]" : "bg-[#bbabab38] text-black"} w-full px-12 py-6 flex items-center justify-between`}>Waste/ refused goods <span>{open === 4 ? <>+</> : <>-</>}</span></button>
    <div>
        {
            open === 4 ? <p className=' text-[15px] md:text-[18px]'>Waste or Refused Goods refer to items that are either rejected by customs authorities, abandoned by the importer, or deemed unfit for use, consumption, or sale upon inspection. These goods may be damaged during transit, fail to meet quality standards, pose safety risks, or violate regulatory requirements such as labeling, origin, or health certifications.

This category includes a wide range of items — from perishable goods spoiled in transit to counterfeit products, hazardous materials, or expired consumer goods.

Common Reasons for Goods Being Refused or Classified as Waste:
Failure to meet regulatory standards (e.g., health, safety, or environmental requirements)

Physical damage during shipping or handling

Incorrect documentation or undervaluation

Non-compliance with import licenses or prohibited item lists

Expiry or contamination, especially in food or pharmaceutical products

Voluntary abandonment by the consignee due to high duty costs or administrative issues

Handling and Disposal:
Waste or refused goods must be managed in accordance with customs laws, environmental regulations, and public safety guidelines, typically through:

Re-exportation to the origin country or supplier

Destruction under customs supervision

Reclassification and duty-free disposal

Transfer to authorized waste management facilities

 Environmental & Legal Considerations:
Helps prevent illegal dumping or environmental harm

Ensures public health and consumer safety

Promotes accountability in global trade practices

Supports transparent customs procedures

Proper handling of waste/refused goods is critical in protecting national borders, the environment, and consumers. It also reinforces the integrity of the import system, ensuring that only safe, verified, and compliant products enter the domestic market.

</p> : null
        }
    </div>
</div>
    </div>
  )
}

export default Types