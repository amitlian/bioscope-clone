import React from 'react';
import "../HomescreenFolder/HomeScreen.css"
import Nav from "../NavFolder/Nav"
import Banner from "../BannerFolder/Banner"
import requests from "../requests"
import Row from "../RowFolder/Row"
import MiddleBanner from "../MiddleBannerFolder/MiddleBanner"


function HomeScreen() {
    return(
        <div className="homescreen">
         <Nav/>
          <Banner/>
          {/* row parts */}
          <Row
            title="BIOSCOPE ORIGINALS"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow 
            />
            <Row
            title="Top Rated"
            fetchUrl = {requests.fetchTopRated}
            isLargeRow 
            />
            <Row
            title="Action Movies"
            fetchUrl = {requests.fetchActionMovies}
            isLargeRow 
            />
            {/* middle banner parts */}
            <MiddleBanner/>

            {/* row parts again */}
            <Row
            title="Comedy Movies"
            fetchUrl = {requests.fetchComedyMovies}
            isLargeRow 
            />
            <Row
            title="Horror Movies"
            fetchUrl = {requests.fetchHorrorMovies}
            isLargeRow 
            />
            <Row
            title="Romance Movies"
            fetchUrl = {requests.fetchRomanceMovies}
            isLargeRow 
            />
            <Row
            title="Documentaries"
            fetchUrl = {requests.fetchDocumentaries}
            isLargeRow 
            />

    </div>

    )

}
export default HomeScreen