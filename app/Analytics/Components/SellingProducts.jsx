import React from 'react'
import SellingProductsData from './SellingProductsData'

const SellingProducts = () => {
    return (
        <table className="table-auto w-full mt-7">
            <thead className="text-sm">
                <tr className="text-gray-400 border-b-2 text-sm font-semibold font-[300]">
                    <th className="py-3 text-start ">Activity</th>
                    <th className="py-3 text-start ">Duration</th>
                    <th className="py-3 text-start ">Streak</th>
                    <th className="py-3 text-start ">Status</th>
                </tr>
            </thead>
            <tbody>
                <SellingProductsData  productName="Run" price="2 hr" pieces="20 Days" stockStatus={false} />
                <SellingProductsData  productName="Meditate" price="2 hr" pieces="19 Days" stockStatus={true} />
                <SellingProductsData  productName="Eat Healthy" price="2 hr" pieces="20 Days" stockStatus={true} />
            </tbody>
        </table>
    )
}

export default SellingProducts