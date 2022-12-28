import react from 'react';
import Chicken from './chicken';
import './css/header.css'
import List from './list';
import News from './news';
import { Link } from '@material-ui/core';
import Catagory from './catagory';


function Head() {
    return (
        <div className='o'>

            <div className='bg'>
                <span className="m">  <Link
                    href="https://www.licious.in/about-us"
                >
                    Why Licious?
                    <span className="m">Download App</span></Link> </span>
                <span ><Link href='https://itunes.apple.com/in/app/buy-meat-online-licious/id1052440342?mt=8'>
                    <img src='https://www.licious.in/img/rebranding/ios_app_icon.svg' alt='lojo' href='https://itunes.apple.com/in/app/buy-meat-online-licious/id1052440342?mt=8'></img></Link>
                    <Link href='https://play.google.com/store/apps/details?id=com.licious'>
                        <img src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="logo"></img> </Link></span>
                <span className='side'> <Link
                    href="https://www.licious.in/certification"    >
                    FSSC 22000 Certification
                </Link></span>
                <span className='m'> <Link
                    href="https://www.licious.in/about-us-new"    >
                    About Us
                </Link></span><span className='m'>
                    <Link href="http://careers.licious.in/" >
                        Careers@Licious
                    </Link></span><span className='m'></span>
                <span className='m'> <Link
                    href="https://www.licious.in/about-us-new"    >
                    Contact Us
                </Link> </span>
            </div>

            <div className='search'>
                <span className='m'> <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="logo" /></span>
                <span> <img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="logo"></img><select>Select City
                    <option>Amravatii</option>
                    <option>nagpur</option>
                    <option>benguluru</option>
                </select></span>
                <input typeof='search' placeholder="Search"></input> <button type='search'>Search</button>
                <img src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"></img>
                <span className='m'>
                    <span class="dropdown-toggle" data-bs-toggle="dropdown">Catagory </span>
                    <div class="dropdown-menu">
                        <div class='catagory_main_list'>
                            <a href="#" class="dropdown-item" data-index="0" >
                                <img height={41} width={41} src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d37b868d-482e-42b1-0bfa-e590338dd73f/original/Chicken_20.png" alt='png'>
                                </img><span>Chicken</span></a>
                            <a href="#" class="dropdown-item" data-index="1" >
                                <img height={41} width={41} src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4b052828-34f0-4324-6be2-81b863ae44ac/original/Fish_25.png" alt='png'>
                                </img>Fish And Sea Food</a>
                            <a href="#" class="dropdown-item" data-index="1" >
                                <img height={41} width={41} src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4cecc4b3-bb28-3f14-7552-d1593f2419c6/original/Mutton_20.png" alt='png'>
                                </img>Mutton</a>
                            <a href="#" class="dropdown-item" data-index="1" >
                                <img height={41} width={41} src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png" alt='png'>
                                </img>Ready To Cook</a>
                            <a href="#" class="dropdown-item" data-index="1" >
                                <img height={41} width={41} src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png" alt='png'>
                                </img>Prawns</a>
                            <a href="#" class="dropdown-item" data-index="1" >

                                <img height={41} width={41} src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png" alt='png'>
                                </img>Cold Cuts</a>
                            <a href="#" class="dropdown-item" data-index="1" >
                                <img height={41} width={41} src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png" alt='png'>
                                </img>Spreads</a>
                            <a href="#" class="dropdown-item" data-index="1" >
                                <img height={41} width={41} src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png" alt='png'>
                                </img>Eggs</a>

                        </div>
                    </div></span> <img src='https://www.licious.in/img/rebranding/profile_icon.svg'></img>
                <span><button  className='login' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    Log In</button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className='canv'>
                             <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> <div class="offcanvas-header">
                            <img className='canvoimg' height={50} width={140} src='https://www.licious.in/img/rebranding/logo-white.png' alt="png" ></img>
                           
                        </div>
                            <div class="offcanvas-body">
                              <h4>Sign In/Sign Up</h4>
                              <input className='ip' placeholder="Enter The Mobile Number"></input>
                              <button  className='bttn'>Procced Via OTP</button>
<p className='p'>By signing in you agree to our<p className='term'>terms and conditions</p> </p>
                            </div></div>
                    </div></span>

                <span className='m' ><img src="https://www.licious.in/img/rebranding/cart_icon.svg"></img>
                    <span className='m'>Cart</span></span>
            </div>

            <List />
            <News /> </div>
    )
}
export default Head;