import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ant from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Main from './Screens/Main';
import CustomerDashboard from './Screens/CustomerDashboard';
import Consultant from './Screens/Consultant';
import Schedule from './Screens/Schedule';
import Chat from './Screens/Chat';
import VideoCall from './Screens/VideoCall';
import Payment from './Screens/Payment';
import ConTimeSlot from './Screens/ConTimeSlot';
import PaymentHistory from './Screens/PaymentHistory';
import Services from './Screens/Services';
import Appointments from './Screens/Appointments';
import ConsultantDashboard from './Screens/ConsultantDashboard';
import ConAppt from './Screens/ConAppt';
import Userprofile from './Screens/Userprofile';
import Appt from './Screens/Appt';
import ConVideo from './Screens/ConVideo';
import PayHis from './Screens/PayHis';
import AdminDashboard from './Screens/AdminDashboard';
import AddAdmin from './Screens/AddAdmin';
import Approve from './Screens/Approve';
import UserList from './Screens/UserList';
import LstCon from './Screens/LstCon';
import ServiceLst from './Screens/Serviceslst';
import Transactions from './Screens/Transactions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          // Handle logout here
        }}
      />
    </DrawerContentScrollView>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerStyle: {
        backgroundColor: '#480026',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center'
      },
    }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} options={{ headerShown: false }} />
      <Stack.Screen name="Consultant" component={Consultant} options={{ headerShown: false }} />
      <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      <Stack.Screen name="VideoCall" component={VideoCall} options={{ headerShown: false }} />
      <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
      <Stack.Screen name="ConTimeSlot" component={ConTimeSlot} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentHistory" component={PaymentHistory} options={{ headerShown: false }} />
      <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
      <Stack.Screen name="Appointments" component={Appointments} options={{ headerShown: false }} />
      <Stack.Screen name="ConsultantDashboard" component={ConsultantDashboard} options={{ headerShown: false }} />
      <Stack.Screen name="ConAppt" component={ConAppt} options={{ headerShown: false }} />
      <Stack.Screen name="Userprofile" component={Userprofile} options={{ headerShown: false }} />
      <Stack.Screen name="Appt" component={Appt} options={{ headerShown: false }} />
      <Stack.Screen name="ConVideo" component={ConVideo} options={{ headerShown: false }} />
      <Stack.Screen name="PayHis" component={PayHis} options={{ headerShown: false }} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ headerShown: false }} />
      <Stack.Screen name="AddAdmin" component={AddAdmin} options={{ headerShown: false }} />
      <Stack.Screen name="Approve" component={Approve} options={{ headerShown: false }} />
      <Stack.Screen name="UserList" component={UserList} options={{ headerShown: false }} />
      <Stack.Screen name="LstCon" component={LstCon} options={{ headerShown: false }} />
      <Stack.Screen name="Serviceslst" component={ServiceLst} options={{ headerShown: false }} />
      <Stack.Screen name="Transactions" component={Transactions} options={{ headerShown: false }} />
      {/* Add more screens */}
    </Stack.Navigator>
  );
};

// const SignUp = ({ navigation }) => {
//   // ... Your SignUp component code here ...
// };

