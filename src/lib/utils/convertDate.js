import { DateTime } from "luxon";

export const convertDate = (date) => {
	return DateTime.fromFormat(date, "yyyy-MM-dd").toFormat("MM-dd-yyyy");
};
