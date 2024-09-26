// import ctfImage from "../../public/eventImages/ctf.webp";
// import daoImage from "../../public/event_dao/1727150681545.jpeg";
// import daoImage2 from "../../public/event_dao/1727150684268.jpeg";

export async function getEvents() {

    const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

    const params = new URLSearchParams({
        populate: "*",
        sort: "date_time:desc",
    })

    // let events = await fetch(`${backendUrl}/api/events?${params}` , {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": "Bearer " + process.env.STRAPI_API_KEY,
    //     },
    //     next: {
    //       revalidate: parseInt(process.env.REVALIDATE) || 0,
    //     }
    //   })

      // events = await events.json()
      // events = events.data
      // sig.attributes.name).join(", ")}
      let events = [{
        "id": 1,
        "attributes": {
          "sigs": {
            "data": [{
              "attributes": {
                "name": ["Workshop"]
              }
            }]
          },
          "title": "Strengthening Cyber Defenses: Navigating Threats and Risks",
          "date_time": "2024-09-27",
          "event_type": "Workshop",
          "location": "COMP Seminar Hall",
          "link": "",
          "cems_link": "",
          "body": `📢 Whoaa! A cyber storm is brewing! 🤯 \n \n No worries! PICT Cyber Cell is back with an electrifying workshop you can't miss! Join us for an exclusive session on:
          
\nTopic: Strengthening Cyber Defenses: Navigating Threats and Risks
\nSpecial Guest: Mr. Santosh Kamane, Cybersecurity and Data Privacy Leader, Founder and CISO of RIVEDIX

\nGet ready for an insightful session as Mr. Santosh Kamane dives into:

\n🔍 Decoding Threat Models
\n⚖ Mastering Risk Management Strategies
\n🌐 Unlocking Cybersecurity Career Pathways

\nThis is your chance to connect with a cybersecurity expert, ask your burning questions, and kickstart your career journey! 🔐

\nFor details and queries, please reach out to:
\n📱 Devendra Ingale: 9420877105
\n📱 Tanmay Shingavi: 7448267050`,
          "cover_images": {
            "data": [{ 
              "attributes": { 
                "url" : "https://codeforces.com/userpic.codeforces.org/3586348/title/743853a044ee9693.jpg"
              }
            }]
          },
          "slider_images": ["", 0]
        }
      },
        {
        "id": 2,
        "attributes": {
          "sigs": {
            "data": [{
              "attributes": {
                "name": ["Workshop"]
              }
            }]
          },
          "title": "PuneDAO Event",
          "date_time": "2024-09-21",
          "event_type": "SIG Workshop",
          "location": "PICT, Pune",
          "link": "",
          "cems_link": "",
          "body": "PuneDAO is an all-inclusive network that strives to create a thriving startup community across the globe. Currently catering to Web3 domain for Pune ecosystem.\n",
          "cover_images": {
            "data": [{ 
              "attributes": { 
                "url" : "https://pbs.twimg.com/profile_images/1679879705686597634/Hwax5JJZ_400x400.jpg"
              }
            }]
          },
          "slider_images": ["event_dao", 6]
        }
      },
    {
      "id": 3,
      "attributes": {
        "sigs":  {
          "data": [{
            "attributes": {
              "name": ["CTF"]
            }
          }]
        },
        "title": "Lakshya CTF",
        "date_time": "2024-07-20",
        "event_type": "CTF",
        "location": "PICT, Pune",
        "link": "",
        "cems_link": "",
        "body": "Lakshya CTF was an awesome event that I sadly missed :(",
        "cover_images":{
          "data": [{
            "attributes": {
              "url": "https://www.hackthebox.com/images/landingv3/mega-menu-login-ctf.png"
            }
          }]
        },
        "slider_images": ["event_ctf", 11]
      }
    },
    {
      "id": 4,
      "attributes": {
        "sigs":  {
          "data": [{
            "attributes": {
              "name": ["Workshop"]
            }
          }]
        },
        "title": "Web Vulnerability Workshop",
        "date_time": "2024-08-20",
        "event_type": "Workshop",
        "location": "PICT, Pune",
        "link": "",
        "cems_link": "",
        "body": "Conducted an introductory workshop for everyone interested in getting started with Cybersecurity! Discussed Linux and Web fundamentals, some hands on activities, and lots of learnings.",
        "cover_images":{
          "data": [{
            "attributes": {
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYSnVJ51Fh4HLmBOoRXMjrwmgxoomOHok3_DJwtrrdoh79_suxKzNQuqNs9umGddQcCg"
            }
          }]
        },
        "slider_images": ["event_webclass", 6]
      }
    }
  ]
      


      return events
}