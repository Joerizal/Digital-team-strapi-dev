<script setup>
import "/assets/styles/main.scss";
// Import the runtime config
const config = useRuntimeConfig();

// Fetch footer data from the API
const { data } = await useFetch(`${config.public.strapiUrl}/api/footer`);

// Get footer background URL
const footerBgUrl = computed(() => {
  const footerBg = data.value?.data?.Logo?.find(
    (logo) => logo.Title === "Footer Bg"
  )?.Image[0]?.url;
  return footerBg ? `${config.public.strapiUrl}${footerBg}` : "";
});
</script>

<template>
  <v-footer class="pa-0">
    <v-img :src="footerBgUrl" cover height="100%" width="100%">
      <div class="d-flex flex-column fill-height pa-12">
        <div class="container mx-auto">
          <v-row>
            <!-- Logo and company info -->
            <v-col
              cols="12"
              md="4"
              class="d-flex flex-column align-center align-md-start"
            >
            </v-col>

            <!-- Useful links -->
            <v-col
              v-for="linkSection in data?.data?.Link"
              :key="linkSection.id"
              cols="12"
              md="4"
            >
              <h3 class="font-FFCB34 font-22-900">
                {{ linkSection.Header }}
              </h3>
              <v-list density="compact" bg-color="transparent" class="pa-0">
                <v-list-item
                  v-for="link in linkSection.Links"
                  :key="link.id"
                  :href="
                    linkSection.isLink && link.Link ? link.Link : undefined
                  "
                  :link="linkSection.isLink && link.Link ? true : false"
                  density="compact"
                  class="font-20-800 font-cccccc"
                >
                  <v-list-item-title class="font-20-800 font-cccccc">{{
                    link.Header
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>

            <!-- Social Media Links -->
            <v-col
              cols="12"
              md="4"
              class="d-flex flex-column align-center align-md-start"
            >
              <h3 class="text-h6 font-weight-bold mb-4">
                <template v-if="data?.data?.Logo">
                  <v-img
                    v-if="logo?.Title === 'Seetru Logo'"
                    :key="logo.id"
                    :src="logo.Image?.[0]?.url"
                    alt="Seetru Logo"
                    max-width="200"
                  />
                </template>
              </h3>
              <div class="d-flex gap-4">
                <v-btn
                  v-for="socialLogo in data?.data?.Logo?.filter(
                    (logo) =>
                      logo.Title.includes('logo') &&
                      logo.Title !== 'Seetru Logo' &&
                      logo.Title !== 'Footer Bg'
                  )"
                  :key="socialLogo.id"
                  :href="socialLogo.isLink ? '#' : undefined"
                  icon
                  variant="text"
                  color="white"
                  size="small"
                >
                  <v-img
                    v-if="socialLogo.Image[0]?.url"
                    :src="`${config.public.strapiUrl}${socialLogo.Image[0]?.url}`"
                    width="24"
                    height="24"
                    :alt="socialLogo.Title"
                  ></v-img>
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <!-- Copyright section -->
          <v-divider class="mt-8 border-opacity-25" color="white"></v-divider>
          <div class="text-center mt-4">
            <span class="text-white text-body-2">
              {{ data?.data?.Copyright?.Header }}
            </span>
          </div>
        </div>
      </div>
    </v-img>
  </v-footer>
</template>
