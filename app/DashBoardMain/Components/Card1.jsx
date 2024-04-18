import React from 'react';

const Card1 = () => {
  return (
    <div className="lg:w-[40%] w-[90%] rounded-2xl drop-shadow-2xl overflow-hidden my-2 bg-white px-5 py-5">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Top Exercise</div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-2 text-left text-gray-500">#</th>
            <th className="px-4 py-2 text-left text-gray-500">Name</th>
            <th className="px-4 py-2 text-left text-gray-500">Benefit</th>
            <th className="px-4 py-2 text-left text-gray-500">Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-black-500">01</td>
            <td className="px-4 py-2 text-black-500">Abs</td>
            <td colSpan="2" className="px-4 py-2">
              <img className="w-full" src="/line1.png" alt="Placeholder" />
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-black-500">02</td>
            <td className="px-4 py-2 text-black-500">Legs</td>
            <td colSpan="2" className="px-4 py-2">
              <img className="w-full" src="/line2.png" alt="Placeholder" />
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-black-500">03</td>
            <td className="px-4 py-2 text-black-500">Biceps</td>
            <td colSpan="2" className="px-4 py-2">
              <img className="w-full" src="/line3.png" alt="Placeholder" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-black-500">04</td>
            <td className="px-4 py-2 text-black-500">Chest</td>
            <td colSpan="2" className="px-4 py-2">
              <img className="w-full" src="/line4.png" alt="Placeholder" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Card1;
