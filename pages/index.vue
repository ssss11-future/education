<template>
  <div>
    <Header />
     
    <!-- EXPLAINER HERO -->
    <b-row class="mt-3">
      <b-col></b-col>
      <b-col cols="9">
       
      </b-col>
      <b-col></b-col>
    </b-row>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <div v-for="post in posts" :key="post.slug" class="mb-5">
              <h3 class="title is-4">
                <nuxt-link :to="post.slug">
                  {{ post.title }}
                </nuxt-link>
              </h3>
              <div>
                {{ post.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTIONS -->
    <b-row class="mt-3">
      Cards with a tagged colour for their section?
      or horizontal scroll per section row?
      or a section heading with list underneath?
      <b-card
        title="What is Web3?"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
        <b-card-text>
          Introduction to Web3. Very basic. No prior knowledge.
        </b-card-text>

        <b-button href="#" variant="primary">LEGGOOOOO</b-button>
      </b-card>
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
  async asyncData ({ $content }) {
    const posts = await $content('articles').sortBy('createdAt', 'desc').fetch()
    return { posts }
  }
}
</script>
