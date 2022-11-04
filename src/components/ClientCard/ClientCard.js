import React from "react";
import "./ClientCard.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ClientCard = ({
	onRemove,
	client = "Client",
	abv = "abv",
	setClientList = () => {},
}) => {
	return (
		<div className="ClientCard">
			<div className="ClientCard__details">
				<h1 className="ClientCard__client">{client}</h1>
				<h2 className="ClientCard__abv">{abv}</h2>
			</div>
			<PrimaryButton onClick={onRemove} className="ClientCard__button">
				Remove
			</PrimaryButton>
		</div>
	);
};

export default ClientCard;
