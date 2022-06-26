async function getLocation() {
    const response = await axios.get("https://geo.ipify.org/api/v2", {
        params: {
            apiKey: "at_Ra01PWZMXAn9vPlnTQTYZSjFkyz56",
            ipAddress: "217.97.105.51 "
        }
    });
    console.log(response);
}
getLocation();

//# sourceMappingURL=index.75f6a523.js.map
