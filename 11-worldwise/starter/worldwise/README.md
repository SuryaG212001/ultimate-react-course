 # commands in vite:
 - npm create vite@4 - to create app
 - npm install - to insatll node modules
 - npm run dev- to run the app. it runs on http://localhost:5173/
-  we shold also be settingup eslint for every new app that we create using the vite . for this use teh command
npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev
- this command installs the eslint vite-plugin-eslint eslint-config-react-app as dev dependencies
- after this create a file called .eslintrc.json file
- then also import vslint from the vite.config.js 

# command to install react router:
npm install react-router -dom@6
# routing:
- with routing, we match different urls to different ui reviews (react components) : routes
eg: ww.wexample.com/
www.example.com/login
- enables user to navigate between different applictions screens, using the browser URL
- keeps the ui in sync with current URL. the routing that we are talking about is the client side routing and this will be embedded into it. but in react routing is taken care by a third party called raect router
- Single Page Application is teh application that is executed etirely on the client side ie., on the user side only.
- SPA is running on the client side only. the routes are the different urls taht corresponds to different views (components)
- so when a SPA is running on client side and the user clicks a router link then the url is changed. in react react-router package does this job
- changing the url triggers the dom to be update the dom . in SPA reactjs is used to update the do and the page is simply updated. so there will be no page re-render but a simple updatin
- this makes it feel like a native app. durong the dom updation if the react component requires a load data from a web api then we reach out to a server. 
- the SPA though it runs on client side it can connect to separate server to fetch some data.

# application creation
- we use BrowserRouter,Routes and Route to create teh links and to navigate between the pages without any refresh we try to render them using a NavLink 

# styling options for react app
- options in styling a react application:
1. simply apply inline css using style prop. this is scoped to the particular jsx.
2. using CSS or Sass file . here we have an external css file and impart they styling by using the ClassName prop.
 styles are global here any component can haveany style from the file
3. using css modules. here we have one external file per component. here the styles have component scope and we use the className prop to impart the styling.
4. using css-in-javascript file. here we have the styling css inside a JS file. that is the same file where we have defined the components.
5. using a utility-first css like tailwind. where we have predefined utility classes to define individual styles. to make layouts,flexbox, to make hover effects etc., we have separate utility classes without ever having to leave teh jsx markup.
6. using a fully styled ui librabry like MaterialUI, chakra and Mantine 

# css modules
- create the .module.css file and add the import statement to get the styles and use them bu adding it as a prop to the className prop

# react router:
- nested routes: show a part of the iu based on some url. 
- react router provides the extra advantage of making the current active tab as active with out even using any state hooks like useSTate for that