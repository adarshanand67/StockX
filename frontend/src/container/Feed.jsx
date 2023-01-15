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
          imgSrc={
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title={"Opening Price"}
          description={
            "The price at which a stock begins trading on the stock market for a given trading session. It is the first price at which shares of a stock are traded on the market on a given trading day."
          }
          LearnMoreURL={"/"}
        />
        <FeedCard
          imgSrc={
            "https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          }
          title={"Closing Price"}
          description={
            "The price at which a stock closes trading on the stock market for a given trading session. It is the last price at which shares of a stock are traded on the market on a given trading day."
          }
          LearnMoreURL={"/"}
        />
        <FeedCard
          imgSrc={
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
          title={"High Price"}
          description={
            "The highest traded price of a stock during a trading session."
          }
          LearnMoreURL={"/"}
        />
        <FeedCard
          imgSrc={
            "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
          }
          title={"Low Price"}
          description={
            "The lowest traded price of a stock during a trading session."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={
            "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b2NrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          }
          title={"Volume"}
          description={
            "The number of shares of a stock that are traded during a trading session."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={
            "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGludmVzdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          }
          title={"Adj Close"}
          description={
            "The adjusted closing price is the closing price that has been adjusted to include any distributions and corporate actions that occurred at any time before the next day's open."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={
            "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title={"52 Week High"}
          description={
            "The highest price at which a stock has traded in the previous 52 weeks."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={
            "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b2NrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          }
          title={"52 Week Low"}
          description={
            "The lowest price at which a stock has traded in the previous 52 weeks."
          }
          LearnMoreURL={"/"}
        />

        <FeedCard
          imgSrc={
            "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
          }
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
