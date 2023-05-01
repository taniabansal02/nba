import React, {useState} from "react";
import { View, Text} from "react-native";
import Splash from "../screens/splash";
import Navigation from "../navigation";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    return(
        <QueryClientProvider client={queryClient}>
            <Navigation />
        </QueryClientProvider>
         
    );
};

export default App;