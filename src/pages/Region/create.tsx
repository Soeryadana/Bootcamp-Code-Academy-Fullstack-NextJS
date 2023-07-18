import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { AddRegionRequest } from "@/redux-saga/action/regionAction";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const {push} = useRouter();  
  const dispatch = useDispatch();
  const [upload, setUpload] = useState(false);
  const [previewImg, setPreviewImage] = useState<any>("");

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
      dispatch(AddRegionRequest(payload));
      window.alert("Data Successfully Insert");
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
    <div className="flex justify-center content-center item-center w-full">
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="text-black"
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
  );
};

export default CreateForm;
