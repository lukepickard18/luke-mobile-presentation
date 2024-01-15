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
It is simple to understand the logic as all that is needed is to import a component, place it within the app's return statement, and wrap it with the ``` <Themeprovider> ```.

This then allows your component to make use of the makeStyles component from the UI library and assign it values based on what theme is selected.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/72d35e77-69f8-4e81-81a4-f307515d9ed9)

The result is:

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/b413fd3e-e2fb-405b-8d1c-f24aa3e1ba02)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/b7ba0cf7-e42b-4fd4-8ad6-5c5835e0c7cb)

#### 2 - AirbnbRating Component.
This next code snippet gives an insight into one of many great and useful components within the library.
*React Native Elements. (n.d.). Retrieved January 15, 2024, from [https://reactnativeelements.com/docs/components/airbnbrating](url)*

This component provides many options for setting up a review system. You can adjust the size and default rating of such a review.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/63c4b6b1-3f5d-4fa4-9f55-8e3ca658f7d1)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/b07d52fb-a93a-480f-8254-4a33a2c793a7)

You can achieve this with the following.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/2954c668-e828-495f-827b-f56e820c4942)

The most impressive feature of this review component is that you can add labels for each level of stars very easily
allowing you to make an interactive and visually appealing component.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/60b837e6-5dbc-4fa7-b44d-cb214bdb3bc3)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/d2c7a0dd-20d2-4aa4-94db-eed266cef45f)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/e775479a-0423-4b09-879e-544002aa93a9)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/e2245179-0efd-4e6a-9416-6c61ae78b551)


#### 3 - Pricing Card Component.
Another wonderfully useful component. The pricing card allows for an extremely appealing layout with simple customization.
*React Native Elements. (n.d.). Retrieved January 15, 2024, from [https://reactnativeelements.com/docs/components/pricingcard](url)*

I have taken the snippet provided from the documentation and slightly modified it as a mock-up for an airline business.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/7916a29a-a506-4f32-ac3c-dc59b84650bd)

This component has great customization due to its simple nature of setting a color, price, title, info, and a button that includes one of the many great icons.
Wrapping this component in a scrollview makes an extremely appealing application come to life. You can also link in the styling with a theme as mentioned before.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/f5da8b7c-adeb-4278-bb1d-ab34695f2991)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/a2ee5bca-18a3-436b-aa30-074703adc9e9)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/158c1781-b0ec-4260-b6ac-88c247ebc9b4)


#### 4 - Bottom Sheet Component. 
The bottom sheet component is in my opinion one of the most useful and versatile ones. It can have many uses.
I have once again slightly modified the provided code snippet. In this scenario, I have used it as an appealing pricing list.
However, it would also be extremely useful for navigation as it is compatible with the onpress hook.
*React Native Elements. (n.d.). Retrieved January 15, 2024, from [https://reactnativeelements.com/docs/components/bottomsheet](url)*

It is a slightly more complex code snippet incorporating a dynamic list array for the bottom sheet. However, this does make it very customizable.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/7e7bd8ce-d2e7-4921-bd11-18b61e40cfdc)

The snippet then simply maps through such a list array to complete the functionality.

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/e0bb16b7-fa00-4724-a6db-37ed5431b48c)

The results:

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/b24b8da1-8ae6-4dfa-8486-2cb7e410f57b)

![image](https://github.com/lukepickard18/luke-mobile-presentation/assets/83677419/711466e9-6d1a-4a8e-802d-7fc55632efec)













