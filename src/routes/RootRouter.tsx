import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'

export const RootRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
        </Routes>
    )
}
