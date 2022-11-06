import React from "react";
import "./Table.css";
import cls from "classnames";

const Table = ({
	data,
	headers = [],
	selected,
	onRowClick = () => {},
	onRowDoubleClick = () => {},
}) => {
	const renderHeader = () => {
		return headers.map((item, bar) => {
			if (bar === 0) return null;
			return (
				<th className="Table__header-item" key={item}>
					{item}
				</th>
			);
		});
	};

	const renderRowData = () => {
		return data.map((item, index) => {
			return (
				<tr
					className={cls(
						"Table__row",
						item.id === selected && "Table__row--selected"
					)}
					key={index}
					onClick={() => onRowClick(item.id)}
					onDoubleClick={onRowDoubleClick}
				>
					{Object.values(item).map((foo, bar) => {
						if (bar === 0) return null;

						return (
							<td className="Table__item" key={bar}>
								{foo}
							</td>
						);
					})}
				</tr>
			);
		});
	};
	return (
		<table className="Table">
			<thead>
				<tr className="Table__header-row">{renderHeader()}</tr>
			</thead>
			<tbody>{renderRowData()}</tbody>
		</table>
	);
};

export default Table;
