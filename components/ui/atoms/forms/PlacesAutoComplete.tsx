import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const PlacesAutocompleteComponent = () => {
	const [address, setAddress] = useState("");

	const handleSelect = (selectedAddress) => {
		setAddress(selectedAddress);
	};

	const handleChange = (newAddress) => {
		setAddress(newAddress);
	};

	return (
		<PlacesAutocomplete
			apiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY}
			value={address}
			onChange={handleChange}
			onSelect={handleSelect}
		>
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
				console.log(suggestions);

				return (
					<div>
						<input {...getInputProps({ placeholder: "Enter an address" })} />
						<div>
							{loading && <div>Loading...</div>}
							{suggestions.map((suggestion, i) => (
								<div key={i} {...getSuggestionItemProps(suggestion)}>
									{suggestion.description}
								</div>
							))}
						</div>
					</div>
				);
			}}
		</PlacesAutocomplete>
	);
};

export default PlacesAutocompleteComponent;
