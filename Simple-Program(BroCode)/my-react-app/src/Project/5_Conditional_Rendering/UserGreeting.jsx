import styles from './UserGreeting.module.css';

function UserGreeting({isLoggedIn, username = "Guest"}) {
    const welcomeMessages = <h2 className={styles.welcomeMessage}>
                            Welcome back, {username}!</h2>;

    const loginPrompts = <h2 className={styles.loginPrompt}>
                         Please log in to continue</h2>

    return (isLoggedIn ? welcomeMessages: loginPrompts)
}

export default UserGreeting