// This component will have a search input that holds the name of the person taking the quiz for personalization

import { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export default function UserForm() {

    const [inputName, setInputName] = useState("");
    const { setName } = useContext(UserContext);
    
    function handleSubmit(event) {
        event.preventDefault();
        setName(inputName);
        window.history.pushState({}, '', '/quiz');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name:</label>
          <input
            id="name"
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button type="submit">Start Quiz</button>
        </form>
    );
}