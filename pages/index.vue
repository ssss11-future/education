<template>
  <div>
    <Header />
     <a href="blog">Blog post</a>
    <!-- JUMBOTRON -->
    <b-row class="mt-3">
      <b-col></b-col>
      <b-col cols="9">
        <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
          <template #header>BootstrapVue</template>

          <template #lead>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information.
          </template>

          <hr class="my-4">

          <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
          </p>
        </b-jumbotron>
      </b-col>
      <b-col></b-col>
    </b-row>

    <!-- FEATURED REVIEWS -->
    <b-row class="mt-3">
      <b-col></b-col>
      <b-col cols="4">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Spotify">
                <b-card-text>
                  47/100. Find out how Spotify rates across the user agency domains.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="TikTok">
                <b-card-text>
                  11/100. Find out how TikTok rates across the user agency domains.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
    
    <!-- SUMMARY REPORT -->
    <b-row class="mt-5">
      <b-col></b-col>
      <b-col cols="9">
        <h3>Summary Report</h3>
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </b-col>
      <b-col></b-col>
    </b-row>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
      return {
        fields: ['Company', 'Product', 'Rating'],
        items: [
          { Company: "Google", Product: "Gmail", Rating: "23" },
          { Company: "Spotify", Product: "Spotify", Rating: "49" },
          { Company: "Amazon", Product: "Alexa", Rating: "20" },
          { Company: "DanceByte", Product: "TikTok", Rating: "11" },
        ]
      }
  },
}
</script>
