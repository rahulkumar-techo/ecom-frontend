import React from "react";
import { Link } from "react-router-dom";
Link

function Layer3() {
  return (
    <div className=" flex justify-around">
      <div>@2024 R-Ecom Powered by e-com website</div>
      <div className=" flex items-center gap-4">
       <Link> <img src="https://pluspng.com/img-png/visa-logo-png-card-credit-logo-visa-icon-512x512.png" alt="visa ..." className=" w-11"/></Link>
       <Link> <img src="https://th.bing.com/th/id/R.205013ad5e99aef05d6ca201a9ac3a31?rik=Z0cpX2RX%2bs5a9Q&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fMastercard-PNG.png&ehk=%2fudodjGiA%2fogzZwdrBgFCGA5rNzptgXW4WqBIIdvABg%3d&risl=&pid=ImgRaw&r=0" alt="Master Card"  className=" w-11" /></Link>
        <Link><img src="https://th.bing.com/th/id/R.fb07da7142624d0f84cdb6bcbf9c389e?rik=T9JgqKoM6piVLg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdesignbolts%2fcredit-card-payment%2f256%2fPaypal-icon.png&ehk=9YbX2x3ytpx5F0bCc3qlyCx%2fxLN%2bEzzZKiXeyYhcbK0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="paypal"  className=" w-11" /></Link>
       <Link> <img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png" alt="Paytm"  className=" w-11" /></Link>
      </div>
    </div>
  );
}

export default Layer3;
