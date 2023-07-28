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
            <div class="base__wrap">
              <a
                v-for="(question, index) in questions"
                :key="index"
                class="category-item"
                @click="FaqDetail(question.slug)"
              >
                <div class="category-content ">
                  <div class="category-item__title" :title="question.title">
                    {{ question.title }}
                  </div>
                </div>
              </a>
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
import Loading from '@/components/common/Loading.vue';

export default {
  name: 'FaqComponent',
  components: {
    Loading,
    TitleComponent
  },
  data() {
    return {
      items: []
    };
  },
  computed: {
    ...mapGetters('Faq', {
      questions: faqGetters.GET_CURRENT_QUESTIONS
    }),
    ...mapState({
      loading: (state) => state.Faq.loading,
    })
  },
  methods: {
    ...mapActions('Faq', {
      getQuestions: faqActions.GET_CURRENT_QUESTIONS
    }),

    ...mapActions('notification', {
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),
    FaqDetail(slug) {
      this.$router.push({ name: 'FAQDetail', params: { slug: slug } });
    }
  },
  mounted() {
    try {
      this.getQuestions();
    } catch (error) {
      this.setErrorNotification(error);
    }
  }
};
</script>
<style>
.category-item {
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  height: auto;
  justify-content: center;
  min-height: auto;
  padding: 15px 0px;
  text-decoration: none;
}
.category-content {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 40px;
  padding: 0;
  width: calc(100% - 180px);
}
.category-item__title {
  color: #092c9e;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  width: 100%;
}
.author-block {
  align-items: center;
  color: #717a84;
  display: flex;
  font-size: 13px;
  height: 30px;
  justify-content: flex-start;
  width: 180px;
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
</style>
