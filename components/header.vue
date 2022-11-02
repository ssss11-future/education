<template>
    <b-navbar toggleable="sm" class="navbar navbar-dark bg-dark" sticky>

        <!-- BRANDING -->
        <b-navbar-brand tag="h1" class="mb-0" href="https://agencyreport.org">
          <b-img src="https://placekitten.com/g/30/30" alt="Kitten"></b-img>
          <span class="brand-title">Agency Report</span>
        </b-navbar-brand>

        <!--<b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
          
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Dashboard</b-nav-item>
            <b-nav-item href="#">Education</b-nav-item>
          </b-navbar-nav>
        </b-collapse>-->

    </b-navbar>
</template>

<!--<template>
  <header class="header">
    <div>
      <h3 class="title  float-md-start mb-0"><a href="/">Agency Report</a></h3>
      <nav class="menu nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link" href="/about" :active="$route.path == 'about'">About</a>
        <a class="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>
</template>-->

<script>
export default {
  name: 'Header'
}
</script>
<style>
  .brand-title {
    margin-left: 10px;
  }
  .navbar a {
    text-decoration: none;
  }
</style>
