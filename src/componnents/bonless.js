import React from "react";
import './css/break.css'
function Bonless(){
const data=[{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp",
title:"Chicken Thigh Bonless",pices:"450gms",mrp:"229"},{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3e9023d4-e2f7-2fe6-c68f-75014733ff7e/original/Chicken_Mince_Large_Pack_Hero_Shot.jpg?format=webp",
title:"Chicken Means",pices:"450gms",mrp:"219"},{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/06467851-b012-3b3f-0f74-5c758afa2603/original/p1_tile_images-25.jpg?format=webp",
title:"Seer (Vanjaram/Surmai) Large - Boneless Cubes",pices:"450gms",mrp:"199"}]

return(
    
   
    <div className="top">    {
            data.map((items)=>{
                return(
                    <div className="data"><img height={300} width={330} src={items.ImgUrl} alt="image"></img><div className="lm">
                        <h6>{items.title}</h6>
                   <h6>{items.pices}</h6>
                   <h5>MRP:₹{items.mrp}<button className="btn">Add To Card</button></h5></div>
                 <div className="sc">  <img src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="scooty"></img>
                 
                 <span >Today 8 AM-10 AM</span></div></div>
                )
            })
        } </div>
   
)

}
export default Bonless