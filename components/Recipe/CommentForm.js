import React, {useState} from "react";
import axios from 'axios';

export default function CommentForm(props) {

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [content, setContent] = useState("");

  const submitComment = () => {
    axios.post(`http://localhost:1337/comments`, {
      "Content": content,
      "FirstName": first,
      "LastName": last,
      "recipe": props.recipe
    })
  }

  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 bg-almond rounded-lg shadow-lg p-6 lg:px-8 mb-12"
      
    >
      {/* First Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1" htmlFor="fName">
          First Name
        </label>
        <input
          value={first}
          onChange={e => setFirst(e.target.value)}
          className="w-full fStyle py-3 px-6 shadow-md rounded-lg bg-linen"
          type="text"
          name="fName"
          id="fName"
          placeholder="John"
          required
        />
      </div>
      {/* Last Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1" htmlFor="lName">
          Last Name
        </label>
        <input
        value={last}
        onChange={e => setLast(e.target.value)}
          className="w-full fStyle py-3 px-6 shadow-md rounded-lg bg-linen"
          type="text"
          name="lName"
          id="lName"
          placeholder="Doe"
        />
      </div>
      {/* Comment */}
      <div className="flex flex-col md:col-span-2">
        <label className="text-sm font-medium mb-1" htmlFor="commentArea">
          Your Comment
        </label>
        <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
          className="w-full fStyle py-3 px-6 shadow-md rounded-lg bg-linen"
          name="commentArea"
          id="commentArea"
          cols={30}
          rows={5}
          placeholder="Your opinion on the recipe..."
          required
          defaultValue={""}
        />
      </div>
      <div className="md:col-span-2 flex justify-end">
        {/* Post Comment */}
        <div className="flex md:mt-2">
          <button
          onClick={() => submitComment()}
            className="pButton cursor-pointer"
          >Submit</button>
        </div>
      </div>
    </div>
  );
}
