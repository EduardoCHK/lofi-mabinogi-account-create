import React from 'react';

function App() {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className="App">
            <h1>歡迎加入Lo-Fi (hehe) Mabinogi!</h1>
            <form action="/action_page.php">
                <label htmlFor="username">帳號:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                />
                <br />
                <br />
                <label htmlFor="password">密碼:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
                <br />
                <input
                    type="submit"
                    value="確認申請"
                    onClick={async (e) => {
                        try {
                            e.preventDefault();
                            const res = await fetch('./api/AddUser', {
                                method: 'POST',
                                cache: 'no-cache',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ name: name, password: password }),
                            });
                            if (!res.ok) throw new Error(res.status);
                            alert('帳號申請成功!');
                        } catch (e) {
                            console.error(e);
                            alert('Error');
                        }
                    }}
                />
            </form>
        </div>
    );
}

export default App;
