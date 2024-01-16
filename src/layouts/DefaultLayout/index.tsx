import { Header } from "../../components/Header";
import React, {  } from "react";
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from './styles'

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}