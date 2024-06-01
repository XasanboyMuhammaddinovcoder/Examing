import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Card from '../components/Card'
import CardTitle from "./CardTitle";

import right from '../assets/arrow__right.svg'
import left from '../assets/arrow_left.svg'
import HomeHero from "./HomeHero";
import { PuffLoader } from "react-spinners";


function Main() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    //Your top mixes
    fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((d) => {
        const slicedData = d.playlists.items.slice(0, 6);
        setData(slicedData);
      })
      .catch((err) => {
        setError(err);
      });


    //Made for you
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((d) => {
        const slicedData = d.playlists.items.slice(0, 6);
        setData1(slicedData);
      })
      .catch((err) => {
        setError(err);
      });

    //Recently played
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((d) => {
        const slicedData = d.playlists.items.slice(0, 6);
        setData2(slicedData);
      })
      .catch((err) => {
        setError(err);
      });

    //Jump back in
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((d) => {
        const slicedData = d.playlists.items.slice(0, 6);
        setData3(slicedData);
      })
      .catch((err) => {
        setError(err);
      });

    //Uniquely yours
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((d) => {
        const slicedData = d.playlists.items.slice(0, 6);
        setData4(slicedData);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const slicedData = data.playlists.items.slice(0, 6);
        setFeatured(slicedData)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (!data) {
    return <div className="flex justify-center mt-96"><PuffLoader color="orange"></PuffLoader></div>;
  }


  return (
    <>
      <div
        className="relative">
        <header
          className="header bg-[#3333A3] w-full">
          <div
            className="nav flex gap-10 px-20 py-10">
            <Link
              className="w-20 h-20 bg-black rounded-[50%] flex justify-center items-center"
              to='/likes'><img
                src={left}
                alt=""
              />
            </Link>
            <Link
              className="w-20 h-20 bg-black rounded-[50%] flex justify-center items-center"
              to='/playlist/37i9dQZF1DWWY64wDtewQt'>
              <img
                src={right}
                alt=""
              />
            </Link>
          </div>
        </header>
        <div
          className="MainHEro">
          <div
            className="px-20">
            <h1
              className="text-white text-[39px]">Good afternoon</h1>
          </div>
          <div
            className="featured__wrraper flex flex-wrap justify-center px-20 gap-8">
            {
              featured.map((el, index) => {
                return (
                  <HomeHero
                    key={index}
                    data={el}>

                  </HomeHero>
                )
              })
            }
          </div>
        </div>
        <div
          className="section">
          <CardTitle
            name={'Your top mixes'}
          >
          </CardTitle>
          <div
            className="justify-center items-center px-20 relative gap-20 w-[100%] bg-[#121212] flex flex-wrap pt-[26px]">
            {data.map((el, index) => (
              <Card
                key={index} data={el}
              >
              </Card>
            ))}
          </div>
          <CardTitle
            name={'Made for you'}
          >
          </CardTitle>
          <div
            className="justify-center items-center px-20 relative gap-20 w-[100%] bg-[#121212] flex flex-wrap pt-[26px]">
            {data1?.map((el, index) => (
              <Card
                key={index}
                data={el}>
              </Card>
            ))}
          </div>
          <CardTitle
            name={'Recently played'}
          >
          </CardTitle>
          <div className="justify-center items-center px-20 relative gap-20 w-[100%] bg-[#121212] flex flex-wrap pt-[26px]">
            {data2?.map((el, index) => (
              <Card
                key={index}
                data={el}>
              </Card>
            ))}
          </div>
          <CardTitle
            name={'Jump back in'}>
          </CardTitle>
          <div
            className="justify-center items-center px-20 relative gap-20 w-[100%] bg-[#121212] flex flex-wrap pt-[26px]">
            {data3?.map((el, index) => (
              <Card
                key={index}
                data={el}>
              </Card>
            ))}
          </div>
          <CardTitle
            name={'Uniquely yours'}
          >
          </CardTitle>
          <div
            className="justify-center items-center px-20 relative gap-20 w-[100%] bg-[#121212] flex flex-wrap pt-[26px] mb-20">
            {data4?.map((el, index) => (
              <Card
                key={index}
                data={el}>
              </Card>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default Main;