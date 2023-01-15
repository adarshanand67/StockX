import React from "react";
import FeedCard from "./FeedCard";

const Feed = () => {
  return (
    <>
      {/* create heading glossary */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Glossary</h1>
      </div>
      <div className="grid grid-cols-3 gap-10 m-10">
        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          title={"Opening Price"}
          description={
            "The price at which a stock begins trading on the stock market for a given trading session. It is the first price at which shares of a stock are traded on the market on a given trading day."
          }
          LearnMoreURL={"/"}
        />
        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-2.jpg"}
          title={"Closing Price"}
          description={
            "The price at which a stock closes trading on the stock market for a given trading session. It is the last price at which shares of a stock are traded on the market on a given trading day."
          }
          LearnMoreURL={"/"}
        />
        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-3.jpg"}
          title={"High Price"}
          description={
            "The highest traded price of a stock during a trading session."
          }
          LearnMoreURL={"/"}
        />
        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          title={"Low Price"}
          description={
            "The lowest traded price of a stock during a trading session."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          title={"Volume"}
          description={
            "The number of shares of a stock that are traded during a trading session."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          title={"Adj Close"}
          description={
            "The adjusted closing price is the closing price that has been adjusted to include any distributions and corporate actions that occurred at any time before the next day's open."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-3.jpg"}
          title={"52 Week High"}
          description={
            "The highest price at which a stock has traded in the previous 52 weeks."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          title={"52 Week Low"}
          description={
            "The lowest price at which a stock has traded in the previous 52 weeks."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          title={"Volatility"}
          description={
            "Volatility is a statistical measure of the dispersion of returns for a given security or market index. Volatility can either be measured by using the standard deviation or variance between returns from that same security or market index."
          }
          LearnMoreURL={"/"}
        />
      </div>
    </>
  );
};

export default Feed;
