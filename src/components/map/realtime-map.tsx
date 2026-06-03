"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const locations = [
  {
    name: "Aceh",
    position: [5.5483, 95.3238],
    color: "#ef4444",
    status: "Awas",
  },
  {
    name: "Bandung",
    position: [-6.9175, 107.6191],
    color: "#facc15",
    status: "Waspada",
  },
  {
    name: "Sulawesi Tengah",
    position: [-1.43, 121.4456],
    color: "#22c55e",
    status: "Normal",
  },
];

export default function RealtimeMap() {
  return (
    <MapContainer
      center={[-2.5489, 118.0149]}
      zoom={5}
      scrollWheelZoom={false}
      attributionControl={false}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

      {locations.map((location, index) => (
        <CircleMarker
          key={index}
          center={location.position as [number, number]}
          radius={10}
          pathOptions={{
            color: location.color,
            fillColor: location.color,
            fillOpacity: 1,
          }}
        >
          <Popup>
            <div className="text-sm">
              <h3 className="font-bold">{location.name}</h3>

              <p>Status: {location.status}</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
