This repo demonstates issues with `<video>` element in PWA/"Home Screen web app" on iOS, namely:

- `video.requestPictureInPicture` does nothing even though `document.pictureInPictureEnabled` is `true`
- Videos playing from `ManagedMediaSource` don't keep the device awake (unless user has [Attention Aware features][1] enabled and _looks at a screen_)
- Full Screen UI issues (iOS 17.4 screenshots of [player in Safari][2] and [player in PWA][3]):
  - Home indicator doesn't hide
  - When changing volume, both player and system volume sliders are displayed
  - On devices with Dynamic Island, "Currently playing" live activity is displayed

---

[Demo][4]

[1]: https://support.apple.com/en-us/102216
[2]: ./images/regular-full-screen.png
[3]: ./images/pwa-full-screen.png
[4]: https://anton.codes/ios-pwa-video-issues/
