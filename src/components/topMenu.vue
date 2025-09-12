<template>
    <div id="nav" >
      <router-link to="/">Campaigns</router-link>  | 
      <router-link to="/CustomerLayout">Customers</router-link>  |
      <router-link to="/reportLayout">Reports</router-link>  |
      <router-link to="/surveyLayout">Surveys</router-link>  |   
      <router-link to="/adminLayout">Admin</router-link>   |
      <router-link to="/mainLayout">Others</router-link>
  </div>
</template>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 90vw;
  padding: 20px;
  background-color: var(--dark);
}

#nav a {
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  padding: 20px;
  border-radius: 4px;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
  background: rgb(130, 148, 162);

}

h4 {
  font-size: 20px;
}
</style>
