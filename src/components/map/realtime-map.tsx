"use client";

import { useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type EarthquakeData = {
  Wilayah: string;
  Magnitude: string;
  Coordinates: string;
  Potensi: string;
};

export default function RealtimeMap() {
  const [earthquake, setEarthquake] = useState<EarthquakeData | null>(null);

  useEffect(() => {
    async function fetchEarthquake() {
      try {
        const response = await fetch(
          "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json",
        );

        const data = await response.json();

        setEarthquake(data.Infogempa.gempa);
      } catch (error) {
        console.error("BMKG Map Error:", error);
      }
    }

    fetchEarthquake();
  }, []);

  const coordinates = earthquake?.Coordinates?.split(",").map((coord) =>
    parseFloat(coord.trim()),
  );

  return (
    <div className="h-[400px] w-full overflow-hidden rounded-2xl">
      <MapContainer
        center={[-2.5489, 118.0149]}
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {coordinates && (
          <Marker position={[coordinates[0], coordinates[1]]} icon={markerIcon}>
            <Popup>
              <div className="space-y-2">
                <h3 className="font-bold">{earthquake?.Wilayah}</h3>

                <p>Magnitude: {earthquake?.Magnitude}</p>

                <p>{earthquake?.Potensi}</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
