This repo demonstates issues with `<video>` element in PWA/"Home Screen web app" on iOS, namely:

- `video.requestPictureInPicture` does nothing even though `document.pictureInPictureEnabled` is `true`
- Videos playing from `ManagedMediaSource` don't keep the device awake (unless user has [Attention Aware features](https://support.apple.com/en-us/102216) enabled and _looks at a screen_)

---

[Demo](https://anton.codes/ios-pwa-video-issues/)
