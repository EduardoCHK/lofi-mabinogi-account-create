import React from 'react';

function App() {
    return (
        <div className="App">
            <form action="/action_page.php">
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" />
                <br />
                <br />
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" />
                <br />
                <br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={async (e) => {
                        e.preventDefault();
                        alert('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
                    }}
                />
            </form>
        </div>
    );
}

export default App;
