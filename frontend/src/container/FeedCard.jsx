import { Button, Card } from "flowbite-react";
import proptypes from "prop-types";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const FeedCard = ({ imgSrc, title, description, LearnMoreURL }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-evenly">
        <img
          src={imgSrc}
          alt="feed"
          className="w-full h-40 object-cover rounded-lg"
        />
        <h5 className="text-2xl text-center font-bold tracking-tight my-4 text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-center">
          <Button href={LearnMoreURL} className="mt-4 w-5/6">
            Learn More
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default FeedCard;
