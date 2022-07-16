import React from "react";
import "./Home.css";
import Product from "./Product";
import Slideshow from './Slideshow'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Slideshow />



        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={405}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={3299}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="1"
            title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
            image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg"
            price={1199}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={19999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={5999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={35999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={48999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="2"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"
            price={7999}
            rating={3}
          />
          <Product
            id="3"
            title="Xbox game"
            image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B5ECC8E3DA42415._V531815325_.jpg"
            price={14999}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="The LeanStartup2: How constant innovative creators"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={499}
            rating={4}
          />
          <Product
            id="5"
            title="Play station game pad"
            image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B638E86650FFF18._V531815327_.jpg"
            price={599}
            rating={5}
          />
          <Product
            id={122322}
            title="A Game of Thrones (Song of Ice and Fire) Hardcover – August 1, 1996"
            price={26.29}
            image="https://kbimages1-a.akamaihd.net/a26bb671-977c-4324-a6af-486847cdbe32/1200/1200/False/a-game-of-thrones-a-song-of-ice-and-fire-book-1.jpg"
            rating={5}
            author="by George R.R. Martin"
            subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"

          />
        </div>
        <div className="home__row">
          <Product
            id={122323}

            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            price={46499}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            rating={4}
            author="by Acer"

          />
          <Product
            id={122326}
            title="OtterBox Defender Series Case for iPad Pro 11(1st Gen) - Retail Packaging - Black"
            price={1199}
            image="https://images-na.ssl-images-amazon.com/images/I/51o%2ByhvbK-L._AC_SL1000_.jpg"
            rating={5}
            author="by OtterBox Store"
            subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus"

          />
          <Product
            id={122321}
            title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
            price={19999}
            image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
            rating={3}
            author="by Samsung Electronics Store"
            subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"

          />
        </div>
      </div>
    </div>
  );
}

export default Home;