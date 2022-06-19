import { useState, useEffect } from "react";

export function SelectFilter({ titleSelect, options, wordToFilter }) {
	const [valueSelected, setValueSelected] = useState("");

	const generateID = (value) => {
		return String(Math.round(Math.random() * 10000)).concat(value);
	};
	const handleChangeSelectedItemFromList = (value) => {
		setValueSelected(value);
		wordToFilter(value);
	};

	useEffect(() => {
		setValueSelected("");
	}, [options]);

	return (
		<>
			<select
				onChange={(e) =>
					handleChangeSelectedItemFromList(e.target.value)
				}
				value={valueSelected}
				className="form-select"
				aria-label="Default select example"
			>
				<option value="">{titleSelect}</option>
				{options?.map((option) => (
					<option value={option.value} key={generateID()}>
						{option.label}
					</option>
				))}
			</select>
		</>
	);
}
