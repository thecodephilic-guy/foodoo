const apiKey = process.env.REACT_APP_OPENCAGE_API_KEY;

export default async function (latitude, longitude) {
  const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=${apiKey}`);
  const data = await response.json();
  return data;
}
