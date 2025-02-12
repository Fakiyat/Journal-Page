import Header from "./componets/Header";
import Entry from "./componets/Entry";
// USe of Props for reusablity

function App() {
  return (
    <main>
      <Header />
      <div className="contacts">
        <Entry
          img={{
            src: "./src/images/Mount-Fuji-2.png",
            alt: "Mount Fuji",
          }}
          // img={Mountfuji}
          // alt="Mount Fuji"
          country="Japan"
          loaction="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          entry_title="Mount Fuji"
          trip_date="12 Jan, 2021 - 24 Jan, 2021"
          entry_text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
        />
        <Entry
          img={{
            src: "./src/images/Sydney.png",
            alt: "Sydney Opera House",
          }}
          // img="./src/images/Sydney.png"
          // alt="Sydney Opera House"
          country="Austrila"
          loaction="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
          entry_title="Sydney Opera House"
          trip_date="27 May, 2023 - 8 Jun, 2023"
          entry_text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
        />
        <Entry
          img={{
            src: "./src/Images/Geirangerfjord.png",
            alt: "Geirangerfjord",
          }}
          // img="./images/Geirangerfjord.png"
          // alt="Geirangerfjord"
          country="Norway"
          loaction="https://www.google.com/maps/place/Geirangerfjord/@62.1044979,6.7628428,11z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
          entry_title="Geirangerfjord"
          trip_date="01 Oct, 2024 - 18 Nov, 2024"
          entry_text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        />
        <Entry
          img={{
            src: "./src/images/Mt-everest.png",
            alt: "Mt Everest",
          }}
          // img="./images/Mt.everest.png"
          // alt="Mt Everest"
          country="Nepal & China (Tibet Autonomous Region)"
          loaction="https://www.google.com/maps/place/Mt+Everest/@27.9881198,86.9146754,15z/data=!3m1!4b1!4m6!3m5!1s0x39e854a215bd9ebd:0x576dcf806abbab2!8m2!3d27.9881206!4d86.9249751!16zL20vMGJsYmQ?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
          entry_title="Mt Everest"
          trip_date="29 Oct, 2025 - 18 Nov, 2025"
          entry_text="Mount Everest, the world's highest peak at 8,848.86 meters (29,031.7 feet), stands on the border of Nepal and Tibet (China) in the Himalayas. It is known as (Sagarmāthā) in Nepal and Chomolungma in Tibet, meaning (Forehead of the Sky) and (Goddess Mother of the World), respectively. First conquered on May 29, 1953, by Sir Edmund Hillary and Tenzing Norgay, it remains a dream for climbers worldwide."
        />
        <Entry
          img={{
            src: "./src/Images/Taj-Mahal.png",
            alt: "Taj Mahal",
          }}
          // img="./images/Taj-Mahal.png"
          // alt="Taj Mahal"
          country="Agra, Uttar Pradesh, India"
          loaction="https://www.google.com/maps/place/Taj+Mahal/@27.1751448,78.0395673,17z/data=!3m1!4b1!4m6!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
          entry_title="Taj Mahal"
          trip_date="29 Jan, 2025 - 18 Feb, 2025"
          entry_text="The Taj Mahal stands in the city of Agra. Emperor Shah Jahan built this white marble masterpiece in memory of his deceased wife Mumtaz Mahal. It symbolizes eternal love. It serves as evidence of the thoroughness and skill of Mughal architecture and masters."
        />
        <Entry
          img={{
            src: "./src/Images/Pyramid.png",
            alt: "Egypt",
          }} //this is how we wrap a object for reusability {{object}}
          // img="./images/Pyramid.png"
          // alt="Pyramid"
          country="Egypt"
          loaction="https://www.google.com/maps/place/The+Great+Pyramid+of+Giza/@29.9782658,31.1308034,17z/data=!4m10!1m2!2m1!1sgreat+pyramid+of+giza!3m6!1s0x14584587ac8f291b:0x810c2f3fa2a52424!8m2!3d29.9792354!4d31.1342611!15sChVncmVhdCBweXJhbWlkIG9mIGdpemFaFyIVZ3JlYXQgcHlyYW1pZCBvZiBnaXphkgEXaGlzdG9yaWNhbF9wbGFjZV9tdXNldW3gAQA!16zL20vMDM2bWs?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
          entry_title="Great Pyramid of Giza"
          trip_date="29 Apirl, 2025 - 18 June, 2025"
          entry_text="The Great Pyramid of Giza is the largest of the three pyramids at Giza. The other two pyramids are the Pyramid of Khafre and the Pyramid of Menkaure.The pyramids were built during the Fourth Dynasty of ancient Egypt, between around 2600–2500 BC.The pyramids are often considered one of the Seven Wonders of the World.The Great Pyramid of Giza was built by Khufu (Cheops), the second king of Egypt's 4th dynasty."
        />
      </div>
    </main>
  );
}

export default App;
