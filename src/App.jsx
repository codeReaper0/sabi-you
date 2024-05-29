import HeroBg from "/public/images/hero.jpeg";
import Logo from "/public/images/logo.png";
import Agama from "/public/images/agama.png";
import lolade from "/public/images/lolade.png";
import dipo from "/public/images/dipo.png";
import ife from "/public/images/ife.png";
import mask1 from "/public/images/mask1.png";
import mask2 from "/public/images/mask2.png";
import sabi from "/public/images/sabi.png";
import avatar from "/public/images/avatar.png";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import {useEffect, useRef} from "react";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    scrollRef.current = scroll;

    return () => {
      scroll.destroy();
    };
  }, []);

  const scrollToWaitlist = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo("#waitlist");
    }
  };

  return (
    <main className="" data-scroll-container>
      {/* Hero Section */}
      <section
        data-scroll-section
        className="relative max-w-screen h-screen overflow-hidden"
      >
        <div className="absolute inset-0 z-10">
          <img
            src={HeroBg}
            alt=""
            className="object-cover w-full h-full opacity-[6%]"
          />
        </div>
        <div className="absolute inset-0 hero-cover"></div>
        <div className="absolute inset-0 z-20 flex flex-col border-b-[10px] border-b-[#6F2B8D]">
          <header className="bg-black/40 px-[120px] py-3 2xl:py-6 flex items-center justify-between z-30">
            <img src={Logo} alt="" />
            <button
              onClick={scrollToWaitlist}
              className="text-[#24162A] py-3 px-6 text-sm rounded-3xl bg-white hover:bg-[#6F2B8D] hover:text-white transition-colors duration-300 ease-out font-semibold"
            >
              Join waitlist
            </button>
          </header>

          {/* Main section */}
          <div className="flex-grow flex flex-col justify-between mt-4 2xl:mt-9">
            <div className="relative w-max mx-auto">
              <h2 className="text-center text-white font-medium text-[42px] tracking-[12px]">
                COMING SOON
              </h2>
              <img
                src={Agama}
                alt=""
                className="absolute right-0 rotate-[-6deg] -bottom-8"
                width={59}
                height={68}
              />
            </div>

            <div className="flex items-end justify-between px-16 -mb-2">
              {/* Lolade */}
              <div className="flex">
                <img
                  src={lolade}
                  alt=""
                  className="w-auto h-[65vh] 2xl:h-auto"
                />
                <div className="max-w-[242px] -mt-4 2xl:-mt-14">
                  <p className="text-right text-white/80 font-bright text-[26px] mb-4">
                    “A NEW ADVENTURE, NOT LIKE YOU’D EXPECT. I’M SURE LIKE ME,
                    YOU WAN SABI WHO YOU ARE TRULY”
                  </p>
                  <p className="text-right text-[#6F2B8D] font-bold text-2xl">
                    LOLADE
                  </p>
                  <span>
                    <svg
                      width="120"
                      height="126"
                      viewBox="0 0 120 126"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.6529 93.619L21.6529 102.619C19.8196 106.952 20.7529 113.019 39.1529 102.619C57.5529 92.2189 82.4862 58.619 92.6529 43.119L118.653 1.61902C116.653 -1.04765 107.153 3.51902 85.1529 43.119C61.1529 79.119 36.8196 91.7857 27.6529 93.619Z"
                        stroke="white"
                      />
                      <path
                        d="M2.09005 122.94L1.10698 124.198C0.806591 124.803 0.959514 125.651 3.97427 124.198C6.98903 122.745 11.0742 118.05 12.74 115.885L17 110.086C16.6723 109.714 15.1158 110.352 11.5112 115.885C7.57888 120.914 3.59197 122.684 2.09005 122.94Z"
                        stroke="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* Dipo */}
              <div className="flex items-center gap-8">
                <div className="max-w-[203px] -mt-14">
                  <span className="flex justify-end -mr-8 mb-4">
                    <svg
                      width="107"
                      height="84"
                      viewBox="0 0 107 84"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.20018 71.9341L1.40019 77.376C-0.0664688 79.9962 2.39641 88.6015 10.4785 77.376C17.2782 67.9317 23.2778 56.1408 31.2778 45.8616L79 16.3053C77.4 14.6929 44.878 18.8938 27.2781 42.8383C8.07811 64.6061 13.5335 70.8255 6.20018 71.9341Z"
                        stroke="white"
                      />
                      <path
                        d="M88.5218 10.8845L87.2836 11.8918C86.856 12.4152 86.8166 13.2756 90.079 12.5296C93.3415 11.7837 98.3687 8.11574 100.474 6.37502L105.918 1.66985C105.681 1.23372 102.634 0.797925 97.8888 5.39008C92.9361 9.41897 90.043 10.9689 88.5218 10.8845Z"
                        stroke="white"
                      />
                    </svg>
                  </span>
                  <p className="text-right text-white/80 font-bright text-[26px] mb-4">
                    “JOIN ME IN FINDING OUT WHAT MAKES US WHO WE ARE”
                  </p>
                  <p className="text-right text-[#6F2B8D] font-bold text-2xl">
                    DIPO
                  </p>
                </div>

                <img src={dipo} alt="" className="w-auto h-[65vh] 2xl:h-auto" />
              </div>
              {/* Ife */}
              <div className="flex">
                <div className="max-w-[174px] -mt-14 2xl:-mt-28">
                  <p className="text-left text-white/80 font-bright text-[26px] mb-4">
                    “BABAMI, LOOK!! THIS AGAMA IS DOING BALLET!!”
                  </p>
                  <p className="text-right text-[#6F2B8D] font-bold text-2xl mb-4">
                    IFE
                  </p>
                  <span className="flex justify-end">
                    <svg
                      width="66"
                      height="113"
                      viewBox="0 0 66 113"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5604 37.1104L8.59098 30.4894C7.96771 27.552 12.8727 20.0648 17.2605 33.1827C20.9522 44.2192 23.1836 57.2591 27.7739 69.4489L64.5789 111.833C62.5725 112.898 32.761 99.2375 23.0573 71.1495C11.1797 44.6655 18.2346 40.3446 11.5604 37.1104Z"
                        stroke="white"
                      />
                      <path
                        d="M7.45381 19.6429L8.25964 21.0206C8.71147 21.5232 9.55568 21.694 9.3179 18.3558C9.08012 15.0176 6.2249 9.48815 4.82702 7.14073L1.01047 1.04153C0.54326 1.20857 -0.353813 4.15308 3.4579 9.54519C6.68121 15.0562 7.77008 18.1524 7.45381 19.6429Z"
                        stroke="white"
                      />
                    </svg>
                  </span>
                </div>

                <img src={ife} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        data-scroll-section
        className="relative h-screen overflow-hidden"
        id="waitlist"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#6F2B8D02] to-[#6F2B8D20]"></div>
        {/* Form */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-[439px] h-max bg-white border border-[#F7E3FF] p-7 -mt-32 rounded-3xl">
            <div className="flex items-end justify-center gap-2 mb-5">
              <img src={avatar} alt="" />
              <p className="text-sm">
                Join over <b>700</b> People on the <b>Waitlist</b>
              </p>
            </div>
            <p className="text-center text-[26px] font-medium text-[#6F2B8D] mb-3">
              GET A NOTIFICATION
            </p>
            <p className="mx-auto text-center text-sm text-[#8E8E8E] max-w-[305px]">
              Want to be the first to know when we launch? <b>Signup</b> to join
              the waitlist
            </p>

            <form action="" className="mt-9">
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-12 p-4 mb-3 text-sm bg-[#F8F8F9] border border-[#E9E9E9] rounded-lg"
              />

              <button className="w-full h-12 text-sm text-white bg-[#6F2B8D] rounded-lg flex items-center justify-center">
                Join the waitlist
              </button>
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 left-28">
          <img src={sabi} alt="" />
        </div>
        <div className="absolute top-28 left-0">
          <div className="relative">
            <p className="text-[169px] font-semibold text-[#C2C2C21F]">GET</p>
            <img src={mask1} alt="" className="absolute top-0 -right-16" />
          </div>
        </div>

        <div className="absolute bottom-7 right-0">
          <div className="relative">
            <p className="text-[169px] font-semibold text-[#C2C2C21F]">
              NOTIFIED
            </p>
            <img src={mask2} alt="" className="absolute -top-5 right-[184px]" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
