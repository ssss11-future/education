<template>
  <div class="root d-flex h-100 text-center text-white">

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

      <Header />

      <main class="main px-3">
        <h1>About</h1>
        <p class="lead">Agency report exists to serve inividuals by empowering them to make better choices in which products and services they use.</p>
        
       
      </main>

      <Footer />

    </div>
  </div>
</template>

<script>


export default {
  name: 'AboutPage',
  data() {
      return {
      }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    console.dir(this.$route);
  },
  methods: {
    
  }
}
</script>
<style>

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; 
}

body {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 58em;
}

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

.header {
  margin-bottom: 100px;
}

.header .title {
    float: left !important;
}

.header .menu {
    float: right !important;
}

.main {
  margin-bottom: 100px;
  text-align: center !important;
}

.footer {
  text-align: center !important;
}

.root {
  background-color: #212529;
}

h1, .lead {
  margin-bottom: 30px;
}

.details {
  margin-top: 100px;
}
</style>
