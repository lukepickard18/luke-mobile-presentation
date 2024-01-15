# luke-mobile-presentation

## UI Library Of Choice - React Native Elements.

### Overview - A Brief Description of React Native Elements.
In my own words React Native Elements is a set of components like buttons and inputs that allow you to build your app more efficiently.
The Library drastically reduces the need for multiple libraries as the components are supported on both Android and IOS.
It is a toolbox of useful parts and components for your desired application, that specializes in cross-compatibility.

In The words of React Native Elements official documentation, "The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native.
There are many great ui components made by developers all around open source. React Native Elements takes the hassle of assembling these packages together by giving
you a ready made kit with consistent api and look and feel. *"React Native Elements. (n.d.). The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native.
Retrieved 15/01/2024, from [https://reactnativeelements.com/docs](url).*

### How to install React Native Elements.
Step 1: Setup Your environment/terminal. (I use Visual Studio Code, Expo and a Git Bash Terminal).

Step 2: Install the Stable Version of rneui.
``` npm install @rneui/themed @rneui/base ```

Step 3: Install Peer dependencies. Note: This step can be skipped if you are using Expo or Create-react-native-app
as they already contain such dependencies by default.
``` npm install react-native-vector-icons ``` 

Step 4: Install safe area context.
``` npm install react-native-safe-area-context ```

Note: ![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/9de49f92-ce8e-42a4-b224-0909debd103d)

Step 5: Create a project. If you have an existing project simply install the package and its dependencies as above.
If you are trying to create a new project use the following for a React Native Elements template.
``` npx create-expo-app --template @rneui/template ``` 

*React Native Elements. (n.d.). Installation. Retrieved January 15, 2024, from [https://reactnativeelements.com/docs/installation](url)*

## Code Examples.

#### 1 - The Provided Template.
To start off I will be discussing the template that React Native Elements provides for creating a new expo app.
It is simple yet displays one of the best features of such library. The theme.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/00fa910a-44bb-4247-8e6b-61004a5c02c3)

As you can see in the image above it is a simple layout using View, Text, and Button components. However, notice the function
'handleOnPress'. It utilizes the useThemeMode hook to toggle between a light and dark mode.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/c82a2e76-dbe6-4275-bd40-e24ea1283a4c)

In the above image, it shows how the theme is initialized. The constant variable 'theme' can withhold styling and color values for each theme.
In this example the objects are empty and the colours are defaulted to black and white themes - which can sometimes be all you need.
It is simple to understand the logic as all that is needed is to import a component, place it within the app's return statement, and wrap it with the <Themeprovider>.

This then allows your component to make use of the makeStyles component from the UI library and assign it values based on what theme is selected.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/72d35e77-69f8-4e81-81a4-f307515d9ed9)

The result is:

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/b413fd3e-e2fb-405b-8d1c-f24aa3e1ba02)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/b7ba0cf7-e42b-4fd4-8ad6-5c5835e0c7cb)



