import React from "react";

const CourseOverviewTab = () => (
   <div className="">
          <div className="p-3 sm:p-6">
            {/* Header */}
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-secondary">
                🌍 Immigration & Language Preparation
              </h1>
            </div>

            {/* Course Description */}
            <div className="mb-8">
              <h2 className="font-semibold text-light">Course Description</h2>
              <div className="space-y-4 text-light">
                <p>
                  This comprehensive course is specially designed for
                  individuals planning to immigrate to a new country and seeking
                  to strengthen their language proficiency along the way.
                  Whether you're preparing for visa interviews, citizenship
                  tests, or academic/professional language exams like IELTS,
                  TOEFL, or CELPIP, this course offers the essential tools,
                  strategies, and practice to help you succeed.
                </p>
                <p>
                  The course combines immigration-specific knowledge with
                  language development, helping you build strong communication
                  skills while understanding the legal, cultural, and procedural
                  aspects of relocating abroad. You will gain practical
                  experience in speaking, listening, reading, and writing
                  through real-life scenarios such as job interviews, embassy
                  appointments, and settlement guidance.
                </p>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="mb-8 text-light">
              <h2 className=" font-semibold mb-4">Topics include:</h2>
              <ul className="space-y-2">
                <li>
                  • Understanding immigration requirements and documentation
                </li>
                <li>• Preparing for English proficiency exams</li>
                <li>
                  • Developing fluency and vocabulary for everyday situations
                </li>
                <li>• Learning about cultural adaptation and integration</li>
                <li>
                  • Practicing interview techniques and verbal communication
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                With flexible lessons, expert support, and practical exercises,
                this course empowers you to confidently navigate the immigration
                process and thrive in a new environment—linguistically,
                socially, and professionally.
              </p>
            </div>

            {/* Course Sections */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                📚 Course Sections
              </h2>

              <div className="space-y-6">
                {/* Section 1 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    1. Introduction to Immigration Systems
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>
                      • Overview of immigration categories (student, skilled
                      worker, family, etc.)
                    </li>
                    <li>
                      • Country-specific guidelines (Canada, UK, Australia,
                      etc.)
                    </li>
                    <li>• Documentation and application preparation</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    2. English Language Fundamentals
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>• Grammar and sentence structure refresher</li>
                    <li>• Pronunciation and accent improvement</li>
                    <li>
                      • Essential vocabulary for daily life and formal
                      situations
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    3. IELTS/TOEFL/CELPIP Exam Preparation{" "}
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>• Test formats and scoring systems</li>
                    <li>
                      • Practice tasks for Reading, Writing, Listening &
                      Speaking
                    </li>
                    <li>• Tips and strategies for exam day success</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    4. Communication for Real-life Situations{" "}
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>• Job interview roleplay and resume writing</li>
                    <li>
                      • Conversations at banks, clinics, schools, and government
                      offices
                    </li>
                    <li>• Writing emails, forms, and formal letters</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    5. Cultural Awareness & Integration{" "}
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>• Local laws, norms, and etiquette</li>
                    <li>• Building confidence in social interactions</li>
                    <li>• Local laws, norms, and etiquette</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    6. Mock Interviews & Practice Tests{" "}
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>
                      • Personalized feedback from instructors (if applicable)
                    </li>
                    <li>• Full-length exam simulations</li>
                    <li>
                      • Personalized feedback from instructors (if applicable)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exam Format Overview */}
            <div className="mb-4 *:sm:mb-8">
              <h2 className="text-2xl font-bold text-secondary mb-3 sm:mb-6 flex items-center">
                📝 Exam Format Overview
              </h2>

              <div className="grid md:grid-cols-2">
                {/* Left Column */}
                <div className="border border-b-0 sm:border-b border-gray-200 p-3 sm:p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    IELTS (International English Language Testing System)
                  </h3>

                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      Test Types: IELTS Academic & IELTS General Training <br />
                      Duration: ~2 hours 45 minutes
                    </p>
                    <p>
                      Sections: <br />
                      • Listening: IELTS Listening has 40 questions testing
                      listening skills
                      <br />
                      • Reading: IELTS Reading has 40 questions testing reading
                      skills
                      <br />
                      • Writing: IELTS Writing has 2 sections: 1) describing
                      graphs/charts in 150 words 2) essay writing in 250 words
                      <br />• Speaking: IELTS Speaking has 3 parts: 1)
                      introduction & interview 2) long turn 3) discussion
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="border-x sm:border-r sm:border-l-0 border-gray-200 border-y p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    What is included in this Course?
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• Section-by-section breakdown and tutorials</p>
                    <p>• Practice tests that mimic real exam conditions</p>
                    <p>• Answer explanations and scoring strategies</p>
                    <p>• Time management techniques</p>
                    <p>
                      • Speaking and writing practice with feedback (optional)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
);

export default CourseOverviewTab;
