import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.cyan.darken2,
        secondary: colors.grey.lighten5,
        accent: colors.lightGreen.base,
      },
    },
  },
});
