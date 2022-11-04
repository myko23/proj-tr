const removeColon = (time) => {
	return time.replace(":", "");
};

export const diffTime = (time1, time2) => {
	const start = removeColon(time1);
	const end = removeColon(time2);

	let hours = parseInt(end / 100 - start / 100);
	let mins = (end % 100) - (start % 100);
	if (end % 100 < start % 100) {
		mins = 60 - (start % 100) + (end % 100);
	}
	return `${hours} hours, ${mins} minutes`;
};
