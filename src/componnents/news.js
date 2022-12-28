import react from 'react';
import './css/list.css'
import Link from '@material-ui/core/Link'
function News() {
    return (
        <div className='news'>
            <img src='https://www.licious.in/img/rebranding/licious-logo.svg' height={50} width={120}></img><hr></hr>

            <div className='top'>
                <div className='card'>
                    <h6>USEFULL LINKS</h6>
                    <Link 
                        href="https://www.licious.in/about-us"
                    >
                    <p> Why Licious? </p>
                    </Link>
                    <Link
                        href="https://www.licious.in/refer-earn-tnc">
                    <p>Refer & Earn </p> 
                    </Link> <Link
                        href="https://www.licious.in/licious-cash"
                    >
                     <p> Licious Cash & Cash+</p>  
                    </Link> <Link
                        href="http://careers.licious.in/"
                    >
                  <p>  Careers</p>
                    </Link> <Link
                        href="https://www.licious.in/blog/"
                    >
                     <p>  BLOG</p>
                    </Link> <Link
                        href="https://www.licious.in/campaign"    >
                    <p>  Campaign  </p>
                    </Link>
                    <Link
                        href="https://www.licious.in/bug-bounty-guidelines"    >
                     
                    </Link>
                    <Link
                        href="https://www.licious.in/about-us-new"    >
                       <p> About Us</p>
                    </Link>
                    <Link
                        href="https://www.licious.in/certification"    >
                       <p> FSSC 22000 Certification</p>
                    </Link>
                    <Link
                        href="https://www.licious.in/fssai-licenses"    >
                       <p> FSSAI Licenses</p>
                    </Link>
                    <Link
                        href="https://www.licious.in/SA8000-certification"    >
                       <p> SA8000 Certification</p>
                    </Link>
                    <Link
                        href="https://www.licious.in/sitemap"    >
                      <p>  Sitemap</p>
                    </Link>
                </div>
                <div className='cardd' >
                    <h6>EXPERIENCE LICIOUS APP ON MOBILE</h6>
                    <span><img src='https://www.licious.in/img/rebranding/app-store-new.svg' height={70} width={130}></img><img src='https://www.licious.in/img/rebranding/play-store-new.png' height={40} width={130}></img></ span>
                </div>
                <div className='cardd'>
                    <h6>CONTACT US</h6>
                    <p>Call: 1800-4190-786
                    Talktous@licious.com</p>
                  <div> <h6>REGISTERED OFFICE ADDRESS:</h6>
                    <p>
                    House of Licious, Zed Pearl, No 12, Domlur Layout
Bangalore, Karnataka - 560071
                    </p></div>
                </div>
                <div className='carddd'>
                 <span>   <img margin-top={15}width={180} src='https://www.licious.in/img/rebranding/3-dsecure.png' alt='carx'></img></span>
                 </div>
            </div>
        </div>
    )
}
export default News