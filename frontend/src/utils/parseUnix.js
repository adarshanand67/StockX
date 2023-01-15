export const parseUnixTime = (date) => {
  // Convert 2022-09-02 to date obj
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);
  const dateObj = new Date(`${month}/${day}/${year}`);
  // Convert date obj to unix time
  const unixTime = dateObj.getTime();
  return unixTime;
};
