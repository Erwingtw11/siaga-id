"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function RealtimeMap() {
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

        <Marker position={[-5.45, 105.27]}>
          <Popup>Gempa terdeteksi di Lampung Selatan</Popup>
        </Marker>

        <Marker position={[4.6951, 96.7494]}>
          <Popup>Aktivitas gempa di Aceh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
