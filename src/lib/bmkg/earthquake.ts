export async function getLatestEarthquake() {
  try {
    const response = await fetch(
      "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json",
      {
        cache: "no-store",
      },
    );

    const data = await response.json();

    return data.Infogempa.gempa;
  } catch (error) {
    console.error("BMKG Fetch Error:", error);

    return null;
  }
}
