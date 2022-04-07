import React from "react"
import { Routes , Route } from "react-router-dom"
import {FeaturesPage, ProductsPage, SalesPage, CustomersPage, LoginPage} from "../../../pages"
import Home from '../../../pages'

const Switcher = () => (
    <Routes>
        <Route path='/features'>
            <FeaturesPage />
        </Route>
        <Route path="/products">
            <ProductsPage />
        </Route>
        <Route path="/customers">
            <CustomersPage />
        </Route>
        <Route path="/sales">
            <SalesPage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Routes>)

export default Switcher