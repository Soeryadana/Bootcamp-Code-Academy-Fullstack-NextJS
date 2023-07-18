import React, { useEffect, useState } from 'react'
import region from '../api/region';
import { useRouter } from 'next/router';
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { UpdateRegionRequest } from "@/redux-saga/action/regionAction";
import Link from 'next/link';

const UpdateForm = () => {
  const dispatch = useDispatch();
  const {push} = useRouter();  
  const router = useRouter();
  let param = router.query.update
  const [Region, setRegion] = useState<any>();
  const [upload, setUpload] = useState(false);
  const [previewImg, setPreviewImage] = useState<any>("");

  useEffect(() => {
    region.GetIdData(param).then((data) => {
      setRegion(data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      file: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("file", values.file);
      dispatch(UpdateRegionRequest(param, payload));
      window.alert("Data Successfully Updated");
      push('/Region')

    },
  });

  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = () => {
      formik.setFieldValue("file", file);
      const result = reader.result;
      setPreviewImage(result?.toLocaleString());
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event: any) => {
    event.preventDefault();
    setPreviewImage(null);
    setUpload(false);
  };

  return (
    <div className="flex justify-center content-center item-center w-full border">
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          // placeholder={Region.regionName}
          value={formik.values.name}
          onChange={formik.handleChange}
          className="text-black placeholder-black"
        ></input>
      </div>
      <div>
        <label>Photo</label>
        <div>
          {upload === false ? (
            <>
              <span>Kosong</span>
            </>
          ) : (
            <>
              <Image
                src={previewImg}
                alt="img"
                width={500}
                height={500}
              ></Image>
              {/* <img src={previewImg} alt="img" /> */}
              <button onClick={() => onClear}>Remove</button>
            </>
          )}
        </div>
        <div>
          <label>
            <label>upload a file</label>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              onChange={uploadConfig("file")}
            ></input>
          </label>
        </div>
        <div className="my-2">
          <button
            className="mx-5 bg-white text-black p-1"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Simpan
          </button>
          {/* <button type="submit" onClick={}> */}
          <Link href="/Region">
            <button className="bg-white text-black p-1" type="submit">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm
