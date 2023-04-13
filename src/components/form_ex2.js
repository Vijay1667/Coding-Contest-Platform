import React, { useState } from "react";
export default function Form2() {
    const [score, setScore] = useState("10")
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Feedback Form</legend>
                    <div>
                        <label>Score:</label>
                        <input type="range" min="0" max="10" value={score} onChange={(e) => { setScore(e.target.value) }} />
                    </div>
                    <div>
                        <label>Comment:</label>
                        <textarea />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}