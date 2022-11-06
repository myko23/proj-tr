import _ from "lodash";
import { convertDate } from "./convertDate";

const sortListByDate = (list, date) => {
	const convertedDate = convertDate(date);
	return _.filter(list, (item) => item.date === convertedDate);
};

export default sortListByDate;
