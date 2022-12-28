import React from "react";
import './css/break.css'
function Break(){
const data=[{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fee95638-21fd-1706-4569-ed42430fd716/original/Sriracha-chicken-spreadsTIle-image.jpg?format=webp",
title:"Chunky Sriracha Chicken Spread",pices:"1",mrp:"229"},{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/faa6ff18-1108-6acf-4885-aa0fdb5e13ec/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
title:"Chunky Shawarma Chicken Spread",pices:"1",mrp:"219"},{ImgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b7cbafbe-bdf9-39cc-30c0-5a7c432309d8/original/Chunky-Herby-Tomato-Chicken-Spread_(1).jpg?format=webp",
title:"Chunky Herbby Tomato Spread",pices:"1",mrp:"199"}]

return(
    
    <div>
    <div className="top">     {
            data.map((items)=>{
                return(
                    <div className="data"><img height={300} width={330} src={items.ImgUrl} alt="image"></img><div className="lm"><h6>{items.title}</h6>
                    <h6>Pices: {items.pices}</h6><h5>MRP:₹{items.mrp}<button className="btn">Add To Card</button></h5></div>
                  <div className="sc">  <img src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="scooty"></img><span >Today 8 AM-10 AM</span></div></div>
                )
            })
        } </div>
    </div>
)

}
export default Break