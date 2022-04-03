import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
    enabled: true,
    animation: splashAnimation,
    duration: 2000
};

const illustration = {
    animated: true
};

const greeting = {
    username: "Shivam Narula",
    title: "Hi all, I'm Shivam",
    subTitle: emoji(
        "A passionate DevOps Engineer 🚀 "
    ),
    displayGreeting: true
}

export {
    splashScreen,
    illustration,
    greeting
};