import { MapContainer, Marker, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap(props: any) {
  return <MapContainer center={[36.461474, 10.764123]} zoom={16} scrollWheelZoom={true} style={{
    height: "70%",
    width:"100%",
  }} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[36.461474, 10.764123]}>
      A pretty CSS3 popup. <br /> Easily customizable.
  </Marker>
</MapContainer>
}