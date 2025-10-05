import React, { useState } from "react";
import toast from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { ChevronLeft } from "lucide-react";

const AdminTopics = ({ setShowAdminTopics }) => {
  const [topicTitle, setTopicTitle] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [files, setFiles] = useState(null);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data prepare (future backend integration)
    const formData = new FormData();
    formData.append("topicTitle", topicTitle);
    formData.append("description", description);
    formData.append("overview", overview);
    if (files) {
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });
    }

    // 👇 এখানে future এ API call করা যাবে
    // try {
    //   const response = await apiInstance.post("/topics", formData);
    //   toast.success("Topic Saved!");
    // } catch (error) {
    //   toast.error("Something went wrong!");
    //   return;
    // }

    // এখন শুধু console + toast
    console.log({ topicTitle, description, overview, files });
    toast.success("Topic Saved!");

    // Reset fields after save
    setTopicTitle("");
    setDescription("");
    setOverview("");
    setFiles(null);
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

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "link",
    "image",
  ];

  return (
    <div className="bg-white rounded-md shadow-md w-full max-w-5xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 gap-3">
        <div className="flex items-center gap-2">
          {infoIcon()}
          <h2 className="text-stone-600 text-base font-medium font-['Poppins']">
            Add Topics
          </h2>
        </div>
        <button
          onClick={() => setShowAdminTopics(false)}
          className="w-20 h-8 bg-gradient-to-r from-sky-500 to-sky-700 rounded-xl text-white text-base font-medium font-['Poppins'] flex items-center justify-center gap-1"
        >
          <ChevronLeft size={16} color="#ffffff" />
          Back
        </button>
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
          <div className="w-full flex flex-col sm:flex-row gap-6">
            {/* Overview */}
            <div className="w-full sm:w-2/3">
              <ReactQuill
                theme="snow"
                value={overview}
                onChange={setOverview}
                modules={modules}
                formats={formats}
                className="bg-white rounded-[10px] [&_.ql-container]:h-[245px] [&_.ql-editor]:h-full [&_.ql-editor]:overflow-y-auto"
              />
            </div>

            {/* Upload */}
            <div className="w-full sm:w-1/3 h-72 bg-white rounded-[10px] border border-neutral-300 p-4 flex flex-col items-center">
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
                        <span className="truncate w-40 text-center">
                          {file.name}
                        </span>
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
  );
};

export default AdminTopics;
