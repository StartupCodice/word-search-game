import { NavigationContainer } from "@react-navigation/native";
import { MusicGlobalProvider } from "../../../components/musicContext";
import { StackRoutes } from "./stack.router";

export function Routes(){
    return (
        <MusicGlobalProvider>
          <NavigationContainer>
            <StackRoutes />
            </NavigationContainer>  
          </MusicGlobalProvider>
        
    )
}