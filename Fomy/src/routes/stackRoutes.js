import { createNativeStackNavigator} from '@react-navigation/native-stack';
import  {Home}  from '../pages/home';

const Stack = createNativeStackNavigator();

export function StackRoutes () {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name = "Home" 
            component= {Home}
            options = {{
                headerShown : false
            }}
            />
        </Stack.Navigator>

    )
}
