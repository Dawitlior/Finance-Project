import DashboardBox from '@/components/DashboardBox'
import React from 'react'

type Props = {}

const Row2 = (props: Props) => {
    return (
        <>
            <DashboardBox bgcolor="#fff" gridArea="d" ></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="e" ></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="f" ></DashboardBox>
        </>
    )
}

export default Row2