export function CheckDuration(duration, data) {
  if (duration == "1D" && data.length > 1) {
    // only the last day
    data.splice(0, data.length - 1);
  } else if (duration == "1W" && data.length > 6) {
    // only the last 7 days
    data.splice(0, data.length - 6);
  } else if (duration == "1M" && data.length > 30) {
    // only the last 30 days
    data.splice(0, data.length - 30);
  } else if (duration == "3M" && data.length > 90) {
    // only the last 90 days
    data.splice(0, data.length - 90);
  } else if (duration == "6M" && data.length > 180) {
    // only the last 180 days
    data.splice(0, data.length - 180);
  } else if (duration == "1Y" && data.length > 365) {
    // only the last 365 days
    data.splice(0, data.length - 365);
  } else if (duration == "2Y" && data.length > 730) {
    // only the last 730 days
    data.splice(0, data.length - 730);
  } else if (duration == "5Y" && data.length > 1825) {
    // only the last 1825 days
    data.splice(0, data.length - 1825);
  }
}
