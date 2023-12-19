import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPages, HeroPage, MarvelPages, SearchPages } from "../pages";



export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="marvel" element = { <MarvelPages/> }/>
                <Route path="dc" element = { <DcPages/> }/>
                <Route path="search" element = { <SearchPages/> }/>
                <Route path="hero/:heroeId" element = { <HeroPage/> }/>
                
                {/* Search, Hero by id */}
                <Route path="/" element = { <Navigate to = "marvel"/> }/>
            </Routes>
        </div>
    </>
  )
}
