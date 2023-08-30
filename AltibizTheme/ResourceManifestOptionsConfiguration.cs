using Microsoft.Extensions.Options;
using OrchardCore.ResourceManagement;

namespace OrchardCore.Themes.AltibizTheme
{
    public class ResourceManagementOptionsConfiguration : IConfigureOptions<ResourceManagementOptions>
    {
        private static readonly ResourceManifest _manifest;

        static ResourceManagementOptionsConfiguration()
        {
            _manifest = new ResourceManifest();

            _manifest
                .DefineScript("AltibizTheme-bootstrap-bundle")
                .SetCdn("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.js")
                .SetCdnIntegrity("sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p", "sha384-8fq7CZc5BnER+jVlJI2Jafpbn4A9320TKhNJfYP33nneHep7sUg/OD30x7fK09pS")
                .SetVersion("5.1.3");

            _manifest
                .DefineScript("AltibizTheme")
                .SetUrl("~/AltibizTheme/js/scripts.min.js", "~/AltibizTheme/js/scripts.js")
                .SetVersion("7.0.10");

            _manifest
                .DefineStyle("AltibizTheme")
                .SetUrl("~/AltibizTheme/css/theme.min.css", "~/AltibizTheme/css/theme.css")
                .SetVersion("7.0.10");

            _manifest
                .DefineStyle("AltibizTheme-bootstrap-oc")
                .SetDependencies("AltibizTheme")
                .SetUrl("~/AltibizTheme/css/bootstrap-oc.min.css", "~/AltibizTheme/css/bootstrap-oc.css")
                .SetVersion("1.0.0");

            _manifest
                .DefineScript("SwiperScript")
                .SetUrl("~/AltibizTheme/js/swiper-bundle.min.js", "~/AltibizTheme/js/swiper-bundle.js")
                .SetVersion("1.0.0");

            _manifest
                .DefineScript("RellaxScript")
                .SetUrl("~/AltibizTheme/js/rellax.min.js", "~/AltibizTheme/js/rellax.js")
                .SetVersion("1.0.0");
            
            _manifest
                .DefineScript("PolyfillsScript")
                .SetUrl("~/AltibizTheme/js/smooth-scroll.polyfills.min.js", "~/AltibizTheme/js//smooth-scroll.polyfills.js")
                .SetVersion("1.0.0");

            _manifest
                .DefineScript("ThemeScript")
                .SetUrl("~/AltibizTheme/js/theme.min.js", "~/AltibizTheme/js/theme.js")
                .SetVersion("1.0.0");

            _manifest
                .DefineStyle("SwiperStyle")
                .SetUrl("~/AltibizTheme/css/swiper-bundle.min.css", "~/AltibizTheme/css/swiper-bundle.css")
                .SetVersion("7.0.10");

            _manifest
                .DefineStyle("BoxiconsStyle")
                .SetUrl("~/AltibizTheme/css/boxicons.min.css", "~/AltibizTheme/css/boxicons.css")
                .SetVersion("7.0.10");

            _manifest
              .DefineScript("Audio-player")
              .SetUrl("~/AltibizTheme/js/components/audio-player.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Carousel")
              .SetUrl("~/AltibizTheme/js/components/carousel.js")
              .SetVersion("1.0.0");

            _manifest
               .DefineScript("Element-parallax")
               .SetUrl("~/AltibizTheme/js/components/element-parallax.js")
               .SetVersion("1.0.0");

            _manifest
              .DefineScript("Form-validation")
              .SetUrl("~/AltibizTheme/js/components/form-validation.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Gallery")
              .SetUrl("~/AltibizTheme/js/components/gallery.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Hover-animation")
              .SetUrl("~/AltibizTheme/js/components/hover-animation.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Input-formatter")
              .SetUrl("~/AltibizTheme/js/components/input-formatter.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Masonry-grid")
              .SetUrl("~/AltibizTheme/js/components/masonry-grid.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Parallax")
              .SetUrl("~/AltibizTheme/js/components/parallax.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Password-visibility-toggle")
              .SetUrl("~/AltibizTheme/js/components/password-visibility-toggle.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Popover")
              .SetUrl("~/AltibizTheme/js/components/popover.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Price-switch")
              .SetUrl("~/AltibizTheme/js/components/price-switch.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Range-slider")
              .SetUrl("~/AltibizTheme/js/components/range-slider.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Scroll-top-button")
              .SetUrl("~/AltibizTheme/js/components/scroll-top-button.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Smooth-scroll")
              .SetUrl("~/AltibizTheme/js/components/smooth-scroll.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Sticky-navbar")
              .SetUrl("~/AltibizTheme/js/components/sticky-navbar.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Subscription-form")
              .SetUrl("~/AltibizTheme/js/components/subscription-form.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Theme-mode-switch")
              .SetUrl("~/AltibizTheme/js/components/theme-mode-switch.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Toast")
              .SetUrl("~/AltibizTheme/js/components/toast.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Tooltip")
              .SetUrl("~/AltibizTheme/js/components/tooltip.js")
              .SetVersion("1.0.0");

            _manifest
              .DefineScript("Video-button")
              .SetUrl("~/AltibizTheme/js/components/video-button.js")
              .SetVersion("1.0.0");

        }

        public void Configure(ResourceManagementOptions options)
        {
            options.ResourceManifests.Add(_manifest);
        }
    }
}
