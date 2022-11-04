import _ from "lodash";
import React, { useState } from "react";
import ClientCard from "../../components/ClientCard/ClientCard";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./Clients.css";

const Clients = ({ clientList, setClientList }) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [company, setCompany] = useState("");
	const [abv, setAbv] = useState("");

	const onRemoveClient = (id) => {
		const newList = _.filter(clientList, (item) => item.id !== id);
		setClientList(newList);
	};

	const renderClientCards = () => {
		return clientList.map((item) => {
			return (
				<ClientCard
					key={item.id}
					onRemove={() => onRemoveClient(item.id)}
					setClientList={setClientList}
					client={item.client}
					abv={item.abv}
				/>
			);
		});
	};

	const onAddClick = () => {
		if (company === "" || abv === "") {
			return setErrorMessage("Please fill in the fields");
		}

		const newClient = {
			id: clientList[clientList.length - 1]?.id + 1 || 0,
			client: company,
			abv,
		};

		const newClientList = [...clientList, newClient];

		setClientList(newClientList);

		setCompany("");
		setAbv("");
		setErrorMessage("");
	};

	return (
		<div className="Clients">
			<SectionHeader>Clients</SectionHeader>
			<div className="Clients__content">
				<div className="Clients__input-form">
					<InputWithLabel
						className="Clients__input"
						label="Company"
						value={company}
						setValue={setCompany}
					/>
					<InputWithLabel
						className="Clients__input"
						label="ABV"
						value={abv}
						setValue={setAbv}
					/>

					<div className="Clients__button-set">
						<PrimaryButton width="100%" onClick={onAddClick}>
							add
						</PrimaryButton>
					</div>
					{errorMessage !== "" && (
						<p className="Client__message">{errorMessage}</p>
					)}
				</div>
				<div className="Clients__client-form">
					{renderClientCards()}
				</div>
			</div>
		</div>
	);
};

export default Clients;
