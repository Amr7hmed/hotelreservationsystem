import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";

export default function FormCurent() {
  const [selectedCountry, setSelectedCountry] = useState(Country.getAllCountries()[64]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  
  }, [selectedCountry]);
  return (
    <div className="App">
      <Select
        options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedState}
        onChange={(item) => {
          setSelectedState(item);
        }}
      />
    </div>
  );
}
