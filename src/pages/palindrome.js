import React, { useState } from "react";

function Palindrome() {
  const [word, setWord] = useState(null);
  const [verify, setVerify] = useState(false);

  function onSubmits(e) {
    e.preventDefault();
    if (palindromes(word)) {
      setVerify("These are palindromes");
    } else {
      setVerify("These are not palindromes");
    }
  }

  function palindromes(str) {
    var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, "");
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  return (
    <div className="container mt-2">
      <div className="container">
        <div className="text-center">
          <h1 className="font-weight-bold">Palindromes Checker</h1>
        </div>
      </div>
      <div className="container mt-5" >
        <form onSubmit={(e)=>onSubmits(e)}>
          <div className="form-group">
            <label htmlFor="wordInput">Input Word you want to check</label>
            <input
              type="text"
              className="form-control"
              id="wordInput"
              placeholder="Input words here"
              onChange={(e) => setWord(e.target.value)}
              required
            />
            
          </div>
          <button
            type="submit"
            //onClick={() => onSubmits()}
            className="btn btn-primary mb-2"
          >
            Submit & Check
          </button>
        </form>
      </div>
      {verify ? <h2 className="font-weight-bold">{verify}</h2> : null}
    </div>
  );
}

export default Palindrome;
