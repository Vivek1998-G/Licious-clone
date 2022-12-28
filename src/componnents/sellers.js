import React from "react";
import './css/break.css'
function Sellers(){
const data=[{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp",
title:"Chicken Thigh Bonless",pices:"450gms",mrp:"229"},{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4cad2ee9-9257-9109-62a1-da4082b2cf36/original/sho.jpg?format=webp",
title:"Chicken Means",pices:"450gms",mrp:"219"},{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp",
title:"Seer (Vanjaram/Surmai) Large - Boneless Cubes",pices:"450gms",mrp:"199"}]

return(
    
   
    <div className="top">    {
            data.map((items)=>{
                return(
                   <div className="data"><img height={300} width={330} src={items.ImgUrl} alt="image"></img><div className="lm"><h6>{items.title}</h6>
                   <h6>{items.pices}</h6><h5>MRP:₹{items.mrp}<button className="btn">Add To Card</button></h5></div>
                 <div className="sc">  <img src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="scooty"></img><span >Today 8 AM-10 AM</span></div></div>
                )
            })
        } </div>
   
)

}
export default Sellers