import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Heading from './Components/Heading'
import Empty from './Components/Empty'

function App() {
  const [count, setCount] = useState(0)

  const data = [
    {
      id: "p1",
      price: "₹ 35,758",
      name: "Agra",
      description: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri",
      image:"https://c1.wallpaperflare.com/preview/109/140/931/taj-mahal-india-agra-tomb.jpg"
    },
    {
      id: "p2",
      price: "₹ 42,500",
      name: "Delhi",
      description: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.",
      image:"https://wallpaperaccess.com/full/3591346.jpg"
    },
    {
      id: "p3",
      price: "₹ 48,200",
      name: "Mumbai",
      description: "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924.",
      image:"https://i.pinimg.com/originals/6d/fb/e0/6dfbe0fd05490ab05da32b00752b0b6c.jpg"
    },
    {
      id: "p4",
      price: "₹ 39,300",
      name: "Kolkata",
      description: "Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries, and cultural festivals.",
      image:"https://wallpapercave.com/wp/wp4631420.jpg"
    },
    {
      id: "p5",
      price: "₹ 36,900",
      name: "Jaipur",
      description: "Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex.",
      image:"https://www.lasociedadgeografica.com/blog/uploads/2021/03/jaipur.jpg"
    },
    {
      id: "p6",
      price: "₹ 34,900",
      name: "Varanasi",
      description: "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites.",
      image:"https://www.itl.cat/pngfile/big/136-1363329_varanasi-india-national-geographic-hd-wallpapers-ganges-river.jpg"
    },
    {
      id: "p7",
      price: "₹ 38,600",
      name: "Udaipur",
      description: "Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it’s set around a series of artificial lakes and is known for its lavish royal residences.",
      image:"https://wallpapersbook.com/wp-content/uploads/2020/09/udaipur-wallpaper-hd-17-1122x716.jpg"
    },
    {
      id: "p8",
      price: "₹ 41,800",
      name: "Hyderabad",
      description: "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital.",
      image:"https://wallpapercave.com/wp/wp10257499.jpg"
    },
    {
      id: "p9",
      price: "₹ 37,400",
      name: "Chennai",
      description: "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost.",
      image:"https://1.bp.blogspot.com/-D_MRXu7fy-g/Vxjrmvnie9I/AAAAAAAABAw/j2GYwgkKbGY9Uk0grh-jgaymGAzORJEwACLcB/s1600/Kapaleeshwarar%2BTemple.jpg"
    }
  ];

  const [tours , setTours] = useState(data);

   
  function removeTour(id){
    const newTours = tours.filter(tour => tour !== tour.id);
    setTours(newTours);
  }

  return (
    <div className='w-full h-screen bg-zinc-100 py-16 overflow-y-auto'>

      <Heading/>

      <div className='w-[90%] flex gap-1 flex-wrap m-auto justify-center'>
        {tours.map((value, index)=>(
          <Card key={index} removeTour={removeTour} values={value}/>
        ))}
      </div>

      {/* <Empty/> */}

    </div>
  )
}

export default App
