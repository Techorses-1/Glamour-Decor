import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./CheckoutOurWork.scss";

import coating1 from "../../../assets/images/portfolio/coating/slide1.png"
import coating2 from "../../../assets/images/portfolio/coating/slide2.png"
import coating3 from "../../../assets/images/portfolio/coating/slide3.png"
import coating4 from "../../../assets/images/portfolio/coating/slide4.png"


import frosting1 from "../../../assets/images/portfolio/frosting/img1.png"
import frosting2 from "../../../assets/images/portfolio/frosting/img2.png"
import frosting3 from "../../../assets/images/portfolio/frosting/img3.png"

import foiling1 from "../../../assets/images/portfolio/foiling/img1.png"
import foiling2 from "../../../assets/images/portfolio/foiling/img2.png"
import foiling3 from "../../../assets/images/portfolio/foiling/img1.png"


import printing1 from "../../../assets/images/portfolio/printing/img1.png"
import printing2 from "../../../assets/images/portfolio/printing/img2.png"
import printing3 from "../../../assets/images/portfolio/printing/img3.png"
import printing4 from "../../../assets/images/portfolio/printing/img4.png"
import printing5 from "../../../assets/images/portfolio/printing/img5.png"
import printing6 from "../../../assets/images/portfolio/printing/img6.png"


import decalprint1 from "../../../assets/images/portfolio/decalprint/img1.png"
import decalprint2 from "../../../assets/images/portfolio/decalprint/img2.png"
import decalprint3 from "../../../assets/images/portfolio/decalprint/img3.png"
import decalprint4 from "../../../assets/images/portfolio/decalprint/img4.png"


const services = [
    {
        name: "Foiling",
        images: [
            foiling1, foiling2 , foiling1,  foiling2, 
        ],
    },
    {
        name: "Printing",
        images: [
            printing1, printing2, printing3, printing4, printing5, printing6
        ],
    },
    {
        name: "Coating",
        images: [
            coating1, coating2, coating3, coating4
        ],
    },
    {
        name: "Frosting",
        images: [
            frosting1, frosting2, frosting3
        ],
    },
    {
        name: "Decal Print",
        images: [
            decalprint1, decalprint2, decalprint3, decalprint4
        ],
    },
];

const CheckoutOurWork = ({ initialService = null }) => {
    const [activeService, setActiveService] = useState(2);
    const [servicesSwiper, setServicesSwiper] = useState(null);
    const [workSwiper, setWorkSwiper] = useState(null);




    // 🔹 SERVICES SLIDER ARROWS
    const servicePrevRef = useRef(null);
    const serviceNextRef = useRef(null);

    // 🔹 IMAGE SLIDER ARROWS
    const imagePrevRef = useRef(null);
    const imageNextRef = useRef(null);


    const serviceMap = {
        'coating': 2,    // Coating is at index 2
        'foiling': 0,    // Foiling is at index 0
        'printing': 1,   // Printing is at index 1
        'frosting': 3,   // Frosting is at index 3
        'decalprint': 4, // Decal Print is at index 4
    };


    useEffect(() => {
        if (initialService && serviceMap[initialService] !== undefined) {
            setActiveService(serviceMap[initialService]);
        }
    }, [initialService]);

    // Fix for navigation elements - run after component mounts
    useEffect(() => {
        if (servicesSwiper && servicesSwiper.params) {
            servicesSwiper.params.navigation.prevEl = servicePrevRef.current;
            servicesSwiper.params.navigation.nextEl = serviceNextRef.current;
            servicesSwiper.navigation.init();
            servicesSwiper.navigation.update();
        }
    }, [servicesSwiper]);

    useEffect(() => {
        if (workSwiper && workSwiper.params) {
            workSwiper.params.navigation.prevEl = imagePrevRef.current;
            workSwiper.params.navigation.nextEl = imageNextRef.current;
            workSwiper.navigation.init();
            workSwiper.navigation.update();
        }
    }, [workSwiper]);

    // Reset work swiper when service changes
    useEffect(() => {
        if (workSwiper) {
            workSwiper.slideToLoop(0, 0);
        }
    }, [activeService, workSwiper]);

    const loopImages = [
        ...services[activeService].images,
        ...services[activeService].images,
        ...services[activeService].images,
    ];

    return (
        <section className="checkout-work">

            {/* HEADING */}
            <div className="checkout-heading">
                <h2>
                    CHECKOUT OUR WORK
                    <span className="underline" />
                </h2>
                <p>Our Operation & warehouse area is spread over 60000 square feet area.</p>
            </div>

            {/* SERVICES – DESKTOP */}
            <div className="services-tabs desktop-services">
                {services.map((service, index) => (
                    <button
                        key={service.name}
                        data-text={service.name}
                        className={`service-text ${index === activeService ? "active" : ""}`}
                        onClick={() => setActiveService(index)}
                    >
                        {service.name}
                    </button>
                ))}
            </div>


            {/* SERVICES – MOBILE SLIDER (WITH WORKING ARROWS) */}
            <div className="services-tabs mobile-services">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    loop
                    onSwiper={setServicesSwiper}
                    className="services-swiper"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={service.name}>
                            <button
                                data-text={service.name}
                                className={`service-text ${index === activeService ? "active" : ""}`}
                                onClick={() => setActiveService(index)}
                            >
                                {service.name}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button ref={servicePrevRef} className="services-prev">←</button>
                <button ref={serviceNextRef} className="services-next">→</button>
            </div>


            {/* MAIN IMAGE SLIDER */}
            <div className="slider-wrapper">
                <Swiper
                    key={activeService} // 🔥 reset on service change
                    modules={[Navigation, Autoplay]}
                    centeredSlides
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    onSwiper={setWorkSwiper}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                    }}
                    className="work-swiper"
                >
                    {loopImages.map((img, i) => (
                        <SwiperSlide key={i}>
                            <div className="work-slide">
                                <img src={`${img}?auto=format&fit=crop&w=900&q=80`} alt="Work" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button ref={imagePrevRef} className="work-prev">←</button>
                <button ref={imageNextRef} className="work-next">→</button>
            </div>

        </section>
    );
};

export default CheckoutOurWork;