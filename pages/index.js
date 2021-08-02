import { useRef } from "react";

const HomePage = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // { email: 'test@test.com', text: 'Some feedback text' }

  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">あなたのメールアドレス</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">あなたのfeedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} ></textarea>
        </div>
        <button>送信 feedback</button>
      </form>
    </div>
  );
}

export default HomePage;