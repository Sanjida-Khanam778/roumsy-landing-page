import React, { useState } from "react";
import toast from "react-hot-toast";

const AdminTopics = () => {
  const [topicTitle, setTopicTitle] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [files, setFiles] = useState(null);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ topicTitle, description, overview, files });
    toast.success("Topic Saved!");
  };

  const infoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z"
      ></path>
      <path
        fill="#189EFE"
        d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
      ></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-md shadow-md w-full max-w-5xl p-6">
        {/* Header */}
        <div className="flex items-center mb-6 gap-3">
          {infoIcon()}
          <h2 className="text-stone-600 text-base font-medium font-['Poppins']">
            Add Topics
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="">
          {/* Title & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2.5 justify-start text-black text-sm font-medium font-['Poppins']">
                Topic Title *
              </label>
              <input
                type="text"
                value={topicTitle}
                onChange={(e) => setTopicTitle(e.target.value)}
                className="w-full p-2 h-10 bg-white rounded-[10px] border border-stone-300"
              />
            </div>
            <div>
              <label className="block mb-2.5 justify-start text-black text-sm font-medium font-['Poppins']">
                Description *
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 h-10 bg-white rounded-[10px] border border-stone-300"
              />
            </div>
          </div>
          <div className="mt-14">
            <h1 className="justify-start text-black text-sm font-medium font-['Poppins'] mb-2">
              Overview
            </h1>
            {/* Overview & Upload */}
            <div className="w-full flex gap-6">
              {/* Overview */}
              <div className="w-2/3">
                <textarea
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                  className="w-full h-72 bg-white rounded-[10px] border border-neutral-300 p-3"
                  placeholder="Write overview here..."
                ></textarea>
              </div>

              {/* Upload */}
              <div className="w-1/3 h-72 bg-white rounded-[10px] border border-neutral-300 p-4 flex flex-col items-center">
                <h3 className="text-lg font-medium mb-3">Upload</h3>

                {/* Upload Box */}
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 w-full text-center mb-3 flex-1 flex items-center justify-center">
                  {!files ? (
                    <p className="text-gray-500">
                      Drag & drop files or{" "}
                      <label className="text-blue-600 cursor-pointer">
                        Browse
                        <input
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          className="hidden"
                          id="fileInput"
                        />
                      </label>
                    </p>
                  ) : (
                    <div className="w-full space-y-2 max-h-full overflow-y-auto">
                      {Array.from(files).map((file, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 px-3 py-1 rounded-md text-base text-gray-700"
                        >
                          <span className="truncate w-40 text-center">{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Save Button */}
          <div className="flex justify-center items-center mt-7">
            <button className="px-14 py-2 bg-gradient-to-r from-sky-500 to-sky-700 rounded-xl justify-start text-white text-xl font-medium font-['Poppins'] leading-loose">
              Save Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminTopics;
