const os = require('os');

console.log('WiFi Information:');
console.log('-----------------');

// Get the WiFi interface
const wifiInterface = os.networkInterfaces().wlan0;

// Check if WiFi is enabled
if (!wifiInterface) {
  console.log('WiFi is not enabled on this device.');
} else {
  // Print the WiFi IP address
  const wifiAddress = wifiInterface[0].address;
  console.log(`IP address: ${wifiAddress}`);

  // Print the WiFi netmask
  const wifiNetmask = wifiInterface[0].netmask;
  console.log(`Netmask: ${wifiNetmask}`);

  // Print the WiFi MAC address
  const wifiMac = wifiInterface[0].mac;
  console.log(`MAC address: ${wifiMac}`);
}
