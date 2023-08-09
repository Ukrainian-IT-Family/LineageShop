<template>
  <div class="m-3 m-md-0">
    <TitleComponent>{{ $t('changeAvatar.changeAvatar') }}</TitleComponent>
    <BContainer>
      <BRow>
        <BCol md="3" ld="12">
          <BImg :src="authUser.userPhoto" class="mw-200" alt="" center @click="selectImage"></BImg>
          <p class="mt-2 text-center" @click="selectImage">
            <b>{{ image ? image.name : $t("changeAvatar.chooseAvatar") + ' (jpeg, png, 5MB)' }}</b>
          </p>
          <input
              type="file"
              @input="pickFile"
              class="d-none"
              ref="fileInput"
              accept=".jpg, .png, .jpeg"
          />
          <BButton variant="secondary" block @click="uploadAvatar">
            {{ $t("changeAvatar.saveAvatar") }}
          </BButton>
        </BCol>
      </BRow>
    </BContainer>

  </div>
</template>

<script>
import TitleComponent from '@/components/main-layout-blocks/title/TitleComponent';
import * as notificationActions from '@/store/modules/notification/types/actions';
import * as authGetters from '@/store/modules/auth/types/getters';
import * as userAction from '@/store/modules/user/types/actions';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'ChangeAvatar',
  components: {
    TitleComponent
  },
  data() {
    return {
      image: null,
      preview: null,
    };
  },
  computed: {
    ...mapGetters('AuthService', {
      authUser: authGetters.GET_LOGGED_USER
    })
  },
  methods: {
    ...mapActions('notification', {
      setSuccessNotification: notificationActions.SET_SUCCESS_NOTIFICATION,
      setErrorNotification: notificationActions.SET_ERROR_NOTIFICATION
    }),
    ...mapActions('User', {
      changeUserAvatar: userAction.CHANGE_USER_AVATAR
    }),
    selectImage() {
      this.$refs['fileInput'].click();
    },

    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = e => {
          this.preview = e.target.result;
          this.authUser.userPhoto = this.preview;
          this.image = file[0];
        };
        reader.readAsDataURL(file[0]);
        this.$emit('fileInput', file[0]);
      }
    },
    async uploadAvatar() {
      try {
        await this.changeUserAvatar(this.image);
        this.image = null;
        this.authUser.userPhoto = this.preview;
        this.preview = null;
      } catch (error) {
        this.image = null;
        this.preview = null;
        this.authUser.userPhoto = null;
      }
    },
  }
};
</script>

<style scoped>
  .mw-200 {
    max-width: 200px;
  }
</style>

