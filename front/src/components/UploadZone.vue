<template>
  <div id="upload_zone"
       class="upload_zone"
       :class="[entered && 'upload_zone_enter']"
       @click="click"
       @dragenter.stop.prevent="dragenter"
       @dragover.stop.prevent="dragover"
       @drop.stop.prevent="drop"
       @dragleave.stop.prevent="dragleave">
    <input ref="fileElem"
           type="file"
           accept="image/*"
           class="hidden"
           @change="handleFiles($event.target.files)">
    <slot>
      請將要上傳的圖片拖曳至此
    </slot>
  </div>
</template>

<script>
export default {
  name: "UploadZone",
  methods: {
    dragenter() {
      this.entered = true;
    },
    dragover() {
    },
    click() {
      this.$refs['fileElem'].click();
    },
    drop(e) {

      const dt = e.dataTransfer;
      const files = dt.files; // 取得被拖曳的圖片

      this.handleFiles(files);
      this.entered = false;
    },
    dragleave() {
      this.entered = false;
    },
    handleFiles(files) {

      const file = files[0];
      const imageType = /image.*/;

      if (!file.type.match(imageType)) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (e => {
        const base64 = e.target.result;
        this.$emit('addImgUrl', base64);
      });
      reader.readAsDataURL(file);
    }
  },
  data() {
    return {
      entered: false,
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}

.upload_zone {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
}

.upload_zone_enter {
  border: 10px dashed black;
  background-clip: content-box;
}
</style>
