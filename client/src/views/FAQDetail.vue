<template>
  <div>
    <TitleComponent>FAQ</TitleComponent>
    <div v-if="loading" class="d-flex justify-content-center">
      <Loading/>
    </div>
    <div v-else>
      <div>
        <div class="exp-content">
          <div class="exp-content__edit">
            <div class="base__detail">
              <p class="data link" @click="back">Назад</p>
              <h3>{{ title }}</h3>
              <h4></h4>
              <div v-html="description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex';
import TitleComponent from '@/components/main-layout-blocks/title/TitleComponent';
import * as faqGetters from '@/store/modules/faq/types/getters';
import * as faqActions from '@/store/modules/faq/types/actions';
import * as notificationActions from '@/store/modules/notification/types/actions';
import { integer } from 'vuelidate/lib/validators';
import Loading from '@/components/common/Loading.vue';

export default {
  name: 'FaqDetailComponent',
  props: {
    id: integer
  },
  components: {
    Loading,
    TitleComponent
  },
  computed: {
    ...mapGetters('Faq', {
      question: faqGetters.GET_CURRENT_QUESTION
    }),
    ...mapState({
      loading: (state) => state.Faq.loading,
    }),
    title() {
      return this.question ? this.question.title : '';
    },
    description() {
      return this.question ? this.question.description : '';
    }
  },
  methods: {
    ...mapActions('Faq', {
      getQuestion: faqActions.GET_CURRENT_QUESTION
    }),

    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),
    back() {
      this.$router.push({ name: 'FAQ' });
    }
  },
  mounted() {
    try {
      this.getQuestion(this.$route.params.slug);
    } catch (error) {
      this.setErrorNotification(error);
    }
  }
};
</script>
<style scoped>
h3 {
  color: #0a243f;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
}
.exp-content {
  background: #f1f6fa;
  color: #0a243f;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  letter-spacing: -0.015em;
  line-height: 1.4;
  margin: 0;
  min-width: 320px;
}
.base__detail {
  padding: 30px;
}
.link {
  cursor: pointer;
}
</style>
