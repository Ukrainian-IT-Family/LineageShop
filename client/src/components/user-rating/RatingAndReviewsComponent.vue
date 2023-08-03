<template>
  <div>
    <FullUserRatingComponent
      :userRatings="userRatings"
    ></FullUserRatingComponent>
    <div id="reviews-list">
      <div>
        <UserReviewComponent
          v-for="userRating in userRatings"
          :key="userRating.id"
          :userRating="userRating"
        ></UserReviewComponent>
      </div>
    </div>
  </div>
</template>

<script>
import FullUserRatingComponent from './FullUserRatingComponent';
import UserReviewComponent from './UserReviewComponent';
import _ from 'lodash';

export default {
  name: 'RatingAndReviewsComponent',
  components: {
    FullUserRatingComponent,
    UserReviewComponent
  },
  props: {
    userRatings: Object
  },
  computed: {
    existUserRatings() {
      return !_.isEmpty(this.userRatings);
    }
  }
};
</script>

<style scoped></style>
