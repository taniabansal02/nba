import React, {useState} from "react";
import { View, Text} from "react-native";
import Splash from "../screens/splash";
import Navigation from "../navigation";

const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    return(
         <Navigation />
    );
};

export default App;