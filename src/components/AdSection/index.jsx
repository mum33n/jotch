// import { Carousel } from 'react-responsive-carousel';

import Carousel from 'react-multi-carousel';

function AdSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full border-2 md:w-2/3 mx-auto text-white p-5 rounded-xl">
      <Carousel
        className="w-full"
        dynamicHeight={false}
        // infiniteLoop={true}
        itemClass="slider-item"
        centerMode={true}
        showStatus={false}
        responsive={responsive}
        swipeable={true}
        showDots={true}
      >
        <div className="text-white w-[100%]">
          <div className="flex items-center justify-center  w-[100%] gap-3">
            <img
              src="/logo1.png"
              className="rounded-full w-[120px] h-[120px]"
              alt="logo"
            />
            <div className="flex-1 montserrat flex flex-col gap-2">
              <div className="font-bold text-xs md:text-lg">Jimpo Sonic</div>
              <div className="text-xs md:text-lg">
                Jimpo is created by decentralized team of builders and believers
                on Sonic: Jimpo is for the people and by the people.
              </div>
              <div>
                <a
                  className="bg-[#FFCA56] p-2 rounded-lg text-black mt-4 text-xs md:text-lg"
                  href="https://t.me/Jimpo_Sonic"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
      </Carousel>
    </div>
  );
}

export default AdSection;
