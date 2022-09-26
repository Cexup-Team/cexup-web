<template>
  <div class="relative">
    <div ref="jitsiContainer" class="w-screen h-screen"></div>
    <div class="absolute z-50 left-4 bottom-4">
      <button class="py-2 px-3 bg-red-550 font-poppins font-semibold text-sm text-white rounded-lg">Back</button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    domain: {
      type: String,
      default: 'room.cexup.com'
    },
    options: {
      type: Object,
      default: () => ({
        roomName: JSON.parse(sessionStorage.getItem('cexup-meet')).id,
        userInfo: {
            email:JSON.parse(sessionStorage.getItem('cexup-meet')).email,
            displayName: JSON.parse(sessionStorage.getItem('cexup-meet')).name
        },
      }),
    },
  },
  mounted () {
    this.loadScript('https://meet.jit.si/external_api.js', () => {
      if (!window.JitsiMeetExternalAPI) throw new Error('Jitsi Meet API not loaded');
      this.embedJitsiWidget();
    });
  },
  beforeDestroy () {
    this.removeJitsiWidget();
  },
  methods: {
    loadScript (src, cb) {
      const scriptEl = document.createElement('script');
      scriptEl.src = src;
      scriptEl.async = 1;
      document.querySelector('head').appendChild(scriptEl);
      scriptEl.addEventListener('load', cb);
    },
    embedJitsiWidget () {
      const options = {
        ...this.options,
        parentNode: this.$refs.jitsiContainer,
      };
      this.jitsiApi = new window.JitsiMeetExternalAPI(this.domain, options);
    },
    executeCommand (command, ...value) {
      this.jitsiApi.executeCommand(command, ...value);
    },
    addEventListener (event, fn) {
      this.jitsiApi.on(event, fn);
    },
    removeJitsiWidget () {
      if (this.jitsiApi) this.jitsiApi.dispose();
    },
  }
};
</script>
