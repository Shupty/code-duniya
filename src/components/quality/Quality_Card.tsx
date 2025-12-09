import type { qualityType } from "../../types/qualityTypes"


const Quality_Card = ({item}:{ item: qualityType }) => {
  return (
   <div className="w-full max-w-[377px] bg-primary rounded-[15px] text-white px-7 py-9 ">

<h3 className="font-anek text-4xl font-semibold mb-4">{item.ratio} </h3>
<h3 className="font-anek text-4xl font-semibold mb-5">{item.title}</h3>
<p className="font-anek text-[16px] font-normal mb-10">{item.description}</p>

    </div>
  )
}

export default Quality_Card