import React from 'react';
import Star from './Star';
import Arrow from './Arrow';

const Entry = ({ index, name, city, rating, feature, latitude, longitude, url }) => {

  return (
    <tr className="hover:bg-sally/10 hover:cursor-pointer duration-75 transition">
        <td className="p-4 border-b border-mcqueen py-3">
          <p className="tabular-nums block font-semibold text-md text-mcqueen">{index}</p>
        </td>
        <td className="p-4 border-b border-mcqueen py-3">
          <p className="block font-regular text-regular text-mcqueen">{name}</p>
        </td>
        <td className="p-4 border-b border-mcqueen py-3">
          <p className="block font-regular text-regular text-mcqueen">{city}</p>
        </td>
        <td className="p-4 border-b border-mcqueen py-3">
          <p className="flex flex-row">
            {rating >= 1 ? <Star selected={true}/> : <Star selected={false}/>}
            {rating >= 2 ? <Star selected={true}/> : <Star selected={false}/>}
            {rating >= 3 ? <Star selected={true}/> : <Star selected={false}/>}
            {rating >= 4 ? <Star selected={true}/> : <Star selected={false}/>}
            {rating >= 5 ? <Star selected={true}/> : <Star selected={false}/>}
          </p>
        </td>
        <td className="p-4 border-b border-mcqueen py-3">
          <p className="block font-regular text-regular text-mcqueen">{feature}</p>
        </td>
        <td className="p-4 border-b border-l border-mcqueen py-3">
          <a href={url} className="flex flex-row justify-between tabular-nums items-center gap-2 font-regular text-regular fill-mcqueen hover:fill-white text-mcqueen bg-sally/50 rounded-sm px-2 hover:bg-mcqueen hover:text-white duration-75 transition">
          {latitude}, {longitude}
          <svg width='15' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
          </svg>
          </a>
        </td>
    </tr>
  );
}

export default Entry;