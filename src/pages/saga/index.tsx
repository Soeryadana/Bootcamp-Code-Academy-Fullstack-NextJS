import { GetRegionReq } from '@/redux-saga/action/regionAction'
import React, {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

export default function RegionSaga() {
    const dispatch = useDispatch()
    const {regions} = useSelector((state:any) => state.regionState)
    useEffect(()=> {
        dispatch(GetRegionReq())
    },[])
  return (
    <div>
      <h2>List Region</h2>
      <table>
        <thead>
            <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Region Photo</th>
            </tr>
        </thead>
        <tbody>
            {
                regions && regions.map((item: any) => {
                    return (
                        <>
                        <tr>
                            <th>
                               {item.regionId} 
                            </th>
                            <td>
                                {item.regionName}
                            </td>
                            <td>
                                {item.photo}
                            </td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
