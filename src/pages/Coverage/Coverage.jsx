import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from "react-router";


// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Coverage = () => {

    const serviceCenters = useLoaderData();
    console.log(serviceCenters);

    const bangladeshPosition = [23.685, 90.3563]; // Bangladesh center

    return (
        <div className="min-h-screen px-4 py-8 md:px-10">
            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
                We are available in 64 districts
            </h1>

            {/* Search Box (placeholder for now) */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search district..."
                    className="input input-bordered w-full max-w-md"
                />
            </div>

            {/* Map Container */}
            <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <MapContainer
                    center={bangladeshPosition}
                    zoom={7}
                    scrollWheelZoom={false}
                    className="w-full h-full"
                >
                    {/* Map Tiles */}
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Marker */}
                    {
                        serviceCenters.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong> <br /> {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;