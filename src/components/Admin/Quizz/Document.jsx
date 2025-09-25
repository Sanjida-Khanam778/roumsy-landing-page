import { ChevronDown, Info } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export const Document = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  const [documentTitle, setDocumentTitle] = useState("");
  const [document, setDocument] = useState("");

  // ✅ New States for file upload
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);

  const fileInputRef = useRef(null);

  const topics = [
    "Immigration & Language Preparation",
    "Project Management",
    "Tech & Development",
    "Office Tools",
    "Office Productivity",
    "Personal Development",
    "Lifestyle",
    "Photography & Video",
  ];

  // Trigger file input click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file select
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      setUploadedFiles((prev) => [...prev, selectedFile]);
      setSelectedFile(null);
    }
  };

  // Handle delete (with confirmation modal)
  const deleteFile = (index) => {
    setConfirmDeleteIndex(index);
  };

  const confirmDelete = () => {
    setUploadedFiles((prev) =>
      prev.filter((_, idx) => idx !== confirmDeleteIndex)
    );
    setConfirmDeleteIndex(null);
  };

  const cancelDelete = () => {
    setConfirmDeleteIndex(null);
  };

  // ✅ Handle Save (reset everything)
  const handleSave = () => {
    // ✅ Validation: check if fields are empty
     if (!documentTitle.trim() || !selectedTopic.trim() || !document.trim() || uploadedFiles.length === 0) {
    toast.error("Please fill out all fields and upload at least one file before saving");
    return;
  }
    console.log("Saved:", {
      documentTitle,
      selectedTopic,
      document,
      uploadedFiles,
    });
    toast.success("File saved successfully!");
    // Reset all fields
    setDocumentTitle("");
    setSelectedTopic("");
    setDocument("");
    setUploadedFiles([]);
  };

  return (
    <div className="bg-white p-6 rounded-md">
      {/* Header */}
      <div className="mb-2">
        <div className="flex items-center gap-3 mb-1">
          <Info size={20} color="#1E90FF" />
          <h1 className="text-base font-medium text-black">Documents Upload</h1>
        </div>
        <p className="text-gray-600 ml-8 font-normal text-xs">
          Set up the fundamental details of your quiz
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-extralight text-black mb-2">
            Documents title
          </label>
          <input
            type="text"
            value={documentTitle}
            onChange={(e) => setDocumentTitle(e.target.value)}
            className="w-full px-3 py-2 border border-[#BCBCBC] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder=""
          />
        </div>

        {/* Topic Dropdown */}
        <div className="relative">
          <label className="block text-sm font-extralight text-black mb-2">
            Topic *
          </label>
          <button
            onClick={() => setShowTopicDropdown(!showTopicDropdown)}
            className="w-full px-3 py-2 border border-[#BCBCBC] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white text-left flex items-center justify-between"
          >
            <span className={selectedTopic ? "text-gray-900" : "text-gray-400"}>
              {selectedTopic || "Select topic..."}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform ${
                showTopicDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showTopicDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#BCBCBC] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {topics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedTopic(topic);
                    setShowTopicDropdown(false);
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors text-sm"
                >
                  {topic}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upload Documents Section */}
      <div className="mt-2 bg-gray-50 rounded-lg py-6">
        <h4 className="text-base font-medium text-black mb-4">
          Upload Documents
        </h4>
        <div className="flex items-center relative">
          {/* Hidden input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-600 rounded-md text-white w-32 h-10 py-2 font-medium absolute top-2"
          >
            Choose File
          </button>
          <div className="text-sm text-[#000] border border-[#BCBCBC] rounded-md w-full h-10 bg-white pl-36 mt-2 pt-2.5">
            {selectedFile ? selectedFile.name : "No file chosen"}
          </div>
        </div>
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          className="w-full bg-gradient-to-r from-[#189EFE] to-[#0E5F98] text-white py-2 px-4 rounded-lg text-base font-medium mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Upload
        </button>
      </div>

      {/* Uploaded Documents List */}
      {uploadedFiles.length > 0 && (
        <div className="bg-white rounded-lg p-6 mt-4">
          <div className="flex items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              Uploaded Documents
            </h3>
          </div>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-[#DBDBDB] bg-white p-4 rounded-md"
              >
                <span className="text-base text-black">{file.name}</span>
                <button
                  onClick={() => deleteFile(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Document Information */}
      <div className="mt-2">
        <label className="block text-sm font-extralight text-black mb-2">
          Document Information
        </label>
        <textarea
          value={document}
          onChange={(e) => setDocument(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-[#BCBCBC] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
          placeholder=""
        />
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={handleSave}
          className="w-80 bg-gradient-to-r from-[#189EFE] to-[#0E5F98] text-white text-base py-2 px-4 rounded-lg font-normal transition-colors flex items-center justify-center"
        >
          Save
        </button>
      </div>

      {/* Confirm Delete Modal */}
      {confirmDeleteIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Are you sure you want to delete this file?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
