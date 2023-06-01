import React from "react";

import { Button, Text, Fall } from "components";

const Home1Page = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-end mx-auto p-[154px] md:px-10 sm:px-5 w-full">
        <div className="h-[322px] md:h-[336px] mt-3.5 relative w-[71%] md:w-full">
          <div className="absolute h-[322px] inset-y-[0] left-[23%] my-auto w-[41%]">
            <div className="absolute h-[322px] inset-y-[0] left-[0] my-auto w-[95%]">
              <div className="bg-cyan_A200 h-[322px] m-auto rounded-[161px] w-full"></div>
              <div className="absolute bg-teal_900 h-[283px] inset-y-[0] left-[3%] my-auto rounded-[141px] w-[88%]"></div>
            </div>
            <div className="absolute h-[263px] inset-y-[0] my-auto right-[0] w-[95%]">
              <div className="bg-blue_gray_600 h-[263px] m-auto rounded-[154px] w-full"></div>
              <div className="absolute bottom-[4%] flex flex-col gap-[39px] justify-start left-[11%] w-[62%]">
                <div className="bg-white_A700_7d h-2.5 md:ml-[0] ml-[50px] mr-[129px] rounded-[50%] w-2.5"></div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-white_A700_7d h-2.5 ml-2.5 md:ml-[0] rounded-[50%] w-2.5"></div>
                  <div className="bg-white_A700_7d h-2.5 mt-[72px] rounded-[50%] w-2.5"></div>
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[5px] mt-8 w-[98%] md:w-full">
                    <div className="bg-white_A700_7d h-2.5 mb-2.5 rounded-[50%] w-2.5"></div>
                    <div className="bg-white_A700_7d h-2.5 mb-2.5 rounded-[50%] w-2.5"></div>
                    <div className="bg-white_A700_7d h-2.5 mt-2.5 rounded-[50%] w-2.5"></div>
                  </div>
                  <div className="flex flex-row gap-[41px] items-start justify-start md:ml-[0] ml-[55px] mt-[15px] w-[33%] md:w-full">
                    <div className="bg-white_A700_7d h-2.5 mb-2.5 rounded-[50%] w-2.5"></div>
                    <div className="bg-white_A700_7d h-2.5 mt-2.5 rounded-[50%] w-2.5"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white_A700_7d h-2.5 left-[44%] rounded-[50%] top-[0] w-2.5"></div>
            </div>
          </div>
          <Text
            className="absolute bottom-[22%] inset-x-[0] mx-auto text-white_A700 w-max"
            as="h3"
            variant="h3"
          >
            Alert System
          </Text>
        </div>
        <Text className="mt-[99px] text-red_700">
          <Fall />
        </Text>
      </div>
    </>
  );
};

export default Home1Page;
