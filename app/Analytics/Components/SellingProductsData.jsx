import React from 'react'

const SellingProductsData = ({imgURL, productName, price, pieces, stockStatus}) => {
    return (
        <tr>
            <td className="py-3 flex items-center gap-5">{productName}</td>
            <td className="py-3 ">{price}</td>
            <td className="py-3 ">{pieces} pcs</td>
            <td className="py-3 ">{stockStatus ? "On going" : "Completed"}</td>
        </tr>
    )
}

export default SellingProductsData