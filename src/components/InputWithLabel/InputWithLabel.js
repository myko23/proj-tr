import React from "react";
import "./InputWithLabel.css";
import cls from "classnames";
import TimePicker from "react-time-picker";

const InputWithLabel = ({
	label = "default",
	className,
	value,
	setValue,
	disabled = false,
	type = "text",
	options = ["foo", "bar", "baz"],
	row = "2",
}) => {
	const renderInput = () => {
		switch (type) {
			case "text":
				return (
					<input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						type="text"
						className="InputWithLabel__input"
						placeholder={label}
						disabled={disabled}
					/>
				);
			case "select":
				return (
					<select
						value={value}
						onChange={(e) => setValue(e.target.value)}
						className="InputWithLabel__input"
						disabled={disabled}
					>
						{options.map((item) => {
							return (
								<option key={item} value={item}>
									{item}
								</option>
							);
						})}
					</select>
				);
			case "textarea":
				return (
					<textarea
						value={value}
						onChange={(e) => setValue(e.target.value)}
						type="text"
						className="InputWithLabel__input"
						placeholder={label}
						disabled={disabled}
						row={row}
					>
						{label}
					</textarea>
				);
			case "timepicker":
				return (
					<TimePicker
						className="InputWithLabel__date"
						value={value}
						onChange={setValue}
					/>
				);
			case "date":
				return (
					<input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						type="date"
						className="InputWithLabel__input"
					/>
				);
			default:
				return (
					<input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						type="text"
						className="InputWithLabel__input"
						placeholder={label}
						disabled={disabled}
					/>
				);
		}
	};
	return (
		<div className={cls("InputWithLabel", className)}>
			<p className="InputWithLabel__label">{label}</p>
			{renderInput()}
		</div>
	);
};

export default InputWithLabel;
