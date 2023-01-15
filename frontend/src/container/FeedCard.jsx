import { Card,Button } from "flowbite-react";
import React from "react";
import proptypes from "prop-types";
import { HiOutlineArrowRight } from "react-icons/hi";

const FeedCard = ({ imgSrc, title, description, LearnMoreURL }) => {
  return (
    <Card imgSrc={imgSrc}>
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button href={LearnMoreURL} className="mt-4">
        Learn More
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Card>
  );
};

// Default props
FeedCard.defaultProps = {
  imgSrc: "https://picsum.photos/200/300",
  title: "Title",
  description: "Description",
  LearnMoreURL: "/",
};

export default FeedCard;