// const Login = ({ navigation }) => {
//   // ... Your Login component code here ...
// };

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="Mashwara" component={HomeStackNavigator} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
//
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { useIsFocused, NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import Ant from 'react-native-vector-icons/AntDesign';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import Login from './Screens/Login';
// import SignUp from './Screens/SignUp';
// import Main from './Screens/Main';
// import CustomerDashboard from './Screens/CustomerDashboard';
// import Consultant from './Screens/Consultant';
// import Schedule from './Screens/Schedule';
// import Chat from './Screens/Chat';
// import VideoCall from './Screens/VideoCall';
// import Payment from './Screens/Payment';
// import ConTimeSlot from './Screens/ConTimeSlot';
// import PaymentHistory from './Screens/PaymentHistory';
// import Services from './Screens/Services';
// import Appointments from './Screens/Appointments';
// import ConsultantDashboard from './Screens/ConsultantDashboard';
// import ConAppt from './Screens/ConAppt';
// import Userprofile from './Screens/Userprofile';
// import Appt from './Screens/Appt';
// import ConVideo from './Screens/ConVideo';
// import PayHis from './Screens/PayHis';
// import AdminDashboard from './Screens/AdminDashboard';
// import AddAdmin from './Screens/AddAdmin';
// import Approve from './Screens/Approve';
// import UserList from './Screens/UserList';
// import LstCon from './Screens/LstCon';
// import ServiceLst from './Screens/Serviceslst';
// import Transactions from './Screens/Transactions';
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const AuthStack = createStackNavigator();

// const AuthStackNavigator = () => {
//   return (
//     <AuthStack.Navigator headerMode="none">
//       <AuthStack.Screen name="Login" component={Login} />
//       <AuthStack.Screen name="SignUp" component={SignUp} />
//     </AuthStack.Navigator>
//   );
// }
// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Logout"
//         onPress={() => {
//           // Handle logout here
//         }}
//       />
//     </DrawerContentScrollView>
//   );
// };
// const HomeStackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login" screenOptions={{
//       headerStyle: {
//         backgroundColor: '#480026',
//       },
//       headerTintColor: '#FFFFFF',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         alignSelf: 'center'
//       },
//     }}>
//       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//       <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
//       <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
//       <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} options={{ headerShown: false }} />
//       <Stack.Screen name="Consultant" component={Consultant} options={{ headerShown: false }} />
//       <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
//       <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
//       <Stack.Screen name="VideoCall" component={VideoCall} options={{ headerShown: false }} />
//       <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
//       <Stack.Screen name="ConTimeSlot" component={ConTimeSlot} options={{ headerShown: false }} />
//       <Stack.Screen name="PaymentHistory" component={PaymentHistory} options={{ headerShown: false }} />
//       <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
//       <Stack.Screen name="Appointments" component={Appointments} options={{ headerShown: false }} />
//       <Stack.Screen name="ConsultantDashboard" component={ConsultantDashboard} options={{ headerShown: false }} />
//       <Stack.Screen name="ConAppt" component={ConAppt} options={{ headerShown: false }} />
//       <Stack.Screen name="Userprofile" component={Userprofile} options={{ headerShown: false }} />
//       <Stack.Screen name="Appt" component={Appt} options={{ headerShown: false }} />
//       <Stack.Screen name="ConVideo" component={ConVideo} options={{ headerShown: false }} />
//       <Stack.Screen name="PayHis" component={PayHis} options={{ headerShown: false }} />
//       <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ headerShown: false }} />
//       <Stack.Screen name="AddAdmin" component={AddAdmin} options={{ headerShown: false }} />
//       <Stack.Screen name="Approve" component={Approve} options={{ headerShown: false }} />
//       <Stack.Screen name="UserList" component={UserList} options={{ headerShown: false }} />
//       <Stack.Screen name="LstCon" component={LstCon} options={{ headerShown: false }} />
//       <Stack.Screen name="Serviceslst" component={ServiceLst} options={{ headerShown: false }} />
//       <Stack.Screen name="Transactions" component={Transactions} options={{ headerShown: false }} />
//       {/* Add more screens */}
//       <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// };
// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconComponent;
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home';
//             iconComponent = <FontAwesomeIcon name={iconName} size={size} color={color} />;
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'user' : 'user';
//             iconComponent = <FontAwesomeIcon name={iconName} size={size} color={color} />;
//           } else if (route.name === 'Call') {
//             iconName = focused ? 'phone' : 'phone';
//             iconComponent = <AntDesignIcon name={iconName} size={size} color={color} />;
//           }

//           // Add more tab screens and icons as needed

//           return iconComponent;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={Login} />
//       <Tab.Screen name="Profile" component={SignUp} />
//       <Tab.Screen name="Call" component={VideoCall} />
//       {/* Add more tab screens as needed */}
//     </Tab.Navigator>
//   );
// };


// const App = () => {
//   const userLoggedIn = true; // Set this to true/false based on user login status

//   return (
//     <NavigationContainer>

//       <Drawer.Navigator drawerContent={CustomDrawerContent}>
//         <Drawer.Screen name="Home" component={HomeStackNavigator} />
//         {/* ... (add more screens) */}
//       </Drawer.Navigator>

//     </NavigationContainer>
//   );
// };

// export default App;
// ////////////////////////////////////Redux
