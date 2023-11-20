import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.router";

export function Routes(){
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}