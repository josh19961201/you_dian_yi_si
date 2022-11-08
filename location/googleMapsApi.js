import axios from 'axios'
import 'dotenv/config'

export default async (address) => {
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`
    )

    console.log(
      data.results[0].geometry.location.lat,
      data.results[0].geometry.location.lng
    )
  } catch (error) {
    console.log(error)
  }
}