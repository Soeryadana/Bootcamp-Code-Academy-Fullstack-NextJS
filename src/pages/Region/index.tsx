import React, { useEffect, useState } from "react";
import region from "../api/region";
import { useRouter } from "next/router";
import Link from "next/link";
import { DeleteRegionRequest } from "@/redux-saga/action/regionAction";
import { useDispatch } from "react-redux";

export default function Region() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [Region, setRegion] = useState<any[]>([]);

  useEffect(() => {
    region.GetData().then((data) => {
      setRegion(data);
    });
  }, [Region]);

  const handleDelete = async (id: any) => {
    dispatch(DeleteRegionRequest(id));
    window.alert("Data successfully deleted");
  };

  return (
    <div className="flex justify-center flex-col ">
      <h2 className="font-bold text-center text-3xl m-2">List Region</h2>
      <table className="border border-white items-center text-center">
        <thead>
          <tr>
            <th className="border">Region ID</th>
            <th className="border">Region Name</th>
            <th className="border">Region Photo</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {Region &&
            Region.map((item) => {
              return (
                <>
                  <tr key={item.regionId}>
                    <td className="border">{item.regionId}</td>
                    <td className="border">{item.regionName}</td>
                    <td className="border">{item.photo}</td>
                    <td className="border">
                      <Link href={`/Region/${item.regionId}`}>
                        <button className="bg-white text-black p-1 m-1">
                          Update
                        </button>
                      </Link>
                      <button
                        className="bg-white text-black p-1 m-1"
                        onClick={() => handleDelete(item.regionId)}
                      >
                        Delete
                      </button>
                      {/* <button onClick={}>Delete</button> */}
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <Link
        className="bg-white text-black p-1 m-2"
        href="/Region/create"
      >
        Add Region
      </Link>
    </div>
  );
}
