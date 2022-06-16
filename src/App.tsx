import React from 'react';

function App() {
    return (
        <div className="App">
            <h1>歡迎加入Lo-Fi (hehe) Mabinogi!</h1>
            <form action="/action_page.php">
                <label htmlFor="username">帳號:</label>
                <input type="text" id="username" name="username" />
                <br />
                <br />
                <label htmlFor="password">密碼:</label>
                <input type="password" id="password" name="password" />
                <br />
                <br />
                <input
                    type="submit"
                    value="確認申請"
                    onClick={async (e) => {
                        e.preventDefault();
                        alert('帳號申請成功!');
                    }}
                />
            </form>
        </div>
    );
}

export default App;
