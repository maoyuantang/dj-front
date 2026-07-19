<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { installRouteGuard } from "@/router/guard";
onLaunch(() => {
  installRouteGuard();
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style lang="scss">
/* stylelint-disable-next-line import-notation, scss/load-partial-extension -- uni-app alias resolution needs it. */
@import "@/styles/shop.scss";
</style>
