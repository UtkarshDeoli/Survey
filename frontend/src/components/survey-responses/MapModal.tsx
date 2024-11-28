import { GoogleMap } from '@react-google-maps/api';
import React from 'react'
import CustomModal from '../ui/Modal';

interface props {
    mapModalIsOpen: boolean;
    setMapModalIsOpen: (isOpen: boolean) => void;
    isLoaded: boolean;
}
function MapModal({mapModalIsOpen, isLoaded, setMapModalIsOpen}:props) {
  return (
    <CustomModal
    open={mapModalIsOpen}
    closeModal={() => setMapModalIsOpen(false)}
  >
    <div className="p-4 h-[60vh] flex justify-center items-center w-[50vw]">
      <div className="flex h-full w-full justify-center items-center flex-col gap-4">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: "400px",
              height: "400px",
            }}
            center={{
              lat: -3.745,
              lng: -38.523,
            }}
            zoom={10}
            onLoad={(map) => {
              console.log("gmap--->", map);
              const bounds = new window.google.maps.LatLngBounds();
              map.fitBounds(bounds);
            }}
            onUnmount={(map) => {
              // do your stuff before map is unmounted
            }}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  </CustomModal>
  )
}

export default MapModal