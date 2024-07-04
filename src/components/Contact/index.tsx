"use client";
import langData from "../../langs/data.json"
import dynamic from "next/dynamic";
import { useLangContext } from '@/context/languageContext';
const MyMap = dynamic(() => import("../MyMap/MyMap"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

const Contact = () => {
  const { lang  } = useLangContext();
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex w-full flex-wrap space-x-4 justify-center items-center">
          <div
            className="max-w-3xl mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s
              "
          >
            <h2 className="mb-3 text-2xl font-medium text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            {langData[lang].contact_t0}
            </h2>
            <p className="mb-12 text-base  text-body-color">
            {langData[lang].contact_d0}
            </p>
            <form>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-md  text-dark dark:text-white"
                    >
                      {langData[lang].contact_nme}
                    </label>
                    <input
                      type="text"
                      placeholder={langData[lang].contact_nme_tt}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base font-light text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-md  text-dark dark:text-white"
                    >
                      {langData[lang].contact_eml}
                    </label>
                    <input
                      type="email"
                      placeholder={langData[lang].contact_eml_tt}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base font-light text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-md  text-dark dark:text-white"
                    >
                     {langData[lang].contact_msg}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder={langData[lang].contact_msg_tt}
                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-md font-light text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button className="rounded-sm bg-primary px-9 py-4 text-base text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                  {langData[lang].contact_cta}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="h-full w-full max-w-xl">
            <MyMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
