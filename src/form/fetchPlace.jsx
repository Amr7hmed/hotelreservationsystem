
export const fetchPlace = async (text) => {
    try {
      const res = await fetch(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    } catch (err) {
      return { error: "Unable to retrieve places" };
    }
  };