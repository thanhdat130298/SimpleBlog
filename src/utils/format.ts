import moment from "moment";
export const datetime = (date: string) =>
  moment(date).format("MMMM Do YYYY, h:mm:ss a");
