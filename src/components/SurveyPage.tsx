import React from "react";

const SurveyPage = () => {
  return (
    <div className="min-h-screen bg-primary py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-primary">
        Telangana Rising 2047 Survey
      </h1>
      <form className="w-full max-w-2xl bg-gray-50 p-8 rounded shadow-md space-y-6">
        {/* Name as per Aadhaar card */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="aadhaarName">
            Name as per Aadhaar card <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="aadhaarName"
            name="aadhaarName"
            type="text"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Age */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="age">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="age"
            name="age"
            type="number"
            min="1"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Email ID */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="email">
            Email ID <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Contact Number */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="contactNumber">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="contactNumber"
            name="contactNumber"
            type="tel"
            pattern="[0-9]{10}"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Profession */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="profession">
            What is your profession? <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="profession"
            name="profession"
            type="text"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Working or Student */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="workOrStudent">
            Are you working or a student?{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            required
            id="workOrStudent"
            name="workOrStudent"
            className="w-full border rounded px-3 py-2 mb-2"
          >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Working">Working</option>
          </select>
          <input
            required
            id="studentOrCompany"
            name="studentOrCompany"
            type="text"
            placeholder="If Student - Mention grade and college/university. If Working - Mention company name."
            className="w-full border rounded px-3 py-2 mt-2"
          />
        </div>
        {/* Sport */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="sport">
            What sport do you play? <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="sport"
            name="sport"
            type="text"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* IPL team */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="iplTeam">
            What is the name of the IPL team based in Telangana?{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="iplTeam"
            name="iplTeam"
            type="text"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Badminton player */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="badmintonPlayer">
            Which Olympic medal-winning badminton player is from Hyderabad?{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="badmintonPlayer"
            name="badmintonPlayer"
            type="text"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Traditional sport */}
        <div>
          <label
            className="block font-semibold mb-1"
            htmlFor="traditionalSport"
          >
            Which traditional sport is popular in rural Telangana and is also
            known as ‘Indian wrestling’? <span className="text-red-500">*</span>
          </label>
          <input
            required
            id="traditionalSport"
            name="traditionalSport"
            type="text"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {/* Famous Dish */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="famousDish">
            Which dish of Hyderabad is famous that you need energy to eat after
            playing sports? <span className="text-red-500">*</span>
            <span className="block text-xs text-gray-500">
              Hint - It is loved by all over the world.
            </span>
          </label>
          <input
            required
            id="famousDish"
            name="famousDish"
            type="text"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded hover:bg-primary/90 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyPage;
