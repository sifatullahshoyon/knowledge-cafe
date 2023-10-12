import React from "react";

const SingleData = (props) => {
  console.log(props);
  const { title, image, profile, beginners, programming, Mark_as_read } =
    props.singleData;
  return (
    <div>
      <div className="card-compact w-full bg-base-100">
        <figure>
          <img className="rounded" src={image} alt="programming img" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between my-8">
            <div className="flex justify-center items-center gap-6">
              <div>
                <img src={profile.img} alt="" />
              </div>
              <div>
                <h4 className="font-exo text-2xl text-black font-bold">{profile.name}</h4>
                <p>
                  <small>{profile.published_in}</small>
                </p>
              </div>
            </div>
            <div>
              <p>
                <small>{profile.read}</small>
              </p>
            </div>
          </div>
          <h2 className="card-title mb-4">{title}</h2>
          <div className="flex gap-2 mb-5">
            <span>{beginners}</span>
            <span>{programming}</span>
          </div>
          <p>{Mark_as_read}</p>
          <hr className="my-8" />
        </div>
      </div>
    </div>
  );
};

export default SingleData;
