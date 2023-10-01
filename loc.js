

// Check if geolocation is supported by the browser
if ("geolocation" in navigator) {
  // Prompt user for permission to access their location
  navigator.geolocation.getCurrentPosition(
    // Success callback function
    (position) => {
      // Get the user's latitude and longitude coordinates
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Do something with the location data, e.g. display on a map
      window.alert(`Latitude: ${lat}, longitude: ${lng}`);
    },
    // Error callback function
    (error) => {
      // Handle errors, e.g. user denied location sharing permissions
      window.alert("Error getting user location:", error);
    }
  );
} else {
  // Geolocation is not supported by the browser
  window.alert("Geolocation is not supported by this browser.");
}
